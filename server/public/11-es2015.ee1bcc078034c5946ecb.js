(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{PXP5:function(e,t,n){"use strict";n.r(t);var i=n("3Pt+"),o=n("ofXK"),l=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[o.b]]}),e})();var a=n("aYsj"),c=n("tyNb");let s=(()=>{class e{transform(e,...t){const n=[];for(let i=0;i<e;i++)n.push(i+1);return console.log(n),n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=l.Ib({name:"nmb2arr",type:e,pure:!0}),e})();var d=n("ZF+8");function b(e,t){1&e&&l.ac(0)}function u(e,t){1&e&&(l.Nb(0,"div",10),l.Nb(1,"p",11),l.mc(2," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. "),l.Mb(),l.Mb(),l.Nb(3,"div",10),l.Nb(4,"span",12),l.mc(5,"#photography"),l.Mb(),l.Nb(6,"span",12),l.mc(7,"#travel"),l.Mb(),l.Nb(8,"span",13),l.mc(9,"#winter"),l.Mb(),l.Mb())}function m(e,t){if(1&e){const e=l.Ob();l.Nb(0,"div",1),l.Nb(1,"div",2),l.Nb(2,"div",3),l.Nb(3,"div",4),l.Nb(4,"div",5),l.mc(5),l.Mb(),l.Nb(6,"button",6),l.Vb("click",(function(){return l.hc(e),l.Xb().fireClose()})),l.Nb(7,"span",7),l.mc(8,"\xd7"),l.Mb(),l.Mb(),l.Mb(),l.Kb(9,"hr"),l.kc(10,b,1,0,"ng-template",8),l.kc(11,u,10,0,"ng-template",null,9,l.lc),l.Mb(),l.Mb(),l.Mb()}if(2&e){const e=l.gc(12),t=l.Xb();l.zb(5),l.nc(t.title||"The Coldest Sunset"),l.zb(5),l.cc("ngIf",t.title)("ngIfElse",e)}}const h=["*"];let p=(()=>{class e{constructor(){this.hidden=!0,this.handleCloseEvent=new l.n}ngOnInit(){}get title(){return this.data.title}fireClose(){this.handleCloseEvent.emit({fromCloseButton:!0})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-modal"]],inputs:{hidden:"hidden",data:"data"},outputs:{handleCloseEvent:"handleCloseEvent"},ngContentSelectors:h,decls:1,vars:1,consts:[["class","static inline-block",4,"ngIf"],[1,"static","inline-block"],[1,"fixed","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"],[1,"max-w-sm","rounded","overflow-hidden","shadow-lg"],[1,"flex","justify-between","bg-gray-200","px-6","py-3"],[1,"font-bold","text-xl"],["type","button","aria-label","Close",1,"px-2","self-start","text-gray-700","bg-gray-300","hover:text-gray-900","hover:bg-gray-400","rounded-full",3,"click"],["aria-hidden","true"],[3,"ngIf","ngIfElse"],["sample",""],[1,"px-6","py-4"],[1,"text-gray-700","text-base"],[1,"inline-block","bg-gray-200","rounded-full","px-3","py-1","text-sm","font-semibold","text-gray-700","mr-2"],[1,"inline-block","bg-gray-200","rounded-full","px-3","py-1","text-sm","font-semibold","text-gray-700"]],template:function(e,t){1&e&&(l.bc(),l.kc(0,m,13,3,"div",0)),2&e&&l.cc("ngIf",!t.hidden)},directives:[o.k],encapsulation:2}),e})();function f(e,t){if(1&e){const e=l.Ob();l.Nb(0,"div",4),l.Nb(1,"ul"),l.Nb(2,"li",5),l.Nb(3,"a",6),l.Vb("click",(function(){return l.hc(e),l.Xb().optionEdit()})),l.mc(4," Editar "),l.Mb(),l.Mb(),l.Nb(5,"li",5),l.Nb(6,"a",6),l.Vb("click",(function(){return l.hc(e),l.Xb().optionDelete()})),l.mc(7," Eliminar "),l.Mb(),l.Mb(),l.Mb(),l.Mb()}}let g=(()=>{class e{constructor(){this.hidden=!0,this.handleEdit=new l.n,this.handleDelete=new l.n}ngOnInit(){}optionEdit(){this.handleEdit.emit()}optionDelete(){this.handleDelete.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-options"]],inputs:{hidden:"hidden"},outputs:{handleEdit:"handleEdit",handleDelete:"handleDelete"},decls:5,vars:1,consts:[[1,"rounded-md","focus:outline-none","focus:bg-gray-100","hover:bg-gray-100","outline-none",3,"focus","focusout"],[1,"relative","inline-block"],[1,"px-2","py-1","text-gray-600"],["class","absolute z-10 py-2 shadow-xs rounded-md bg-gray-100 transform -translate-x-1/2",4,"ngIf"],[1,"absolute","z-10","py-2","shadow-xs","rounded-md","bg-gray-100","transform","-translate-x-1/2"],[1,"flex","px-5","py-2","hover:bg-gray-200"],[1,"block","align-baseline","text-sm","text-gray-800","cursor-pointer",3,"click"]],template:function(e,t){1&e&&(l.Nb(0,"button",0),l.Vb("focus",(function(){return t.hidden=!1}))("focusout",(function(){return t.hidden=!0})),l.Nb(1,"div",1),l.Nb(2,"span",2),l.mc(3,"..."),l.Mb(),l.kc(4,f,8,0,"div",3),l.Mb(),l.Mb()),2&e&&(l.zb(4),l.cc("ngIf",!t.hidden))},directives:[o.k],encapsulation:2}),e})();const x=["*"];let v=(()=>{class e{constructor(){this.handleEdit=new l.n,this.handleDelete=new l.n}ngOnInit(){}optionEdit(){this.handleEdit.emit(this.item)}optionDelete(){this.handleDelete.emit(this.item)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-item"]],inputs:{item:"item"},outputs:{handleEdit:"handleEdit",handleDelete:"handleDelete"},ngContentSelectors:x,decls:3,vars:0,consts:[[1,"md:justify-between","md:flex-row","flex","flex-col-reverse","bg-white","transition-all","duration-150","ease-in-out","hover:shadow-md","rounded-lg","p-4","m-2"],[1,"self-end",3,"handleEdit","handleDelete"]],template:function(e,t){1&e&&(l.bc(),l.Nb(0,"div",0),l.ac(1),l.Nb(2,"app-options",1),l.Vb("handleEdit",(function(){return t.optionEdit()}))("handleDelete",(function(){return t.optionDelete()})),l.Mb(),l.Mb())},directives:[g],encapsulation:2}),e})();function y(e,t){1&e&&l.ac(0)}function w(e,t){1&e&&l.Lb(0)}const M=function(e,t){return{"line-through":e,"text-gray-600":t}},N=["*"];let k=(()=>{class e{constructor(){this.fireEdit=new l.n}ngOnInit(){}setSelected(e){this.item.setCompleted(e.target.checked),this.fireEdit.emit(this.item.isCompleted())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-markable-item"]],inputs:{item:"item"},outputs:{fireEdit:"fireEdit"},ngContentSelectors:N,decls:6,vars:6,consts:[[1,"flex","items-baseline"],["content",""],["type","checkbox",1,"md:mx-6","mx-3","leading-tight",3,"checked","change"],[1,"flex-grow","text-sm","line-through","text-gray-600",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(e,t){if(1&e&&(l.bc(),l.Nb(0,"div",0),l.kc(1,y,1,0,"ng-template",null,1,l.lc),l.Nb(3,"input",2),l.Vb("change",(function(e){return t.setSelected(e)})),l.Mb(),l.Nb(4,"span",3),l.kc(5,w,1,0,"ng-container",4),l.Mb(),l.Mb()),2&e){const e=l.gc(2);l.zb(3),l.cc("checked",t.item.isCompleted()),l.zb(1),l.cc("ngClass",l.ec(3,M,t.item.isCompleted(),t.item.isCompleted())),l.zb(1),l.cc("ngTemplateOutlet",e)}},directives:[o.i,o.o],encapsulation:2}),e})();function D(e,t){1&e&&(l.Nb(0,"span",7),l.Kb(1,"div",8),l.mc(2,"Prioridad baja"),l.Mb())}function E(e,t){1&e&&(l.Nb(0,"span",7),l.Kb(1,"div",9),l.mc(2,"Prioridad media"),l.Mb())}function C(e,t){1&e&&(l.Nb(0,"span",7),l.Kb(1,"div",10),l.mc(2,"Prioridad alta"),l.Mb())}const I=["*"];let z=(()=>{class e{constructor(){this.handleEdit=new l.n}ngOnInit(){}fireEditEvent(){this.handleEdit.emit(this.item)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-editable-item"]],inputs:{item:"item"},outputs:{handleEdit:"handleEdit"},ngContentSelectors:I,decls:14,vars:12,consts:[[1,"cursor-pointer","w-custom-behavior",3,"click"],[1,"flex-grow","inline-block","text-right","mx-3"],[1,"inline-block","mx-3","cursor-pointer","text-left",2,"min-width","120px",3,"ngSwitch","click"],["style","min-width: 120px;",4,"ngSwitchCase"],["style","min-width: 120px;",4,"ngSwitchDefault"],[1,"inline-block","pl-2","text-center","cursor-pointer",2,"min-width","75px",3,"click"],[1,"inline-block","pl-2","text-center","cursor-pointer",2,"min-width","40px",3,"click"],[2,"min-width","120px"],[1,"inline-block","m-1","rounded-full","bg-red-500","w-2","h-2"],[1,"inline-block","m-1","rounded-full","bg-yellow-500","w-2","h-2"],[1,"inline-block","m-1","rounded-full","bg-green-500","w-2","h-2"]],template:function(e,t){1&e&&(l.bc(),l.ac(0),l.Nb(1,"span",0),l.Vb("click",(function(){return t.fireEditEvent()})),l.mc(2),l.Mb(),l.Nb(3,"span",1),l.Nb(4,"span",2),l.Vb("click",(function(){return t.fireEditEvent()})),l.kc(5,D,3,0,"span",3),l.kc(6,E,3,0,"span",3),l.kc(7,C,3,0,"span",4),l.Mb(),l.Nb(8,"span",5),l.Vb("click",(function(){return t.fireEditEvent()})),l.mc(9),l.Yb(10,"date"),l.Mb(),l.Nb(11,"span",6),l.Vb("click",(function(){return t.fireEditEvent()})),l.mc(12),l.Yb(13,"date"),l.Mb(),l.Mb()),2&e&&(l.zb(2),l.oc(" ",t.item.getName(),"\n"),l.zb(2),l.cc("ngSwitch",!0),l.zb(1),l.cc("ngSwitchCase",t.item.getPriority()<4),l.zb(1),l.cc("ngSwitchCase",t.item.getPriority()>=4&&t.item.getPriority()<7),l.zb(3),l.oc(" ",l.Zb(10,6,t.item.getDate(),"yyyy-MM-dd")," "),l.zb(3),l.oc(" ",l.Zb(13,9,t.item.getDate(),"HH:mm")," "))},directives:[o.l,o.m,o.n],pipes:[o.d],styles:["@media (min-width: 640px) {\n    .w-custom-behavior[_ngcontent-%COMP%] {\n      max-width: calc(100% - 292px);\n    }\n  }"]}),e})();function S(e,t){if(1&e){const e=l.Ob();l.Nb(0,"li"),l.Nb(1,"app-item",7),l.Vb("handleEdit",(function(){l.hc(e);const n=t.index;return l.Xb().handleEdit(n)}))("handleDelete",(function(){l.hc(e);const n=t.index;return l.Xb().handleDelete(n)})),l.Nb(2,"app-markable-item",8),l.Vb("fireEdit",(function(){l.hc(e);const n=t.index,i=t.$implicit;return l.Xb().saveItem(n,i)})),l.Nb(3,"app-editable-item",9),l.Vb("handleEdit",(function(){l.hc(e);const n=t.index;return l.Xb().handleEdit(n)})),l.Mb(),l.Mb(),l.Mb(),l.Mb()}if(2&e){const e=t.$implicit;l.zb(1),l.cc("item",e),l.zb(1),l.cc("item",e),l.zb(1),l.cc("item",e)}}function V(e,t){if(1&e){const e=l.Ob();l.Nb(0,"form",10),l.Nb(1,"div",11),l.Nb(2,"div",12),l.Nb(3,"label",13),l.mc(4," Priority "),l.Mb(),l.Nb(5,"input",14),l.Vb("blur",(function(t){return l.hc(e),l.Xb().editable.item.priority=t.target.value})),l.Mb(),l.Mb(),l.Nb(6,"div",15),l.Nb(7,"label",16),l.mc(8," Name "),l.Mb(),l.Nb(9,"input",17),l.Vb("blur",(function(t){return l.hc(e),l.Xb().editable.item.name=t.target.value})),l.Mb(),l.Mb(),l.Mb(),l.Nb(10,"div",11),l.Nb(11,"div",18),l.Nb(12,"label",19),l.mc(13," Due Date "),l.Mb(),l.Nb(14,"input",20),l.Vb("blur",(function(t){return l.hc(e),l.Xb().editItemDate(t.target.value)})),l.Yb(15,"date"),l.Mb(),l.Mb(),l.Nb(16,"div",18),l.Nb(17,"label",21),l.mc(18," Time "),l.Mb(),l.Nb(19,"input",22),l.Vb("blur",(function(t){return l.hc(e),l.Xb().editItemTime(t.target.value)})),l.Yb(20,"date"),l.Mb(),l.Mb(),l.Mb(),l.Nb(21,"div",23),l.Nb(22,"button",24),l.Vb("click",(function(){return l.hc(e),l.Xb().handleSaveItem()})),l.mc(23," Save "),l.Mb(),l.Mb(),l.Mb()}if(2&e){const e=l.Xb();l.zb(5),l.cc("value",e.editable.item.priority),l.zb(4),l.cc("value",e.editable.item.name),l.zb(5),l.cc("value",l.Zb(15,5,e.editable.item.date,"yyyy-MM-dd")),l.zb(5),l.cc("value",l.Zb(20,8,e.editable.item.date,"HH:mm")),l.zb(3),l.cc("disabled",e.saving)}}const L=[{path:"",component:(()=>{class e{constructor(e,t){this.toDoListService=e,this.dateHelper=t,this.saving=!1,this.toDoListService.getAll().then(e=>this.toDoList=e),this.hideModal()}ngOnInit(){}hideModal(){this.editable={title:null,index:-1,item:null}}handleCreate(){this.editable={title:"Crear tarea",index:-1,item:this.toDoListService.createEmptyToDo().cloneToJson()},console.log({item:this.editable.item})}handleEdit(e){const t=this.toDoList[e].cloneToJson(!0);this.editable={title:"Editar tarea",index:e,item:t}}handleDelete(e){return this.toDoListService.deleteToDoById(this.toDoList[e].getId(),this.toDoList)}editItemDate(e){this.editable.item.date=this.dateHelper.dateFromString(e,this.editable.item.date)}editItemTime(e){this.editable.item.date=this.dateHelper.dateFromTimeString(e,this.editable.item.date)}saveItem(e,t){this.save({index:e,item:t})}handleSaveItem(){try{this.saving=!0,this.save(this.editable).then(()=>{this.hideModal(),this.saving=!1}).catch(e=>{console.error("ToDoListComponent -> handleSaveItem -> Promise catch:error",{error:e}),this.saving=!1})}catch(e){console.error("ToDoListComponent -> handleSaveItem -> catch:error",{error:e}),this.saving=!1}}save(e){try{return e.index<0?this.toDoListService.createToDo(e.item,this.toDoList):this.toDoListService.updateToDo(Object.assign(Object.assign({},e.item),{_id:this.toDoList[e.index].getId()}),this.toDoList)}catch(t){return console.error("ToDoListComponent -> saveItem -> error",{error:t}),Promise.reject(t)}}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(d.c),l.Jb(d.a))},e.\u0275cmp=l.Db({type:e,selectors:[["ng-component"]],features:[l.yb([s])],decls:10,vars:4,consts:[[1,"task-header","relative","mb-5"],[1,"text-right","align-baseline","font-bold","text-xl","text-gray-700","pt-8","mx-8","mt-8"],[1,"custom-plus","sticky","bottom-0","right-0","m-4","rounded-full","bg-blue-400","hover:bg-blue-400","shadow-lg","text-5xl","text-white","cursor-pointer",3,"click"],[1,"list-none"],[4,"ngFor","ngForOf"],[3,"data","hidden","handleCloseEvent"],["class","bg-gray-100 py-6 px-4",4,"ngIf"],[3,"item","handleEdit","handleDelete"],[1,"flex-grow",3,"item","fireEdit"],[1,"flex","flex-col-reverse","sm:flex-row",3,"item","handleEdit"],[1,"bg-gray-100","py-6","px-4"],[1,"flex","flex-wrap","-mx-1","mb-6"],[1,"w-full","md:w-1/4","px-1","mb-1","md:mb-0"],["for","priority",1,"block","tracking-wide","text-gray-700","text-sm","font-bold","mb-2"],["id","priority","type","number","placeholder","1","min","0","max","10",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline",3,"value","blur"],[1,"w-full","md:w-3/4","px-1","mb-1","md:mb-0"],["for","name",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["id","name","type","text","placeholder","deploy microservice",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline",3,"value","blur"],[1,"w-full","md:w-1/2","px-1","mb-1","md:mb-0"],["for","due-date",1,"block","tracking-wide","text-gray-700","text-sm","font-bold","mb-2"],["id","due-date","type","date","placeholder","Doe",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline",3,"value","blur"],["for","time",1,"block","tracking-wide","text-gray-700","text-sm","font-bold","mb-2"],["id","time","type","time","placeholder","Doe",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline",3,"value","blur"],[1,"flex","items-center","justify-end"],["type","button",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"disabled","click"]],template:function(e,t){1&e&&(l.Nb(0,"div",0),l.Nb(1,"h1",1),l.mc(2," Tareas "),l.Mb(),l.Kb(3,"hr"),l.Nb(4,"a",2),l.Vb("click",(function(){return t.handleCreate()})),l.mc(5,"+"),l.Mb(),l.Mb(),l.Nb(6,"ul",3),l.kc(7,S,4,3,"li",4),l.Mb(),l.Nb(8,"app-modal",5),l.Vb("handleCloseEvent",(function(){return t.hideModal()})),l.kc(9,V,24,11,"form",6),l.Mb()),2&e&&(l.zb(7),l.cc("ngForOf",t.toDoList),l.zb(1),l.cc("data",t.editable)("hidden",!t.editable.title),l.zb(1),l.cc("ngIf",t.editable.item))},directives:[o.j,p,o.k,v,k,z,i.d,i.b,i.c],pipes:[o.d],styles:[".task-header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n  }\n  .custom-plus[_ngcontent-%COMP%] {\n    line-height: 0px;\n    box-sizing: content-box;\n    padding: 0 16px 4px;\n  }"]}),e})()}];let O=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[c.b.forChild(L)],c.b]}),e})();n.d(t,"TaskModule",(function(){return T}));let T=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[o.b,O,a.a,i.a,r]]}),e})()}}]);