
// fetch('./data.xml')
// .then(function(res){
//     return res.text() 
// })
// .then(
//     function(data){
//         console.log(data);
//     }
// )

$.ajax({
    url : './data.xml',
    beforeSend : function(){
        console.log('준비')
    },
    complete : function(){
        console.log('완료')
    },
    error : function(){
        console.log('데이터 실패') // url에 연결된 문서 이름이 일치하지 않을 시 출력
    },
    success : function(data){
        console.log('데이터 성공') // url에 연결된 문서 이름이 일치할 시 출력
        
            // let detail = $(data).find('detail').eq(0).html(); //eq => n번째
            // let url = $(data).find('url').eq(0).html();
            // let title = $(data).find('title').eq(0).html();
            let tag = '',url,title;
            // console.log(url,title,detail)
           //jquery와 vanila의 확장자를 섞어 쓰면 인식 X
            $(data).find('item').each(function(key,value){ // vanila와 값, 키 순서가 다름
                url = $(value).find('url').text();
                title = $(value).find('title').text()
                tag += `<figure>
                        <img src="${url}">
                        <figcaption> ${title} </figcaption>
                        </figure>`;
                    });

                $('.gallery > div').html(tag);  

                $('.gallery figure').click(function(){
                    let key = $(this).index()

                    let detail = $(data).find('item').eq(key).find('detail').html()
                    
                    alert(detail);
                });  
            
    }
});


// jquery
// $('선택자').method(); 
// ex ) $('.about:nth-child(1)') -->선택자는 css와 동일하게 잡으면 됨
// ex ) $('.about > div').text;  --> 이렇게 하게 되면 윗줄과 밑줄 모두 text로 출력 가능