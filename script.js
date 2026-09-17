// ==========================================
// DP THE GROUP OF BUSINESS
// Enquiry & Website Functions
// ==========================================

// Open Enquiry Popup
function openEnquiry(product) {

    document.getElementById("productName").value = product;

    document.getElementById("enquiryModal").style.display = "flex";
}


// Close Enquiry Popup
function closeEnquiry() {

    document.getElementById("enquiryModal").style.display = "none";
}


// Send Enquiry on WhatsApp
function sendWhatsApp() {

    const product = document.getElementById("productName").value;
    const name = document.getElementById("customerName").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const message = document.getElementById("message").value.trim();


    // Required field validation
    if (!name || !quantity) {

        alert("कृपया Name आणि Quantity / Requirement भरा.");

        return;
    }


    // WhatsApp message
    const whatsappMessage =
        `नमस्कार DP The Group of Business,

मला Steel Material ची Requirement आहे.

Product: ${product}
Name: ${name}
Quantity / Requirement: ${quantity}
Additional Requirement: ${message}

कृपया मला Price आणि Availability ची माहिती द्या.`;


    const whatsappURL =
        "https://wa.me/919075750230?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");
}


// Current Year in Footer
document.getElementById("year").textContent =
    new Date().getFullYear();


// Close popup when clicking outside
window.addEventListener("click", function (event) {

    const modal = document.getElementById("enquiryModal");

    if (event.target === modal) {

        closeEnquiry();
    }

});