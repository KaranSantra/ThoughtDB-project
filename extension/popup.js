document.getElementById('saveButton').addEventListener('click',async function() {
    const title = document.getElementById('title').value;
    const embedCode = document.getElementById('embedCode').value;
    const addedOn = new Date().toISOString();

    const data = {
        title: title,
        embedCode: embedCode,
        addedOn: addedOn
    };

    chrome.runtime.sendMessage({type: 'saveMedia', data: data}, function(response) {
        if (response.status === 'success') {
            alert('Media saved successfully!');
        } else {
            alert('Failed to save media.');
        }
    });

    const response = await fetch('http://127.0.0.1:5000/api/save_media', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            embedCode: embedCode,
            addedOn: addedOn
        })
    });

    if (response.ok) {
        alert('Media details sent to server!');
    } else {
        alert('Failed to save media details.');
    }
    
});
