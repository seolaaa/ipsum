document.addEventListener('DOMContentLoaded',()=>{

    const proContentLi = document.querySelectorAll('#content-menu>li')
    const textWrap = document.querySelector('#content-text-wrap')



    initEvent();

    function initEvent(){

        window.addEventListener('scroll',scrollPro)
        window.addEventListener('scroll',scrollText)

    }


    function scrollPro(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=1200){
            for(let i=0; i<proContentLi.length; i++){
                gsap.to(proContentLi[i],{top:0,opacity:1,duration:0.4,ease:'power1.out',delay:i*0.2})
            }
        }
        if(scrollHeight>=1600){
            for(let i=0; i<proContentLi.length; i++){
                gsap.to(proContentLi[i],{top:150,opacity:0,duration:0.4,ease:'power1.out',delay:i*0.2})
            }
        }
        else
        for(let i=0; i<proContentLi.length; i++){
            gsap.to(proContentLi[i],{top:0,opacity:1,duration:0.4,ease:'power1.out',delay:i*0.2})
        }
        
    }

    function scrollText(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=1800){
            gsap.to(textWrap,{display:'block',opacity:1,duration:0.5,ease:'power1.out'})
        }
        
        if(scrollHeight>=1600){
            gsap.to(textWrap,{display:'none',opacity:0,duration:0.5,ease:'power1.out'})  
        }
        else{
            gsap.to(textWrap,{display:'block',opacity:1,duration:0.5,ease:'power1.out'})
        }
    }
})