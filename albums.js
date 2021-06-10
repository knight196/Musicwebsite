function myFunction(x) {
    x.classList.toggle("change");
    
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('.faderight').classList.toggle('faderightshow');
    document.querySelector('.fadeleft').classList.toggle('fadeleftshow');
  }
  

  function album(evt,album){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    
    for(i=0; i < tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
        tablinks = document.getElementsByClassName('tablinks');
        for(i=0; i<tablinks.length; i++){
            tablinks.className = tablinks[i].className.replace('active', '');
        }
document.getElementById(album).style.display="block";
evt.currentTarget.className += "active";

}
document.getElementById("defaultOpen").click();


function getValue(){
    var op = document.getElementById('options').value;

if(op ==  "all"){
    document.querySelector('.content1').style.display="none";
    document.querySelector('.content2').style.display="none";
 document.querySelector('.content3').style.display="none";
 document.querySelector('.allshow').style.display="block";
 document.querySelector('.content4').style.display="none";
}

else if(op == "one"){
    document.querySelector('.content1').style.display="block";
           document.querySelector('.content2').style.display="none";
        document.querySelector('.content3').style.display="none";
        document.querySelector('.allshow').style.display="none";
        document.querySelector('.content4').style.display="none";
}

    else if(op == "two"){
        document.querySelector('.content1').style.display="none";
        document.querySelector('.content2').style.display="block";
        document.querySelector('.content3').style.display="none";
        document.querySelector('.allshow').style.display="none";
        document.querySelector('.content4').style.display="none";
        
    }

    else if(op == "three"){
     document.querySelector('.content1').style.display="none";
     document.querySelector('.allshow').style.display="none";
     document.querySelector('.content2').style.display="none";
     document.querySelector('.content3').style.display="block";
     document.querySelector('.content4').style.display="none";

    }

    else if(op == "four"){
        document.querySelector('.content1').style.display="none";
        document.querySelector('.content2').style.display="none";
        document.querySelector('.content3').style.display="none";
        document.querySelector('.content4').style.display="block";
        document.querySelector('.allshow').style.display="none";
        
    }
}


document.getElementById('all').selected ="true";


