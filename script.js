const time = document.getElementById('time'),
  dayOfweek=document.getElementById('dayOfWeek'),
  date=document.getElementById('date'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  btnR = document.getElementById('right'),
  btnL = document.getElementById('left');
const city = document.querySelector('.city');

name.addEventListener('focus', ClearName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('focus', ClearFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
btnL.addEventListener('click', prevImg);
btnR.addEventListener('click', nextImg);

localStorage.setItem('tmpName',"");
localStorage.setItem('tmpFocus',"");

const base = 'assets/images/';
const folder=['night/','morning/','day/','evening/'];
const words=['Хорошей ночи','Доброе утро','Добрый День','Хорошего вечера'];
const images = ['01.jpg', '02.jpg', '03.jpg','04.jpg', '05.jpg', '06.jpg'];
const body = document.querySelector('body');
let currimg;
let userChooseImg=false;
let dis=false;
showTime();
setBgGreet();
getName();
getFocus();

function showTime() {
  let today = new Date(),
    year=today.getFullYear(),
    month=today.getMonth()+1,
    day=today.getDate(),
    dayOfweekNum=today.getDay(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  dayOfweek.innerHTML = `${getDayOfWeek(dayOfweekNum)}`;

  date.innerHTML = `${addZero(day)}<span>.</span>${addZero(month)}<span>.</span>${year}`;

  if(!userChooseImg || min==0){
    changeBackground();
  }
  setBgGreet();
  setTimeout(showTime, 1000);

}

function getTimeOfDay(hour){
  if(hour>=0 && hour<6){
    return 0
  }else if (hour>=6 && hour<12) {
    return 1
  }else if (hour>=12 && hour<18) {
    return 2
  }
    return 3
}

function changeBackground(){
  let today = new Date(),
    hour=today.getHours(),
    hourOfDay=getTimeOfDay(hour);
  currimg=hour;
  viewBgImage(base+folder[hourOfDay]+images[hour%6]);
}

function nextImg(e){
  if(dis)
    return;
  dis = true;
  userChooseImg=true;
  currimg=(currimg+1)%24;
  viewBgImage(base+folder[getTimeOfDay(currimg)]+images[currimg%6]);
  setTimeout(function() { dis= false; }, 1000);
}

function prevImg(e){
  if(dis)
    return;
  dis = true;
  userChooseImg=true;
  currimg=(currimg-1 + 24)%24;
  viewBgImage(base+folder[getTimeOfDay(currimg)]+images[currimg%6]);
  setTimeout(function() { dis= false; }, 1000); 
}

function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
} 


function getDayOfWeek(i){
  console.log(i)
  const days=['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
  return days[i];
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  greeting.textContent = words[getTimeOfDay(hour)]+', ';
}

function getName() {
  console. log(localStorage.getItem('name'));
  if (localStorage.getItem('name') == "" ) {
    name.textContent = '[Введите имя]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function ClearName(e){
  e.target.innerText="";
  localStorage.setItem('tmpName',localStorage.getItem('name'))
}

function ClearFocus(e){
  e.target.innerText="";
  localStorage.setItem('tmpFocus',localStorage.getItem('focus'))
}

function setName(e) {
  console.log(e.target.innerText)
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    if(e.target.innerText!=""){
      localStorage.setItem('name', e.target.innerText);
    }else{
      localStorage.setItem('name',localStorage.getItem('tmpName'))
    }
    getName();
  }
}

function getFocus() {
  if (localStorage.getItem('focus') == "") {
    focus.textContent = '[Введите цель]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {

    if(e.target.innerText!=""){
      localStorage.setItem('focus', e.target.innerText);
    }else{
      localStorage.setItem('focus',localStorage.getItem('tmpFocus'))
    }
    getFocus();
    
  }
}

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked 
function getQuote() {  
  let rand=Math.floor(Math.random() * quot.length)-1;
  rand=rand%2==0?rand:(rand+1)%quot.length;
  blockquote.textContent = quot[rand];
  figcaption.textContent = quot[rand+1];
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);

getCity()
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data);
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('focus', ClearCity);
city.addEventListener('blur', setCity);

function getCity() {
  console. log(localStorage.getItem('city'));
  if (localStorage.getItem('city') == "" ) {
    city.textContent = 'Минск';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

function ClearCity(e){
  e.target.innerText="";
  localStorage.setItem('tmpCity',localStorage.getItem('city'))
}

function setCity(e) {
  console.log(localStorage.getItem('city'))
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('city', e.target.innerText);
      city.blur();
    }
  } else {
    if(e.target.innerText!=""){
      localStorage.setItem('city', e.target.innerText);
    }else{
      localStorage.setItem('city',localStorage.getItem('tmpCity'))
      getCity();
    }
    getWeather();
  }
}