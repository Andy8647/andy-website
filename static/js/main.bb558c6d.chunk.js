(this["webpackJsonpandy-website"]=this["webpackJsonpandy-website"]||[]).push([[0],{23:function(e,t,s){},26:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(15),n=s.n(c),i=(s(23),s(5)),r=s(6),l=s(8),o=s(7),j=s(13),d=s(16),h=s.n(d),b=(s(26),s(17)),m=s(9),u=s.n(m),O=s(18),p=s.n(O),x=(s(36),s(1)),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e=this.props.data.description;return Object(x.jsxs)("header",{id:"home",children:[Object(x.jsx)(b.a,{type:"cobweb",bg:!0,color:"#dddddd"}),Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})})]})]}),Object(x.jsx)("div",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsx)(u.a,{bottom:!0,children:Object(x.jsx)("h1",{className:"responsive-headline",children:Object(x.jsx)(p.a,{avgTypingDelay:100,startDelay:1500,cursor:{blink:!0},children:"Hi! My name is Andy Luo."})})}),Object(x.jsx)(u.a,{bottom:!0,duration:1200,children:Object(x.jsxs)("h3",{children:[e,"."]})})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,target:"_blank",children:Object(x.jsx)("i",{className:e.className})})},e.name)}));return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(u.a,{bottom:!0,children:Object(x.jsxs)("div",{className:"twelve columns",children:[Object(x.jsx)("ul",{className:"social-links",children:e}),Object(x.jsxs)("ul",{className:"copyright",children:[Object(x.jsx)("li",{children:"\xa9 Copyright 2021 Gancheng Luo"}),Object(x.jsxs)("li",{children:["Design by"," ",Object(x.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",target:"_blank",children:"Styleshout"})]})]})]})}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,o=this.props.data.resumedownload;return Object(x.jsx)("section",{id:"about",children:Object(x.jsx)(u.a,{duration:1e3,children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"three columns",children:Object(x.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("h2",{children:"About Me"}),Object(x.jsx)("p",{children:s}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"columns contact-details",children:[Object(x.jsx)("h2",{children:"Contact Details"}),Object(x.jsxs)("p",{className:"address",children:[Object(x.jsx)("span",{children:e}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{children:[a,Object(x.jsx)("br",{}),c," ",n,", ",i]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:r}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:l})]})]}),Object(x.jsx)("div",{className:"columns download",children:Object(x.jsx)("p",{children:Object(x.jsxs)("a",{href:o,className:"button",target:"_blank",children:[Object(x.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(a.Component),g=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.school}),Object(x.jsxs)("p",{className:"info",children:[e.degree," ",Object(x.jsx)("span",{children:"\u2022"}),Object(x.jsx)("em",{className:"date",children:e.graduated})]}),Object(x.jsx)("p",{children:e.description})]},e.school)})),a=(this.props.data.work.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.company}),Object(x.jsxs)("p",{className:"info",children:[e.title,Object(x.jsx)("span",{children:"\u2022"})," ",Object(x.jsx)("em",{className:"date",children:e.years})]}),Object(x.jsx)("p",{children:e.description})]},e.company)})),this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),c=t.level;return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{width:c,backgroundColor:s},className:a}),Object(x.jsx)("em",{children:t.name})]},t.name)})));return Object(x.jsxs)("section",{id:"resume",children:[Object(x.jsx)(u.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Education"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(x.jsx)(u.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row skill",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Skills"})})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsxs)("p",{children:[t," You can check more in the ",Object(x.jsx)("a",{href:"Gancheng Luo.pdf",target:"_blank",children:"pdf version"}),"."]}),Object(x.jsx)("div",{className:"bars",children:Object(x.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),s}(a.Component),w=0,y=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(x.jsx)("div",{className:"columns portfolio-item",children:Object(x.jsxs)("div",{className:"item-wrap",children:[Object(x.jsx)("img",{alt:e.title,src:t}),Object(x.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},w++)}));return Object(x.jsx)("section",{id:"portfolio",children:Object(x.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"twelve columns collapsed",children:[Object(x.jsxs)("h1",{children:["Check Out Some of My Works. More detail in the ",Object(x.jsx)("a",{href:"Gancheng Luo.pdf",target:"_blank",children:"pdf version."})," "]}),Object(x.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(a.Component),k=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-192022314-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f,{data:this.state.resumeData.main}),Object(x.jsx)(N,{data:this.state.resumeData.main}),Object(x.jsx)(g,{data:this.state.resumeData.resume}),Object(x.jsx)(y,{data:this.state.resumeData.portfolio}),Object(x.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(a.Component),D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(x.jsx)(k,{}),document.getElementById("root")),D()}},[[38,1,2]]]);
//# sourceMappingURL=main.bb558c6d.chunk.js.map