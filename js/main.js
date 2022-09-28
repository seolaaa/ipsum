document.addEventListener('DOMContentLoaded',()=>{

    const mainImg = document.querySelector('.main-img')
    const title = document.querySelector('#maintitle')
    const text = document.querySelector('.main-text')
    const leftText = document.querySelector('#main-big-text')
    const rightText = document.querySelector('.right-text')
    const mainBtn = document.querySelector('.main-btn')


    init()


    function init(){

        gsap.to(mainImg,{opacity:1,top:150,duration:0.5,ease:'power1.out',delay:0.2})
        gsap.to(title,{opacity:1,top:140,duration:0.5,ease:'power1.out',delay:0.5})
        gsap.to(text,{opacity:1,top:300,duration:0.5,ease:'power1.out',delay:0.9})
        gsap.to(leftText,{opacity:1,left:250,duration:0.5,ease:'power1.out',delay:0.9})
        gsap.to(rightText,{opacity:1,right:255,duration:0.5,ease:'power1.out',delay:0.9})
        gsap.to(mainBtn,{opacity:1,right:150,duration:0.5,ease:'power1.out',delay:0.9})

    }
})