"use strict";(self["webpackChunkbook_mgr_fe"]=self["webpackChunkbook_mgr_fe"]||[]).push([[224],{224:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var n=e(3396);const c=(0,n._)("span",null," ",-1);function u(t,a,e,u,s,l){const o=(0,n.up)("a-button"),r=(0,n.up)("a-table"),i=(0,n.up)("a-pagination"),d=(0,n.up)("flex-end"),g=(0,n.up)("a-card");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(g,{title:"重置密码申请列表"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{bordered:"","data-source":t.list,columns:t.columns,pagination:!1},{bodyCell:(0,n.w5)((({column:a,record:e})=>["actions"===a.dataIndex?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(o,{size:"small",type:"primary",onClick:a=>t.changeStatus(e,2)},{default:(0,n.w5)((()=>[(0,n.Uk)("重置")])),_:2},1032,["onClick"]),c,(0,n.Wm)(o,{size:"small",type:"danger",onClick:a=>t.changeStatus(e,3)},{default:(0,n.w5)((()=>[(0,n.Uk)("忽略")])),_:2},1032,["onClick"])],64)):(0,n.kq)("",!0)])),_:1},8,["data-source","columns"]),(0,n.Wm)(d,{style:{"margin-top":"24px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{current:t.curPage,"onUpdate:current":a[0]||(a[0]=a=>t.curPage=a),pageSize:10,total:t.total,onChange:t.setPage},null,8,["current","total","onChange"])])),_:1})])),_:1})])}var s=e(4870),l=e(1192),o=e(1731),r=e(6842);const i=[{title:"账户",dataIndex:"account"},{title:"操作",dataIndex:"actions"}];var d=(0,n.aZ)({setup(){const t=(0,s.iH)([]),a=(0,s.iH)(1),e=(0,s.iH)(0),c=async()=>{const n=await l.c0.list(a.value,10);(0,o.q6)(n).success((({data:{list:a,total:n}})=>{t.value=a,e.value=n}))};(0,n.bv)((()=>{c()}));const u=async({_id:t},a)=>{const e=await l.c0.update(t,a);(0,o.q6)(e).success((({msg:t})=>{r.ZP.success(t),c()}))},d=t=>{a.value=t,c()};return{total:e,list:t,columns:i,changeStatus:u,curPage:a,setPage:d}}}),g=e(89);const p=(0,g.Z)(d,[["render",u]]);var m=p}}]);
//# sourceMappingURL=224.4ea1a7e0.js.map