
function change(){
    div=document.getElementById('box')
    if (div.style.color=="white"){
        div.style.backgroundColor="white"
        div.style.color="black"
        document.getElementById('mode').innerText="Dark mode"
    }
    else {
        div.style.backgroundColor="black"
        div.style.color="white"
        document.getElementById('mode').innerText="Light mode"
    }
}


function game(){
    uo=document.getElementById('uo').value
    options=['paper','scis','rock']
    ri=Math.floor(Math.random() * options.length)
    co=options[ri]
    document.getElementById('co').innerText=`${co}`
    if (uo==co){
        document.getElementById('res').innerText="Tie"
    }
    else if ( (uo=="paper" && co=="rock" ) || (uo=="rock" && co=="scis") || (uo=="scis" && co=="paper")){
        document.getElementById('res').innerText="You Won"
    }
    else{
        document.getElementById('res').innerText="Computer Won"
    }
}