document.addEventListener('DOMContentLoaded',()=>{

    const doorWrap = document.querySelector('#door-img-list-wrap')
    const doorImg = document.querySelector('#door-img-list')

    let startX = doorWrap.offsetLeft-(doorWrap.offsetWidth/1);
    let CurrentX = startX;
    let stepX = 8;
    let endX = doorWrap.offsetLeft;

    



    Moving();

    

    function Moving(){

        setInterval(doorMoving,20)
    }

    function doorMoving(){
        
        CurrentX+=stepX

        if(CurrentX >= endX){
            CurrentX=startX+4
        }

        doorWrap.style.left=CurrentX+"px"
    }
    
})