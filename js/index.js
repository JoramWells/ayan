const navbar = document.querySelector('.navbar')
window.onscroll = function(){
    var top = window.scrollY;
    console.log(top)
    if(top > 450){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
}