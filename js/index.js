const navbar = document.querySelector('.navbar')
const navItem = document.querySelector('.nav-item')
window.onscroll = function(){
    var top = window.scrollY;
    if(top > 500){
        navbar.classList.add('active')
        navItem.classList.add('active')


    }else{
        navbar.classList.remove('active')
        navItem.classList.remove('active')

    }
}