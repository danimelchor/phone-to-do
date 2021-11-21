(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{28:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(22),s=r.n(c),o=(r(28),r(3)),u=r.n(o),i=r(4),l=r(5),b=r(8),p=r(12),d=r(23),f=r(1);function h(e){var t;return t=void 0!==e.tabs&&void 0!==e.currentTab&&e.tabs.length>e.currentTab?e.tabs[e.currentTab]:{title:"No tabs yet",tasks:[]},Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"fixed top-0 left-0 p-5 flex items-center justify-between bg-white w-full",children:[Object(f.jsx)(b.b,{onClick:function(){return e.setShowMenu(!0)},className:"text-2xl cursor-pointer hover:rotate-180 transition-transform transform duration-300"}),Object(f.jsx)("p",{className:"text-blue-900 font-black text-xl",children:t.title}),Object(f.jsx)("div",{onClick:function(){return e.setHidden(!e.hidden)},className:"text-2xl cursor-pointer hover:text-gray-700 transition-colors duration-200",children:e.hidden?Object(f.jsx)(p.a,{}):Object(f.jsx)(p.b,{})})]}),Object(f.jsxs)("div",{className:"fixed top-0 left-0 flex flex-col bg-blue-50 w-full h-full transform transition-transform"+(e.showMenu?" translate-x-0":" -translate-x-full"),children:[Object(f.jsxs)("div",{className:"flex items-center justify-between w-full border-b-2 border-blue-900 p-4",children:[Object(f.jsx)("p",{className:"text-blue-900 font-black text-xl",children:"My ToDo"}),Object(f.jsx)(d.a,{className:"text-3xl border-2 text-blue-900 border-blue-900 rounded-full cursor-pointer h-12 w-12",onClick:e.createTabPopup})]}),Object(f.jsx)("div",{className:"w-full flex flex-col",children:e.tabs&&e.tabs.map((function(t,r){return Object(f.jsx)(x,{shown:r===e.currentTab,item:t,click:function(){e.changeTab(r),e.setShowMenu(!1)},id:r,editTabPopup:e.editTabPopup,deleteTab:function(){return e.deleteTab(r)}},r)}))})]})]})}function x(e){return Object(f.jsxs)("div",{onClick:e.click,className:"w-full flex items-center justify-between px-4 cursor-pointer transform transition-colors transition-transform hover:scale-101"+(e.shown?" bg-blue-300":" hover:bg-blue-200"),children:[Object(f.jsx)("p",{className:"text-lg "+(e.shown?" text-white":" text-black"),children:e.item.title}),Object(f.jsxs)("div",{className:"flex items-center justify-between",children:[Object(f.jsx)(b.a,{className:"cursor-pointer h-12 w-8 p-1 transform hover:scale-105 transition-transform transition-colors duration-200"+(e.shown?" text-white hover:text-gray-300":" text-gray-700 hover:text-gray-900"),onClick:function(){return e.editTabPopup(e.id)}}),Object(f.jsx)(b.c,{className:"cursor-pointer h-12 w-8 p-1 transform hover:scale-105 transition-transform transition-colors duration-200"+(e.shown?" text-white hover:text-gray-300":" text-gray-700 hover:text-gray-900"),onClick:e.deleteTab})]})]})}var j=r(13);function m(e){var t=Object(n.useState)(!1),r=Object(l.a)(t,2),a=r[0],c=r[1];return Object(f.jsxs)("div",{onClick:function(){return e.completeTask(e.currentTab,e.id,!e.task.completed)},className:"w-full py-4 flex items-center justify-between cursor-pointer transform transition-transform hover:scale-103 bg-white border-t border-gray-200"+(a?" border-b":" "),onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[Object(f.jsx)("p",{className:"text-lg"+(e.task.completed?" line-through text-gray-700":""),children:e.task.name}),Object(f.jsxs)("div",{className:"flex items-center justify-center text-2xl gap-3",children:[Object(f.jsx)(b.c,{className:"text-gray-700 hover:text-black transition-colors duration-200",onClick:function(t){t.stopPropagation(),e.deleteTask(e.currentTab,e.id)}}),Object(f.jsx)("div",{className:"text-blue-900",children:e.task.completed?Object(f.jsx)(j.a,{}):Object(f.jsx)(j.b,{})})]})]})}function v(e){if(void 0===e.tabs||void 0===e.currentTab||e.tabs.length<=e.currentTab)return Object(f.jsx)("p",{children:"No tasks for this tab"});var t=e.tabs[e.currentTab];return void 0===t?Object(f.jsx)("p",{className:"w-full text-center",children:"Begin by creating a tab inside the menu"}):Object(f.jsx)("div",{className:"flex flex-col mx-10 border-b border-gray-200 pt-16",children:t.tasks.map((function(t,r){return e.hidden&&t.completed?Object(f.jsx)("div",{style:{display:"none"}},r):Object(f.jsx)(m,{task:t,id:r,completeTask:e.completeTask,currentTab:e.currentTab,deleteTask:e.deleteTask},r)}))})}function w(e){var t=Object(n.useState)(""),r=Object(l.a)(t,2),a=r[0],c=r[1];return void 0!==e.tabs&&void 0!==e.currentTab&&e.tabs.length>e.currentTab?Object(f.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.saveTask(e.currentTab,a),c("")},className:"w-full fixed bottom-0 left-0 p-4",children:Object(f.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)},value:a,placeholder:"Add a new task...",className:"rounded-sm border border-gray-200 w-full px-5 py-3 focus:outline-none focus:border-blue-500"})}):Object(f.jsx)(f.Fragment,{})}var O=r(7),k=r.n(O),g="https://dmelchor-todo.herokuapp.com",y="react";function T(e){var t=Object(n.useState)(""),r=Object(l.a)(t,2),a=(r[0],r[1]),c=function(e){};return Object(f.jsx)("div",{className:"w-full h-full bg-black bg-opacity-50 fixed left-0 top-0 flex items-center justify-center",children:Object(f.jsxs)("div",{className:"bg-white p-6 rounded-sm flex items-center justify-center flex-col w-2/3",children:[2===e.state&&Object(f.jsx)("p",{className:"text-red-700 mb-4",children:"Wrong password!"}),Object(f.jsx)("p",{children:"Whoops! This page is password protected. Please type the password."}),Object(f.jsxs)("form",{onSubmit:c,className:"w-full",action:g+"/api/v1/auth/login",method:"POST",children:[Object(f.jsx)("input",{type:"password",name:"password",placeholder:"Password...",onChange:function(e){return a(e.target.value)},className:"border border-gray-200 rounded-sm w-full py-3 px-5 my-4 focus:outline-none focus:border-blue-200"}),Object(f.jsx)("input",{type:"hidden",name:"type",value:y}),Object(f.jsx)("button",{type:"submit",onClick:c,className:"bg-blue-200 rounded-sm w-full px-5 py-3 hover:bg-blue-300 transition-colors",children:"Access"})]})]})})}var N=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/whoami",e.prev=1,e.next=4,k.a.get("https://dmelchor-todo.herokuapp.com/api/v1/whoami",{withCredentials:!0});case 4:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/",e.prev=1,e.next=4,k.a.get("https://dmelchor-todo.herokuapp.com/api/v1/",{withCredentials:!0});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/tab",e.prev=1,e.next=4,k.a.post("https://dmelchor-todo.herokuapp.com/api/v1/tab",{title:t},{withCredentials:!0});case 4:return e.sent,e.next=7,C();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(t,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/tab",e.prev=1,e.next=4,k.a.put("https://dmelchor-todo.herokuapp.com/api/v1/tab",{tabId:t,title:r},{withCredentials:!0});case 4:return e.sent,e.next=7,C();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/tab",e.prev=1,e.next=4,k.a.delete("https://dmelchor-todo.herokuapp.com/api/v1/tab",{data:{tabId:t},withCredentials:!0});case 4:return r=e.sent,console.log(r),e.next=8,C();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(u.a.mark((function e(t,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/task",e.prev=1,e.next=4,k.a.post("https://dmelchor-todo.herokuapp.com/api/v1/task",{tabId:t,taskName:r},{withCredentials:!0});case 4:return e.sent,e.next=7,C();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(u.a.mark((function e(t,r,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/task",e.prev=1,e.next=4,k.a.put("https://dmelchor-todo.herokuapp.com/api/v1/task",{tabId:t,taskId:r,completed:n},{withCredentials:!0});case 4:return e.sent,e.next=7,C();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(u.a.mark((function e(t,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+"/api/v1/task",e.prev=1,e.next=4,k.a.delete("https://dmelchor-todo.herokuapp.com/api/v1/task",{data:{tabId:t,taskId:r},withCredentials:!0});case 4:return e.sent,e.next=7,C();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}();function _(e){var t=function(){var t=Object(i.a)(u.a.mark((function t(r){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),-1===e.editId){t.next=7;break}return t.next=4,I(e.tabList[e.editId]._id,s);case 4:n=t.sent,t.next=11;break;case 7:return t.next=9,S(s);case 9:n=t.sent,e.setCurrentTab(n.length-1);case 11:e.setTabList(n),e.setShowMenu(!1),e.closePopup();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r="";-1!==e.editId&&(r=e.tabList[e.editId].title);var a=Object(n.useState)(r),c=Object(l.a)(a,2),s=c[0],o=c[1];return Object(f.jsx)("div",{className:"w-full h-full fixed left-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50",onClick:function(t){t.stopPropagation(),e.closePopup()},children:Object(f.jsxs)("form",{onSubmit:t,className:"bg-white p-5 rounded-sm flex flex-col justify-center items-center w-2/3",children:[Object(f.jsx)("input",{type:"text",name:"name",placeholder:"Tab name...",onChange:function(e){return o(e.target.value)},value:s,autoFocus:!0,className:"rounded-sm border border-gray-200 w-full px-5 py-3 focus:outline-none focus:border-blue-500 mb-4"}),Object(f.jsx)("div",{onClick:t,className:"rounded-sm w-full px-5 py-3 bg-blue-200 text-center",children:-1!==e.editId?"Save":"Create tab"})]})})}var D=function(e){return localStorage.getItem(e)};var A=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),s=Object(l.a)(c,2),o=s[0],b=s[1],p=Object(n.useState)(0),d=Object(l.a)(p,2),x=d[0],j=d[1],m=Object(n.useState)(!1),O=Object(l.a)(m,2),k=O[0],g=O[1],y=Object(n.useState)(!1),S=Object(l.a)(y,2),I=S[0],A=S[1],B=Object(n.useState)(!1),E=Object(l.a)(B,2),H=E[0],J=E[1],W=Object(n.useState)(-1),q=Object(l.a)(W,2),z=q[0],G=q[1],K=function(){var e=Object(i.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:if(e.sent){e.next=6;break}return a(0),e.abrupt("return");case 6:return a(1),e.next=9,C();case 9:t=e.sent,b(t),null!=(r=Number(D("currentTab")))&&r>=t.length&&(r=0),Q(r,t.length),n=D("currentTab"),g("true"===n||!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){K()}),[]);var Q=function(e,t){var r,n;e>=(t=t||o.length)&&(e=0),r="currentTab",n=e,localStorage.setItem(r,n),j(e)},R=function(){var e=Object(i.a)(u.a.mark((function e(t,r){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o[t]._id,e.next=3,M(n,r);case 3:a=e.sent,b(a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(u.a.mark((function e(t,r,n){var a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o[t]._id,c=o[t].tasks[r]._id,e.next=4,L(a,c,n);case 4:s=e.sent,b(s);case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o[t]._id,e.next=3,P(r);case 3:n=e.sent,b(n),t===x&&Q(0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(u.a.mark((function e(t,r){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this task?")){e.next=8;break}return n=o[t]._id,a=o[t].tasks[r]._id,e.next=6,F(n,a);case 6:c=e.sent,b(c);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{tabs:o,currentTab:x,completeTask:U,hidden:k,deleteTask:X}),Object(f.jsx)(w,{saveTask:R,currentTab:x,tabs:o}),Object(f.jsx)(h,{tabs:o,currentTab:x,changeTab:Q,setHidden:g,hidden:k,createTabPopup:function(){return J(!0)},editTabPopup:function(e){G(e),J(!0)},deleteTab:V,showMenu:I,setShowMenu:A}),1!==r&&Object(f.jsx)(T,{state:r,initialProcedure:K,setState:a}),H&&Object(f.jsx)(_,{setTabList:b,closePopup:function(){G(-1),J(!1)},setCurrentTab:j,setShowMenu:A,tabList:o,editId:z})]})})},B=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,50)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),B()}},[[49,1,2]]]);
//# sourceMappingURL=main.0a6e7ce5.chunk.js.map