//Lesson 82: Dates & Times in Javascript

// dates & times
const before = new Date('Feb 17 2021 12:22:45');
const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());

// time stamps
console.log('timestamp', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//Lesson 83: Timestamps & Comparisons

// timestamps

console.log(now.getTime(), before.getTime());

const diff = now.getTime(- before.getTime());
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);

// converting timestamps into date objects

const timestamp = 1613582922076;
console.log(new Date(timestamp))

// Lesson 84: Building a Digital Clock

const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);

// Lesson 85: Date-fns Library

//console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));

// comparing dates

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));