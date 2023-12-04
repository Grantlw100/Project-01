// js for dropdown menu

var dropdown = document.querySelector('.dropdown');
 dropdown.classList.toggle('is-active');
 
dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
});

// end js for dropdown 