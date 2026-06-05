// ==UserScript==
// @name         is done
// @namespace    http://tampermonkey.net/
// @version      2025-11-29
// @description  try to take over the world!
// @author       smilehoho
// @match        https://kone.gg/s/somisoft/*
// @match        https://kone.gg/s/ainovel/*
// @icon         
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();


 const TARGET_SELECTOR = 'div[class^="go"] [role="status"]';
const COMPLETE_TEXT = '이미지 다운로드 완료';
let lastStatus = null;


//document.querySelector(TARGET_SELECTOR)

const bar = document.createElement("div");
bar.textContent = "현재 상태: 정상 동 중";
bar.style.textAlign = "center";
bar.id = "bar";

bar.style.padding = "10px";


document.body.prepend(bar);


//const originalbtn = document.querySelector("#download_all_images_button"); TO VER2

const originalbtn = [...document.querySelectorAll("button")].find(btn => btn.textContent.trim().includes("다운로드"));


const copybtn = originalbtn.cloneNode(true);

copybtn.addEventListener("click", () => {
    console.log(originalbtn);

        //originalbtn.click();



       //btn.focus();

    ["pointerdown","mousedown","mouseup","click","pointerup"].forEach(type => {
        originalbtn.dispatchEvent(new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    });





    });


bar.appendChild(copybtn);


    const myBtn = document.createElement('button');
    myBtn.textContent = '편한 버튼';
    Object.assign(myBtn.style, {
        //position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        //padding: '10px 16px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
    });

bar.appendChild(myBtn);

    const myBtn2 = document.createElement('button');
    myBtn2.textContent = '안편한 버튼';
    Object.assign(myBtn2.style, {
        //position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        //padding: '10px 16px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
    });


bar.prepend(myBtn2);


myBtn.addEventListener("click", () => {
         document.querySelector('button[data-slot="button"] svg[class*="lucide-thumbs-up"]').closest('button').click();

       //document.querySelector('button[data-slot="button"] svg[icon-name="upvote-outline"]').closest('button').click();

       //document.querySelector('button[data-slot="button"] svg[icon-name="upvote-outline"]').closest('button').dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));



    });


myBtn2.addEventListener("click", () => {

//
    do64();

    });






 const intervalId = setInterval(() => {

    // document.body.prepend(bar);


     if(!document.querySelector("#bar")){
     document.body.prepend(bar);
     }

     if(
/*
     getComputedStyle(document.querySelector("#main > div.mx-auto.w-full.max-w-7xl.custom-width.overflow-hidden.text-zinc-900.dark\\:text-zinc-200 > div > div > div.flex.flex-col.md\\:rounded-lg.grow.overflow-hidden > div.contents > div > div.flex.items-center.justify-between.p-4 > div:nth-child(1) > div")).backgroundColor
         == 'oklch(0.705 0.213 47.604)'
*/

         /*

         getComputedStyle(document.querySelector("#post-article > div.flex.items-center.justify-between.px-2.py-4 > div:nth-child(1) > div > button.focus-visible\:border-ring.focus-visible\:ring-ring\/50.aria-invalid\:ring-destructive\/20.dark\:aria-invalid\:ring-destructive\/40.aria-invalid\:border-destructive.dark\:aria-invalid\:border-destructive\/50.border.border-transparent.bg-clip-padding.text-sm.font-medium.focus-visible\:ring-3.active\:not-aria-\[haspopup\]\:translate-y-px.aria-invalid\:ring-3.\[\&_svg\:not\(\[class\*\=\'size-\'\]\)\]\:size-4.group\/button.inline-flex.shrink-0.items-center.justify-center.whitespace-nowrap.outline-none.select-none.disabled\:pointer-events-none.disabled\:opacity-50.\[\&_svg\]\:pointer-events-none.\[\&_svg\]\:shrink-0.hover\:text-foreground.aria-expanded\:bg-muted.aria-expanded\:text-foreground.gap-1.px-3.has-data-\[icon\=inline-end\]\:pr-2.has-data-\[icon\=inline-start\]\:pl-2.size-8.rounded-full.transition-colors.duration-150.active\:scale-90.text-zinc-700.hover\:bg-accent\/10.dark\:text-zinc-300.dark\:hover\:bg-accent\/20")).backgroundColor
         == 'oklch(0.705 0.213 47.604)'

         */

         document.querySelector('button[data-slot="button"] svg[class*="lucide-thumbs-up"]').getAttribute('fill') == 'currentColor'

     ){

         myBtn.style.backgroundColor = 'oklch(0.705 0.213 47.604)';

     };


    }, 1000);




////////////////////////////////////////////////////////////////////////////////////
//this is base64


   var dotac = "aHR0cHM6Ly";

function do64(){

//



   var dotac = "aHR0cHM6Ly";


//const pp = document.querySelector("#post_content").shadowRoot.querySelectorAll("div > p");
const pp = document.querySelector("#post-article").querySelectorAll("div > p");


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



         targetLine = targetLine.slice( targetLine.indexOf("aHR0cHM6Ly"),targetLine.length);
         console.log(targetLine);
         if(targetLine.includes(" ")){
             targetLine = targetLine.slice( 0,targetLine.indexOf(" "));}
        console.log(targetLine);

            if(targetLine.search(/[^A-Za-z0-9]/)!=-1){
             targetLine = targetLine.slice( 0, targetLine.search(/[^A-Za-z0-9]/)    );
         }
         console.log(targetLine);

        const turl = atob(targetLine);
        console.log(turl);

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
             dictt1[key] = cutval;
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



/////////////////




             const host = document.querySelector('#post-article');
    //const shadow = host.shadowRoot;
    const shadow = host;

    const maindiv = shadow.querySelector('div');


         var barjsbelowbtn = myBtn.cloneNode(true);
        barjsbelowbtn.addEventListener('click', ()=>{

        myBtn.click();

        } );

         maindiv.appendChild(barjsbelowbtn);


         //const originalBtn= document.querySelector('button[data-slot="button"] svg[icon-name="upvote-outline"]').closest('button');
         const originalBtn= document.querySelector('button[data-slot="button"] svg[class*="lucide-thumbs-up"]').closest('button');
         barjsbelowbtn.addEventListener('click', () => originalBtn.click());


        const aa = document.createElement("a");

        pp[indx].appendChild(aa);
        aa.target = "_blank";
        aa.href = turl;
        aa.textContent = turl;

         const bb = aa.cloneNode(true);






         const mainupper = document.querySelector('#post-article');
         const observer1 = new MutationObserver(() => {

          const maindiv = mainupper.querySelector('div');
             if(maindiv==null){
                        //empty
             }
             else
             {

             console.log(maindiv);
             maindiv.appendChild(barjsbelowbtn);

                 observer1.disconnect();
             }


         });

         observer1.observe(document.documentElement, {
             childList: true,
             subtree: true
         });


         maindiv.appendChild(barjsbelowbtn);








    let count = 0;
    let point = 0;
    const intervalId = setInterval(() => {


        //if(!document.querySelector("#post_content").shadowRoot.querySelector("#urldiv")){
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


            maindiv.appendChild(barjsbelowbtn);
            console.log(barjsbelowbtn);

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



}
