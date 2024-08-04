document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buttoncontainer').addEventListener('click', function() {
        var audio = document.getElementById('hoverSound');
        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = 'screen2.html'; // Replace 'newPage.html' with your target URL
        }, 700); // Delay matches animation duration
        audio.play().catch(error => {
            console.error("Audio play failed:", error);
            // Optionally, handle the error, e.g., by showing a message to the user
        });
    });
});
