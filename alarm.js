'use strict';

chrome.alarms.onAlarm.addListener(function () {
  chrome.notifications.create({   //creating our notification and adding info
    type: 'basic',
    iconUrl: 'logo.png',
    title: 'Time to move around!',
    message: 'url to workout here?',
    buttons: [{ title: 'Alright!!' }],
    priority: 0, //default is 0
  });
});

chrome.notifications.onButtonClicked.addListener(function () {
  chrome.storage.sync.get(['minutes'], function (item) {
    chrome.alarms.create({ delayInMinutes: item.minutes });
  });
});