$(function() {
  $("#toggle").change(function() {
      debugger;
    if ($(this).prop("checked")) {
        console.log("true");
      $("#ai_menu").show();
    } else {
        console.log("false");
      $("#ai_menu").hide();
    }
  });
});