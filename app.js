var form = document.getElementById("resume-form");
var resumeSection = document.getElementById("resume-section");
var resumeName = document.getElementById("resume-name");
var resumeEmail = document.getElementById("resume-email");
var resumePhone = document.getElementById("resume-phone");
var resumeEducation = document.getElementById("resume-education");
var resumeSkills = document.getElementById("resume-skills");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var educationInput = document.getElementById("education").value;
    var skillsInput = document.getElementById("skills").value;
    // Update the resume content
    resumeName.innerText = nameInput;
    resumeEmail.innerText = "Email: ".concat(emailInput);
    resumePhone.innerText = "Phone: ".concat(phoneInput);
    resumeEducation.innerText = educationInput;
    // Convert the skills into a list
    var skillsArray = skillsInput.split(",").map(function (skill) { return skill.trim(); });
    resumeSkills.innerHTML = ""; // Clear any previous skills
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill;
        resumeSkills.appendChild(li);
    });
    // Show the resume section
    resumeSection.classList.remove("hidden");
});
