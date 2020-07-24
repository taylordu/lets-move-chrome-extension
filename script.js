'use strict';

let minutes;
function setAlarm(event) {
  //this function will set times
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

document.getElementById('15min').addEventListener('click', setAlarm);
document.getElementById('30min').addEventListener('click', setAlarm);
document.getElementById('60min').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
