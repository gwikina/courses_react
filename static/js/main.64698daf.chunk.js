(this["webpackJsonpreact-final-glw3325"]=this["webpackJsonpreact-final-glw3325"]||[]).push([[0],{27:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(3),a=c.n(s),i=c(10),l=c.n(i),d=(c(27),c(28),c(11)),r=c(12),o=c(14),j=c(13),h=c(45),u=c(9),b=c(39),O=c(46),p=c(40),x=c(41),g=c(42),m=c(43),C=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).handleCname=function(e){n.setState({cname:e.target.value})},n.handleCdesc=function(e){n.setState({cdesc:e.target.value})},n.handleCdetails=function(e){n.setState({cdetails:e.target.value})},n.handleCdept=function(e){n.setState({cdept:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),fetch("/coursedata/"+n.props.course.id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({new_name:n.state.cname,new_desc:n.state.cdesc,new_detail:n.state.cdetails,new_dept:n.state.cdept})}).then((function(e){return e.json()})).then(alert("You successfully edited a course. Refresh to see it!"))},n.state={modal:!1,cname:n.props.course.name,cdesc:n.props.course.desc,cdetails:n.props.course.details,cdept:1,deps:[]},n.toggle=n.toggle.bind(Object(u.a)(n)),n.handleCname=n.handleCname.bind(Object(u.a)(n)),n}return Object(r.a)(c,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{onClick:this.toggle,color:"secondary",children:" Edit "}),Object(n.jsxs)(O.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(n.jsx)(p.a,{toggle:this.toggle,children:"Edit Course"}),Object(n.jsxs)(x.a,{children:[Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Course Name "})," "]}),Object(n.jsx)("p",{children:Object(n.jsx)(g.a,{id:"cname",onChange:this.handleCname,defaultValue:this.state.cname,children:" "})}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Course Description "})," "]}),Object(n.jsx)("p",{children:Object(n.jsx)(g.a,{id:"cdesc",onChange:this.handleCdesc,defaultValue:this.state.cdesc})}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Course Details "})," "]}),Object(n.jsx)("p",{children:Object(n.jsx)(g.a,{id:"cdet",onChange:this.handleCdetails,defaultValue:this.state.cdetails})}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Department "})," "]}),Object(n.jsx)("p",{children:Object(n.jsxs)("select",{name:"dropdown",id:"dropdown",onChange:this.handleCdept,children:[Object(n.jsx)("option",{value:1,children:"Software Engineering "}),Object(n.jsx)("option",{value:2,selected:!0,children:"Computer Science"}),Object(n.jsx)("option",{value:3,children:"Computer Engineering"}),Object(n.jsx)("option",{value:4,children:"Virology"})]})})]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(b.a,{color:"primary",onClick:this.handleSubmit,children:"Okay"}),Object(n.jsx)(b.a,{color:"secondary",onClick:this.toggle,children:"Cancel"})]})]})]})}}]),c}(a.a.Component),f=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).handleCname=function(e){n.setState({cname:e.target.value})},n.handleCdesc=function(e){n.setState({cdesc:e.target.value})},n.handleCdetails=function(e){n.setState({cdetails:e.target.value})},n.handleCdept=function(e){n.setState({cdept:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),fetch("/coursedata/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({new_name:n.state.cname,new_desc:n.state.cdesc,new_detail:n.state.cdetails,new_dept:n.state.cdept})}).then((function(e){return e.json()})).then(alert("You successfully added a course. Refresh to see it!"))},n.state={modal:!1,cname:"",cdesc:"",cdetails:"",cdept:""},n.toggle=n.toggle.bind(Object(u.a)(n)),n.handleCname=n.handleCname.bind(Object(u.a)(n)),n}return Object(r.a)(c,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{onClick:this.toggle,color:"primary",children:" Add "}),Object(n.jsxs)(O.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(n.jsx)(p.a,{toggle:this.toggle,children:"Add Course"}),Object(n.jsxs)(x.a,{children:[Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Course Name "})," "]}),Object(n.jsx)("p",{children:Object(n.jsx)(g.a,{id:"cname",onChange:this.handleCname})}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Course Description "})," "]}),Object(n.jsx)("p",{children:Object(n.jsx)(g.a,{id:"cdesc",onChange:this.handleCdesc})}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Course Details "})," "]}),Object(n.jsx)("p",{children:Object(n.jsx)(g.a,{id:"cdet",onChange:this.handleCdetails})}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("label",{children:" Department "})," "]}),Object(n.jsx)("p",{children:Object(n.jsxs)("select",{name:"dropdown",id:"dropdown",onChange:this.handleCdept,children:[Object(n.jsx)("option",{value:1,children:"Software Engineering "}),Object(n.jsx)("option",{value:2,children:"Computer Science"}),Object(n.jsx)("option",{value:3,children:"Computer Engineering"}),Object(n.jsx)("option",{value:4,children:"Virology"})]})})]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(b.a,{color:"primary",onClick:this.handleSubmit,children:"Okay"}),Object(n.jsx)(b.a,{color:"secondary",onClick:this.toggle,children:"Cancel"})]})]})]})}}]),c}(a.a.Component),v=c(44);var y=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(v.a,{className:"table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"name"}),Object(n.jsx)("th",{children:"descrition"}),Object(n.jsx)("th",{children:"details"}),Object(n.jsx)("th",{children:"department"}),Object(n.jsx)("th",{children:"college"})]})}),Object(n.jsx)("tbody",{children:e.list.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:Object(n.jsx)(C,{course:e})}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.desc}),Object(n.jsx)("td",{children:e.details}),Object(n.jsx)("td",{children:e.dept}),Object(n.jsx)("td",{children:e.college})]})}))})]}),Object(n.jsx)(f,{})]})},S=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).updateData=function(e){for(var t=[],c=0;c<e.length;c++)t.push({id:e[c][0],id2:e[c][1],name:e[c][2],desc:e[c][3],details:e[c][4],status:e[c][5],dept:e[c][6],college:e[c][7]});n.setState({courses:t})},n.fetchData=function(){fetch("/coursedata").then((function(e){return e.json()})).then((function(e){n.updateData(e)}))},n.state={courses:[],addedCourses:[]},n}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return Object(n.jsxs)(h.a,{className:"pt-5",children:[Object(n.jsx)("div",{className:"text-center h1 py-4",children:" Course List"}),Object(n.jsx)(y,{list:this.state.courses,children:" "})]})}}]),c}(a.a.Component),w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.64698daf.chunk.js.map