const API_URL="https://limitintai-backend.onrender.com/ask-ai";
async function startAI(){const r=document.getElementById("ai-response");r.innerText="Thinking...";const res=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:"How do I read a Cover 2 defense?"})});
const data=await res.json();r.innerText="AI Coach: "+data.answer;}
async function askDefense(){const q=document.getElementById("defense-query").value;const r=document.getElementById("ai-defense-response");
if(!q){r.innerText="❌ Please enter a defense name!";return;}r.innerText="AI is analyzing...";const res=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:q})});
const data=await res.json();r.innerText="AI Coach: "+data.answer;}