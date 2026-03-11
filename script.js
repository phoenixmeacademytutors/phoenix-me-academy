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
        
       
        setTimeout(() => {
            const phoneNumber = "27665568332"; // From your flyer
            const message = encodeURIComponent(`Hi Phoenix Academy, I'm interested in the ${courseName} program.`);
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }, 1500);
    }
}
function submitCallbackRequest() {
    // Collect data using the exact IDs from your HTML
    const name = document.getElementById('studentName').value;
    const grade = document.getElementById('studentGrade').value;
    const phone = document.getElementById('contactNumber').value;
    
    // Collect checked interests
    let interests = [];
    document.querySelectorAll('input[name="interest"]:checked').forEach((box) => {
        interests.push(box.value);
    });

    if (!name || !phone) {
        alert("Please provide a name and contact number.");
        return;
    }

    const myNumber = "27665568332"; 
    

    const text = `Academic Enrollment Form%0A%0A` +
                 `*Student Initiative Enrollment*%0A` +
                 `*Name:* ${name}%0A` +
                 `*Grade:* ${grade}%0A` +
                 `*Contact:* ${phone}%0A` +
                 `*Interested In:* ${interests.join(", ") || "Academics"}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, '_blank');
}

function submitRegistration() {
    const name = document.getElementById('regName').value;
    const phone = document.getElementById('regPhone').value; // New
    const email = document.getElementById('regEmail').value; // New
    const school = document.getElementById('regSchool').value;
    const grade = document.getElementById('regGrade').value;
    const payment = document.getElementById('payMethod').value;
    let selected = [];
    document.querySelectorAll('input[name="prog"]:checked').forEach((box) => {
        selected.push(box.value);
    });

    if (!name || !phone || selected.length === 0) {
        alert("Please provide a name, phone number, and select a program.");
        return;
    }

    const myNumber = "27665568332";
    const message = `*NEW ACADEMY REGISTRATION*%0A%0A` +
                    `*Student:* ${name}%0A` +
                    `*WhatsApp:* ${phone}%0A` +
                    `*Email:* ${email}%0A` +
                    `*School:* ${school}%0A` +
                    `*Grade:* ${grade}%0A` +
                    `*Selection:* ${selected.join(", ")}%0A` +
                    `*Payment:* ${payment}`;

    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}

