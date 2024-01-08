// 스크롤시 헤더 고정 이벤트

let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 200) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

// 헤더 navi 버튼 클릭 시 메뉴창 이벤트
let toggle = 0;
$(".navi_btn").click(function () {
  if (toggle == 0) {
    $("#menu").fadeIn();
    $(".navi_btn").addClass("on");
    $("#menu ul").addClass("on");
    toggle = 1;
  } else {
    $("#menu").fadeOut();
    setTimeout(function () {
      $(".navi_btn").removeClass("on");
      $("#menu ul").removeClass("on");
    }, 500);
    toggle = 0;
  }
});

// 컨테이너 1번 이벤트

let con1 = document.querySelector(".con1"),
  con1Bg = document.querySelector(".con1_bg"),
  con1Title = document.querySelector(".con1_title"),
  con1Ul = document.querySelector(".con1 ul");

window.addEventListener("scroll", function () {
  let a = con1.offsetTop;
  //console.log(a);

  if (this.scrollY >= a - 200) {
    $(".con1_bg").addClass("on");
    con1Title.classList.add("on");
    setTimeout(function () {
      con1Ul.classList.add("on");
    }, 300);
  }
});

//컨테이너 2번 이벤트

let con2 = document.querySelector(".con2");
let con2H2 = document.querySelector(".con2>h2");
//console.log(con2H2);
let con2Ul = document.querySelector(".con2 ul"),
  count = document.querySelectorAll(".count");
let num1 = 1900;
let num2 = 0;
let num3 = 86;

window.addEventListener("scroll", function () {
  let b = con2.offsetTop;

  if (this.scrollY >= b - 200) {
    con2H2.classList.add("on");
    setTimeout(function () {
      con2Ul.classList.add("on");
    }, 300);
    function up() {
      if (num1 !== 2000) {
        num1++;
        count[0].innerHTML = num1;
      } else {
        clearInterval(timer);
      }
      if (num2 !== 100) {
        num2++;
        count[1].innerText = num2;
      } else {
        clearInterval(timer);
      }
      if (num3 !== 176) {
        num3++;
        count[2].innerText = num3;
      } else {
        clearInterval(timer);
      }
    }
    let timer = setInterval(up, 100);
  }
});

// 컨테이너 3번 이벤트
let con3 = document.querySelector(".con3");
let con3Title = document.querySelector(".con3_title");
let con3Carictor = document.querySelector(".carictor");

window.addEventListener("scroll", function () {
  let c = con3.offsetTop;
  //console.log(c);

  if (this.scrollY >= c - 200) {
    con3Carictor.classList.add("on");
    setTimeout(function () {
      con3Title.classList.add("on");
    }, 500);
  }
});

// 컨테이너 4번 이벤트

let con4 = document.querySelector(".con4"),
  con4Text = document.querySelector(".con4_text"),
  con4Content = document.querySelector(".con4_content");

window.addEventListener("scroll", function () {
  let d = con4.offsetTop;
  //console.log(d);

  if (this.scrollY >= d - 200) {
    con4Text.classList.add("on");
    setTimeout(function () {
      con4Content.classList.add("on");
    }, 300);
  }
});

// 컨테이너 5번 이벤트

let con5 = document.querySelector(".con5"),
  con5H2 = document.querySelector(".con5 h2"),
  con5Content = document.querySelector(".con5_content");

window.addEventListener("scroll", function () {
  let f = con5.offsetTop;
  //console.log(f);

  if (this.scrollY >= f - 300) {
    con5H2.classList.add("on");
    setTimeout(function () {
      con5Content.classList.add("on");
    }, 300);
  }
});

// 5번 자동 슬라이드 이벤트

let timer = setInterval(goToSlide, 3000);
let z = 0;
let lastClickTime = 0;

// 앞으로 가는 함수
function goToSlide(e) {
  let currentTime = new Date().getTime();
  //console.log("현재시간" + currentTime);
  let time = currentTime - lastClickTime;
  if (time < 500) {
    e.preventDefault();
    return false;
  }
  //console.log("클릭시간" + lastClickTime);
  lastClickTime = currentTime;

  /*******************************/

  $(".con5 .left ul")
    .stop()
    .animate({ marginLeft: "-100%" }, function () {
      $(".con5 .left ul li").first().appendTo(".con5 .left ul");
      $(".con5 .left ul").css({ marginLeft: "0" });
    });

  if (z == $(".right_title").length - 1) {
    z = 0;
  } else {
    z++;
  }
  $(".right_title").removeClass("on");
  $(".right_title").eq(z).addClass("on");
}

//다음버튼 클릭 시 이벤트
$(".next").click(function () {
  clearInterval(timer);
  goToSlide();
  timer = setInterval(goToSlide, 3000);
});

// 뒤로가는 함수
function backToSlide() {
  $(".con5 .left ul li").last().prependTo(".con5 .left ul");
  $(".con5 .left ul").css({ marginLeft: "-100%" });
  $(".con5 .left ul").stop().animate({ marginLeft: "0" });

  if (z == 0) {
    z = $(".right_title").length - 1;
  } else {
    z--;
  }

  $(".right_title").removeClass("on");
  $(".right_title").eq(z).addClass("on");
}

// 이전버튼 클릭시 이벤트
$(".prev").click(function () {
  clearInterval(timer);
  backToSlide();
  timer = setInterval(goToSlide, 3000);
});

// 컨테이너 6번 이벤트
let con6 = document.querySelector(".con6"),
  con6Bg = document.querySelector(".con6_bg");

window.addEventListener("scroll", function () {
  let g = con6.offsetTop;
  //console.log(g);

  if (this.scrollY >= g - 500) {
    con6Bg.classList.add("on");
  }
});

// top버튼
$(".top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
