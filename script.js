
const startBtn=document.getElementById('startBtn');
const intro=document.getElementById('intro');
const music=document.getElementById('music');

startBtn.onclick=()=>{
music.play().catch(()=>{});
intro.style.display='none';
}

const start=new Date('2023-12-31');
const today=new Date();
const diff=Math.floor((today-start)/(1000*60*60*24));
document.getElementById('daysTogether').innerText=`${diff} dias compartilhando amor ❤️`;

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.animate([
{opacity:0,transform:'translateY(60px)'},
{opacity:1,transform:'translateY(0)'}
],{duration:900,fill:'forwards'});
}
});
},{threshold:0.2});

document.querySelectorAll('.panel').forEach(p=>observer.observe(p));
