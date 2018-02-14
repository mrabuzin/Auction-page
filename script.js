$("#flashMessage").hide();

$("#submit-btn").click(function() {
     $("#flashMessage").hide().slideDown(1000).delay(3000).slideUp(1000);
  });
