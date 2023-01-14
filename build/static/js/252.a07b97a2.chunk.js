"use strict";(self.webpackChunktravex=self.webpackChunktravex||[]).push([[252],{3131:function(e,r,a){a.d(r,{_N:function(){return o},x9:function(){return s}});var n=a(9085),t={autoClose:2e3,className:"",position:n.Am.POSITION.TOP_RIGHT},s=function(e){n.Am.success(e,t)},o=function(e){n.Am.error(e,t)}},126:function(e,r){r.Z=Object.freeze({LOGIN:"/api/login",CREATE_USER:"/api/register",CREATE_BUSINESS:"/api/business/register",PROFILE:"/api/profile",USERS:"/api/masteradmin/users",LOCATION:function(e){return"/api/locations/".concat(e)},MASTER_LOCATIONS:"/api/admin/locations",CREATE_LOCATION_BY_MASTER_ADMIN:"/api/masteradmin/locations",MY_LOCATION:"/api/profile/locations",APPROVE_LOCATION:function(e){return"/api/locations/".concat(e,"/approve")},ADD_REVIEW:function(e){return"/api/locations/".concat(e,"/reviews")},APPROVE_REVIEW:function(e){return"/api/locations/".concat(e,"/reviews/approveReview")},ADD_REPLY:function(e){return"/api/locations/".concat(e,"/reviews/addComment")},APPROVE_REPLY:function(e){return"/api/locations/".concat(e,"/comments/approveReply")}})},4252:function(e,r,a){a.r(r),a.d(r,{default:function(){return A}});a(2791);var n=a(176),t=a(6146),s=a(9683),o=a(7908),i=a(5705),l=a(1724),u=l.Ry().shape({firstName:l.Z_().label("Firstname").required("Firstname should not be empty").min(2,"Must have at least 2 characters"),lastName:l.Z_().label("Lastname").required("Lastname should not be empty").min(2,"Must have at least 2 characters"),email:l.Z_("Enter your email").required("Email is required").email("Email is invalid"),password:l.Z_().label("Password").required("Password should not be empty").min(8,(function(e){var r=e.min;return" ".concat(r," Characters or longer")})),confirmPassword:l.Z_().label("Confirm Password").required("Confirm your password").oneOf([l.iH("password")],"Passwords does not match")}),c=a(4925),d=a(9439),m=a(3418),p=a(8669),h=a(126),f=a(3131),g=a(1986),w=a(1087),v=["mutate"];var C=a(7689),x=a(184);var A=function(){var e=(0,C.s0)(),r=function(){var e=(0,w.lr)(),r="creator"===(0,d.Z)(e,1)[0].get("role")?h.Z.CREATE_BUSINESS:h.Z.CREATE_USER,a=(0,m.D)((function(e){return p.Z.post(r,e)})),n=a.mutate;return{createUser:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};n(e,{onSuccess:function(e){(0,f.x9)(e.message),(0,g.E8)(e.data.accessToken),r(e)},onError:function(e){(0,f._N)(e.message)}})},createUserState:(0,c.Z)(a,v)}}(),a=r.createUser,l=r.createUserState,A=(0,g.z1)(),P=(0,i.TA)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validationSchema:u,onSubmit:function(r){a(r,(function(r){A?(e(A),(0,g.Gk)()):"master_admin"===r.data.user.Role?e("/dashboard"):"admin"===r.data.user.Role?e("/my-listings"):e("/")}))}});return(0,x.jsx)(n.k,{height:"100%",width:"100%",alignItems:"center",justifyContent:"center",bg:"gray.200",p:"20px",children:(0,x.jsxs)(n.k,{flexDirection:"column",alignItems:"center",justifyContent:"center",bg:"white",py:"60px",px:{base:"30px",sm:"40px",md:"60px"},maxWidth:"600px",width:"100%",borderRadius:"24px",children:[(0,x.jsx)(o.ZT,{textStyle:"7",fontWeight:700,mb:{base:"30px",sm:"40px",md:"60px"},children:"Create an Account"}),(0,x.jsx)("form",{onSubmit:function(e){e.preventDefault(),P.handleSubmit(e)},id:"user-registration-form",style:{width:"100%"},children:(0,x.jsxs)(t.g,{spacing:"20px",width:"100%",children:[(0,x.jsxs)(s.M,{columns:{base:1,sm:2},spacing:"20px",children:[(0,x.jsx)(o.II,{id:"firstName",name:"firstName",variant:"outline",placeholder:"First Name",value:P.values.firstName,onChange:P.handleChange,onBlur:P.handleBlur,isInvalid:P.touched.firstName&&Boolean(P.errors.firstName),errorMsg:P.errors.firstName}),(0,x.jsx)(o.II,{id:"lastName",name:"lastName",variant:"outline",placeholder:"Last Name",value:P.values.lastName,onChange:P.handleChange,onBlur:P.handleBlur,isInvalid:P.touched.lastName&&Boolean(P.errors.lastName),errorMsg:P.errors.lastName})]}),(0,x.jsxs)(s.M,{columns:{base:1,sm:2},spacing:"20px",children:[(0,x.jsx)(o.II,{id:"email",name:"email",variant:"outline",placeholder:"Email Address",type:"email",value:P.values.email,onChange:P.handleChange,onBlur:P.handleBlur,isInvalid:P.touched.email&&Boolean(P.errors.email),errorMsg:P.errors.email}),(0,x.jsx)(o.II,{id:"password",name:"password",variant:"outline",placeholder:"Your Password",type:"password",value:P.values.password,onChange:P.handleChange,onBlur:P.handleBlur,isInvalid:P.touched.password&&Boolean(P.errors.password),errorMsg:P.errors.password})]}),(0,x.jsx)(o.II,{id:"confirmPassword",name:"confirmPassword",variant:"outline",placeholder:"Confirm Password",type:"password",value:P.values.confirmPassword,onChange:P.handleChange,onBlur:P.handleBlur,isInvalid:P.touched.confirmPassword&&Boolean(P.errors.confirmPassword),errorMsg:P.errors.confirmPassword}),(0,x.jsx)(o.zx,{width:"100%",variant:"solid",mode:"secondary",type:"submit",isDisabled:l.isLoading||0!==Object.keys(P.errors).length,isLoading:l.isLoading,children:"Create Account"}),(0,x.jsx)(o.rU,{fontWeight:500,href:"/login",children:"Already A member? Login"})]})})]})})}},8669:function(e,r,a){a.d(r,{Z:function(){return c}});var n=a(3263),t=a(691),s=a.n(t),o=a(1986),i=n.Z.create({baseURL:"https://www.travexapitest.co.uk"});function l(e){return e.results?Promise.resolve(e.results):e.data?Promise.resolve(e.data):Promise.resolve(e)}i.interceptors.request.use((function(e){var r=(0,o.bW)();return r&&!e.headers.hasOwnProperty("Authorization")&&(e.headers.Authorization="Bearer ".concat(r)),e})),i.interceptors.request.use((function(e){return s().start(),e})),i.interceptors.response.use((function(e){return s().done(),e}),(function(e){if(s().done(),e.response&&e.response.data&&e.response.data.message)if(401===e.response.status)e={response:{data:e.response.data}},(0,o.H6)();else if(404===e.response.status)e={response:{data:e.response.data}};else{if(500!==e.response.status)return Promise.reject(e);e={response:{data:{message:"Ooops! an error occurred"}}}}else e={response:{data:{message:"Unable to complete request"}}};throw e}));function u(e){return e.data?Promise.reject(e.data):e.response.data?Promise.reject(e.response.data):Promise.reject(e)}var c={get:function(e){return i.get(e).then(l).catch(u)},post:function(e,r,a){return i.post(e,r,a).then(l).catch(u)},put:function(e,r){return i.put(e,r).then(l).catch(u)},patch:function(e,r){return i.patch(e,r).then(l).catch(u)},remove:function(e,r){return i.delete(e,r).then(l).catch(u)}}},9683:function(e,r,a){a.d(r,{M:function(){return h}});var n=a(1413),t=a(4925),s=a(7872),o=a(9745),i=a(184),l=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],u=(0,s.G)((function(e,r){var a=e.templateAreas,s=e.gap,u=e.rowGap,c=e.columnGap,d=e.column,m=e.row,p=e.autoFlow,h=e.autoRows,f=e.templateRows,g=e.autoColumns,w=e.templateColumns,v=(0,t.Z)(e,l),C={display:"grid",gridTemplateAreas:a,gridGap:s,gridRowGap:u,gridColumnGap:c,gridAutoColumns:g,gridColumn:d,gridRow:m,gridAutoFlow:p,gridAutoRows:h,gridTemplateRows:f,gridTemplateColumns:w};return(0,i.jsx)(o.m.div,(0,n.Z)({ref:r,__css:C},v))}));u.displayName="Grid";var c=a(5310),d=a(3142),m=a(2625),p=["columns","spacingX","spacingY","spacing","minChildWidth"],h=(0,s.G)((function(e,r){var a,s=e.columns,o=e.spacingX,l=e.spacingY,h=e.spacing,f=e.minChildWidth,g=(0,t.Z)(e,p),w=(0,c.F)(),v=f?function(e,r){return(0,m.XQ)(e,(function(e){var a,n=(0,d.LP)("sizes",e,"number"===typeof(a=e)?"".concat(a,"px"):a)(r);return null===e?null:"repeat(auto-fit, minmax(".concat(n,", 1fr))")}))}(f,w):(a=s,(0,m.XQ)(a,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")})));return(0,i.jsx)(u,(0,n.Z)({ref:r,gap:h,columnGap:o,rowGap:l,templateColumns:v},g))}));h.displayName="SimpleGrid"}}]);
//# sourceMappingURL=252.a07b97a2.chunk.js.map