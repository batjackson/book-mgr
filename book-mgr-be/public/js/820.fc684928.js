"use strict";(self["webpackChunkbook_mgr_fe"]=self["webpackChunkbook_mgr_fe"]||[]).push([[820],{7820:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var l=a(3396);const n=(0,l._)("span",null," ",-1),s=(0,l._)("span",null," ",-1);function c(t,e,a,c,u,i){const o=(0,l.up)("a-input"),d=(0,l.up)("a-button"),r=(0,l.up)("a-divider"),m=(0,l.up)("a-table"),_=(0,l.up)("a-card");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(_,{title:"书籍分类管理"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(o,{value:t.title,"onUpdate:value":e[0]||(e[0]=e=>t.title=e),placeholder:"输入书籍分类管理",style:{width:"200px"}},null,8,["value"]),n,(0,l.Wm)(d,{onClick:t.add,type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)("添加")])),_:1},8,["onClick"])]),(0,l.Wm)(r),(0,l._)("div",null,[(0,l.Wm)(m,{bordered:"","data-source":t.list,columns:t.columns,pagination:!1},{bodyCell:(0,l.w5)((({column:e,record:a})=>["actions"===e.dataIndex?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(d,{onClick:e=>t.updateTitle(a),size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("修改")])),_:2},1032,["onClick"]),s,(0,l.Wm)(d,{type:"danger",onClick:e=>t.remove(a),size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:2},1032,["onClick"])],64)):(0,l.kq)("",!0)])),_:1},8,["data-source","columns"])])])),_:1})])}var u=a(4870),i=a(1192),o=a(1731),d=a(6842),r=a(9685);const m=[{title:"分类",dataIndex:"title"},{title:"操作",dataIndex:"actions"}];var _=(0,l.aZ)({setup(){const t=(0,u.iH)(""),e=(0,u.iH)([]),a=async()=>{const t=await i.Ot.list();(0,o.q6)(t).success((({data:t})=>{e.value=t}))},n=async()=>{const e=await i.Ot.add(t.value);(0,o.q6)(e).success((()=>{a(),t.value=""}))};(0,l.bv)((()=>{a()}));const s=async({_id:t})=>{const e=await i.Ot.remove(t);(0,o.q6)(e).success((({msg:t})=>{d.ZP.success(t),a()}))},c=async({_id:t})=>{r.Z.confirm({title:"请输入新的分类名称",content:(0,l.Wm)("div",null,[(0,l.Wm)((0,l.up)("Input"),{class:"__book_classify_new_title"},null)]),onOk:async()=>{const a=document.querySelector(".__book_classify_new_title").value,l=await i.Ot.updateTitle(t,a);(0,o.q6)(l).success((({msg:l})=>{d.ZP.success(l),e.value.forEach((e=>{e._id===t&&(e.title=a)}))}))}})};return{add:n,title:t,list:e,columns:m,remove:s,updateTitle:c}}}),p=a(89);const v=(0,p.Z)(_,[["render",c]]);var k=v}}]);
//# sourceMappingURL=820.fc684928.js.map