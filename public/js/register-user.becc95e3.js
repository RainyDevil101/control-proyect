"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[752],{2820:function(e,s,t){var a=t(4870),r=t(3396),n=t(7139);const o=e=>{const s=(0,n.oR)(),t=(0,a.iH)(""),o=(0,a.iH)(!1),l=(e="")=>{const a=(0,r.Fl)((()=>s.getters["destinations/getDestinationsByTerm"](e)));t.value=a.value,t.value.length>0&&(o.value=!0)};l(e);const i=(0,a.iH)(""),u=(0,a.iH)(!1),d=(e="")=>{const t=(0,r.Fl)((()=>s.getters["locations/getLocationsByTerm"](e)));i.value=t.value,i.value.length>0&&(u.value=!0)};d(e);const c=(0,a.iH)(""),p=(0,a.iH)(!1),m=(e="")=>{const t=(0,r.Fl)((()=>s.getters["users/getUserByTerm"](e)));c.value=t.value,c.value.length>0&&(p.value=!0)};m(e);const v=(0,a.iH)(""),g=(0,a.iH)(!1),w=(e="")=>{const t=(0,r.Fl)((()=>s.getters["divisions/getDivisionsByTerm"](e)));v.value=t.value,v.value.length>0&&(g.value=!0)};return w(e),{destinations:t,showDestinations:o,destinationTerm:l,getStatusDestination:(0,r.Fl)((()=>s.getters["destinations/getStatus"])),destinationUpdate:(0,r.Fl)((()=>s.getters["destinations/getUpdateDestination"])),destinationById:(0,r.Fl)((()=>s.getters["destinations/changeDestinationId"])),destinationIdStatus:(0,r.Fl)((()=>s.getters["destinations/getDestinationIdStatus"])),locations:i,showLocations:u,locationTerm:d,getStatusLocation:(0,r.Fl)((()=>s.getters["locations/getStatus"])),locationUpdate:(0,r.Fl)((()=>s.getters["locations/getUpdateLocation"])),locationById:(0,r.Fl)((()=>s.getters["locations/changeLocationId"])),locationIdStatus:(0,r.Fl)((()=>s.getters["locations/getLocationIdStatus"])),users:c,showUsers:p,userTerm:m,getStatusLocation:(0,r.Fl)((()=>s.getters["users/getStatus"])),userUpdate:(0,r.Fl)((()=>s.getters["users/getUpdateUser"])),userById:(0,r.Fl)((()=>s.getters["users/changeUserId"])),userIdStatus:(0,r.Fl)((()=>s.getters["users/getUserIdStatus"])),divisions:v,showDivisions:g,divisionTerm:w,getStatusDivision:(0,r.Fl)((()=>s.getters["divisions/getStatus"])),divisionUpdate:(0,r.Fl)((()=>s.getters["divisions/getUpdateDivision"])),divisionById:(0,r.Fl)((()=>s.getters["divisions/changeDivisionId"])),divisionIdStatus:(0,r.Fl)((()=>s.getters["divisions/getDivisionIdStatus"]))}};s["Z"]=o},6267:function(e,s,t){t.d(s,{Z:function(){return p}});var a=t(3396);const r=e=>((0,a.dD)("data-v-3b6b4a29"),e=e(),(0,a.Cn)(),e),n={class:"loader-rev"},o=r((()=>(0,a._)("div",null,null,-1))),l=[o];function i(e,s,t,r,o,i){return(0,a.wg)(),(0,a.iD)("div",n,l)}var u={},d=t(89);const c=(0,d.Z)(u,[["render",i],["__scopeId","data-v-3b6b4a29"]]);var p=c},909:function(e,s,t){t.r(s),t.d(s,{default:function(){return Fe}});var a=t(3396),r=t(9242),n=t(2268);const o=e=>((0,a.dD)("data-v-da78d786"),e=e(),(0,a.Cn)(),e),l={key:0,class:"update-user"},i={key:1,class:"loader-wrapper"},u={key:2,class:"wrapper-users"},d={class:"users"},c=o((()=>(0,a._)("div",{class:"header"},[(0,a._)("h1",null,"Usuarios")],-1))),p={key:0,class:"body-user"},m={key:1,class:"not-register"},v=o((()=>(0,a._)("h1",null,"NO HAY REGISTROS",-1))),g=[v],w={class:"button-wrapper"},h={class:"create-wrapper"},f={class:"create"},U=o((()=>(0,a._)("div",{class:"header"},[(0,a._)("h1",null,"Registrar usuario")],-1))),_={class:"form form-name"},y=o((()=>(0,a._)("p",null,"Nombre",-1))),D={class:"form form-name"},b=o((()=>(0,a._)("p",null,"Nombre",-1))),F={class:"form form-rut"},S=o((()=>(0,a._)("p",null,"Rut",-1))),T={class:"form form-email"},I=o((()=>(0,a._)("p",null,"Email",-1))),k={class:"form form-password"},x=o((()=>(0,a._)("p",null,"Contraseña",-1))),H={class:"form form-password"},E=o((()=>(0,a._)("p",null,"Confirmar contraseña",-1))),C={class:"form form-position"},P=o((()=>(0,a._)("p",null,"Cargo",-1))),R={class:"form form-division"},L=o((()=>(0,a._)("p",null,"División",-1))),O=["value"],V={class:"form form-role"},N=o((()=>(0,a._)("p",null,"Rol de usuario",-1))),A=["value"],Z=o((()=>(0,a._)("div",{class:"button-wrapper"},[(0,a._)("button",{type:"submit",class:"btn btn-warning back"},"CREAR")],-1)));function B(e,s,t,o,v,B){const M=(0,a.up)("update-user"),z=(0,a.up)("loader"),$=(0,a.up)("users");return(0,a.wg)(),(0,a.iD)(a.HY,null,[!0===o.userUpdate?((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(M,{"onOn:close":o.onShowUpdateUser},null,8,["onOn:close"])])):(0,a.kq)("",!0),"CARGANDO"===o.getStatusUser?((0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(z)])):((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",d,[c,!0===o.showUsers?((0,a.wg)(),(0,a.iD)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.users,(e=>((0,a.wg)(),(0,a.j4)($,{key:e,user:e,"onOn:open":o.onShowUpdateUser},null,8,["user","onOn:open"])))),128))])):((0,a.wg)(),(0,a.iD)("div",m,g)),(0,a._)("div",w,[(0,a._)("button",{type:"button",onClick:s[0]||(s[0]=s=>e.$router.push({name:"select-register"})),class:"btn btn-warning back"}," Volver ")])]),(0,a._)("div",h,[(0,a._)("div",f,[(0,a._)("form",{onSubmit:s[10]||(s[10]=(0,r.iM)(((...e)=>o.onSubmit&&o.onSubmit(...e)),["prevent"]))},[U,(0,a._)("div",_,[y,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Nombre","onUpdate:modelValue":s[1]||(s[1]=e=>o.userForm.fullname=e),maxlength:"60"},null,512),[[r.nr,o.userForm.fullname]])]),(0,a._)("div",D,[b,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Apellido","onUpdate:modelValue":s[2]||(s[2]=e=>o.userForm.fulllastname=e),maxlength:"60"},null,512),[[r.nr,o.userForm.fulllastname]])]),(0,a._)("div",F,[S,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Ej: 12.345.678-k","onUpdate:modelValue":s[3]||(s[3]=e=>o.userForm.rut=e),maxlength:"11"},null,512),[[r.nr,o.userForm.rut]])]),(0,a._)("div",T,[I,(0,a.wy)((0,a._)("input",{type:"email",placeholder:"ejemplo@gmail.com","onUpdate:modelValue":s[4]||(s[4]=e=>o.userForm.email=e),maxlength:"50"},null,512),[[r.nr,o.userForm.email]])]),(0,a._)("div",k,[x,(0,a.wy)((0,a._)("input",{type:"password",maxlength:"70","onUpdate:modelValue":s[5]||(s[5]=e=>o.userForm.passwordT=e)},null,512),[[r.nr,o.userForm.passwordT]])]),(0,a._)("div",H,[E,(0,a.wy)((0,a._)("input",{type:"password",maxlength:"70","onUpdate:modelValue":s[6]||(s[6]=e=>o.userForm.confirmPassword=e)},null,512),[[r.nr,o.userForm.confirmPassword]])]),(0,a._)("div",C,[P,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":s[7]||(s[7]=e=>o.userForm.position=e),maxlength:"50"},null,512),[[r.nr,o.userForm.position]])]),(0,a._)("div",R,[L,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":s[8]||(s[8]=e=>o.userForm.users_divisions=e),"aria-label":"Default select example"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.divisions,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.id},(0,n.zw)(e.name),9,O)))),128))],512),[[r.bM,o.userForm.users_divisions]])]),(0,a._)("div",V,[N,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":s[9]||(s[9]=e=>o.userForm.role=e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.roles,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.name,value:e.name},(0,n.zw)(e.name),9,A)))),128))],512),[[r.bM,o.userForm.role]])]),Z],32)])])]))],64)}var M=t(4870),z=t(7139),$=t(2492),Y=t.n($),G=t(6267);const j={class:"user"};function K(e,s,t,r,o,l){return(0,a.wg)(),(0,a.iD)("div",{onClick:s[0]||(s[0]=s=>e.$emit("on:open",{id:r.id})),class:"user-container"},[(0,a._)("span",j,(0,n.zw)(r.user.fullname),1)])}var q={emits:["on:open"],props:{user:{type:Object,required:!0}},setup(e){const s=(0,M.iH)(e.user),t=e.user.id;return{user:s,id:t}}},W=t(89);const J=(0,W.Z)(q,[["render",K],["__scopeId","data-v-7d482e11"]]);var Q=J,X=t(6322);const ee=()=>{const e=(0,M.iH)(!0),s=(0,M.iH)(),t=(0,M.iH)(!1),a=(0,M.iH)(!0),r=(0,M.iH)(!1),n=(0,M.iH)(""),o=(0,M.iH)(),l=(0,M.iH)(!0),i=(0,M.iH)(!1),u=async a=>{if(e.value=!0,""===a.name||!a.name)return e.value="Debe llenar los campos",s.value="",{errorsPost:e,location:location,nicePost:t};{const{name:n}=a;try{const a=await X.Z.post("/api/user",{name:n},{headers:{"x-token":localStorage.getItem("token")}});return s.value=a.data.user,t.value=!0,e.value=!1,{errorsPost:e,nicePost:t,user:s}}catch(r){if(r.response.data.msg)return e.value=r.response.data.msg,s.value=null,t.value=!1,{errorsPost:e,nicePost:t,user:s};if(r.response.data.errors){const a=[],n=r.response.data.errors;for(const e of n)a.push(" "+e.msg);return e.value=a,s.value=null,t.value=!1,{errorsPost:e,nicePost:t,user:s}}return s.value=resp.data.code,e.value=!1,t.value=!0,{errorsPost:e,nicePost:t,user:s}}}},d=async(e,s,t)=>{if(a.value=!0,!s||!e||!t)return r.value=!1,a.value="Complete los campos",{niceUpdate:r,errorsUpdate:a};if(0===s.fullname.length||0===s.fulllastname.length||0===s.rut.length||0===s.email.length||0===s.position.length||0===s.role.length)return r.value=!1,a.value="Complete los campos",{niceUpdate:r,errorsUpdate:a};if(e.passwordT!==e.confirmPasswordT)return r.value=!1,a.value="Las contraseñas no coinciden",{niceUpdate:r,errorsUpdate:a};e.passwordT.length>0&&(s.password=e.passwordT);try{const{data:e}=await X.Z.put(`/api/user/${t}`,{user:s},{headers:{"x-token":localStorage.getItem("token")}});return r.value=!0,a.value=!1,{niceUpdate:r,errorsUpdate:a}}catch(n){if(n.response.data.msg)return a.value=n.response.data.msg,{niceUpdate:r,errorsUpdate:a};if(n.response.data.errors){const e=[],s=n.response.data.errors;for(const t of s)e.push(" "+t.msg);return a.value=e,{niceUpdate:r,errorsUpdate:a}}return{niceUpdate:r,errorsUpdate:a}}},c=async(e="")=>{if(""===e||!e)return l.value="No existe",{errorsDelete:l,niceDelete:i};try{const s=await X.Z["delete"](`/api/user/${e}`,{headers:{"x-token":localStorage.getItem("token")}});return o.value=s.data,i.value=!0,l.value=!1,{errorsDelete:l,niceDelete:i,idDelete:o}}catch(s){if(s.response.data.msg)return l.value=s.response.data.msg,{niceDelete:i,errorsDelete:l};if(s.response.data.errors){const e=[],t=s.response.data.errors;for(const s of t)e.push(" "+s.msg);return l.value=e,{niceDelete:i,errorsDelete:l}}return{niceDelete:i,errorsDelete:l}}};return{postUser:u,errorsPost:e,user:s,nicePost:t,updateUser:d,errorsUpdate:a,niceUpdate:r,passwordT:n,deleteUser:c,errorsDelete:l,idDelete:o,niceDelete:i}};var se=ee,te=t(2820);const ae=e=>((0,a.dD)("data-v-c7877de6"),e=e(),(0,a.Cn)(),e),re={class:"modal-container"},ne={class:"update-wrapper"},oe={class:"input-change-name margin-item"},le={class:"input-change-name margin-item"},ie={class:"input-change-name margin-item"},ue={class:"input-change-name margin-item"},de={class:"input-change-name margin-item"},ce={class:"input-change-name margin-item"},pe={class:"input-change-name margin-item"},me={class:"input-change-name margin-item"},ve=["value"],ge={class:"update-button"},we=ae((()=>(0,a._)("button",{class:"btn btn-warning",type:"submit"}," Actualizar ",-1)));function he(e,s,t,o,l,i){return(0,a.wg)(),(0,a.iD)("div",{class:"modal-background fade-in",onClick:s[10]||(s[10]=(0,r.iM)((s=>e.$emit("on:close")),["self"]))},[(0,a._)("div",re,[(0,a._)("div",ne,[(0,a._)("form",{onSubmit:s[9]||(s[9]=(0,r.iM)(((...e)=>o.onSubmit&&o.onSubmit(...e)),["prevent"]))},[(0,a._)("div",oe,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Nombres","onUpdate:modelValue":s[0]||(s[0]=e=>o.user.fullname=e),maxlength:"60"},null,512),[[r.nr,o.user.fullname]])]),(0,a._)("div",le,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Apellidos","onUpdate:modelValue":s[1]||(s[1]=e=>o.user.fulllastname=e),maxlength:"60"},null,512),[[r.nr,o.user.fulllastname]])]),(0,a._)("div",ie,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Rut",maxlength:"60","onUpdate:modelValue":s[2]||(s[2]=e=>o.user.rut=e)},null,512),[[r.nr,o.user.rut]])]),(0,a._)("div",ue,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Email",maxlength:"60","onUpdate:modelValue":s[3]||(s[3]=e=>o.user.email=e)},null,512),[[r.nr,o.user.email]])]),(0,a._)("div",de,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Email",maxlength:"60","onUpdate:modelValue":s[4]||(s[4]=e=>o.user.position=e)},null,512),[[r.nr,o.user.position]])]),(0,a._)("div",ce,[(0,a.wy)((0,a._)("input",{type:"password",placeholder:"Contraseña","onUpdate:modelValue":s[5]||(s[5]=e=>o.userUpdate.passwordT=e),maxlength:"60"},null,512),[[r.nr,o.userUpdate.passwordT]])]),(0,a._)("div",pe,[(0,a.wy)((0,a._)("input",{type:"password",placeholder:"Confirme contraseña","onUpdate:modelValue":s[6]||(s[6]=e=>o.userUpdate.confirmPasswordT=e),maxlength:"60"},null,512),[[r.nr,o.userUpdate.confirmPasswordT]])]),(0,a._)("div",me,[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":s[7]||(s[7]=e=>o.user.role=e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.roles,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.name,value:e.name},(0,n.zw)(e.name),9,ve)))),128))],512),[[r.bM,o.user.role]])]),(0,a._)("div",ge,[we,(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:s[8]||(s[8]=(...e)=>o.onDelete&&o.onDelete(...e))}," Eliminar ")])],32)])])])}var fe={components:{Loader:G.Z},emits:["on:close"],setup(){const e=(0,z.oR)(),{userById:s}=(0,te.Z)(),t=(0,M.iH)(""),a=(0,M.iH)(""),r=(0,M.iH)(""),n=(0,M.iH)([{name:"ADMIN_ROLE"},{name:"OPERATOR_ROLE"},{name:"PLANNER_ROLE"}]),{deleteUser:o,updateUser:l}=se(),i=(0,M.iH)({passwordT:"",confirmPasswordT:""});return t.value=s.value.userToChange,a.value=s.value.userIdToChange,r.value=s.value.userToChange.name,{userById:s,userUpdate:i,userId:a,user:t,userName:r,roles:n,onSubmit:async()=>{new(Y())({title:"Espere por favor",allowOutsideClick:!1}),Y().showLoading();const{errorsUpdate:s,niceUpdate:r}=await l(i.value,t.value,a.value);!1!==r.value?(await e.dispatch("users/loadUsers"),Y().fire("Guardado","Usuario actualizado con éxito","success").then((function(e){location.reload()}))):Y().fire("Error",`${s.value}.`,"error")},onDelete:async()=>{const{isConfirmed:s}=await Y().fire({title:"¿Estás seguro?",text:"No se podrá recuperar una vez borrado",showDenyButton:!0,confirmButtonText:"Estoy seguro"});if(s){new(Y())({title:"Espere por favor",allowOutsideClick:!1}),Y().showLoading();const{idDelete:s,errorsDelete:t,niceDelete:r}=await o(a.value);!0===r.value&&(await e.dispatch("users/loadUsers"),Y().fire("Eliminado","","success").then((function(e){location.reload()})))}}}}};const Ue=(0,W.Z)(fe,[["render",he],["__scopeId","data-v-c7877de6"]]);var _e=Ue,ye=t(4207),De={components:{users:Q,Loader:G.Z,UpdateUser:_e},setup(){const e=(0,z.oR)(),{getUsers:s}=(0,ye.Z)(),{postUser:t}=se(),a=(0,M.iH)([{name:"ADMIN_ROLE"},{name:"OPERATOR_ROLE"},{name:"PLANNER_ROLE"}]),{userTerm:r,getStatusUser:n,divisions:o,users:l,userUpdate:i,userIdStatus:u,showUsers:d}=(0,te.Z)(),c=(0,M.iH)({fullname:"TESTTTT",fulllastname:"TESTING",passwordT:"testing",confirmPassword:"testing",rut:"14.279.370-9",email:"testing@gmail.com",users_divisions:"1000",role:"ADMIN_ROLE",position:"Test"});return{userForm:c,postUser:t,divisions:o,users:l,roles:a,getStatusUser:n,userTerm:r,userUpdate:i,userIdStatus:u,showUsers:d,onSubmit:async()=>{new(Y())({title:"Espere por favor",allowOutsideClick:!1}),Y().showLoading();const{errorsPost:e,user:s,nicePost:a}=await t(c.value);!1!==a.value?Y().fire("Guardado","Usuario registrado con éxito","success").then((function(e){location.reload()})):Y().fire("Error",`${e.value}.`,"error")},onShowUpdateUser:t=>!1===i.value?(e.dispatch("users/changeUserId",t),void e.dispatch("users/changeUserUpdate",!0)):(s(),void e.dispatch("users/changeUserUpdate",!1))}}};const be=(0,W.Z)(De,[["render",B],["__scopeId","data-v-da78d786"]]);var Fe=be}}]);
//# sourceMappingURL=register-user.becc95e3.js.map