import{S as p,i as n}from"./assets/vendor-5ObWk2rO.js";import f from"https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const m="https://pixabay.com/api/",y="55989973-0c204e1f9b56f2479f06f3a7c";async function g(t){return(await f.get(m,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(t){const r=t.map(({webformatURL:o,largeImageURL:s,tags:e,likes:a,views:i,comments:d,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              loading="lazy"
            />
            <div class="card-content">
              <div class="card-meta">
                <span class="card-label">Likes</span>
                <span class="card-value">${a}</span>
              </div>
              <div class="card-meta">
                <span class="card-label">Views</span>
                <span class="card-value">${i}</span>
              </div>
              <div class="card-meta">
                <span class="card-label">Comments</span>
                <span class="card-value">${d}</span>
              </div>
              <div class="card-meta">
                <span class="card-label">Downloads</span>
                <span class="card-value">${u}</span>
              </div>
            </div>
          </a>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",P);async function P(t){t.preventDefault();const r=t.currentTarget,o=r.elements["search-text"].value.trim();if(!o){n.error({message:"Please fill in the search field!",position:"topRight"});return}b(),L();try{const s=await g(o);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(s.hits)}catch(s){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(s)}finally{S(),r.reset()}}
//# sourceMappingURL=index.js.map
