$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>div', head);
$('footer').load('./inc.html footer>div');

let idx = localStorage.idx || 0 ;

function head(){
    $('header a').eq(idx).css('color','red');
    $('header a').click(function(){
        let idx = $(this).index();

        localStorage.idx = idx;
    })
}
        // localStorage.setItem('idx',2); //--> idx의 값을 수정 시
        // localStorage.getItem('idx');// --> idx값을 가져오는 것

        // localStorage.removeItem('idx'); // 삭제
        // localStorage.clear('idx'); //로컬스토리지 모두 삭제

// #헤더 로드

// #내용 로드(히스토리, 리소스 누적)
