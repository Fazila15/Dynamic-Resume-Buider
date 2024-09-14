const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeSection = document.getElementById("resume-section") as HTMLElement;
const resumeName = document.getElementById("resume-name") as HTMLElement;
const resumeEmail = document.getElementById("resume-email") as HTMLElement;
const resumePhone = document.getElementById("resume-phone") as HTMLElement;
const resumeEducation = document.getElementById("resume-education") as HTMLElement;
const resumeSkills = document.getElementById("resume-skills") as HTMLElement;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const nameInput = (document.getElementById("name") as HTMLInputElement).value;
    const emailInput = (document.getElementById("email") as HTMLInputElement).value;
    const phoneInput = (document.getElementById("phone") as HTMLInputElement).value;
    const educationInput = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skillsInput = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Update the resume content
    resumeName.innerText = nameInput;
    resumeEmail.innerText = `Email: ${emailInput}`;
    resumePhone.innerText = `Phone: ${phoneInput}`;
    resumeEducation.innerText = educationInput;

    // Convert the skills into a list
    const skillsArray = skillsInput.split(",").map(skill => skill.trim());
    resumeSkills.innerHTML = ""; // Clear any previous skills
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        resumeSkills.appendChild(li);
    });

    // Show the resume section
    resumeSection.classList.remove("hidden");
});
