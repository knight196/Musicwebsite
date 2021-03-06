
function myFunction(x) {
  x.classList.toggle("change");
  
  document.querySelector('.navtop').classList.toggle('show');
  document.querySelector('.faderight').classList.toggle('faderightshow');
  document.querySelector('.fadeleft').classList.toggle('fadeleftshow');
}
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
//accordion 
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
const btn = question.querySelector(".question-btn");
btn.addEventListener('click', function(){

   questions.forEach(function(item){
      if(item !== question){
         item.classList.remove("show-text");
      }
   });
   question.classList.toggle("show-text");
})
});

