"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[853],{4793:function(e,a,n){n.r(a),n.d(a,{default:function(){return y}});var r=n(3396),o=n(9242);const s=e=>((0,r.dD)("data-v-15e689a4"),e=e(),(0,r.Cn)(),e),t={class:"wrapper"},u={class:"login"},l=s((()=>(0,r._)("div",{class:"selector"},[(0,r._)("h4",null,"INICIAR SESIÓN")],-1))),i={class:"forum-mail","data-validate":"Enter username"},d={class:"forum-password","data-validate":"Enter password"},c={class:"in-forum"},p=["disabled"],m=s((()=>(0,r._)("div",{class:"change-forum mt-5"},[(0,r._)("p",null,"Si no tienes cuenta, ponte en contacto con el administrador.")],-1)));function v(e,a,n,s,v,b){return(0,r.wg)(),(0,r.iD)("div",t,[(0,r._)("div",u,[l,(0,r._)("form",{class:"login-forum",onSubmit:a[3]||(a[3]=(0,o.iM)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,r._)("div",i,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>s.userForm.rut=e),type:"text",class:"input-forum",placeholder:"Rut Ej: 12.345.678-9",required:""},null,512),[[o.nr,s.userForm.rut]])]),(0,r._)("div",d,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>s.userForm.passwordT=e),type:"password",class:"input-forum",placeholder:"Contraseña",required:""},null,512),[[o.nr,s.userForm.passwordT]])]),(0,r._)("div",c,[(0,r._)("button",{disabled:!0===s.loading,class:"login-boton"},"Ingresar",8,p),(0,r._)("button",{type:"button",onClick:a[2]||(a[2]=(...e)=>s.onBack&&s.onBack(...e)),class:"login-boton"}," Volver ")]),m],32)])])}var b=n(4870),f=n(678),_=n(4207),w=n(2492),g=n.n(w),k={setup(){const e=(0,f.tv)(),{loginUser:a}=(0,_.Z)(),n=(0,b.iH)({rut:"19.268.695-4",passwordT:"HERRERACARRENO"}),r=(0,b.iH)(!1);return{userForm:n,loading:r,onSubmit:async()=>{r.value=!0;const{ok:o,errors:s}=await a(n.value);o?e.push({name:"home-view"}):(g().fire("Error",`${s}.`,"error"),r.value=!1)},onBack:async()=>{e.push({name:"select-login"})}}}},h=n(89);const E=(0,h.Z)(k,[["render",v],["__scopeId","data-v-15e689a4"]]);var y=E}}]);
//# sourceMappingURL=front-auth.4c4ce5b4.js.map