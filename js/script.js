"use strict";
const submitButton = document.querySelector("button");
submitButton.addEventListener("click", function checkPasswordValidity(e) {
	const passwordInput = document.querySelector("input.password");
	const confirmPasswordInput = document.querySelector(
		"input.confirm-password"
	);
	if (passwordInput.value !== confirmPasswordInput.value) {
		e.preventDefault();
		passwordInput.classList.add("invalid");
		confirmPasswordInput.classList.add("invalid");
		document.querySelector("span.error").textContent =
			"Passwords do not match";
	}
});
