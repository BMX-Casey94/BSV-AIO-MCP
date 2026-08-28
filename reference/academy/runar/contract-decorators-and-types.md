<!DOCTYPE html><html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical" href="https://runar.build/docs/api-reference/contract-decorators-and-types/"><title>Contract Decorators &amp; Types — Rúnar Docs</title><meta name="description" content="Complete reference for the Rúnar on-chain type system, contract annotations, and built-in functions."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url" content="https://runar.build/docs/api-reference/contract-decorators-and-types/"><meta property="og:title" content="Contract Decorators &#38; Types — Rúnar Docs"><meta property="og:description" content="Complete reference for the Rúnar on-chain type system, contract annotations, and built-in functions."><meta property="og:image" content="https://runar.build/og/default.png"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Contract Decorators &#38; Types — Rúnar Docs"><meta name="twitter:description" content="Complete reference for the Rúnar on-chain type system, contract annotations, and built-in functions."><meta name="twitter:image" content="https://runar.build/og/default.png"><!-- Prevent FOUC: set theme before first paint --><script>
      (function() {
        var stored = localStorage.getItem('theme');
        var theme = stored || 'dark';
        document.documentElement.className = theme;
      })();
    </script><link rel="stylesheet" href="/_astro/BaseLayout.kcMJrBuL.css"></head> <body class="bg-bg text-text min-h-screen antialiased">  <header class="sticky top-0 z-30 w-full border-b transition-colors bg-bg/95 backdrop-blur-md border-border"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <a href="/" class="inline-flex items-center gap-2 font-mono font-bold text-xl tracking-tight text-text hover:text-accent-500 transition-colors"> <span>R<span class="text-accent-500">ú</span>nar</span> </a> <!-- Desktop nav --> <nav class="hidden lg:flex items-center gap-1"> <a href="/docs/getting-started/overview" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Docs  </a><a href="/docs/examples/gallery" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Examples  </a><a href="/docs/changelog/index" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Changelog  </a><a href="https://runar.run" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors" target="_blank" rel="noopener noreferrer"> Playground <svg class="inline-block ml-1 -mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </a><a href="https://github.com/icellan/runar" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors" target="_blank" rel="noopener noreferrer"> GitHub <svg class="inline-block ml-1 -mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </a> <style>astro-island,astro-slot,astro-static-slot{display:contents}</style><script>(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();</script><script>(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE_INFINITY*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();</script><astro-island uid="Z2v0P66" prefix="r9" component-url="/_astro/SearchDialog.B57nUXo_.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;SearchDialog&quot;,&quot;value&quot;:true}" await-children><button class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-tertiary border border-border rounded-lg hover:border-border-strong hover:text-text-secondary transition-colors" aria-label="Search documentation"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><span class="hidden sm:inline">Search docs...</span><kbd class="hidden sm:inline text-xs font-mono text-text-tertiary bg-surface px-1.5 py-0.5 rounded border border-border">⌘K</kbd></button><!--astro:end--></astro-island> <div class="w-px h-5 bg-border mx-2"></div> <script>(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();</script><astro-island uid="1sy2V0" prefix="r10" component-url="/_astro/ThemeToggle.DqXasmEh.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="load" opts="{&quot;name&quot;:&quot;ThemeToggle&quot;,&quot;value&quot;:true}" await-children><button aria-label="Switch to light mode" class="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button><!--astro:end--></astro-island> </nav> <!-- Mobile --> <div class="flex items-center gap-2 lg:hidden"> <astro-island uid="Z2v0P66" prefix="r11" component-url="/_astro/SearchDialog.B57nUXo_.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;SearchDialog&quot;,&quot;value&quot;:true}" await-children><button class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-tertiary border border-border rounded-lg hover:border-border-strong hover:text-text-secondary transition-colors" aria-label="Search documentation"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><span class="hidden sm:inline">Search docs...</span><kbd class="hidden sm:inline text-xs font-mono text-text-tertiary bg-surface px-1.5 py-0.5 rounded border border-border">⌘K</kbd></button><!--astro:end--></astro-island> <astro-island uid="1sy2V0" prefix="r12" component-url="/_astro/ThemeToggle.DqXasmEh.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="load" opts="{&quot;name&quot;:&quot;ThemeToggle&quot;,&quot;value&quot;:true}" await-children><button aria-label="Switch to light mode" class="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button><!--astro:end--></astro-island> <astro-island uid="1JvchJ" prefix="r13" component-url="/_astro/MobileMenu.BRNZhq9l.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;items&quot;:[1,[[0,{&quot;label&quot;:[0,&quot;Docs&quot;],&quot;href&quot;:[0,&quot;/docs/getting-started/overview&quot;]}],[0,{&quot;label&quot;:[0,&quot;Examples&quot;],&quot;href&quot;:[0,&quot;/docs/examples/gallery&quot;]}],[0,{&quot;label&quot;:[0,&quot;Changelog&quot;],&quot;href&quot;:[0,&quot;/docs/changelog/index&quot;]}],[0,{&quot;label&quot;:[0,&quot;Playground&quot;],&quot;href&quot;:[0,&quot;https://runar.run&quot;]}],[0,{&quot;label&quot;:[0,&quot;GitHub&quot;],&quot;href&quot;:[0,&quot;https://github.com/icellan/runar&quot;]}]]]}" ssr client="load" opts="{&quot;name&quot;:&quot;MobileMenu&quot;,&quot;value&quot;:true}" await-children><button aria-label="Open menu" aria-expanded="false" class="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button><!--astro:end--></astro-island> </div> </div> </div> </header> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Mobile sidebar toggle --> <div class="lg:hidden py-3 border-b border-border"> <astro-island uid="Z2bIATf" prefix="r7" component-url="/_astro/MobileSidebar.BtZy13Bi.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;currentPath&quot;:[0,&quot;/docs/api-reference/contract-decorators-and-types&quot;]}" ssr client="load" opts="{&quot;name&quot;:&quot;MobileSidebar&quot;,&quot;value&quot;:true}" await-children><button class="lg:hidden flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary border border-border rounded-lg hover:border-border-strong transition-colors" aria-label="Open navigation"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>Menu</button><!--astro:end--></astro-island> </div> <div class="flex gap-8 py-8"> <!-- Desktop sidebar --> <aside class="w-64 shrink-0 hidden lg:block"> <nav class="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 pb-8 scrollbar-thin" aria-label="Documentation sidebar"> <div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Getting Started</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/getting-started/overview" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Overview </a><a href="/docs/getting-started/installation" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Installation </a><a href="/docs/getting-started/quick-start" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Quick Start </a><a href="/docs/getting-started/project-structure" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Project Structure </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Bitcoin &amp; BSV Basics</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/bitcoin-bsv-basics/utxo-model" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> The UTXO Model </a><a href="/docs/bitcoin-bsv-basics/bitcoin-script" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Bitcoin Script </a><a href="/docs/bitcoin-bsv-basics/transactions-and-outputs" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Transactions &amp; Outputs </a><a href="/docs/bitcoin-bsv-basics/how-smart-contracts-work-on-bsv" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> How Smart Contracts Work on BSV </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Writing Contracts</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/writing-contracts/contract-basics" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Contract Basics </a><a href="/docs/writing-contracts/typescript-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> TypeScript Contracts </a><a href="/docs/writing-contracts/go-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Go Contracts </a><a href="/docs/writing-contracts/rust-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Rust Contracts </a><a href="/docs/writing-contracts/python-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Python Contracts </a><a href="/docs/writing-contracts/zig-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Zig Contracts </a><a href="/docs/writing-contracts/ruby-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Ruby Contracts </a><a href="/docs/writing-contracts/solidity-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Solidity Contracts </a><a href="/docs/writing-contracts/move-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Move Contracts </a><a href="/docs/writing-contracts/language-feature-matrix" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Language Feature Matrix </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>The Compiler</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/compiler/how-it-works" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> How the Compiler Works </a><a href="/docs/compiler/compilation-pipeline" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compilation Pipeline </a><a href="/docs/compiler/configuration" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compiler Configuration </a><a href="/docs/compiler/output-artifacts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Output Artifacts </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>The SDK</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/sdk/overview" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> SDK Overview </a><a href="/docs/sdk/deploying" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Deploying a Contract </a><a href="/docs/sdk/calling" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Calling a Contract </a><a href="/docs/sdk/multi-signer" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Multi-Signer Transactions </a><a href="/docs/sdk/inductive-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Stateful Contracts </a><a href="/docs/sdk/token-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Token Contracts </a><a href="/docs/sdk/wallet-integration" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Wallet Integration </a><a href="/docs/sdk/fee-and-change-handling" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fee &amp; Change Handling </a><a href="/docs/sdk/providers-reference" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Providers Reference </a><a href="/docs/sdk/code-generation" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Code Generation </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Testing &amp; Debugging</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/testing-and-debugging/writing-tests" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Writing Tests </a><a href="/docs/testing-and-debugging/test-runner" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> The Test Runner </a><a href="/docs/testing-and-debugging/advanced-testing" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Advanced Testing </a><a href="/docs/testing-and-debugging/mock-and-fixtures" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Test Fixtures &amp; Mocks </a><a href="/docs/testing-and-debugging/debugging-script" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Debugging Compiled Script </a><a href="/docs/testing-and-debugging/fuzzing" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fuzzing &amp; Property Testing </a><a href="/docs/testing-and-debugging/common-errors" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Common Errors </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Advanced</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/advanced/covenant-architecture" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Covenant Architecture </a><a href="/docs/advanced/recursive-contracts-and-zk-proofs" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Recursive Contracts &amp; ZK Proofs </a><a href="/docs/advanced/dag-topology-and-token-merges" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> DAG Topology &amp; Token Merges </a><a href="/docs/advanced/security-considerations" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Security Considerations </a> </div> </details> </div><div class="mb-4"> <details open class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>API Reference</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/api-reference/compiler-api" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compiler API </a><a href="/docs/api-reference/sdk-api" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> SDK API </a><a href="/docs/api-reference/contract-decorators-and-types" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-accent-500 text-accent-500 font-medium" aria-current="page"> Contract Decorators &amp; Types </a><a href="/docs/api-reference/cli-reference" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> CLI Reference </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Tutorials</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/tutorials/hello-world" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Hello World Contract </a><a href="/docs/tutorials/fungible-token" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fungible Token </a><a href="/docs/tutorials/nft" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> NFT Contract </a><a href="/docs/tutorials/multi-party-escrow" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Multi-Party Escrow </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Examples</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/examples/gallery" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Example Gallery </a><a href="/docs/examples/counter" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Counter </a><a href="/docs/examples/tic-tac-toe" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Tic-Tac-Toe </a><a href="/docs/examples/auction" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Auction </a><a href="/docs/examples/blackjack-betting" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Blackjack Betting </a><a href="/docs/examples/price-bet" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Price Bet </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Changelog</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/changelog/index" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Release History </a><a href="/docs/changelog/v0-4" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.4.x </a><a href="/docs/changelog/v0-3" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.3.x </a><a href="/docs/changelog/v0-2" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.2.0 </a> </div> </details> </div> </nav> </aside> <!-- Main content --> <article class="min-w-0 flex-1" data-pagefind-body> <nav aria-label="Breadcrumb" class="mb-4"> <ol class="flex items-center gap-1.5 text-sm text-text-tertiary"> <li> <a href="/docs/getting-started/overview" class="hover:text-text-secondary transition-colors">Docs</a> </li> <li class="select-none">/</li> <li> <span class="text-text-secondary">API Reference</span> </li> <li class="select-none">/</li> <li> <span class="text-text">Contract Decorators &amp; Types</span> </li> </ol> </nav> <div class="prose"> <h1>Contract Decorators &amp; Types</h1>  <p>Rúnar uses a specialized type system and language keywords to define contract classes, methods, and state. This page is a complete reference for every on-chain type, annotation pattern, and built-in function available in the <code>runar-lang</code> package.</p>
<h2 id="contract-annotations">Contract Annotations</h2>
<p>Rúnar does not use TypeScript decorators (the <code>@decorator</code> syntax). Instead, contract structure is expressed through base class inheritance, the <code>readonly</code> keyword, and the <code>public</code> access modifier. The compiler’s validation pass explicitly rejects decorator syntax.</p>
<h3 id="contract-declaration">Contract Declaration</h3>
<p>A contract is a class that extends either <code>SmartContract</code> (stateless) or <code>StatefulSmartContract</code> (mutable state):</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { SmartContract } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> P2PKH</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> SmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">  // Extending SmartContract marks this class as a contract</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { StatefulSmartContract } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Counter</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> StatefulSmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">  // Extending StatefulSmartContract enables mutable state</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>Only one contract class is allowed per file. The file must use the <code>.runar.ts</code> extension.</p>
<h3 id="public-methods-spending-conditions">Public Methods (Spending Conditions)</h3>
<p>The <code>public</code> keyword marks a method as a spending condition — an entry point that callers can invoke to spend the contract UTXO:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> P2PKH</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> SmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  readonly</span><span style="color:#E36209;--shiki-dark:#FFAB70"> pubKeyHash</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Ripemd160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  public</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> unlock</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">sig</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Sig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#E36209;--shiki-dark:#FFAB70">pubKey</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">    assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">hash160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKey) </span><span style="color:#D73A49;--shiki-dark:#F97583">===</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.pubKeyHash);</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">    assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">checkSig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig, pubKey));</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>In a <code>SmartContract</code> (stateless), every public method should call <code>assert()</code> to define spending conditions. In a <code>StatefulSmartContract</code>, the compiler automatically injects covenant enforcement (preimage verification and state continuation), so explicit <code>assert()</code> calls are only needed for business logic validation. Methods without the <code>public</code> keyword are private helpers that the compiler inlines at each call site.</p>
<h3 id="readonly-properties-immutable">Readonly Properties (Immutable)</h3>
<p>The <code>readonly</code> keyword marks a field as immutable. Readonly values are baked into the locking script at deployment time and cannot change:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Escrow</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> SmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  readonly</span><span style="color:#E36209;--shiki-dark:#FFAB70"> buyer</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  readonly</span><span style="color:#E36209;--shiki-dark:#FFAB70"> seller</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  readonly</span><span style="color:#E36209;--shiki-dark:#FFAB70"> arbiter</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  constructor</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">buyer</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#E36209;--shiki-dark:#FFAB70">seller</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#E36209;--shiki-dark:#FFAB70">arbiter</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(buyer, seller, arbiter);</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.buyer </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> buyer;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.seller </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seller;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.arbiter </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> arbiter;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>In a <code>SmartContract</code>, all fields must be <code>readonly</code>. In a <code>StatefulSmartContract</code>, <code>readonly</code> fields are fixed at deployment while non-readonly fields are mutable state.</p>
<h3 id="mutable-state-fields">Mutable State Fields</h3>
<p>In a <code>StatefulSmartContract</code>, fields without <code>readonly</code> are mutable state. They are serialized into the locking script and can be updated across transactions:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Counter</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> StatefulSmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">  count</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;  </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Mutable state -- no readonly keyword</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  constructor</span><span style="color:#24292E;--shiki-dark:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">();</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.count </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  public</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> increment</span><span style="color:#24292E;--shiki-dark:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.count </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.count </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">    assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">true</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>State updates are enforced on-chain through the OP_PUSH_TX covenant mechanism. The compiler auto-injects the preimage verification and state continuation code.</p>
<h3 id="constructor-pattern">Constructor Pattern</h3>
<p>Every contract constructor must call <code>super()</code> with all readonly field values, in order:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">constructor</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(buyer: PubKey, seller: PubKey, amount: bigint) {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(buyer, seller, amount);</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.buyer </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> buyer;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.seller </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seller;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.amount </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> amount;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>The <code>super()</code> arguments define the constructor slots in the compiled artifact. When deploying via the SDK, these values are spliced into the script’s placeholder positions.</p>
<h2 id="on-chain-primitive-types">On-Chain Primitive Types</h2>
<p>All on-chain values in Rúnar must use these types. JavaScript/TypeScript native types like <code>number</code> and <code>string</code> are not allowed in contract code.</p>
<h3 id="bigint">bigint</h3>
<p>Arbitrary-precision integer. The primary numeric type.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> amount</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 50000</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> negative</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#D73A49;--shiki-dark:#F97583"> -</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> zero</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<p><strong>Script representation:</strong> Minimally-encoded signed little-endian integer.</p>
<p><strong>Operations:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulo), comparison (<code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>===</code>).</p>
<p>Division is integer division (truncates toward zero). There are no floating-point numbers.</p>
<h3 id="boolean">boolean</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> isValid</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> boolean</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> true</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> isEmpty</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> boolean</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> false</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<p><strong>Script representation:</strong> <code>OP_TRUE</code> (0x01) or <code>OP_FALSE</code> (empty byte array).</p>
<h3 id="bytestring">ByteString</h3>
<p>A raw byte sequence, represented as a hex string in TypeScript.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> data</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ByteString</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;aabbccdd&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> empty</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ByteString</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<p><strong>Operations:</strong></p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> combined</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ByteString</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> data1 </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> data2;       </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Concatenation (cat)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> length</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(data);                  </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Byte length</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> chunk</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ByteString</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> substr</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(data, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">4</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);   </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Extract bytes at offset, length</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> prefix</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ByteString</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> left</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(data, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">4</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);         </span><span style="color:#6A737D;--shiki-dark:#6A737D">// First N bytes</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> suffix</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ByteString</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> right</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(data, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">4</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);        </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Last N bytes</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="color:#005CC5;--shiki-dark:#79B8FF">head</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">tail</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> split</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(data, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">16</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);             </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Split at position</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> flipped</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ByteString</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> reverseBytes</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(data);    </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Reverse byte order</span></span></code></pre>
<h3 id="pubkey">PubKey</h3>
<p>A compressed secp256k1 public key (33 bytes). Starts with <code>02</code> or <code>03</code>.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> key</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;02&#39;</span><span style="color:#D73A49;--shiki-dark:#F97583"> +</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;aa&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#6F42C1;--shiki-dark:#B392F0">repeat</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">32</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);</span></span></code></pre>
<p><strong>Subtyping:</strong> <code>PubKey</code> is a subtype of <code>ByteString</code>. You can pass a <code>PubKey</code> anywhere a <code>ByteString</code> is expected, but not vice versa.</p>
<h3 id="sig">Sig</h3>
<p>A DER-encoded ECDSA signature with sighash type byte appended (71-73 bytes).</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> signature</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Sig</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;30&#39;</span><span style="color:#D73A49;--shiki-dark:#F97583"> +</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;aa&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#6F42C1;--shiki-dark:#B392F0">repeat</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">35</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);</span></span></code></pre>
<p><strong>Affine type:</strong> A <code>Sig</code> value must be consumed exactly once. Using it zero times or more than once is a compile-time error. This prevents signature replay attacks.</p>
<h3 id="sha256">Sha256</h3>
<p>A SHA-256 hash digest (32 bytes).</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> digest</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Sha256</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> sha256</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">&#39;aabbccdd&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);</span></span></code></pre>
<p><strong>Subtyping:</strong> <code>Sha256</code> is a subtype of <code>ByteString</code>.</p>
<h3 id="ripemd160">Ripemd160</h3>
<p>A RIPEMD-160 hash digest (20 bytes).</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> hash</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Ripemd160</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> hash160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKey); </span><span style="color:#6A737D;--shiki-dark:#6A737D">// SHA-256 then RIPEMD-160</span></span></code></pre>
<p><strong>Subtyping:</strong> <code>Ripemd160</code> is a subtype of <code>ByteString</code>.</p>
<h3 id="addr">Addr</h3>
<p>A BSV address (20-byte hash of a public key). Functionally identical to <code>Ripemd160</code> but semantically distinct — indicates a value represents an address.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> address</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Addr</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> hash160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKey);</span></span></code></pre>
<h3 id="sighashpreimage">SigHashPreimage</h3>
<p>The serialized BIP-143 sighash preimage. Used for transaction introspection in covenants.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">public </span><span style="color:#6F42C1;--shiki-dark:#B392F0">spend</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(txPreimage: SigHashPreimage) {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">checkPreimage</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(txPreimage));</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> outputs</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> extractOutputHash</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(txPreimage);</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> locktime</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> extractLocktime</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(txPreimage);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p><strong>Affine type:</strong> Like <code>Sig</code>, a <code>SigHashPreimage</code> must be consumed exactly once.</p>
<h3 id="point">Point</h3>
<p>An elliptic curve point on secp256k1 (64 bytes: 32-byte x + 32-byte y). Used for EC operations in ZK proofs and advanced cryptographic constructions.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> G</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Point</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ecMulGen</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);              </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Generator point</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> P</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Point</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ecMul</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">G</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, secretScalar);    </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Scalar multiplication</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> sum</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Point</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> ecAdd</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">P</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">G</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);             </span><span style="color:#6A737D;--shiki-dark:#6A737D">// Point addition</span></span></code></pre>
<h3 id="rabinsig">RabinSig</h3>
<p>A Rabin signature value (arbitrary-precision integer). Used with <code>verifyRabinSig</code> for oracle attestations.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> oracleSig</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> RabinSig</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 123456789</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<p><strong>Subtyping:</strong> <code>RabinSig</code> is a subtype of <code>bigint</code>.</p>
<h3 id="rabinpubkey">RabinPubKey</h3>
<p>A Rabin public key (arbitrary-precision integer).</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> oracleKey</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> RabinPubKey</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 987654321</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<p><strong>Subtyping:</strong> <code>RabinPubKey</code> is a subtype of <code>bigint</code>.</p>
<h2 id="collection-types">Collection Types</h2>
<h3 id="fixedarrayt-n">FixedArray&lt;T, N&gt;</h3>
<p>A fixed-length array. The length <code>N</code> must be a compile-time constant.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { FixedArray, PubKey, Sig } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// Array of 3 public keys</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> keys</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> FixedArray</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#6F42C1;--shiki-dark:#B392F0">PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">3</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt; </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [key1, key2, key3];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// Array of 5 bigints</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> values</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> FixedArray</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF">bigint</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">5</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt; </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">3</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">4</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">5</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">];</span></span></code></pre>
<p><strong>Operations:</strong></p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// Index access (index must be a compile-time constant or loop variable)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> first</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> keys[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// Iteration (unrolled at compile time)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="color:#D73A49;--shiki-dark:#F97583">let</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">; i </span><span style="color:#D73A49;--shiki-dark:#F97583">&lt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 3</span><span style="color:#24292E;--shiki-dark:#E1E4E8">; i</span><span style="color:#D73A49;--shiki-dark:#F97583">++</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">checkSig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sigs[i], keys[i]));</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>Variable-length arrays are not supported. The compiler unrolls all array operations into sequential opcodes.</p>
<h2 id="type-hierarchy">Type Hierarchy</h2>
<p>The Rúnar type system uses subtyping to allow domain-specific types where generic types are expected:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="plaintext"><code><span class="line"><span>ByteString</span></span>
<span class="line"><span>  ├── PubKey (33 bytes)</span></span>
<span class="line"><span>  ├── Sig (71-73 bytes, affine)</span></span>
<span class="line"><span>  ├── Sha256 (32 bytes)</span></span>
<span class="line"><span>  ├── Ripemd160 (20 bytes)</span></span>
<span class="line"><span>  ├── Addr (20 bytes)</span></span>
<span class="line"><span>  ├── SigHashPreimage (variable, affine)</span></span>
<span class="line"><span>  └── Point (64 bytes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bigint</span></span>
<span class="line"><span>  ├── RabinSig</span></span>
<span class="line"><span>  └── RabinPubKey</span></span></code></pre>
<p>A <code>PubKey</code> can be passed where a <code>ByteString</code> is expected, but a <code>ByteString</code> cannot be passed where a <code>PubKey</code> is expected. Affine types (<code>Sig</code>, <code>SigHashPreimage</code>) must be consumed exactly once regardless of subtyping.</p>
<h2 id="constants">Constants</h2>
<h3 id="elliptic-curve-constants">Elliptic Curve Constants</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { EC_P, EC_N, EC_G } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// EC_P: The prime modulus of secp256k1</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> p</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> EC_P</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// EC_N: The order of the generator point</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> n</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> EC_N</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// EC_G: The generator point</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> G</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Point</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> EC_G</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<h3 id="sighash-flags">SigHash Flags</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { SigHash } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ALL</span><span style="color:#6A737D;--shiki-dark:#6A737D">          // 0x01 -- Sign all inputs and outputs</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">NONE</span><span style="color:#6A737D;--shiki-dark:#6A737D">         // 0x02 -- Sign all inputs, no outputs</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">SINGLE</span><span style="color:#6A737D;--shiki-dark:#6A737D">       // 0x03 -- Sign all inputs, only the matching output</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">FORKID</span><span style="color:#6A737D;--shiki-dark:#6A737D">       // 0x40 -- BSV fork ID flag (always set on BSV)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ANYONECANPAY</span><span style="color:#6A737D;--shiki-dark:#6A737D"> // 0x80 -- Sign only the current input</span></span></code></pre>
<p>Combined with bitwise OR:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// Most common: sign everything with BSV fork ID</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> sigType</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ALL</span><span style="color:#D73A49;--shiki-dark:#F97583"> |</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">FORKID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">; </span><span style="color:#6A737D;--shiki-dark:#6A737D">// 0x41</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// Sign only current input, only matching output</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> sigType</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">SINGLE</span><span style="color:#D73A49;--shiki-dark:#F97583"> |</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">FORKID</span><span style="color:#D73A49;--shiki-dark:#F97583"> |</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> SigHash.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ANYONECANPAY</span><span style="color:#24292E;--shiki-dark:#E1E4E8">; </span><span style="color:#6A737D;--shiki-dark:#6A737D">// 0xC3</span></span></code></pre>
<h2 id="built-in-functions-reference">Built-In Functions Reference</h2>
<h3 id="cryptographic-hashing">Cryptographic Hashing</h3>















































<table><thead><tr><th>Function</th><th>Input</th><th>Output</th><th>Description</th></tr></thead><tbody><tr><td><code>sha256(data)</code></td><td><code>ByteString</code></td><td><code>Sha256</code></td><td>SHA-256 hash</td></tr><tr><td><code>hash256(data)</code></td><td><code>ByteString</code></td><td><code>Sha256</code></td><td>Double SHA-256: <code>sha256(sha256(data))</code></td></tr><tr><td><code>hash160(data)</code></td><td><code>ByteString</code></td><td><code>Ripemd160</code></td><td>SHA-256 then RIPEMD-160</td></tr><tr><td><code>ripemd160(data)</code></td><td><code>ByteString</code></td><td><code>Ripemd160</code></td><td>RIPEMD-160 hash</td></tr><tr><td><code>sha256Compress(state, block)</code></td><td><code>ByteString, ByteString</code></td><td><code>Sha256</code></td><td>SHA-256 compression function (partial verification)</td></tr><tr><td><code>sha256Finalize(state, remaining, msgBitLen)</code></td><td><code>ByteString, ByteString, bigint</code></td><td><code>Sha256</code></td><td>SHA-256 finalization (partial verification)</td></tr></tbody></table>
<h3 id="signature-verification">Signature Verification</h3>






























<table><thead><tr><th>Function</th><th>Description</th><th>Return</th></tr></thead><tbody><tr><td><code>checkSig(sig, pubKey)</code></td><td>Verify ECDSA signature</td><td><code>boolean</code></td></tr><tr><td><code>checkMultiSig(sigs, pubKeys)</code></td><td>Verify M-of-N ECDSA signatures</td><td><code>boolean</code></td></tr><tr><td><code>checkPreimage(preimage)</code></td><td>Verify sighash preimage authenticity via OP_PUSH_TX</td><td><code>boolean</code></td></tr><tr><td><code>verifyRabinSig(msg, sig, padding, pubKey)</code></td><td>Verify Rabin oracle signature</td><td><code>boolean</code></td></tr></tbody></table>
<h3 id="post-quantum-verification">Post-Quantum Verification</h3>





































<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>verifyWOTS(msg, sig, pubKey)</code></td><td>Verify WOTS+ one-time signature (2,144B sig)</td></tr><tr><td><code>verifySLHDSA_SHA2_128s(msg, sig, pubKey)</code></td><td>SLH-DSA SHA2-128s verification</td></tr><tr><td><code>verifySLHDSA_SHA2_128f(msg, sig, pubKey)</code></td><td>SLH-DSA SHA2-128f verification</td></tr><tr><td><code>verifySLHDSA_SHA2_192s(msg, sig, pubKey)</code></td><td>SLH-DSA SHA2-192s verification</td></tr><tr><td><code>verifySLHDSA_SHA2_192f(msg, sig, pubKey)</code></td><td>SLH-DSA SHA2-192f verification</td></tr><tr><td><code>verifySLHDSA_SHA2_256s(msg, sig, pubKey)</code></td><td>SLH-DSA SHA2-256s verification</td></tr><tr><td><code>verifySLHDSA_SHA2_256f(msg, sig, pubKey)</code></td><td>SLH-DSA SHA2-256f verification</td></tr></tbody></table>
<h3 id="preimage-introspection">Preimage Introspection</h3>






































































<table><thead><tr><th>Function</th><th>Return</th><th>Description</th></tr></thead><tbody><tr><td><code>extractVersion(preimage)</code></td><td><code>bigint</code></td><td>Transaction version (4 bytes)</td></tr><tr><td><code>extractHashPrevouts(preimage)</code></td><td><code>Sha256</code></td><td>Double-SHA256 of all input outpoints</td></tr><tr><td><code>extractHashSequence(preimage)</code></td><td><code>Sha256</code></td><td>Double-SHA256 of all input sequences</td></tr><tr><td><code>extractOutpoint(preimage)</code></td><td><code>ByteString</code></td><td>Outpoint of the current input (36 bytes)</td></tr><tr><td><code>extractInputIndex(preimage)</code></td><td><code>bigint</code></td><td>Index of the current input</td></tr><tr><td><code>extractScriptCode(preimage)</code></td><td><code>ByteString</code></td><td>Locking script being executed</td></tr><tr><td><code>extractAmount(preimage)</code></td><td><code>bigint</code></td><td>Satoshi value of the UTXO being spent</td></tr><tr><td><code>extractSequence(preimage)</code></td><td><code>bigint</code></td><td>Sequence number of the current input</td></tr><tr><td><code>extractOutputHash(preimage)</code></td><td><code>Sha256</code></td><td>Double-SHA256 of all serialized outputs</td></tr><tr><td><code>extractOutputs(preimage)</code></td><td><code>ByteString</code></td><td>Raw serialized outputs</td></tr><tr><td><code>extractLocktime(preimage)</code></td><td><code>bigint</code></td><td>Transaction locktime</td></tr><tr><td><code>extractSigHashType(preimage)</code></td><td><code>bigint</code></td><td>Sighash flags</td></tr></tbody></table>
<h3 id="elliptic-curve-operations">Elliptic Curve Operations</h3>




























































<table><thead><tr><th>Function</th><th>Description</th><th>Return</th></tr></thead><tbody><tr><td><code>ecAdd(p1, p2)</code></td><td>EC point addition</td><td><code>Point</code></td></tr><tr><td><code>ecMul(point, scalar)</code></td><td>EC scalar multiplication</td><td><code>Point</code></td></tr><tr><td><code>ecMulGen(scalar)</code></td><td>Multiply generator G by scalar</td><td><code>Point</code></td></tr><tr><td><code>ecNegate(point)</code></td><td>Negate (reflect over x-axis)</td><td><code>Point</code></td></tr><tr><td><code>ecOnCurve(point)</code></td><td>Check if point is on secp256k1</td><td><code>boolean</code></td></tr><tr><td><code>ecModReduce(value)</code></td><td>Reduce modulo curve order N</td><td><code>bigint</code></td></tr><tr><td><code>ecEncodeCompressed(point)</code></td><td>Encode as 33-byte compressed pubkey</td><td><code>ByteString</code></td></tr><tr><td><code>ecMakePoint(x, y)</code></td><td>Construct point from coordinates</td><td><code>Point</code></td></tr><tr><td><code>ecPointX(point)</code></td><td>Extract x-coordinate</td><td><code>bigint</code></td></tr><tr><td><code>ecPointY(point)</code></td><td>Extract y-coordinate</td><td><code>bigint</code></td></tr></tbody></table>
<h3 id="byte-operations">Byte Operations</h3>


















































<table><thead><tr><th>Function</th><th>Description</th><th>Return</th></tr></thead><tbody><tr><td><code>len(data)</code></td><td>Byte length</td><td><code>bigint</code></td></tr><tr><td><code>cat(a, b)</code></td><td>Concatenate two byte sequences</td><td><code>ByteString</code></td></tr><tr><td><code>substr(data, offset, length)</code></td><td>Extract bytes at offset</td><td><code>ByteString</code></td></tr><tr><td><code>left(data, n)</code></td><td>First N bytes</td><td><code>ByteString</code></td></tr><tr><td><code>right(data, n)</code></td><td>Last N bytes</td><td><code>ByteString</code></td></tr><tr><td><code>split(data, position)</code></td><td>Split into two parts</td><td><code>[ByteString, ByteString]</code></td></tr><tr><td><code>reverseBytes(data)</code></td><td>Reverse byte order</td><td><code>ByteString</code></td></tr><tr><td><code>toByteString(value)</code></td><td>Convert to byte representation</td><td><code>ByteString</code></td></tr></tbody></table>
<h3 id="conversion-functions">Conversion Functions</h3>






























<table><thead><tr><th>Function</th><th>Description</th><th>Return</th></tr></thead><tbody><tr><td><code>num2bin(num, length)</code></td><td>Encode integer as fixed-length bytes</td><td><code>ByteString</code></td></tr><tr><td><code>bin2num(data)</code></td><td>Decode bytes as integer</td><td><code>bigint</code></td></tr><tr><td><code>int2str(num, length)</code></td><td>Integer to fixed-length byte string representation</td><td><code>ByteString</code></td></tr><tr><td><code>bool(value)</code></td><td>Convert to boolean</td><td><code>boolean</code></td></tr></tbody></table>
<h3 id="math-functions">Math Functions</h3>





















































































<table><thead><tr><th>Function</th><th>Description</th><th>Return</th></tr></thead><tbody><tr><td><code>abs(x)</code></td><td>Absolute value</td><td><code>bigint</code></td></tr><tr><td><code>min(a, b)</code></td><td>Minimum of two values</td><td><code>bigint</code></td></tr><tr><td><code>max(a, b)</code></td><td>Maximum of two values</td><td><code>bigint</code></td></tr><tr><td><code>within(x, low, high)</code></td><td>Check if <code>low &lt;= x &lt; high</code></td><td><code>boolean</code></td></tr><tr><td><code>safediv(a, b)</code></td><td>Division with zero-check</td><td><code>bigint</code></td></tr><tr><td><code>safemod(a, b)</code></td><td>Modulo with zero-check</td><td><code>bigint</code></td></tr><tr><td><code>clamp(x, low, high)</code></td><td>Clamp to range</td><td><code>bigint</code></td></tr><tr><td><code>mulDiv(a, b, c)</code></td><td><code>(a * b) / c</code> without intermediate overflow</td><td><code>bigint</code></td></tr><tr><td><code>percentOf(value, percent)</code></td><td><code>(value * percent) / 100</code></td><td><code>bigint</code></td></tr><tr><td><code>sign(x)</code></td><td>Sign of value: -1, 0, or 1</td><td><code>bigint</code></td></tr><tr><td><code>pow(base, exp)</code></td><td>Integer exponentiation</td><td><code>bigint</code></td></tr><tr><td><code>sqrt(x)</code></td><td>Integer square root (floor)</td><td><code>bigint</code></td></tr><tr><td><code>gcd(a, b)</code></td><td>Greatest common divisor</td><td><code>bigint</code></td></tr><tr><td><code>divmod(a, b)</code></td><td>Quotient and remainder</td><td><code>[bigint, bigint]</code></td></tr><tr><td><code>log2(x)</code></td><td>Integer log base 2 (floor)</td><td><code>bigint</code></td></tr></tbody></table>
<h3 id="control-functions">Control Functions</h3>













<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>assert(condition)</code></td><td>Abort script execution if condition is false</td></tr></tbody></table>
<h3 id="state-functions-statefulsmartcontract-only">State Functions (StatefulSmartContract only)</h3>





















<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>this.addOutput(satoshis, ...stateValues)</code></td><td>Add a continuation output with updated state</td></tr><tr><td><code>this.addRawOutput(satoshis, scriptBytes)</code></td><td>Add an arbitrary output with caller-specified script bytes</td></tr><tr><td><code>this.getStateScript()</code></td><td>Returns the serialized script bytes for all outputs defined by prior <code>addOutput()</code> calls. Used with <code>hash256()</code> and <code>extractOutputHash()</code> for explicit covenant enforcement in multi-output contracts.</td></tr></tbody></table>
<h2 id="further-reading">Further Reading</h2>
<ul>
<li><a href="/docs/writing-contracts/contract-basics">Contract Basics</a> — writing contracts with the type system</li>
<li><a href="/docs/api-reference/compiler-api">Compiler API</a> — programmatic compilation interface</li>
<li><a href="/docs/api-reference/sdk-api">SDK API</a> — deploying and calling contracts</li>
</ul>  </div> <nav aria-label="Pagination" class="mt-16 pt-6 border-t border-border flex items-center justify-between gap-4"> <a href="/docs/api-reference/sdk-api" class="group flex flex-col items-start gap-1 text-sm hover:text-accent-500 transition-colors"> <span class="text-text-tertiary text-xs font-mono uppercase tracking-wider">&larr; Previous</span> <span class="text-text-secondary group-hover:text-accent-500 transition-colors">SDK API</span> </a> <a href="/docs/api-reference/cli-reference" class="group flex flex-col items-end gap-1 text-sm hover:text-accent-500 transition-colors"> <span class="text-text-tertiary text-xs font-mono uppercase tracking-wider">Next &rarr;</span> <span class="text-text-secondary group-hover:text-accent-500 transition-colors">CLI Reference</span> </a> </nav> </article> <!-- Table of Contents --> <astro-island uid="Z1DvTHM" prefix="r8" component-url="/_astro/TableOfContents.DUY0neXz.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;headings&quot;:[1,[[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;contract-annotations&quot;],&quot;text&quot;:[0,&quot;Contract Annotations&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;contract-declaration&quot;],&quot;text&quot;:[0,&quot;Contract Declaration&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;public-methods-spending-conditions&quot;],&quot;text&quot;:[0,&quot;Public Methods (Spending Conditions)&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;readonly-properties-immutable&quot;],&quot;text&quot;:[0,&quot;Readonly Properties (Immutable)&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;mutable-state-fields&quot;],&quot;text&quot;:[0,&quot;Mutable State Fields&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;constructor-pattern&quot;],&quot;text&quot;:[0,&quot;Constructor Pattern&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;on-chain-primitive-types&quot;],&quot;text&quot;:[0,&quot;On-Chain Primitive Types&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;bigint&quot;],&quot;text&quot;:[0,&quot;bigint&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;boolean&quot;],&quot;text&quot;:[0,&quot;boolean&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;bytestring&quot;],&quot;text&quot;:[0,&quot;ByteString&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;pubkey&quot;],&quot;text&quot;:[0,&quot;PubKey&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;sig&quot;],&quot;text&quot;:[0,&quot;Sig&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;sha256&quot;],&quot;text&quot;:[0,&quot;Sha256&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;ripemd160&quot;],&quot;text&quot;:[0,&quot;Ripemd160&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;addr&quot;],&quot;text&quot;:[0,&quot;Addr&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;sighashpreimage&quot;],&quot;text&quot;:[0,&quot;SigHashPreimage&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;point&quot;],&quot;text&quot;:[0,&quot;Point&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;rabinsig&quot;],&quot;text&quot;:[0,&quot;RabinSig&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;rabinpubkey&quot;],&quot;text&quot;:[0,&quot;RabinPubKey&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;collection-types&quot;],&quot;text&quot;:[0,&quot;Collection Types&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;fixedarrayt-n&quot;],&quot;text&quot;:[0,&quot;FixedArray&lt;T, N&gt;&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;type-hierarchy&quot;],&quot;text&quot;:[0,&quot;Type Hierarchy&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;constants&quot;],&quot;text&quot;:[0,&quot;Constants&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;elliptic-curve-constants&quot;],&quot;text&quot;:[0,&quot;Elliptic Curve Constants&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;sighash-flags&quot;],&quot;text&quot;:[0,&quot;SigHash Flags&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;built-in-functions-reference&quot;],&quot;text&quot;:[0,&quot;Built-In Functions Reference&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;cryptographic-hashing&quot;],&quot;text&quot;:[0,&quot;Cryptographic Hashing&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;signature-verification&quot;],&quot;text&quot;:[0,&quot;Signature Verification&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;post-quantum-verification&quot;],&quot;text&quot;:[0,&quot;Post-Quantum Verification&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;preimage-introspection&quot;],&quot;text&quot;:[0,&quot;Preimage Introspection&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;elliptic-curve-operations&quot;],&quot;text&quot;:[0,&quot;Elliptic Curve Operations&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;byte-operations&quot;],&quot;text&quot;:[0,&quot;Byte Operations&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;conversion-functions&quot;],&quot;text&quot;:[0,&quot;Conversion Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;math-functions&quot;],&quot;text&quot;:[0,&quot;Math Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;control-functions&quot;],&quot;text&quot;:[0,&quot;Control Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;state-functions-statefulsmartcontract-only&quot;],&quot;text&quot;:[0,&quot;State Functions (StatefulSmartContract only)&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;further-reading&quot;],&quot;text&quot;:[0,&quot;Further Reading&quot;]}]]]}" ssr client="idle" opts="{&quot;name&quot;:&quot;TableOfContents&quot;,&quot;value&quot;:true}" await-children><nav class="sticky top-20 w-48 hidden xl:block" aria-label="On this page"><h4 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">On this page</h4><ul class="space-y-1"><li><a href="#contract-annotations" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Contract Annotations</a></li><li><a href="#contract-declaration" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Contract Declaration</a></li><li><a href="#public-methods-spending-conditions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Public Methods (Spending Conditions)</a></li><li><a href="#readonly-properties-immutable" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Readonly Properties (Immutable)</a></li><li><a href="#mutable-state-fields" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Mutable State Fields</a></li><li><a href="#constructor-pattern" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Constructor Pattern</a></li><li><a href="#on-chain-primitive-types" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">On-Chain Primitive Types</a></li><li><a href="#bigint" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">bigint</a></li><li><a href="#boolean" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">boolean</a></li><li><a href="#bytestring" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">ByteString</a></li><li><a href="#pubkey" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">PubKey</a></li><li><a href="#sig" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Sig</a></li><li><a href="#sha256" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Sha256</a></li><li><a href="#ripemd160" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Ripemd160</a></li><li><a href="#addr" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Addr</a></li><li><a href="#sighashpreimage" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">SigHashPreimage</a></li><li><a href="#point" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Point</a></li><li><a href="#rabinsig" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">RabinSig</a></li><li><a href="#rabinpubkey" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">RabinPubKey</a></li><li><a href="#collection-types" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Collection Types</a></li><li><a href="#fixedarrayt-n" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">FixedArray&lt;T, N&gt;</a></li><li><a href="#type-hierarchy" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Type Hierarchy</a></li><li><a href="#constants" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Constants</a></li><li><a href="#elliptic-curve-constants" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Elliptic Curve Constants</a></li><li><a href="#sighash-flags" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">SigHash Flags</a></li><li><a href="#built-in-functions-reference" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Built-In Functions Reference</a></li><li><a href="#cryptographic-hashing" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Cryptographic Hashing</a></li><li><a href="#signature-verification" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Signature Verification</a></li><li><a href="#post-quantum-verification" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Post-Quantum Verification</a></li><li><a href="#preimage-introspection" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Preimage Introspection</a></li><li><a href="#elliptic-curve-operations" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Elliptic Curve Operations</a></li><li><a href="#byte-operations" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Byte Operations</a></li><li><a href="#conversion-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Conversion Functions</a></li><li><a href="#math-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Math Functions</a></li><li><a href="#control-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Control Functions</a></li><li><a href="#state-functions-statefulsmartcontract-only" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">State Functions (StatefulSmartContract only)</a></li><li><a href="#further-reading" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Further Reading</a></li></ul></nav><!--astro:end--></astro-island> </div> </div> <footer class="border-t border-border bg-bg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Brand --> <div> <a href="/" class="inline-flex items-center gap-2 font-mono font-bold text-xl tracking-tight text-text hover:text-accent-500 transition-colors mb-3"> <span>R<span class="text-accent-500">ú</span>nar</span> </a> <p class="text-text-tertiary text-sm max-w-xs">
Write Bitcoin smart contracts in languages you already know. Compile to Bitcoin Script. Deploy to BSV.
</p> </div> <!-- Nav columns --> <div> <h3 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Product</h3> <ul class="space-y-2"> <li> <a href="/docs/getting-started/overview" class="text-sm text-text-secondary hover:text-text transition-colors"> Documentation </a> </li><li> <a href="/docs/examples/gallery" class="text-sm text-text-secondary hover:text-text transition-colors"> Examples </a> </li><li> <a href="/docs/api-reference/compiler-api" class="text-sm text-text-secondary hover:text-text transition-colors"> API Reference </a> </li> </ul> </div><div> <h3 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Resources</h3> <ul class="space-y-2"> <li> <a href="/docs/tutorials/hello-world" class="text-sm text-text-secondary hover:text-text transition-colors"> Tutorials </a> </li><li> <a href="/docs/getting-started/overview" class="text-sm text-text-secondary hover:text-text transition-colors"> Getting Started </a> </li><li> <a href="https://runar.run" class="text-sm text-text-secondary hover:text-text transition-colors" target="_blank" rel="noopener noreferrer"> Playground </a> </li><li> <a href="https://github.com/icellan/runar" class="text-sm text-text-secondary hover:text-text transition-colors" target="_blank" rel="noopener noreferrer"> GitHub </a> </li> </ul> </div> </div> <!-- Bottom bar --> <div class="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"> <p class="text-xs text-text-tertiary">
&copy; 2026 Rúnar contributors. Open source under MIT.
</p> <a href="#top" class="text-xs text-text-tertiary hover:text-text transition-colors">
Back to top &uarr;
</a> </div> </div> </footer>  </body></html>