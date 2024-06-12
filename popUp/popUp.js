//저는 자바스크립트 주석입니다. 자바스크립트에서는 //두개로 한줄 주석~
// define func

/*함수 정의
function 함수명(매개변수1, 매개변수2) {
    함수안에들어갈함수1(매개변수1)
    함수안에들어갈함수2(매개변수2)
}
*/

function displaynone(id, argument1) {
    document.getElementById(id).style.display = argument1;
}

function alertHw() {
    alert("Hello World!");
}

// func
//함수 정의하고 작동하는 게 아님. 한번 함수를 입력해줘야해요~ 그래서 보통 코드를 짠 파일에서는 함수 정의부, 작동부로 나뉩니다. 정의하고 바로 작동시키는 건 괜찮아요~
displaynone('alertBox', 'none')