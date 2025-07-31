import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app=express();app.use(cors());app.use(express.json());
const OPENAI_API_KEY=process.env.OPENAI_API_KEY;
app.post("/ask-ai",async(req,res)=>{try{const q=req.body.question;
const r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${OPENAI_API_KEY}`},
body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Explain this football defense: ${q}`}],max_tokens:200})});
const d=await r.json();res.json({answer:d.choices[0].message.content});}catch(e){console.error(e);res.status(500).json({error:"AI request failed"});}});
const PORT=process.env.PORT||3000;app.listen(PORT,()=>console.log(`Backend running on ${PORT}`));