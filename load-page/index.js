let css = 
    `<style>
    main{opacity:0; transition:1s}
    .active{opacity:1;}
    </style>`;

$('body').append(css);


function pageLoad(pageUrl,i){
    // history.pushState({'page':i,'url':pageUrl},'test');

    $('main').removeClass('active');

    setTimeout(function(){
        $('main').load(pageUrl,function(){
            $(this).addClass('active');
        });
    },500)

    
    // addClass(), removeClass(), toggleClass(), hasClass(=> contains와 같음 -- 조건문 사용 가능)
    $('header a')
    .css('color','blue')
    .eq(i)
    .css('color','red');
}

pageLoad('main.html',0);
window.history.pushState({'page':0,'url':'main.html'},'test');


$('header a').on('click',function(e){ // 클릭했을 때 이벤트 정보
    e.preventDefault();// --> 이벤트 전파를 차단할 때 쓰는 것 (지금부터 a태그가 가지고 있는 링크는 아무 의미 없음)
    let url = $(this).attr('href'); //url=>문서의 주소값
    // 바닐라 => this.getAttribute('href)
    let idx = $(this).index();
    history.pushState({'page':idx,'url':url},'test');
    pageLoad(url,idx);
});

$(window).on('popstate',function(){
    let idx = history.state.page;
    let url = history.state.url;


    
})

// [비동기 방식]
// Ajax(load, fetch.$.ajax)
// cancelIdleCallback,setTimeout,setInterval
// -- 웹 서버에 페이지를 요청(request-> 웹 서버에서 페이지를 받음(response)


// [동기]
// 브라우저가 문서의 순서에 따라서 실행하는 방식




