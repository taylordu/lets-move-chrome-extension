'use strict';

chrome.alarms.onAlarm.addListener(function () {
  chrome.notifications.create({
    //creating our notification and adding info
    type: 'basic',
    iconUrl: 'logo.png',
    title: 'Move Around',
    message: "It's time to get up and move!",
    buttons: [{ title: 'Ok!' }],
    priority: 0, //default is 0
  });
});

chrome.notifications.onButtonClicked.addListener(function (activeTab) {
  let newURL =
    'https://www.youtube.com/playlist?list=PLP7Ou7uUiYzAP3RBUrQ5EOIT9IwreCDQp';
  chrome.tabs.create({ url: newURL });
}); //this function should fire when ok! is clicked.
