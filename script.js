$(document).ready(function () {
    $("#check1").click(function() {
      if($("#check1").is(":checked")){
        $("input[name=check]").prop("checked", true);
      } else{
        $("input[name=check]").prop("checked", false);
      }
    });

    $("input[name=check]").click(function() {
      var total = 5;
      var checked = $("input[name=check]:checked").length;

      if(checked === 5){
        $("#check1").prop("checked", true);
      }else{
        $("#check1").prop("checked", false); 
      }
    });

  });