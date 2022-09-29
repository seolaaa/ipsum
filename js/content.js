document.addEventListener('DOMContentLoaded',()=>{

    const proContentLi = document.querySelectorAll('#content-menu>li') 




    initEvent();

    function initEvent(){

        window.addEventListener('scroll',scrollPro)

    }

    function scrollPro(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>400){
            for(let i=0; i<proContentLi.length; i++){
                gsap.to(proContentLi[i],{top:0,opacity:1,duration:0.4,ease:'power1.out',delay:i*0.2})
            }
        }
        if(scrollHeight>1500){
            for(let i=0; i<proContentLi.length; i++){
                gsap.to(proContentLi[i],{top:150,opacity:0,duration:0.4,ease:'power1.out',delay:i*0.2})
            }
        }
        else
        for(let i=0; i<proContentLi.length; i++){
            gsap.to(proContentLi[i],{top:0,opacity:1,duration:0.4,ease:'power1.out',delay:i*0.2})
        }
        
    }
})