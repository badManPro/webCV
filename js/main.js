// 添加offset类来控制简历模块移动动画效果
let specialTags = document.querySelectorAll('[data-x]')
for(let i=0;i<specialTags.length; i++){
    specialTags[i].classList.add('offset')
}

findClosest()
// 监听网页滚动Y轴坐标，调整导航栏的样式
window.onscroll = function(changebar){
    if(window.scrollY > 0) {
        topNavbar.classList.add('sticky');
    }else {
        topNavbar.classList.remove('sticky');
    }
    findClosest();
}

let liTags = document.querySelectorAll('nav > ul > li');
for(let i = 0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(showline){
        showline.currentTarget.classList.add('active');
    }
    liTags[i].onmouseleave = function(showline){
        showline.currentTarget.classList.remove('active')
    }
}

// donghua
let aTags = document.querySelectorAll('nav > ul > li > a');
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget;//阻止默认动作
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop;
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop // 路程
        var coords = { y: currentTop}; // 起始位置
        var t = Math.abs((s/100)*300) // 时间
        if(t>500){ t = 500 }
        var tween = new TWEEN.Tween(coords) // 起始位置
            .to({ y: targetTop}, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
            .onUpdate(function() {
                // coords.y 已经变了
                window.scrollTo(0,coords.y) // 如何更新界面
            })
            .start(); // 开始缓动
    }
}

// 实现 项目展示模块 tab切换
let portfolioTags = $('#siteWorks > .content > li');
let touchNav = $('#siteWorks > .selectionBar > li');
for (let i = 0; i < touchNav.length; i++) {
    $(touchNav[i]).on('click', function(){
        $('#' + $(this).attr('title')).addClass('active').siblings('.active').removeClass('active');
        $(touchNav[i]).addClass('checked').siblings('.checked').removeClass('checked');
    })
}

//函数获取离顶端最近的标记的标签 并添加删除类控制动画
function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i=1; i<specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
        }
    }
    // minIndex就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#'+ id + '"]');
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;
    for (let i=0; i<brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}




























