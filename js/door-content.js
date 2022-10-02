document.addEventListener('DOMContentLoaded',()=>{

    const doorWrap = document.querySelector('#door-img-list-wrap')
    const doorImg = document.querySelector('#door-img-list')

    let startX = doorWrap.offsetLeft-(doorImg.offsetWidth/2);
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
            CurrentX=startX+5
        }

        doorWrap.style.left=CurrentX+"px"
    }
    
})