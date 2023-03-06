$("nav a").on({
    hover: function(){
      $(this).css("background-color", "yellow");
    } 
    
  });

  $("nav a").ready(function() {
    $('leftbutton').click(function() {
      window.location.href = "https://drive.google.com/file/d/1ZD_du3jUAtHHFFzkJ_Xif80cz67BFg6n/view";
    });
  });

  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
      dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });
  
    dropdown.addEventListener('mouseleave', function() {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
  });