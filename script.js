// Variable Declaration
let bgImg = document.getElementById('background-img');
let enquiryBtn = document.querySelector('#enquiryBtn');
let formContainer = document.getElementsByClassName("form-container")[0];
let closeIcon = document.getElementsByClassName('box')[0];
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userNum = document.getElementById('userNum');
let userCourse = document.getElementById('userCourse');
let submitBtn = document.getElementById('submitBtn');
let outName = document.getElementById('outName');
let outEmail = document.getElementById('outEmail');
let outNum = document.getElementById('outNum');
let outCourse = document.getElementById('outCourse');
let output = document.getElementsByClassName('output')[0];
let editBtn = document.getElementById('edit');
let deleteBtn = document.getElementById('delete');
let confirmBtn = document.getElementById('confirm');

// Using Events




// <----------Enquiry Button---------->
enquiryBtn.addEventListener('click', function () {
    formContainer.style.transform = 'scale(1)';
    formContainer.style.top = '0%';

    enquiryBtn.style.opacity = '0.4';

    bgImg.style.filter = "invert()";

    output.style.transform = 'scale(0)';
    output.style.bottom = '-100%';

})

// <----------Closing the Enquiry Box---------->
closeIcon.addEventListener('click', function () {
    formContainer.style.transform = 'scale(0)';
    formContainer.style.top = '-100%';

    bgImg.style.filter = "none";

    userName.value = "";
    userEmail.value = "";
    userNum.value = "";
    userCourse.value = "none";

    enquiryBtn.style.opacity = '1';
})


// <----------Submitting Form---------->
submitBtn.addEventListener('click', function () {

    if (userName.value == "") {
        alert("Please enter the name");
    } else if (userEmail.value == "") {
        alert("Please enter the email");
    } else if (userNum.value == "") {
        alert("Please enter the number");
    } else if (userCourse.value == "") {
        alert("Please enter the course");
    }
    else {
        outName.value = userName.value;
        outEmail.value = userEmail.value;
        outNum.value = userNum.value;
        outCourse.value = userCourse.value;


        formContainer.style.transform = 'scale(0)';
        formContainer.style.top = '-100%';

        output.style.transform = 'scale(1)';
        output.style.bottom = '30%';
        bgImg.style.filter = "none";

        enquiryBtn.style.opacity = '0.4';
    }
});




// <------Edit Button Function------>  
editBtn.addEventListener('click', function () {
    if (editBtn.innerHTML.toLowerCase() == 'edit') {
        outName.removeAttribute("readonly");
        outName.focus();
        outEmail.removeAttribute("readonly");
        outNum.removeAttribute("readonly");
        editBtn.innerHTML = 'Save';

    } else {
        outName.setAttribute = "readonly", "readonly";
        editBtn.innerHTML = 'Edit';

        enquiryBtn.style.opacity = '1';
    }
})

// <------Delete Button Function------>  
deleteBtn.addEventListener('click', function () {
    output.style.transform = 'scale(0)';
    output.style.bottom = '-100%';

    userName.value = "";
    userEmail.value = "";
    userNum.value = "";
    userCourse.value = "none";

    enquiryBtn.style.opacity = '1';

    bgImg.style.filter = "invert()";

})

// <------Confirm Button Function------>  
confirmBtn.addEventListener('click', function () {
    alert("Your form has been submitted successfully")
    userName.value = "";
    userEmail.value = "";
    userNum.value = "";
    userCourse.value = "none";
    output.style.transform = 'scale(0)';
    output.style.bottom = '-100%';
    formContainer.style.transform = 'scale(1)';
    formContainer.style.top = '0';
    bgImg.style.filter = "invert()";
});
