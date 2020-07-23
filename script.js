'use strict';

//let setting = null;
let minutes;
function setAlarm(event) { //this function will set times 
  minutes = parseFloat(event.target.value);
  alarmSet.innerHTML = `You will receive a reminder notification every ${minutes} minutes. :)`;
  chrome.alarms.create({ delayInMinutes: minutes, periodInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes }); //can take in two args, the second could be a callback
  //window.close(); //can only be used on windows opened by a window.open() method.
}

function clearAlarm() {
  chrome.alarms.clearAll();
  window.close();
}

let alarmSet = document.querySelector('.alarmSet');

// function previousAlarm(input) {
//   if (minutes) alarmSet.innerHTML = `Your notifications are set for ${minutes}`;
// }

// previousAlarm(minute);

document.getElementById('15min').addEventListener('click', setAlarm); //Cannot read property 'addEventListener' of null 
document.getElementById('30min').addEventListener('click', setAlarm); //when clicked twice, it seems to add up the times? ie 15 pressed twice gives 30 min alarms
document.getElementById('60min').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);



//app does give notification reminders to move around but not at the times set. Are the times accumulating when you press on it?
//how can we check the input? 
//is there a way we can add an input that allows us to see what was set?
