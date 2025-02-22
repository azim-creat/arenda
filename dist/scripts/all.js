$(document).ready(
  () => {
    $('#fullpage').fullpage();

    var $win = $(window);
    var $marker = $('#apartment');
    
    //отслеживаем событие прокрутки страницы
    $win.scroll(function() {
      //Складываем значение прокрутки страницы и высоту окна, этим мы получаем положение страницы относительно нижней границы окна, потом проверяем, если это значение больше, чем отступ нужного элемента от верха страницы, то значит элемент уже появился внизу окна, соответственно виден
      if($win.scrollTop() + $win.height() >= $marker.offset().top) {
        $('#apartment-nav').addClass( "active" ); //выполняем действия если элемент виден
      }else{
        $('#apartment-nav').removeClass( "active" ); //выполняем действия если не элемент виден
      }
    });
  }
)

