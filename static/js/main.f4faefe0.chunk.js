(this["webpackJsonpandy-website"]=this["webpackJsonpandy-website"]||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(13),i=s.n(a),n=(s(24),s(6)),r=s(7),l=s(9),j=s(8),d=s(14),o=s(16),h=s.n(o),b=(s(27),s(17)),m=s(4),O=s.n(m),u=s(18),x=s.n(u),p=(s(37),s(1)),f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,c=this.props.data.description;return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsx)(b.a,{type:"circle",bg:!0}),Object(p.jsxs)("nav",{id:"nav-wrap",children:[Object(p.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(p.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(p.jsxs)("ul",{id:"nav",className:"nav",children:[Object(p.jsx)("li",{className:"current",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(p.jsx)("div",{className:"row banner",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)(O.a,{bottom:!0,children:Object(p.jsx)("h1",{className:"responsive-headline",children:Object(p.jsx)(x.a,{avgTypingDelay:100,startDelay:1500,cursor:{blink:!0},children:s})})}),Object(p.jsx)(O.a,{bottom:!0,duration:1200,children:Object(p.jsxs)("h3",{children:[c,"."]})}),Object(p.jsx)("hr",{}),Object(p.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(p.jsxs)("ul",{className:"social",children:[Object(p.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(p.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(p.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(p.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(p.jsx)("p",{className:"scrolldown",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(p.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}));return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(O.a,{bottom:!0,children:Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("ul",{className:"social-links",children:e}),Object(p.jsxs)("ul",{className:"copyright",children:[Object(p.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"}),Object(p.jsxs)("li",{children:["Design by"," ",Object(p.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(p.jsx)("section",{id:"about",children:Object(p.jsx)(O.a,{duration:1e3,children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"three columns",children:Object(p.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsx)("p",{children:s}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"columns contact-details",children:[Object(p.jsx)("h2",{children:"Contact Details"}),Object(p.jsxs)("p",{className:"address",children:[Object(p.jsx)("span",{children:e}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:[c,Object(p.jsx)("br",{}),a," ",i,", ",n]}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:r}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:l})]})]}),Object(p.jsx)("div",{className:"columns download",children:Object(p.jsx)("p",{children:Object(p.jsxs)("a",{href:j,className:"button",children:[Object(p.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(c.Component),g=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.school}),Object(p.jsxs)("p",{className:"info",children:[e.degree," ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:e.graduated})]}),Object(p.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.company}),Object(p.jsxs)("p",{className:"info",children:[e.title,Object(p.jsx)("span",{children:"\u2022"})," ",Object(p.jsx)("em",{className:"date",children:e.years})]}),Object(p.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(t){var s=e.getRandomColor(),c="bar-expand "+t.name.toLowerCase(),a=t.level;return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{style:{width:a,backgroundColor:s},className:c}),Object(p.jsx)("em",{children:t.name})]},t.name)}));return Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsx)(O.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(p.jsx)(O.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Work"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(p.jsx)(O.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row skill",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Skills"})})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("div",{className:"bars",children:Object(p.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),s}(c.Component),w=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(p.jsxs)("section",{id:"contact",children:[Object(p.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(p.jsxs)("div",{className:"row section-head",children:[Object(p.jsx)("div",{className:"two columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Get In Touch."})})}),Object(p.jsx)("div",{className:"ten columns",children:Object(p.jsx)("p",{className:"lead",children:n})})]})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(p.jsxs)("div",{className:"eight columns",children:[Object(p.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(p.jsxs)("fieldset",{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(p.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"submit",children:"Submit"}),Object(p.jsx)("span",{id:"image-loader",children:Object(p.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(p.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(p.jsxs)("div",{id:"message-success",children:[Object(p.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(p.jsx)("br",{})]})]})}),Object(p.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(p.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(p.jsxs)("div",{className:"widget widget_contact",children:[Object(p.jsx)("h4",{children:"Address and Phone"}),Object(p.jsxs)("p",{className:"address",children:[e,Object(p.jsx)("br",{}),t," ",Object(p.jsx)("br",{}),s,", ",c," ",a,Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:i})]})]}),Object(p.jsxs)("div",{className:"widget widget_tweets",children:[Object(p.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(p.jsxs)("ul",{id:"twitter",children:[Object(p.jsxs)("li",{children:[Object(p.jsxs)("span",{children:["This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(p.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(p.jsx)("b",{children:Object(p.jsx)("a",{href:"./",children:"2 Days Ago"})})]}),Object(p.jsxs)("li",{children:[Object(p.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(p.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(p.jsx)("b",{children:Object(p.jsx)("a",{href:"./",children:"3 Days Ago"})})]})]})]})]})})]})]})}}]),s}(c.Component),y=s(19),k=s.n(y),C=0,D=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(p.jsx)("div",{className:"columns portfolio-item",children:Object(p.jsxs)("div",{className:"item-wrap",children:[Object(p.jsx)(k.a,{alt:e.title,src:t}),Object(p.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},C++)}));return Object(p.jsx)("section",{id:"portfolio",children:Object(p.jsx)(O.a,{left:!0,duration:1e3,distance:"40px",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"twelve columns collapsed",children:[Object(p.jsx)("h1",{children:"Check Out Some of My Works."}),Object(p.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),S=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"/andy-website/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(f,{data:this.state.resumeData.main}),Object(p.jsx)(N,{data:this.state.resumeData.main}),Object(p.jsx)(g,{data:this.state.resumeData.resume}),Object(p.jsx)(D,{data:this.state.resumeData.portfolio}),Object(p.jsx)(w,{data:this.state.resumeData.main}),Object(p.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(c.Component),F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(p.jsx)(S,{}),document.getElementById("root")),F()}},[[40,1,2]]]);
//# sourceMappingURL=main.f4faefe0.chunk.js.map