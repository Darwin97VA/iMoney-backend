(this["webpackJsonpimoney-frontend"]=this["webpackJsonpimoney-frontend"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={containerAll:"style_containerAll__28iNu",container:"style_container__2lj7q",header:"style_header__EUUjs",form:"style_form__3EY-T",footer:"style_footer__3f2XH"}},,function(e,t,n){e.exports={container:"style_container__2XPTn",label:"style_label__1O5lF",input:"style_input__3b6jC",disabled:"style_disabled__3M8Ra"}},function(e,t,n){e.exports={container:"style_container__2oUVN",form:"style_form__1H2l0",fieldset:"style_fieldset__1_jQL",terms:"style_terms__GGohD"}},function(e,t,n){e.exports={container:"style_container__2TpCf",form:"style_form__1Q9bv",fieldset:"style_fieldset__1v-JV",terms:"style_terms__3kI4Z"}},function(e,t,n){e.exports={container:"style_container__3dLFz",h1:"style_h1__1y6sF"}},function(e,t,n){e.exports={container:"style_container__31Moa",cards:"style_cards__Wvohc",title:"style_title__1UM4-"}},function(e,t,n){e.exports={container:"style_container__3q6HI",title:"style_title__3dc3m",img:"style_img__3Pr5x"}},function(e,t,n){e.exports={container:"style_container__39Gza",form:"style_form__3tqgI",fieldset:"style_fieldset__wa-uw",terms:"style_terms__P8CRm"}},,,,,function(e,t,n){e.exports={container:"style_container__204Iq",header:"style_header__16sDQ"}},,function(e,t,n){e.exports={button:"style_button__3t2yg"}},,function(e,t,n){e.exports={link:"styles_link__1wVSs"}},function(e,t,n){e.exports={container:"style_container__96ukb"}},function(e,t,n){e.exports={container:"style_container__19pkh"}},function(e,t,n){e.exports={container:"style_container__i9k2X"}},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(26),r=n.n(i),l=n(5),o=n(3),j=n(2),b=n(9),d=n(11),u=n(14),O=n.n(u),x=function(e){var t=e.label,n=e.placeholder,s=void 0===n?t:n,i=e.disabled,r=void 0!==i&&i,l=e.required,o=void 0===l||l,u=Object(d.a)(e,["label","placeholder","disabled","required"]),x=Object(c.useState)(""),h=Object(j.a)(x,2),m=h[0],p=h[1];return Object(a.jsxs)("label",{className:"".concat(O.a.container," ").concat(r&&O.a.disabled),children:[Object(a.jsx)("input",Object(b.a)({type:"text",className:O.a.input,disabled:r,placeholder:m,required:o,onFocus:function(){return p(s)},onBlur:function(){return p("")}},u)),t?Object(a.jsxs)("div",{className:O.a.label,children:[" ",t," "]}):null]})},h=n(27),m=n.n(h),p=function(e){var t=e.children,n=e.size,c=e.classes,s=e.style,i=e.width,r=Object(d.a)(e,["children","size","classes","style","width"]);return Object(a.jsx)("button",Object(b.a)(Object(b.a)({className:"".concat(m.a.button," ").concat(n," ").concat(c),style:Object(b.a)(Object(b.a)({},s),{},{width:i||s.width})},r),{},{children:t}))};p.defaultProps={children:"Enviar",size:"medium",classes:"",width:"",style:{}};var g=p,f=function(e){var t=e.label,n=e.onChange,c=e.value;return Object(a.jsxs)("label",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"0 .5em",margin:".5em 0",borderRadius:".5em",border:"2px solid rgb(84, 84, 84)",cursor:"pointer"},children:[Object(a.jsx)("span",{children:t}),Object(a.jsx)("input",{type:"checkbox",onClick:function(){return n(!c)},style:{marginLeft:".5em"}})]})},y=n(15),_=n.n(y),v=function(e){return function(t){return e(t.target.value)}},C=function(e){var t=e.addSubmit,n=Object(c.useState)(""),s=Object(j.a)(n,2),i=s[0],r=s[1],o=Object(c.useState)(""),b=Object(j.a)(o,2),d=b[0],u=b[1],O=Object(c.useState)(""),h=Object(j.a)(O,2),m=h[0],p=h[1],y=Object(c.useState)(""),C=Object(j.a)(y,2),S=C[0],N=C[1],w=Object(c.useState)(""),A=Object(j.a)(w,2),E=A[0],P=A[1],k=Object(c.useState)(""),I=Object(j.a)(k,2),D=I[0],M=I[1],F=Object(c.useState)(""),L=Object(j.a)(F,2),R=L[0],T=L[1],q=Object(c.useState)(!1),z=Object(j.a)(q,2),B=z[0],U=z[1],G=Object(c.useState)(""),H=Object(j.a)(G,2),Q=H[0],W=H[1],J=Object(c.useState)(""),V=Object(j.a)(J,2),X=V[0],Y=V[1];return Object(a.jsx)("div",{className:_.a.container,children:Object(a.jsxs)("form",{action:"",className:_.a.form,onSubmit:function(e){e.preventDefault(),t()},children:[Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)("img",{src:"/img/simbolo-persona.png",width:"50px",alt:"Empresa"}),Object(a.jsx)("h1",{style:{textAlign:"center",marginLeft:"8px"},children:"Persona Natural"})]}),Object(a.jsxs)("fieldset",{className:_.a.fieldset,children:[Object(a.jsx)(x,{label:"DNI",type:"number",value:i,onChange:v(r)}),Object(a.jsx)(x,{label:"Nombres y Apellidos",value:d,onChange:v(u)}),Object(a.jsx)(x,{label:"Nacionalidad",value:m,onChange:v(p)}),Object(a.jsx)(x,{label:"Ocupaci\xf3n",value:S,onChange:v(N)}),Object(a.jsx)(x,{label:"Domicilio",value:E,onChange:v(P)}),Object(a.jsx)(x,{label:"Celular",type:"number",placeholder:"51 999 888 777",value:D,onChange:v(M)}),Object(a.jsx)(f,{value:B,onChange:U,label:"Persona Expuesta Pol\xedticamente"}),Object(a.jsx)(x,{label:B?"Cargo y Empresa P\xfablica":"Se habilita si es PEP",disabled:!B,value:R,onChange:v(T),required:B}),Object(a.jsx)(x,{label:"Correo",type:"email",value:Q,onChange:v(W)}),Object(a.jsx)(x,{label:"Contrase\xf1a",type:"password",placeholder:"min 8 d\xedgitos de letras/n\xfameros",value:X,onChange:v(Y)})]}),Object(a.jsxs)("div",{className:_.a.terms,children:["Registr\xe1ndote aceptas nuestos ",Object(a.jsx)(l.b,{to:"/terms",children:"T\xe9rminos y condiciones / Pol\xedtica de Privacidad y Uso de Datos"})]}),Object(a.jsx)(g,{type:"submit",style:{margin:"auto",width:"300px"},children:" Registrarse "})]})})},S=n(16),N=n.n(S),w=function(e){return function(t){return e(t.target.value)}},A=function(e){var t=e.addSubmit,n=Object(c.useState)(""),s=Object(j.a)(n,2),i=s[0],r=s[1],l=Object(c.useState)(""),o=Object(j.a)(l,2),b=o[0],d=o[1],u=Object(c.useState)(""),O=Object(j.a)(u,2),h=O[0],m=O[1],p=Object(c.useState)(""),f=Object(j.a)(p,2),y=f[0],_=f[1],v=Object(c.useState)(""),C=Object(j.a)(v,2),S=C[0],A=C[1],E=Object(c.useState)(""),P=Object(j.a)(E,2),k=P[0],I=P[1],D=Object(c.useState)(""),M=Object(j.a)(D,2),F=M[0],L=M[1],R=Object(c.useState)(""),T=Object(j.a)(R,2),q=T[0],z=T[1],B=Object(c.useState)(""),U=Object(j.a)(B,2),G=U[0],H=U[1],Q=Object(c.useState)(""),W=Object(j.a)(Q,2),J=W[0],V=W[1];return Object(a.jsx)("div",{className:N.a.container,children:Object(a.jsxs)("form",{action:"",className:N.a.form,onSubmit:function(e){e.preventDefault(),t()},children:[Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)("img",{src:"/img/simbolo-empresa.png",width:"50px",alt:"Empresa"}),Object(a.jsx)("h1",{style:{textAlign:"center",marginLeft:"8px"},children:"Empresa"})]}),Object(a.jsx)("strong",{style:{display:"block",textAlign:"center"},children:"(En construcci\xf3n: 2da etapa)"}),Object(a.jsxs)("fieldset",{className:N.a.fieldset,children:[Object(a.jsx)(x,{label:"N\xfamero de RUC",type:"number",value:i,onChange:w(r)}),Object(a.jsx)(x,{label:"Raz\xf3n Social",value:b,onChange:w(d)}),Object(a.jsx)(x,{label:"Actividad Econ\xf3mica",value:h,onChange:w(m)}),Object(a.jsx)(x,{label:"Tel\xe9fono Fijo",value:y,onChange:w(_)}),Object(a.jsx)(x,{label:"Direcci\xf3n",value:S,onChange:w(A)}),Object(a.jsx)(x,{label:"Distrito",value:k,onChange:w(I)}),Object(a.jsx)(x,{label:"Provincia",value:q,onChange:w(z)}),Object(a.jsx)(x,{label:"Departamento",placeholder:"Persona Expuesta Pol\xedticamente",value:F,onChange:w(L)}),Object(a.jsx)(x,{label:"Grupo Econ\xf3mico",value:G,onChange:w(H)}),Object(a.jsx)(x,{label:"Empresas vinculadas",placeholder:"Separa por comas 'A, B'",value:J,onChange:w(V)})]}),Object(a.jsx)(g,{type:"submit",style:{margin:"auto",width:"300px"},children:" Siguiente "})]})})},E=n(29),P=n.n(E),k=function(e){var t=e.children,n=e.to;return Object(a.jsx)(l.b,{to:n,className:P.a.link,children:t})},I=n(17),D=n.n(I),M=function(){return Object(a.jsxs)("div",{className:D.a.container,children:[Object(a.jsx)("img",{src:"/img/MensajeRevisaEmail.png",alt:"Mensaje: Revisa tu correo"}),Object(a.jsx)("img",{src:"/img/EmailMessage.png",alt:"Email enviado",className:D.a.img,width:"150"}),Object(a.jsx)("h1",{className:D.a.h1,children:"\xa1Tu cuenta en  iMoney ha sido creada con \xe9xito!"}),Object(a.jsx)("p",{children:"\xa1Hemos enviado tu usuario y contrase\xf1a para confirmar tu correo electr\xf3nico. Si no recibes este mensaje, por favor cont\xe1ctanos a trav\xe9s del WhatsApp en sitio."}),Object(a.jsxs)("span",{children:[Object(a.jsx)(k,{to:"/login",children:"Inicia Sesi\xf3n"})," despu\xe9s de verificarlo."]})]})},F=function(e){var t=e.img,n=void 0===t?"/img/Logo.png":t,c=Object(d.a)(e,["img"]);return Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("img",Object(b.a)({src:n,alt:"Logode iMoney",width:"300"},c))})},L=n(25),R=n.n(L),T=function(e){var t=e.show;return Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/registro/persona",children:Object(a.jsx)(C,{addSubmit:t})}),Object(a.jsx)(o.a,{path:"/registro/empresa",children:Object(a.jsx)(A,{addSubmit:t})})]})},q=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(c.useCallback)((function(){return s(!0)}),[]);return Object(a.jsxs)("div",{className:R.a.container,children:[Object(a.jsx)("header",{className:R.a.header,children:Object(a.jsx)(F,{})}),Object(a.jsx)("main",{children:n?Object(a.jsx)(M,{}):Object(a.jsx)(T,{show:i})})]})},z=n(18),B=n.n(z),U=function(e){var t=e.to,n=e.img,s=e.title,i=Object(c.useState)(!1),r=Object(j.a)(i,2),o=r[0],b=r[1];return Object(a.jsxs)(l.b,{to:t,onMouseOver:function(){return b(!0)},onMouseLeave:function(){return b(!1)},style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textDecoration:o?"underline":"none"},children:[Object(a.jsx)("img",{src:n,width:"160",height:"160",alt:"Bot\xf3n ir al registro de ".concat(s)}),Object(a.jsxs)("span",{children:[" ",s," "]})]})},G=function(){return Object(a.jsx)("div",{className:B.a.container,children:Object(a.jsxs)(o.c,{children:[Object(a.jsxs)(o.a,{exact:!0,path:"/registro",children:[Object(a.jsx)("h1",{className:B.a.title,children:"\xbfQu\xe9 tipo de usuario quieres registrar?"}),Object(a.jsxs)("div",{className:B.a.cards,children:[Object(a.jsx)(U,{to:"/registro/persona",img:"/img/personas.png",title:"Persona"}),Object(a.jsx)(U,{to:"/registro/empresa",img:"/img/empresa.png",title:"Empresa"})]})]}),Object(a.jsx)(o.a,{component:q})]})})},H=n(12),Q=n.n(H),W=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),r=Object(j.a)(i,2),l=r[0],o=r[1];return Object(a.jsx)("div",{className:Q.a.containerAll,children:Object(a.jsxs)("div",{className:Q.a.container,children:[Object(a.jsxs)("header",{className:Q.a.header,children:[Object(a.jsx)(F,{}),Object(a.jsx)("h1",{style:{textAlign:"center",marginTop:"1em"},children:"Iniciar sesi\xf3n"})]}),Object(a.jsxs)("form",{className:Q.a.form,onSubmit:function(e){e.preventDefault(),alert("Bienvenido a iMoney Per\xfa!")},children:[Object(a.jsx)(x,{label:"Correo",type:"email",value:n,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)(x,{label:"Contrase\xf1a",type:"password",value:l,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)(g,{type:"submit",style:{margin:"auto",width:"300px",fontSize:"16px"},children:"Entrar"})]}),Object(a.jsxs)("footer",{className:Q.a.footer,children:[Object(a.jsx)(k,{to:"/login",children:"\xbfOlvidaste tu contrase\xf1a?"}),Object(a.jsx)("span",{children:"\xbfNo tienes una cuenta?"}),Object(a.jsxs)("span",{children:["\xa1Crea una ",Object(a.jsx)(k,{to:"/registro",children:"aqu\xed"}),"!"]})]})]})})},J=n(30),V=n.n(J),X=function(){return Object(a.jsxs)("div",{className:V.a.container,children:[Object(a.jsx)(k,{to:"/registro",children:"1 Registro"}),Object(a.jsx)(k,{to:"/email",children:"2 Correo de confirmaci\xf3n"}),Object(a.jsx)(k,{to:"/cuenta",children:"3 Cuenta"}),Object(a.jsx)(k,{to:"/login",children:"4 Login"})]})},Y=n(31),Z=n.n(Y),K=function(){return Object(a.jsx)("div",{className:Z.a.container,children:Object(a.jsx)("main",{style:{width:"400px"},children:Object(a.jsxs)("table",{children:[Object(a.jsx)("tr",{children:Object(a.jsx)("td",{colSpan:3,style:{textAlign:"center",background:"#222A4F"},children:Object(a.jsx)(F,{img:"/img/LogoAzul.png",width:"250"})})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:{width:"50px"}}),Object(a.jsx)("td",{children:Object(a.jsx)("div",{style:{fontSize:"22px",fontWeight:"bold",margin:"8px auto 0 auto",textAlign:"center"},children:"Bienvenido Iv\xe1n"})}),Object(a.jsx)("td",{style:{width:"50px"}})]}),Object(a.jsx)("tr",{children:Object(a.jsx)("td",{colSpan:3,children:Object(a.jsx)("div",{style:{margin:"8px",border:"1px solid gray",borderRadius:"1em",padding:"8px",textAlign:"center"},children:"Confirma tu mail  para tu nueva experiencia en soluciones financieras"})})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:{width:"50px"}}),Object(a.jsx)("td",{style:{textAlign:"center"},children:Object(a.jsx)(g,{style:{margin:"auto"},children:Object(a.jsx)(l.b,{to:"/cuenta",style:{textDecoration:"none",color:"white"},children:"Confirmar Email"})})}),Object(a.jsx)("td",{style:{width:"50px"}})]}),Object(a.jsx)("tr",{children:Object(a.jsx)("td",{colSpan:3,style:{textAlign:"center"},children:Object(a.jsx)("div",{style:{marginTop:"16px",fontSize:"14px"},children:"Si el bot\xf3n de arriba no funciona, copia y pega este link en tu navegador:"})})}),Object(a.jsx)("tr",{children:Object(a.jsx)("td",{colSpan:3,style:{textAlign:"center"},children:Object(a.jsx)(k,{to:"/cuenta",children:"https://imoney-frontend.herokuapp.com/cuenta"})})})]})})})},$=n(19),ee=n.n($),te=function(e){var t=e.title,n=e.children,c=void 0===n?"":n,s=e.img;return Object(a.jsxs)("div",{className:ee.a.container,children:[Object(a.jsxs)("div",{className:ee.a.title,children:[" ",t," "]}),Object(a.jsx)("img",{className:ee.a.img,src:s,alt:"imagen"}),c]})},ne=n(20),ae=n.n(ne),ce=function(){return Object(a.jsxs)("div",{style:{display:"grid",gridGap:"1em",textAlign:"center",justifyContent:"center",alignItems:"center",width:"350px",placeItems:"center"},children:[Object(a.jsx)("h1",{style:{fontWeight:100},children:"Tu usuario ha sido registrado y confirmado"}),Object(a.jsx)("h2",{children:"\xa1Felicidades por unirte a iMoney!"}),Object(a.jsx)("img",{src:"/img/Check.png",alt:"Felicidades!"}),Object(a.jsx)(k,{to:"/",children:"(Ir a Inicio)"})]})},se=function(e){return function(t){return e(t.target.value)}},ie=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),r=Object(j.a)(i,2),l=r[0],o=r[1],b=Object(c.useState)(""),d=Object(j.a)(b,2),u=d[0],O=d[1],h=Object(c.useState)(""),m=Object(j.a)(h,2),p=m[0],f=m[1],y=Object(c.useState)(""),_=Object(j.a)(y,2),v=_[0],C=_[1];return Object(a.jsx)("div",{className:ae.a.container,children:n?Object(a.jsx)(ce,{}):Object(a.jsxs)("form",{action:"",className:ae.a.form,onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Registro de Cuenta Bancaria"}),Object(a.jsxs)("fieldset",{className:ae.a.fieldset,children:[Object(a.jsx)(x,{label:"Banco",value:u,onChange:se(O)}),Object(a.jsx)(x,{label:"N\xfamero de cuenta",type:"number",value:l,onChange:se(o)}),Object(a.jsx)(x,{label:"Tipo de cuenta",value:p,onChange:se(f)}),Object(a.jsx)(x,{label:"Moneda",value:v,onChange:se(C)}),Object(a.jsx)(x,{label:"N\xfamero CCI de cuenta",type:"number",value:l,onChange:se(o)})]}),Object(a.jsx)(g,{onClick:function(){return s(!0)},style:{margin:"auto",width:"300px"},children:" Siguiente "})]})})},re=n(32),le=n.n(re),oe=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(a.jsx)("div",{className:le.a.container,children:n?Object(a.jsx)(ie,{}):Object(a.jsxs)("form",{children:[Object(a.jsx)("h1",{children:"Panel de Control"}),Object(a.jsx)("h3",{children:"\xa1Bienvenido a iMoney Per\xfa!"}),Object(a.jsxs)(te,{title:"1 Completa tu perfil",img:"/img/paperCheck.png",children:[Object(a.jsx)("span",{children:"Ingresa tu informaci\xf3n y tus documentos para verificar tu identidad."}),Object(a.jsx)(g,{onClick:function(){return s(!0)},children:"Completar perfil"})]})]})})},je=function(){return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(o.a,{path:"/registro",component:G}),Object(a.jsx)(o.a,{path:"/login",component:W}),Object(a.jsx)(o.a,{path:"/email",component:K}),Object(a.jsx)(o.a,{path:"/cuenta",component:oe}),Object(a.jsx)(o.a,{exact:!0,path:"/",component:X})]})},be=(n(46),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))});r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(je,{})}),document.getElementById("root")),be()}],[[47,1,2]]]);
//# sourceMappingURL=main.0c1bc3f8.chunk.js.map