"use strict";(self.webpackChunktravex=self.webpackChunktravex||[]).push([[245],{126:function(e,t){t.Z=Object.freeze({LOGIN:"/api/login",CREATE_USER:"/api/register",CREATE_BUSINESS:"/api/business/register",PROFILE:"/api/profile",USERS:"/api/masteradmin/users",LOCATION:function(e){return"/api/locations/".concat(e)},MASTER_LOCATIONS:"/api/admin/locations",CREATE_LOCATION_BY_MASTER_ADMIN:"/api/masteradmin/locations",MY_LOCATION:"/api/profile/locations",APPROVE_LOCATION:function(e){return"/api/locations/".concat(e,"/approve")},ADD_REVIEW:function(e){return"/api/locations/".concat(e,"/reviews")},APPROVE_REVIEW:function(e){return"/api/locations/".concat(e,"/reviews/approveReview")},ADD_REPLY:function(e){return"/api/locations/".concat(e,"/reviews/addComment")},APPROVE_REPLY:function(e){return"/api/locations/".concat(e,"/comments/approveReply")}})},4918:function(e,t,n){n.d(t,{J:function(){return d},z:function(){return u}});var r=n(4165),i=n(5861),s=n(8669),o=n(126),a=n(2917),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n,i){var a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="master_admin"===i?o.Z.MASTER_LOCATIONS:"".concat(o.Z.LOCATION(t),"?search=").concat(n),e.next=3,s.Z.get(a);case 3:return c=e.sent,d=c.data,e.abrupt("return",d);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,a.a)(["listings",e,t,n],(function(){return c(e,t,n)}),r)},l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(o.Z.MY_LOCATION);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.a)(["my-listings"],l,e)}},2039:function(e,t,n){n.d(t,{U:function(){return d},q:function(){return u}});var r=n(4165),i=n(5861),s=n(8669),o=n(126),a=n(2917),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(o.Z.PROFILE);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.a)(["profile"],c,e)},l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(o.Z.USERS);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.a)(["users"],l,e)}},245:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(8348),i=n(4087),s=n(2893),o=n(176),a=n(972),c=n(1016),d=n(1352),l=n(6117),u=n(7987),h=n(1900),x=n(2732),p=n(553),f=n(3129),j=n(5237),g=n(8500),v=n(4004),m=n(6690),T=n(3627),b=n(4363),y=n(954),Z=n(8574),w=n(6146),S=n(7908),A=n(9352),R=n(2039),E=(n(2791),n(7689)),_=n(9126),O=n(4918),L=n(184);function C(){var e=(0,E.s0)(),t=(0,R.U)(),n=t.data,C=t.isLoading,k=(0,r.q)().onToggle,I=(0,R.q)({enabled:"master_admin"===(null===n||void 0===n?void 0:n.Role)}),N=I.data,P=I.isLoading,D=I.isError,U=(0,O.J)("","",null===n||void 0===n?void 0:n.Role,{enabled:!!N}),W=U.data,z=U.isLoading,M=U.isError;return C||"master_admin"===(null===n||void 0===n?void 0:n.Role)&&P||z?(0,L.jsx)(S.aN,{height:"600px"}):D||M?(0,L.jsx)(S.ub,{heading:"Ooops an error occured!",bg:"white"}):"master_admin"!==(null===n||void 0===n?void 0:n.Role)?(0,L.jsx)(S.ub,{bg:"white",height:"400px",heading:"You do not have enough permission to access this screen. Click the button below to go back",btn:(0,L.jsx)(S.zx,{mode:"secondary",variant:"solid",size:"lg",onClick:function(){return e(-1)},children:"Go Back"})}):(0,L.jsxs)(i.xu,{py:{base:"20px",md:"60px"},px:{base:"24px",md:"80px",lg:"120px"},children:[(0,L.jsxs)(s.U,{spacing:"16px",mb:"40px",children:[(0,L.jsxs)(o.k,{bg:"gray.300",borderRadius:"16px",py:"20px",px:"30px",width:"200px",justify:"center",flexDirection:"column",children:[(0,L.jsx)(S.ZT,{textStyle:"11",color:"white",fontWeight:500,textAlign:"left",mb:"10px",children:"Users"}),(0,L.jsx)(S.ZT,{textStyle:"10",color:"gray.50",textAlign:"left",children:null===N||void 0===N?void 0:N.length})]}),(0,L.jsxs)(o.k,{bg:"gray.300",borderRadius:"16px",py:"20px",px:"30px",width:"200px",justify:"center",flexDirection:"column",children:[(0,L.jsx)(S.ZT,{textStyle:"11",color:"white",fontWeight:500,textAlign:"left",mb:"10px",children:"Listings"}),(0,L.jsx)(S.ZT,{textStyle:"10",color:"gray.50",textAlign:"left",children:null===W||void 0===W?void 0:W.length})]})]}),(0,L.jsxs)(a.U,{allowMultiple:!0,defaultIndex:[0,1],children:[(0,L.jsxs)(c.Q,{borderTop:"0px",children:[(0,L.jsx)("h2",{children:(0,L.jsxs)(d.K,{_hover:{bg:"white"},children:[(0,L.jsx)(S.ZT,{textStyle:"10",fontWeight:500,flex:"1",textAlign:"left",children:"Users"}),(0,L.jsx)(l.X,{})]})}),(0,L.jsx)(u.H,{pb:10,children:(0,L.jsx)(h.x,{border:"1px solid ".concat(A.Z.gray[100]),borderRadius:"16px",children:(null===N||void 0===N?void 0:N.length)<=0?(0,L.jsx)(S.ub,{bg:"white",height:"300px",heading:"No data!"}):(0,L.jsxs)(x.i,{variant:"striped",colorScheme:"dark",children:[(0,L.jsx)(p.h,{children:(0,L.jsxs)(f.Tr,{children:[(0,L.jsx)(j.Th,{children:"Name"}),(0,L.jsx)(j.Th,{children:"Email"}),(0,L.jsx)(j.Th,{children:"Created At"}),(0,L.jsx)(j.Th,{children:"Role"})]})}),(0,L.jsx)(g.p,{children:null===N||void 0===N?void 0:N.map((function(t){return(0,L.jsxs)(f.Tr,{children:[(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",children:"".concat(t.First_name," ").concat(t.Last_name)})}),(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",children:t.Email})}),(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",children:new Date(t.Created_at).toDateString()})}),(0,L.jsx)(v.Td,{children:(0,L.jsxs)(o.k,{align:"center",justify:"space-between",minW:"160px",children:[(0,L.jsx)(S.ZT,{textStyle:"12",children:t.Role}),(0,L.jsxs)(m.J,{placement:"bottom-end",children:[(0,L.jsx)(T.x,{children:(0,L.jsx)(S.zx,{size:"sm",width:"20px",height:"20px",variant:"unstyled",boxShadow:"none",mode:"secondary",onClick:k,isDisabled:"admin"!==t.Role,children:(0,L.jsx)(b.J,{as:_.FQA})})}),(0,L.jsx)(y.y,{maxWidth:"180px",_focusVisible:{boxShadow:"none",outline:"none"},children:(0,L.jsx)(Z.b,{px:0,children:(0,L.jsx)(w.g,{width:"100%",spacing:"4px",children:(0,L.jsx)(o.k,{width:"100%",height:"30px",align:"center",px:"14px",cursor:"pointer",_hover:{bg:"gray.50"},onClick:function(){return e("/create-listing?userId=".concat(t.Id))},children:(0,L.jsx)(S.ZT,{textStyle:"12",children:"Create Listing"})})})})})]})]})})]},t.Id)}))})]})})})]}),(0,L.jsx)(c.Q,{borderBottom:"0px",children:function(t){var n=t.isExpanded;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("h2",{children:(0,L.jsxs)(d.K,{_hover:{bg:"white"},pt:n?"30px":"0px",children:[(0,L.jsx)(S.ZT,{textStyle:"10",fontWeight:500,flex:"1",textAlign:"left",children:"Listings"}),(0,L.jsx)(l.X,{})]})}),(0,L.jsx)(u.H,{pb:10,children:(0,L.jsx)(h.x,{border:"1px solid ".concat(A.Z.gray[100]),borderRadius:"16px",children:(null===W||void 0===W?void 0:W.length)<=0?(0,L.jsx)(S.ub,{bg:"white",height:"300px",heading:"No data!"}):(0,L.jsxs)(x.i,{variant:"striped",colorScheme:"dark",children:[(0,L.jsx)(p.h,{children:(0,L.jsxs)(f.Tr,{children:[(0,L.jsx)(j.Th,{children:"Name"}),(0,L.jsx)(j.Th,{children:"Description"}),(0,L.jsx)(j.Th,{children:"Type"}),(0,L.jsx)(j.Th,{children:"Created At"}),(0,L.jsx)(j.Th,{children:"Author"}),(0,L.jsx)(j.Th,{children:"Status"})]})}),(0,L.jsx)(g.p,{children:null===W||void 0===W?void 0:W.map((function(t){return(0,L.jsxs)(f.Tr,{cursor:"pointer",onClick:function(){return e("/listings/".concat(t.LocationType.Name,"/").concat(t.Id))},children:[(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",children:t.Name})}),(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",noOfLines:1,maxWidth:"270px",children:t.Description})}),(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",noOfLines:1,children:t.LocationType.Name})}),(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",children:new Date(t.Created_at).toDateString()})}),(0,L.jsx)(v.Td,{children:(0,L.jsx)(S.ZT,{textStyle:"12",children:"".concat(t.User.First_name," ").concat(t.User.Last_name)})}),(0,L.jsx)(v.Td,{children:(0,L.jsx)(o.k,{align:"center",justify:"space-between",children:(0,L.jsx)(S.Vp,{size:"sm",variant:"subtle",colorScheme:t.IsApproved?"success":"warning",children:t.IsApproved?"published":"unpublished"})})})]},t.Id)}))})]})})})]})}})]})]})}},8669:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(3263),i=n(691),s=n.n(i),o=n(1986),a=r.Z.create({baseURL:"https://www.travexapitest.co.uk"});function c(e){return e.results?Promise.resolve(e.results):e.data?Promise.resolve(e.data):Promise.resolve(e)}a.interceptors.request.use((function(e){var t=(0,o.bW)();return t&&!e.headers.hasOwnProperty("Authorization")&&(e.headers.Authorization="Bearer ".concat(t)),e})),a.interceptors.request.use((function(e){return s().start(),e})),a.interceptors.response.use((function(e){return s().done(),e}),(function(e){if(s().done(),e.response&&e.response.data&&e.response.data.message)if(401===e.response.status)e={response:{data:e.response.data}},(0,o.H6)();else if(404===e.response.status)e={response:{data:e.response.data}};else{if(500!==e.response.status)return Promise.reject(e);e={response:{data:{message:"Ooops! an error occurred"}}}}else e={response:{data:{message:"Unable to complete request"}}};throw e}));function d(e){return e.data?Promise.reject(e.data):e.response.data?Promise.reject(e.response.data):Promise.reject(e)}var l={get:function(e){return a.get(e).then(c).catch(d)},post:function(e,t,n){return a.post(e,t,n).then(c).catch(d)},put:function(e,t){return a.put(e,t).then(c).catch(d)},patch:function(e,t){return a.patch(e,t).then(c).catch(d)},remove:function(e,t){return a.delete(e,t).then(c).catch(d)}}}}]);
//# sourceMappingURL=245.3e271b3f.chunk.js.map