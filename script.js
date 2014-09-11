var left_compet = document.getElementsByClassName('left_compet')[0],
    right_compet = document.getElementsByClassName('right_compet')[0],
    axis = document.getElementsByClassName('axis')[0],
    left_compet_on_chains = document.getElementsByClassName('left_compet_on_chains ')[0],
    right_compet_on_chains = document.getElementsByClassName('right_compet_on_chains ')[0];
    

left_compet.addEventListener('mouseover', function(){
    left_compet_on_chains.classList.remove('animate-element');
    left_compet_on_chains.classList.add('animate-element'); 
    }, false);
right_compet.addEventListener('mouseover', function(){
    right_compet_on_chains.classList.add('animate-element'); 
    }, false);
left_compet.addEventListener('mouseover', function(){
    axis.classList.add('animate-element'); 
    }, false);
