(this["webpackJsonptechnical-test"]=this["webpackJsonptechnical-test"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),l=n.n(c),o=(n(28),n.p,n(29),n(3)),s=n(21),i=n(10),u=n(8),d=n(9),j=n(7),m=n(23),b=n(20),h=new(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.call(this)}return Object(d.a)(n,[{key:"getPeople",value:function(){var e=JSON.parse(localStorage.getItem("workmans"));return console.log(e),e||[]}},{key:"addWorkman",value:function(e){var t=localStorage.getItem("countId")?localStorage.getItem("countId"):0;t++;var n=JSON.parse(localStorage.getItem("workmans"))?JSON.parse(localStorage.getItem("workmans")):[],a=JSON.parse(localStorage.getItem("Colleagues"))?JSON.parse(localStorage.getItem("Colleagues")):[];e.Colleagues.forEach((function(e){e.Status&&a.push({Id1:t,Id2:e.Id})})),n.push(Object(o.a)(Object(o.a)({},e),{},{Id:t})),localStorage.setItem("countId",t),localStorage.setItem("workmans",JSON.stringify(n)),localStorage.setItem("Colleagues",JSON.stringify(a)),localStorage.countId++}},{key:"changeWorman",value:function(e){var t=JSON.parse(localStorage.getItem("workmans"))?JSON.parse(localStorage.getItem("workmans")):[],n=JSON.parse(localStorage.getItem("Colleagues"))?JSON.parse(localStorage.getItem("Colleagues")):[];n=n.filter((function(t){return t.Id1!==e.Id&&t.Id2!==e.Id})),e.Colleagues.forEach((function(t){t.Status&&n.push({Id1:e.Id,Id2:t.Id})})),t=t.map((function(t){return t.Id!=e.Id?t:e})),localStorage.setItem("workmans",JSON.stringify(t)),localStorage.setItem("Colleagues",JSON.stringify(n))}},{key:"removeWorkman",value:function(e){var t=JSON.parse(localStorage.getItem("workmans"))?JSON.parse(localStorage.getItem("workmans")):[],n=JSON.parse(localStorage.getItem("Colleagues"))?JSON.parse(localStorage.getItem("Colleagues")):[];t=t.filter((function(t){return t.Id!==e})),n=n.filter((function(t){return t.Id1!==e&&t.Id2!==e})),localStorage.setItem("workmans",JSON.stringify(t)),localStorage.setItem("Colleagues",JSON.stringify(n))}},{key:"getWorkmanColleagues",value:function(e){var t=JSON.parse(localStorage.getItem("workmans"))?JSON.parse(localStorage.getItem("workmans")):[],n=JSON.parse(localStorage.getItem("Colleagues"))?JSON.parse(localStorage.getItem("Colleagues")):[];return t.filter((function(t){return t.Id!=e})).map((function(t){return{Id:t.Id,Name:"".concat(t.Surname," ").concat(t.Name,", ").concat(t.Position),Status:!!n.find((function(n){return n.Id1==t.Id&&n.Id2==e||n.Id2==t.Id&&n.Id1==e}))}}))}}]),n}(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"getPeople",value:function(){throw new TypeError("Cannot use Abstract method directly")}},{key:"addWorkman",value:function(){throw new TypeError("Cannot use Abstract method directly")}},{key:"changeWorman",value:function(){throw new TypeError("Cannot use Abstract method directly")}},{key:"removeWorkman",value:function(){throw new TypeError("Cannot use Abstract method directly")}},{key:"getWorkmanColleagues",value:function(){throw new TypeError("Cannot use Abstract method directly")}}]),e}())),O=new(function(){function e(){Object(u.a)(this,e),Object(j.d)(this)}return Object(d.a)(e,[{key:"getWorkmans",value:function(){return h.getPeople()}},{key:"addWorkman",value:function(e){h.addWorkman(e)}},{key:"changeWorkman",value:function(e){h.changeWorman(e)}},{key:"removeWorkman",value:function(e){h.removeWorkman(e)}},{key:"getCurrentWorkmanColleagues",value:function(e){return h.getWorkmanColleagues(e)}}]),e}()),g=new(function(){function e(){Object(u.a)(this,e),this.mode="Table",this.workman={Surname:"\u041f\u043e\u043f\u043e\u0432123",Name:"\u0412\u0430\u0441\u044f123",MiddleName:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0438\u0447",Position:"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a \u0421\u0411",DateBirth:"2021-07-04",Gender:"\u041c\u0443\u0436",EmploymentDate:"2021-07-04",DateOfDismissal:"2021-07-04",DriverLicense:!1,Colleagues:[{Id:1,Name:"\u041f\u043e\u043f\u043e\u04321 \u0412\u0430\u0441\u044f1 \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0438\u04471",Status:!1},{Id:2,Name:"\u041f\u043e\u043f\u043e\u04322 \u0412\u0430\u0441\u044f2 \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0438\u04472",Status:!1}],OtherAttributes:[{Name:"asd",Type:"text",Value:"asd"}]},Object(j.d)(this)}return Object(d.a)(e,[{key:"setMode",value:function(e,t){this.mode=e,this.workman=t,console.log("setMode")}},{key:"setWorkman",value:function(e){this.workman=e}},{key:"changeColleagues",value:function(e){var t=this;this.workman.Colleagues.forEach((function(e){e.Status=!1})),e.forEach((function(e){t.workman.Colleagues[e].Status=!0})),console.log(this.workman.Colleagues)}},{key:"addOtherAttribute",value:function(){this.workman.OtherAttributes.push({Name:"",Type:"text",Value:""})}},{key:"setOtherAttribute",value:function(e,t){t.Type!=this.workman.OtherAttributes[e].Type&&("text"==t.Type&&(t.Value=""),"number"==t.Type&&(t.Value=0),"date"==t.Type&&(t.Value="2021-01-01")),this.workman.OtherAttributes[e]=t}},{key:"removeOtherAttribute",value:function(e){this.workman.OtherAttributes.splice(e,1)}}]),e}()),x=(n(16),n(36)),k=n(39),f=n(37),p=n(0),v={Surname:"",Name:"",MiddleName:"",Position:"\u0413\u0421\u0411",DateBirth:"2020-01-01",Gender:"\u041c\u0443\u0436",EmploymentDate:"2020-01-01",DateOfDismissal:"2020-01-01",DriverLicense:!1,Colleagues:[],OtherAttributes:[]},y=Object(i.a)((function(e){var t=Object(a.useReducer)((function(e){return e+1}),0),n=Object(s.a)(t,2)[1];return Object(p.jsxs)(x.a,{className:"justify-content-sm-center mt-2",children:[Object(p.jsx)(k.a,{className:"mb-1",onClick:function(){return g.setMode("Add",Object(o.a)(Object(o.a)({},v),{},{Colleagues:O.getCurrentWorkmanColleagues(null)}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(p.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:"sm",style:{minWidth:"700px",overflowX:"hidden"},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(p.jsx)("th",{children:"\u0418\u043c\u044f"}),Object(p.jsx)("th",{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(p.jsx)("th",{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"})]})}),Object(p.jsx)("tbody",{children:O.getWorkmans().map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.Surname}),Object(p.jsx)("td",{children:e.Name}),Object(p.jsx)("td",{children:e.MiddleName}),Object(p.jsx)("td",{children:e.Position}),Object(p.jsxs)("td",{style:{width:"225px"},children:[Object(p.jsx)("button",{style:{width:"50px"},className:"btn btn-secondary ml-1",onClick:function(){return g.setMode("Details",Object(o.a)(Object(o.a)({},e),{},{Colleagues:O.getCurrentWorkmanColleagues(e.Id)}))},children:"..."}),Object(p.jsx)("button",{style:{width:"50px"},className:"btn btn-secondary ml-1",onClick:function(){return g.setMode("Change",Object(o.a)(Object(o.a)({},e),{},{Colleagues:O.getCurrentWorkmanColleagues(e.Id)}))},children:"\u0420\u0435\u0434."}),Object(p.jsx)("button",{style:{width:"100px"},className:"btn btn-secondary ml-1",onClick:function(){O.removeWorkman(e.Id),n()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},e.Id)}))})]})]})})),w=n(22),C=n(38),S=Object(i.a)((function(e){return Object(p.jsxs)("div",{style:{minWidth:"350px"},className:"container w-50 mt-2",children:[Object(p.jsx)(k.a,{style:{width:"100px"},className:"mb-2",onClick:function(){return g.setMode("Table",null)},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(p.jsxs)(C.a,{onSubmit:function(t){e.action(g.workman),g.setMode("Table",null),t.preventDefault()},children:[Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",required:!0,value:g.workman.Surname,onChange:function(e){return g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{Surname:e.target.value}))}})]}),Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u0418\u043c\u044f"}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"\u0418\u043c\u044f",required:!0,value:g.workman.Name,onChange:function(e){return g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{Name:e.target.value}))}})]}),Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",required:!0,value:g.workman.MiddleName,onChange:function(e){return g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{MiddleName:e.target.value}))}})]}),Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(p.jsxs)(C.a.Control,{as:"select",required:!0,value:g.workman.Position,onChange:function(e){return g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{Position:e.target.value}))},children:[Object(p.jsx)("option",{value:"\u0413\u0421\u0411",children:"\u0413\u0421\u0411"}),Object(p.jsx)("option",{value:"\u0425\u041e\u041f",children:"\u0425\u041e\u041f"}),Object(p.jsx)("option",{value:"\u041a\u043b\u043e\u0443\u043d",children:"\u041a\u043b\u043e\u0443\u043d"})]})]}),Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(p.jsx)(C.a.Control,{type:"date",required:!0,value:g.workman.DateBirth,onChange:function(e){return g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{DateBirth:e.target.value}))}})]}),Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(p.jsx)(C.a.Control,{type:"date",value:g.workman.EmploymentDate,required:!0,onChange:function(e){var t=new Date(e.target.value),n=new Date(g.workman.DateOfDismissal);t.getTime()<n.getTime()?g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{EmploymentDate:e.target.value})):g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{EmploymentDate:g.workman.DateOfDismissal}))}})]}),Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f"}),Object(p.jsx)(C.a.Control,{type:"date",value:g.workman.DateOfDismissal,required:!0,onChange:function(e){var t=new Date(g.workman.EmploymentDate),n=new Date(e.target.value);console.log(t.getTime()<n.getTime()),t.getTime()<n.getTime()?g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{DateOfDismissal:e.target.value})):g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{DateOfDismissal:g.workman.EmploymentDate}))}})]}),Object(p.jsx)(C.a.Group,{controlId:"DriverLicense",children:Object(p.jsx)(C.a.Check,{type:"checkbox",label:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432",checked:!!g.workman.DriverLicense,onChange:function(e){return g.setWorkman(Object(o.a)(Object(o.a)({},g.workman),{},{DriverLicense:!g.workman.DriverLicense}))}})}),Object(p.jsxs)(C.a.Group,{children:[Object(p.jsx)(C.a.Label,{children:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438"}),Object(p.jsx)(C.a.Control,{as:"select",multiple:!0,onChange:function(e){return g.changeColleagues(Object(w.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})))},children:g.workman.Colleagues.map((function(e,t){return Object(p.jsx)("option",{value:t,children:e.Name},t)}))})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(C.a.Label,{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"})}),!!g.workman.OtherAttributes.length&&Object(p.jsxs)(f.a,{className:"table",style:{overflowX:"auto"},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u0418\u043c\u044f"}),Object(p.jsx)("th",{children:"\u0422\u0438\u043f"}),Object(p.jsx)("th",{children:"\u0417\u043d\u0430\u0447\u0430\u043d\u0438\u0435"})]})}),Object(p.jsx)("tbody",{children:g.workman.OtherAttributes.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(C.a.Control,{type:"text",value:e.Name,style:{width:"100%",minWidth:"100px"},onChange:function(n){return g.setOtherAttribute(t,Object(o.a)(Object(o.a)({},e),{},{Name:n.target.value}))}})}),Object(p.jsx)("td",{children:Object(p.jsxs)(C.a.Control,{style:{width:"100%",minWidth:"100px"},as:"select",value:e.Type,onChange:function(n){return g.setOtherAttribute(t,Object(o.a)(Object(o.a)({},e),{},{Type:n.target.value}))},children:[Object(p.jsx)("option",{value:"text",children:"Text"}),Object(p.jsx)("option",{value:"number",children:"Num"}),Object(p.jsx)("option",{value:"date",children:"Date"})]})}),Object(p.jsx)("td",{children:Object(p.jsx)(C.a.Control,{style:{width:"100%",minWidth:"100px"},type:e.Type,value:e.Value,onChange:function(n){return g.setOtherAttribute(t,Object(o.a)(Object(o.a)({},e),{},{Value:n.target.value}))}})}),Object(p.jsx)("td",{children:Object(p.jsx)(k.a,{className:"float-right",style:{width:"100px"},onClick:function(){return g.removeOtherAttribute(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},"OA".concat(t))}))})]}),Object(p.jsx)(k.a,{onClick:function(){return g.addOtherAttribute()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442"})]}),Object(p.jsx)("div",{children:Object(p.jsx)(k.a,{className:"float-right mr-3 mt-2 mb-3",size:"lg",type:"submit",variant:"primary",children:e.text})})]})]})})),I=Object(i.a)((function(e){return Object(p.jsxs)("div",{style:{minWidth:"350px"},className:"container w-50 mt-2",children:[Object(p.jsx)(k.a,{style:{width:"100px"},className:"mb-2",onClick:function(){return g.setMode("Table",null)},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(p.jsx)(f.a,{size:"sm",style:{minWidth:"700px",overflowX:"hidden"},children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(p.jsx)("td",{children:e.el.Surname})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0418\u043c\u044f"}),Object(p.jsx)("td",{children:e.el.Name})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(p.jsx)("td",{children:e.el.MiddleName})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(p.jsx)("td",{children:e.el.Position})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(p.jsx)("td",{children:e.el.DateBirth})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041f\u043e\u043b"}),Object(p.jsx)("td",{children:e.el.Gender})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(p.jsx)("td",{children:e.el.EmploymentDate})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f"}),Object(p.jsx)("td",{children:e.el.DateOfDismissal})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432"}),Object(p.jsx)("td",{children:e.el.DriverLicense?"\u0415\u0441\u0442\u044c":"\u041d\u0435\u0442"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438"}),Object(p.jsx)("td",{children:e.el.Colleagues.filter((function(e){return e.Status})).map((function(e,t){return Object(p.jsx)("div",{children:e.Name},t)}))})]}),!!e.el.OtherAttributes.length&&e.el.OtherAttributes.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.Name}),Object(p.jsx)("td",{children:e.Value})]},t)}))]})}),Object(p.jsx)("style",{children:"        td{            width: 300px;        }      "})]})})),N=Object(i.a)((function(){return Object(p.jsxs)("div",{className:"App",children:["Table"==g.mode&&Object(p.jsx)(y,{}),"Details"==g.mode&&Object(p.jsx)(I,{el:g.workman}),"Add"==g.mode&&Object(p.jsx)(S,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",action:function(e){return O.addWorkman(e)}}),"Change"==g.mode&&Object(p.jsx)(S,{text:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",action:function(e){return O.changeWorkman(e)}})]})})),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)}))};l.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),D()}},[[35,1,2]]]);
//# sourceMappingURL=main.55302010.chunk.js.map