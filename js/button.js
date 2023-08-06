// plus 함수 선언
const plus = () => {
    // const : 상수선언 (const로 선언된 변수는 재할당 불가)
    // let : 변수선언 (let으로 선언된 변수는 재할당이 가능하다.)
    
    // HTML에 있는 result의 일치하는 첫번째 요소를 가져와 resultObj 에 대입
    const resultObj = document.querySelector(".result");
    
    // parseInt: 문자열을 정수로 변환하여 HTML에 있는 값을 변경함 (변환할 수 없는 나머지는 무시함)
    let oldNumber = parseInt(resultObj.innerHTML);
    
    // +1 해서 HTML에 있는 값을 변경해줌
    resultObj.innerHTML = oldNumber + 1;
}

const minus = () => {
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);
    
    // -1 해서 HTML에 있는 값을 변경해줌
    resultObj.innerHTML = oldNumber - 1;
}