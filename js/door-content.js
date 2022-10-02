document.addEventListener('DOMContentLoaded',()=>{

    const doorWrap = document.querySelector('#door-img-list-wrap')
    const doorImg = document.querySelector('#door-img-list')

    let startX = doorWrap.offsetLeft-(doorWrap.offsetWidth);
    let CurrentX = startX;
    let stepX = 2;
    let endX = doorWrap.offsetLeft;

    



    // Moving();

    

    function Moving(){

        setInterval(doorMoving,20)
    }

    function doorMoving(){
        
        CurrentX+=stepX

        if(CurrentX >= endX){
            CurrentX=startX+2
        }

        doorWrap.style.left=CurrentX+"px"
    }
    
})