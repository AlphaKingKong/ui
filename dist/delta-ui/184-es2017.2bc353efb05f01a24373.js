(self.webpackChunkdelta_ui=self.webpackChunkdelta_ui||[]).push([[184],{7184:function(e,t,r){"use strict";r.r(t),r.d(t,{UsersModule:function(){return H}});var i=r(8583),o=r(3423),a=r(2790),n=r(3962),s=r(2789),l=r(3679),u=r(2238),c=r(3518),m=r(7716),d=r(6083),g=r(6164),p=r(6324),f=r(8295),h=r(9983),Z=r(7441),U=r(2458),q=r(1095);function A(e,t){1&e&&(m.TgZ(0,"mat-error",17),m._uU(1," User Name is required."),m.qZA())}function T(e,t){1&e&&(m.TgZ(0,"mat-error",17),m._uU(1," Email Address is required."),m.qZA())}function _(e,t){1&e&&(m.TgZ(0,"mat-error",17),m._uU(1," Invalid Email Address."),m.qZA())}function w(e,t){1&e&&(m.TgZ(0,"mat-error",17),m._uU(1," Work Type is required."),m.qZA())}function v(e,t){1&e&&(m.TgZ(0,"mat-option",18),m._uU(1,"ADMIN"),m.qZA())}function N(e,t){1&e&&(m.TgZ(0,"mat-error",17),m._uU(1," Role is required."),m.qZA())}function k(e,t){1&e&&(m.TgZ(0,"mat-error",17),m._uU(1," Password is required."),m.qZA())}function S(e,t){if(1&e&&(m.TgZ(0,"mat-form-field"),m._UZ(1,"input",19),m.YNc(2,k,2,0,"mat-error",5),m.qZA()),2&e){const e=m.oxw();let t;m.xp6(2),m.Q6J("ngIf",null==e.userForm||null==(t=e.userForm.get("password"))?null:t.hasError("required"))}}let I=(()=>{class e{constructor(e,t,r,i,o,a){this.apiService=e,this.dialogRef=t,this.formBuilder=r,this.localStorageService=i,this.snackBarService=o,this.dialogueData=a}ngOnInit(){this.isEdit=!!this.dialogueData,this.setData(this.dialogueData),this.getUserRole()}getUserRole(){const e=this.localStorageService.getItem("user");this.userRole=null==e?void 0:e.role}onNoClick(){this.dialogRef.close()}setData(e){const t={username:this.formBuilder.control(null==e?void 0:e.username,[l.kI.required]),email:this.formBuilder.control(null==e?void 0:e.email,[l.kI.required,l.kI.email]),work_type:this.formBuilder.control(null==e?void 0:e.work_type,[l.kI.required]),role:this.formBuilder.control(null==e?void 0:e.role,[l.kI.required])};this.isEdit||(t.password=this.formBuilder.control(null==e?void 0:e.password,[l.kI.required])),this.userForm=this.formBuilder.group(t)}saveUser(){const e=this.userForm.value;console.log(e),this.dialogueData?this.apiService.updateUser(e,this.dialogueData._id.$oid).subscribe(e=>{this.dialogRef.close(!0),this.snackBarService.open("User updated successfully",c.dA.Success,void 0,3e3)},e=>{this.snackBarService.open("Something went wrong while updating user. Please try again",c.dA.Error,void 0,3e3)}):this.apiService.createUser(e).subscribe(e=>{this.snackBarService.open("User created successfully",c.dA.Success,void 0,3e3),this.dialogRef.close(!0)},e=>{this.snackBarService.open("Something went wrong while creating user. Please try again",c.dA.Error,void 0,3e3)})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(d.s),m.Y36(u.so),m.Y36(l.qu),m.Y36(g.n),m.Y36(p.c),m.Y36(u.WI))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-add-user"]],decls:34,vars:10,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"width-100"],["matInput","","formControlName","username","type","text","name","username","placeholder","Enter User Name"],["align","start","class","form__error",4,"ngIf"],["matInput","","formControlName","email","type","email","name","email","placeholder","Enter Email Address"],["formControlName","work_type"],["value","CLICK"],["value","PUNCH"],["formControlName","role"],["value","ADMIN",4,"ngIf"],["value","USER"],[4,"ngIf"],["mat-dialog-actions","",2,"float","right"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"disabled","click"],["align","start",1,"form__error"],["value","ADMIN"],["matInput","","formControlName","password","type","password","name","password","placeholder","Enter Password"]],template:function(e,t){if(1&e&&(m.TgZ(0,"h1",0),m._uU(1),m.qZA(),m.TgZ(2,"div",1),m.TgZ(3,"form",2),m.TgZ(4,"mat-form-field",3),m._UZ(5,"input",4),m.YNc(6,A,2,0,"mat-error",5),m.qZA(),m.TgZ(7,"mat-form-field",3),m._UZ(8,"input",6),m.YNc(9,T,2,0,"mat-error",5),m.YNc(10,_,2,0,"mat-error",5),m.qZA(),m.TgZ(11,"mat-form-field"),m.TgZ(12,"mat-label"),m._uU(13,"Select Work Type"),m.qZA(),m.TgZ(14,"mat-select",7),m.TgZ(15,"mat-option",8),m._uU(16,"CLICK"),m.qZA(),m.TgZ(17,"mat-option",9),m._uU(18,"PUNCH"),m.qZA(),m.qZA(),m.YNc(19,w,2,0,"mat-error",5),m.qZA(),m.TgZ(20,"mat-form-field"),m.TgZ(21,"mat-label"),m._uU(22,"Select Role"),m.qZA(),m.TgZ(23,"mat-select",10),m.YNc(24,v,2,0,"mat-option",11),m.TgZ(25,"mat-option",12),m._uU(26,"USER"),m.qZA(),m.qZA(),m.YNc(27,N,2,0,"mat-error",5),m.qZA(),m.YNc(28,S,3,1,"mat-form-field",13),m.qZA(),m.qZA(),m.TgZ(29,"div",14),m.TgZ(30,"button",15),m.NdJ("click",function(){return t.onNoClick()}),m._uU(31,"Cancel"),m.qZA(),m.TgZ(32,"button",16),m.NdJ("click",function(){return t.saveUser()}),m._uU(33,"Submit"),m.qZA(),m.qZA()),2&e){let e,r,i,o,a;m.xp6(1),m.hij("",t.isEdit?"Edit":"Create"," User"),m.xp6(2),m.Q6J("formGroup",t.userForm),m.xp6(3),m.Q6J("ngIf",null==t.userForm||null==(e=t.userForm.get("username"))?null:e.hasError("required")),m.xp6(3),m.Q6J("ngIf",null==t.userForm||null==(r=t.userForm.get("email"))?null:r.hasError("required")),m.xp6(1),m.Q6J("ngIf",null==t.userForm||null==(i=t.userForm.get("email"))?null:i.hasError("email")),m.xp6(9),m.Q6J("ngIf",null==t.userForm||null==(o=t.userForm.get("work_type"))?null:o.hasError("required")),m.xp6(5),m.Q6J("ngIf","SUPER_ADMIN"==t.userRole),m.xp6(3),m.Q6J("ngIf",null==t.userForm||null==(a=t.userForm.get("role"))?null:a.hasError("required")),m.xp6(1),m.Q6J("ngIf",!t.isEdit),m.xp6(4),m.Q6J("disabled",t.userForm.invalid)}},directives:[u.uh,u.xY,l._Y,l.JL,l.sg,f.KE,h.Nt,l.Fj,l.JJ,l.u,i.O5,f.hX,Z.gD,U.ey,u.H8,q.lW,f.TO],styles:[""]}),e})();var C=r(6627);function y(e,t){1&e&&(m.TgZ(0,"th",14),m._uU(1," User Name "),m.qZA())}function x(e,t){if(1&e&&(m.TgZ(0,"td",15),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.username," ")}}function Y(e,t){1&e&&(m.TgZ(0,"th",14),m._uU(1," Work Type "),m.qZA())}function b(e,t){if(1&e&&(m.TgZ(0,"td",15),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.work_type," ")}}function D(e,t){1&e&&(m.TgZ(0,"th",14),m._uU(1," Email Address "),m.qZA())}function E(e,t){if(1&e&&(m.TgZ(0,"td",15),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.email," ")}}function J(e,t){1&e&&(m.TgZ(0,"th",14),m._uU(1," Role "),m.qZA())}function Q(e,t){if(1&e&&(m.TgZ(0,"td",15),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.role," ")}}function B(e,t){1&e&&(m.TgZ(0,"th",14),m._uU(1," Actions "),m.qZA())}function R(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"td",15),m.TgZ(1,"button",16),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw().openDialog(t)}),m.TgZ(2,"mat-icon",17),m._uU(3,"edit"),m.qZA(),m.qZA(),m.qZA()}}function F(e,t){1&e&&m._UZ(0,"tr",18)}function z(e,t){1&e&&m._UZ(0,"tr",19)}const O=[{path:"",component:a.O,children:[{path:"",redirectTo:"manage",pathMatch:"full"},{path:"manage",component:(()=>{class e{constructor(e,t){this.apiService=e,this.dialog=t,this.displayedColumns=["username","email","work_type","role","actions"],this.users=[],this.dataSource=new s.by(this.users),this.length=100,this.pageSize=10,this.pageSizeOptions=[5,10,25,100]}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.getUsers()}getUsers(e=0){this.apiService.getUsers(this.pageSize,e+1,"").subscribe(e=>{this.length=e.count,this.users=e.data,this.dataSource=new s.by(this.users)})}onPageEvent(e){this.getUsers(e.pageIndex)}openDialog(e){this.dialog.open(I,{width:"500px",data:e}).afterClosed().subscribe(e=>{console.log("The dialog was closed"),e&&this.getUsers()})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(d.s),m.Y36(u.uw))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-manage-users"]],viewQuery:function(e,t){if(1&e&&m.Gf(n.NW,5),2&e){let e;m.iGM(e=m.CRH())&&(t.paginator=e.first)}},decls:25,vars:6,consts:[["mat-stroked-button","",2,"float","right",3,"click"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","username"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","work_type"],["matColumnDef","email"],["matColumnDef","role"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",3,"length","pageSize","pageSizeOptions","page"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",3,"click"],["matListIcon",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(m.TgZ(0,"h2"),m._uU(1,"Users "),m.TgZ(2,"button",0),m.NdJ("click",function(){return t.openDialog()}),m._uU(3,"Create User"),m.qZA(),m.qZA(),m.TgZ(4,"div",1),m.TgZ(5,"table",2),m.ynx(6,3),m.YNc(7,y,2,0,"th",4),m.YNc(8,x,2,1,"td",5),m.BQk(),m.ynx(9,6),m.YNc(10,Y,2,0,"th",4),m.YNc(11,b,2,1,"td",5),m.BQk(),m.ynx(12,7),m.YNc(13,D,2,0,"th",4),m.YNc(14,E,2,1,"td",5),m.BQk(),m.ynx(15,8),m.YNc(16,J,2,0,"th",4),m.YNc(17,Q,2,1,"td",5),m.BQk(),m.ynx(18,9),m.YNc(19,B,2,0,"th",4),m.YNc(20,R,4,0,"td",5),m.BQk(),m.YNc(21,F,1,0,"tr",10),m.YNc(22,z,1,0,"tr",11),m.qZA(),m.TgZ(23,"mat-paginator",12,13),m.NdJ("page",function(e){return t.onPageEvent(e)}),m.qZA(),m.qZA()),2&e&&(m.xp6(5),m.Q6J("dataSource",t.dataSource),m.xp6(16),m.Q6J("matHeaderRowDef",t.displayedColumns),m.xp6(1),m.Q6J("matRowDefColumns",t.displayedColumns),m.xp6(1),m.Q6J("length",t.length)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions))},directives:[q.lW,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,n.NW,s.ge,s.ev,C.Hw,s.XQ,s.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),e})()}]}];var P=r(4466);let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[s.p0,n.TU,q.ot,C.Ps,u.Is,f.lN,h.c,l.UX,Z.LD,P.m,i.ez,o.Bz.forChild(O)]]}),e})()}}]);