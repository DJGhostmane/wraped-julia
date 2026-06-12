
const music=document.getElementById('music');
document.getElementById('begin').onclick=()=>{
music.play().catch(()=>{});
document.getElementById('opening').style.display='none';
}

const start=new Date('2023-12-31');
const now=new Date();
const diff=Math.floor((now-start)/(1000*60*60*24));
document.getElementById('counter').innerText=diff+' dias juntos ❤️';

const io=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.style.transition='all 1.2s ease';
e.target.style.opacity=1;
e.target.style.transform='translateY(0)';
}
})
},{threshold:.2});

document.querySelectorAll('.scene').forEach(s=>io.observe(s));

const c=document.getElementById('stars');
const ctx=c.getContext('2d');
function resize(){c.width=innerWidth;c.height=innerHeight}
resize();addEventListener('resize',resize);

const stars=[...Array(120)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2}));
function draw(){
ctx.clearRect(0,0,c.width,c.height);
stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fillStyle='white';
ctx.fill();
s.y+=0.15;
if(s.y>c.height)s.y=0;
});
requestAnimationFrame(draw);
}
draw();
