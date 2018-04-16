const questionBox =document.getElementById("questionbox")
const myQuestion =document.getElementById("myQuestion")
const answerBox =document.getElementById("answerBox")
const resultBox =document.getElementById("resultBox")
let ctr = 0;
let rights = 0;
let wrongs = 0;
makeQuestion();



function makeQuestion() {
  myQuestion.innerHTML="";
  answerBox.innerHTML="";
myQuestion.innerHTML =quiz[ctr].question;
let num =quiz[ctr].answers.length;
answerBox.innerHTML='';
for(let i = 0; i<num; i++ ){
let li = document.createElement('li');
answerBox.appendChild(li);
li.innerHTML = quiz[ctr].answers[i].answer;
li.feedback = quiz[ctr].answers[i].feedback;
li.addEventListener('click',evaluate)
}
}
function evaluate(evt) {
  console.log(evt.target.feedback);
//evt.target.style(backgroundcolor="red");

if (evt.target.feedback) {
  evt.target.className = "right";
  rights++;
}else {
  evt.target.className = "wrong";
wrongs++;
}


  if (ctr < quiz.length){
    ctr++;
    window.setTimeout(makeQuestion,1000);

  }

  if (ctr==3) {
    finishQuiz()
  }

}

function finishQuiz() {
resultBox.innerHTML="you got " +rights+" questions right"+"<br>"+"you got " +wrongs+ " questions wrong"

}
