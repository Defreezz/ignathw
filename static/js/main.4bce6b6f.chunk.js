(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{16:function(e,t,n){e.exports={wrapper:"Affairs_wrapper__32gPW",affair:"Affairs_affair__1_7mD",affairName:"Affairs_affairName__1WPCh",priorityHigh:"Affairs_priorityHigh__2GfDV",priorityMiddle:"Affairs_priorityMiddle__2gFWQ",priorityLow:"Affairs_priorityLow__13Ld1",buttons:"Affairs_buttons__v0fyx",buttonOther:"Affairs_buttonOther__35jN2"}},167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),i=(n(90),n(73)),o=n.n(i),j=n(27),l=n(4),u=n(21),b=n.n(u),d=n(1);var h=function(e){return Object(d.jsxs)("div",{className:b.a.body,children:[Object(d.jsx)("img",{src:e.avatar,className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.messageBlock,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.message,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},O="https://cs8.pikabu.ru/images/big_size_comm/2016-03_6/145936207814459518.jpg",x="\u0421\u0430\u043d\u044f",p="\u0421\u0435\u0439\u0447\u0430\u0441 \u044f \u0431\u0443\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0438\u0433\u0440\u044b",m="22:00";var _=function(){return Object(d.jsxs)("div",{children:["homeworks 1",Object(d.jsx)(h,{avatar:O,name:x,message:p,time:m}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},f=n(6),g=n(16),v=n.n(g),C=n(8),k=n(13),N=n(55),y=n.n(N),S=function(e){var t=e.red,n=e.className,a=Object(k.a)(e,["red","className"]),r="".concat(t?y.a.red:y.a.default," ").concat(n);return Object(d.jsx)("button",Object(C.a)({className:r},a))};var w=function(e){var t;return Object(d.jsxs)("div",{className:v.a.affair,children:[Object(d.jsxs)("div",{className:v.a.affairName,children:[e.affair.name," "]}),Object(d.jsxs)("div",{className:"".concat((t=e.affair.priority,"high"===t?v.a.priorityHigh:"middle"===t?v.a.priorityMiddle:v.a.priorityLow)),children:[e.affair.priority," "]}),Object(d.jsx)(S,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var E=function(e){var t=e.data.map((function(t){return Object(d.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:v.a.wrapper,children:[t,Object(d.jsxs)("div",{className:v.a.buttons,children:[Object(d.jsx)(S,{className:v.a.buttonsFor,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(S,{onClick:function(){e.setFilter("high")},className:v.a.buttonsFor,children:"High"}),Object(d.jsx)(S,{onClick:function(){e.setFilter("middle")},className:v.a.buttonsFor,children:"Middle"}),Object(d.jsx)(S,{onClick:function(){e.setFilter("low")},className:v.a.buttonsFor,children:"Low"})]})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(a.useState)(I),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(f.a)(c,2),i=s[0],o=s[1],j=function(e,t){switch(t){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(E,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=n(34),H=n(26),F=n.n(H),W=n(35),L=n.n(W),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(L.a.error," ").concat(i||""),l="".concat(c?L.a.errorInput:L.a.superInput," ").concat(s||L.a.input);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},G=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=""!==r?F.a.errorInput:F.a.defaultInput,i=1===c?"name":"names";return Object(d.jsxs)("div",{className:F.a.wrapper,children:[Object(d.jsx)(B,{value:t,onEnter:a,onChange:n,placeholder:"SuperInputText",error:r}),Object(d.jsx)("br",{}),Object(d.jsx)(S,{onClick:a,children:"Add"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:t,onChange:n,className:s,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(d.jsx)("button",{onClick:a,className:F.a.button,children:"add"}),Object(d.jsxs)("span",{children:[" ","the array has ".concat(c," ").concat(i)]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{className:F.a.error,children:[" ",r]})]})},M=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(f.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(f.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(G,{name:s,setNameCallback:function(e){u(""),i(e.currentTarget.value)},addUser:function(){/^([a-zA-Z\u0430-\u044f\u0410-\u042f]{2,})$/.test(s)?(n(s),i(""),alert("Hello ".concat(s[0].toUpperCase()+s.substring(1)," !"))):s.length<2&&s.length>0?(u("\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),i("")):(u("\u0418\u043c\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"),i(""))},error:l,totalUsers:b})},R=n(74);var D=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(M,{users:n,addUserCallback:function(e){var t={_id:Object(R.v1)(),name:e};r([t].concat(Object(A.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},P=n(75),U=n.n(P),J=n(48),q=n.n(J),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{className:q.a.label,children:[Object(d.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),Object(d.jsx)("span",{children:r&&Object(d.jsx)("span",{className:q.a.spanClassName,children:r})})]})};var K=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(f.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:U.a.column,children:[Object(d.jsx)(B,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(B,{className:""}),Object(d.jsx)(S,{children:"default"}),Object(d.jsx)(S,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(S,{disabled:!0,children:"disabled"}),Object(d.jsx)(z,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Z=n(76),Q=n.n(Z),V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(k.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(f.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,b=l.onDoubleClick,h=l.className,O=Object(k.a)(l,["children","onDoubleClick","className"]),x="".concat(h||Q.a.editableSpan," ");return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(B,Object(C.a)({autoFocus:!0,onBlur:function(e){t&&t(e),j(!o)},onEnter:function(){n&&n(),j(!o)}},c)):Object(d.jsx)("span",Object(C.a)(Object(C.a)({onDoubleClick:function(e){b&&b(e),j(!o)},className:x},O),{},{children:u||c.value}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function X(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Y("test",{x:"A",y:1});X("test",{x:"",y:0});var $=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(V,{value:n,onChangeText:r,spanProps:{children:n?null:"enter text..."}})}),Object(d.jsx)(S,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(d.jsx)(S,{onClick:function(){r(X("editable-span-value",n))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{}),Object(d.jsx)(T,{}),Object(d.jsx)(D,{}),Object(d.jsx)(K,{}),Object(d.jsx)($,{})]})},te=n(36),ne=n.n(te),ae=r.a.memo((function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=e.className,c=Object(k.a)(e,["options","onChange","onChangeOption","className"]),s=t?t.map((function(e,t){return Object(d.jsx)("option",{value:e,className:ne.a.option,children:e},t)})):[],i="".concat(r?"".concat(ne.a[r]," ").concat(ne.a.selectBlock):ne.a.selectBlock);return Object(d.jsx)("select",Object(C.a)(Object(C.a)({className:i,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:s}))})),re=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(k.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:t,checked:e===a,onChange:s,value:e}),e]},t+"-"+n)})):[];return Object(d.jsx)("div",{children:i})},ce=["x","y","z","5"];var se=function(){var e=Object(a.useState)(ce[1]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ae,{options:ce,value:n,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(re,{name:"radio",options:ce,value:n,onChangeOption:r})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ie=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(A.a)(e).sort((function(e,t){return e.name>=t.name?1:-1})):"down"===t.payload?Object(A.a)(e).sort((function(e,t){return e.name<=t.name?1:-1})):e;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:6,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:17},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var je=function(){var e=Object(a.useState)(oe),t=Object(f.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:e.name})," ",Object(d.jsx)("span",{style:{float:"right"},children:e.age})]},e._id)}));return Object(d.jsxs)("div",{style:{minHeight:"250px",position:"relative"},children:[Object(d.jsx)("hr",{}),"homeworks 8",Object(d.jsx)("ul",{style:{maxWidth:"150px",listStyle:"none"},children:c}),Object(d.jsxs)("span",{style:{position:"absolute",bottom:"0px"},children:[Object(d.jsx)(S,{onClick:function(){return r(ie(oe,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(S,{onClick:function(){return r(ie(oe,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(S,{onClick:function(){return r(ie(oe,{type:"check",payload:18}))},children:"check 18"})]})]})};var le=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("press start"),s=Object(f.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(f.a)(j,2),u=l[0],b=l[1],h=function(){clearInterval(n)},O="press start"===i?"press start":i.toTimeString(),x="press start"===i?"press start":i.toDateString();return Object(d.jsxs)("div",{style:{minHeight:"120px",position:"relative"},children:[Object(d.jsxs)("div",{style:{margin:"15px"},onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:["Time: ",O]}),u&&Object(d.jsxs)("div",{style:{margin:"15px"},children:["Date: ",x]}),Object(d.jsxs)("div",{style:{position:"absolute",bottom:"0px"},children:[Object(d.jsx)(S,{onClick:function(){h();var e=window.setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(d.jsx)(S,{onClick:h,children:"stop"})]})]})};var ue,be=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(le,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},de=n(20),he={isLoading:!1};!function(e){e.CHANGE_IS_LOADING="hw10/CHANGE_IS_LOADING"}(ue||(ue={}));var Oe=function(e){return{type:ue.CHANGE_IS_LOADING,payload:{isLoading:e}}},xe=n(184),pe=n(185);var me=function(){var e=Object(de.b)(),t=Object(de.c)((function(e){return e.loading.isLoading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",t?Object(d.jsxs)("div",{children:["\u043a\u0440\u0443\u0442\u0438\u043c\u0441\u044f 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u0421:",Object(d.jsx)(xe.a,{open:t,children:Object(d.jsx)(pe.a,{color:"inherit"})})]}):Object(d.jsx)("div",{children:Object(d.jsx)(S,{onClick:function(){e(Oe(!0)),setTimeout((function(){e(Oe(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_e=n(25),fe=n.n(_e),ge=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,r=Object(k.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(fe.a.range," ").concat(a||"");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(C.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:c},r))})},ve=n(83),Ce=(n(166),function(e){var t=e.onChangeRange,n=e.value,a={width:14,height:14,cursor:"pointer",marginTop:-3,borderRadius:"50%",border:"solid 2px #757576",backgroundColor:"#757576"};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(ve.a,{value:n,onChange:function(e){t&&t(e)},allowCross:!1,trackStyle:[{left:0,height:8,borderRadius:6,backgroundColor:"#757576"}],handleStyle:[a,a],railStyle:{height:7}})})});var ke=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(65),s=Object(f.a)(c,2),i=s[0],o=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 11",Object(d.jsxs)("div",{className:fe.a.cont,children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(ge,{value:n,max:i,onChangeRange:function(e){r(e)}}),Object(d.jsx)("span",{children:i})]}),Object(d.jsxs)("div",{className:fe.a.cont,children:[Object(d.jsx)("div",{children:n}),Object(d.jsx)("div",{className:fe.a.range,children:Object(d.jsx)(Ce,{value:[n,i],onChangeRange:function(e){r(e[0]),o(e[1])}})}),Object(d.jsx)("div",{children:i})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function Ne(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"junior"}),Object(d.jsx)(se,{}),Object(d.jsx)(je,{}),Object(d.jsx)(be,{}),Object(d.jsx)(me,{}),Object(d.jsx)(ke,{})]})}var ye,Se=n(49),we=n.n(Se),Ee={selectTheme:"light",themes:["light","dark","red","some"]};!function(e){e.SET_COUNTER="hw12/SET_THEME"}(ye||(ye={}));var Ie=function(e){return{type:ye.SET_COUNTER,payload:{selectTheme:e}}},Te=r.a.memo((function(){var e=Object(de.c)((function(e){return e.theme})),t=e.themes,n=e.selectTheme,r=Object(de.b)(),c=Object(a.useCallback)((function(e){return r(Ie(e))}),[r]);return Object(a.useEffect)((function(){var e=localStorage.getItem("theme");r(Ie(e&&JSON.parse(e)))}),[]),Object(a.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{className:"".concat(we.a[n]," ").concat(we.a.block),children:[Object(d.jsx)("hr",{}),Object(d.jsx)("span",{className:we.a[n+"-text"],children:"homeworks 12"}),Object(d.jsx)(ae,{className:n,options:t,value:n,onChangeOption:c}),Object(d.jsx)("hr",{})]})}));function Ae(){return Object(d.jsx)("div",{children:Object(d.jsx)(Te,{})})}var He=n(37),Fe=n.n(He);var We=function(){return Object(d.jsxs)("div",{className:Fe.a.wrapper,children:[Object(d.jsx)("div",{className:Fe.a.text,children:Object(d.jsx)("h1",{children:"404"})}),Object(d.jsx)("div",{className:Fe.a.text,children:"Page not found!"}),Object(d.jsx)("div",{className:Fe.a.Err404}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Le="pre-junior",Be="junior",Ge="junior-plus",Me="/*",Re="/";function De(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:Le,element:Object(d.jsx)(ee,{})}),Object(d.jsx)(l.a,{path:Be,element:Object(d.jsx)(Ne,{})}),Object(d.jsx)(l.a,{path:Ge,element:Object(d.jsx)(Ae,{})}),Object(d.jsx)(l.a,{path:Me,element:Object(d.jsx)(We,{})}),Object(d.jsx)(l.a,{path:Re,element:Object(d.jsx)("div",{})})]})})}var Pe=n(57),Ue=n.n(Pe);function Je(e){var t=e.path,n=e.name;return Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:t,className:function(e){return e.isActive?"".concat(Ue.a.activeLink," "):""},children:n})})}var qe=[{name:"PreJunior",path:Le},{name:"Junior",path:Be},{name:"JuniorPlus",path:Ge}].map((function(e,t){return Object(d.jsx)(Je,{path:e.path,name:e.name},t)}));var ze=function(){return Object(d.jsx)("ul",{className:Ue.a.item,children:qe})};var Ke=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(ze,{}),Object(d.jsx)(De,{})]})})};var Ze=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(Ke,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=n(58),Ve=Object(Qe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.CHANGE_IS_LOADING:return Object(C.a)(Object(C.a)({},e),t.payload);default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.SET_COUNTER:return Object(C.a)(Object(C.a)({},e),t.payload);default:return e}}}),Ye=Object(Qe.b)(Ve),Xe=Ye;window.store=Ye,s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(de.a,{store:Xe,children:Object(d.jsx)(Ze,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,n){e.exports={body:"Message_body__OeC_b",avatar:"Message_avatar__grwOF",angle:"Message_angle__2EPFF",messageBlock:"Message_messageBlock__2toML",name:"Message_name__mCRhx",message:"Message_message__21-j4",time:"Message_time__Gsc7_"}},25:function(e,t,n){e.exports={cont:"SuperRange_cont__ZoSLf",range:"SuperRange_range__hqdov"}},26:function(e,t,n){e.exports={wrapper:"Greeting_wrapper__3t3mz",defaultInput:"Greeting_defaultInput__3Urb3",errorInput:"Greeting_errorInput__2l9gj",error:"Greeting_error__WuXG0",button:"Greeting_button__10JwF"}},35:function(e,t,n){e.exports={input:"SuperInputText_input__2tWPM",superInput:"SuperInputText_superInput__1fY2g",errorInput:"SuperInputText_errorInput__2NKu1",error:"SuperInputText_error__eqS4T"}},36:function(e,t,n){e.exports={selectBlock:"SuperSelect_selectBlock__25CZj",light:"SuperSelect_light__3fIeJ",dark:"SuperSelect_dark__2aHqd",red:"SuperSelect_red__lqGFE",some:"SuperSelect_some__JH_WU"}},37:function(e,t,n){e.exports={wrapper:"Error404_wrapper__30yF4",Err404:"Error404_Err404__59Y_0",text:"Error404_text__3W2rx"}},48:function(e,t,n){e.exports={label:"SuperCheckbox_label__1I54Q"}},49:function(e,t,n){e.exports={block:"HW12_block__31Inr",light:"HW12_light__2BZpB","light-text":"HW12_light-text__2FeVR",dark:"HW12_dark__3gwn9","dark-text":"HW12_dark-text__3mOuy",red:"HW12_red__6D2rT","red-text":"HW12_red-text__XVtdY",some:"HW12_some__3BPBd","some-text":"HW12_some-text__38aq2"}},55:function(e,t,n){e.exports={default:"SuperButton_default__31UWj",red:"SuperButton_red__Ftpzb"}},57:function(e,t,n){e.exports={item:"Header_item__2fsiP",activeLink:"Header_activeLink__1jaQd"}},73:function(e,t,n){e.exports={App:"App_App__3gnD9"}},75:function(e,t,n){e.exports={blue:"HW4_blue__1aLN8",column:"HW4_column__HLvDE",testSpanError:"HW4_testSpanError__31R0U"}},76:function(e,t,n){e.exports={editableSpan:"SuperEditableSpan_editableSpan__3Bk2r"}},90:function(e,t,n){}},[[167,1,2]]]);
//# sourceMappingURL=main.4bce6b6f.chunk.js.map