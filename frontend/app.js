const quizData=[{q:"Which defense uses 3 linemen and 4 linebackers?",a:"3-4 defense"},{q:"Which coverage is known for zone drops by linebackers?",a:"Cover 2"}];
const quizContainer=document.getElementById("quiz-container");const submitBtn=document.getElementById("submit-btn");const result=document.getElementById("result");
if(quizContainer){quizData.forEach((item,i)=>{quizContainer.innerHTML+=`<p>${item.q}</p><input type="text" id="ans${i}"><br>`;});
submitBtn.addEventListener("click",()=>{let score=0;quizData.forEach((item,i)=>{const ans=document.getElementById(`ans${i}`).value.trim().toLowerCase();if(ans===item.a.toLowerCase())score++;});
result.innerHTML=`You scored ${score}/${quizData.length}`;});}