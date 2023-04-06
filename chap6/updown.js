/*필요한 데이터: 랜덤 숫자, 횟수카운트, 카운트다운, 최소값, 최대값*/

/*최대범위를 저장할 변수*/
const MAX = 100;

/*게임에 필요한 데이터를 모아놓을 객체 */
    const gameData = {
    secret_num : Math.floor(Math.random()*MAX) + 1,
    count : 0,
    countdown : 6,
    min : 1,
    max : MAX
}; 

/* ////////////////////////함수 정의부/////////////////////////////// */

/* //사용자의 입력을 수행하는 함수 */
    function inputNumber() {

    /* //객체에서 min과 max의 값을 뽑아서 메세지를 완성.*/
    /*객체 디스트럭쳐링으로 뽑아 보세요~*/
    let {min, max} = gameData;
    let num = +prompt(`${min}~${max} 중 숫자를 입력해주세요`)

    /*사용자의 입력값을 객체에 추가*/
        gameData.num = num;
    /*입력값 검증 함수를 호출. */
    return checkNumber();
    }


/*/사용자의 입력값을 검증하는 함수 */
function checkNumber() {
    if(gameData.num === gameData.secret_num) {
        alert('정답입니다.')
        checkCountDown();
        return true;
    } else if (gameData.num > gameData.secret_num) {
        alert('down');
        gameData.count++;
        gameData.countdown--;
        alertCountDown();
        gameData.max = gameData.num - 1;
        return false;
    } else if(gameData.num < gameData.secret_num){
        alert('up');
        gameData.count++;
        gameData.countdown--;
        alertCountDown();
        gameData.min = gameData.num + 1;
        return false;
    }

}

/* //사용자의 카운트다운을 체크하여 승리 여부를 알려주는 함수 */
function checkCountDown(countdown) {
    if (gameData.countdown > 0) {
        alert('승리 좋습니다.');
     } else {
         alert('패배 아깝습니다.');
     }
         alert(`${gameData.count}번 만에 정답`);
}


/*//사용자의 남은 카운트다운 횟수를 알려주는 함수 */
function alertCountDown(countdown) {
    if(gameData.countdown > 0) {
        alert(gameData.countdown + '번 남았습니다.');
    } else {
        alert('기회가 모두 소진되었습니다. 맞출 때까지 해주세요.');
    }
}


/* //핵심 실행부 (main의 역할을 하는 함수)*/
//즉시 실행 함수로 선언하여 따로 호출하지 않아도
//바로 실행될 수 있도록 작성. -->

(function() {
    alert('[UP & DOWN 게임 - 1 ~ 100 사이의 숫자를 맞춰보세요!]');

    /* //입력을 담당하는 함수를 호출할 예정. */
    while(!inputNumber()) {
       /* //true가 리턴되면 프로그램 종료.
        //false가 리턴되면 게임 계속 진행. */
    }   

}());
