document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    var buttons = document.querySelectorAll('.buttoncontainer');
    console.log("Buttons found:", buttons.length);
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var target = event.target;
            // Traverse up the DOM tree to find the button with the correct ID
            while (target && !target.classList.contains('buttoncontainer')) {
                target = target.parentElement;
            }
            if (!target) {
                console.log("Button container not found");
                return;
            }
            console.log("Button clicked:", target.id);
            
            var audio = document.getElementById('hoverSound');
            if (!audio) {
                console.error("Audio element not found");
                return;
            }
            
            var targetPage;

            // Determine which button was clicked and set the target page
            if (target.id === 'screen1button') {
                targetPage = 'screen2.html';
                console.log("screen1button clicked");
                } else if (target.id === 'screen2button') {
                    console.log("screen2button clicked");
                    targetPage = 'screen3.html';
                } else if (target.id === 'screen3button') {
                    console.log("button3 clicked");
                    targetPage = 'screen4.html';
                    } else if (target.id === 'screen4button') {
                        console.log("screen4button clicked");
                        targetPage = 'screen5.html';
                    } else if (target.id === 'screen5button') {
                        targetPage = 'screen6.html';
                        console.log("screen5button clicked");
                        } else if (target.id === 'screen6button') {
                            console.log("screen6button clicked");
                            targetPage = 'screen7.html';
                        } else if (target.id === 'screen7button') {
                            console.log("screen7button clicked");
                            targetPage = 'indexf.html';
                        
                
            } else {
                console.log("Unrecognized button clicked");
                return; // Exit if the clicked element is not a recognized button
            }

            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = targetPage;
            }, 700); // Delay matches animation duration

            audio.play().catch(error => {
                console.error("Audio play failed:", error);
                // Optionally, handle the error, e.g., by showing a message to the user
            });
        });
    });
});
