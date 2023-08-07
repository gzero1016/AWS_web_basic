window.onload = () => {
    main();
}

function main() {
    // 개발자 도구에 콘솔창에 출력
    console.log("개발자 관리 도구의 콘솔창에 출력");
    
    // 알림창
    alert("알림창");

    // t,f 로 선택할 수 있는 알림창
    let flag = confirm("예, 아니오 선택");
    console.log(flag);
    
    // 알림창으로 입력받을 수 있음
    let name = prompt("이름을 입력하세요.");
    console.log(name);
}