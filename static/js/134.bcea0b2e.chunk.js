"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:(e,i,t)=>{t.r(i),t.d(i,{default:()=>v});var n,s,a,o,l=t(43),d=t(216),c=t(475),r=t(450),p=t(865),x=t(528),u=t(197);const g=u.Ay.div(n||(n=(0,x.A)(["\n  display: flex;\n  padding: 20px 0 20px 0;\n  gap: 24px;\n"]))),h=u.Ay.ul(s||(s=(0,x.A)(["\n  display: inline-flex;\n  gap: 12px;\n  padding: 0 20px 0 0;\n"]))),m=u.Ay.ul(a||(a=(0,x.A)(["\n  display: flex;\n  gap: 12px;\n  padding: 0 0 20px 0;\n"])));u.Ay.button(o||(o=(0,x.A)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: #4f46e5;\n    border: 3px solid #4f46e5;\n  }\n"])));var b=t(239),f=t(579);const v=()=>{var e,i,t;const{movieId:n}=(0,d.g)(),[s,a]=(0,l.useState)(null),[o,x]=(0,l.useState)(!0),u=(0,d.zy)();if((0,l.useEffect)((()=>{(async()=>{try{x(!0);const e=await(0,r.BC)(n);a(e)}catch(e){console.error(e)}finally{x(!1)}})()}),[n]),o)return(0,f.jsx)(p.A,{});if(!s)return null;const{title:v,release_date:j,overview:y,genres:w,poster_path:_,original_title:A}=s,N=null===(e=s.production_companies)||void 0===e?void 0:e.map((e=>{let{id:i,logo_path:t,name:n}=e;return t&&(0,f.jsx)("li",{children:t&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:n,style:{maxHeight:50,maxWidth:200,marginRight:30,marginTop:10}})},i)})),k=Math.round(10*s.vote_average);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.N_,{to:null!==(i=null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==i?i:"/",children:(0,f.jsx)("button",{className:"rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"button",children:"Go back"})}),(0,f.jsxs)(g,{children:[(0,f.jsx)("img",{width:"300px",src:_?"https://image.tmdb.org/t/p/w500".concat(_):"".concat(b),alt:A}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{className:"text-2xl pb-4 font-bold",children:[v," (",j.slice(0,4),")"]}),(0,f.jsxs)("p",{className:"pb-4",children:["User score: ",k,"%"]}),(0,f.jsx)("h2",{className:"text-2xl pb-4 font-bold",children:"Overview"}),(0,f.jsx)("p",{className:"pb-4",children:y}),(0,f.jsx)("h2",{className:"text-2xl pb-4 font-bold",children:"Genres"}),(0,f.jsx)(h,{children:w.map((e=>(0,f.jsx)("li",{className:"pb-4",children:e.name},e.id)))}),null!==N[0]&&N.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:"text-2xl pb-4 font-bold",children:"Production companies"}),(0,f.jsx)("ul",{className:"flex",children:N})]})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{className:"text-2xl pb-4 font-bold pt-4",children:"Additional information"}),(0,f.jsxs)(m,{children:[(0,f.jsx)("li",{className:"rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:(0,f.jsx)(c.N_,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{className:"rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:(0,f.jsx)(c.N_,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(d.sv,{})]})]})}},450:(e,i,t)=>{t.d(i,{BC:()=>l,MB:()=>c,Zk:()=>o,k8:()=>a,v9:()=>d});var n=t(154);n.A.defaults.baseURL="https://api.themoviedb.org/3/";const s="944b66960181a2395838fd7602d4b072",a=async()=>(await n.A.get("trending/movie/day?api_key=".concat(s))).data.results,o=async e=>(await n.A.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e))).data.results,l=async e=>(await n.A.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"))).data,d=async e=>(await n.A.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"))).data.cast,c=async e=>(await n.A.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))).data.results},239:(e,i,t)=>{e.exports=t.p+"static/media/noImage.766050a83a9c288363de.png"}}]);
//# sourceMappingURL=134.bcea0b2e.chunk.js.map