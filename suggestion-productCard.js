// const countDownTimerElement=document.getElementsByClassName('ShegeftAvizTimer');
const countDownTimerElement = document.querySelectorAll(".ShegeftAvizTimer");

const ShegeftAvizExpireDate = "July 9, 2022 15:37:25";

// Set the date we're counting down to
var countDownDate = new Date(ShegeftAvizExpireDate).getTime();

// Update the count down every 1 second
var ShegeftAvizCountDownTimer = setInterval(updateCountDown, 1000); //every 1000 milli secounds

function updateCountDown() {
  // Get today's date and time
  var now = new Date().getTime();
  ///console.log(now);
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //console.log(days);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = hours + days * 24;
  //console.log(hours);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //console.log(minutes);
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //console.log(seconds);
  // Display the result in the element with class="ShegeftAvizTimer"
  // countDownTimerElement.innerHTML =  hours + ":"
  // + minutes + ":" + seconds ;
  if (seconds < 10) {
    seconds =numberToPersian(0)  +numberToPersian(seconds) ;
  }
  else{
    seconds =numberToPersian(seconds) ;
  }
  if (minutes < 10) {
    minutes = numberToPersian(0)+ numberToPersian(minutes);
  }
  else{
    minutes = numberToPersian(minutes);
  }
  if (hours < 10) {
    hours = numberToPersian(0) + numberToPersian(hours);
  }
  else{
    hours =  numberToPersian(hours);
  }
  countDownTimerElement.forEach(function (element) {
    element.innerHTML = hours + ":" + minutes + ":" + seconds;
    //console.log( hours + ":" + minutes + ":" + seconds);
  });
 // console.log(countDownTimerElement);
  // If the count down is finished, remove the timer text
  if (distance < 0) {
    clearInterval(ShegeftAvizCountDownTimer);
    countDownTimerElement.forEach(function (element) {
      element.innerHTML = "منقضـی شـده";
    });
  }
}
function numberToPersian(number) {
  const persian = { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 
  8: "۸", 9: "۹" };
  number = number.toString().split("");
  let persianNumber = ""
  for (let i = 0; i < number.length; i++) {
       number[i] = persian[number[i]];
  }
  for (let i = 0; i < number.length; i++) {
       persianNumber += number[i];
  }
  return persianNumber;
}