var apikey = '622e99eadced170e8c83a23a';
var url = 'https://careynolds-2125.restdb.io/rest/profiles';
var loggedUser = {};
/*loggedUser.username = 'camilla';
loggedUser.firstname = 'camilla';
loggedUser.lastname = 'reynolds';
loggedUser.gender = 'female';
loggedUser.age = '17';
loggedUser.password = 'password'*/






function getAllProfiles(url,apikey){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        for(var i=0; i<response.length; i++){
            //console.log(response[i].Name);

            var profileItem = '<div class="profile" id="' + response[i]._id + '" >' + response[i].username + "</div>";
            $("body").append(profileItem);
            
            
        }
    });
}

function addProfiles(item, url, apikey){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(item)
    }
    
    $.ajax(settings).done(function (response) {
        console.log('Item successfully added');
        console.log(response);
    });

}
function getProfiles(itemID, url, apikey){
    var serviceURL = url + itemID;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": serviceURL,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log('Item successfully retrieved');
        console.log(response);
    });

}

/* --- Event Handlers --- */

$('#btnSubmit').click(function(){

    console.log('submitted');
    var tempItem = {username: $('#Username').val(),firstname: $('#FirstName').val(), lastname: $('#LastName').val(), gender: $('#Gender').val(), age: $('#Age').val(), dateOfBirth: $('#DateOfBirth').val(), password: $('#Password').val()};
    $('#completeSurvey').show();
    $('#btnLogin').hide();
    $('#btnSignUp').hide();


    addProfiles(tempItem, url, apikey);
})




/* --- Code to run at start --- */

//getAllProfiles(url,apikey);





const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

//First question 
ul_1.addEventListener("click", function() {
    console.log("please work")
    q1.style.display = "none";
    q2.style.display = "block";
});

//second question 
ul_2.addEventListener("click", function() {
    q2.style.display = "none";
    q3.style.display = "block";
});

//Display Thanks Messsage
ul_3.addEventListener('click',function() {
    q3.style.display = "none";
    survey.style.display = "none";
    end.style.display = "block";
});






//login function

function Login(url,apikey, username, password){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        for(var i=0; i<response.length; i++){
      
            console.log('check');
            /*var profileItem = '<div class="profile" id="' + response[i]._id + '" >' + response[i].username + "</div>";
            $("body").append(profileItem);*/

            //check if username and password equal the username and password field from database
            if ( username == response[i].username && password== response[i].password){
                console.log(loggedUser.username);
                //take them to profile screen 
                //this is not working - if you scroll to the top you will see commented out variables and i was thinking they should be used to hardcde the user login just for the prototype so we focus more on the searching element of the project
               
               
            }
            
        }
    });
}

//logging in function, on button login check username and password - this doesnt work

$('#btnLoginForm').click(function(){
    console.log('you are logging in');
    Login(url, apikey, $('#Username').val(), $('#Password').val());
    $('#completeSurvey').show();
    $('#btnLogin').hide();
    $('#btnSignUp').hide();
    $('.login Hidden').hide();
    $('#btnMatch').show();
    $('#btnSearch').show();
})










