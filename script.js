const toggleButton = document.getElementById('mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change button text based on current mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light';
    } else {
        toggleButton.textContent = 'Dark';
    }
});
