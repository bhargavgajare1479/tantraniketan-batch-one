document.addEventListener('DOMContentLoaded', () => {
    // Example: Manipulate an element from index.html
    const heading = document.getElementById('main-heading');
    if (heading) {
        heading.textContent = 'Welcome to Tantraniketan Batch One!';
        heading.style.color = '#2c3e50';
    }

    // Example: Add a click event to a button
    const button = document.getElementById('action-btn');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});