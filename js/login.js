// 클릭이벤트로 signin() 메서드 호출
const signinButtonOnClickHandle = () => {
    AccountSevice.getInstance().signin();
};

class AccountSevice {
    
    authUsername = "aaa";
    authPassword = "1234";

    // 변수명 앞에 #을 붙이면 private 접근지정자
    static #instance = null;

    // 싱글톤
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AccountSevice();
        }
        return this.#instance;
    }

    signin() {
        // usernameInput에 입력된 첫번째 요소를 선택해 usernameInput에 대입
        const usernameInput = document.querySelector(".username-input");
        // passwordInput에 입력된 첫번째 요소를 선택해 passwordInput에 대입
        const passwordInput = document.querySelector(".password-input");
        // 가져온 요소의 값을 username에 대입
        const username = usernameInput.value;
        // 가져온 요소의 값을 password에 대입
        const password = passwordInput.value;

        // 입력받은 값과 싱글톤에서 username,password의 값을 비교
        // || or 이기때문에 하나라도 true 일 경우 로그인 실패
        if(username !== this.authUsername || password !== this.authPassword) {
            alert("사용자 정보를 확인하세요.");
            return;
        }

        alert("로그인 성공");
    }
}