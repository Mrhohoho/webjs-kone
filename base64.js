// ==UserScript==
// @name         base64
// @namespace    http://tampermonkey.net/
// @version      2025-10-17
// @description  try to take over the world!
// @author       smilehoho
// @match        https://kone.gg/s/*
// @icon         
// @grant        none

// ==/UserScript==

(function() {
    'use strict';


    // Your code here...



})();





window.addEventListener('load', function() {





    const myBtn = document.createElement('button');
    myBtn.textContent = '편한 버튼';
    Object.assign(myBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        padding: '10px 16px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
    });





     setTimeout(function() {

   // your code here
    console.log("start2");

   var dotac = "aHR0cHM6Ly";

    //const pp = document.querySelectorAll("p");

   // const pp = document.querySelector("#post_content").shadowRoot.querySelector("div > p")

    /*
    pp.forEach((p, index) => {

        console.log(p);

        if (p.textContent.includes(dotac)) {

            const aa = document.createElement("a");

            p.appendChild(aa);

            const turl = atob(p.textContent);
            aa.target = "_blank";

            aa.href = turl;
            aa.textContent = turl;

        }
    });
*/


//const pp = document.querySelector("#post_content").shadowRoot.querySelectorAll("div > p");

const pp = document.querySelector("#post-article").querySelectorAll(".ProseMirror p");

//const errordiv =  document.querySelector("#post_content").shadowRoot.querySelectorAll("div");

const errordiv =  document.querySelector("#post-article").querySelectorAll("div");



var targetLine = null;
    var indx = null;
        var dictt1 = {};  //원본 저장용
         var dictt2 = {}; //해석 저장용

        pp.forEach((p,ind) => {
            // <p> 안의 자식 노드를 순회하여 텍스트 추출
            const lines = Array.from(p.childNodes).map(node => {
                if (node.nodeType === Node.TEXT_NODE) return node.textContent;
                if (node.nodeName === "BR") return "\n";
                return node.textContent;
            }).join("").split("\n"); // <br> 기준으로 줄 배열 생성

            // aHR0cHM6Ly로 시작하는 줄 찾기
            const found = lines.find(line => line.includes("aHR0cHM6Ly"));
            if (found) {targetLine = found; indx = ind;

                        dictt1[indx] = targetLine;



                       }
        });


         try{targetLine = targetLine.slice( targetLine.indexOf("aHR0cHM6Ly"),targetLine.length);}
         catch(e){
             //console.log(targetLine);
             //console.log(targetLine.indexOf("aHR0cHM6Ly"));
             //console.error(e);
                 //throw e;
                 console.log("tried but targetLine.indexOf(aHR0cHM6Ly) is null  ")

                 //errordiv


                 }
         finally{}

         
         var turl1;

         if(targetLine!=null){

             console.log(targetLine);
             if(targetLine.includes(" ")){
                 targetLine = targetLine.slice( 0,targetLine.indexOf(" "));}
             console.log(targetLine);

             if(targetLine.search(/[^A-Za-z0-9]/)!=-1){
                 targetLine = targetLine.slice( 0, targetLine.search(/[^A-Za-z0-9]/)    );
             }
             console.log(targetLine);

             const turl = atob(targetLine);

             turl1=turl;

             console.log(turl);



         };

         for(let key in dictt1){

             var val = dictt1[key];

             var cutval = val.slice( val.indexOf("aHR0cHM6Ly"),val.length);

             if(cutval.includes(" ")){
                 cutval = cutval.slice( 0,cutval.indexOf(" ")); }

             if(cutval.search(/[^A-Za-z0-9]/)!=-1){
                 cutval = cutval.slice( 0, cutval.search(/[^A-Za-z0-9]/)    );
             }

             var doneval = atob(cutval);

             dictt2[key] = doneval;

             //추가됨
             dictt1[key]=cutval;
             //

         };

         const urldiv = document.createElement('div');

         urldiv.id="urldiv";

         urldiv.style.boxSizing = "border-box";
         urldiv.style.bottom = "0";
         urldiv.style.left = "0";
         urldiv.style.width = "100%";
         urldiv.style.backgroundColor = "#f9f9f9";
         urldiv.style.border = "2px solid #333";
         urldiv.style.padding = "10px";
         urldiv.style.textAlign = "center";
         urldiv.style.boxShadow = "0 -2px 6px rgba(0,0,0,0.2)";
         urldiv.style.zIndex = "1000";
         var i = 1;

         for (let key in dictt2) {


             const p1 = document.createElement("p");
             const link = document.createElement("a");
             link.target = "_blank";
             link.href = dictt2[key];
             link.textContent = dictt1[key];

             p1.innerText = i + ". ";
             p1.appendChild(link);
             urldiv.appendChild(p1);


             i = i +1;


         }




         //편한버튼 어팬드용
         const host = document.querySelector('#post-article');
         //const shadow = host.shadowRoot;
         const shadow = host;

        // const maindiv = shadow.querySelector('div');
         const maindiv = shadow.querySelector('div[class*="prose-container"]');

         //document.querySelector('#post-article').querySelector('div[class*="prose-container"]');

         maindiv.appendChild(myBtn);


         const originalBtn= document.querySelector('button[data-slot="button"] svg[class*="lucide-thumbs-up"]').closest('button');
         myBtn.addEventListener('click', () => originalBtn.click());


         const aa = document.createElement("a");

         pp[indx].appendChild(aa);
         aa.target = "_blank";

         //왜 turl인지 모름 222줄 왜 turl인지 missing

         aa.href = turl1;
         aa.textContent = turl1;

         const bb = aa.cloneNode(true);






         //const mainupper = document.querySelector('#post_content');
         const mainupper = document.querySelector('#post-article');

         const observer1 = new MutationObserver(() => {

          const maindiv = mainupper.querySelector('div');
             if(maindiv==null){
                        //empty
             }
             else
             {

             console.log(maindiv);
             maindiv.appendChild(myBtn);

                 observer1.disconnect();
             }


         });

         observer1.observe(document.documentElement, {
             childList: true,
             subtree: true
         });


         maindiv.appendChild(myBtn);








    let count = 0;
    let point = 0;
    const intervalId = setInterval(() => {


       // if(!document.querySelector("#post_content").shadowRoot.querySelector("#urldiv")){
        if(!document.querySelector("#post-article").querySelector("#urldiv")){

            count++;





            maindiv.appendChild(urldiv);

            if(document.querySelector('div#bar')){

                if(!document.querySelector('div#applieddiv')){

                const appliedDiv = urldiv.cloneNode(true);
                    appliedDiv.id="applieddiv";
                    document.querySelector('div#bar').appendChild(appliedDiv);

                }


            }


            maindiv.appendChild(myBtn);
            console.log(myBtn);

            if(0){
                if (count >= 5) {
                    clearInterval(intervalId); // 5번 후 종료
                }
            };//계속 반복되도록 바꿈

            console.log("fire"+count);
            point = point +1;
            if(point ==2 ){
                console.log("focus"+count);
                maindiv.scrollIntoView({
                    //behavior: "smooth",     // or "auto"
                    block: "center",        // 👈 positions element in the middle vertically
                    //inline: "nearest"       // optional, affects horizontal scroll
                });
            }
        }

    }, 1000);

            console.log("focus"+"main");
             maindiv.scrollIntoView({
                 //behavior: "smooth",     // or "auto"
                 block: "center",        // 👈 positions element in the middle vertically
                 //inline: "nearest"       // optional, affects horizontal scroll
             });



         







}, 500);










}, false);
