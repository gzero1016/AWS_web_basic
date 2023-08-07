// 브라우저라 로드되었을 때 실행
window.onload = () => {
    main();
}

function main() {

    for(let i = 0; i < 10; i++) {
        console.log(i);
    }

    let i = 0;
    while(i < 10) {
        console.log(i);
        i++;
    }

}