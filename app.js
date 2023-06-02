let stateLeft = true
const h1 = document.getElementById('h1')
const l1 = document.getElementById('l1')
function likeMe1(){

    if(stateLeft){

    document.body.style.backgroundColor = "#ffbe76";
    document.querySelector('h1').style.color = "white";
    document.getElementById('load').style.width = "200px"
    document.getElementById('load').style.backgroundColor = "#f0932b"
    document.getElementById('load').style.transition = ".3s cubic-bezier(1,1.59,0,1)"

    h1.src = "./images/heart1.png"
    l1.style.transform = "scale(2.5) rotate(145deg)"
    l1.style.bottom = 0

    l1.style.transition = ".5s"
    l1.style.height = "500px"
    cardA.style.border = "solid 10px white"

    cardB.style.transition = ".5s cubic-bezier(1,1.59,0,1)"
    cardB.style.transform = "scale(.85)"
    cardCenter.style.transition = ".2s"
    cardCenter.style.transform = "scale(.85)"
    document.querySelector('.textBox1').style.color = "white"
    stateLeft = !stateLeft   

        if (window.matchMedia("(max-width: 1000px)").matches) {
            h3.src = "./images/heart0.png"
            cardCenter.style.transform = "scale(1)"
            cardCenter.style.margin = "10px"
            l3.style.transition = ".4s"
            cardA.style.transform = "rotate(0deg)"
            cardA.style.transition = ".3s"
            cardB.style.transform = "rotate(0deg)"
            cardB.style.transition = ".3s"
        }

    } else {
        document.body.style.backgroundColor = "#f1f2f6";
        document.querySelector('h1').style.color = "black"

        document.getElementById('load').style.width = "0px"
        document.getElementById('load').style.transition = ".2s cubic-bezier(1,1.59,0,1)"

        h1.src = "./images/heart0.png"
        l1.style.transform = "scale(3) rotate(5deg)"
        l1.style.bottom = "-210px"
    
        l1.style.transition = ".4s"
        l1.style.height = "0px"
    
        cardA.style.border = "none"
    
        document.querySelector('.textBox1').style.color = "black"
    
        cardB.style.transition = ".6s"
        cardB.style.transform = "scale(1)"
        cardCenter.style.transition = ".2s"
        cardCenter.style.transform = "scale(1)"
        stateLeft = !stateLeft   
    }

}



let stateRight = true
const h2 = document.getElementById('h2')
const l2 = document.getElementById('l2')
function likeMe2(){
    document.body.style.backgroundColor = "#dff9fb";
    document.querySelector('h1').style.color = "#130f40";

    document.getElementById('load').style.width = "200px"
    document.getElementById('load').style.backgroundColor = "#3742fa"
    document.getElementById('load').style.transition = ".3s cubic-bezier(1,1.59,0,1)"

    if(stateRight){
    h2.src = "./images/heartBlue.png"
    l2.style.transform = "scale(3) rotate(145deg)"
    l2.style.bottom = 0
    l2.style.transition = ".5s"
    l2.style.height = "500px"
    document.querySelector('.textBox2').style.color = "black"
    cardB.style.border = "solid 10px white"
    cardA.style.transition = ".5s cubic-bezier(1,1.59,0,1)"
    cardA.style.transform = "scale(.8) translateX(700px)"
    cardCenter.style.transition = ".2s"
    cardCenter.style.transform = "scale(.9) translateX(300px)"
    stateRight = !stateRight

    if (window.matchMedia("(max-width: 1000px)").matches) {
        h3.src = "./images/heart0.png"
        cardCenter.style.transform = "scale(1)"
        cardCenter.style.margin = "10px"
        l3.style.transition = ".4s"
        cardA.style.transform = "rotate(0deg)"
        cardA.style.transition = ".3s"
        cardB.style.transform = "rotate(0deg)"
        cardB.style.transition = ".3s"
    }

    } else {

        document.body.style.backgroundColor = "#f1f2f6";
        document.querySelector('h1').style.color = "black"

        document.getElementById('load').style.width = "0px"
        document.getElementById('load').style.transition = ".2s cubic-bezier(1,1.59,0,1)"

        h2.src = "./images/heart0.png"
        l2.style.transition = ".2s"
        l2.style.height = "0px"
        document.querySelector('.textBox2').style.color = "black"

        cardB.style.border = "none"
        cardA.style.transition = ".6s"

        cardA.style.transform = "scale(1) translateX(0px)"
        cardCenter.style.transition = ".2s"
        cardCenter.style.transform = "scale(1) translateX(0px)"
        stateRight = !stateRight
    }
}


let stateCenter = true
const h3 = document.getElementById('h3')
const l3 = document.getElementById('l3')
const cardCenter = document.getElementById('cardCenter')
const cardA = document.getElementById('cardA');
const cardB = document.getElementById('cardB');

function likeMe3(){
    if(stateCenter){

    document.body.style.backgroundColor = "#7bed9f";
    document.querySelector('h1').style.color = "white"

    document.getElementById('load').style.width = "200px"
    document.getElementById('load').style.backgroundColor = "#10ac84"
    document.getElementById('load').style.transition = ".3s cubic-bezier(1,1.59,0,1)"

    h3.src = "./images/heartGreen.png"
    l3.style.transform = "scale(4) rotate(45deg)"
    l3.style.bottom = 0
    cardCenter.style.transform = "scale(1.1)"
    cardCenter.style.transition = ".3s"
    cardCenter.style.margin = "90px"
    cardCenter.style.border = "solid 10px white"
    l3.style.transition = ".5s"
    l3.style.height = "500px"
    document.querySelector('.textBox3').style.color = "white"
    cardA.style.transform = "rotateZ(-15deg)"
    cardA.style.transition = ".2s"
    cardB.style.transform = "rotateZ(15deg)"
    cardB.style.transition = ".2s"
    stateCenter = !stateCenter

        if (window.matchMedia("(max-width: 1000px)").matches) {
            h3.src = "./images/heartGreen.png"
            cardCenter.style.transform = "scale(1)"
            cardCenter.style.margin = "10px"
            l3.style.transition = ".4s"
            cardA.style.transform = "rotate(0deg)"
            cardA.style.transition = ".3s"
            cardB.style.transform = "rotate(0deg)"
            cardB.style.transition = ".3s"
        }

    }
    else {

        document.body.style.backgroundColor = "#f1f2f6";
        document.querySelector('h1').style.color = "black"
        document.getElementById('load').style.width = "0px"
        document.getElementById('load').style.transition = ".3s cubic-bezier(1,1.59,0,1)"

        document.querySelector('.textBox3').style.color = "black"
        l3.style.height = "0px"
        h3.src = "./images/heart0.png"
        cardCenter.style.transform = "scale(1)"
        cardCenter.style.margin = "10px 20px"
        cardCenter.style.border = "none"
        l3.style.transition = ".4s"

        cardA.style.transform = "rotate(0deg)"
        cardA.style.transition = ".3s"
        cardB.style.transform = "rotate(0deg)"
        cardB.style.transition = ".3s"

        stateCenter = !stateCenter
    }
}
