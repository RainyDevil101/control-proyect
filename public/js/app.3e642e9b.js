(function(){var e={6322:function(e,t,n){"use strict";var a=n(6265),i=n.n(a);const r=i().create({baseURL:"https://control-project-backend.onrender.com"});t["Z"]=r},5887:function(e,t,n){"use strict";var a=n(9242),i=n(3396);function r(e,t,n,a,r,o){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var o=n(7139),s=n(4207),d={setup(){const{checkToken:e,reMaterials:t,reDestinations:n,reDivisions:a,reUsers:i}=(0,s.Z)(),r=(0,o.oR)();e();const d=r.state.auth.status,l=JSON.parse(localStorage.getItem("aM"));t(l);const u=JSON.parse(localStorage.getItem("aD"));n(u);const c=JSON.parse(localStorage.getItem("aDi"));a(c);const m=JSON.parse(localStorage.getItem("aU"));return i(m),{checkToken:e,status:d}}},l=n(89);const u=(0,l.Z)(d,[["render",r]]);var c=u,m=n(678),g={name:"auth",component:()=>n.e(818).then(n.bind(n,9741)),children:[{path:"/",name:"select-login",component:()=>n.e(50).then(n.bind(n,5593))},{path:"",name:"front-auth",component:()=>n.e(853).then(n.bind(n,4793))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e(942).then(n.bind(n,948))}]},p={name:"home",component:()=>n.e(177).then(n.bind(n,1302)),children:[{path:"home-view",name:"home-view",component:()=>n.e(976).then(n.bind(n,4231))}]},h={name:"load",component:()=>n.e(711).then(n.bind(n,6513)),children:[{path:"/",name:"loading",component:()=>n.e(227).then(n.bind(n,4559))}]},f=n(6322);const v={status:"AUTHENTICATING",user:"null",token:null},I={currentState(e){return e.status},getUser(e){return e.user},getUserDivision(e){return e.user[0].users_divisions},getUserId(e){return e.user[0].id}},D={loginUser(e,{user:t,token:n}){n&&(localStorage.setItem("token",n),e.token=n),e.user=t,e.status="authenticated"},logOut(e){e.user=null,e.token=null,e.status="AUTHENTICATING",localStorage.removeItem("token"),localStorage.removeItem("mP"),localStorage.removeItem("mC"),localStorage.removeItem("aDi"),localStorage.removeItem("aD"),localStorage.removeItem("aU"),localStorage.removeItem("aM")}},C={async signInUser({commit:e},t){const{rut:n,passwordT:a}=t;try{const{data:t}=await f.Z.post("/api/auth/login",{rut:n,passwordT:a}),{user:i,token:r}=t;return delete i[0].password,e("loginUser",{user:i,token:r}),{ok:!0,errors:!1}}catch(i){return{ok:!1,errors:i.response.data.msg}}},async readToken({commit:e}){if(!localStorage.getItem("token"))return e("logOut"),e("materials/logOut",null,{root:!0}),e("destinations/logOut",null,{root:!0}),e("users/logOut",null,{root:!0}),{ok:!1,message:"No hay token"};try{const{data:t}=await f.Z.get("/api/auth",{headers:{"x-token":localStorage.getItem("token")}}),{user:n,token:a}=t;return e("loginUser",{user:n,token:a}),{ok:!0,user:n}}catch(t){return e("logOut"),{ok:!1}}}};var N={namespaced:!0,state:v,getters:I,actions:C,mutations:D},O=n(3889),b=n.n(O);n(6699);const S=e=>{const t=new Date(e).toLocaleDateString("es-cl",{year:"numeric",month:"long",day:"numeric"}),n=new Date(e).toLocaleTimeString("es-cl");return{converTime:t,convertHour:n}};var y=S;const k={status:"CARGANDO",statusCharts:"CARGANDO",imageOne:"",imageTwo:"",materialsPending:"",allMaterials:"",materialsCompleted:"",materialCompletedNeeded:"",materialCompletedNeededDate:"",materialCompletedNeededHour:"",materialCompletedNeededOutDate:"",materialCompletedNeededOutHour:"",materialCompletedIdStatus:"CARGANDO",completedPendiente:"",completedImageOne:!1,completedImageTwo:!1,materialPendingNeeded:"",materialPendingNeededDate:"",materialPendingNeededHour:"",materialPendingIdStatus:"CARGANDO",pendiente:"",pendingImageOne:!1,pendingImageTwo:!1},w={getAllMaterials(e){if(""===e.allMaterials)return"";const t=e.allMaterials,n=t.sort(((e,t)=>t.pendiente-e.pendiente));return n},statusState(e){return e.status},getCompletas(e){return e.materialsCompleted},getMaterialCompletedNeeded(e){return e.materialCompletedNeeded},getMaterialCompletedNeededDate(e){const t=e.materialCompletedNeededDate,n=e.materialCompletedNeededHour,a=e.materialCompletedNeededOutDate,i=e.materialCompletedNeededOutHour;return{date:t,hour:n,outDate:a,outHour:i}},getMaterialCompletedIdStatus(e){return e.materialCompletedIdStatus},getCompletedPendiente(e){return e.completedPendiente},getCompletedImageOne(e){return e.completedImageOne},getCompletedImageTwo(e){return e.completedImageTwo},getImageOne(e){return e.imageOne},getImageTwo(e){return e.imageTwo},getPendientes(e){return e.materialsPending},getMaterialPendingNeeded(e){return e.materialPendingNeeded},getMaterialPendingNeededDate(e){const t=e.materialPendingNeededDate,n=e.materialPendingNeededHour;return{date:t,hour:n}},getMaterialPendingIdStatus(e){return e.materialPendingIdStatus},getPendiente(e){return e.pendiente},getPendingImageOne(e){return e.pendingImageOne},getPendingImageTwo(e){return e.pendingImageTwo},gettingData:e=>t=>{if(0===e.allMaterials.length){const e="";return{allMaterialsFiltered:e}}const n=e.allMaterials;let a={};for(const e in t)(t[e].constructor===Object||t[e].constructor===String&&t[e].length>0||t[e].constructor===Number)&&(a[e]=t[e]);const i=["date_in"],r=n.filter((e=>{for(const t in a){if(void 0===e[t])return!1;if(i.includes(t)){if(""!==a[t]["initDate"]&&e[t]<a[t]["initDate"])return!1;if(""!==a[t]["finDate"]&&e[t]>=a[t]["finDate"])return!1}else if(a[t]!==e[t])return!1}return!0})),o=r;return{allMaterialsFiltered:o}},getStatusCharts(e){return e.statusCharts}},A={saveMaterials(e,{materials:t}){if(e.status="CARGANDO",e.statusCharts="CARGANDO",e.imageOne="",e.imageTwo="",e.materialsPending="",e.allMaterials="",e.materialsCompleted="",e.materialCompletedNeeded="",e.materialCompletedNeededDate="",e.materialCompletedNeededHour="",e.materialCompletedNeededOutDate="",e.materialCompletedNeededOutHour="",e.materialCompletedIdStatus="CARGANDO",e.completedPendiente="",e.completedImageOne=!1,e.completedImageTwo=!1,e.materialPendingNeeded="",e.materialPendingNeededDate="",e.materialPendingNeededHour="",e.materialPendingIdStatus="CARGANDO",e.pendiente="",e.pendingImageOne=!1,e.pendingImageTwo=!1,!t)return;if(0===t.length)return e.materialsPending="",e.materialsCompleted="",e.allMaterials="",void(e.status="RECIBIDOS");localStorage.removeItem("aM");const n=t.filter((e=>1===e.pendiente)),a=t.filter((e=>0===e.pendiente));localStorage.setItem("aM",JSON.stringify(t)),e.materialsPending=n,e.materialsCompleted=a,e.allMaterials=t,e.status="RECIBIDOS",e.statusCharts="RECIBIDOS"},getMaterialPendingById(e,{id:t}){if(null===t)return void(e.materialPendingNeeded="");if(""===e.materialsPending)return;if(0===e.materialsPending.length)return;const n=e.materialsPending.filter((e=>e.id==t));if(0===n.length)return e.materialPendingNeeded="none",e.pendiente="none",void(e.materialPendingIdStatus="RECIBIDO");1===n[0].pendiente?e.pendiente="Pendiente":e.pendiente="Completado";const a=n[0].date_in,{converTime:i,convertHour:r}=y(a);e.materialPendingNeededHour=r,e.materialPendingNeededDate=i,e.imageOne=n[0].image_one,e.imageTwo=n[0].image_two,e.materialPendingNeeded=n[0],e.materialPendingIdStatus="RECIBIDO"},updateMaterialD(e,{id:t}){e.materialsPending=e.materialsPending.filter((e=>e.id!=t))},getMaterialCompletedById(e,{id:t}){if(null===t)return void(e.materialCompletedNeeded="");if(""===e.materialsCompleted)return;if(0===e.materialsCompleted.length)return;const n=e.materialsCompleted.filter((e=>e.id==t));if(0===n.length)return e.materialCompletedNeeded="none",void(e.materialCompletedIdStatus="RECIBIDO");1===n[0].pendiente?e.completedPendiente="Pendiente":e.completedPendiente="Completado";const a=n[0].date_in,i=n[0].date_out,r=y(a),o=y(i);e.materialCompletedNeededHour=r.convertHour,e.materialCompletedNeededDate=r.converTime,e.materialCompletedNeededOutHour=o.convertHour,e.materialCompletedNeededOutDate=o.converTime,e.imageOne=n[0].image_one,e.imageTwo=n[0].image_two,e.materialCompletedNeeded=n[0],e.materialCompletedIdStatus="RECIBIDO"},changeImageOne(e,{onImageOne:t}){e.completedImageOne=t},changeImageTwo(e,{onImageTwo:t}){e.completedImageTwo=t},deleteForumM(e,{id:t}){e.materialsPending=e.materialsPending.filter((e=>e.uid!==t))},logOut(e){e.status="CARGANDO",e.statusCharts="RECIBIDOS",e.imageOne="",e.imageTwo="",e.materialsPending="",e.allMaterials="",e.materialsCompleted="",e.materialCompletedNeeded="",e.materialCompletedNeededDate="",e.materialPendingNeededHour="",e.completedPendiente="",e.completedImageOne=!1,e.completedImageTwo=!1,e.materialPendingNeeded="",e.materialPendingNeededDate="",e.materialPendingNeededHour="",e.materialPendingNeededOutDate="",e.materialPendingNeededOutHour="",e.materialPendingIdStatus="CARGANDO",e.pendiente="",e.pendingImageOne=!1,e.pendingImageTwo=!1,localStorage.removeItem("aM"),localStorage.removeItem("token")}},P={async loadMaterials({commit:e}){try{const{data:t}=await f.Z.get("/api/material/",{headers:{"x-token":localStorage.getItem("token")}});if(!t)return e("saveAllMaterials",[]),void e("saveMaterials",[]);const{materials:n}=t;return e("saveMaterials",{materials:n}),{ok:!0}}catch(t){return{ok:!1,message:t.response.data.errors}}},async deleteMaterial({commit:e},t){return e("deleteMaterialM",{id:t}),{ok:!0}},async getMaterialPending({commit:e},t){return e("getMaterialPendingById",{id:t}),{ok:!0}},async getMaterialCompleted({commit:e},t){return e("getMaterialCompletedById",{id:t}),{ok:!0}},async changeImageOne({commit:e},t){return e("changeImageOne",{onImageOne:t}),{ok:!0}},async changeImageTwo({commit:e},t){return e("changeImageTwo",{onImageTwo:t}),{ok:!0}},async renoveMaterials({commit:e},t){if(t)return e("saveMaterials",{materials:t}),{ok:!0}},async updateMaterial({commit:e},t){return e("updateMaterialD",{id:t}),{ok:!0}}};var U={namespaced:!0,state:k,getters:w,actions:P,mutations:A};const T={status:"CARGANDO",destinations:"",changeDestinationId:"",destinationNeeded:"",destinationIdStatus:"CARGANDO",updateDestination:!1,destinationUpdated:""},M={getDestinationsByTerm:e=>(t="")=>0===t.length?e.destinations:e.destinations.filter((e=>e.nombre.toLowerCase().includes(t.toLocaleLowerCase()))),getStatus(e){return e.status},getDestinationNeeded(e){return e.destinationNeeded},getDestinationIdStatus(e){return e.destinationIdStatus},getUpdateDestination(e){return e.updateDestination},changeDestinationId(e){if(!e.changeDestinationId)return;const t=e.changeDestinationId.id,n=e.changeDestinationId;return{destinationIdToChange:t,destinationToChange:n}}},R={saveDestinations(e,{destinations:t}){if(e.status="CARGANDO",t){if(0===t.length)return e.destinations="",void(e.status="RECIBIDOS");localStorage.removeItem("aD"),localStorage.setItem("aD",JSON.stringify(t)),e.destinations=t,e.status="RECIBIDOS"}},getDestinationById(e,{id:t}){if(e.destinationIdStatus="CARGANDO",null===t)return void(e.destinations="");if(""===e.destinations)return;if(0===e.destinations.length)return;const n=e.destinations.filter((e=>e.id==t));if(0===n.length)return e.destinationNeeded="none",void(e.destinationIdStatus="RECIBIDO");e.destinationNeeded=n[0],e.destinationIdStatus="RECIBIDO"},changeDestination(e,{onUpdate:t}){e.updateDestination=t},changeDestinationId(e,{id:t}){if(!t)return;if(""===t)return;if(0===t.length)return;if(""===e.destinations)return;const n=t.id,a=e.destinations.filter((e=>e.id==n));e.changeDestinationId=a[0]},logOut(e){e.status="CARGANDO",e.destinations="",e.changeDestinationId="",e.destinationNeeded="",e.destinationIdStatus="CARGANDO",e.updateDestination=!1,e.destinationUpdated="",localStorage.removeItem("aD")}},E={async loadDestinations({commit:e}){try{const{data:t}=await f.Z.get("/api/destination/",{headers:{"x-token":localStorage.getItem("token")}});if(!t)return void e("saveDestinations",[]);const{destinations:n}=t;return e("saveDestinations",{destinations:n}),{ok:!0}}catch(t){return{ok:!1,message:t.response.data.errors}}},async getDestinationById({commit:e},t){return e("getDestinationById",{id:t}),{ok:!0}},async renoveDestinations({commit:e},t){if(t)return e("saveDestinations",{destinations:t}),{ok:!0}},async changeDestinationUpdate({commit:e},t){return e("changeDestination",{onUpdate:t}),{ok:!0}},async changeDestinationId({commit:e},t){return e("changeDestinationId",{id:t}),{ok:!0}}};var B={namespaced:!0,state:T,getters:M,actions:E,mutations:R};const G={status:"CARGANDO",divisions:"",changeDivisionId:"",divisionNeeded:"",divisionIdStatus:"CARGANDO",updateDivision:!1,divisionUpdated:""},H={getDivisionsByTerm:e=>(t="")=>0===t.length?e.divisions:e.divisions.filter((e=>e.name.toLowerCase().includes(t.toLocaleLowerCase()))),getStatus(e){return e.status},getDivisionNeeded(e){return e.divisionNeeded},getDivisionIdStatus(e){return e.divisionIdStatus},getUpdateDivision(e){return e.updateDivision},changeDivisionId(e){if(!e.changeDivisionId)return;const t=e.changeDivisionId.id,n=e.changeDivisionId;return{divisionIdToChange:t,divisionToChange:n}}},L={saveDivisions(e,{divisions:t}){if(e.status="CARGANDO",t){if(0===t.length)return e.divisions="",void(e.status="RECIBIDOS");localStorage.removeItem("aDi"),localStorage.setItem("aDi",JSON.stringify(t)),e.divisions=t,e.status="RECIBIDOS"}},getDivisionById(e,{id:t}){if(e.divisionIdStatus="CARGANDO",null===t)return void(e.divisions="");if(""===e.divisions)return;if(0===e.divisions.length)return;const n=e.divisions.filter((e=>e.id==t));if(0===n.length)return e.divisionNeeded="none",void(e.divisionIdStatus="RECIBIDO");e.divisionNeeded=n[0],e.divisionIdStatus="RECIBIDO"},deleteDivision(e,{id:t}){e.divisions=e.divisions.filter((e=>e.id!==t))},changeDivision(e,{onUpdate:t}){e.updateDivision=t},changeDivisionId(e,{id:t}){if(!t)return;if(""===t)return;if(0===t.length)return;if(""===e.divisions)return;const n=t.id,a=e.divisions.filter((e=>e.id==n));e.changeDivisionId=a[0]},logOut(e){e.status="CARGANDO",e.divisions="",e.changeDivisionId="",e.divisionNeeded="",e.divisionIdStatus="CARGANDO",e.updateDivision=!1,e.divisionUpdated=""}},_={async loadDivisions({commit:e}){try{const{data:t}=await f.Z.get("/api/division/",{headers:{"x-token":localStorage.getItem("token")}});if(!t)return void e("saveDivisions",[]);const{divisions:n}=t;return e("saveDivisions",{divisions:n}),{ok:!0}}catch(t){return{ok:!1,message:t.response.data.errors}}},async getDivisionById({commit:e},t){return e("getDivisionById",{id:t}),{ok:!0}},async renoveDivisions({commit:e},t){if(t)return e("saveDivisions",{divisions:t}),{ok:!0}},async changeDivisionUpdate({commit:e},t){return e("changeDivision",{onUpdate:t}),{ok:!0}},async changeDivisionId({commit:e},t){return e("changeDivisionId",{id:t}),{ok:!0}}};var j={namespaced:!0,state:G,getters:H,actions:_,mutations:L};const x={status:"CARGANDO",users:"",changeUserId:"",userNeeded:"",userIdStatus:"CARGANDO",updateUser:!1,userUpdated:""},Z={getUserByTerm:e=>(t="")=>0===t.length?e.users:e.users.filter((e=>e.fullname.toLowerCase().includes(t.toLocaleLowerCase())||e.fulllastname.toLowerCase().includes(t.toLocaleLowerCase()))),getStatus(e){return e.status},getUserNeeded(e){return e.userNeeded},getUserIdStatus(e){return e.userIdStatus},getUpdateUser(e){return e.updateUser},changeUserId(e){if(!e.changeUserId)return;const t=e.changeUserId.id,n=e.changeUserId;return{userIdToChange:t,userToChange:n}}},F={saveUsers(e,{users:t}){if(e.status="CARGANDO",t){if(0===t.length)return e.users="",void(e.status="RECIBIDOS");localStorage.removeItem("aU"),localStorage.setItem("aU",JSON.stringify(t)),e.users=t,e.status="RECIBIDOS"}},getUserById(e,{id:t}){if(e.userIdStatus="CARGANDO",null===t)return void(e.users="");if(""===e.users)return;if(0===e.users.length)return;const n=e.users.filter((e=>e.id==t));if(0===n.length)return e.userNeeded="none",void(e.userIdStatus="RECIBIDO");e.userNeeded=n[0],e.userIdStatus="RECIBIDO"},changeUser(e,{onUpdate:t}){e.updateUser=t},changeUserId(e,{id:t}){if(!t)return;if(""===t)return;if(0===t.length)return;if(""===e.users)return;const n=t.id,a=e.users.filter((e=>e.id==n));e.changeUserId=a[0]},logOut(e){e.status="CARGANDO",e.users="",e.changeUserId="",e.userNeeded="",e.userIdStatus="CARGANDO",e.updateUser=!1,e.userUpdated="",localStorage.removeItem("aU")}},J={async loadUsers({commit:e}){try{const{data:t}=await f.Z.get("/api/user/",{headers:{"x-token":localStorage.getItem("token")}});if(!t)return void e("saveUsers",[]);const{users:n}=t;return e("saveUsers",{users:n}),{ok:!0}}catch(t){return{ok:!1,message:t.response.data.errors}}},async getUserById({commit:e},t){return e("getUserById",{id:t}),{ok:!0}},async renoveUsers({commit:e},t){if(t)return e("saveUsers",{users:t}),{ok:!0}},async changeUserUpdate({commit:e},t){return e("changeUser",{onUpdate:t}),{ok:!0}},async changeUserId({commit:e},t){return e("changeUserId",{id:t}),{ok:!0}}};var q={namespaced:!0,state:x,getters:Z,actions:J,mutations:F},K=(0,o.MT)({modules:{auth:N,home:b(),materials:U,destinations:B,divisions:j,users:q}});const z=async(e,t,n)=>{const{ok:a}=await K.dispatch("auth/readToken");a?n():n({name:"select-login"})};var Q=z,V=n(2492),W=n.n(V);const X=async(e,t,n)=>{const{user:a}=await K.dispatch("auth/readToken");0!=a[0].length?"ADMIN_ROLE"!==a[0].role?(W().fire({title:"Error",text:"No tiene los permisos",icon:"error"}),n({name:"select-login"})):n({name:"admin-menu"}):n({name:"select-login"})};var Y=X;const $=async(e,t,n)=>{const{user:a}=await K.dispatch("auth/readToken");void 0===a&&n({name:"select-login"}),0!==a[0].length&&void 0!==a||n({name:"select-login"}),"ADMIN_ROLE"===a[0].role?n():(W().fire({title:"Error",text:"No tiene los permisos",icon:"error"}),n(t.fullPath))};var ee=$,te={name:"register",component:()=>n.e(685).then(n.bind(n,5093)),children:[{path:"select-register",name:"select-register",component:()=>n.e(702).then(n.bind(n,9153))},{path:"register-destination",name:"register-destination",component:()=>n.e(73).then(n.bind(n,2589))},{path:"register-user",name:"register-user",component:()=>n.e(752).then(n.bind(n,1301))},{path:"register-user-massive",name:"register-user-massive",component:()=>Promise.all([n.e(92),n.e(554)]).then(n.bind(n,1298))}]},ne={name:"material",component:()=>n.e(685).then(n.bind(n,209)),children:[{path:"menu-materials",name:"menu-materials",component:()=>n.e(464).then(n.bind(n,4666))},{path:"get-material",name:"get-material",component:()=>n.e(758).then(n.bind(n,5522))},{path:"get-all-material",name:"get-all-material",component:()=>n.e(487).then(n.bind(n,6829))},{path:"dispatch/:id",name:"dispatch-material",component:()=>n.e(405).then(n.bind(n,4959)),props:e=>{e.params.id}},{path:"create-material",name:"create-material",component:()=>n.e(499).then(n.bind(n,7517))},{path:"all/:id",name:"all-material",component:()=>n.e(830).then(n.bind(n,3900)),props:e=>{e.params.id}}]},ae={name:"dashboard",component:()=>Promise.all([n.e(480),n.e(966)]).then(n.bind(n,6315)),children:[{path:"",name:"dashboard-view",component:()=>Promise.all([n.e(92),n.e(480),n.e(803)]).then(n.bind(n,4738))},{path:"",name:"data-menu",component:()=>n.e(90).then(n.bind(n,5938))},{path:"get-completed-material",name:"get-completed-material",component:()=>n.e(664).then(n.bind(n,2184))},{path:"completed/:id",name:"completed-material",component:()=>n.e(377).then(n.bind(n,1866)),props:e=>{e.params.id}}]};const ie=async(e,t,n)=>{const{user:a}=await K.dispatch("auth/readToken");void 0===a&&n({name:"select-login"}),"PLANNER_ROLE"===a[0].role||"ADMIN_ROLE"===a[0].role?n():(W().fire({title:"Error",text:"No tiene los permisos",icon:"error"}),n(t.fullPath))};var re=ie;const oe=[{path:"/",...g},{path:"/home",beforeEnter:[Q],...p},{path:"/load",beforeEnter:[Q],beforeEnter:[Y],...h},{path:"/register",beforeEnter:[Q],beforeEnter:[ee],...te},{path:"/material",beforeEnter:[Q],...ne},{path:"/dashboard",beforeEnter:[Q],beforeEnter:[re],...ae}],se=(0,m.p7)({history:(0,m.PO)(),routes:oe});var de=se;n(8937);(0,a.ri)(c).use(K).use(de).mount("#app")},4207:function(e,t,n){"use strict";var a=n(3396),i=n(7139);const r=()=>{const e=(0,i.oR)(),t=async t=>{const n=await e.dispatch("auth/signInUser",t);return n},n=async t=>{const n=await e.dispatch("materials/renoveMaterials",t);return n},r=async t=>{const n=await e.dispatch("destinations/renoveDestinations",t);return n},o=async t=>{const n=await e.dispatch("divisions/renoveDivisions",t);return n},s=async t=>{const n=await e.dispatch("users/renoveUsers",t);return n},d=async()=>{const t=await e.dispatch("auth/readToken");return t},l=async()=>{const t=await e.dispatch("materials/loadMaterials");return t},u=async()=>{const t=await e.dispatch("destinations/loadDestinations");return t},c=async()=>{const t=await e.dispatch("divisions/loadDivisions");return t},m=async()=>{const t=await e.dispatch("users/loadUsers");return t},g=()=>{e.commit("auth/logOut")};return{userDivision:(0,a.Fl)((()=>e.getters["auth/getUserDivision"])),userId:(0,a.Fl)((()=>e.getters["auth/getUserId"])),checkToken:d,loginUser:t,logOut:g,reMaterials:n,reDestinations:r,reDivisions:o,reUsers:s,getMaterials:l,getDestinations:u,getDivisions:c,getUsers:m}};t["Z"]=r},3889:function(){}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,r){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,d=0;d<a.length;d++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[d])}))?a.splice(d--,1):(s=!1,r<o&&(o=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({50:"select-login",73:"register-destination",90:"data-menu",177:"home",227:"loading",377:"completed-material",405:"dispath-material",464:"menu-materials",487:"get-todas",499:"create-material",554:"register-user-massive",664:"get-completas",685:"register",702:"select-register",711:"load",752:"register-user",758:"get-pendientes",803:"dashboard-view",818:"auth",830:"all-material",853:"front-auth",942:"not-found",966:"dashboard",976:"Homeview"}[e]||e)+"."+{50:"21c05503",73:"2398223d",90:"12f51dd9",92:"1f18e353",177:"c9c80409",227:"00b0e0ab",377:"4fda25c5",405:"bbd18b1a",464:"e5556239",480:"900b6d2c",487:"7561fb01",499:"1b608285",554:"5c5d3924",664:"d2b4b8be",685:"5731d4a1",702:"22e74c2b",711:"50540ab9",752:"83373590",758:"8b675aa7",803:"19c9e7f1",818:"f4e41cbd",830:"2869f5db",853:"4c4ce5b4",942:"753d37ed",966:"3af0a709",976:"ff9bca46"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{50:"select-login",73:"register-destination",90:"data-menu",177:"home",377:"completed-material",405:"dispath-material",464:"menu-materials",487:"get-todas",499:"create-material",554:"register-user-massive",664:"get-completas",685:"register",702:"select-register",711:"load",752:"register-user",758:"get-pendientes",803:"dashboard-view",853:"front-auth",942:"not-found",966:"dashboard",976:"Homeview"}[e]+"."+{50:"304b872d",73:"4b9cad4a",90:"db4341a2",177:"2b5852ce",377:"6877978f",405:"20dc4a66",464:"6dda9e84",487:"f648da5e",499:"8c0a8ac0",554:"bece83ba",664:"1397c28c",685:"b8c404b5",702:"c2aafddd",711:"2d92869f",752:"b72acba0",758:"30919af3",803:"df40a54e",853:"279a75dc",942:"7c26ae3d",966:"c6307f8d",976:"d5e1dd0c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="backend:";n.l=function(a,i,r,o){if(e[a])e[a].push(i);else{var s,d;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+r){s=c;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[i];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(g);var i=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),d&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=s,i.parentNode.removeChild(i),a(d)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],r=i.getAttribute("data-href");if(r===e||r===t)return i}},a=function(a){return new Promise((function(i,r){var o=n.miniCssF(a),s=n.p+o;if(t(o,s))return i();e(a,s,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={50:1,73:1,90:1,177:1,377:1,405:1,464:1,487:1,499:1,554:1,664:1,685:1,702:1,711:1,752:1,758:1,803:1,853:1,942:1,966:1,976:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=r);var o=n.p+n.u(t),s=new Error,d=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};n.l(o,d,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,o=a[0],s=a[1],d=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(d)var u=d(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunkbackend"]=self["webpackChunkbackend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5887)}));a=n.O(a)})();
//# sourceMappingURL=app.3e642e9b.js.map