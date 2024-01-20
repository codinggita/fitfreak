$(document).ready(function () {
  var $list = $("#menu");
  var $ddl = $("#ddl");
  $list.hover(function () {
    $ddl.toggleClass("active");
  });
});
$(document).ready(function () {
  var $list = $("#menu1");
  var $ddl = $("#ddl1");
  $list.hover(function () {
    $ddl.toggleClass("active");
  });
});
$(document).ready(function () {
  var $list = $("#menu2");
  var $ddl = $("#ddl2");
  $list.hover(function () {
    $ddl.toggleClass("active");
  });
});
$(document).ready(function () {
  var $list = $("#menu3");
  var $ddl = $("#ddl3");
  $list.hover(function () {
    $ddl.toggleClass("active");
  });
});
$(document).ready(function () {
  var $list = $("#menu4");
  var $ddl = $("#ddl4");
  $list.hover(function () {
    $ddl.toggleClass("active");
  });
});

var response;
var data;
fetch("./final.json")
  .then((response) => response.json())
  .then((d) => {
    data = d;
  });

const list1 = [113, 269, 292, 124, 265, 305];
const list2 = [91, 269, 292, 124, 265, 305];
const list3 = [228, 187, 243, 152, 31, 8];
const list4 = [113, 228, 77, 264, 44, 305];
const list5 = [124, 175, 196, 269, 294];
const list6 = [130, 245, 91, 258, 53, 294];
const list7 = [114, 130, 131, 139, 124, 115];
const list8 = [228, 175, 152, 243, 269, 309];
const list9 = [113, 293, 295, 304, 292];
const list10 = [199, 196, 92, 198, 263, 83];
const list11 = [53, 44, 63, 59, 51, 19, 8];
const list12 = [199, 77, 91, 89, 53];
const list13 = [113, 228, 124, 269, 294, 152];
const list14 = [89, 175, 198, 309, 44];
const list15 = [228, 116, 118, 261, 298, 304, 147];
const list16 = [110, 218, 31, 320];
const list17 = [315, 74, 110, 218, 31, 38, 147];
const list18 = [110, 74, 315, 33, 31, 41];
const list19 = [218, 214, 163, 147];

const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const l5 = document.getElementById("l5");
const l6 = document.getElementById("l6");
const l7 = document.getElementById("l7");
const l8 = document.getElementById("l8");
const l9 = document.getElementById("l9");
const l10 = document.getElementById("l10");
const l11 = document.getElementById("l11");
const l12 = document.getElementById("l12");
const l13 = document.getElementById("l13");
const l14 = document.getElementById("l14");
const l15 = document.getElementById("l15");
const l16 = document.getElementById("l16");
const l17 = document.getElementById("l17");
const l18 = document.getElementById("l18");
const l19 = document.getElementById("l19");

const r_title = document.querySelector(".routine-title");
const routine_ex = document.querySelector(".routine-ex");

function change_mid(t, list) {
  r_title.innerHTML = "";
  routine_ex.innerHTML = "";
  var para = document.createElement("p");
  para.innerText = t;
  r_title.appendChild(para);
  for (i = 0; i < list.length; i++) {
    var exercise = document.createElement("div");
    exercise.classList.add(
      "exercise"
    );
    var r_image = document.createElement("div");
    r_image.classList.add("routine-image","r-image");
    var r_info = document.createElement("div");
    r_info.classList.add("r-info");
    var im = document.createElement("img");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    p1.innerText = data[list[i]].name;
    p2.innerText = data[list[i]].equipment;
    im.src = data[list[i]].src;
    r_info.appendChild(p1);
    r_info.appendChild(p2);
    r_image.appendChild(im);
    exercise.appendChild(r_image);
    exercise.appendChild(r_info);
    routine_ex.appendChild(exercise);
  }
}

l1.addEventListener("click", function () {
  change_mid(l1.innerText, list1);
});
l2.addEventListener("click", function () {
  change_mid(l2.innerText, list2);
});
l3.addEventListener("click", function () {
  change_mid(l3.innerText, list3);
});
l4.addEventListener("click", function () {
  change_mid(l4.innerText, list4);
});
l5.addEventListener("click", function () {
  change_mid(l5.innerText, list5);
});
l6.addEventListener("click", function () {
  change_mid(l6.innerText, list6);
});
l7.addEventListener("click", function () {
  change_mid(l7.innerText, list7);
});
l8.addEventListener("click", function () {
  change_mid(l8.innerText, list8);
});
l9.addEventListener("click", function () {
  change_mid(l9.innerText, list9);
});
l10.addEventListener("click", function () {
  change_mid(l10.innerText, list10);
});
l11.addEventListener("click", function () {
  change_mid(l11.innerText, list11);
});
l12.addEventListener("click", function () {
  change_mid(l12.innerText, list12);
});
l13.addEventListener("click", function () {
  change_mid(l13.innerText, list13);
});
l14.addEventListener("click", function () {
  change_mid(l14.innerText, list14);
});
l15.addEventListener("click", function () {
  change_mid(l15.innerText, list15);
});
l16.addEventListener("click", function () {
  change_mid(l16.innerText, list16);
});
l17.addEventListener("click", function () {
  change_mid(l17.innerText, list17);
});
l18.addEventListener("click", function () {
  change_mid(l18.innerText, list18);
});
l19.addEventListener("click", function () {
  change_mid(l19.innerText, list19);
});
