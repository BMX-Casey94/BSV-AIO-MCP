<!DOCTYPE html><html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical" href="https://runar.build/docs/api-reference/cli-reference/"><title>CLI Reference — Rúnar Docs</title><meta name="description" content="Command-line tool reference."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url" content="https://runar.build/docs/api-reference/cli-reference/"><meta property="og:title" content="CLI Reference — Rúnar Docs"><meta property="og:description" content="Command-line tool reference."><meta property="og:image" content="https://runar.build/og/default.png"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="CLI Reference — Rúnar Docs"><meta name="twitter:description" content="Command-line tool reference."><meta name="twitter:image" content="https://runar.build/og/default.png"><!-- Prevent FOUC: set theme before first paint --><script>
      (function() {
        var stored = localStorage.getItem('theme');
        var theme = stored || 'dark';
        document.documentElement.className = theme;
      })();
    </script><link rel="stylesheet" href="/_astro/BaseLayout.kcMJrBuL.css"></head> <body class="bg-bg text-text min-h-screen antialiased">  <header class="sticky top-0 z-30 w-full border-b transition-colors bg-bg/95 backdrop-blur-md border-border"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <a href="/" class="inline-flex items-center gap-2 font-mono font-bold text-xl tracking-tight text-text hover:text-accent-500 transition-colors"> <span>R<span class="text-accent-500">ú</span>nar</span> </a> <!-- Desktop nav --> <nav class="hidden lg:flex items-center gap-1"> <a href="/docs/getting-started/overview" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Docs  </a><a href="/docs/examples/gallery" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Examples  </a><a href="/docs/changelog/index" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors"> Changelog  </a><a href="https://runar.run" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors" target="_blank" rel="noopener noreferrer"> Playground <svg class="inline-block ml-1 -mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </a><a href="https://github.com/icellan/runar" class="px-3 py-2 text-sm text-text-secondary hover:text-text rounded-lg transition-colors" target="_blank" rel="noopener noreferrer"> GitHub <svg class="inline-block ml-1 -mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </a> <style>astro-island,astro-slot,astro-static-slot{display:contents}</style><script>(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();</script><script>(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE_INFINITY*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();</script><astro-island uid="Z2v0P66" prefix="r9" component-url="/_astro/SearchDialog.B57nUXo_.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;SearchDialog&quot;,&quot;value&quot;:true}" await-children><button class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-tertiary border border-border rounded-lg hover:border-border-strong hover:text-text-secondary transition-colors" aria-label="Search documentation"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><span class="hidden sm:inline">Search docs...</span><kbd class="hidden sm:inline text-xs font-mono text-text-tertiary bg-surface px-1.5 py-0.5 rounded border border-border">⌘K</kbd></button><!--astro:end--></astro-island> <div class="w-px h-5 bg-border mx-2"></div> <script>(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();</script><astro-island uid="1sy2V0" prefix="r10" component-url="/_astro/ThemeToggle.DqXasmEh.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="load" opts="{&quot;name&quot;:&quot;ThemeToggle&quot;,&quot;value&quot;:true}" await-children><button aria-label="Switch to light mode" class="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button><!--astro:end--></astro-island> </nav> <!-- Mobile --> <div class="flex items-center gap-2 lg:hidden"> <astro-island uid="Z2v0P66" prefix="r11" component-url="/_astro/SearchDialog.B57nUXo_.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;SearchDialog&quot;,&quot;value&quot;:true}" await-children><button class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-tertiary border border-border rounded-lg hover:border-border-strong hover:text-text-secondary transition-colors" aria-label="Search documentation"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><span class="hidden sm:inline">Search docs...</span><kbd class="hidden sm:inline text-xs font-mono text-text-tertiary bg-surface px-1.5 py-0.5 rounded border border-border">⌘K</kbd></button><!--astro:end--></astro-island> <astro-island uid="1sy2V0" prefix="r12" component-url="/_astro/ThemeToggle.DqXasmEh.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{}" ssr client="load" opts="{&quot;name&quot;:&quot;ThemeToggle&quot;,&quot;value&quot;:true}" await-children><button aria-label="Switch to light mode" class="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button><!--astro:end--></astro-island> <astro-island uid="1JvchJ" prefix="r13" component-url="/_astro/MobileMenu.BRNZhq9l.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;items&quot;:[1,[[0,{&quot;label&quot;:[0,&quot;Docs&quot;],&quot;href&quot;:[0,&quot;/docs/getting-started/overview&quot;]}],[0,{&quot;label&quot;:[0,&quot;Examples&quot;],&quot;href&quot;:[0,&quot;/docs/examples/gallery&quot;]}],[0,{&quot;label&quot;:[0,&quot;Changelog&quot;],&quot;href&quot;:[0,&quot;/docs/changelog/index&quot;]}],[0,{&quot;label&quot;:[0,&quot;Playground&quot;],&quot;href&quot;:[0,&quot;https://runar.run&quot;]}],[0,{&quot;label&quot;:[0,&quot;GitHub&quot;],&quot;href&quot;:[0,&quot;https://github.com/icellan/runar&quot;]}]]]}" ssr client="load" opts="{&quot;name&quot;:&quot;MobileMenu&quot;,&quot;value&quot;:true}" await-children><button aria-label="Open menu" aria-expanded="false" class="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button><!--astro:end--></astro-island> </div> </div> </div> </header> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Mobile sidebar toggle --> <div class="lg:hidden py-3 border-b border-border"> <astro-island uid="Z2pdR78" prefix="r7" component-url="/_astro/MobileSidebar.BtZy13Bi.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;currentPath&quot;:[0,&quot;/docs/api-reference/cli-reference&quot;]}" ssr client="load" opts="{&quot;name&quot;:&quot;MobileSidebar&quot;,&quot;value&quot;:true}" await-children><button class="lg:hidden flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary border border-border rounded-lg hover:border-border-strong transition-colors" aria-label="Open navigation"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>Menu</button><!--astro:end--></astro-island> </div> <div class="flex gap-8 py-8"> <!-- Desktop sidebar --> <aside class="w-64 shrink-0 hidden lg:block"> <nav class="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 pb-8 scrollbar-thin" aria-label="Documentation sidebar"> <div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Getting Started</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/getting-started/overview" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Overview </a><a href="/docs/getting-started/installation" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Installation </a><a href="/docs/getting-started/quick-start" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Quick Start </a><a href="/docs/getting-started/project-structure" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Project Structure </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Bitcoin &amp; BSV Basics</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/bitcoin-bsv-basics/utxo-model" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> The UTXO Model </a><a href="/docs/bitcoin-bsv-basics/bitcoin-script" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Bitcoin Script </a><a href="/docs/bitcoin-bsv-basics/transactions-and-outputs" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Transactions &amp; Outputs </a><a href="/docs/bitcoin-bsv-basics/how-smart-contracts-work-on-bsv" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> How Smart Contracts Work on BSV </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Writing Contracts</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/writing-contracts/contract-basics" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Contract Basics </a><a href="/docs/writing-contracts/typescript-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> TypeScript Contracts </a><a href="/docs/writing-contracts/go-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Go Contracts </a><a href="/docs/writing-contracts/rust-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Rust Contracts </a><a href="/docs/writing-contracts/python-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Python Contracts </a><a href="/docs/writing-contracts/zig-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Zig Contracts </a><a href="/docs/writing-contracts/ruby-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Ruby Contracts </a><a href="/docs/writing-contracts/solidity-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Solidity Contracts </a><a href="/docs/writing-contracts/move-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Move Contracts </a><a href="/docs/writing-contracts/language-feature-matrix" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Language Feature Matrix </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>The Compiler</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/compiler/how-it-works" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> How the Compiler Works </a><a href="/docs/compiler/compilation-pipeline" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compilation Pipeline </a><a href="/docs/compiler/configuration" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compiler Configuration </a><a href="/docs/compiler/output-artifacts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Output Artifacts </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>The SDK</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/sdk/overview" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> SDK Overview </a><a href="/docs/sdk/deploying" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Deploying a Contract </a><a href="/docs/sdk/calling" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Calling a Contract </a><a href="/docs/sdk/multi-signer" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Multi-Signer Transactions </a><a href="/docs/sdk/inductive-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Stateful Contracts </a><a href="/docs/sdk/token-contracts" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Token Contracts </a><a href="/docs/sdk/wallet-integration" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Wallet Integration </a><a href="/docs/sdk/fee-and-change-handling" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fee &amp; Change Handling </a><a href="/docs/sdk/providers-reference" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Providers Reference </a><a href="/docs/sdk/code-generation" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Code Generation </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Testing &amp; Debugging</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/testing-and-debugging/writing-tests" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Writing Tests </a><a href="/docs/testing-and-debugging/test-runner" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> The Test Runner </a><a href="/docs/testing-and-debugging/advanced-testing" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Advanced Testing </a><a href="/docs/testing-and-debugging/mock-and-fixtures" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Test Fixtures &amp; Mocks </a><a href="/docs/testing-and-debugging/debugging-script" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Debugging Compiled Script </a><a href="/docs/testing-and-debugging/fuzzing" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fuzzing &amp; Property Testing </a><a href="/docs/testing-and-debugging/common-errors" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Common Errors </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Advanced</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/advanced/covenant-architecture" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Covenant Architecture </a><a href="/docs/advanced/recursive-contracts-and-zk-proofs" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Recursive Contracts &amp; ZK Proofs </a><a href="/docs/advanced/dag-topology-and-token-merges" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> DAG Topology &amp; Token Merges </a><a href="/docs/advanced/security-considerations" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Security Considerations </a> </div> </details> </div><div class="mb-4"> <details open class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>API Reference</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/api-reference/compiler-api" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Compiler API </a><a href="/docs/api-reference/sdk-api" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> SDK API </a><a href="/docs/api-reference/contract-decorators-and-types" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Contract Decorators &amp; Types </a><a href="/docs/api-reference/cli-reference" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-accent-500 text-accent-500 font-medium" aria-current="page"> CLI Reference </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Tutorials</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/tutorials/hello-world" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Hello World Contract </a><a href="/docs/tutorials/fungible-token" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Fungible Token </a><a href="/docs/tutorials/nft" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> NFT Contract </a><a href="/docs/tutorials/multi-party-escrow" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Multi-Party Escrow </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Examples</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/examples/gallery" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Example Gallery </a><a href="/docs/examples/counter" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Counter </a><a href="/docs/examples/tic-tac-toe" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Tic-Tac-Toe </a><a href="/docs/examples/auction" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Auction </a><a href="/docs/examples/blackjack-betting" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Blackjack Betting </a><a href="/docs/examples/price-bet" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Price Bet </a> </div> </details> </div><div class="mb-4"> <details class="group"> <summary class="flex items-center justify-between cursor-pointer font-mono text-xs uppercase tracking-wider text-text-tertiary hover:text-text-secondary py-1 select-none list-none [&::-webkit-details-marker]:hidden"> <span>Changelog</span> <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </summary> <div class="mt-1 space-y-0.5"> <a href="/docs/changelog/index" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> Release History </a><a href="/docs/changelog/v0-4" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.4.x </a><a href="/docs/changelog/v0-3" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.3.x </a><a href="/docs/changelog/v0-2" class="block text-sm py-1 pl-3 border-l-2 transition-colors border-transparent text-text-secondary hover:text-text hover:border-border-strong"> v0.2.0 </a> </div> </details> </div> </nav> </aside> <!-- Main content --> <article class="min-w-0 flex-1" data-pagefind-body> <nav aria-label="Breadcrumb" class="mb-4"> <ol class="flex items-center gap-1.5 text-sm text-text-tertiary"> <li> <a href="/docs/getting-started/overview" class="hover:text-text-secondary transition-colors">Docs</a> </li> <li class="select-none">/</li> <li> <span class="text-text-secondary">API Reference</span> </li> <li class="select-none">/</li> <li> <span class="text-text">CLI Reference</span> </li> </ol> </nav> <div class="prose"> <h1>CLI Reference</h1>  <p>The Runar CLI is the primary interface for creating projects, compiling contracts, running tests, and deploying to the BSV network. This page documents every available command and flag. The CLI is distributed as the <code>runar-cli</code> npm package and invoked with the <code>runar</code> command.</p>
<h2 id="global-options">Global Options</h2>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [command] [options]</span></span></code></pre>

















<table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>--version</code>, <code>-v</code></td><td>Print the Runar CLI version</td></tr><tr><td><code>--help</code>, <code>-h</code></td><td>Show help for the command</td></tr></tbody></table>
<h2 id="runar-init">runar init</h2>
<p>Scaffold a new Runar project.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> init</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [name]</span></span></code></pre>
<h3 id="arguments">Arguments</h3>













<table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>Name of the project directory to create (optional, default: <code>my-runar-project</code>)</td></tr></tbody></table>
<h3 id="example">Example</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> init</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> my-project</span></span></code></pre>
<h3 id="generated-structure">Generated Structure</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="plaintext"><code><span class="line"><span>my-project/</span></span>
<span class="line"><span>  src/</span></span>
<span class="line"><span>    contracts/           # Contract source files</span></span>
<span class="line"><span>      P2PKH.runar.ts</span></span>
<span class="line"><span>  tests/               # Test files</span></span>
<span class="line"><span>    P2PKH.test.ts</span></span>
<span class="line"><span>  artifacts/           # Compiled output (gitignored)</span></span>
<span class="line"><span>  package.json</span></span>
<span class="line"><span>  tsconfig.json</span></span>
<span class="line"><span>  .gitignore</span></span></code></pre>
<h2 id="runar-compile">runar compile</h2>
<p>Compile one or more Runar contracts to Bitcoin Script artifacts.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> compile</span><span style="color:#D73A49;--shiki-dark:#F97583"> &lt;</span><span style="color:#032F62;--shiki-dark:#9ECBFF">source..</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#D73A49;--shiki-dark:#F97583">&gt;</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [options]</span></span></code></pre>
<h3 id="arguments-1">Arguments</h3>













<table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>source</code></td><td>One or more contract source files or a glob pattern</td></tr></tbody></table>
<h3 id="options">Options</h3>






























<table><thead><tr><th>Flag</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--output &lt;dir&gt;</code></td><td><code>./artifacts</code></td><td>Output directory for compiled artifacts</td></tr><tr><td><code>--ir</code></td><td><code>false</code></td><td>Include ANF intermediate representation in the artifact</td></tr><tr><td><code>--asm</code></td><td><code>false</code></td><td>Include human-readable ASM in the artifact</td></tr><tr><td><code>--disable-constant-folding</code></td><td><code>false</code></td><td>Disable the constant folding optimization pass</td></tr></tbody></table>
<h3 id="examples">Examples</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Compile a single contract</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> compile</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> src/contracts/P2PKH.runar.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Compile all contracts in a directory</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> compile</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> src/contracts/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">*</span><span style="color:#032F62;--shiki-dark:#9ECBFF">.runar.ts</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --output</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./artifacts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Compile with IR and ASM output</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> compile</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> src/contracts/PriceBet.runar.ts</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --asm</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --ir</span></span></code></pre>
<h3 id="output">Output</h3>
<p>For each source file, the compiler produces a JSON artifact:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="plaintext"><code><span class="line"><span>artifacts/</span></span>
<span class="line"><span>  P2PKH.json</span></span>
<span class="line"><span>  PriceBet.json</span></span></code></pre>
<p>The artifact format is documented in <a href="/docs/compiler/output-artifacts">Output Artifacts</a>.</p>
<h3 id="exit-codes">Exit Codes</h3>





















<table><thead><tr><th>Code</th><th>Meaning</th></tr></thead><tbody><tr><td><code>0</code></td><td>Compilation succeeded</td></tr><tr><td><code>1</code></td><td>Compilation failed (errors in source)</td></tr><tr><td><code>2</code></td><td>Configuration or file system error</td></tr></tbody></table>
<h2 id="runar-test">runar test</h2>
<p>Run the test suite. Delegates to vitest under the hood.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> test</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [pattern]</span></span></code></pre>
<h3 id="arguments-2">Arguments</h3>













<table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>pattern</code></td><td>Optional pattern to filter which tests to run</td></tr></tbody></table>
<h3 id="examples-1">Examples</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Run all tests</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Run tests matching a pattern</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> test</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> PriceBet</span></span></code></pre>
<p>The test runner uses vitest. Additional vitest flags can be passed through your <code>vitest.config.ts</code> or <code>package.json</code> scripts. See <a href="/docs/testing-and-debugging/test-runner">The Test Runner</a> for details on the testing framework.</p>
<h2 id="runar-debug">runar debug</h2>
<p>Launch an interactive step-through script debugger for a compiled contract artifact.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> debug</span><span style="color:#D73A49;--shiki-dark:#F97583"> &lt;</span><span style="color:#032F62;--shiki-dark:#9ECBFF">artifac</span><span style="color:#24292E;--shiki-dark:#E1E4E8">t</span><span style="color:#D73A49;--shiki-dark:#F97583">&gt;</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [options]</span></span></code></pre>
<h3 id="arguments-3">Arguments</h3>













<table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>artifact</code></td><td>Path to a compiled JSON artifact (must include <code>sourceMap</code>)</td></tr></tbody></table>
<h3 id="options-1">Options</h3>






























<table><thead><tr><th>Flag</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>-m, --method &lt;name&gt;</code></td><td></td><td>Public method to invoke</td></tr><tr><td><code>-a, --args &lt;json&gt;</code></td><td></td><td>Method arguments as a JSON object</td></tr><tr><td><code>-u, --unlock &lt;hex&gt;</code></td><td></td><td>Raw unlocking script hex (alternative to <code>--method</code>/<code>--args</code>)</td></tr><tr><td><code>-b, --break &lt;loc&gt;</code></td><td></td><td>Initial breakpoint: opcode index or <code>file:line</code></td></tr></tbody></table>
<h3 id="example-1">Example</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> debug</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./artifacts/PriceBet.json</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --method</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> settle</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --args</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;{&quot;price&quot;: 60000}&#39;</span></span></code></pre>
<p>See <a href="/docs/testing-and-debugging/debugging-script">Debugging Compiled Script</a> for full usage details.</p>
<h2 id="runar-deploy">runar deploy</h2>
<p>Deploy a compiled contract to the BSV network.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> deploy</span><span style="color:#D73A49;--shiki-dark:#F97583"> &lt;</span><span style="color:#032F62;--shiki-dark:#9ECBFF">artifac</span><span style="color:#24292E;--shiki-dark:#E1E4E8">t</span><span style="color:#D73A49;--shiki-dark:#F97583">&gt;</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [options]</span></span></code></pre>
<h3 id="arguments-4">Arguments</h3>













<table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>artifact</code></td><td>Path to the compiled JSON artifact</td></tr></tbody></table>
<h3 id="options-2">Options</h3>

























<table><thead><tr><th>Flag</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--network &lt;net&gt;</code></td><td>required</td><td>Target network: <code>mainnet</code> or <code>testnet</code></td></tr><tr><td><code>--key &lt;wif&gt;</code></td><td>required</td><td>WIF-encoded private key for funding</td></tr><tr><td><code>--satoshis &lt;n&gt;</code></td><td><code>10000</code></td><td>Satoshis to lock in the contract output</td></tr></tbody></table>
<h3 id="examples-2">Examples</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Deploy to testnet</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> deploy</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./artifacts/P2PKH.json</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  --network</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> testnet</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  --key</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> cN1r3...</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  --satoshis</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 10000</span></span></code></pre>
<h3 id="output-1">Output</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="plaintext"><code><span class="line"><span>Contract deployed successfully.</span></span>
<span class="line"><span>  Network:  testnet</span></span>
<span class="line"><span>  TxID:     a1b2c3d4e5f6...</span></span>
<span class="line"><span>  Output:   0</span></span>
<span class="line"><span>  Satoshis: 10000</span></span>
<span class="line"><span>  Script:   76a914...88ac</span></span></code></pre>
<h3 id="security-notes">Security Notes</h3>
<ul>
<li>Avoid passing mainnet private keys as CLI arguments in shared environments (the key appears in shell history).</li>
</ul>
<h2 id="runar-verify">runar verify</h2>
<p>Verify that an on-chain contract matches a compiled artifact.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> verify</span><span style="color:#D73A49;--shiki-dark:#F97583"> &lt;</span><span style="color:#032F62;--shiki-dark:#9ECBFF">txi</span><span style="color:#24292E;--shiki-dark:#E1E4E8">d</span><span style="color:#D73A49;--shiki-dark:#F97583">&gt;</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [options]</span></span></code></pre>
<h3 id="arguments-5">Arguments</h3>













<table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>txid</code></td><td>Transaction ID of the deployed contract</td></tr></tbody></table>
<h3 id="options-3">Options</h3>




















<table><thead><tr><th>Flag</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--artifact &lt;path&gt;</code></td><td>required</td><td>Path to the compiled artifact to compare against</td></tr><tr><td><code>--network &lt;net&gt;</code></td><td>required</td><td>Network to query: <code>mainnet</code> or <code>testnet</code></td></tr></tbody></table>
<h3 id="examples-3">Examples</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Verify a deployment</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> verify</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> a1b2c3d4e5f6...</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  --artifact</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./artifacts/P2PKH.json</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  --network</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> testnet</span></span></code></pre>
<h3 id="output-2">Output</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="plaintext"><code><span class="line"><span>Verification passed.</span></span>
<span class="line"><span>  Contract:     P2PKH</span></span>
<span class="line"><span>  TxID:         a1b2c3d4e5f6...</span></span>
<span class="line"><span>  Output:       0</span></span>
<span class="line"><span>  Script match: yes</span></span>
<span class="line"><span>  Confirmations: 3</span></span></code></pre>
<h2 id="runar-codegen">runar codegen</h2>
<p>Generate typed bindings from a compiled artifact.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> codegen</span><span style="color:#D73A49;--shiki-dark:#F97583"> &lt;</span><span style="color:#032F62;--shiki-dark:#9ECBFF">artifact..</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#D73A49;--shiki-dark:#F97583">&gt;</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [options]</span></span></code></pre>
<h3 id="arguments-6">Arguments</h3>













<table><thead><tr><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>artifact</code></td><td>One or more compiled JSON artifacts</td></tr></tbody></table>
<h3 id="options-4">Options</h3>




















<table><thead><tr><th>Flag</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--output &lt;dir&gt;</code>, <code>-o</code></td><td><code>./types</code></td><td>Output directory for generated files</td></tr><tr><td><code>-l, --lang &lt;lang&gt;</code></td><td><code>ts</code></td><td>Target language: <code>ts</code>, <code>go</code>, <code>rust</code>, <code>python</code>, <code>ruby</code></td></tr></tbody></table>
<h3 id="examples-4">Examples</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Generate TypeScript types</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> codegen</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./artifacts/P2PKH.json</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --output</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./types</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Generate types for all artifacts</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> codegen</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./artifacts/</span><span style="color:#005CC5;--shiki-dark:#79B8FF">*</span><span style="color:#032F62;--shiki-dark:#9ECBFF">.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Generate Go bindings</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">runar</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> codegen</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./artifacts/Token.json</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --lang</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> go</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> --output</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ./bindings</span></span></code></pre>
<h3 id="generated-output">Generated Output</h3>
<p>For a P2PKH contract, <code>runar codegen</code> produces:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8;overflow-x:auto" tabindex="0" data-language="typescript"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// types/P2PKH.ts</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { RunarContract, Sig, PubKey, Ripemd160 } </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#39;runar-sdk&#39;</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">export</span><span style="color:#D73A49;--shiki-dark:#F97583"> interface</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> P2PKHConstructorArgs</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">  pubKeyHash</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Ripemd160</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">export</span><span style="color:#D73A49;--shiki-dark:#F97583"> interface</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> P2PKHMethods</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">  unlock</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">args</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> { </span><span style="color:#E36209;--shiki-dark:#FFAB70">sig</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Sig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">; </span><span style="color:#E36209;--shiki-dark:#FFAB70">pubKey</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> PubKey</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> })</span><span style="color:#D73A49;--shiki-dark:#F97583">:</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Promise</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&lt;</span><span style="color:#6F42C1;--shiki-dark:#B392F0">CallResult</span><span style="color:#24292E;--shiki-dark:#E1E4E8">&gt;;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">export</span><span style="color:#D73A49;--shiki-dark:#F97583"> type</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> P2PKHContract</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> RunarContract</span><span style="color:#D73A49;--shiki-dark:#F97583"> &amp;</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> P2PKHMethods</span><span style="color:#24292E;--shiki-dark:#E1E4E8">;</span></span></code></pre>
<p>This gives you full IDE autocompletion and type checking when interacting with contracts through the SDK.</p>  </div> <nav aria-label="Pagination" class="mt-16 pt-6 border-t border-border flex items-center justify-between gap-4"> <a href="/docs/api-reference/contract-decorators-and-types" class="group flex flex-col items-start gap-1 text-sm hover:text-accent-500 transition-colors"> <span class="text-text-tertiary text-xs font-mono uppercase tracking-wider">&larr; Previous</span> <span class="text-text-secondary group-hover:text-accent-500 transition-colors">Contract Decorators &amp; Types</span> </a> <a href="/docs/tutorials/hello-world" class="group flex flex-col items-end gap-1 text-sm hover:text-accent-500 transition-colors"> <span class="text-text-tertiary text-xs font-mono uppercase tracking-wider">Next &rarr;</span> <span class="text-text-secondary group-hover:text-accent-500 transition-colors">Hello World Contract</span> </a> </nav> </article> <!-- Table of Contents --> <astro-island uid="1gpPJB" prefix="r8" component-url="/_astro/TableOfContents.DUY0neXz.js" component-export="default" renderer-url="/_astro/client.DIQWfPlE.js" props="{&quot;headings&quot;:[1,[[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;global-options&quot;],&quot;text&quot;:[0,&quot;Global Options&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;runar-init&quot;],&quot;text&quot;:[0,&quot;runar init&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;arguments&quot;],&quot;text&quot;:[0,&quot;Arguments&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;example&quot;],&quot;text&quot;:[0,&quot;Example&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;generated-structure&quot;],&quot;text&quot;:[0,&quot;Generated Structure&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;runar-compile&quot;],&quot;text&quot;:[0,&quot;runar compile&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;arguments-1&quot;],&quot;text&quot;:[0,&quot;Arguments&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;options&quot;],&quot;text&quot;:[0,&quot;Options&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;examples&quot;],&quot;text&quot;:[0,&quot;Examples&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;output&quot;],&quot;text&quot;:[0,&quot;Output&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;exit-codes&quot;],&quot;text&quot;:[0,&quot;Exit Codes&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;runar-test&quot;],&quot;text&quot;:[0,&quot;runar test&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;arguments-2&quot;],&quot;text&quot;:[0,&quot;Arguments&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;examples-1&quot;],&quot;text&quot;:[0,&quot;Examples&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;runar-debug&quot;],&quot;text&quot;:[0,&quot;runar debug&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;arguments-3&quot;],&quot;text&quot;:[0,&quot;Arguments&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;options-1&quot;],&quot;text&quot;:[0,&quot;Options&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;example-1&quot;],&quot;text&quot;:[0,&quot;Example&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;runar-deploy&quot;],&quot;text&quot;:[0,&quot;runar deploy&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;arguments-4&quot;],&quot;text&quot;:[0,&quot;Arguments&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;options-2&quot;],&quot;text&quot;:[0,&quot;Options&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;examples-2&quot;],&quot;text&quot;:[0,&quot;Examples&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;output-1&quot;],&quot;text&quot;:[0,&quot;Output&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;security-notes&quot;],&quot;text&quot;:[0,&quot;Security Notes&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;runar-verify&quot;],&quot;text&quot;:[0,&quot;runar verify&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;arguments-5&quot;],&quot;text&quot;:[0,&quot;Arguments&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;options-3&quot;],&quot;text&quot;:[0,&quot;Options&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;examples-3&quot;],&quot;text&quot;:[0,&quot;Examples&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;output-2&quot;],&quot;text&quot;:[0,&quot;Output&quot;]}],[0,{&quot;depth&quot;:[0,2],&quot;slug&quot;:[0,&quot;runar-codegen&quot;],&quot;text&quot;:[0,&quot;runar codegen&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;arguments-6&quot;],&quot;text&quot;:[0,&quot;Arguments&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;options-4&quot;],&quot;text&quot;:[0,&quot;Options&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;examples-4&quot;],&quot;text&quot;:[0,&quot;Examples&quot;]}],[0,{&quot;depth&quot;:[0,3],&quot;slug&quot;:[0,&quot;generated-output&quot;],&quot;text&quot;:[0,&quot;Generated Output&quot;]}]]]}" ssr client="idle" opts="{&quot;name&quot;:&quot;TableOfContents&quot;,&quot;value&quot;:true}" await-children><nav class="sticky top-20 w-48 hidden xl:block" aria-label="On this page"><h4 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">On this page</h4><ul class="space-y-1"><li><a href="#global-options" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">Global Options</a></li><li><a href="#runar-init" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">runar init</a></li><li><a href="#arguments" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Arguments</a></li><li><a href="#example" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Example</a></li><li><a href="#generated-structure" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Generated Structure</a></li><li><a href="#runar-compile" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">runar compile</a></li><li><a href="#arguments-1" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Arguments</a></li><li><a href="#options" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Options</a></li><li><a href="#examples" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Examples</a></li><li><a href="#output" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Output</a></li><li><a href="#exit-codes" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Exit Codes</a></li><li><a href="#runar-test" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">runar test</a></li><li><a href="#arguments-2" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Arguments</a></li><li><a href="#examples-1" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Examples</a></li><li><a href="#runar-debug" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">runar debug</a></li><li><a href="#arguments-3" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Arguments</a></li><li><a href="#options-1" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Options</a></li><li><a href="#example-1" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Example</a></li><li><a href="#runar-deploy" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">runar deploy</a></li><li><a href="#arguments-4" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Arguments</a></li><li><a href="#options-2" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Options</a></li><li><a href="#examples-2" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Examples</a></li><li><a href="#output-1" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Output</a></li><li><a href="#security-notes" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Security Notes</a></li><li><a href="#runar-verify" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">runar verify</a></li><li><a href="#arguments-5" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Arguments</a></li><li><a href="#options-3" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Options</a></li><li><a href="#examples-3" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Examples</a></li><li><a href="#output-2" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Output</a></li><li><a href="#runar-codegen" class="block text-sm py-0.5 transition-colors  text-text-tertiary hover:text-text-secondary">runar codegen</a></li><li><a href="#arguments-6" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Arguments</a></li><li><a href="#options-4" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Options</a></li><li><a href="#examples-4" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Examples</a></li><li><a href="#generated-output" class="block text-sm py-0.5 transition-colors pl-3 text-text-tertiary hover:text-text-secondary">Generated Output</a></li></ul></nav><!--astro:end--></astro-island> </div> </div> <footer class="border-t border-border bg-bg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Brand --> <div> <a href="/" class="inline-flex items-center gap-2 font-mono font-bold text-xl tracking-tight text-text hover:text-accent-500 transition-colors mb-3"> <span>R<span class="text-accent-500">ú</span>nar</span> </a> <p class="text-text-tertiary text-sm max-w-xs">
Write Bitcoin smart contracts in languages you already know. Compile to Bitcoin Script. Deploy to BSV.
</p> </div> <!-- Nav columns --> <div> <h3 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Product</h3> <ul class="space-y-2"> <li> <a href="/docs/getting-started/overview" class="text-sm text-text-secondary hover:text-text transition-colors"> Documentation </a> </li><li> <a href="/docs/examples/gallery" class="text-sm text-text-secondary hover:text-text transition-colors"> Examples </a> </li><li> <a href="/docs/api-reference/compiler-api" class="text-sm text-text-secondary hover:text-text transition-colors"> API Reference </a> </li> </ul> </div><div> <h3 class="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Resources</h3> <ul class="space-y-2"> <li> <a href="/docs/tutorials/hello-world" class="text-sm text-text-secondary hover:text-text transition-colors"> Tutorials </a> </li><li> <a href="/docs/getting-started/overview" class="text-sm text-text-secondary hover:text-text transition-colors"> Getting Started </a> </li><li> <a href="https://runar.run" class="text-sm text-text-secondary hover:text-text transition-colors" target="_blank" rel="noopener noreferrer"> Playground </a> </li><li> <a href="https://github.com/icellan/runar" class="text-sm text-text-secondary hover:text-text transition-colors" target="_blank" rel="noopener noreferrer"> GitHub </a> </li> </ul> </div> </div> <!-- Bottom bar --> <div class="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"> <p class="text-xs text-text-tertiary">
&copy; 2026 Rúnar contributors. Open source under MIT.
</p> <a href="#top" class="text-xs text-text-tertiary hover:text-text transition-colors">
Back to top &uarr;
</a> </div> </div> </footer>  </body></html>