document.addEventListener("DOMContentLoaded", function () {
  var exercise = document.querySelector(".side-exercise");
  var tital = document.getElementById("exname").innerHTML;
  var first = document.querySelector(".main-mid");
  var secound = document.querySelector(".main-mid2");
  var third = document.querySelector(".main-mid3");
  var fourth = document.querySelector(".main-mid4");
  var fifth = document.querySelector(".main-mid5");
  var sixth = document.querySelector(".main-mid6");
  var seventh = document.querySelector(".main-mid7");
  var eighth = document.querySelector(".main-mid8");

  exercise.addEventListener("click", function (event) {
    first.style.display = "none";
    third.style.display = "none";
    secound.style.display = "block";
    document.getElementById("extitle").innerHTML = tital;
  });

  var exercise2 = document.querySelector(".side-exercise2");
  var tital2 = document.getElementById("exname2").innerHTML;
  exercise2.addEventListener("click", function (event) {
    secound.style.display = "none";
    third.style.display = "block";
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "none";
    document.getElementById("extitle2").innerHTML = tital2;
  });
  var exercise3 = document.querySelector(".side-exercise3");
  var tital3 = document.getElementById("exname3").innerHTML;
  exercise3.addEventListener("click", function (event) {
    secound.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
    fifth.style.display = "none";
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "none";
    document.getElementById("extitle3").innerHTML = tital3;
  });
  var exercise4 = document.querySelector(".side-exercise4");
  var tital4 = document.getElementById("exname4").innerHTML;
  exercise4.addEventListener("click", function (event) {
    secound.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "block";
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "none";
    document.getElementById("extitle4").innerHTML = tital4;
  });
  var exercise5 = document.querySelector(".side-exercise5");
  var tital5 = document.getElementById("exname5").innerHTML;
  exercise5.addEventListener("click", function (event) {
    secound.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "block";
    seventh.style.display = "none";
    eighth.style.display = "none";
    document.getElementById("extitle5").innerHTML = tital5;
  });
  var exercise6 = document.querySelector(".side-exercise6");
  var tital6 = document.getElementById("exname6").innerHTML;
  exercise6.addEventListener("click", function (event) {
    secound.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "none";
    seventh.style.display = "block";
    eighth.style.display = "none";
    document.getElementById("extitle6").innerHTML = tital6;
  });
  var exercise7 = document.querySelector(".side-exercise7");
  var tital7 = document.getElementById("exname7").innerHTML;
  exercise7.addEventListener("click", function (event) {
    secound.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "block";
    document.getElementById("extitle7").innerHTML = tital7;
  });
  var logo = document.querySelector(".logo");
  logo.addEventListener("click", function (event) {
    first.style.display = "block";
    secound.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "none";
  });
});
