// file.js
document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.contenor span');

    spans.forEach(span => {
        span.addEventListener('click', () => {
            span.classList.toggle('active');
        });
    });
});