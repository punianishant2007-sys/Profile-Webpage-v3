const typingText=document.getElementById("typingText");
const words=["B.Tech CSE Student","Aspiring Software Developer","Web Developer","Python Learner","DSA Learner","Tech Enthusiast"];
let wordIndex=0,charIndex=0,deleting=false;
function typeEffect(){
 const currentWord=words[wordIndex];
 if(!deleting){typingText.textContent=currentWord.substring(0,charIndex+1);charIndex++;if(charIndex===currentWord.length){deleting=true;setTimeout(typeEffect,1500);return}}
 else{typingText.textContent=currentWord.substring(0,charIndex-1);charIndex--;if(charIndex===0){deleting=false;wordIndex=(wordIndex+1)%words.length}}
 setTimeout(typeEffect,deleting?50:100);
}
typeEffect();

const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
 document.body.classList.toggle("dark");
 const dark=document.body.classList.contains("dark");
 themeToggle.textContent=dark?"☀️":"🌙";
 localStorage.setItem("theme",dark?"dark":"light");
});
if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark");themeToggle.textContent="☀️"}

const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>{
 navLinks.classList.toggle("active");
 menuToggle.textContent=navLinks.classList.contains("active")?"✕":"☰";
});
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>{
 navLinks.classList.remove("active");menuToggle.textContent="☰";
}));

const topButton=document.getElementById("topButton");
window.addEventListener("scroll",()=>{topButton.style.display=window.scrollY>400?"block":"none"});
topButton.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.getElementById("year").textContent=new Date().getFullYear();

const revealElements=document.querySelectorAll(".skill-card,.project-card,.learning-card,.goal,.stat-card");
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show")}),{threshold:.15});
revealElements.forEach(element=>observer.observe(element));
