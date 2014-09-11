var left_compet = document.getElementsByClassName('left_compet')[0],
    right_compet = document.getElementsByClassName('right_compet')[0],
    axis = document.getElementsByClassName('axis')[0],
    left_compet_on_chains = document.getElementsByClassName('left_compet_on_chains')[0],
    right_compet_on_chains = document.getElementsByClassName('right_compet_on_chains')[0],
    competitors = document.getElementsByClassName('competitors')[0];
    
    
    
left_compet.addEventListener('click', function(){
    competitors.classList.remove('right-animation');
    competitors.classList.add('left-animation');
});
right_compet.addEventListener('click', function(){
    competitors.classList.remove('left-animation');
    competitors.classList.add('right-animation');
});
left_compet.addEventListener('click', function(){
    competitors.classList.remove('right-rotation');
    competitors.classList.add('left-rotation'); 
});
right_compet.addEventListener('click', function(){
    competitors.classList.remove('left-rotation');
    competitors.classList.add('right-rotation');
});
