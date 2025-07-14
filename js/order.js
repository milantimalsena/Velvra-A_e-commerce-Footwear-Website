document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the form from submitting
    
    

    var fullName = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var messageBox = document.getElementById("message");

    messageBox.innerHTML = `Dear <strong>${fullName}  </strong>, your order for,<strong>${address}<strong>,  has been placed successfully! `;
    messageBox.style.color = "green";
    messageBox.style.fontSize = "20px"; 
    messageBox.style.fontWeight = "bold";
    messageBox.style.textAlign = "center";
    messageBox.style.padding = "20px";
    messageBox.style.border = "2px solid green";
    messageBox.style.borderRadius = "10px";
    messageBox.style.backgroundColor = "#f0fff0";
    messageBox.style.margin = "20px auto";
    messageBox.style.width = "80%";
    messageBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    messageBox.style.transition = "all 0.3s ease-in-out";
    messageBox.style.opacity = "1";
    messageBox.style.transform = "scale(1.05)";
    messageBox.style.animation = "fadeIn 1s";
    messageBox.style.animationFillMode = "forwards";
    messageBox.style.animationName = "fadeIn";
    messageBox.style.animationDuration = "1s";
    messageBox.style.animationTimingFunction = "ease-in-out";   
    messageBox.style.animationIterationCount = "1";
    messageBox.style.animationDirection = "normal";
   
});
