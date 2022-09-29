document.addEventListener('DOMContentLoaded',()=>{

    const mainImg = document.querySelector('.main-img')
    const title = document.querySelector('#maintitle')
    const text = document.querySelector('.main-text')
    const leftText = document.querySelector('#main-big-text')
    const rightText = document.querySelector('.right-text')
    const mainBtn = document.querySelector('.main-btn')

    const mainWrap = document.querySelector('#main-wrap')

    init();
    initEvent();


    function init(){

        gsap.to(mainImg,{opacity:1,top:150,duration:0.6,ease:'power1.out',delay:0.2})
        gsap.to(title,{opacity:1,top:140,duration:0.6,ease:'power1.out',delay:0.5})
        gsap.to(text,{opacity:1,top:300,duration:0.6,ease:'power1.out',delay:0.8})
        gsap.to(leftText,{opacity:1,left:250,duration:0.6,ease:'power1.out',delay:0.8})
        gsap.to(rightText,{opacity:1,right:255,duration:0.6,ease:'power1.out',delay:0.8})
        gsap.to(mainBtn,{opacity:1,right:150,duration:0.6,ease:'power1.out',delay:0.9})

    }

    function initEvent(){

        window.addEventListener('scroll',scrollMain)

    }

    function scrollMain(){
        
        let scrollHeight = window.pageYOffset;

        if(scrollHeight>900){
            gsap.to(mainImg,{opacity:0,top:350,duration:0.6,ease:'power1.out',delay:0.2})
            gsap.to(title,{opacity:0,top:240,duration:0.6,ease:'power1.out',delay:0.5})
            gsap.to(text,{opacity:0,top:450,duration:0.6,ease:'power1.out',delay:0.8})
            gsap.to(leftText,{opacity:0,left:250,duration:0.6,ease:'power1.out',delay:0.8})
            gsap.to(rightText,{opacity:0,right:100,duration:0.6,ease:'power1.out',delay:0.8})
            gsap.to(mainBtn,{opacity:0,right:0,duration:0.6,ease:'power1.out',delay:0.9})
        }
        else{
            gsap.to(mainImg,{opacity:1,top:150,duration:0.6,ease:'power1.out',delay:0.2})
            gsap.to(title,{opacity:1,top:140,duration:0.6,ease:'power1.out',delay:0.5})
            gsap.to(text,{opacity:1,top:300,duration:0.6,ease:'power1.out',delay:0.8})
            gsap.to(leftText,{opacity:1,left:250,duration:0.6,ease:'power1.out',delay:0.8})
            gsap.to(rightText,{opacity:1,right:255,duration:0.6,ease:'power1.out',delay:0.8})
            gsap.to(mainBtn,{opacity:1,right:150,duration:0.6,ease:'power1.out',delay:0.9})
        }

    }
})