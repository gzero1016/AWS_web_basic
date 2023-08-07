// HTML 에서 js로 id 값으로 요소를 가져온다. (하나)
const box1 = document.getElementById("box1");
// HTML 에서 js로 class명 값으로 요소를 가져온다. (모두)
const box2Array = document.getElementsByClassName("box2");
// HTML 에서 js로 태그명 값으로 요소를 가져온다. (모두)
const divArray = document.getElementsByTagName("div");

box1.innerHTML = `<input type="password">`;
// box2Array[1].innerHTML = `<input type="text">`;

// 위 방법을 합친것
// querySelecotr : 하나만 가져올때
// querySelecotrAll : 두개이상을 가져올때
const box1_qs = document.querySelector("box1");
const box2Array_qs = document.querySelectorAll(".box2");
const usernameInput = box2Array_qs[1].querySelector(".username-input");
const divArray_qs = document.querySelectorAll("div");

usernameInput.value = "test";

console.log(box2Array_qs);