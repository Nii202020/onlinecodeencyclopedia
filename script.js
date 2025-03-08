const toggleButton = document.getElementById('mode-toggle');

// Check for saved user preference in local storage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update local storage based on current mode
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
