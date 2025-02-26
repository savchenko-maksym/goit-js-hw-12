import{a as m,S as g,i as c}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function p(r,e){const t="https://pixabay.com"+"/api/",s={key:"48904751-5a5ebea07cb3b99a0a07eaa8f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40},i={Accept:"application/json"};return m.get(t,{params:s,headers:i})}function d(r){return r.hits.map(e=>`<li class="gallery-item">
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
  `).join("")}const a={formInput:document.querySelector(".js-create-form"),imgList:document.querySelector(".img-list"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")},o={userValue:"",page:1,total:100};let f=new g(".img-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});a.formInput.addEventListener("submit",async r=>{r.preventDefault(),o.userValue=r.target.elements.imgTitle.value.trim(),o.page=1,a.imgList.innerHTML="",a.loader.style.display="block";try{const e=await p(o.userValue,o.page);if(a.loader.style.display="none",e.data.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.data),o.total=e.data.totalHits,u()}catch{a.loader.style.display="none"}r.target.reset()});function y(r){const e=d(r);a.imgList.innerHTML=e,f.refresh()}a.btnLoadMore.addEventListener("click",async r=>{o.page+=1,u();const e=await p(o.userValue,o.page),n=d(e.data);a.imgList.insertAdjacentHTML("beforeend",n)});function h(){a.btnLoadMore.classList.remove("visually-hidden")}function L(){a.btnLoadMore.classList.add("visually-hidden")}function u(){const e=Math.ceil(o.total/40);o.page>=e?(L(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):h()}
//# sourceMappingURL=index.js.map
