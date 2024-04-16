document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    
    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const textInput = document.getElementById('text-input');
            textInput.value = e.target.result;
        }
        
        reader.readAsText(file);
    });
});
