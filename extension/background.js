chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'saveMedia') {
        // Assuming data is already in the required JSON format
        chrome.storage.local.get({mediaData: []}, function(result) {
            const newData = result.mediaData;
            newData.push(request.data);
            chrome.storage.local.set({mediaData: newData}, function() {
                sendResponse({status: 'success'});
            });
        });
        return true; // Keeps the message channel open for the response
    }
});
