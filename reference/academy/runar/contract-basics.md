<!DOCTYPE html><html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical" href="https://runar.build/docs/writing-contracts/contract-basics/"><title>Contract Basics — Rúnar Docs</title><meta name="description" content="Core concepts for writing Runar contracts."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url" content="https://runar.build/docs/writing-contracts/contract-basics/"><meta property="og:title" content="Contract Basics — Rúnar Docs"><meta property="og:description" content="Core concepts for writing Runar contracts."><meta property="og:image" content="https://runar.build/og/default.png"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Contract Basics — Rúnar Docs"><meta name="twitter:description" content="Core concepts for writing Runar contracts."><meta name="twitter:image" content="https://runar.build/og/default.png"><!-- Prevent FOUC: set theme before first paint --><script>
      (function() {
        var stored = localStorage.getItem('theme');
        var theme = stored || 'dark';
        document.documentElement.className = theme;
      })();
    </script><link rel="stylesheet" href="/_astro/BaseLayout.kcMJrBuL.css"></head> <body class="bg-bg text-text min-h-screen antialiased">  <header class="sticky top-0 z-30 w-full border-b transition-colors bg-bg/95 backdrop-blur-md border-border"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <a href="/" class="inline-flex items-center gap-2 font-mono font-bold text-xl tracking-tight text-text hover:text-accent-500 transition-colors"> <span>R<span class="text-accent-500">ú</span>nar</span> </a> <!-- Desktop nav --> <nav class="hidden lg:flex items-center gap-1"> <a href="/docs/getting-started/overview" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Docs  </a><a href="/docs/examples/gallery" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Examples  </a><a href="/docs/changelog/index" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Changelog  </a><a href="https://runar.run" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors" target="_blank" rel="noopener noreferrer"> Playground <svg class="inline-block ml-1 -mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </a><a href="https://github.com/icellan/runar" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors" target="_blank" rel="noopener noreferrer"> GitHub <svg class="inline-block ml-1 -mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </a> <style>astro-island,astro-slot,astro-static-slot{display:contents}</style><script>(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();</script><script>(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE_INFINITY*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();</script><astro-island uid="Z2v0P66" prefix="r9" component-url="/_astro/SearchDialog.B57nUXo_.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;SearchDialog&quot;,&quot;value&quot;:true}" await-children><button class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-tertiary border border-border rounded-lg hover:border-border-strong hover:text-text-secondary transition-colors" aria-label="Search documentation"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><span class="hidden sm:inline">Search docs...</span><kbd class="hidden sm:inline text-xs font-mono text-text-tertiary bg-surface px-1.5 py-0.5 rounded border border-border">⌘K</kbd></button><!--astro:end--></astro-island> <div class="w-px h-5 bg-border mx-2"></div> <script>(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();</script><astro-island uid="1sy2V0" prefix="r10" component-url="/_astro/ThemeToggle.DqXasmEh.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="load" opts="{&quot;name&quot;:&quot;ThemeToggle&quot;,&quot;value&quot;:true}" await-children><button aria-label="Switch to light mode" class="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button><!--astro:end--></astro-island> </nav> <!-- Mobile --> <div class="flex items-center gap-2 lg:hidden"> <astro-island uid="Z2v0P66" prefix="r11" component-url="/_astro/SearchDialog.B57nUXo_.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;SearchDialog&quot;,&quot;value&quot;:true}" await-children><button class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-tertiary border border-border rounded-lg hover:border-border-strong hover:text-text-secondary transition-colors" aria-label="Search documentation"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><span class="hidden sm:inline">Search docs...</span><kbd class="hidden sm:inline text-xs font-mono text-text-tertiary bg-surface px-1.5 py-0.5 rounded border border-border">⌘K</kbd></button><!--astro:end--></astro-island> <astro-island uid="1sy2V0" prefix="r12" component-url="/_astro/ThemeToggle.DqXasmEh.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="load" opts="{&quot;name&quot;:&quot;ThemeToggle&quot;,&quot;value&quot;:true}" await-children><button aria-label="Switch to light mode" class="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button><!--astro:end--></astro-island> <astro-island uid="1JvchJ" prefix="r13" component-url="/_astro/MobileMenu.BRNZhq9l.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;items&quot;:[1,[[0,{&quot;label&quot;:[0,&quot;Docs&quot;],&quot;href&quot;:[0,&quot;/docs/getting-started/overview&quot;]}],[0,{&quot;label&quot;:[0,&quot;Examples&quot;],&quot;href&quot;:[0,&quot;/docs/examples/gallery&quot;]}],[0,{&quot;label&quot;:[0,&quot;Changelog&quot;],&quot;href&quot;:[0,&quot;/docs/changelog/index&quot;]}],[0,{&quot;label&quot;:[0,&quot;Playground&quot;],&quot;href&quot;:[0,&quot;https://runar.run&quot;]}],[0,{&quot;label&quot;:[0,&quot;GitHub&quot;],&quot;href&quot;:[0,&quot;https://github.com/icellan/runar&quot;]}]]]}" ssr client="load" opts="{&quot;name&quot;:&quot;MobileMenu&quot;,&quot;value&quot;:true}" await-children><button aria-label="Open menu" aria-expanded="false" class="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button><!--astro:end--></astro-island> </div> </div> </div> </header> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Mobile sidebar toggle --> <div class="lg:hidden py-3 border-b border-border"> <astro-island uid="24OWLt" prefix="r7" component-url="/_astro/MobileSidebar.BtZy13Bi.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;currentPath&quot;:[0,&quot;/docs/writing-contracts/contract-basics&quot;]}" ssr client="load" opts="{&quot;name&quot;:&quot;MobileSidebar&quot;,&quot;value&quot;:true}" await-children><button class="lg:hidden flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary border border-border rounded-lg hover:border-border-strong transition-colors" aria-label="Open navigation"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>Menu</button><!--astro:end--></astro-island> </div> <div class="flex gap-8 py-8"> <!-- Desktop sidebar --> <aside class="w-64 shrink-0 hidden lg:block"> <nav class="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 pb-8 scrollbar-thin" aria-label="Documentation sidebar"> <div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Getting Started</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/getting-started/overview" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Overview </a><a href="/docs/getting-started/installation" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Installation </a><a href="/docs/getting-started/quick-start" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Quick Start </a><a href="/docs/getting-started/project-structure" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Project Structure </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Bitcoin &amp; BSV Basics</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/bitcoin-bsv-basics/utxo-model" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> The UTXO Model </a><a href="/docs/bitcoin-bsv-basics/bitcoin-script" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Bitcoin Script </a><a href="/docs/bitcoin-bsv-basics/transactions-and-outputs" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Transactions &amp; Outputs </a><a href="/docs/bitcoin-bsv-basics/how-smart-contracts-work-on-bsv" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> How Smart Contracts Work on BSV </a> </div> </details> </div><div class="mb-4"> <details open class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Writing Contracts</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/writing-contracts/contract-basics" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-accent-500 text-accent-500 font-medium" aria-current="page"> Contract Basics </a><a href="/docs/writing-contracts/typescript-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> TypeScript Contracts </a><a href="/docs/writing-contracts/go-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Go Contracts </a><a href="/docs/writing-contracts/rust-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Rust Contracts </a><a href="/docs/writing-contracts/python-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Python Contracts </a><a href="/docs/writing-contracts/zig-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Zig Contracts </a><a href="/docs/writing-contracts/ruby-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Ruby Contracts </a><a href="/docs/writing-contracts/solidity-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Solidity Contracts </a><a href="/docs/writing-contracts/move-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Move Contracts </a><a href="/docs/writing-contracts/language-feature-matrix" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Language Feature Matrix </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>The Compiler</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/compiler/how-it-works" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> How the Compiler Works </a><a href="/docs/compiler/compilation-pipeline" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compilation Pipeline </a><a href="/docs/compiler/configuration" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compiler Configuration </a><a href="/docs/compiler/output-artifacts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Output Artifacts </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>The SDK</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/sdk/overview" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> SDK Overview </a><a href="/docs/sdk/deploying" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Deploying a Contract </a><a href="/docs/sdk/calling" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Calling a Contract </a><a href="/docs/sdk/multi-signer" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Multi-Signer Transactions </a><a href="/docs/sdk/inductive-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Stateful Contracts </a><a href="/docs/sdk/token-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Token Contracts </a><a href="/docs/sdk/wallet-integration" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Wallet Integration </a><a href="/docs/sdk/fee-and-change-handling" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fee &amp; Change Handling </a><a href="/docs/sdk/providers-reference" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Providers Reference </a><a href="/docs/sdk/code-generation" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Code Generation </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Testing &amp; Debugging</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/testing-and-debugging/writing-tests" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Writing Tests </a><a href="/docs/testing-and-debugging/test-runner" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> The Test Runner </a><a href="/docs/testing-and-debugging/advanced-testing" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Advanced Testing </a><a href="/docs/testing-and-debugging/mock-and-fixtures" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Test Fixtures &amp; Mocks </a><a href="/docs/testing-and-debugging/debugging-script" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Debugging Compiled Script </a><a href="/docs/testing-and-debugging/fuzzing" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fuzzing &amp; Property Testing </a><a href="/docs/testing-and-debugging/common-errors" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Common Errors </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Advanced</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/advanced/covenant-architecture" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Covenant Architecture </a><a href="/docs/advanced/recursive-contracts-and-zk-proofs" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Recursive Contracts &amp; ZK Proofs </a><a href="/docs/advanced/dag-topology-and-token-merges" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> DAG Topology &amp; Token Merges </a><a href="/docs/advanced/security-considerations" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Security Considerations </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>API Reference</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/api-reference/compiler-api" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compiler API </a><a href="/docs/api-reference/sdk-api" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> SDK API </a><a href="/docs/api-reference/contract-decorators-and-types" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Contract Decorators &amp; Types </a><a href="/docs/api-reference/cli-reference" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> CLI Reference </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Tutorials</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/tutorials/hello-world" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Hello World Contract </a><a href="/docs/tutorials/fungible-token" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fungible Token </a><a href="/docs/tutorials/nft" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> NFT Contract </a><a href="/docs/tutorials/multi-party-escrow" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Multi-Party Escrow </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Examples</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/examples/gallery" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Example Gallery </a><a href="/docs/examples/counter" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Counter </a><a href="/docs/examples/tic-tac-toe" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Tic-Tac-Toe </a><a href="/docs/examples/auction" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Auction </a><a href="/docs/examples/blackjack-betting" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Blackjack Betting </a><a href="/docs/examples/price-bet" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Price Bet </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Changelog</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/changelog/index" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Release History </a><a href="/docs/changelog/v0-4" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.4.x </a><a href="/docs/changelog/v0-3" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.3.x </a><a href="/docs/changelog/v0-2" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.2.0 </a> </div> </details> </div> </nav> </aside> <!-- Main content --> <article class="min-w-0 flex-1" data-pagefind-body> <nav aria-label="Breadcrumb" class="mb-4"> <ol class="flex items-center gap-1.5 text-sm text-text-tertiary"> <li> <a href="/docs/getting-started/overview" class="hover:text-text-secondary transition-colors">Docs</a> </li> <li class="select-none">/</li> <li> <span class="text-text-secondary">Writing Contracts</span> </li> <li class="select-none">/</li> <li> <span class="text-text">Contract Basics</span> </li> </ol> </nav> <div class="prose"> <h1>Contract Basics</h1>  <p>Runar contracts are high-level programs that compile to Bitcoin Script and execute within BSV transactions. This page covers the foundational concepts you need before writing your first contract — the two contract models, the type system, built-in functions, and the constraints that make on-chain execution safe and deterministic.</p>
<h2 id="the-two-contract-models">The Two Contract Models</h2>
<p>Every Runar contract extends one of two base classes. Your choice determines whether the contract is single-use or carries state forward across transactions.</p>
<h3 id="smartcontract-stateless">SmartContract (Stateless)</h3>
<p><code>SmartContract</code> is the simplest model. All properties are <code>readonly</code> and are baked into the locking script when the contract is deployed. Once a UTXO locked by a <code>SmartContract</code> is spent, that contract instance is consumed and gone. There is no state to carry forward.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { SmartContract, assert, PubKey, Sig, Ripemd160, hash160, checkSig } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> P2PKH</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> SmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  readonly</span><span style="color:#E36209;--shiki-dark:#FFAB70"> pubKeyHash</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Ripemd160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  constructor</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">pubKeyHash</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Ripemd160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKeyHash);</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.pubKeyHash </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> pubKeyHash;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  public</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> unlock</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">sig</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Sig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#E36209;--shiki-dark:#FFAB70">pubKey</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">    assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">hash160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKey) </span><span style="color:#D73A49;--shiki-dark:#F97583">===</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.pubKeyHash);</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">    assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">checkSig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig, pubKey));</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>Use <code>SmartContract</code> for payment conditions, hash locks, time locks, multi-signature schemes, escrow, and any contract where the spending conditions are fixed at creation time.</p>
<h3 id="statefulsmartcontract-mutable-state">StatefulSmartContract (Mutable State)</h3>
<p><code>StatefulSmartContract</code> is for contracts that maintain and evolve state across transactions. Under the hood, it uses the OP_PUSH_TX pattern: when a stateful contract is spent, the compiler automatically injects preimage verification at method entry and state continuation at method exit, ensuring the spending transaction creates a new output containing the updated state.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { StatefulSmartContract, assert } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Counter</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> StatefulSmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">  count</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  public</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> decrement</span><span style="color:#24292E;--shiki-dark:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">    assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.count </span><span style="color:#D73A49;--shiki-dark:#F97583">&gt;</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.count </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.count </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">    assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">true</span><span style="color:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>Stateful contracts can access <code>this.txPreimage</code> to inspect the serialized transaction preimage. For multi-output transactions, use <code>this.addOutput(satoshis, ...values)</code> to append additional outputs beyond the default state continuation output.</p>
<p>Use <code>StatefulSmartContract</code> for counters, token balances, voting tallies, auctions, games, and any contract that needs to evolve over time.</p>
<h2 id="import-and-file-structure">Import and File Structure</h2>
<p>Contracts import types and built-in functions from <code>runar-lang</code> (for TypeScript). Each contract file must contain exactly one contract class — multiple classes per file are not allowed.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { SmartContract, assert, PubKey, Sig, checkSig } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-lang&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<p>Contract files use the <code>.runar.ts</code> extension (or the equivalent for other languages: <code>.runar.go</code>, <code>.runar.rs</code>, <code>.runar.py</code>, <code>.runar.sol</code>, <code>.runar.move</code>). This extension signals to the Runar compiler that the file should be compiled to Bitcoin Script rather than executed as normal source code.</p>
<h2 id="constructor-pattern">Constructor Pattern</h2>
<p>Every contract must define a constructor that calls <code>super()</code> with the same arguments that become readonly properties.</p>
<p>For <code>SmartContract</code>, pass all readonly property values to <code>super()</code>:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">constructor</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKeyHash: Ripemd160) {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKeyHash);</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.pubKeyHash </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> pubKeyHash;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>For <code>StatefulSmartContract</code>, call <code>super()</code> with no arguments and initialize mutable state directly:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">constructor</span><span style="color:#24292E;--shiki-dark:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">();</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.count </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="color:#D73A49;--shiki-dark:#F97583">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>The <code>super()</code> call is required. Omitting it is a compile-time error.</p>
<h2 id="properties-readonly-vs-mutable">Properties: Readonly vs. Mutable</h2>
<p><strong>Readonly properties</strong> are declared with the <code>readonly</code> keyword. They are fixed at deployment time and embedded directly into the locking script. Both <code>SmartContract</code> and <code>StatefulSmartContract</code> can have readonly properties.</p>
<p><strong>Mutable properties</strong> (without <code>readonly</code>) are only available in <code>StatefulSmartContract</code>. They represent on-chain state that can change with each transaction. When a public method modifies a mutable property, the updated value is encoded into the new output’s locking script.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Auction</span><span style="color:#D73A49;--shiki-dark:#F97583"> extends</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> StatefulSmartContract</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  readonly</span><span style="color:#E36209;--shiki-dark:#FFAB70"> auctioneer</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;   </span><span style="color:#6A737D;--shiki-dark:#6A737D">// fixed at deployment</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">  highestBidder</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;         </span><span style="color:#6A737D;--shiki-dark:#6A737D">// changes with each bid</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">  highestBid</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> bigint</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;            </span><span style="color:#6A737D;--shiki-dark:#6A737D">// changes with each bid</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>In a <code>SmartContract</code>, all properties must be <code>readonly</code>. Attempting to declare a mutable property in a <code>SmartContract</code> is a compile-time error.</p>
<h2 id="public-vs-private-methods">Public vs. Private Methods</h2>
<p><strong>Public methods</strong> are the contract’s entry points — they define the spending conditions that must be satisfied to unlock the UTXO. Each public method receives arguments from the unlocking script and must end with a call to <code>assert()</code>. If all assertions pass, the script succeeds and the UTXO is spent.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">public </span><span style="color:#6F42C1;--shiki-dark:#B392F0">unlock</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig: Sig, pubKey: PubKey) {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">hash160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKey) </span><span style="color:#D73A49;--shiki-dark:#F97583">===</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.pubKeyHash);</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">checkSig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig, pubKey));</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<p>Every public method must contain at least one <code>assert()</code> call. A public method that does not assert anything is a compile-time error.</p>
<p><strong>Private methods</strong> are internal helpers. They are inlined at their call sites during compilation — there is no function call overhead at the script level. Private methods cannot be called from outside the contract.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">private </span><span style="color:#6F42C1;--shiki-dark:#B392F0">checkOwnership</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig: Sig, pubKey: PubKey): boolean {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  return</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> hash160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(pubKey) </span><span style="color:#D73A49;--shiki-dark:#F97583">===</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.ownerHash </span><span style="color:#D73A49;--shiki-dark:#F97583">&amp;&amp;</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> checkSig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig, pubKey);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">public </span><span style="color:#6F42C1;--shiki-dark:#B392F0">spend</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig: Sig, pubKey: PubKey) {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  assert</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">this</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#6F42C1;--shiki-dark:#B392F0">checkOwnership</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(sig, pubKey));</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span></code></pre>
<h2 id="the-type-system">The Type System</h2>
<p>Runar enforces a strict, static type system. Every variable, parameter, and property must have a known type at compile time.</p>
<h3 id="primitive-types">Primitive Types</h3>

















<table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>bigint</code></td><td>Arbitrary-precision integer. The only numeric type allowed in contracts. Use <code>0n</code> suffix for literals.</td></tr><tr><td><code>boolean</code></td><td><code>true</code> or <code>false</code>.</td></tr></tbody></table>
<p>The JavaScript <code>number</code> type is <strong>not</strong> allowed in contracts. Use <code>bigint</code> exclusively for all numeric values.</p>
<h3 id="bytestring-types">ByteString Types</h3>
<p>All byte-oriented types are domain subtypes of <code>ByteString</code>. They share the same underlying representation but carry semantic meaning and length constraints.</p>


















































<table><thead><tr><th>Type</th><th>Size</th><th>Description</th></tr></thead><tbody><tr><td><code>ByteString</code></td><td>Variable</td><td>Raw byte sequence. Base type for all byte-oriented data.</td></tr><tr><td><code>PubKey</code></td><td>33 bytes</td><td>Compressed SEC public key.</td></tr><tr><td><code>Sig</code></td><td>DER-encoded signature (variable length, typically 70-73 bytes)</td><td>DER-encoded ECDSA signature. <strong>Affine type</strong> — must be consumed exactly once.</td></tr><tr><td><code>Sha256</code></td><td>32 bytes</td><td>SHA-256 hash digest.</td></tr><tr><td><code>Ripemd160</code></td><td>20 bytes</td><td>RIPEMD-160 hash digest.</td></tr><tr><td><code>Addr</code></td><td>20 bytes</td><td>Address (equivalent to <code>Ripemd160</code> of a public key hash).</td></tr><tr><td><code>SigHashPreimage</code></td><td>Variable</td><td>Serialized transaction preimage. <strong>Affine type</strong> — must be consumed exactly once.</td></tr><tr><td><code>Point</code></td><td>64 bytes</td><td>Uncompressed elliptic curve point (x, y coordinates).</td></tr></tbody></table>
<h3 id="rabin-types">Rabin Types</h3>
<p>These are <code>bigint</code> subtypes used for Rabin signature verification (oracle patterns).</p>

















<table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>RabinSig</code></td><td>Rabin signature value.</td></tr><tr><td><code>RabinPubKey</code></td><td>Rabin public key value.</td></tr></tbody></table>
<h3 id="generic-types">Generic Types</h3>













<table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>FixedArray&lt;T, N&gt;</code></td><td>Fixed-length array of type <code>T</code> with <code>N</code> elements. <code>N</code> must be a compile-time constant.</td></tr></tbody></table>
<p>Dynamic arrays are not supported. All array sizes must be known at compile time.</p>
<h3 id="affine-types">Affine Types</h3>
<p><code>Sig</code> and <code>SigHashPreimage</code> are <strong>affine types</strong> — they must be consumed exactly once within a method body. You cannot use a <code>Sig</code> value twice (for example, passing the same signature to two different <code>checkSig</code> calls) or ignore it entirely. The compiler enforces this constraint to prevent signature malleability and replay issues.</p>
<h2 id="built-in-functions">Built-in Functions</h2>
<p>Runar provides a comprehensive set of built-in functions that map directly to Bitcoin Script opcodes or verified script patterns.</p>
<h3 id="cryptographic-functions">Cryptographic Functions</h3>





































<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>checkSig(sig, pubKey)</code></td><td>Verify an ECDSA signature against a public key.</td></tr><tr><td><code>checkMultiSig(sigs, pubKeys)</code></td><td>Verify multiple signatures against multiple public keys (M-of-N).</td></tr><tr><td><code>hash256(data)</code></td><td>Double SHA-256 hash (SHA-256 of SHA-256).</td></tr><tr><td><code>hash160(data)</code></td><td>RIPEMD-160 of SHA-256 (standard Bitcoin address hash).</td></tr><tr><td><code>sha256(data)</code></td><td>Single SHA-256 hash.</td></tr><tr><td><code>ripemd160(data)</code></td><td>Single RIPEMD-160 hash.</td></tr><tr><td><code>checkPreimage(preimage)</code></td><td>Verify a sighash preimage against the current transaction.</td></tr></tbody></table>
<h3 id="post-quantum-cryptography">Post-Quantum Cryptography</h3>





















<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>verifyWOTS(...)</code></td><td>Verify a Winternitz One-Time Signature.</td></tr><tr><td><code>verifySLHDSA_SHA2_128s(...)</code></td><td>Verify an SLH-DSA (SPHINCS+) signature, SHA2-128s parameter set.</td></tr><tr><td><code>verifySLHDSA_SHA2_128f(...)</code></td><td>Verify an SLH-DSA signature, SHA2-128f parameter set.</td></tr></tbody></table>
<h3 id="oracle-functions">Oracle Functions</h3>













<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>verifyRabinSig(msg, sig, padding, pubKey)</code></td><td>Verify a Rabin signature from an oracle.</td></tr></tbody></table>
<h3 id="elliptic-curve-functions">Elliptic Curve Functions</h3>

















































<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>ecAdd(p1, p2)</code></td><td>Add two elliptic curve points.</td></tr><tr><td><code>ecMul(point, scalar)</code></td><td>Multiply an elliptic curve point by a scalar.</td></tr><tr><td><code>ecMulGen(scalar)</code></td><td>Multiply the generator point by a scalar.</td></tr><tr><td><code>ecNegate(point)</code></td><td>Negate an elliptic curve point.</td></tr><tr><td><code>ecOnCurve(point)</code></td><td>Check if a point lies on the secp256k1 curve.</td></tr><tr><td><code>ecModReduce(value)</code></td><td>Reduce a value modulo the curve order.</td></tr><tr><td><code>ecEncodeCompressed(point)</code></td><td>Encode a point in compressed SEC format.</td></tr><tr><td><code>ecMakePoint(x, y)</code></td><td>Construct a point from x and y coordinates.</td></tr><tr><td><code>ecPointX(point)</code></td><td>Extract the x-coordinate from a point.</td></tr><tr><td><code>ecPointY(point)</code></td><td>Extract the y-coordinate from a point.</td></tr></tbody></table>
<h3 id="byte-operations">Byte Operations</h3>









































<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>len(data)</code></td><td>Return the byte length of a <code>ByteString</code>.</td></tr><tr><td><code>cat(a, b)</code></td><td>Concatenate two <code>ByteString</code> values.</td></tr><tr><td><code>substr(data, start, length)</code></td><td>Extract a substring of bytes.</td></tr><tr><td><code>left(data, length)</code></td><td>Take the leftmost <code>length</code> bytes.</td></tr><tr><td><code>right(data, length)</code></td><td>Take the rightmost <code>length</code> bytes.</td></tr><tr><td><code>split(data, position)</code></td><td>Split a <code>ByteString</code> at a position, returning two parts.</td></tr><tr><td><code>reverseBytes(data)</code></td><td>Reverse the byte order.</td></tr><tr><td><code>toByteString(value)</code></td><td>Cast a hex string to <code>ByteString</code>.</td></tr></tbody></table>
<h3 id="conversion-functions">Conversion Functions</h3>

























<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>num2bin(num, length)</code></td><td>Convert a <code>bigint</code> to a <code>ByteString</code> of specified length.</td></tr><tr><td><code>bin2num(data)</code></td><td>Convert a <code>ByteString</code> to a <code>bigint</code>.</td></tr><tr><td><code>int2str(value, byteLen)</code></td><td>Convert an integer to a <code>ByteString</code> of specified byte length.</td></tr><tr><td><code>bool(value)</code></td><td>Convert a value to a <code>boolean</code>.</td></tr></tbody></table>
<h3 id="math-functions">Math Functions</h3>





































































<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>abs(x)</code></td><td>Absolute value.</td></tr><tr><td><code>min(a, b)</code></td><td>Minimum of two values.</td></tr><tr><td><code>max(a, b)</code></td><td>Maximum of two values.</td></tr><tr><td><code>within(x, low, high)</code></td><td>Check if <code>x</code> is in the range <code>[low, high)</code>.</td></tr><tr><td><code>safediv(a, b)</code></td><td>Integer division with divide-by-zero protection.</td></tr><tr><td><code>safemod(a, b)</code></td><td>Modulo with divide-by-zero protection.</td></tr><tr><td><code>clamp(x, low, high)</code></td><td>Clamp a value to the range <code>[low, high]</code>.</td></tr><tr><td><code>mulDiv(a, b, c)</code></td><td>Compute <code>(a * b) / c</code> with intermediate precision.</td></tr><tr><td><code>percentOf(amount, basisPoints)</code></td><td>Calculate a percentage in basis points.</td></tr><tr><td><code>sign(x)</code></td><td>Return the sign of a value (-1, 0, or 1).</td></tr><tr><td><code>pow(base, exp)</code></td><td>Exponentiation (exponent must be a compile-time constant).</td></tr><tr><td><code>sqrt(x)</code></td><td>Integer square root.</td></tr><tr><td><code>gcd(a, b)</code></td><td>Greatest common divisor.</td></tr><tr><td><code>divmod(a, b)</code></td><td>Return both quotient and remainder.</td></tr><tr><td><code>log2(x)</code></td><td>Integer base-2 logarithm.</td></tr></tbody></table>
<h3 id="control-functions">Control Functions</h3>













<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>assert(condition)</code></td><td>Abort execution if <code>condition</code> is false. Required in every public method.</td></tr></tbody></table>
<h3 id="state-functions-statefulsmartcontract-only">State Functions (StatefulSmartContract only)</h3>

















<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>this.addOutput(satoshis, ...values)</code></td><td>Add a continuation output with the specified satoshi amount and updated state values.</td></tr><tr><td><code>this.addRawOutput(satoshis, scriptBytes)</code></td><td>Add a raw output with caller-specified script bytes (not a stateful continuation).</td></tr></tbody></table>
<h3 id="preimage-extraction-functions">Preimage Extraction Functions</h3>
<p>These functions extract fields from a <code>SigHashPreimage</code>. They are primarily used in advanced covenant patterns within <code>StatefulSmartContract</code>.</p>





















































<table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>extractVersion(preimage)</code></td><td>Transaction version (4 bytes).</td></tr><tr><td><code>extractHashPrevouts(preimage)</code></td><td>Hash of all input outpoints.</td></tr><tr><td><code>extractHashSequence(preimage)</code></td><td>Hash of all input sequence numbers.</td></tr><tr><td><code>extractOutpoint(preimage)</code></td><td>Outpoint of the current input (txid + vout).</td></tr><tr><td><code>extractInputIndex(preimage)</code></td><td>Index of the current input.</td></tr><tr><td><code>extractScriptCode(preimage)</code></td><td>The script code being executed.</td></tr><tr><td><code>extractAmount(preimage)</code></td><td>Value of the current input in satoshis.</td></tr><tr><td><code>extractSequence(preimage)</code></td><td>Sequence number of the current input.</td></tr><tr><td><code>extractOutputHash(preimage)</code> / <code>extractOutputs(preimage)</code></td><td>Hash of all outputs (or the outputs themselves).</td></tr><tr><td><code>extractLocktime(preimage)</code></td><td>Transaction locktime.</td></tr><tr><td><code>extractSigHashType(preimage)</code></td><td>Sighash type flag.</td></tr></tbody></table>
<h2 id="disallowed-features">Disallowed Features</h2>
<p>Bitcoin Script is intentionally not Turing-complete. To guarantee termination and deterministic execution, Runar disallows several features that are common in general-purpose programming:</p>





















































































<table><thead><tr><th>Feature</th><th>Why It Is Disallowed</th></tr></thead><tbody><tr><td><code>while</code> / <code>do-while</code> loops</td><td>Could cause non-termination. Use <code>for</code> loops with compile-time constant bounds instead.</td></tr><tr><td>Recursion</td><td>Could cause non-termination or unbounded stack growth.</td></tr><tr><td><code>async</code> / <code>await</code></td><td>No asynchronous execution on-chain.</td></tr><tr><td>Closures / arrow functions</td><td>No first-class functions in Bitcoin Script.</td></tr><tr><td><code>try</code> / <code>catch</code></td><td>No exception handling. Use <code>assert()</code> for control flow.</td></tr><tr><td><code>any</code> / <code>unknown</code> types</td><td>All types must be statically known.</td></tr><tr><td>Dynamic arrays</td><td>Array sizes must be compile-time constants. Use <code>FixedArray&lt;T, N&gt;</code>.</td></tr><tr><td><code>number</code> type</td><td>Use <code>bigint</code> exclusively.</td></tr><tr><td>Decorators</td><td>Not supported in TypeScript contracts. Python contracts use <code>@public</code> to mark entry points.</td></tr><tr><td>Arbitrary function calls</td><td>Only built-in functions and private methods are callable.</td></tr><tr><td>Arbitrary imports</td><td>Only <code>runar-lang</code> imports are allowed.</td></tr><tr><td>Multiple classes per file</td><td>Each file must contain exactly one contract class.</td></tr><tr><td>Enums</td><td>Not supported. Use <code>bigint</code> constants instead.</td></tr><tr><td>Interfaces / type aliases</td><td>Not supported. Use concrete types.</td></tr><tr><td>Template literals</td><td>Not supported. Use <code>cat()</code> for string concatenation.</td></tr><tr><td>Optional chaining (<code>?.</code>)</td><td>Not supported. All values must be non-nullable.</td></tr><tr><td>Spread operator (<code>...</code>)</td><td>Not supported.</td></tr><tr><td><code>typeof</code> / <code>instanceof</code></td><td>No runtime type checks. Types are enforced at compile time.</td></tr><tr><td><code>new</code> expressions</td><td>Cannot instantiate objects within a contract.</td></tr></tbody></table>
<h2 id="key-compilation-properties">Key Compilation Properties</h2>
<p>Understanding how the compiler transforms your code helps you write efficient contracts.</p>
<p><strong>Loop unrolling.</strong> All <code>for</code> loops are unrolled at compile time. The loop bounds must be compile-time constants. A loop like <code>for (let i = 0n; i &lt; 10n; i++)</code> generates 10 copies of the loop body in the resulting script.</p>
<p><strong>Private method inlining.</strong> Private methods are inlined at their call sites during compilation. There is no function call mechanism in Bitcoin Script, so every private method call is replaced with the method’s body.</p>
<p><strong>Eager evaluation.</strong> Logical operators <code>&amp;&amp;</code> and <code>||</code> evaluate <strong>both</strong> sides regardless of the first operand’s value. This differs from JavaScript’s short-circuit evaluation. If the right side has side effects or expensive computation, both will execute.</p>
<p><strong>Maximum stack depth.</strong> The BSV runtime enforces a maximum stack depth of 800 elements. Contracts that exceed this limit will fail at execution time. Keep this in mind when using large <code>FixedArray</code> values or deeply nested computations.</p>
<h2 id="next-steps">Next Steps</h2>
<ul>
<li><a href="/docs/writing-contracts/typescript-contracts">TypeScript Contracts</a> — The primary and most mature language frontend</li>
<li><a href="/docs/writing-contracts/language-feature-matrix">Language Feature Matrix</a> — Compare syntax across all eight languages</li>
<li><a href="/docs/examples/gallery">Contract Examples</a> — See complete working contracts</li>
</ul>  </div> <nav aria-label="Pagination" class="mt-16 pt-6 border-t border-border flex items-center justify-between gap-4"> <a href="/docs/bitcoin-bsv-basics/how-smart-contracts-work-on-bsv" class="group flex flex-col items-start gap-1 text-sm hover:text-accent-500 transition-colors"> <span class="text-text-tertiary text-xs font-mono uppercase tracking-wider">&larr; Previous</span> <span class="text-text-secondary group-hover:text-accent-500 transition-colors">How Smart Contracts Work on BSV</span> </a> <a href="/docs/writing-contracts/typescript-contracts" class="group flex flex-col items-end gap-1 text-sm hover:text-accent-500 transition-colors"> <span class="text-text-tertiary text-xs font-mono uppercase tracking-wider">Next &rarr;</span> <span class="text-text-secondary group-hover:text-accent-500 transition-colors">TypeScript Contracts</span> </a> </nav> </article> <!-- Table of Contents --> <astro-island uid="Z25lkmn" prefix="r8" component-url="/_astro/TableOfContents.DUY0neXz.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;headings&quot;:[1,[[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;the-two-contract-models&quot;],&quot;text&quot;:[0,&quot;The Two Contract Models&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;smartcontract-stateless&quot;],&quot;text&quot;:[0,&quot;SmartContract (Stateless)&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;statefulsmartcontract-mutable-state&quot;],&quot;text&quot;:[0,&quot;StatefulSmartContract (Mutable State)&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;import-and-file-structure&quot;],&quot;text&quot;:[0,&quot;Import and File Structure&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;constructor-pattern&quot;],&quot;text&quot;:[0,&quot;Constructor Pattern&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;properties-readonly-vs-mutable&quot;],&quot;text&quot;:[0,&quot;Properties: Readonly vs. Mutable&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;public-vs-private-methods&quot;],&quot;text&quot;:[0,&quot;Public vs. Private Methods&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;the-type-system&quot;],&quot;text&quot;:[0,&quot;The Type System&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;primitive-types&quot;],&quot;text&quot;:[0,&quot;Primitive Types&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;bytestring-types&quot;],&quot;text&quot;:[0,&quot;ByteString Types&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;rabin-types&quot;],&quot;text&quot;:[0,&quot;Rabin Types&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;generic-types&quot;],&quot;text&quot;:[0,&quot;Generic Types&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;affine-types&quot;],&quot;text&quot;:[0,&quot;Affine Types&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;built-in-functions&quot;],&quot;text&quot;:[0,&quot;Built-in Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;cryptographic-functions&quot;],&quot;text&quot;:[0,&quot;Cryptographic Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;post-quantum-cryptography&quot;],&quot;text&quot;:[0,&quot;Post-Quantum Cryptography&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;oracle-functions&quot;],&quot;text&quot;:[0,&quot;Oracle Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;elliptic-curve-functions&quot;],&quot;text&quot;:[0,&quot;Elliptic Curve Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;byte-operations&quot;],&quot;text&quot;:[0,&quot;Byte Operations&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;conversion-functions&quot;],&quot;text&quot;:[0,&quot;Conversion Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;math-functions&quot;],&quot;text&quot;:[0,&quot;Math Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;control-functions&quot;],&quot;text&quot;:[0,&quot;Control Functions&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;state-functions-statefulsmartcontract-only&quot;],&quot;text&quot;:[0,&quot;State Functions (StatefulSmartContract only)&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;preimage-extraction-functions&quot;],&quot;text&quot;:[0,&quot;Preimage Extraction Functions&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;disallowed-features&quot;],&quot;text&quot;:[0,&quot;Disallowed Features&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;key-compilation-properties&quot;],&quot;text&quot;:[0,&quot;Key Compilation Properties&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;next-steps&quot;],&quot;text&quot;:[0,&quot;Next Steps&quot;]}]]]}" ssr client="idle" opts="{&quot;name&quot;:&quot;TableOfContents&quot;,&quot;value&quot;:true}" await-children><nav class="sticky top-20 w-48 hidden xl:block" aria-label="On this page"><h4 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">On this page</h4><ul class="space-y-1"><li><a href="#the-two-contract-models" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">The Two Contract Models</a></li><li><a href="#smartcontract-stateless" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">SmartContract (Stateless)</a></li><li><a href="#statefulsmartcontract-mutable-state" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">StatefulSmartContract (Mutable State)</a></li><li><a href="#import-and-file-structure" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Import and File Structure</a></li><li><a href="#constructor-pattern" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Constructor Pattern</a></li><li><a href="#properties-readonly-vs-mutable" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Properties: Readonly vs. Mutable</a></li><li><a href="#public-vs-private-methods" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Public vs. Private Methods</a></li><li><a href="#the-type-system" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">The Type System</a></li><li><a href="#primitive-types" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Primitive Types</a></li><li><a href="#bytestring-types" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">ByteString Types</a></li><li><a href="#rabin-types" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Rabin Types</a></li><li><a href="#generic-types" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Generic Types</a></li><li><a href="#affine-types" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Affine Types</a></li><li><a href="#built-in-functions" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Built-in Functions</a></li><li><a href="#cryptographic-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Cryptographic Functions</a></li><li><a href="#post-quantum-cryptography" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Post-Quantum Cryptography</a></li><li><a href="#oracle-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Oracle Functions</a></li><li><a href="#elliptic-curve-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Elliptic Curve Functions</a></li><li><a href="#byte-operations" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Byte Operations</a></li><li><a href="#conversion-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Conversion Functions</a></li><li><a href="#math-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Math Functions</a></li><li><a href="#control-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Control Functions</a></li><li><a href="#state-functions-statefulsmartcontract-only" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">State Functions (StatefulSmartContract only)</a></li><li><a href="#preimage-extraction-functions" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Preimage Extraction Functions</a></li><li><a href="#disallowed-features" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Disallowed Features</a></li><li><a href="#key-compilation-properties" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Key Compilation Properties</a></li><li><a href="#next-steps" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Next Steps</a></li></ul></nav><!--astro:end--></astro-island> </div> </div> <footer class="border-t border-border bg-bg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Brand --> <div> <a href="/" class="inline-flex items-center gap-2 font-mono font-bold text-xl tracking-tight text-text hover:text-accent-500 transition-colors mb-3"> <span>R<span class="text-accent-500">ú</span>nar</span> </a> <p class="text-text-tertiary text-sm max-w-xs">
Write Bitcoin smart contracts in languages you already know. Compile to Bitcoin Script. Deploy to BSV.
</p> </div> <!-- Nav columns --> <div> <h3 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Product</h3> <ul class="space-y-2"> <li> <a href="/docs/getting-started/overview" class="text-sm text-text-secondary hover:text-text transition-colors"> Documentation </a> </li><li> <a href="/docs/examples/gallery" class="text-sm text-text-secondary hover:text-text transition-colors"> Examples </a> </li><li> <a href="/docs/api-reference/compiler-api" class="text-sm text-text-secondary hover:text-text transition-colors"> API Reference </a> </li> </ul> </div><div> <h3 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Resources</h3> <ul class="space-y-2"> <li> <a href="/docs/tutorials/hello-world" class="text-sm text-text-secondary hover:text-text transition-colors"> Tutorials </a> </li><li> <a href="/docs/getting-started/overview" class="text-sm text-text-secondary hover:text-text transition-colors"> Getting Started </a> </li><li> <a href="https://runar.run" class="text-sm text-text-secondary hover:text-text transition-colors" target="_blank" rel="noopener noreferrer"> Playground </a> </li><li> <a href="https://github.com/icellan/runar" class="text-sm text-text-secondary hover:text-text transition-colors" target="_blank" rel="noopener noreferrer"> GitHub </a> </li> </ul> </div> </div> <!-- Bottom bar --> <div class="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"> <p class="text-xs text-text-tertiary">
&copy; 2026 Rúnar contributors. Open source under MIT.
</p> <a href="#top" class="text-xs text-text-tertiary hover:text-text transition-colors">
Back to top &uarr;
</a> </div> </div> </footer>  </body></html>