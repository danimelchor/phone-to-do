(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{28:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),s=r(22),c=r.n(s),u=(r(28),r(3)),o=r.n(u),i=r(4),l=r(5),b=r(8),p=r(12),d=r(23),f=r(1);function h(e){var t;return t=void 0!==e.tabs&&void 0!==e.currentTab&&e.tabs.length>e.currentTab?e.tabs[e.currentTab]:{title:"No tabs yet",tasks:[]},Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"fixed top-0 left-0 p-5 flex items-center justify-between bg-white w-full",children:[Object(f.jsx)(b.b,{onClick:function(){return e.setShowMenu(!0)},className:"text-2xl cursor-pointer hover:rotate-180 transition-transform transform duration-300"}),Object(f.jsx)("p",{className:"text-blue-900 font-black text-xl",children:t.title}),Object(f.jsx)("div",{onClick:function(){return e.setHidden(!e.hidden)},className:"text-2xl cursor-pointer hover:text-gray-700 transition-colors duration-200",children:e.hidden?Object(f.jsx)(p.a,{}):Object(f.jsx)(p.b,{})})]}),Object(f.jsxs)("div",{className:"fixed top-0 left-0 flex flex-col bg-blue-50 w-full h-full transform transition-transform"+(e.showMenu?" translate-x-0":" -translate-x-full"),children:[Object(f.jsxs)("div",{className:"flex items-center justify-between w-full border-b-2 border-blue-900 p-4",children:[Object(f.jsx)("p",{className:"text-blue-900 font-black text-xl",children:"My ToDo"}),Object(f.jsx)(d.a,{className:"text-3xl border-2 text-blue-900 border-blue-900 rounded-full cursor-pointer h-12 w-12",onClick:e.createTabPopup})]}),Object(f.jsx)("div",{className:"w-full flex flex-col",children:e.tabs&&e.tabs.map((function(t,r){return Object(f.jsx)(x,{shown:r===e.currentTab,item:t,click:function(){e.changeTab(r),e.setShowMenu(!1)},id:r,editTabPopup:e.editTabPopup,deleteTab:function(){return e.deleteTab(r)}},r)}))})]})]})}function x(e){return Object(f.jsxs)("div",{onClick:e.click,className:"w-full flex items-center justify-between px-4 cursor-pointer transform transition-colors transition-transform hover:scale-101"+(e.shown?" bg-blue-300":" hover:bg-blue-200"),children:[Object(f.jsx)("p",{className:"text-lg "+(e.shown?" text-white":" text-black"),children:e.item.title}),Object(f.jsxs)("div",{className:"flex items-center justify-between",children:[Object(f.jsx)(b.a,{className:"cursor-pointer h-12 w-8 p-1 transform hover:scale-105 transition-transform transition-colors duration-200"+(e.shown?" text-white hover:text-gray-300":" text-gray-700 hover:text-gray-900"),onClick:function(){return e.editTabPopup(e.id)}}),Object(f.jsx)(b.c,{className:"cursor-pointer h-12 w-8 p-1 transform hover:scale-105 transition-transform transition-colors duration-200"+(e.shown?" text-white hover:text-gray-300":" text-gray-700 hover:text-gray-900"),onClick:e.deleteTab})]})]})}var j=r(13);function v(e){var t=Object(n.useState)(!1),r=Object(l.a)(t,2),a=r[0],s=r[1];return Object(f.jsxs)("div",{onClick:function(){return e.completeTask(e.currentTab,e.id,!e.task.completed)},className:"w-full py-4 flex items-center justify-between cursor-pointer transform transition-transform hover:scale-103 bg-white border-t border-gray-200"+(a?" border-b":" "),onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[Object(f.jsx)("p",{className:"text-lg"+(e.task.completed?" line-through text-gray-700":""),children:e.task.name}),Object(f.jsxs)("div",{className:"flex items-center justify-center text-2xl gap-3",children:[Object(f.jsx)(b.c,{className:"text-gray-700 hover:text-black transition-colors duration-200",onClick:function(t){t.stopPropagation(),e.deleteTask(e.currentTab,e.id)}}),Object(f.jsx)("div",{className:"text-blue-900",children:e.task.completed?Object(f.jsx)(j.a,{}):Object(f.jsx)(j.b,{})})]})]})}function m(e){if(void 0===e.tabs||void 0===e.currentTab||e.tabs.length<=e.currentTab)return Object(f.jsx)("p",{children:"No tasks for this tab"});var t=e.tabs[e.currentTab];return void 0===t?Object(f.jsx)("p",{className:"w-full text-center",children:"Begin by creating a tab inside the menu"}):Object(f.jsx)("div",{className:"flex flex-col mx-10 border-b border-gray-200 pt-16",children:t.tasks.map((function(t,r){return e.hidden&&t.completed?Object(f.jsx)("div",{style:{display:"none"}},r):Object(f.jsx)(v,{task:t,id:r,completeTask:e.completeTask,currentTab:e.currentTab,deleteTask:e.deleteTask},r)}))})}function w(e){var t=Object(n.useState)(""),r=Object(l.a)(t,2),a=r[0],s=r[1];return void 0!==e.tabs&&void 0!==e.currentTab&&e.tabs.length>e.currentTab?Object(f.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.saveTask(e.currentTab,a),s("")},className:"w-full fixed bottom-0 left-0 p-4",children:Object(f.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},value:a,placeholder:"Add a new task...",className:"rounded-sm border border-gray-200 w-full px-5 py-3 focus:outline-none focus:border-blue-500"})}):Object(f.jsx)(f.Fragment,{})}var O=r(7),k=r.n(O),g="http://localhost:8000";function y(e){var t=Object(n.useState)(""),r=Object(l.a)(t,2),a=r[0],s=r[1],c=function(t){t.preventDefault();k.a.post("http://localhost:8000/api/v1/auth/login",{password:a},{withCredentials:!0}).then((function(t){e.initialProcedure()})).catch((function(t){e.setState(2)}))};return Object(f.jsx)("div",{className:"w-full h-full bg-black bg-opacity-50 fixed left-0 top-0 flex items-center justify-center",children:Object(f.jsxs)("div",{className:"bg-white p-6 rounded-sm flex items-center justify-center flex-col w-2/3",children:[2===e.state&&Object(f.jsx)("p",{className:"text-red-700 mb-4",children:"Wrong password!"}),Object(f.jsx)("p",{children:"Whoops! This page is password protected. Please type the password."}),Object(f.jsxs)("form",{onSubmit:c,className:"w-full",children:[Object(f.jsx)("input",{type:"password",name:"password",placeholder:"Password...",onChange:function(e){return s(e.target.value)},className:"border border-gray-200 rounded-sm w-full py-3 px-5 my-4 focus:outline-none focus:border-blue-200"}),Object(f.jsx)("button",{type:"submit",onClick:c,className:"bg-blue-200 rounded-sm w-full px-5 py-3 hover:bg-blue-300 transition-colors",children:"Access"})]})]})})}var T=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/whoami",e.prev=1,e.next=4,k.a.get("http://localhost:8000/api/v1/whoami",{withCredentials:!0});case 4:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/",e.prev=1,e.next=4,k.a.get("http://localhost:8000/api/v1/",{withCredentials:!0});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/tab",e.prev=1,e.next=4,k.a.post("http://localhost:8000/api/v1/tab",{title:t},{withCredentials:!0});case 4:return e.sent,e.next=7,N();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/tab",e.prev=1,e.next=4,k.a.put("http://localhost:8000/api/v1/tab",{tabId:t,title:r},{withCredentials:!0});case 4:return e.sent,e.next=7,N();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/tab",e.prev=1,e.next=4,k.a.delete("http://localhost:8000/api/v1/tab",{data:{tabId:t},withCredentials:!0});case 4:return r=e.sent,console.log(r),e.next=8,N();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/task",e.prev=1,e.next=4,k.a.post("http://localhost:8000/api/v1/task",{tabId:t,taskName:r},{withCredentials:!0});case 4:return e.sent,e.next=7,N();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(o.a.mark((function e(t,r,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/task",e.prev=1,e.next=4,k.a.put("http://localhost:8000/api/v1/task",{tabId:t,taskId:r,completed:n},{withCredentials:!0});case 4:return e.sent,e.next=7,N();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/task",e.prev=1,e.next=4,k.a.delete("http://localhost:8000/api/v1/task",{data:{tabId:t,taskId:r},withCredentials:!0});case 4:return e.sent,e.next=7,N();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}();function F(e){var t=function(){var t=Object(i.a)(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),-1===e.editId){t.next=7;break}return t.next=4,S(e.tabList[e.editId]._id,c);case 4:n=t.sent,t.next=11;break;case 7:return t.next=9,C(c);case 9:n=t.sent,e.setCurrentTab(n.length-1);case 11:e.setTabList(n),e.setShowMenu(!1),e.closePopup();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r="";-1!==e.editId&&(r=e.tabList[e.editId].title);var a=Object(n.useState)(r),s=Object(l.a)(a,2),c=s[0],u=s[1];return Object(f.jsx)("div",{className:"w-full h-full fixed left-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50",onClick:function(t){t.stopPropagation(),e.closePopup()},children:Object(f.jsxs)("form",{onSubmit:t,className:"bg-white p-5 rounded-sm flex flex-col justify-center items-center w-2/3",children:[Object(f.jsx)("input",{type:"text",name:"name",placeholder:"Tab name...",onChange:function(e){return u(e.target.value)},value:c,autoFocus:!0,className:"rounded-sm border border-gray-200 w-full px-5 py-3 focus:outline-none focus:border-blue-500 mb-4"}),Object(f.jsx)("div",{onClick:t,className:"rounded-sm w-full px-5 py-3 bg-blue-200 text-center",children:-1!==e.editId?"Save":"Create tab"})]})})}var _=function(e){return localStorage.getItem(e)};var D=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)([]),c=Object(l.a)(s,2),u=c[0],b=c[1],p=Object(n.useState)(0),d=Object(l.a)(p,2),x=d[0],j=d[1],v=Object(n.useState)(!1),O=Object(l.a)(v,2),k=O[0],g=O[1],C=Object(n.useState)(!1),S=Object(l.a)(C,2),D=S[0],A=S[1],B=Object(n.useState)(!1),E=Object(l.a)(B,2),H=E[0],J=E[1],W=Object(n.useState)(-1),q=Object(l.a)(W,2),z=q[0],G=q[1],K=function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:if(e.sent){e.next=6;break}return a(0),e.abrupt("return");case 6:return a(1),e.next=9,N();case 9:t=e.sent,b(t),null!=(r=Number(_("currentTab")))&&r>=t.length&&(r=0),Q(r,t.length),n=_("currentTab"),g("true"===n||!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){K()}),[]);var Q=function(e,t){var r,n;e>=(t=t||u.length)&&(e=0),r="currentTab",n=e,localStorage.setItem(r,n),j(e)},R=function(){var e=Object(i.a)(o.a.mark((function e(t,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u[t]._id,e.next=3,P(n,r);case 3:a=e.sent,b(a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(o.a.mark((function e(t,r,n){var a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u[t]._id,s=u[t].tasks[r]._id,e.next=4,M(a,s,n);case 4:c=e.sent,b(c);case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u[t]._id,e.next=3,I(r);case 3:n=e.sent,b(n),t===x&&Q(0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(o.a.mark((function e(t,r){var n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this task?")){e.next=8;break}return n=u[t]._id,a=u[t].tasks[r]._id,e.next=6,L(n,a);case 6:s=e.sent,b(s);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{tabs:u,currentTab:x,completeTask:U,hidden:k,deleteTask:X}),Object(f.jsx)(w,{saveTask:R,currentTab:x,tabs:u}),Object(f.jsx)(h,{tabs:u,currentTab:x,changeTab:Q,setHidden:g,hidden:k,createTabPopup:function(){return J(!0)},editTabPopup:function(e){G(e),J(!0)},deleteTab:V,showMenu:D,setShowMenu:A}),1!==r&&Object(f.jsx)(y,{state:r,initialProcedure:K,setState:a}),H&&Object(f.jsx)(F,{setTabList:b,closePopup:function(){G(-1),J(!1)},setCurrentTab:j,setShowMenu:A,tabList:u,editId:z})]})})},A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,50)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root")),A()}},[[49,1,2]]]);
//# sourceMappingURL=main.2557e434.chunk.js.map