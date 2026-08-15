"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var b=x(function(F,p){
function h(e,r,v,o,a,t,u){var c,n,f,l,s,i,y,q;for(c=r.data,n=a.data,f=r.accessors[0],l=a.accessors[1],s=!0,i=o,y=u,q=0;q<e;q++)s&&!f(c,i)&&(s=!1),l(n,y,s),i+=v,y+=t;return a}p.exports=h
});var g=x(function(G,P){
var d=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(e,r,v,o,a,t,u){var c,n,f,l,s,i;if(e<=0)return a;if(n=d(r),f=d(a),n.accessorProtocol||f.accessorProtocol)return w(e,n,v,o,f,t,u),a;for(c=!0,l=o,s=u,i=0;i<e;i++)c&&!r[l]&&(c=!1),a[s]=c,l+=v,s+=t;return a}P.exports=z
});var m=x(function(H,k){
var j=require('@stdlib/strided-base-stride2offset/dist'),A=g();function B(e,r,v,o,a){var t=j(e,v),u=j(e,a);return A(e,r,v,t,o,a,u)}k.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),D=g();C(R,"ndarray",D);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
