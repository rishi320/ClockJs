const secondsHand = document.querySelector(".sec-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hands = document.querySelectorAll(".hand");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsDegree = ((seconds/60)*360)+90;
    const minsDegree = ((mins/60)*360) + 90;
    const hoursDegree = ((hours/12)*360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    if(seconds === 0){
        hands.forEach((hand)=> hand.style.transitionDuration = '0s')
    } else{
        hands.forEach((hand)=> hand.style.transitionDuration = '0.05s')
    }
    // console.log("Hi", seconds);
}

setInterval(setDate, 1000);