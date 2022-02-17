


const user = {
  username: 'demo-user'
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'open-notification-url') {
    chrome.windows.create({url: 'http://localhost:8080/sending', height: 560, width: 306, type: 'popup'});
    sendResponse(user);
  }
});

