(this["webpackJsonpaw-netlify"]=this["webpackJsonpaw-netlify"]||[]).push([[0],{28:function(e,a,t){e.exports=t(52)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(24),c=t.n(i),r=(t(33),t(8)),m=t(9),o=t(11),s=t(10),g=t(26),h=t(4);t(34);var p=function(e){return l.a.createElement("div",{className:"logo-container"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{className:e.homePage?"logo-animated":"logo",src:"./images/logo.png",alt:"Logo"})))},u=(t(35),t(13));var d=function(e){return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",{id:"navbar"},l.a.createElement("li",null,l.a.createElement("a",{className:e.homePage?"white":"dark",id:"work"===e.activePage?"active":"inactive",href:"/"},"Work")),l.a.createElement("li",null,l.a.createElement("a",{className:e.homePage?"white":"dark",id:"about"===e.activePage?"active":"inactive",onClick:e.onClick,href:"/about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:e.homePage?"white":"dark",id:"contact"===e.activePage?"active":"inactive",href:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{className:e.homePage?"white":"dark",href:"https://www.instagram.com/1inawilliams_photography/",id:"ig-icon"},l.a.createElement(u.c,null)))))};t(36);var E=function(e){return l.a.createElement("header",null,l.a.createElement(p,{homePage:e.homePage}),l.a.createElement(d,{homePage:e.homePage,activePage:e.activePage}))};t(37);var k=function(e){return l.a.createElement("div",{id:"work-navigation"},l.a.createElement("a",{id:"portrait-nav-button",className:"work-nav",href:"/portrait"},"Portrait"),l.a.createElement("a",{id:"life-nav-button",className:"work-nav",href:"/life"},"Life"))},C=(t(38),function(e){return l.a.createElement("div",{id:"burger",className:e.menuOpen?"open":"closed",onClick:e.onClick},l.a.createElement("div",{id:e.homePage?"burger-line-light":"burger-line-dark",className:e.menuOpen?"burger-line burger-line-open":"burger-line burger-line-closed"}),l.a.createElement("div",{id:e.homePage?"burger-line-light":"burger-line-dark",className:e.menuOpen?"burger-line burger-line-open":"burger-line burger-line-closed"}),l.a.createElement("div",{id:e.homePage?"burger-line-light":"burger-line-dark",className:e.menuOpen?"burger-line burger-line-open":"burger-line burger-line-closed"}))}),j=(t(39),function(e){return l.a.createElement("div",{id:"burger-menu",className:e.menuOpen?"menu-open":"menu-closed"},l.a.createElement("a",{className:"burger-menu-item",href:"/portrait"},l.a.createElement("span",{role:"img","aria-label":"Portrait"}),"Portrait"),l.a.createElement("a",{className:"burger-menu-item",href:"/life"},l.a.createElement("span",{role:"img","aria-label":"Life"}),"Life"),l.a.createElement("a",{className:"burger-menu-item",href:"/about"},l.a.createElement("span",{role:"img","aria-label":"About"}),"About"),l.a.createElement("a",{className:"burger-menu-item",href:"/contact"},l.a.createElement("span",{role:"img","aria-label":"Contact"}),"Contact"),l.a.createElement("a",{className:"burger-menu-item","aria-label":"Instagram",href:"https://www.instagram.com/1inawilliams_photography/"},l.a.createElement(u.c,{size:50})))}),f=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).setOpen=function(){!1===n.state.menuOpen?n.setState({menuOpen:!0}):n.setState({menuOpen:!1})},n.state={homePage:!0,activePage:"work",menuOpen:!1},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{id:"fade"}),l.a.createElement("img",{id:"background",src:"./images/River-Rocks.jpg",alt:"background of river rocks"}),l.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),l.a.createElement(k,null),l.a.createElement(C,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),l.a.createElement(j,{menuOpen:this.state.menuOpen}))}}]),t}(n.Component),v=t(16),b=t(1),O=t(2);t(40),t(41);var P=function(e){return l.a.createElement("div",{className:e.popupOpen?"black-out":"popup-hidden"},l.a.createElement("div",{className:"popup"},l.a.createElement("span",{className:"close-image",onClick:e.closePopup},"\u2715"),l.a.createElement("img",{alt:e.imageClickedAlt,src:e.imageClicked})))},I=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).setOpen=function(){!1===n.state.menuOpen?n.setState({menuOpen:!0}):n.setState({menuOpen:!1})},n.handleImageClick=function(e){e.preventDefault(),n.setState({imageClicked:e.target.src}),n.setState({imageClickedAlt:e.target.alt}),n.setState({popupOpen:!0})},n.closePopup=function(){n.setState({popupOpen:!1,imageClicked:"",imageClickedAlt:""})},n.state={homePage:!1,activePage:"work",menuOpen:!1,imageClicked:"",imageClickedAlt:"",popupOpen:!1},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"life"},l.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),l.a.createElement(C,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),l.a.createElement(j,{menuOpen:this.state.menuOpen}),l.a.createElement("div",{className:"content"},l.a.createElement(v.a,{className:"image-container"},l.a.createElement(b.a,{className:"row"},l.a.createElement(O.a,null,l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/BLM-Legs.jpg",alt:"BLM-Legs.jpg"})),l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Trainformation.jpg",alt:"Porto-Trainformation.jpg"})),l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/River-Rocks.jpg",alt:"River-Rocks.jpg"})),l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Ghost-Fishing-Edit-test.jpg",alt:"Ghost-Fishing-Edit-test.jpg"})),l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/No-Messages.jpg",alt:"No-Messages.jpg"}))),l.a.createElement(O.a,null,l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/BLM-Red-Hat-Man.jpg",alt:"BLM-Red-Hat-Man.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Play-for-Pay.jpg",alt:"Porto-Play-for-Pay.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Bad-Biker.jpg",alt:"Bad-Biker.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Hauptbahnhof-Nights.jpg",alt:"Hauptbahnhof-Nights.jpg"}))),l.a.createElement(O.a,null,l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/BLM-Corrupt.jpg",alt:"BLM-Corrupt.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Waiting-for-the-Sun.jpg",alt:"Porto-Waiting-for-the-Sun.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Bending-Lakes.jpg",alt:"Bending-Lakes.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Texture-Fishing.jpg",alt:"Texture-Fishing.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Bus-Thoughts.jpg",alt:"Porto-Bus-Thoughts.jpg"}))))),l.a.createElement(v.a,{className:"mobile-container"},l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/BLM-Legs.jpg",alt:"BLM-Legs.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/BLM-Corrupt.jpg",alt:"BLM-Corrupt.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/BLM-Red-Hat-Man.jpg",alt:"BLM-Red-Hat-Man.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Trainformation.jpg",alt:"Porto-Trainformation.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/River-Rocks.jpg",alt:"River-Rocks.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Ghost-Fishing-Edit-test.jpg",alt:"Ghost-Fishing-Edit-test.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Bending-Lakes.jpg",alt:"Bending-Lakes.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Bus-Thoughts.jpg",alt:"Porto-Bus-Thoughts.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/No-Messages.jpg",alt:"No-Messages.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Play-for-Pay.jpg",alt:"Porto-Play-for-Pay.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Porto-Waiting-for-the-Sun.jpg",alt:"Porto-Waiting-for-the-Sun.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Bad-Biker.jpg",alt:"Bad-Biker.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Hauptbahnhof-Nights.jpg",alt:"Hauptbahnhof-Nights.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Texture-Fishing.jpg",alt:"Texture-Fishing.jpg"}))))),l.a.createElement("div",{id:"portrait-nav-div"},l.a.createElement("a",{id:"portrait-nav",href:"/portrait"},l.a.createElement(u.a,null)," Portrait")),l.a.createElement(P,{popupOpen:this.state.popupOpen,imageClicked:this.state.imageClicked,imageClickedAlt:this.state.imageClickedAlt,closePopup:this.closePopup}))}}]),t}(n.Component),N=(t(42),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).setOpen=function(){!1===n.state.menuOpen?n.setState({menuOpen:!0}):n.setState({menuOpen:!1})},n.handleImageClick=function(e){e.preventDefault(),n.setState({imageClicked:e.target.src}),n.setState({imageClickedAlt:e.target.alt}),n.setState({popupOpen:!0})},n.closePopup=function(){n.setState({popupOpen:!1,imageClicked:"",imageClickedAlt:""})},n.state={homePage:!1,activePage:"work",menuOpen:!1,imageClicked:"",imageClickedAlt:"",popupOpen:!1},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"portrait"},l.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),l.a.createElement(C,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),l.a.createElement(j,{menuOpen:this.state.menuOpen}),l.a.createElement("div",{className:"content"},l.a.createElement(v.a,{className:"image-container"},l.a.createElement(b.a,{className:"row"},l.a.createElement(O.a,null,l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Baller-Sariah.jpg",alt:"Baller-Sariah.jpg"})),l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Board-Man.jpg",alt:"Board-Man.jpg"})),l.a.createElement(b.a,{className:"row"},l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Strong-Maria.jpg",alt:"Strong-Maria.jpg"}))),l.a.createElement(O.a,null,l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Anita-Chiefs.jpg",alt:"Anita-Chiefs.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Anita-Loves-Mum.jpg",alt:"Anita-Loves-Mum.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Illy-Speechless.jpg",alt:"Illy-Speechless.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Sisters-Album-Cover.jpg",alt:"Sisters-Album-Cover.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Valentine-Smiles.jpg",alt:"Valentine-Smiles.jpg"}))),l.a.createElement(O.a,null,l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Sandhya-Profi.jpg",alt:"Sandhya-Profi.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Jenny-Kitchen-Liiving.jpg",alt:"Jenny-Kitchen-Liiving.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Skilly.jpg",alt:"Skilly.jpg"})),l.a.createElement(b.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Angry-Alex.jpg",alt:"Angry-Alex.jpg"}))))),l.a.createElement(v.a,{className:"mobile-container"},l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Baller-Sariah.jpg",alt:"Baller-Sariah.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Board-Man.jpg",alt:"Board-Man.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Strong-Maria.jpg",alt:"Strong-Maria.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Sandhya-Profi.jpg",alt:"Sandhya-Profi.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Valentine-Smiles.jpg",alt:"Valentine-Smiles.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Skilly.jpg",alt:"Skilly.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Anita-Chiefs.jpg",alt:"Anita-Chiefs.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Anita-Loves-Mum.jpg",alt:"Anita-Loves-Mum.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Illy-Speechless.jpg",alt:"Illy-Speechless.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Jenny-Kitchen-Liiving.jpg",alt:"Jenny-Kitchen-Liiving.jpg"}))),l.a.createElement(b.a,{xs:!0},l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Angry-Alex.jpg",alt:"Angry-Alex.jpg"})),l.a.createElement(O.a,null,l.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/Sisters-Album-Cover.jpg",alt:"Sisters-Album-Cover.jpg"}))))),l.a.createElement("div",{id:"life-nav-div"},l.a.createElement("a",{id:"life-nav",href:"/life"},"Life ",l.a.createElement(u.b,null))),l.a.createElement(P,{popupOpen:this.state.popupOpen,imageClicked:this.state.imageClicked,imageClickedAlt:this.state.imageClickedAlt,closePopup:this.closePopup}))}}]),t}(n.Component));t(43);var S=function(e){return l.a.createElement("div",{id:"about-content"},l.a.createElement("img",{id:"aaron",src:"./images/Aaron_Williams.jpg",alt:"Aaron Williams portrait"}),l.a.createElement("p",{id:"aw-about"},"I\u2019m Aaron Williams, photographer and filmmaker based in Berlin, Germany."))},y=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).setOpen=function(){!1===n.state.menuOpen?n.setState({menuOpen:!0}):n.setState({menuOpen:!1})},n.state={homePage:!1,activePage:"about",menuOpen:!1},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),l.a.createElement(C,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),l.a.createElement(j,{menuOpen:this.state.menuOpen}),l.a.createElement(S,null))}}]),t}(n.Component),w=t(18),B=t(25),A=(t(44),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).setOpen=function(){!1===n.state.menuOpen?n.setState({menuOpen:!0}):n.setState({menuOpen:!1})},n.handleSubmit=function(e){var a;e.preventDefault(),""===n.state.firstName||""===n.state.lastName||""===n.state.email||""===n.state.subject||""===n.state.message?alert("Please fill in all required fields"):(fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object(B.a)({"form-name":"contact"},n.state),Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&"))}).catch((function(e){return alert(e)})),n.setState({formSubmitted:!0,firstName:"",lastName:"",email:"",subject:"",message:""}))},n.handleChange=function(e){return n.setState(Object(w.a)({},e.target.name,e.target.value))},n.state={homePage:!1,activePage:"contact",formSubmitted:!1,menuOpen:!1,firstName:"",lastName:"",email:"",subject:"",message:""},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{activePage:this.state.activePage}),l.a.createElement(C,{menuOpen:this.state.menuOpen,onClick:this.setOpen}),l.a.createElement(j,{menuOpen:this.state.menuOpen}),this.state.formSubmitted?l.a.createElement("p",{id:"submitted-message"},"Thank you for your message!"):"",l.a.createElement("div",{id:"contact-form"},l.a.createElement("form",{name:"contact",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),l.a.createElement("div",null,l.a.createElement("label",null,"Your Name: *")),l.a.createElement("input",{type:"text",id:"fname",name:"firstName",placeholder:"First Name",value:this.state.firstName,onChange:this.handleChange,required:!0}),l.a.createElement("input",{type:"text",id:"lname",name:"lastName",placeholder:"Last Name",value:this.state.lastName,onChange:this.handleChange,required:!0}),l.a.createElement("div",null,l.a.createElement("label",null,"Your Email: *")),l.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"john.doe@example.com",value:this.state.email,onChange:this.handleChange,required:!0}),l.a.createElement("div",null,l.a.createElement("label",null,"Subject: *")),l.a.createElement("input",{type:"text",id:"subject",name:"subject",value:this.state.subject,onChange:this.handleChange,required:!0}),l.a.createElement("div",null,l.a.createElement("label",null,"Message: *")),l.a.createElement("textarea",{id:"email-message",name:"message",value:this.state.message,onChange:this.handleChange,required:!0}),l.a.createElement("div",null,l.a.createElement("button",{id:"contact-submit",type:"submit",onClick:this.handleSubmit},"Submit")),l.a.createElement("p",null,"* indicates a required field"))))}}]),t}(n.Component)),L=(t(45),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={key:"value"},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/life",component:I}),l.a.createElement(h.a,{exact:!0,path:"/portrait",component:N}),l.a.createElement(h.a,{exact:!0,path:"/about",component:y}),l.a.createElement(h.a,{exact:!0,path:"/contact",component:A}),l.a.createElement(h.a,{exact:!0,path:"/",component:f}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(51);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.af5aaf7a.chunk.js.map