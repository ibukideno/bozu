const quiz=[
 {
  question:"①坊図ちゃんの生年月日は？",
  answers:[
    "2112/9/3",
    "2112/5/15",
    "2115/1/10",
    "2115/9/20"
   ],
  correct:"2115/1/10"
 },{
    question:"②坊図ちゃんの名字は？",
    answers:[
      "田中",
      "市原",
      "井師",
      "具田羅"
     ],
    correct:"市原"
 },{
    question:"③坊図ちゃんの身長は？",
    answers:[
      "120 cm",
      "130 cm",
      "140 cm",
      "150 cm"
     ],
    correct:"120 cm"
 },{
    question:"④坊図ちゃんの姉の名前は？",
    answers:[
      "美姫",
      "仲実",
      "間美子",
      "マリン"
     ],
    correct:"美姫"
},{
    question:"⑤ゲロトくんが持っている乗り物は？",
    answers:[
      "スポーツカー",
      "ヘリコプター",
      "ジェット機",
      "セグウェイ"
     ],
    correct:"ヘリコプター"
 }
];

const quizLength=quiz.length;
let quizIndex=0;
let score=0;

const $button=document.getElementsByClassName("btn-primary");
const buttonLength=$button.length;

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  for (let i = 0; i < buttonLength; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i];
  }
};

setupQuiz();

const clickHandler=(e)=>{
    if(quiz[quizIndex].correct===e.target.textContent){
        alert("正解！");
        score++;
       }else{
        alert("残念！");
       }

     quizIndex++;
     if(quizIndex<quizLength){
      setupQuiz();
     }else{
      window.alert("お疲れちゃん！あなたの正解数は"+score+"/"+quizLength+"です！")
       // 「初めに戻る」ボタンを表示する
 　　　 const restartBtn = document.getElementById("restart-btn");
       restartBtn.textContent = "初めに戻る";
  　　　restartBtn.style.display = "inline-block";

  　　　// ボタンクリックでリロード（最初に戻る）
  　　　restartBtn.addEventListener("click", () => {
    　　location.reload();
  　　});
     }
};

for (let i = 0; i < buttonLength; i++) {
  $button[i].addEventListener("click", clickHandler);
}

