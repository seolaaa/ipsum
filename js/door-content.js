// document.addEventListener('DOMContentLoaded',()=>{

//     const doorWrap = document.querySelector('#door-img-list-wrap')
//     const doorImg = document.querySelector('#door-img-list')

//     let startX = doorWrap.offsetLeft-(doorWrap.offsetWidth/1);
//     let CurrentX = startX;
//     let stepX = 8;
//     let endX = doorWrap.offsetLeft;

    



//     Moving();

    

//     function Moving(){

//         setInterval(doorMoving,18)
//     }

//     function doorMoving(){
        
//         CurrentX+=stepX

//         if(CurrentX >= endX){
//             CurrentX=startX+4
//         }

//         doorWrap.style.left=CurrentX+"px"
//     }
    
// })

window.addEventListener('load',()=>{
    slideEffect()
  })

  function slideEffect(){

    const doorWrap = document.querySelector('#door-img-list-wrap')
    const doorListWrap = document.querySelector('#door-img-list')
    const doorLi = document.querySelectorAll('#door-img-list>li')
    const num = document.querySelectorAll('#door-img-num-list>li')
    const leftBtn = document.querySelector('.door-left-btn')
    const rightBtn = document.querySelector('.door-right-btn')


    let doorLength = doorLi.length;
    let doorWidth = doorListWrap.offsetWidth;


    let currentIndex=0;
    let nextIndex=1;
    let timer=null;
    let isSlide=false;


    init();




    function init(){
        gsap.set(doorLi,{left:doorWidth,opacity:0.2})
        gsap.set(doorLi[0],{left:0,opacity:1})
    }
  }