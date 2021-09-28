(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t){t.exports=JSON.parse('[{"id":1,"name":"Homer","number":"85-69-87"},{"id":2,"name":"Marge","number":"564-85-46"},{"id":3,"name":"Bart","number":"575-95-84"},{"id":4,"name":"Lisa","number":"579-51-20"},{"id":5,"name":"Maggie","number":"563-54-55"},{"id":6,"name":"Abe","number":"599-99-99"}]')},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(12),c=n.n(r),i=(n(18),n(4)),o=n(10),s=n(5),l=n(6),u=n(8),d=n(7),b=n(2),m=n(13),h=n(3),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameId=Object(b.a)(),t.numberId=Object(b.a)(),t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(i.a)({},a,r))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:h.form,onSubmit:this.props.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:this.nameId,children:"Enter name:"}),Object(j.jsx)("input",{className:h.input,id:this.nameId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",onChange:this.handleChange,value:e}),Object(j.jsx)("label",{htmlFor:this.numberId,children:"Enter number:"}),Object(j.jsx)("input",{className:h.input,id:this.numberId,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",onChange:this.handleChange,value:n}),Object(j.jsx)("button",{className:h.btn,type:"submit",children:"Add to contacts"})]})}}]),n}(a.Component),p=f,O=function(t){var e=t.findContactId,n=t.deleteContact,a=t.handleChange,r=t.filter,c=t.contacts;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:e,children:"Find contacts by name"}),Object(j.jsx)("input",{id:e,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",onChange:a,value:r}),r&&Object(j.jsx)("ul",{children:c.filter((function(t){return t.name.toLowerCase().includes(r)})).map((function(t){return Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("p",{children:[t.name,": ",t.number]}),Object(j.jsx)("button",{name:t.name,type:"button",onClick:function(){return n(t.name)},children:"Delete"})]},t.id)}))})]})},C=function(t){var e=t.contacts,n=t.filter,a=t.deleteContact;return!n&&Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[t.name,": ",Object(j.jsx)("span",{children:t.number})," "]}),Object(j.jsx)("button",{name:t.name,type:"button",onClick:function(){return a(t.name)},children:"Delete"})]},t.id)}))})},x=n(9),v=n.n(x),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:Object(o.a)(m),filter:""},t.findContactId=Object(b.a)(),t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(i.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=e.target,a=n.name,r=n.number,c=a.value,i=r.value;t.state.contacts.find((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[{name:c,id:Object(b.a)(),number:i}])}}))},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.name!==e}));t.setState({contacts:Object(o.a)(n)})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(j.jsxs)("div",{className:v.a.container,children:[Object(j.jsx)("h2",{className:v.a.title,children:"Phonebook"}),Object(j.jsx)(p,{handleSubmit:this.handleSubmit}),Object(j.jsx)("h2",{className:v.a.title,children:"Contacts"}),Object(j.jsx)(O,{contacts:e,filter:n,handleChange:this.handleChange,deleteContact:this.deleteContact,findContactId:this.findContactId}),Object(j.jsx)(C,{contacts:e,filter:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component),y=g;c.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__2VBEj",btn:"ContactForm_btn__1ZhuJ",input:"ContactForm_input__1tZiM"}},9:function(t,e,n){t.exports={container:"Container_container__2M4wt",title:"Container_title__3klKE"}}},[[20,1,2]]]);
//# sourceMappingURL=main.b7a9691f.chunk.js.map