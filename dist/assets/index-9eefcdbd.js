(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=Vue.createApp({});s.component("link-cascadia",{template:`
    <a href="#" class="group flex items-center text-lg font-cascadia text-do-blue-light font-bold hover:text-do-blue-medium hover:duration-200">
        <slot></slot>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:ml-1 group-hover:duration-150">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </a>
    
    `});s.component("panel-blog",{template:`
    <div class="w-1/4 bg-white shadow-lg rounded-lg">
        <div>
            <slot name='image'></slot>
        </div>

        <div class="py-6 px-6">
            <div class="uppercase  text-sky-500 tracking-wide"> <slot name='title'></slot> </div>
            <div class="font-medium text-lg my-3"> <slot name='content'></slot>  </div>
            <div class="text-gray-500 flex text-sm items-center">
                <div class="w-1/2"> <slot name='date'></slot> </div>
                <div class="flex w-1/2 items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <slot name='downloads'></slot>
                </div>
            </div>
        </div>
    </div>
    `});s.mount("#app");
