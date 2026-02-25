/* ================= EDUCATION AUTO ADD ================= */

let educationStep = 0;

function showEducationOptions() {

    console.log("Add Education Clicked. Step:", educationStep);

    const container = document.getElementById("educationContainer");

    if (educationStep === 0) {
        addBasicEducation("10th");
    } 
    else if (educationStep === 1) {
        addBasicEducation("12th");
    } 
    else {
        addProfessionalEducation();
    }

    educationStep++;
}

function addBasicEducation(type) {

    console.log(type + " Education Added");

    const container = document.getElementById("educationContainer");

    let div = document.createElement("div");

    div.innerHTML = `
        <h4>${type}</h4>
        <input type="text" placeholder="School Name"><br><br>
        <input type="number" placeholder="Percentage"><br><br>
    `;

    container.appendChild(div);
}

function addProfessionalEducation() {

    console.log("Professional Education Added");

    const container = document.getElementById("educationContainer");

    let div = document.createElement("div");

    div.innerHTML = `
        <h4>Professional Degree</h4>
        <select>
            <option value="">Select Degree</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>MCA</option>
            <option>MSc</option>
        </select><br><br>

        <select>
            <option value="">Select Branch</option>
            <option>CSE</option>
            <option>AIML</option>
            <option>ECE</option>
            <option>EEE</option>
        </select><br><br>
    `;

    container.appendChild(div);
}


/* ================= COUNTRY → STATE → DISTRICT ================= */

let data = {
    india: {
        andhra: ["Visakhapatnam", "Vijayawada"],
        telangana: ["Hyderabad", "Warangal"]
    },
    usa: {
        california: ["Los Angeles", "San Diego"],
        texas: ["Houston", "Dallas"]
    }
};

function loadStates(type) {

    let country = document.getElementById(type + "Country").value;
    let state = document.getElementById(type + "State");

    console.log("Country Selected (" + type + "):", country);

    state.innerHTML = '<option value="">Select State</option>';

    if (!country || !data[country]) return;

    for (let s in data[country]) {
        let option = document.createElement("option");
        option.value = s;
        option.text = s;
        state.appendChild(option);
    }
}

function loadDistricts(type) {

    let country = document.getElementById(type + "Country").value;
    let state = document.getElementById(type + "State").value;
    let district = document.getElementById(type + "District");

    console.log("State Selected (" + type + "):", state);

    district.innerHTML = '<option value="">Select District</option>';

    if (!country || !state || !data[country][state]) return;

    data[country][state].forEach(d => {
        let option = document.createElement("option");
        option.value = d;
        option.text = d;
        district.appendChild(option);
    });
}


/* ================= COPY ADDRESS ================= */

function handleCopy() {

    console.log("Same Address Checkbox Clicked");

    let cDoor = document.getElementById("cDoor");
    let cStreet = document.getElementById("cStreet");
    let cPincode = document.getElementById("cPincode");

    if (cDoor.value || cStreet.value || cPincode.value) {
        console.log("Current address already has data → Showing popup");
        document.getElementById("popup").style.display = "flex";
    } else {
        copyAddress();
        document.getElementById("sameAddress").checked = true;
    }
}

function confirmCopy() {
    console.log("Popup Confirmed → Copying Address");
    copyAddress();
    document.getElementById("popup").style.display = "none";
    document.getElementById("sameAddress").checked = true;
}

function closePopup() {
    console.log("Popup Closed");
    document.getElementById("popup").style.display = "none";
    document.getElementById("sameAddress").checked = false;
}

function copyAddress() {

    console.log("Copying Permanent Address to Current Address");

    document.getElementById("cDoor").value = document.getElementById("pDoor").value;
    document.getElementById("cStreet").value = document.getElementById("pStreet").value;
    document.getElementById("cCountry").value = document.getElementById("pCountry").value;

    loadStates('c');

    document.getElementById("cState").value = document.getElementById("pState").value;

    loadDistricts('c');

    document.getElementById("cDistrict").value = document.getElementById("pDistrict").value;

    document.getElementById("cPincode").value = document.getElementById("pPincode").value;

    validateForm();
}


/* ================= REGEX VALIDATION ================= */

const firstNameRegex = /^[A-Za-z]{3,}$/;
const middleNameRegex = /^[A-Za-z]*$/;
const lastNameRegex = /^[A-Za-z]{1,}$/;
const mobileRegex = /^[0-9]{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^.{4,}$/;
const passwordRegex = /^.{6,}$/;
const pincodeRegex = /^[0-9]{6}$/;

function validateForm() {

    let valid =
        firstNameRegex.test(document.getElementById("fn").value.trim()) &&
        middleNameRegex.test(document.getElementById("mn").value.trim()) &&
        lastNameRegex.test(document.getElementById("ln").value.trim()) &&
        mobileRegex.test(document.getElementById("number").value.trim()) &&
        emailRegex.test(document.getElementById("email").value.trim()) &&
        usernameRegex.test(document.getElementById("username").value.trim()) &&
        passwordRegex.test(document.getElementById("password").value.trim()) &&
        document.getElementById("pDoor").value.trim() !== "" &&
        document.getElementById("pStreet").value.trim() !== "" &&
        document.getElementById("pCountry").value !== "" &&
        document.getElementById("pState").value !== "" &&
        document.getElementById("pDistrict").value !== "" &&
        pincodeRegex.test(document.getElementById("pPincode").value.trim()) &&
        document.getElementById("cDoor").value.trim() !== "" &&
        document.getElementById("cStreet").value.trim() !== "" &&
        document.getElementById("cCountry").value !== "" &&
        document.getElementById("cState").value !== "" &&
        document.getElementById("cDistrict").value !== "" &&
        pincodeRegex.test(document.getElementById("cPincode").value.trim());

    console.log("Form Validation Status:", valid);

    document.getElementById("register").disabled = !valid;
}


/* Attach Validation to All Inputs */

document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("input", validateForm);
    el.addEventListener("change", validateForm);
});


/* ================= SUBMIT ================= */

document.getElementById("studentForm").addEventListener("submit", function(e){
    e.preventDefault();

    console.log("===== FINAL SUBMITTED DATA =====");
    console.log("First Name:", document.getElementById("fn").value);
    console.log("Middle Name:", document.getElementById("mn").value);
    console.log("Last Name:", document.getElementById("ln").value);
    console.log("Mobile:", document.getElementById("number").value);
    console.log("Email:", document.getElementById("email").value);
    console.log("Username:", document.getElementById("username").value);

    alert("Registration Successful");
});
