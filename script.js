'use strict';

function setAlarm(event) { //this function will set times 
  //console.log("inside alarm")
  //console.log(event, "event")
  let minutes = parseFloat(event.target.value);
  chrome.alarms.create({ delayInMinutes: minutes, periodInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes }); //can take in two args, the second could be a callback
  window.close(); //can only be used on windows opened by a window.open() method.
}


function clearAlarm() {
  chrome.alarms.clearAll();
  window.close();
}

document.getElementById('15min').addEventListener('click', setAlarm); //Cannot read property 'addEventListener' of null 
document.getElementById('30min').addEventListener('click', setAlarm); 
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);

//think the invocation of alarm is either not happening or nothing is being passed in somehow to eventlistener.