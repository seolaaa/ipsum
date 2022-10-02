document.addEventListener('DOMContentLoaded',()=>{

    const doorWrap = document.querySelector('#door-img-list')
    const doorImgLi = document.querySelectorAll('#door-img-list>li')

    let startX = doorWrap.offsetLeft-(doorWrap.offsetWidth/2);
    let CurrentX = startX;
    let stepX = 2;
    let endX = doorWrap.offsetLeft;



    Moving();

    

    function Moving(){

        setInterval(doorMoving,18)
    }

    function doorMoving(){
        
        CurrentX+=stepX

        if(CurrentX >= endX){
            CurrentX=startX+2
        }

        doorWrap.style.left=CurrentX+"px"
    }
    
})