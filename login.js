var signup2 = document.querySelector('#signup2');

signup2.addEventListener('click', () => {
document.querySelector('.Login').classList.add('loginslide');
document.querySelector('.Signup').classList.add('signupslide');
document.querySelector('.welcome').classList.add('welcomeshow');
document.querySelector('.signup').classList.add('signuphide');
document.querySelector('.login').classList.add('loginhide');
document.querySelector('.signup2').classList.add('signup2show');

document.querySelector('.Login').style.transition="2s all";
document.querySelector('.Signup').style.transition="2s all";
});


var login2 = document.querySelector('#login2');

login2.addEventListener('click', () => {
  document.querySelector('.Login').classList.remove('loginslide');
  document.querySelector('.Signup').classList.remove('signupslide');
  document.querySelector('.welcome').classList.remove('welcomeshow');
document.querySelector('.signup').classList.remove('signuphide');
document.querySelector('.login').classList.remove('loginhide');
document.querySelector('.signup2').classList.remove('signup2show');

  document.querySelector('.Login').style.transition="2s all";
  document.querySelector('.Signup').style.transition="2s all";
  document.querySelector('.welcome').style.transiton="2s all";
  document.querySelector('.signup').style.transition="2s all";
  document.querySelector('.login').style.transiton="2s all";
  document.querySelector('.signup2').style.transition="2s all";
}); 

function myFunction(x) {
    x.classList.toggle("change");
    
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('.faderight').classList.toggle('faderightshow');
    document.querySelector('.fadeleft').classList.toggle('fadeleftshow');
  }
  

var signup = document.querySelector('#signup');

signup.addEventListener('click', () => {

  var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordcheck = document.getElementById("passwordcheck").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email =='')
    {
      alert("please enter email.");
    }
    else if(password=='')
    {
          alert("enter the password");
    }
    else if(!filter.test(email))
    {
      alert("Enter valid email id.");
    }
    else if(password.length < 6)
    {
      alert("Password min is 6.");
    }
    else if (password !== passwordcheck){
      alert('Check the password again');
    }
    else{
   alert('Thank you for Sign Up');

   document.querySelector('.Login').classList.remove('loginslide');
   document.querySelector('.Signup').classList.remove('signupslide');
   document.querySelector('.welcome').classList.remove('welcomeshow');
 document.querySelector('.signup').classList.remove('signuphide');
 document.querySelector('.login').classList.remove('loginhide');
 document.querySelector('.signup2').classList.remove('signup2show');
 
   document.querySelector('.Login').style.transition="2s all";
   document.querySelector('.Signup').style.transition="2s all";
   document.querySelector('.welcome').style.transiton="2s all";
   document.querySelector('.signup').style.transition="2s all";
   document.querySelector('.login').style.transiton="2s all";
   document.querySelector('.signup2').style.transition="2s all";

 if(email && password){
   localStorage.setItem(email,password);
 }
      }

    });
    


var login = document.querySelector('#login');

login.addEventListener('click', () => {
  var email = document.getElementById("email1").value;
  var password = document.getElementById("pwd1").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(email =='')
  {
    alert("please enter email.");
  }
  else if(password=='')
  {
        alert("enter the password");
  }
  else if(!filter.test(email))
  {
    alert("Enter valid email id.");
  }
  else if(password.length < 6)
  {
    alert("Password min is 6.");
  }
  else
  {
    alert('Thank You for LOGIN');
    if(email && password){
      localStorage.setItem(email,password);
      location.reload();
    }
  }
})

function pwdcheck() {
  var x = document.querySelectorAll(".pwd");
  for(var i=0; i< x.length; i++){
  if (x[i].type === "password") {
    x[i].type = "text";
  } else {
    x[i].type = "password";
  }
}
}

function pwdcheck1() {
  var x = document.getElementById("pwd1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



