document.addEventListener('DOMContentLoaded',()=>{

    const proContentLi = document.querySelectorAll('#content-menu>li')
    const textWrap = document.querySelector('#content-text-wrap')
    const text = document.querySelector(".logo-text");
    const halfImg = document.querySelector('.img-half>img')
    const halfBold = document.querySelector('.half-bold-text')
    const halfNormal = document.querySelector('.half-normal-text')
    const halfBtn = document.querySelector('.img-text-btn')

   





    init();
    initEvent();

    function init(){

        text.innerHTML = text.innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");
    
    }

    function initEvent(){

        window.addEventListener('scroll',scrollContent)

    }


    function scrollContent(){


        let scrollHeight = window.pageYOffset;

        console.log(scrollHeight);

        if(scrollHeight>=400){
            for(let i=0; i<proContentLi.length; i++){
                gsap.to(proContentLi[i],{top:0,opacity:1,duration:0.4,ease:'power1.out',delay:i*0.2})
            }
        }
        if(scrollHeight>=1600){
            for(let i=0; i<proContentLi.length; i++){
                gsap.to(proContentLi[i],{top:150,opacity:0,duration:0.4,ease:'power1.out',delay:i*0.2})
            }
        }




        if(scrollHeight>=800){
            gsap.to(textWrap,{display:'block',opacity:1,duration:0.5,ease:'power1.out'})
        }
        
        if(scrollHeight>=1600){
            gsap.to(textWrap,{display:'none',opacity:0,duration:0.5,ease:'power1.out'})  
        }




        if(scrollHeight>=1300){
            gsap.to(halfImg,{opacity:1,duration:0.5,ease:'power1.out',delay:0.2})
            gsap.to(halfBold,{opacity:1,duration:0.5,ease:'power1.out',delay:0.3})
            gsap.to(halfNormal,{opacity:1,duration:0.5,ease:'power1.out',delay:0.5})
            gsap.to(halfBtn,{opacity:1,duration:0.5,ease:'power1.out',delay:0.7})

        }

        if(scrollHeight>=2500){
            gsap.to(halfImg,{opacity:0,duration:0.5,ease:'power1.out',delay:0.2})
            gsap.to(halfBold,{opacity:0,duration:0.5,ease:'power1.out',delay:0.3})
            gsap.to(halfNormal,{opacity:0,duration:0.5,ease:'power1.out',delay:0.5})
            gsap.to(halfBtn,{opacity:0,duration:0.5,ease:'power1.out',delay:0.7})
        }
        
    }

})