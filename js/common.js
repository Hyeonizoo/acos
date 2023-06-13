$(document).ready(function() {
  AOS.init();

  console.log("연결되나요");

  // icon
  $(function() {
    var iconNum = 0;
    setInterval(fn_iconMotion, 1500);
    function fn_iconMotion(){
      $('#iconMotion').css("background-image","url('./img/icon"+iconNum+".svg')");
      iconNum++;
      if(iconNum > 11) iconNum = 0;
    }
  });

  // create a course
  $(function() {
    var dotNum = 0;
    setInterval(fn_procedure, 1500);
    function fn_procedure(){
      var dot = $('.dot');
      dot.removeClass('active');
      dot.eq(dotNum).addClass('active');
      dotNum++;
      if(dotNum >= dot.length) dotNum = 0;
    };
  })


});