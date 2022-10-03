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


document.addEventListener('DOMContentLoaded',()=>{
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
    initEvent();
    autoplay();




    function init(){
        gsap.set(doorLi,{left:doorWidth,opacity:0.2})
        gsap.set(doorLi[0],{left:0,opacity:1})
    }


    function initEvent(){

        rightBtn.addEventListener('click',slideRight)
        leftBtn.addEventListener('click',slideLeft)

    }

    function slideRight(){

        if(isSlide==false){

            isSlide=true;
            nextIndex=currentIndex+1;
          }
         
          if(nextIndex>=doorLength){
            nextIndex=0;
          }

          gsap.to(doorLi[currentIndex],{left:-doorWidth,opacity:0, duration:0.8, ease:'power1.out'})
          gsap.set(doorLi[nextIndex],{left:doorWidth})
          gsap.to(doorLi[nextIndex],{left:0,opacity:1,duration:0.8,ease:'power1.out',onComplete:()=>{
            isSlide=false;
          }})
  
          currentIndex=nextIndex;
  
    }
    function slideLeft(){

        if(isSlide==false){
            isSlide=true;
            nextIndex=currentIndex-1;
          }
         
          if(nextIndex<0){
            nextIndex=doorLength-1;
          }

          gsap.to(doorLi[currentIndex],{left:doorWidth,opacity:0, duration:0.8, ease:'power1.out'})
          gsap.set(doorLi[nextIndex],{left:-doorWidth})
          gsap.to(doorLi[nextIndex],{left:0,opacity:1,duration:0.8,ease:'power1.out',onComplete:()=>{
            isSlide=false;
          }})
  
          currentIndex=nextIndex;
  
    }


    function autoplay(){
        timer=setInterval(slideRight,3000)
    }
  }