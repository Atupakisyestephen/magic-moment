var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Add this code at the end of your existing JavaScript code

// Subscribe Form Handler
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('emailInput').value;
  
  // Change button text to "Subscribed"
  document.getElementById('subscribeButton').value = 'Subscribed';
  document.getElementById('subscribeButton').disabled = true;

  // Send email notification to the subscribed user
  sendEmailNotification(email);
});

function sendEmailNotification(email) {
  // Implement your server-side code here to send an email notification
  // This code is just a placeholder and needs to be replaced with your own email sending logic
  // Make sure you have a server-side endpoint or function to handle the email sending
  // You can use a library or service like Nodemailer, SendGrid, or Mailgun to send emails
  
  // Example using SMTP.js (client-side)
  Email.send({
    SecureToken: "7d8f8797-7a2c-4d3e-846a-7bc100ef5473",
    To: email,
    From: "atupakisyeelias@gmail.com",
    Subject: "Website Update",
    Body: "A new video has been added/deleted from the website.",
  }).then(function (message) {
    console.log("Email sent successfully:", message);
  }).catch(function (error) {
    console.error("Error sending email:", error);
  });
}


function searchMovie(event) {
  event.preventDefault();
  
  // Get the user's search input
  var userInput = document.getElementById('searchInput').value.toLowerCase();

  // Check if the search input matches any movie title
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var foundMatch = false;
  for (var i = 0; i < slides.length; i++) {
    var slideTitle = slides[i].querySelector(".heading").textContent.toLowerCase();
    if (slideTitle.includes(userInput)) {
      // Show the slide and set it as active
      slides[i].style.display = "block";
      dots[i].className += " active";
      foundMatch = true;
    } else {
      // Hide the slide and remove active class from dots
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
  }

  // If no match found, display "Search results not found"
  if (!foundMatch) {
    var slideshowContainer = document.querySelector(".slideshow-container");
    slideshowContainer.innerHTML = "<h3>Search results not found.</h3>";
  }
}