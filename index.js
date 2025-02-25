import{a as l,S as c,i as p}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function m(r){const a="https://pixabay.com"+"/api/",e={key:"48904751-5a5ebea07cb3b99a0a07eaa8f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0},s={Accept:"application/json"};return l.get(a,{params:e,headers:s})}function d(r){return r.hits.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href=${t.largeImageURL}>
        <img
          class="gallery-image"
          src=${t.webformatURL}
          alt=${t.tags}
        />
      </a>
      <div class="description-wrap">
  <div class="imgs-properties">
    <p class="imgs-properties-name">Likes</p>
    <p class="imgs-properties-value">${t.likes}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Views</p>
    <p class="imgs-properties-value">${t.views}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Comments</p>
    <p class="imgs-properties-value">${t.comments}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Downloads</p>
    <p class="imgs-properties-value">${t.downloads}</p>
  </div>
</div>
    </li>
  `).join("")}const o={formInput:document.querySelector(".js-create-form"),imgList:document.querySelector(".img-list"),loader:document.querySelector(".loader")};let u=new c(".img-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});o.formInput.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements.imgTitle.value.trim();o.imgList.innerHTML="",o.loader.style.display="block";try{const i=await m(t);if(o.loader.style.display="none",i.data.hits.length===0){p.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.data)}catch{o.loader.style.display="none"}r.target.reset()});function g(r){const t=d(r);o.imgList.insertAdjacentHTML("beforeend",t),u.refresh()}
//# sourceMappingURL=index.js.map
