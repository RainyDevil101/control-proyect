"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[405],{4169:function(e,a,t){var r=t(3396),l=t(7139);const n=()=>{const e=(0,l.oR)(),a=async a=>{const t=await e.dispatch("materials/getMaterialPending",a);return t},t=async a=>{const t=await e.dispatch("materials/getMaterialCompleted",a);return t};return{getMaterialPending:a,getMaterialCompleted:t,status:(0,r.Fl)((()=>e.getters["materials/statusState"])),pendientes:(0,r.Fl)((()=>e.getters["materials/getPendientes"])),completas:(0,r.Fl)((()=>e.getters["materials/getCompletas"])),allMaterials:(0,r.Fl)((()=>e.getters["materials/getAllMaterials"])),completedPendiente:(0,r.Fl)((()=>e.getters["materials/getCompletedPendiente"])),imageOneCompleted:(0,r.Fl)((()=>e.getters["materials/getCompletedImageOne"])),imageTwoCompleted:(0,r.Fl)((()=>e.getters["materials/getCompletedImageTwo"])),imageOne:(0,r.Fl)((()=>e.getters["materials/getImageOne"])),imageTwo:(0,r.Fl)((()=>e.getters["materials/getImageTwo"])),materialPendingId:(0,r.Fl)((()=>e.getters["materials/getMaterialPendingNeeded"])),materialPendingIdDate:(0,r.Fl)((()=>e.getters["materials/getMaterialPendingNeededDate"])),materialIdCompleted:(0,r.Fl)((()=>e.getters["materials/getMaterialCompletedNeeded"])),materialIdCompletedDate:(0,r.Fl)((()=>e.getters["materials/getMaterialCompletedNeededDate"])),materialPendingIdStatus:(0,r.Fl)((()=>e.getters["materials/getMaterialPendingIdStatus"])),materialCompletedIdStatus:(0,r.Fl)((()=>e.getters["materials/getMaterialCompletedIdStatus"])),pendiente:(0,r.Fl)((()=>e.getters["materials/getPendiente"]))}};a["Z"]=n},6267:function(e,a,t){t.d(a,{Z:function(){return c}});var r=t(3396);const l=e=>((0,r.dD)("data-v-3b6b4a29"),e=e(),(0,r.Cn)(),e),n={class:"loader-rev"},i=l((()=>(0,r._)("div",null,null,-1))),o=[i];function s(e,a,t,l,i,s){return(0,r.wg)(),(0,r.iD)("div",n,o)}var d={},u=t(89);const m=(0,u.Z)(d,[["render",s],["__scopeId","data-v-3b6b4a29"]]);var c=m},7007:function(e,a,t){t.r(a),t.d(a,{default:function(){return X}});var r=t(3396),l=t(9242),n=t(2268);const i=e=>((0,r.dD)("data-v-120e984c"),e=e(),(0,r.Cn)(),e),o={key:1,class:"wrapper"},s={class:"wrapper-form"},d={key:0},u={class:"forum-data"},m=i((()=>(0,r._)("p",null,"Fecha de ingreso:",-1))),c={class:"forum-data"},g=i((()=>(0,r._)("p",null,"Hora de ingreso:",-1))),p={class:"forum-data"},v=i((()=>(0,r._)("p",null,"Número de transporte:",-1))),_={class:"forum-data"},w=i((()=>(0,r._)("p",null,"Código:",-1))),f={class:"forum-data"},b=i((()=>(0,r._)("p",null,"Cantidad:",-1))),I={class:"forum-data"},P=i((()=>(0,r._)("p",null,"Cantidad de bultos:",-1))),h={class:"forum-data"},C=i((()=>(0,r._)("p",null,"Destino:",-1))),D={class:"forum-data"},F=i((()=>(0,r._)("p",null,"Estado:",-1))),y={class:"forum-item"},M=i((()=>(0,r._)("span",null,"Número de transporte en despacho",-1))),T=i((()=>(0,r._)("div",{class:"image-label"},[(0,r._)("label",{for:"imageTwo"},"Seleccione la imagen")],-1))),k={key:0,class:"confirmation"},S={class:"forum-button"},z=i((()=>(0,r._)("button",{type:"submit",class:"btn btn-warning"},"Registrar",-1))),N={key:1},x=i((()=>(0,r._)("div",{class:"not-wrapper"},[(0,r._)("h1",null,"No existe registro")],-1))),H=[x];function Z(e,a,t,i,x,Z){const E=(0,r.up)("Loader");return"CARGANDO"===i.materialPendingIdStatus?((0,r.wg)(),(0,r.j4)(E,{key:0,class:"loader-wrapper"})):((0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",s,["none"!==i.materialPendingId?((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("form",{onSubmit:a[3]||(a[3]=(0,l.iM)(((...e)=>i.onSubmit&&i.onSubmit(...e)),["prevent"]))},[(0,r._)("div",u,[m,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.materialPendingIdDate.date),1)])]),(0,r._)("div",c,[g,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.materialPendingIdDate.hour),1)])]),(0,r._)("div",p,[v,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.materialPendingId.transport_number),1)])]),(0,r._)("div",_,[w,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.materialPendingId.code),1)])]),(0,r._)("div",f,[b,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.materialPendingId.cantidad),1)])]),(0,r._)("div",I,[P,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.materialPendingId.cantidad_bultos),1)])]),(0,r._)("div",h,[C,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.materialPendingId.destination),1)])]),(0,r._)("div",D,[F,(0,r._)("p",null,[(0,r._)("b",null,(0,n.zw)(i.pendiente),1)])]),(0,r._)("div",y,[M,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.materialForm.transport_number_two=e),type:"text",maxlength:"45"},null,512),[[l.nr,i.materialForm.transport_number_two]])]),(0,r._)("input",{type:"file",onChange:a[1]||(a[1]=(...e)=>i.onImageTwo&&i.onImageTwo(...e)),id:"imageTwo",accept:"image/png, image/jpg, image/ jpeg"},null,32),T,i.localImageTwo?((0,r.wg)(),(0,r.iD)("div",k,[(0,r._)("p",null,(0,n.zw)(i.imgTwoName),1)])):(0,r.kq)("",!0),(0,r._)("div",S,[z,(0,r._)("button",{type:"button",onClick:a[2]||(a[2]=a=>e.$router.push({name:"get-material"})),class:"btn btn-primary"}," Volver ")])],32)])):((0,r.wg)(),(0,r.iD)("div",N,H))])]))}var E=t(4870),O=t(678),R=t(4169),j=t(6322);const A=()=>{const e=(0,E.iH)(null),a=(0,E.iH)(!1),t=(0,E.iH)(null),r=async(r,l,n)=>{const i=r;if(""===r.transport_number_two||""===l)return e.value="Debe llenar los campos",{errors:e,nice:a,code:t};try{await j.Z.put(`/api/material/${n}`,{materialUpdate:i,pictureTwo:l},{headers:{"x-token":localStorage.getItem("token")}});return t.value=n,a.value=!0,e.value=!1,{errors:e,nice:a,code:t}}catch(o){if(o.response.data.msg)return e.value=o.response.data.msg,t.value=null,a.value=!1,{errors:e,nice:a,code:t};if(o.response.data.errors){const r=[],l=o.response.data.errors;for(const e of l)r.push(" "+e.msg);return e.value=r,t.value=null,a.value=!1,{errors:e,nice:a,code:t}}return t.value=n,e.value=!1,a.value=!0,{errors:e,nice:a,code:t}}};return{dispatchMaterial:r,errors:e,nice:a,code:t}};var L=A,$=t(6267),U=t(6265),G=t.n(U);const V=async e=>{if(e)try{const a=new FormData;a.append("upload_preset","tzfir0d9"),a.append("file",e);const{data:t}=await G().post("https://api.cloudinary.com/v1_1/dt4zmocge/image/upload",a);return t.secure_url}catch(a){return console.error("Error al cargar el archivo"),console.log(a),null}};var q=V,B=t(2492),Y=t.n(B),J=t(7139),K={components:{Loader:$.Z},setup(){const e=(0,O.yj)(),a=(0,O.tv)(),t=(0,J.oR)(),l=(0,E.iH)({transport_number_two:""}),n=(0,E.iH)(),i=(0,E.iH)(),o=(0,E.iH)(null),{dispatchMaterial:s}=L(),{getMaterialPending:d,materialPendingId:u,materialPendingIdStatus:m,pendiente:c,materialPendingIdDate:g}=(0,R.Z)();(0,r.ic)((()=>{d(e.params.id)})),d(e.params.id),(0,r.YP)((()=>n.value),(()=>o.value=n.value));const{uploadImageTwo:p}=q();return{getMaterialPending:d,materialPendingId:u,materialPendingIdStatus:m,pendiente:c,materialPendingIdDate:g,materialForm:l,localImageTwo:n,imgTwoName:i,imgTwo:o,uploadImageTwo:p,dispatchMaterial:s,onSubmit:async()=>{new(Y())({title:"Espere por favor",allowOutsideClick:!1}),Y().showLoading();const r=l.value;if(""===r.transport_number_two)return Y().fire({title:"Error",text:"Debe completar el registro",icon:"error"});if(null===o.value)return Y().fire({title:"Error",text:"Debe seleccionar la imagen",icon:"error"});const n=await q(o.value),{errors:i,nice:d,code:u}=await s(l.value,n,e.params.id);!1===d.value?Y().fire({title:"Error",text:`${i.value}`,icon:"error"}):(await t.dispatch("materials/loadMaterials"),Y().fire("Guardado",`Bulto ${u.value} registrado con éxito`,"success").then((function(e){a.push({name:"get-material"})})))},onImageTwo:async e=>{const a=e.target.files[0];if(!a)return n.value=null,void(i.value=null);{i.value=a.name;const e=new FileReader;e.onload=()=>n.value=e.result,e.readAsDataURL(a)}}}}},Q=t(89);const W=(0,Q.Z)(K,[["render",Z],["__scopeId","data-v-120e984c"]]);var X=W}}]);
//# sourceMappingURL=dispath-material.108ec7e6.js.map