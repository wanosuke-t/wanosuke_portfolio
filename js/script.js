// ドロワーメニュー
$("#js-drawer-icon").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer-content").slideToggle();
});

// about スワイパー
const aboutSwiper = new Swiper(".about__swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    900: {
      spaceBetween: 20,
    },
  },
});

// spots スワイパー
const spotsSwiper = new Swiper(".spots__swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    900: {
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});

// モーダル
$(function () {
  const open = $(".js-prizes-modal-open"),
    close = $("#js-modal__close"),
    container = $(".modal__container"),
    modalImage = $(".modal__image img");

  // 開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    container.addClass("is-active");

    const modalSrc = $(this).data("modal-src");
    if (modalSrc) {
      modalImage.attr("src", modalSrc);
      console.log(modalImage.attr("src"));
    }

    const modalLead = $(this).data("modal-lead");
    if (modalLead) {
      $(".modal__lead").html(modalLead);
    }

    const modalDescription = $(this).data("modal-description");
    if (modalDescription) {
      $(".modal__description").html(modalDescription);
    }

    return false;
  });

  // 閉じるボタンをクリックしたらモーダルを閉じる
  close.on("click", function () {
    container.removeClass("is-active");
  });

  //モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".modal__body").length) {
      container.removeClass("is-active");
    }
  });
});

// アコーディオン
$(".js-accordion").on("click", function (e) {
  e.preventDefault();
  $(this).parent(".qa__box").toggleClass("is-open");
  if ($(this).parent(".qa__box").hasClass("is-open")) {
    $(this).next().slideDown();
  } else {
    $(this).next().slideUp();
  }
});

// コンタクトフォーム バリデーションチェック
$(".js-contact__input").on("invalid", function () {
  $(this).addClass("is-error");
});

$(".js-contact__input").on("input", function () {
  if (this.checkValidity()) {
    $(this).removeClass("is-error");
  }
});

// コンタクトフォーム 送信処理
document.getElementById("js-contact__form").addEventListener("submit", function(event) {
  // デフォルトのフォーム送信をキャンセル
  event.preventDefault();

  // 送信処理（実際にはサーバーへの送信を行う）
  // ここに送信処理のコードを書く

  // 送信成功メッセージを表示
  alert("送信が完了しました！");

  // フォームをリセットする場合
  this.reset(); // thisはフォーム要素を指す
});


// スマホのドロワーアイコンを消す処理
$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").slideUp();
});


// // スムーススクロール
// $('a[href^="#"]').on("click", function (e) {
//   e.preventDefault();
//   const scrollSpeed = 1000;
//   const targetId = $(this).attr("href");
//   const targetElement = $("#" == targetId ? "html" : targetId);
//   const targetPosition = targetElement.offset().top;

//   if (targetElement.length) {
//     $("html, body").animate(
//       {
//         scrollTop: targetPosition,
//       },
//       scrollSpeed,
//       "swing"
//     );
//   }
// });
