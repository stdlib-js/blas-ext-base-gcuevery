"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=x(function(F,p){
function h(e,r,s,o,a,t,u){var c,n,f,l,v,i,y,q;for(c=r.data,n=a.data,f=r.accessors[0],l=a.accessors[1],v=!0,i=o,y=u,q=0;q<e;q++)v&&!f(c,i)&&(v=!1),l(n,y,v),i+=s,y+=t;return a}p.exports=h
});var g=x(function(G,P){
var d=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(e,r,s,o,a,t,u){var c,n,f,l,v,i;if(e<=0)return a;if(n=d(r),f=d(a),n.accessorProtocol||f.accessorProtocol)return w(e,n,s,o,f,t,u),a;for(c=!0,l=o,v=u,i=0;i<e;i++)c&&!r[l]&&(c=!1),a[v]=c,l+=s,v+=t;return a}P.exports=z
});var m=x(function(H,k){
var j=require('@stdlib/strided-base-stride2offset/dist'),A=g();function B(e,r,s,o,a){var t=j(e,s),u=j(e,a);return A(e,r,s,t,o,a,u)}k.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),D=g();C(R,"ndarray",D);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
