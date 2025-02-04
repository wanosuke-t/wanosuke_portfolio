// ハンバーガーボタンとドロワー
jQuery("#js-button-drawer").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer").slideToggle();
  jQuery("body").toggleClass("is-fixed");
});

jQuery(".js-button").on("click", function () {
  jQuery("#js-button-drawer").removeClass("is-checked");
  jQuery("#js-drawer").slideUp();
  jQuery("body").removeClass("is-fixed");
});
