window.onload = () => {
    const numbers = [1,2,3,4,5];

    const numbers2 = numbers.map((n) => {
        return n * 2;
    });

    console.log(numbers.join(""));
    console.log(numbers2);


    loadUserList();
}

const userList = new Array();
userList.push({username: "aaa", password: "1111"});
userList.push({username: "bbb", password: "2222"});
userList.push({username: "ccc", password: "3333"});
userList.push({username: "ddd", password: "4444"});
userList.push({username: "eee", password: "5555"});
userList.push({username: "fff", password: "6666"});

const loadUserList = () => {
    // HTML에 user-list의 값을 userListTbody에 대입
    const userListTbody = document.querySelector(".user-list");

    for(let i = 0; i < userList.length; i++) {
        // ` ` (백틱): 리터럴을 생성하여 문자열을 더 편하고 다양하게 출력하기위해 사용
        // ${} : 표현식 동적인 값들을 문자열에 쉽게 포함 시킬 수 있음
        // 파이썬으로 생각하면 f"이름: {name}" 이라 생각하면 쉬움
        userListTbody.innerHTML += `
            <tr>
                <td>${userList[i].username}</td>
                <td>${userList[i].password}</td>
            </tr>
        `;
    }

    const mapTest = userList.map((user) => {
        // <td>: 한테이블의 셀
        // <tr>: 한테이블의 행
        // td 태그를 사용하려면 tr태그안에 사용해야한다.
        return `
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td> 
            </tr>
        `
    });

    console.log(mapTest)

    userListTbody.innerHTML = mapTest.join("");

    
};