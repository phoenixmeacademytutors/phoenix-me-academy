// Functionality for Phoenix M & E Academy

document.addEventListener('DOMContentLoaded', () => {
    console.log("Phoenix Academy Site Loaded");
    
    // 1. Smooth Navigation Highlight
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});

/**
 * Function to handle course inquiries
 * This can later be linked to an email API or WhatsApp
 */
function openInquiry(courseName) {
    const statusBox = document.getElementById('status-message');
    
    // Create a simple alert-style interaction
    const userConfirm = confirm(`Would you like to register for the ${courseName} program?`);
    
    if (userConfirm) {
        statusBox.innerText = `Thank you! Redirecting you to the ${courseName} registration form...`;
        statusBox.classList.remove('hidden');
        statusBox.style.display = 'block';
        
        // Example: Redirect to WhatsApp with a pre-filled message
        setTimeout(() => {
            const phoneNumber = "27665568332"; // From your flyer
            const message = encodeURIComponent(`Hi Phoenix Academy, I'm interested in the ${courseName} program.`);
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }, 1500);
    }
}

document.getElementById('enrollmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 1. Collect the data from the form
    const name = document.getElementById('parentName').value;
    const grade = document.getElementById('studentGrade').value;
    const phone = document.getElementById('contactNumber').value;
    
    // Check which interests were selected
    let interests = [];
    if(document.getElementById('checkAcademic').checked) interests.push("Academic");
    if(document.getElementById('checkMusic').checked) interests.push("Music");
    const interestList = interests.join(" & ");

    // 2. Format the WhatsApp Message
    const myNumber = "27665568332"; // Your WhatsApp number
    const message = `*Registration Inquiry Request*%0A` +
                    `*Name:* ${name}%0A` +
                    `*Grade:* ${grade}%0A` +
                    `*Parent Phone:* ${phone}%0A` +
                    `*Interested In:* ${interestList}`;

    // 3. Open WhatsApp
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
    
    // 4. Show success on the website
    const feedback = document.getElementById('formFeedback');
    feedback.innerHTML = "Opening WhatsApp to send your request...";
    feedback.className = "success-msg";
    this.reset();
});
function registerNow() {
    const confirmRegistration = confirm("Would you like to register for the Full Academic Program?");
    
    if (confirmRegistration) {
        const myNumber = "27665568332"; // Your WhatsApp number
        const message = "Hello Phoenix M & E Academy, I would like to register for the Full Academic Program.";
        
        // This line is what actually opens WhatsApp
        window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
}
function partialRegister(type) {
    const myNumber = "27665568332"; // Your WhatsApp number
    let message = "";

    if (type === 'Academic') {
        message = "Hello Phoenix M & E Academy, I am interested in registering for an Individual Academic Subject (R100).";
    } else {
        message = "Hello Phoenix M & E Academy, I am interested in Individual Musical Education (R150).";
    }

    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, '_blank');
}
