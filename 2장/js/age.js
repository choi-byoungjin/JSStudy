function calc() {
    var currentYear = 2022;
    var birthYear = prompt("태어난 년도를 입력하세요.","YYYY");
    var age = 0;
    age = currentYear - birthYear + 1;
    // document는 현재 웹브라우저의 페이지를 의미하고, querySelector()는
    // id가 result인 웹 요소(div)를 의미한다. innerHTML은 대입한 값으로
    // html문서에 대체하시오.
    document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세 입니다.";
}