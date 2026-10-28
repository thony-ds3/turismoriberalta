/* ============ FOTOS DE LOS LUGARES ============
   Dirección de cada foto, entre las comillas.
   Si dejas '' se muestra la ilustración de muestra.
================================================ */
var FOTOS={
 cos:'img/costanera.jpeg',
 cat:'img/catedral.jpeg',
 pla:'img/plaza.jpeg',
 tum:'img/tumichucua.jpeg',
 aqu:'img/aquicuana.jpg'
};
var art={}; // sin ilustraciones de respaldo

var views=['inicio','explorar','lugares','sabores','viaje'];
function show(v){
 views.forEach(function(x){
  document.getElementById('v-'+x).classList.toggle('on',x===v);
 });
 document.querySelectorAll('#nav button').forEach(function(b){
  if(b.dataset.v===v)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
 });
 window.scrollTo(0,0);
}
document.getElementById('nav').addEventListener('click',function(e){
 var b=e.target.closest('button');if(b)show(b.dataset.v);
});
document.querySelectorAll('[data-go]').forEach(function(b){
 b.addEventListener('click',function(){show(b.dataset.go)});
});
document.getElementById('chips').addEventListener('click',function(e){
 var c=e.target.closest('.chip');if(!c)return;
 document.querySelectorAll('#chips .chip').forEach(function(x){x.setAttribute('aria-pressed',x===c)});
 var f=c.dataset.f;
 document.querySelectorAll('#acts .card').forEach(function(k){
  k.style.display=(f==='all'||k.dataset.t===f)?'':'none';
 });
});
var plans={
 2:['Día 1: centro, plaza y mercado; atardecer en la ribera.','Día 2: paseo por el río y almuerzo de pescado.'],
 3:['Día 1: centro y gastronomía local.','Día 2: excursión de naturaleza con guía.','Día 3: ruta de la castaña y paseo por la confluencia.'],
 5:['Día 1: llegada, plaza y mercado.','Día 2: río y confluencia.','Día 3: selva y aves.','Día 4: ruta de la castaña y cultura.','Día 5: compras de artesanía y despedida.']
};
function draw(n){
 document.getElementById('plan').innerHTML=plans[n].map(function(t){return '<div class="step">'+t+'</div>'}).join('');
}
document.getElementById('days').addEventListener('click',function(e){
 var c=e.target.closest('.chip');if(!c)return;
 document.querySelectorAll('#days .chip').forEach(function(x){x.setAttribute('aria-pressed',x===c)});
 draw(c.dataset.d);
});
draw(2);
var places={
 city:[
  {k:'cos',n:'Paseo Turístico La Costanera',i:'🌅',c:'c',d:'Sendero sobre el barranco con vistas amplias al río Beni. Buen lugar para el atardecer y para comer pescado.',q:'Paseo Turístico La Costanera, Riberalta, Bolivia'},
  {k:'cat',n:'Catedral de Riberalta',i:'⛪',c:'r',d:'Edificio de estilo misional en ladrillo rojo y cedro, frente a la plaza principal.',q:'Catedral de Riberalta, Bolivia'},
  {k:'pla',n:'Plaza Principal',i:'🌳',c:'g',d:'Corazón de la ciudad: sombra, vida local y punto de partida para recorrer el centro.',q:'Plaza Principal, Riberalta, Bolivia'}
 ],
 near:[
  {k:'tum',n:'Tumichucua',i:'🛶',c:'c',d:'Comunidad con lago para paseos en canoa y comida amazónica.',x:'≈ 20–25 km de la ciudad',q:'Tumichucuá, Riberalta, Bolivia'},
  {k:'aqu',n:'Área Protegida Municipal Aquicuana',i:'🦜',c:'g',d:'Reserva de selva para observar aves y fauna.',x:'≈ 22 km al norte',q:'Aquicuana, Riberalta, Bolivia'}
 ]
};
function place(p){
 var q=encodeURIComponent(p.q);
 return '<div class="card '+(p.c==='g'?'':p.c)+'"><div class="pic">'+(FOTOS[p.k]?'<img src="'+FOTOS[p.k]+'" alt="'+p.n+', Riberalta" loading="lazy">':art[p.k])+'</div><div class="pin '+p.c+'"><span><b>'+p.i+'</b></span><h3 style="margin:0">'+p.n+'</h3></div>'+
 '<p>'+p.d+'</p>'+(p.x?'<p class="dist">'+p.x+'</p>':'')+
 '<div class="acts"><a href="https://www.google.com/maps/search/?api=1&query='+q+'" target="_blank" rel="noopener noreferrer">📍 Ver en Google Maps</a>'+
 '<a class="o" href="https://www.google.com/maps/dir/?api=1&destination='+q+'" target="_blank" rel="noopener noreferrer">Cómo llegar</a></div></div>';
}
document.getElementById('p-city').innerHTML=places.city.map(place).join('');
document.getElementById('p-near').innerHTML=places.near.map(place).join('');
var form=document.getElementById('f');
if(form){
 form.addEventListener('submit',function(e){
  e.preventDefault();document.getElementById('ok').style.display='block';
 });
}
var tgl=document.getElementById('tgl');
if(tgl){
 tgl.addEventListener('click',function(){
  var r=document.documentElement;
  var actual=r.getAttribute('data-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  r.setAttribute('data-theme',actual==='dark'?'light':'dark');
 });
}