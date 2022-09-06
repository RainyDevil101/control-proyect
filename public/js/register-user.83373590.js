"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[752],{2820:function(e,s,t){var r=t(4870),a=t(3396),n=t(7139);const o=e=>{const s=(0,n.oR)(),t=(0,r.iH)(""),o=(0,r.iH)(!1),l=(e="")=>{const r=(0,a.Fl)((()=>s.getters["destinations/getDestinationsByTerm"](e)));t.value=r.value,t.value.length>0&&(o.value=!0)};l(e);const i=(0,r.iH)(""),u=(0,r.iH)(!1),d=(e="")=>{const t=(0,a.Fl)((()=>s.getters["users/getUserByTerm"](e)));i.value=t.value,i.value.length>0&&(u.value=!0)};d(e);const p=(0,r.iH)(""),c=(0,r.iH)(!1),m=(e="")=>{const t=(0,a.Fl)((()=>s.getters["divisions/getDivisionsByTerm"](e)));p.value=t.value,p.value.length>0&&(c.value=!0)};return m(e),{destinations:t,showDestinations:o,destinationTerm:l,getStatusDestination:(0,a.Fl)((()=>s.getters["destinations/getStatus"])),destinationUpdate:(0,a.Fl)((()=>s.getters["destinations/getUpdateDestination"])),destinationById:(0,a.Fl)((()=>s.getters["destinations/changeDestinationId"])),destinationIdStatus:(0,a.Fl)((()=>s.getters["destinations/getDestinationIdStatus"])),users:i,showUsers:u,userTerm:d,getStatusLocation:(0,a.Fl)((()=>s.getters["users/getStatus"])),userUpdate:(0,a.Fl)((()=>s.getters["users/getUpdateUser"])),userById:(0,a.Fl)((()=>s.getters["users/changeUserId"])),userIdStatus:(0,a.Fl)((()=>s.getters["users/getUserIdStatus"])),divisions:p,showDivisions:c,divisionTerm:m,getStatusDivision:(0,a.Fl)((()=>s.getters["divisions/getStatus"])),divisionUpdate:(0,a.Fl)((()=>s.getters["divisions/getUpdateDivision"])),divisionById:(0,a.Fl)((()=>s.getters["divisions/changeDivisionId"])),divisionIdStatus:(0,a.Fl)((()=>s.getters["divisions/getDivisionIdStatus"]))}};s["Z"]=o},6267:function(e,s,t){t.d(s,{Z:function(){return c}});var r=t(3396);const a=e=>((0,r.dD)("data-v-3b6b4a29"),e=e(),(0,r.Cn)(),e),n={class:"loader-rev"},o=a((()=>(0,r._)("div",null,null,-1))),l=[o];function i(e,s,t,a,o,i){return(0,r.wg)(),(0,r.iD)("div",n,l)}var u={},d=t(89);const p=(0,d.Z)(u,[["render",i],["__scopeId","data-v-3b6b4a29"]]);var c=p},1301:function(e,s,t){t.r(s),t.d(s,{default:function(){return Fe}});var r=t(3396),a=t(9242),n=t(2268);const o=e=>((0,r.dD)("data-v-e46e8ba6"),e=e(),(0,r.Cn)(),e),l={key:0,class:"update-user"},i={key:1,class:"loader-wrapper"},u={key:2,class:"wrapper-users"},d={class:"users"},p=o((()=>(0,r._)("div",{class:"header"},[(0,r._)("h1",null,"Usuarios")],-1))),c={class:"search"},m={key:0,class:"body-user"},v={key:1,class:"not-register"},g=o((()=>(0,r._)("h1",null,"NO HAY REGISTROS",-1))),w=[g],f={class:"create-wrapper"},h={class:"create"},U=o((()=>(0,r._)("div",{class:"header"},[(0,r._)("h1",null,"Registrar usuario")],-1))),_={class:"form form-name"},y=o((()=>(0,r._)("p",null,"Nombres",-1))),D={class:"form form-name"},b=o((()=>(0,r._)("p",null,"Apellidos",-1))),F={class:"form form-rut"},x=o((()=>(0,r._)("p",null,"Rut",-1))),S={class:"form form-email"},T=o((()=>(0,r._)("p",null,"Email",-1))),k={class:"form form-password"},H=o((()=>(0,r._)("p",null,"Contraseña",-1))),I={class:"form form-password"},P=o((()=>(0,r._)("p",null,"Confirmar contraseña",-1))),C={class:"form form-position"},E=o((()=>(0,r._)("p",null,"Cargo",-1))),R={class:"form form-division"},O=o((()=>(0,r._)("p",null,"División",-1))),V=["value"],L={class:"form form-role"},A=o((()=>(0,r._)("p",null,"Rol de usuario",-1))),N=["value"],Z={class:"button-wrapper"},B=o((()=>(0,r._)("button",{type:"submit",class:"buttons-styles"},"CREAR",-1)));function z(e,s,t,o,g,z){const M=(0,r.up)("update-user"),Y=(0,r.up)("loader"),$=(0,r.up)("users");return(0,r.wg)(),(0,r.iD)(r.HY,null,[!0===o.userUpdate?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(M,{"onOn:close":o.onShowUpdateUser},null,8,["onOn:close"])])):(0,r.kq)("",!0),"CARGANDO"===o.getStatusUser?((0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(Y)])):((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",d,[p,(0,r._)("div",c,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Buscar usuario","onUpdate:modelValue":s[0]||(s[0]=e=>o.term=e)},null,512),[[a.nr,o.term]])]),!0===o.showUsers?((0,r.wg)(),(0,r.iD)("div",m,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.users,(e=>((0,r.wg)(),(0,r.j4)($,{key:e,user:e,"onOn:open":o.onShowUpdateUser},null,8,["user","onOn:open"])))),128))])):((0,r.wg)(),(0,r.iD)("div",v,w))]),(0,r._)("div",f,[(0,r._)("div",h,[(0,r._)("form",{onSubmit:s[11]||(s[11]=(0,a.iM)(((...e)=>o.onSubmit&&o.onSubmit(...e)),["prevent"]))},[U,(0,r._)("div",_,[y,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Nombres","onUpdate:modelValue":s[1]||(s[1]=e=>o.userForm.fullname=e),maxlength:"60"},null,512),[[a.nr,o.userForm.fullname]])]),(0,r._)("div",D,[b,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Apellidos","onUpdate:modelValue":s[2]||(s[2]=e=>o.userForm.fulllastname=e),maxlength:"60"},null,512),[[a.nr,o.userForm.fulllastname]])]),(0,r._)("div",F,[x,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Ej: 12.345.678-k","onUpdate:modelValue":s[3]||(s[3]=e=>o.userForm.rut=e),maxlength:"12"},null,512),[[a.nr,o.userForm.rut]])]),(0,r._)("div",S,[T,(0,r.wy)((0,r._)("input",{type:"email",placeholder:"ejemplo@gmail.com","onUpdate:modelValue":s[4]||(s[4]=e=>o.userForm.email=e),maxlength:"50"},null,512),[[a.nr,o.userForm.email]])]),(0,r._)("div",k,[H,(0,r.wy)((0,r._)("input",{type:"password",maxlength:"70","onUpdate:modelValue":s[5]||(s[5]=e=>o.userForm.passwordT=e)},null,512),[[a.nr,o.userForm.passwordT]])]),(0,r._)("div",I,[P,(0,r.wy)((0,r._)("input",{type:"password",maxlength:"70","onUpdate:modelValue":s[6]||(s[6]=e=>o.userForm.confirmPassword=e)},null,512),[[a.nr,o.userForm.confirmPassword]])]),(0,r._)("div",C,[E,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":s[7]||(s[7]=e=>o.userForm.position=e),maxlength:"50"},null,512),[[a.nr,o.userForm.position]])]),(0,r._)("div",R,[O,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":s[8]||(s[8]=e=>o.userForm.users_divisions=e),"aria-label":"Default select example"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.divisions,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.id},(0,n.zw)(e.name),9,V)))),128))],512),[[a.bM,o.userForm.users_divisions]])]),(0,r._)("div",L,[A,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":s[9]||(s[9]=e=>o.userForm.role=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.roles,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.name,value:e.name},(0,n.zw)(e.name),9,N)))),128))],512),[[a.bM,o.userForm.role]])]),(0,r._)("div",Z,[B,(0,r._)("button",{type:"button",onClick:s[10]||(s[10]=s=>e.$router.push({name:"select-register"})),class:"buttons-styles"}," Volver ")])],32)])])]))],64)}var M=t(4870),Y=t(7139),$=t(2492),j=t.n($),G=t(6267);const K={class:"user"};function q(e,s,t,a,o,l){return(0,r.wg)(),(0,r.iD)("div",{onClick:s[0]||(s[0]=s=>e.$emit("on:open",{id:a.id})),class:"user-container"},[(0,r._)("span",K,(0,n.zw)(a.user.fullname)+" "+(0,n.zw)(a.user.fulllastname),1)])}var W={emits:["on:open"],props:{user:{type:Object,required:!0}},setup(e){const s=(0,M.iH)(e.user),t=e.user.id;return{user:s,id:t}}},J=t(89);const Q=(0,J.Z)(W,[["render",q],["__scopeId","data-v-febac9d4"]]);var X=Q,ee=t(6322);const se=()=>{const e=(0,M.iH)(!0),s=(0,M.iH)(),t=(0,M.iH)(!1),r=(0,M.iH)(!0),a=(0,M.iH)(!1),n=(0,M.iH)(""),o=(0,M.iH)(),l=(0,M.iH)(!0),i=(0,M.iH)(!1),u=async r=>{if(e.value=!0,""===r.fullname||""===r.fulllastname||""===r.rut||""===r.email||""===r.users_divisions||""===r.passwordT||""===r.confirmPassword||""===r.position||""===r.role)return e.value="Debe llenar los campos",{errorsPost:e,user:s,nicePost:t};{const n=r.fullname,o=r.fulllastname,l=r.passwordT,i=r.email,u=r.rut,d=r.users_divisions,p=r.position,c=r.role;try{const r=await ee.Z.post("/api/user",{fullname:n,fulllastname:o,passwordT:l,email:i,rut:u,users_divisions:d,position:p,role:c},{headers:{"x-token":localStorage.getItem("token")}});return s.value=r.data.user,t.value=!0,e.value=!1,{errorsPost:e,nicePost:t,user:s}}catch(a){if(a.response.data.msg)return e.value=a.response.data.msg,s.value=null,t.value=!1,{errorsPost:e,nicePost:t,user:s};if(a.response.data.errors){const r=[],n=a.response.data.errors;for(const e of n)r.push(" "+e.msg);return e.value=r,s.value=null,t.value=!1,{errorsPost:e,nicePost:t,user:s}}return s.value=resp.data.code,e.value=!1,t.value=!0,{errorsPost:e,nicePost:t,user:s}}}},d=async(e,s,t)=>{if(r.value=!0,!s||!e||!t)return a.value=!1,r.value="Complete los campos",{niceUpdate:a,errorsUpdate:r};if(0===s.fullname.length||0===s.fulllastname.length||0===s.rut.length||0===s.email.length||0===s.position.length||0===s.role.length)return a.value=!1,r.value="Complete los campos",{niceUpdate:a,errorsUpdate:r};if(e.passwordT!==e.confirmPasswordT)return a.value=!1,r.value="Las contraseñas no coinciden",{niceUpdate:a,errorsUpdate:r};e.passwordT.length>0&&(s.password=e.passwordT);try{const{data:e}=await ee.Z.put(`/api/user/${t}`,{user:s},{headers:{"x-token":localStorage.getItem("token")}});return a.value=!0,r.value=!1,{niceUpdate:a,errorsUpdate:r}}catch(n){if(n.response.data.msg)return r.value=n.response.data.msg,{niceUpdate:a,errorsUpdate:r};if(n.response.data.errors){const e=[],s=n.response.data.errors;for(const t of s)e.push(" "+t.msg);return r.value=e,{niceUpdate:a,errorsUpdate:r}}return{niceUpdate:a,errorsUpdate:r}}},p=async(e="")=>{if(""===e||!e)return l.value="No existe",{errorsDelete:l,niceDelete:i};try{const s=await ee.Z["delete"](`/api/user/${e}`,{headers:{"x-token":localStorage.getItem("token")}});return o.value=s.data,i.value=!0,l.value=!1,{errorsDelete:l,niceDelete:i,idDelete:o}}catch(s){if(s.response.data.msg)return l.value=s.response.data.msg,{niceDelete:i,errorsDelete:l};if(s.response.data.errors){const e=[],t=s.response.data.errors;for(const s of t)e.push(" "+s.msg);return l.value=e,{niceDelete:i,errorsDelete:l}}return{niceDelete:i,errorsDelete:l}}};return{postUser:u,errorsPost:e,user:s,nicePost:t,updateUser:d,errorsUpdate:r,niceUpdate:a,passwordT:n,deleteUser:p,errorsDelete:l,idDelete:o,niceDelete:i}};var te=se,re=t(2820);const ae=e=>((0,r.dD)("data-v-360e652d"),e=e(),(0,r.Cn)(),e),ne={class:"modal-container"},oe={class:"update-wrapper"},le={class:"input-change-name margin-item"},ie={class:"input-change-name margin-item"},ue={class:"input-change-name margin-item"},de={class:"input-change-name margin-item"},pe={class:"input-change-name margin-item"},ce={class:"input-change-name margin-item"},me={class:"input-change-name margin-item"},ve={class:"input-change-name margin-item"},ge=["value"],we={class:"update-button"},fe=ae((()=>(0,r._)("button",{class:"btn btn-warning",type:"submit"}," Actualizar ",-1)));function he(e,s,t,o,l,i){return(0,r.wg)(),(0,r.iD)("div",{class:"modal-background fade-in",onClick:s[10]||(s[10]=(0,a.iM)((s=>e.$emit("on:close")),["self"]))},[(0,r._)("div",ne,[(0,r._)("div",oe,[(0,r._)("form",{onSubmit:s[9]||(s[9]=(0,a.iM)(((...e)=>o.onSubmit&&o.onSubmit(...e)),["prevent"]))},[(0,r._)("div",le,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Nombres","onUpdate:modelValue":s[0]||(s[0]=e=>o.user.fullname=e),maxlength:"60"},null,512),[[a.nr,o.user.fullname]])]),(0,r._)("div",ie,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Apellidos","onUpdate:modelValue":s[1]||(s[1]=e=>o.user.fulllastname=e),maxlength:"60"},null,512),[[a.nr,o.user.fulllastname]])]),(0,r._)("div",ue,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Rut",maxlength:"60","onUpdate:modelValue":s[2]||(s[2]=e=>o.user.rut=e)},null,512),[[a.nr,o.user.rut]])]),(0,r._)("div",de,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Email",maxlength:"60","onUpdate:modelValue":s[3]||(s[3]=e=>o.user.email=e)},null,512),[[a.nr,o.user.email]])]),(0,r._)("div",pe,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Cargo",maxlength:"60","onUpdate:modelValue":s[4]||(s[4]=e=>o.user.position=e)},null,512),[[a.nr,o.user.position]])]),(0,r._)("div",ce,[(0,r.wy)((0,r._)("input",{type:"password",placeholder:"Contraseña","onUpdate:modelValue":s[5]||(s[5]=e=>o.userUpdate.passwordT=e),maxlength:"60"},null,512),[[a.nr,o.userUpdate.passwordT]])]),(0,r._)("div",me,[(0,r.wy)((0,r._)("input",{type:"password",placeholder:"Confirme contraseña","onUpdate:modelValue":s[6]||(s[6]=e=>o.userUpdate.confirmPasswordT=e),maxlength:"60"},null,512),[[a.nr,o.userUpdate.confirmPasswordT]])]),(0,r._)("div",ve,[(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":s[7]||(s[7]=e=>o.user.role=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.roles,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.name,value:e.name},(0,n.zw)(e.name),9,ge)))),128))],512),[[a.bM,o.user.role]])]),(0,r._)("div",we,[fe,(0,r._)("button",{type:"button",class:"btn btn-danger",onClick:s[8]||(s[8]=(...e)=>o.onDelete&&o.onDelete(...e))}," Eliminar ")])],32)])])])}var Ue={components:{Loader:G.Z},emits:["on:close"],setup(){const e=(0,Y.oR)(),{userById:s}=(0,re.Z)(),t=(0,M.iH)(""),r=(0,M.iH)(""),a=(0,M.iH)(""),n=(0,M.iH)([{name:"ADMIN_ROLE"},{name:"OPERATOR_ROLE"},{name:"PLANNER_ROLE"}]),{deleteUser:o,updateUser:l}=te(),i=(0,M.iH)({passwordT:"",confirmPasswordT:""});return t.value=s.value.userToChange,r.value=s.value.userIdToChange,a.value=s.value.userToChange.name,{userById:s,userUpdate:i,userId:r,user:t,userName:a,roles:n,onSubmit:async()=>{new(j())({title:"Espere por favor",allowOutsideClick:!1}),j().showLoading();const{errorsUpdate:s,niceUpdate:a}=await l(i.value,t.value,r.value);!1!==a.value?(await e.dispatch("users/loadUsers"),j().fire("Guardado","Usuario actualizado con éxito","success").then((function(e){location.reload()}))):j().fire("Error",`${s.value}.`,"error")},onDelete:async()=>{const{isConfirmed:s}=await j().fire({title:"¿Estás seguro?",text:"No se podrá recuperar una vez borrado",showDenyButton:!0,confirmButtonText:"Estoy seguro"});if(s){new(j())({title:"Espere por favor",allowOutsideClick:!1}),j().showLoading();const{idDelete:s,errorsDelete:t,niceDelete:a}=await o(r.value);!0===a.value&&(await e.dispatch("users/loadUsers"),j().fire("Eliminado","","success").then((function(e){location.reload()})))}}}}};const _e=(0,J.Z)(Ue,[["render",he],["__scopeId","data-v-360e652d"]]);var ye=_e,De={components:{users:X,Loader:G.Z,UpdateUser:ye},setup(){const e=(0,Y.oR)(),s=(0,M.iH)(""),{postUser:t}=te(),a=(0,M.iH)([{name:"ADMIN_ROLE"},{name:"OPERATOR_ROLE"},{name:"PLANNER_ROLE"}]),{userTerm:n,getStatusUser:o,divisions:l,users:i,userUpdate:u,userIdStatus:d,showUsers:p}=(0,re.Z)();(0,r.YP)((()=>s.value),(()=>n(s.value)));const c=(0,M.iH)({fullname:"",fulllastname:"",passwordT:"",confirmPassword:"",rut:"",email:"",users_divisions:"",role:"",position:""});return{term:s,userForm:c,postUser:t,divisions:l,users:i,roles:a,getStatusUser:o,userTerm:n,userUpdate:u,userIdStatus:d,showUsers:p,onSubmit:async()=>{new(j())({title:"Espere por favor",allowOutsideClick:!1}),j().showLoading();const{errorsPost:e,user:s,nicePost:r}=await t(c.value);!1!==r.value?j().fire("Guardado","Usuario registrado con éxito","success").then((function(e){location.reload()})):j().fire("Error",`${e.value}.`,"error")},onShowUpdateUser:s=>!1===u.value?(e.dispatch("users/changeUserId",s),void e.dispatch("users/changeUserUpdate",!0)):(e.dispatch("users/loadUsers"),void e.dispatch("users/changeUserUpdate",!1))}}};const be=(0,J.Z)(De,[["render",z],["__scopeId","data-v-e46e8ba6"]]);var Fe=be}}]);
//# sourceMappingURL=register-user.83373590.js.map