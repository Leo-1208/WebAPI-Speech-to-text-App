document.getElementById('startListening').addEventListener('click', function() {
    // Check if the browser supports the Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support the Web Speech API. Please try Google Chrome.');
        return;
    }

    const recognition = new webkitSpeechRecognition();
    const selectedLanguage = document.getElementById('language').value;
    recognition.lang = selectedLanguage;

    recognition.onstart = function() {
        console.log('Listening...');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('transcriptOutput').value = transcript;
    };

    recognition.onerror = function(event) {
        alert('Oops! Error occurred: ' + event.error);
    };

    recognition.start();
});
