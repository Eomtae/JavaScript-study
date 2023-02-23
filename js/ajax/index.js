//index.js

fetch('./data.json')//여기 들어있는 모든 문서들을 밑에 .then으로 던져줌
        .then(function(res){return res.json() })// function안의 값은 내맘대로 
        .then(function(gallery){ 
            // console.log(
            //   data = gallery.data // json문서의 키값을 가져온 것
            // )
            init(gallery.data) //클릭이벤트, foreach모두 다 여기다가 써도 됨
                                //여기는 데이터 불러오는 역할
        });
        
        function init(data){ // 여기는 일처리 하는 역할


            const elThumb = document.querySelector('.thumb'),
                  elDetail = document.querySelector('.detail');
                  
                  btn.onclick = function(){
                    elThumb.classList.toggle('on');
                    // 나오는 것은 되지만 다시 숨겨지지가 않음

                    data.forEach(function(vvv,key){
                        elThumb.innerHTML += `<figure>
                        <img src="${data[key].url}">
                        </figure>`  
                        
                        const elImg = document.querySelectorAll('.thumb figure');
                        elImg.forEach(function(vvv,key){
                            vvv.onclick = function(){
                                elDetail.innerHTML = 
                                            `<figure>
                                            <img src="${data[key].url}">
                                            <figcaption>
                                            <h2>${data[key].title}</h2>
                                            ${data[key].detail}</figcaption>
                                            </figure>`
                            }
                        })
                        
                              
                    })
                }
                  
                }

        