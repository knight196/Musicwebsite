function myFunction(x) {
    x.classList.toggle("change");
    
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('.faderight').classList.toggle('faderightshow');
    document.querySelector('.fadeleft').classList.toggle('fadeleftshow');
  }
  
  var month = document.querySelector('#month');
 
  var year1 = document.querySelectorAll('.year');
  var month1 = document.querySelectorAll('.month');


  var onemonth = document.querySelectorAll('.onemonth');
  var twomonth = document.querySelectorAll('.twomonth');
  
  
  month.addEventListener('click', () => {
    for(var i=0; i < year1.length; i++){
        year1[i].style.display="none";
    }
    for(var i=0; i < month1.length; i++){
     month1[i].style.display="block";
 }
 for(var i=0; i < onemonth.length; i++){
    twomonth[i].style.display="none";
}
for(var i=0; i < twomonth.length; i++){
 onemonth[i].style.display="block";
}
    });

    
    var year = document.querySelector('#year');
    
    
    year.addEventListener('click', () => {
      
   for(var i=0; i < year1.length; i++){
       year1[i].style.display="block";
   }
   for(var i=0; i < month1.length; i++){
    month1[i].style.display="none";
}

for(var i=0; i < onemonth.length; i++){
    onemonth[i].style.display="none";
}
for(var i=0; i < twomonth.length; i++){
 twomonth[i].style.display="block";
}
      });