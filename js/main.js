// 监听网页滚动Y轴坐标，调整导航栏的样式
window.onscroll = function(changebar){
    if(window.scrollY > 0) {
        topNavbar.classList.add('sticky');
    }else {
        topNavbar.classList.remove('sticky');
    }
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

let aTags = document.querySelectorAll('nav > ul > li > a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget;//阻止默认动作
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop;
        window.scrollTo(0, top - 80);
    }
}
let portfolioTags = $('#siteWorks > .content > li');
let touchNav = $('#siteWorks > .selectionBar > li');
for (let i = 0; i < touchNav.length; i++) {
    $(touchNav[i]).on('click', function(){
        $('#' + $(this).attr('title')).addClass('active').siblings('.active').removeClass('active');
        $(touchNav[i]).addClass('checked').siblings('.checked').removeClass('checked');
    })
}
