"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[72],{605:(t,e,a)=>{a.d(e,{A:()=>h});var n,o,c,s=a(216),r=a(528),i=a(197),l=a(475),d=a(239);const p=i.Ay.ul(n||(n=(0,r.A)(["\n  list-style-type: none;\n"]))),g=i.Ay.li(o||(o=(0,r.A)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n\n  &:hover {\n    color: #4f46e5;\n  }\n"]))),u=(0,i.Ay)(l.N_)(c||(c=(0,r.A)(["\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 400px;\n    height: 560px;\n    display: block;\n    border-radius: 4px;\n    border: 1px solid rgba(43, 134, 197);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1;\n    color: #4f46e5;\n  }\n"])),(t=>t.cover?"url('https://image.tmdb.org/t/p/w500/".concat(t.cover,"')"):"url(".concat(d,")")));var m=a(579);const h=t=>{let{films:e}=t;const a=(0,s.zy)();return(0,m.jsx)(p,{children:e.map((t=>(0,m.jsx)(g,{children:(0,m.jsx)(u,{to:"/movies/".concat(t.id),state:{from:a},cover:t.poster_path,children:t.title})},t.id)))})}},72:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var n=a(43),o=a(605),c=a(450),s=a(865),r=a(579);const i=()=>{const[t,e]=(0,n.useState)([]),[a,i]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{try{const t=await(0,c.k8)();e(t)}catch(t){console.error(t)}finally{i(!1)}})()}),[]),(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{className:"pb-10 mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"Trending today"}),(0,r.jsx)(o.A,{films:t}),a&&(0,r.jsx)(s.A,{})]})}},450:(t,e,a)=>{a.d(e,{BC:()=>r,MB:()=>l,Zk:()=>s,k8:()=>c,v9:()=>i});var n=a(154);n.A.defaults.baseURL="https://api.themoviedb.org/3/";const o="944b66960181a2395838fd7602d4b072",c=async()=>(await n.A.get("trending/movie/day?api_key=".concat(o))).data.results,s=async t=>(await n.A.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t))).data.results,r=async t=>(await n.A.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"))).data,i=async t=>(await n.A.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"))).data.cast,l=async t=>(await n.A.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))).data.results},239:(t,e,a)=>{t.exports=a.p+"static/media/noImage.766050a83a9c288363de.png"}}]);
//# sourceMappingURL=72.760abaac.chunk.js.map