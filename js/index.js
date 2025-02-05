let breakpoint;

function checkWindowSize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    breakpoint = "sp";
    jQuery("#js-drawer").css("display", "none");
  } else {
    breakpoint = "pc";
    jQuery("#js-drawer").css("display", "block");
  }
}

// ページロード時に実行
checkWindowSize();

// ウィンドウサイズ変更時に実行
window.addEventListener("resize", checkWindowSize);

// ハンバーガーボタンとドロワー
jQuery("#js-button-drawer").on("click", function () {
  if (breakpoint === "sp") {
    jQuery(this).toggleClass("is-checked");
    jQuery("#js-drawer").slideToggle();
    jQuery("body").toggleClass("is-fixed");
  }
});

jQuery(".js-button").on("click", function () {
  if (breakpoint === "sp") {
    jQuery("#js-button-drawer").removeClass("is-checked");
    jQuery("#js-drawer").slideUp();
    jQuery("body").removeClass("is-fixed");
  }
});
