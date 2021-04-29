$(function () {
  // ***************************
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

  // ***************************
  // スライダー
  $('.js_slide_img').on('click', function () {
    $(this).addClass('is_click');
  })

  // ***************************
  // アコーディオン
  $('.bl_accordion_innerMenu').css("display", "none");
  $('.js_accordion_btn').on('click', function () {
    // プラスアイコン制御
    $(this).children().toggleClass('is_open');
    $('.el_accordion_icon').not($(this).children()).removeClass('is_open');
    // メニューのスライド
    $(this).parent().next().slideToggle(300);
    $('.bl_accordion_menu').not($(this).parent()).next().slideUp();
  });


  // ***************************
  // モーダル
  $('.js_modalOpen').click(function () {
    $("body").addClass("is_noScroll"); // 背景固定させるクラス付与
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    $('.js_overlay , .is_open_modal[data-id="modal' + id + '"]').fadeIn();
    // 背景固定時
    $('body').css('padding-right', '15px');
  });
  // オーバーレイクリックでもモーダルを閉じるように
  $('.js_close , .js_overlay').click(function () {
    $("body").removeClass("is_noScroll"); // 背景固定させるクラス削除
    $('.js_overlay, .is_open_modal').fadeOut();
    // 背景固定解除時
    $('body').css('padding-right', '0');
  });
});