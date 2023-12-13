function uploadAudio() {
    // Trigger the hidden input file element
    document.getElementById('audioInput').click();
}

// Listen for changes in the input file element
document.getElementById('audioInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files.length > 0) {
        const selectedFile = files[0];
        const allowedExtensions = ['.mp3', '.wav', '.ogg'];

        // Check if the file extension is allowed
        const fileExtension = selectedFile.name.split('.').pop();
        if (allowedExtensions.includes('.' + fileExtension.toLowerCase())) {
            // You can now handle the file upload logic here
            alert('File uploaded successfully: ' + selectedFile.name);
        } else {
            alert('Please select a valid audio file (mp3, wav, or ogg).');
        }
    }
}
function copyText() {
    var textarea = document.querySelector('.auto-resize-textarea');
    textarea.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
}
