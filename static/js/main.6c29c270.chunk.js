(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,function(e,t,r){e.exports={wrapper:"Affairs_wrapper__32gPW",affair:"Affairs_affair__1_7mD",affairName:"Affairs_affairName__1WPCh",priorityHigh:"Affairs_priorityHigh__2GfDV",priorityMiddle:"Affairs_priorityMiddle__2gFWQ",priorityLow:"Affairs_priorityLow__13Ld1",buttons:"Affairs_buttons__v0fyx",buttonOther:"Affairs_buttonOther__35jN2"}},function(e,t,r){e.exports={body:"Message_body__OeC_b",avatar:"Message_avatar__grwOF",angle:"Message_angle__2EPFF",messageBlock:"Message_messageBlock__2toML",name:"Message_name__mCRhx",message:"Message_message__21-j4",time:"Message_time__Gsc7_"}},,,,function(e,t,r){e.exports={wrapper:"Greeting_wrapper__3t3mz",defaultInput:"Greeting_defaultInput__3Urb3",errorInput:"Greeting_errorInput__2l9gj",error:"Greeting_error__WuXG0",button:"Greeting_button__10JwF"}},,,function(e,t,r){e.exports={input:"SuperInputText_input__2tWPM",superInput:"SuperInputText_superInput__1fY2g",errorInput:"SuperInputText_errorInput__2NKu1",error:"SuperInputText_error__eqS4T"}},function(e,t,r){e.exports={wrapper:"Error404_wrapper__30yF4",Err404:"Error404_Err404__59Y_0",text:"Error404_text__3W2rx"}},function(e,t,r){e.exports={label:"SuperCheckbox_label__1I54Q"}},,function(e,t,r){e.exports={default:"SuperButton_default__31UWj",red:"SuperButton_red__Ftpzb"}},function(e,t,r){e.exports={item:"Header_item__2fsiP",activeLink:"Header_activeLink__1jaQd"}},,,,function(e,t,r){e.exports={App:"App_App__3gnD9"}},,function(e,t,r){e.exports={blue:"HW4_blue__1aLN8",column:"HW4_column__HLvDE",testSpanError:"HW4_testSpanError__31R0U"}},,,,,,function(e,t,r){},,,,function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(21),s=r.n(c),i=(r(30),r(22)),o=r.n(i),j=r(11),l=r(2),u=r(6),d=r.n(u),b=r(0);var h=function(e){return Object(b.jsxs)("div",{className:d.a.body,children:[Object(b.jsx)("img",{src:e.avatar,className:d.a.avatar}),Object(b.jsx)("div",{className:d.a.angle}),Object(b.jsxs)("div",{className:d.a.messageBlock,children:[Object(b.jsx)("div",{className:d.a.name,children:e.name}),Object(b.jsx)("div",{className:d.a.message,children:e.message}),Object(b.jsx)("div",{className:d.a.time,children:e.time})]})]})},p="https://cs8.pikabu.ru/images/big_size_comm/2016-03_6/145936207814459518.jpg",x="\u0421\u0430\u043d\u044f",m="\u0421\u0435\u0439\u0447\u0430\u0441 \u044f \u0431\u0443\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0438\u0433\u0440\u044b",O="22:00";var _=function(){return Object(b.jsxs)("div",{children:["homeworks 1",Object(b.jsx)(h,{avatar:p,name:x,message:m,time:O}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},f=r(3),v=r(5),g=r.n(v),N=r(8),k=r(9),C=r(17),w=r.n(C),y=function(e){var t=e.red,r=e.className,a=Object(k.a)(e,["red","className"]),n="".concat(t?w.a.red:w.a.default," ").concat(r);return Object(b.jsx)("button",Object(N.a)({className:n},a))};var A=function(e){var t;return Object(b.jsxs)("div",{className:g.a.affair,children:[Object(b.jsxs)("div",{className:g.a.affairName,children:[e.affair.name," "]}),Object(b.jsxs)("div",{className:"".concat((t=e.affair.priority,"high"===t?g.a.priorityHigh:"middle"===t?g.a.priorityMiddle:g.a.priorityLow)),children:[e.affair.priority," "]}),Object(b.jsx)(y,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var I=function(e){var t=e.data.map((function(t){return Object(b.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:g.a.wrapper,children:[t,Object(b.jsxs)("div",{className:g.a.buttons,children:[Object(b.jsx)(y,{className:g.a.buttonsFor,onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)(y,{onClick:function(){e.setFilter("high")},className:g.a.buttonsFor,children:"High"}),Object(b.jsx)(y,{onClick:function(){e.setFilter("middle")},className:g.a.buttonsFor,children:"Middle"}),Object(b.jsx)(y,{onClick:function(){e.setFilter("low")},className:g.a.buttonsFor,children:"Low"})]})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(a.useState)(S),t=Object(f.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)("all"),s=Object(f.a)(c,2),i=s[0],o=s[1],j=function(e,t){switch(t){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(r,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(I,{data:j,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},E=r(25),M=r(10),T=r.n(M),W=r(13),H=r.n(W),L=function(e){e.type;var t=e.onChange,r=e.onChangeText,a=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(H.a.error," ").concat(i||""),l="".concat(c?H.a.errorInput:H.a.superInput," ").concat(s||H.a.input);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(N.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),n&&"Enter"===e.key&&n()},className:l},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},P=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,n=e.error,c=e.totalUsers,s=""!==n?T.a.errorInput:T.a.defaultInput,i=1===c?"name":"names";return Object(b.jsxs)("div",{className:T.a.wrapper,children:[Object(b.jsx)(L,{value:t,onChange:r,placeholder:"SuperInputText",error:n}),Object(b.jsx)("br",{}),Object(b.jsx)(y,{onClick:a,children:"Add"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{value:t,onChange:r,className:s,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(b.jsx)("button",{onClick:a,className:T.a.button,children:"add"}),Object(b.jsxs)("span",{children:[" ","the array has ".concat(c," ").concat(i)]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{className:T.a.error,children:[" ",n]})]})},U=function(e){var t=e.users,r=e.addUserCallback,n=Object(a.useState)(""),c=Object(f.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(f.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(P,{name:s,setNameCallback:function(e){u(""),i(e.currentTarget.value)},addUser:function(){/^([a-zA-Z\u0430-\u044f\u0410-\u042f]{2,})$/.test(s)?(r(s),i(""),alert("Hello ".concat(s[0].toUpperCase()+s.substring(1)," !"))):s.length<2&&s.length>0?(u("\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),i("")):(u("\u0418\u043c\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"),i(""))},error:l,totalUsers:d})},G=r(23);var B=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),r=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(U,{users:r,addUserCallback:function(e){var t={_id:Object(G.v1)(),name:e};n([t].concat(Object(E.a)(r)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},J=r(24),z=r.n(J),D=r(15),K=r.n(D),Q=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,a=e.className,n=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{className:K.a.label,children:[Object(b.jsx)("input",Object(N.a)({type:"checkbox",onChange:function(e){t&&t(e),r&&r(e.currentTarget.checked)},className:s},c)),Object(b.jsx)("span",{children:n&&Object(b.jsx)("span",{className:K.a.spanClassName,children:n})})]})};var R=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),r=t[0],n=t[1],c=r?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(a.useState)(!1),o=Object(f.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:z.a.column,children:[Object(b.jsx)(L,{value:r,onChangeText:n,onEnter:s,error:c}),Object(b.jsx)(L,{className:""}),Object(b.jsx)(y,{children:"default"}),Object(b.jsx)(y,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(y,{disabled:!0,children:"disabled"}),Object(b.jsx)(Q,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsx)(F,{}),Object(b.jsx)(B,{}),Object(b.jsx)(R,{})]})};function $(){return Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"junior"})})}function q(){return Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"junior plus"})})}var V=r(14),X=r.n(V);var Z=function(){return Object(b.jsxs)("div",{className:X.a.wrapper,children:[Object(b.jsx)("div",{className:X.a.text,children:Object(b.jsx)("h1",{children:"404"})}),Object(b.jsx)("div",{className:X.a.text,children:"Page not found!"}),Object(b.jsx)("div",{className:X.a.Err404}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ee="pre-junior",te="junior",re="junior-plus",ae="/*",ne="/";function ce(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:ee,element:Object(b.jsx)(Y,{})}),Object(b.jsx)(l.a,{path:te,element:Object(b.jsx)($,{})}),Object(b.jsx)(l.a,{path:re,element:Object(b.jsx)(q,{})}),Object(b.jsx)(l.a,{path:ae,element:Object(b.jsx)(Z,{})}),Object(b.jsx)(l.a,{path:ne,element:Object(b.jsx)("div",{})})]})})}var se=r(18),ie=r.n(se);function oe(e){var t=e.path,r=e.name;return Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:t,className:function(e){return e.isActive?"".concat(ie.a.activeLink," "):""},children:r})})}var je=[{name:"PreJunior",path:ee},{name:"Junior",path:te},{name:"JuniorPlus",path:re}].map((function(e,t){return Object(b.jsx)(oe,{path:e.path,name:e.name},t)}));var le=function(){return Object(b.jsx)("ul",{className:ie.a.item,children:je})};var ue=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(le,{}),Object(b.jsx)(ce,{})]})})};var de=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.6c29c270.chunk.js.map