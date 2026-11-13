// Get the form and the message area
const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

// Run this code when the form is submitted
form.addEventListener("submit", function (e) {
	e.preventDefault(); // stops the page from reloading

	// Read what the user typed
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const message = document.getElementById("message").value.trim();

	feedback.style.color = "red";

	// Check 1: no field is empty
	if (name === "" || email === "" || phone === "" || message === "") {
		feedback.textContent = "All fields are required.";
		return;
	}

	// Check 2: email format is valid
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		feedback.textContent = "Please enter a valid email address.";
		return;
	}

	// Check 3: phone contains only digits
	const phonePattern = /^[0-9]+$/;
	if (!phonePattern.test(phone)) {
		feedback.textContent = "Phone number must contain digits only.";
		return;
	}

	// Everything is correct
	feedback.style.color = "green";
	feedback.textContent = "Thank you, " + name + "! Your message has been sent.";
	form.reset();
});
