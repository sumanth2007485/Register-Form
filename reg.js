// ---------- COPY ADDRESS ----------
function copyAddress() {

    let check = document.getElementById("sameAddress").checked;

    if (check) {
        document.getElementById("cHouse").value = document.getElementById("pHouse").value;
        document.getElementById("cStreet").value = document.getElementById("pStreet").value;
        document.getElementById("cCity").value = document.getElementById("pCity").value;
        document.getElementById("cState").value = document.getElementById("pState").value;
        document.getElementById("cPincode").value = document.getElementById("pPincode").value;
    } else {
        document.getElementById("cHouse").value = "";
        document.getElementById("cStreet").value = "";
        document.getElementById("cCity").value = "";
        document.getElementById("cState").value = "";
        document.getElementById("cPincode").value = "";
    }
}


// ---------- SHOW OTHER COURSE ----------
function checkCourse() {

    let course = document.getElementById("course").value;
    let other = document.getElementById("otherCourse");

    if (course === "other") {
        other.style.display = "block";
    } else {
        other.style.display = "none";
    }
}


// ---------- SHOW OTHER BRANCH ----------
function checkBranch() {

    let branch = document.getElementById("branch").value;
    let other = document.getElementById("otherBranch");

    if (branch === "other") {
        other.style.display = "block";
    } else {
        other.style.display = "none";
    }
}


// ---------- FORM SUBMIT ----------
document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.getElementById("fn").value;
    let lastName = document.getElementById("ln").value;
    let dob = document.getElementById("date").value;
    let mobile = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let course = document.getElementById("course").value;
    if (course === "other") {
        course = document.getElementById("otherCourse").value;
    }

    let branch = document.getElementById("branch").value;
    if (branch === "other") {
        branch = document.getElementById("otherBranch").value;
    }

    let college = document.getElementById("clg").value;

    let skillList = document.querySelectorAll('input[name="skills"]:checked');
    let skills = [];
    skillList.forEach(skill => skills.push(skill.value));

    let permanentAddress = {
        house: document.getElementById("pHouse").value,
        street: document.getElementById("pStreet").value,
        city: document.getElementById("pCity").value,
        state: document.getElementById("pState").value,
        pincode: document.getElementById("pPincode").value
    };

    let presentAddress = {
        house: document.getElementById("cHouse").value,
        street: document.getElementById("cStreet").value,
        city: document.getElementById("cCity").value,
        state: document.getElementById("cState").value,
        pincode: document.getElementById("cPincode").value
    };

    let student = {
        firstName,
        lastName,
        dob,
        mobile,
        email,
        username,
        password,
        course,
        branch,
        college,
        skills,
        permanentAddress,
        presentAddress
    };

    // SAVE DATA
    localStorage.setItem("studentData", JSON.stringify(student));

    alert("Registration Successful! Now login.");

    console.log("Student Registration Data:");
    console.log(student);

});
