let icon = document.querySelector('.fa-bars');
let ham = document.querySelector('.hammenu')
let hamNav = document.querySelector('.hamnav');
let closed = document.querySelector('.close-i');

icon.addEventListener('click', function(){
   icon.style.backgroundColor = "turquoise";
   ham.style.top = "0"; 
   ham.style.opacity = "100";
   ham.style.backgroundColor = 'rgba(41, 40, 40, 0.815)';
   hamNav.style.opacity = '100';
 
})

closed.addEventListener('click', function(){
  icon.style.backgroundColor = "rgba(41, 40, 40, 0.815)";
  ham.style.top = "-800px"; 
  ham.style.backgroundColor = 'rgba(41, 40, 40, 0.815)';
  hamNav.style.opacity = '0';

})