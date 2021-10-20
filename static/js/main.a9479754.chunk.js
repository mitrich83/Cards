(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(55),s=n.n(c),o=(n(108),n(109),n(22)),i=n(15),d=n(6),j=n(5),l=n(11),u=n(43),b=n(72),O=n.n(b),h=n(1),p=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(u.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),d="".concat(O.a.error," ").concat(o||""),l="".concat(O.a.errorInput," ").concat(s||"");return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(j.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a(e)},className:l},i)),c&&Object(h.jsx)("span",{className:d,children:c})]})},x=n(73),f=n.n(x),m=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(u.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(f.a.checkbox," ").concat(r||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(h.jsx)("span",{className:f.a.spanClassName,children:a})]})},g=n(74),w=n.n(g),v=function(e){var t=e.red,n=e.className,r=Object(u.a)(e,["red","className"]),a="".concat(t?w.a.red:w.a.default," ").concat(n);return Object(h.jsx)("button",Object(j.a)({className:a},r))},R=n(16),N=n(41),A=n.n(N),E=A.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),C=function(e,t,n){return E.post("auth/login",{email:e,password:t,rememberMe:n})},P=function(){return E.delete("auth/me")},S={isLogin:!1,error:null,name:null},y=function(e){return{type:"SET-LOGIN",value:e}},I=function(){var e=Object(R.b)(),t=Object(R.c)((function(e){return e.login.isLogin})),n=Object(R.c)((function(e){return e.login.error})),a=Object(r.useState)({password:"",confirmPassword:"",email:"",showPassword:!1,showConfirmPassword:!1,disabled:!1,rememberMe:!0}),c=Object(l.a)(a,2),s=c[0],u=c[1],b=function(e){return function(t){u(Object(j.a)(Object(j.a)({},s),{},Object(d.a)({},e,t.target.value)))}};return t?Object(h.jsx)(i.a,{to:he.PROFILE}):Object(h.jsxs)("div",{children:[n&&Object(h.jsxs)("div",{style:{color:"red"},children:["`",n,"`"]}),Object(h.jsx)("div",{children:Object(h.jsx)(p,{type:"text",placeholder:"Login",value:s.email,onChange:b("email")})}),Object(h.jsx)("div",{children:Object(h.jsx)(p,{type:"password",placeholder:"Password",value:s.password,onChange:b("password")})}),Object(h.jsx)("div",{children:Object(h.jsx)(m,{checked:s.rememberMe,children:"remember me",onChange:function(e){u((function(t){return Object(j.a)(Object(j.a)({},t),{},{rememberMe:e.target.checked})}))}})}),Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:he.PASSWORD_RECOVERY,children:"Forgot"})}),Object(h.jsx)(v,{children:"Login",onClick:function(){var t,n,r;e((t=s.email,n=s.password,r=s.rememberMe,function(e){C(t,n,r).then((function(t){return e(y(!0))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(function(e){return{type:"SET-ERROR",error:e}}(n))}))}))}}),Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:he.REGISTRATION,children:"Sign Up"})})]})},T=n(46),F=n.n(T),k=n(160),G=n(66),L=n(64),Q=n(164),_=n(161),D=n(165),W=n(166),M=n(79),B=n.n(M),U=n(78),J=n.n(U),Y=n(163),q=A.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),H=function(e,t){return q.post("auth/register",{email:e,password:t})},z={status:"idle",error:null,logged:!1},K=function(e){return{type:"APP/SET-STATUS",status:e}},V=function(e){return{type:"APP/SET-LOGGED",logged:e}},X={error:null},Z=function(){var e=Object(R.c)((function(e){return e.signUp.error})),t=Object(R.c)((function(e){return e.app.status})),n=(Object(R.c)((function(e){return e.app.logged})),Object(R.b)()),r=a.a.useState({amount:"",password:"",confirmPassword:"",email:"",weight:"",weightRange:"",showPassword:!1,showConfirmPassword:!1,disabled:!1,confirm:!0}),c=Object(l.a)(r,2),s=c[0],o=c[1],i=function(e){return function(t){o(Object(j.a)(Object(j.a)({},s),{},Object(d.a)({},e,t.target.value)))}};return Object(h.jsx)("div",{children:"loading"===t?Object(h.jsx)(Q.a,{sx:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(h.jsx)(Y.a,{})}):Object(h.jsxs)("div",{className:F.a.register,children:[Object(h.jsx)("div",{className:F.a.description,children:"It-incubator"}),Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsxs)(G.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(h.jsx)(L.a,{htmlFor:"standard-adornment-password",children:"Email"}),Object(h.jsx)(k.a,{value:s.email,onChange:i("email")})]}),Object(h.jsxs)(G.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(h.jsx)(L.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(h.jsx)(k.a,{id:"standard-adornment-password",type:s.showPassword?"text":"password",value:s.password,onChange:i("password"),endAdornment:Object(h.jsx)(_.a,{position:"end",children:Object(h.jsx)(D.a,{"aria-label":"toggle password visibility",onClick:function(){o(Object(j.a)(Object(j.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:s.showPassword?Object(h.jsx)(J.a,{}):Object(h.jsx)(B.a,{})})})})]}),Object(h.jsxs)(G.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(h.jsx)(L.a,{htmlFor:"standard-adornment-password",children:"Confirm password"}),Object(h.jsx)(k.a,{onBlur:function(){s.password!=s.confirmPassword?o((function(e){return Object(j.a)(Object(j.a)({},e),{},{confirm:!1,disabled:!0})})):o((function(e){return Object(j.a)(Object(j.a)({},e),{},{confirm:!0,disabled:!1})}))},type:s.showConfirmPassword?"text":"password",value:s.confirmPassword,onChange:i("confirmPassword"),endAdornment:Object(h.jsx)(_.a,{position:"end",children:Object(h.jsx)(D.a,{"aria-label":"toggle password visibility",onClick:function(){o(Object(j.a)(Object(j.a)({},s),{},{showConfirmPassword:!s.showConfirmPassword}))},onMouseDown:function(e){e.preventDefault()},children:s.showConfirmPassword?Object(h.jsx)(J.a,{}):Object(h.jsx)(B.a,{})})})})]}),Object(h.jsxs)("div",{className:F.a.buttons,children:[e&&Object(h.jsx)("div",{className:F.a.error,children:e}),!s.confirm&&Object(h.jsx)("div",{className:F.a.error,children:"The passwords don`t match"}),Object(h.jsx)(W.a,{onClick:function(){o((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:"",password:"",confirmPassword:""})}))},variant:"outlined",size:"medium",children:"Cancel"}),Object(h.jsx)(W.a,{disabled:s.disabled,onClick:function(){var e,t;n((e=s.email,t=s.password,function(n){n(K("loading")),H(e,t).then((function(e){n(V(!0)),n(K("succeeded")),n(V(!0))})).catch((function(e){console.log(Object(j.a)({},e)),n(function(e){return{type:"SIGNUP/SET-ERROR",error:e}}(e.response.data.error)),n(K("succeeded"))}))}))},variant:"contained",size:"medium",children:"Register"})]})]})})},$=function(){var e=Object(R.c)((function(e){return e.login.isLogin})),t=Object(R.b)();return e?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:["Profile",Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"",alt:"avatar"})}),Object(h.jsx)("div",{children:"Name:"}),Object(h.jsx)("div",{children:Object(h.jsx)(v,{children:"Logout",onClick:function(){t((function(e){P().then((function(t){return e(y(!1))}))}))}})})]})}):Object(h.jsx)(i.a,{to:he.LOGIN})},ee=A.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/"}),te=function(e,t,n){return ee.post("auth/forgot",{email:e,from:t,message:n})},ne=function(e,t){return ee.post("auth/set-new-password",{newPassword:e,resetPasswordToken:t})},re={errorRecovery:"",errorNewPassword:"",newPassword:!1},ae=n(38),ce=n.n(ae),se=function(){var e=Object(R.b)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(h.jsx)("div",{className:ce.a.page,children:Object(h.jsxs)("div",{className:ce.a.container,children:[Object(h.jsx)("div",{children:Object(h.jsx)("h2",{className:ce.a.title,children:" Forgot your password"})}),Object(h.jsx)("div",{className:ce.a.input,children:Object(h.jsx)("input",{value:a,placeholder:"Enter email",onChange:function(e){c(e.currentTarget.value)}})}),Object(h.jsx)("div",{className:ce.a.placeholder,children:Object(h.jsx)("span",{children:" Enter your email address and we will send you further instructions"})}),Object(h.jsx)("div",{className:ce.a.button,children:Object(h.jsx)(v,{onClick:function(){e(function(e,t,n){return function(r){r(K("loading")),te(e,t,n).then((function(e){r(K("succeeded")),r(y(!0))})).catch((function(e){r({type:"FORGOT/ERROR-RECOVERY",error:e.response.data.error}),r(K("succeeded"))}))}}(a,"test-front-admin <dmitry.malykhin@mail.ru>","<div>\n\t\t\t\t\t\t\u0432\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f, \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435:\n\t\t\t\t\t\t<a href='https://mitrich83.github.io/Cards/#/new-password/$token$'>link\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0431\u044b\u043b\u0438 \u043d\u0430 \u0412\u044b - \u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u0439\u0442\u0435\n\t\t\t\t\t</div>"))},children:"Send instruction"})})]})})},oe=n(39),ie=n.n(oe),de=function(){var e=Object(R.b)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.g)().token;return Object(h.jsx)("div",{className:ie.a.page,children:Object(h.jsxs)("div",{className:ie.a.container,children:[Object(h.jsx)("div",{children:Object(h.jsx)("h2",{className:ie.a.title,children:"Create new password"})}),Object(h.jsx)("div",{className:ie.a.input,children:Object(h.jsx)("input",{value:a,onChange:function(e){c(e.currentTarget.value)}})}),Object(h.jsx)("div",{className:ie.a.placeholder,children:Object(h.jsx)("span",{children:" Create new password and we will send you further instructions to email"})}),Object(h.jsx)("div",{className:ie.a.button,children:Object(h.jsx)(v,{onClick:function(){if(a)return e(function(e,t){return function(n){n(K("loading")),ne(e,t).then((function(e){n(K("succeeded")),n({type:"FORGOT/SET-NEW-PASSWORD",newPassword:!0})})).catch((function(e){n({type:"FORGOT/ERROR-NEW-PASSWORD",errorNewPassword:e.message}),n(K("succeeded"))}))}}(a,s)),Object(h.jsx)(i.a,{to:he.LOGIN})},children:"Create new password"})})]})})},je=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:["Test",Object(h.jsx)(v,{}),Object(h.jsx)(p,{}),Object(h.jsx)(m,{})]})})},le=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"404"}),Object(h.jsx)("div",{children:"Page not found!"}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ue=n(47),be=n.n(ue),Oe=function(){return Object(h.jsx)("div",{className:be.a.page,children:Object(h.jsxs)("div",{className:be.a.container,children:[Object(h.jsx)("div",{className:be.a.title,children:Object(h.jsx)("h2",{children:"Check Email"})}),Object(h.jsx)("div",{className:be.a.email,children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"send"})}),Object(h.jsx)("div",{className:be.a.placeholder,children:Object(h.jsx)("span",{children:"We\u2019ve sent an Email with instructions to dmitry.malykhin@mail.ru"})})]})})},he={LOGIN:"/login",REGISTRATION:"/registration",PROFILE:"/profile",PASSWORD_RECOVERY:"/password-recovery",NOTIFICATION:"/notification",NEW_PASSWORD:"/new-password",TEST_PAGE:"/test"},pe=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(i.a,{to:he.PROFILE})}}),Object(h.jsx)(i.b,{path:he.LOGIN,render:function(){return Object(h.jsx)(I,{})}}),Object(h.jsx)(i.b,{path:he.REGISTRATION,render:function(){return Object(h.jsx)(Z,{})}}),Object(h.jsx)(i.b,{path:he.PROFILE,render:function(){return Object(h.jsx)($,{})}}),Object(h.jsx)(i.b,{path:he.PASSWORD_RECOVERY,render:function(){return Object(h.jsx)(se,{})}}),Object(h.jsx)(i.b,{path:he.NOTIFICATION,render:function(){return Object(h.jsx)(Oe,{})}}),Object(h.jsx)(i.b,{path:he.NEW_PASSWORD+"/:token",render:function(){return Object(h.jsx)(de,{})}}),Object(h.jsx)(i.b,{path:he.TEST_PAGE,render:function(){return Object(h.jsx)(je,{})}}),Object(h.jsx)(i.b,{render:function(){return Object(h.jsx)(le,{})}})]})})},xe=n(96),fe=n.n(xe),me=function(){return Object(h.jsxs)("nav",{className:fe.a.navbar,children:[Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:he.LOGIN,children:"LOGIN"})}),Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:he.PROFILE,children:"PROFILE"})}),Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:he.REGISTRATION,children:"REGISTRATION"})}),Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:he.TEST_PAGE,children:"TEST_PAGE"})})]})},ge=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(me,{}),Object(h.jsx)(pe,{})]})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},ve=n(65),Re=n(97),Ne={title:""},Ae=Object(ve.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case"APP/SET-LOGGED":return Object(j.a)(Object(j.a)({},e),{},{logged:t.logged});default:return Object(j.a)({},e)}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOGIN":return Object(j.a)(Object(j.a)({},e),{},{isLogin:t.value});case"SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case"SET-PROFILE":return Object(j.a)(Object(j.a)({},e),{},{name:t.name});default:return e}},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/ERROR-RECOVERY":return Object(j.a)(Object(j.a)({},e),{},{errorRecovery:t.error});case"FORGOT/SET-NEW-PASSWORD":return Object(j.a)(Object(j.a)({},e),{},{newPassword:t.newPassword});case"FORGOT/ERROR-NEW-PASSWORD":return Object(j.a)(Object(j.a)({},e),{},{errorNewPassword:t.errorNewPassword});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW-PROFILE":return Object(j.a)(Object(j.a)({},e),{},{newPassword:t.title});default:return e}},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});default:return Object(j.a)({},e)}}}),Ee=Object(ve.c)(Ae,Object(ve.a)(Re.a));s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(R.a,{store:Ee,children:Object(h.jsx)(o.a,{children:Object(h.jsx)(ge,{})})})}),document.getElementById("root")),we()},38:function(e,t,n){e.exports={page:"PasswordRecovery_page__3POdH",container:"PasswordRecovery_container__2MaeD",title:"PasswordRecovery_title__1c9vC",input:"PasswordRecovery_input__2R6Wh",placeholder:"PasswordRecovery_placeholder__3HsQc",button:"PasswordRecovery_button__zsMbZ"}},39:function(e,t,n){e.exports={page:"NewPassword_page__2o-Hv",container:"NewPassword_container__2mvwB",title:"NewPassword_title__12j-N",input:"NewPassword_input__lFYoL",placeholder:"NewPassword_placeholder__3dbdF",button:"NewPassword_button__zxLAK"}},46:function(e,t,n){e.exports={register:"SignUp_register__2zInk",description:"SignUp_description__3YFgm",buttons:"SignUp_buttons__2FjZq",error:"SignUp_error__1Kdli"}},47:function(e,t,n){e.exports={page:"Notification_page__3CyF5",container:"Notification_container__1ddRj",title:"Notification_title__3XsKC",email:"Notification_email__1Ez3a",placeholder:"Notification_placeholder__1B7N8",button:"Notification_button__2wgBQ"}},72:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3JnC2",errorInput:"SuperInputText_errorInput__2oGH5",error:"SuperInputText_error__1ghRd",span:"SuperInputText_span__27XX8"}},73:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2h9LP",spanClassName:"SuperCheckbox_spanClassName__1exBH"}},74:function(e,t,n){e.exports={default:"SuperButton_default__vGOr_",red:"SuperButton_red__3BUew"}},96:function(e,t,n){e.exports={navbar:"Navbar_navbar__3HQtz"}}},[[134,1,2]]]);
//# sourceMappingURL=main.a9479754.chunk.js.map