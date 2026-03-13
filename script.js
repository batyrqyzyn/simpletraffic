 const btn= document.getElementById('btn');

    let clicked = false;
    
    btn.addEventListener('click', ()=>{
        const red = document.getElementById('red');
        const yellow = document.getElementById('yellow');
        const green = document.getElementById('green');

        if(clicked === false){
        red.style.backgroundColor='rgb(235, 232, 232)';
        yellow.style.backgroundColor = 'rgb(235, 232, 232)';
        green.style.backgroundColor = 'rgb(235, 232, 232)';
        clicked=true;
        }else{

        red.style.backgroundColor='red';
        yellow.style.backgroundColor = 'yellow';
        green.style.backgroundColor = 'green';
        clicked=false;
        }
    });
        
