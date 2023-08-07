window.onload = () => {
    const cupImg = document.querySelector(".img-border img");
    // 이미지 주소
    cupImg.src = "./images/cup1.jpg";
    // 클릭했을경우 cupImgOnClickHandle 실행
    cupImg.onclick = cupImgOnClickHandle;

    // cupImg.onclick 에 한번에 작성했을 경우
    // document.onclick = () => {
    //     if(cupImg.src.includes("cup1")) {
    //         cupImg.src = "./images/cup2.jpg";
    //     }else {
    //         cupImg.src = "./images/cup1.jpg";
    //     }
    // }
    
}

// e : 이벤트 객체
const cupImgOnClickHandle = (e) => {
    console.log(e.target);
    // includes : 해당요소가 포함되어있는지 확인하는 거
    if(e.target.src.includes("cup1")) {
        e.target.src = "./images/cup2.jpg";
    }else {
        e.target.src = "./images/cup1.jpg";
    }
}