window.onload = () => {
    loadBookList();
};

// bookList 배열 생성
const bookList = new Array();

// bookList에 값 저장
bookList.push({
    bookName: "자바 웹 개발 워크북",
    author: "구멍가게 코딩단",
    publisher: "프리렉"
});
bookList.push({
    bookName: "Python으로 시작하는 빅데이터분석 및 인공지능 개정2판",
    author: "조준모",
    publisher: "인피니티북스"
});
bookList.push({
    bookName: "Do it! HTML+CSS+자바스크립트 웹 표준의 정석",
    author: "고경희",
    publisher: "이지스퍼블리싱"
});

// loadBookList 함수 선언
const loadBookList = () => {
    // document.querySelector(".book-list") : 해당선택자에 일치하는 첫번째 요소를 가져오는것 (ol 태그만 가져올 수 있음)
    // 가져온 결과 도서명 | 저자 | 출판사 를 가져와 bookList01에 넣는다.
    const bookListOl = document.querySelector(".book-list");

    // bookList01에는 현재 .book-list가 있다. innerHTML이란 HTML에 있는 값을 바꾸어 book 객체에 집어넣는것이다.
    bookListOl.innerHTML = bookList.map(book => {
        // ` ` 안에 태그를 사용해 값을 변경해서 리턴값을줌
        // book 객체안에있는 도서명 | 저자 | 출판사 를 bookName | author | publisher 로 바꿔줌
        return `
            <li>
                <span>${book.bookName}</span> | <span>${book.author}</span> | <span>${book.publisher}</span>
            </li>
        `;
    // join(""): 배열의 요소들을 하나의 문자열로 합치는 메서드
    // 한마디로 [자바 웹 개발 워크북, 구멍가게 코딩단, 프리렉]배열안에 있는 값을
    // 자바 웹 개발 워크북 | 구멍가게 코딩단 | 프리렉 으로 한문자로 합친다는 것
    }).join("");
};

// 클릭 이벤트가 발생했을 때 호출
const addBookOnClickHandle = () => {
    // book 함수 선언
    const book = {
        // 추가 버튼을 눌렀을 시 book-name 있는 값을 bookName에 집어넣는다.
        bookName: document.querySelector(".book-name").value,
        // 추가 버튼을 눌렀을 시 author 있는 값을 author에 집어넣는다.
        author: document.querySelector(".author").value,
        // 추가 버튼을 눌렀을 시 publisher 있는 값을 publisher에 집어넣는다.
        publisher: document.querySelector(".publisher").value
    }
    // 위 값을 집어넣은 book을 bookList에 집어넣는다.
    bookList.push(book);
    // loadBookList를 호출해서 동일하게 처리하여 화면 출력함
    loadBookList();
};