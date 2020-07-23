
  chrome.alarms.onAlarm.addListener(function() {
    chrome.browserAction.setBadgeText({text: ''});
    chrome.notifications.create({
        type:     'basic',
        iconUrl:  'stay_hydrated.png',
        title:    'Time to Hydrate',
        message:  'Everyday I\'m Guzzlin\'!',
        buttons: [
          {title: 'Keep it Flowing.'}
        ],
        priority: 0});
  });
  
  chrome.notifications.onButtonClicked.addListener(function() {
    chrome.storage.sync.get(['minutes'], function(item) {
      chrome.browserAction.setBadgeText({text: 'ON'});
      chrome.alarms.create({delayInMinutes: item.minutes});
    });
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });