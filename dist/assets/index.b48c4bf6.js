(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d="/assets/nasa_logo.da3d7c24.svg",l=async()=>{const o=await fetch("https://api.nasa.gov/planetary/apod?api_key=8tOzEhctDQNaqx5dEFXUARcDVOwwW39haM4S4A62");return console.log(o),await o.json()},u=async o=>{document.querySelector("#app-title").innerHTML="Nasa App",o.innerHTML="Loading...",document.querySelector("#app-subtitle").innerHTML="APOD Imagen del D\xEDa";const r=document.createElement("h5"),c=document.createElement("blockquote"),a=document.createElement("h3"),e=document.createElement("button");e.innerText="Ver Imagen";const t=n=>{r.innerHTML=n.date,c.innerHTML=n.explanation,a.innerHTML=n.title,o.replaceChildren(r,c,a,e)};e.addEventListener("click",async()=>{o.innerHTML="Loading...";const n=document.createElement("img"),i=document.createElement("h4"),s=await l();n.src=s.url,i.innerHTML=s.title,o.replaceChildren(n,i)}),l().then(t).catch(n=>{o.innerHTML="Error al obtener los datos.",console.error(n)}),o.replaceChildren(c,a,e)};document.querySelector("#app").innerHTML=`
  <div>
    <div class="nav">
    <a href="https://api.nasa.gov/" target="_blank">
      <img src="${d}" class="logo vanilla" alt="Nasa logo" />
    </a>
    <h1 id="app-title"></h1>
    
    <h2 id="app-subtitle"></h2>
    </div>
    
    <div class="card">
      
    </div>
  
      
 
    
  </div>
`;const p=document.querySelector(".card");u(p);
