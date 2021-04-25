$(function () {
  // ページ内スムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  // アコーディオン
  $('.bl_accordion_innerMenu:not(:first-of-type)').css("display", "none");
  $('.js_accordion_btn').on('click', function () {
    $(this).children().addClass('is_open');
    //クリックされていないel_accordion_iconのopenクラスを取る
    $('.el_accordion_icon').not($(this).children()).removeClass('is_open');

    $(this).parent().next().slideDown(300);
    $('.bl_accordion_menu').not($(this).parent()).next().slideUp();
  });
});