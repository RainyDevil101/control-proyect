"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[405],{4169:function(e,a,t){var n=t(3396),l=t(7139);const r=()=>{const e=(0,l.oR)(),a=async a=>{const t=await e.dispatch("materials/getMaterialPending",a);return t},t=async a=>{const t=await e.dispatch("materials/getMaterialCompleted",a);return t};return{getMaterialPending:a,getMaterialCompleted:t,status:(0,n.Fl)((()=>e.getters["materials/statusState"])),pendientes:(0,n.Fl)((()=>e.getters["materials/getPendientes"])),completas:(0,n.Fl)((()=>e.getters["materials/getCompletas"])),allMaterials:(0,n.Fl)((()=>e.getters["materials/getAllMaterials"])),completedPendiente:(0,n.Fl)((()=>e.getters["materials/getCompletedPendiente"])),imageOneCompleted:(0,n.Fl)((()=>e.getters["materials/getCompletedImageOne"])),imageTwoCompleted:(0,n.Fl)((()=>e.getters["materials/getCompletedImageTwo"])),imageOne:(0,n.Fl)((()=>e.getters["materials/getImageOne"])),imageTwo:(0,n.Fl)((()=>e.getters["materials/getImageTwo"])),materialPendingId:(0,n.Fl)((()=>e.getters["materials/getMaterialPendingNeeded"])),materialPendingIdDate:(0,n.Fl)((()=>e.getters["materials/getMaterialPendingNeededDate"])),materialIdCompleted:(0,n.Fl)((()=>e.getters["materials/getMaterialCompletedNeeded"])),materialIdCompletedDate:(0,n.Fl)((()=>e.getters["materials/getMaterialCompletedNeededDate"])),materialPendingIdStatus:(0,n.Fl)((()=>e.getters["materials/getMaterialPendingIdStatus"])),materialCompletedIdStatus:(0,n.Fl)((()=>e.getters["materials/getMaterialCompletedIdStatus"])),pendiente:(0,n.Fl)((()=>e.getters["materials/getPendiente"]))}};a["Z"]=r},6267:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(3396);const l=e=>((0,n.dD)("data-v-3b6b4a29"),e=e(),(0,n.Cn)(),e),r={class:"loader-rev"},i=l((()=>(0,n._)("div",null,null,-1))),o=[i];function s(e,a,t,l,i,s){return(0,n.wg)(),(0,n.iD)("div",r,o)}var d={},u=t(89);const m=(0,u.Z)(d,[["render",s],["__scopeId","data-v-3b6b4a29"]]);var c=m},2308:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(3396),l=t(9242);const r={class:"modal-container"},i={class:"img-scroll"},o=["src"];function s(e,a,t,s,d,u){return(0,n.wg)(),(0,n.iD)("div",{class:"modal-background fade-in",onClick:a[0]||(a[0]=(0,l.iM)((a=>e.$emit("on:close")),["self"]))},[(0,n._)("div",r,[(0,n._)("div",i,[(0,n._)("img",{src:t.imageOne,class:"img-thumbnail"},null,8,o)])])])}var d=t(4870),u={emits:["on:close"],props:{imageOne:{type:String}},setup(e){const a=(0,d.iH)(e.imageOne);return{imageOneProps:a}}},m=t(89);const c=(0,m.Z)(u,[["render",s],["__scopeId","data-v-31b84b9c"]]);var g=c},4959:function(e,a,t){t.r(a),t.d(a,{default:function(){return le}});var n=t(3396),l=t(9242),r=t(2268);const i=e=>((0,n.dD)("data-v-36321799"),e=e(),(0,n.Cn)(),e),o={key:0},s={key:2,class:"wrapper"},d={class:"wrapper-form"},u={key:0},m={class:"forum-data"},c=i((()=>(0,n._)("p",null,"Fecha de ingreso:",-1))),g={class:"forum-data"},p=i((()=>(0,n._)("p",null,"Hora de ingreso:",-1))),_={class:"forum-data"},v=i((()=>(0,n._)("p",null,"Número de transporte:",-1))),w={class:"forum-data"},b=i((()=>(0,n._)("p",null,"Código:",-1))),f={class:"forum-data"},I=i((()=>(0,n._)("p",null,"Cantidad:",-1))),h={class:"forum-data"},P=i((()=>(0,n._)("p",null,"Cantidad de bultos:",-1))),C={class:"forum-data"},O=i((()=>(0,n._)("p",null,"Ubicación:",-1))),y={class:"forum-data"},D=i((()=>(0,n._)("p",null,"Destino:",-1))),F={class:"forum-data"},S=i((()=>(0,n._)("p",null,"Estado:",-1))),k={class:"forum-item"},M=i((()=>(0,n._)("span",null,"Ingrese nuevo N° de documento",-1))),T={class:"image-label"},z={key:0,class:"confirmation"},H={class:"forum-button"},N=i((()=>(0,n._)("button",{type:"submit",class:"buttons-styles"},"Finalizar",-1))),Z={class:"image-label"},x={key:1},E=i((()=>(0,n._)("div",{class:"not-wrapper"},[(0,n._)("h1",null,"No existe registro")],-1))),R=[E];function $(e,a,t,i,E,$){const j=(0,n.up)("img-one"),A=(0,n.up)("Loader");return(0,n.wg)(),(0,n.iD)(n.HY,null,[!0===i.imageOneCompleted?((0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(j,{imageOne:i.imageOne,"onOn:close":i.onShowImageOne},null,8,["imageOne","onOn:close"])])):(0,n.kq)("",!0),"CARGANDO"===i.materialPendingIdStatus?((0,n.wg)(),(0,n.j4)(A,{key:1,class:"loader-wrapper"})):((0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",d,["none"!==i.materialPendingId?((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("form",{onSubmit:a[3]||(a[3]=(0,l.iM)(((...e)=>i.onSubmit&&i.onSubmit(...e)),["prevent"]))},[(0,n._)("div",m,[c,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingIdDate.date),1)])]),(0,n._)("div",g,[p,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingIdDate.hour),1)])]),(0,n._)("div",_,[v,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingId.transport_number),1)])]),(0,n._)("div",w,[b,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingId.code),1)])]),(0,n._)("div",f,[I,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingId.cantidad),1)])]),(0,n._)("div",h,[P,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingId.cantidad_bultos),1)])]),(0,n._)("div",C,[O,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingId.ubication),1)])]),(0,n._)("div",y,[D,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.materialPendingId.destination_name),1)])]),(0,n._)("div",F,[S,(0,n._)("p",null,[(0,n._)("b",null,(0,r.zw)(i.pendiente),1)])]),(0,n._)("div",k,[M,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.materialForm.transport_number_two=e),type:"text",maxlength:"45"},null,512),[[l.nr,i.materialForm.transport_number_two]])]),(0,n._)("input",{type:"file",onChange:a[1]||(a[1]=(...e)=>i.onImageTwo&&i.onImageTwo(...e)),id:"imageTwo",accept:"image/png, image/jpg, image/ jpeg"},null,32),(0,n._)("div",T,[(0,n._)("label",{class:(0,r.C_)([i.localImageTwo?i.image_label_selected:i.image_label_unSelected]),for:"imageTwo"},"Seleccione la imagen",2)]),i.localImageTwo?((0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("p",null,(0,r.zw)(i.imgTwoName),1)])):(0,n.kq)("",!0),(0,n._)("div",H,[N,(0,n._)("button",{type:"button",onClick:a[2]||(a[2]=a=>e.$router.push({name:"get-material"})),class:"buttons-styles"}," Volver ")])],32),(0,n._)("div",Z,[(0,n._)("button",{onClick:a[4]||(a[4]=(...e)=>i.onShowImageOne&&i.onShowImageOne(...e)),class:"buttons-styles"}," Ver imagen ingreso ")])])):((0,n.wg)(),(0,n.iD)("div",x,R))])]))],64)}var j=t(4870),A=t(678),L=t(7139),U=t(2492),V=t.n(U),q=t(6267),G=t(4169),Y=t(6322);const B=()=>{const e=(0,j.iH)(null),a=(0,j.iH)(!1),t=(0,j.iH)(null),n=async(n,l,r)=>{const i=n;if(""===n.transport_number_two||""===l)return e.value="Debe llenar los campos",{errors:e,nice:a,code:t};try{await Y.Z.put(`/api/material/${r}`,{materialUpdate:i,pictureTwo:l},{headers:{"x-token":localStorage.getItem("token")}});return t.value=r,a.value=!0,e.value=!1,{errors:e,nice:a,code:t}}catch(o){if(o.response.data.msg)return e.value=o.response.data.msg,t.value=null,a.value=!1,{errors:e,nice:a,code:t};if(o.response.data.errors){const n=[],l=o.response.data.errors;for(const e of l)n.push(" "+e.msg);return e.value=n,t.value=null,a.value=!1,{errors:e,nice:a,code:t}}return t.value=r,e.value=!1,a.value=!0,{errors:e,nice:a,code:t}}};return{dispatchMaterial:n,errors:e,nice:a,code:t}};var W=B,J=t(6265),K=t.n(J);const Q=async e=>{if(e)try{const a=new FormData;a.append("upload_preset","tzfir0d9"),a.append("file",e);const{data:t}=await K().post("https://api.cloudinary.com/v1_1/dt4zmocge/image/upload",a);return t.secure_url}catch(a){return console.error("Error al cargar el archivo"),console.log(a),null}};var X=Q,ee=t(2308),ae={components:{Loader:q.Z,ImgOne:ee.Z},setup(){const e=(0,A.yj)(),a=(0,A.tv)(),t=(0,L.oR)(),l=(0,j.iH)({transport_number_two:""}),r=(0,j.iH)("image_label_selected"),i=(0,j.iH)("image_label_unSelected"),o=(0,j.iH)(),s=(0,j.iH)(),d=(0,j.iH)(null),{dispatchMaterial:u}=W(),{getMaterialPending:m,materialPendingId:c,materialPendingIdStatus:g,pendiente:p,materialPendingIdDate:_,imageOneCompleted:v,imageOne:w}=(0,G.Z)();(0,n.ic)((()=>{m(e.params.id)})),m(e.params.id),(0,n.YP)((()=>o.value),(()=>d.value=o.value));const{uploadImageTwo:b}=X();return{getMaterialPending:m,materialPendingId:c,materialPendingIdStatus:g,pendiente:p,materialPendingIdDate:_,materialForm:l,localImageTwo:o,imgTwoName:s,imgTwo:d,uploadImageTwo:b,dispatchMaterial:u,image_label_selected:r,image_label_unSelected:i,imageOne:w,imageOneCompleted:v,onSubmit:async()=>{new(V())({title:"Espere por favor",allowOutsideClick:!1}),V().showLoading();const n=l.value;if(""===n.transport_number_two)return V().fire({title:"Error",text:"Debe completar el registro",icon:"error"});if(null===d.value)return V().fire({title:"Error",text:"Debe seleccionar la imagen",icon:"error"});const r=await X(d.value),{errors:i,nice:o,code:s}=await u(l.value,r,e.params.id);!1===o.value?V().fire({title:"Error",text:`${i.value}`,icon:"error"}):(await t.dispatch("materials/loadMaterials"),V().fire("Guardado",`Bulto ${s.value} registrado con éxito`,"success").then((function(e){a.push({name:"get-material"})})))},onShowImageOne:()=>!1===v.value?t.dispatch("materials/changeImageOne",!0):t.dispatch("materials/changeImageOne",!1),onImageTwo:async e=>{const a=e.target.files[0];if(!a)return o.value=null,void(s.value=null);{s.value=a.name;const e=new FileReader;e.onload=()=>o.value=e.result,e.readAsDataURL(a)}}}}},te=t(89);const ne=(0,te.Z)(ae,[["render",$],["__scopeId","data-v-36321799"]]);var le=ne}}]);
//# sourceMappingURL=dispath-material.bbd18b1a.js.map