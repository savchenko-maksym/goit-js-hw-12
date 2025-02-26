import{a as f,S as h,i as l}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function p(r,e){const t="https://pixabay.com"+"/api/",s={key:"48904751-5a5ebea07cb3b99a0a07eaa8f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40},o={Accept:"application/json"};return f.get(t,{params:s,headers:o})}function d(r){return r.hits.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href=${e.largeImageURL}>
        <img
          class="gallery-image"
          src=${e.webformatURL}
          alt=${e.tags}
        />
      </a>
      <div class="description-wrap">
  <div class="imgs-properties">
    <p class="imgs-properties-name">Likes</p>
    <p class="imgs-properties-value">${e.likes}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Views</p>
    <p class="imgs-properties-value">${e.views}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Comments</p>
    <p class="imgs-properties-value">${e.comments}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Downloads</p>
    <p class="imgs-properties-value">${e.downloads}</p>
  </div>
</div>
    </li>
  `).join("")}const i={formInput:document.querySelector(".js-create-form"),imgList:document.querySelector(".img-list"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")},a={userValue:"",page:1,total:100};let y=new h(".img-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.formInput.addEventListener("submit",async r=>{r.preventDefault(),m(),a.userValue=r.target.elements.imgTitle.value.trim(),a.page=1,i.imgList.innerHTML="";try{const e=await p(a.userValue,a.page);if(e.data.hits.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.data),a.total=e.data.totalHits,u(),g()}catch{}r.target.reset()});function L(r){const e=d(r);i.imgList.innerHTML=e,y.refresh()}i.btnLoadMore.addEventListener("click",async r=>{a.page+=1,m(),u();const e=await p(a.userValue,a.page),n=d(e.data);i.imgList.insertAdjacentHTML("beforeend",n),g()});function v(){i.btnLoadMore.classList.remove("visually-hidden")}function b(){i.btnLoadMore.classList.add("visually-hidden")}function u(){const e=Math.ceil(a.total/40);a.page>=e?(b(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):v()}function m(){i.loader.classList.remove("visually-hidden")}function g(){i.loader.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map
