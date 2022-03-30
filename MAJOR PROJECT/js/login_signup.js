// Get the signup form div
let signup_form = document.getElementById("sign-up-form");
let signup_button = document.getElementById("btnSignUp");
let login_form = document.getElementById("login-form");
let login_button = document.getElementById("btnLogin");
let survey_formn = document.getElementById("survey-profile")
let survey_button = document.getElementById("completeSurvey");
let survey_q1 = document.getElementById("question1");
let login_submit = document.getElementById("btnLoginForm")
//let see_profile = document.getElementById("GoToProfile");
let signup_submit = document.getElementById("btnSubmit")



signup_button.addEventListener("click", function() {
    console.log(signup_form.classList.contains("hidden"));
    // If singup form has hidden class (true) then remove the class to show the element
    if (signup_form.classList.contains("hidden")) {
        signup_form.classList.remove("hidden")
    }
    else {
        signup_form.classList.add("hidden");
    }
   
    
    // If signup form does not have hidden class (false) add the the class to hide the element

    // signup_form.classList.add("hidden")
    // signup_form.classList.remove("hidden")
});

login_button.addEventListener("click", function(){
    console.log(login_form.classList.contains("hidden"));
    if (login_form.classList.contains("hidden")){
        login_form.classList.remove("hidden")
    }
    else{
        login_form.classList.add("hidden");
    }
})


// when button login is clicked show the survey 

$('#completeSurvey').hide();
$('#btnMatch').hide();
$('#btnSearch').hide();

survey_button.addEventListener("click", function(){
    console.log(survey_q1.classList.contains("hidden"));
    console.log('you are about to complete a survey');
    if (survey_q1.classList.contains("hidden")){
        survey_q1.classList.remove("hidden")
    }
    else{
        survey_q1.classList.add("hidden");
    }
})


//this was an attempt to hide the sign up sections when u click the submit button so that it disappears because ideally when u log in or sign up to a website obviously the sign up and login form doesnt remain on the page 
signup_submit.addEventListener("click", function(){
    console.log('testing')
    console.log(signup_submit.classList.contains("hidden"));
    // If singup form has hidden class (true) then remove the class to show the element
    if (signup_submit.classList.contains("hidden")) {
        signup_submit.classList.add("hidden")
    }
    else {
        signup_submit.classList.remove("hidden");
    }
})






