(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",buttonForm:"ContactForm_buttonForm__34KbY"}},20:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),o=n(12),i=n.n(o),s=(n(20),n(13)),u=n(2),l=n(3),h=n(6),m=n(5),b=n(8),f=n(9),j=n.n(f);function d(t){var e=t.id,n=t.name,r=t.number,c=t.onRemove;return Object(a.jsxs)("li",{className:j.a.listItem,children:[n," : ",r," ",Object(a.jsx)("button",{className:j.a.buttonDelete,onClick:function(){return c(e)},children:"delete"})]})}var p=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)(d,Object(b.a)(Object(b.a)({},t),{},{onRemove:n}),t.id)}))})},v=n(4),O=n(14),C=n(10),x=n.n(C),g=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(v.a)({},a,r))},t.handleSubmitForm=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.validateForm()&&(t.props.onSubmit({id:Object(O.a)(),name:a,number:r}),t.reset())},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,r=t.props.onChekunike;return n&&a?r(n):(alert("Empty fields!!! Please fill"),!1)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmitForm,children:[Object(a.jsx)("h3",{children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleInputChange}),Object(a.jsx)("h3",{children:"Number"}),Object(a.jsx)("input",{type:"tel",name:"number",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"345-67-89",value:n,onChange:this.handleInputChange}),Object(a.jsx)("button",{className:x.a.buttonForm,type:"submit",children:"Add contact"})]})}}]),n}(r.Component),S=n(11),y=n.n(S),F=function(t){var e=t.filter,n=void 0===e?"":e,r=t.onChange;return Object(a.jsx)("input",{type:"text",name:"filter",value:n,placeholder:"Search by contacts",onChange:function(t){var e=t.target;return r(e.value)}})};F.propType={filter:y.a.string,onChange:y.a.func};var k=F,_=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.handleSubmitForm=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.handleUniceContact=function(e){var n=t.state.contacts.find((function(t){return t.name===e}));if(!n)return!n;alert("Contact is exist")},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterSearch=function(e){return t.setState({filter:e})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(g,{onSubmit:this.handleSubmitForm,onChekunike:this.handleUniceContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)(k,{filter:t,onChange:this.handleFilterSearch}),Object(a.jsx)(p,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={buttonDelete:"ContactsList_buttonDelete__1lMRH",listItem:"ContactsList_listItem__ic_NQ"}}},[[23,1,2]]]);
//# sourceMappingURL=main.a3778c03.chunk.js.map