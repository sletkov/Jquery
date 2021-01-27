toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
let x = false;


$(document).ready(function(){
    $(".intro").click(function(){
        $(this).hide();
    });

    $(".box").click(function(){
      x= !x;
      if(x){
        $(this).addClass("prekol");
      }
      else{
        $(this).removeClass("prekol");
      }
      
  });

    $(".wcont").hover(function(){
        $(this).fadeOut();
        toastr["info"]("вы сломали сайт! поздравляю")
    }); 
});



$('.shopo').click(function(){
  $('.intro').show();
});




$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


  $(function() {

    var $list, $newItemForm;
    $list = $('.superlist');
    $newItemForm = $('#tags');
  
    $("#add").click( function(e) {
      e.preventDefault();
      var text = $('input:text').val();
      $list.append('<li>' + text + '</li>');
      $('input:text').val('');
    });
  
    $list.on('click', 'li', function() {
      var $this = $(this);
      $this.remove();
    });
  
  });

  $('button').click(function(){
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
      $(me).addClass("anim");
    }, 10);
  });
  
  $('button').click(function(){
    toastr["info"]("вы нашли пасхалку!")
    $(this).clone().appendTo('.footer');
  });

  $(".workplacetxt").click(function(){
    $(this).after('.');
    $(this).before('_')
  });