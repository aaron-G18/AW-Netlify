(this["webpackJsonpaw-netlify"]=this["webpackJsonpaw-netlify"]||[]).push([[0],{20:function(e,a,t){},29:function(e,a,t){e.exports=t(50)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(25),r=t.n(i),c=(t(34),t(5)),m=t(6),o=t(8),s=t(7),g=t(27),p=t(4);t(35);var u=function(e){return n.a.createElement("div",{className:"logo-container"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:e.homePage?"logo-animated":"logo",src:"./images/logo.png",alt:"Logo"})))},h=(t(36),t(10));var d=function(e){return n.a.createElement("div",{className:"navigation"},n.a.createElement("ul",{id:"navbar"},n.a.createElement("li",null,n.a.createElement("a",{className:e.homePage?"white":"dark",id:"work"===e.activePage?"active":"inactive",href:"/"},"Work")),n.a.createElement("li",null,n.a.createElement("a",{className:e.homePage?"white":"dark",id:"about"===e.activePage?"active":"inactive",onClick:e.onClick,href:"/about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:e.homePage?"white":"dark",id:"contact"===e.activePage?"active":"inactive",href:"/contact"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{className:e.homePage?"white":"dark",href:"https://www.instagram.com/aaronwilliams_media/",id:"ig-icon"},n.a.createElement(h.c,null)))))};t(37);var E=function(e){return n.a.createElement("header",null,n.a.createElement(u,{homePage:e.homePage}),n.a.createElement(d,{homePage:e.homePage,activePage:e.activePage}))};t(38);var C=function(e){return n.a.createElement("div",{id:"work-navigation"},n.a.createElement("div",null,n.a.createElement("a",{id:"portrait-nav-button",className:"work-nav",href:"/portrait"},"Portrait"),n.a.createElement("a",{id:"life-nav-button",className:"work-nav",href:"/life"},"Life")),n.a.createElement("div",null,n.a.createElement("a",{id:"auto-nav-button",className:"work-nav",href:"/auto"},"Automotive")))},k=(t(39),function(e){return n.a.createElement("div",{id:"burger",className:e.menuOpen?"open":"closed",onClick:e.onClick},n.a.createElement("div",{id:e.homePage?"burger-line-light":"burger-line-dark",className:e.menuOpen?"burger-line burger-line-open":"burger-line burger-line-closed"}),n.a.createElement("div",{id:e.homePage?"burger-line-light":"burger-line-dark",className:e.menuOpen?"burger-line burger-line-open":"burger-line burger-line-closed"}),n.a.createElement("div",{id:e.homePage?"burger-line-light":"burger-line-dark",className:e.menuOpen?"burger-line burger-line-open":"burger-line burger-line-closed"}))}),j=(t(40),function(e){return n.a.createElement("div",{id:"burger-menu",className:e.menuOpen?"menu-open":"menu-closed"},n.a.createElement("a",{id:"portrait"===e.burgerCurrentPage?"burgerCurrentPage":"",className:"burger-menu-item",href:"/portrait"},n.a.createElement("span",{role:"img","aria-label":"Portrait"},"Portrait")),n.a.createElement("a",{id:"life"===e.burgerCurrentPage?"burgerCurrentPage":"",className:"burger-menu-item",href:"/life"},n.a.createElement("span",{role:"img","aria-label":"Life"},"Life")),n.a.createElement("a",{id:"auto"===e.burgerCurrentPage?"burgerCurrentPage":"",className:"burger-menu-item",href:"/auto"},n.a.createElement("span",{role:"img","aria-label":"Automotive"},"Automotive")),n.a.createElement("a",{id:"about"===e.burgerCurrentPage?"burgerCurrentPage":"",className:"burger-menu-item",href:"/about"},n.a.createElement("span",{role:"img","aria-label":"About"},"About")),n.a.createElement("a",{id:"contact"===e.burgerCurrentPage?"burgerCurrentPage":"",className:"burger-menu-item",href:"/contact"},n.a.createElement("span",{role:"img","aria-label":"Contact"},"Contact")),n.a.createElement("a",{className:"burger-menu-item","aria-label":"Instagram",href:"https://www.instagram.com/1inawilliams_photography/"},n.a.createElement(h.c,{size:50})))}),f=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).setOpen=function(){!1===l.state.menuOpen?l.setState({menuOpen:!0}):l.setState({menuOpen:!1})},l.state={homePage:!0,activePage:"work",menuOpen:!1},l}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"home"},n.a.createElement("div",{id:"fade"}),n.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),n.a.createElement(C,null),n.a.createElement(k,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),n.a.createElement(j,{menuOpen:this.state.menuOpen}))}}]),t}(l.Component),v=t(14),b=t(1),P=t(2);t(20),t(41);var O=function(e){return n.a.createElement("div",{className:e.popupOpen?"black-out":"popup-hidden"},n.a.createElement("div",{className:"popup"},n.a.createElement("span",{className:"close-image",onClick:e.closePopup},"\u2715"),n.a.createElement("img",{className:"popup-img",alt:e.imageClickedAlt,src:e.imageClicked})))},I=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).setOpen=function(){!1===l.state.menuOpen?l.setState({menuOpen:!0}):l.setState({menuOpen:!1})},l.handleImageClick=function(e){e.preventDefault(),l.setState({imageClicked:e.target.src}),l.setState({imageClickedAlt:e.target.alt}),l.setState({popupOpen:!0})},l.closePopup=function(){l.setState({popupOpen:!1,imageClicked:"",imageClickedAlt:""})},l.state={homePage:!1,activePage:"work",burgerCurrentPage:"life",menuOpen:!1,imageClicked:"",imageClickedAlt:"",popupOpen:!1},l}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"life"},n.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),n.a.createElement(k,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),n.a.createElement(j,{menuOpen:this.state.menuOpen,burgerCurrentPage:this.state.burgerCurrentPage}),n.a.createElement("div",{className:"content"},n.a.createElement(v.a,{className:"image-container"},n.a.createElement(b.a,{className:"row"},n.a.createElement(P.a,null,n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/BLM-Legs.jpg",alt:"BLM-Legs.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Trainformation.jpg",alt:"Porto-Trainformation.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/River-Rocks.jpg",alt:"River-Rocks.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Ghost-Fishing-Edit-test.jpg",alt:"Ghost-Fishing-Edit-test.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/No-Messages.jpg",alt:"No-Messages.jpg"}))),n.a.createElement(P.a,null,n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/BLM-Red-Hat-Man.jpg",alt:"BLM-Red-Hat-Man.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Play-for-Pay.jpg",alt:"Porto-Play-for-Pay.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Bad-Biker.jpg",alt:"Bad-Biker.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Hauptbahnhof-Nights.jpg",alt:"Hauptbahnhof-Nights.jpg"}))),n.a.createElement(P.a,null,n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/BLM-Corrupt.jpg",alt:"BLM-Corrupt.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Waiting-for-the-Sun.jpg",alt:"Porto-Waiting-for-the-Sun.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Bending-Lakes.jpg",alt:"Bending-Lakes.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Texture-Fishing.jpg",alt:"Texture-Fishing.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Bus-Thoughts.jpg",alt:"Porto-Bus-Thoughts.jpg"}))))),n.a.createElement(v.a,{className:"mobile-container"},n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/BLM-Legs.jpg",alt:"BLM-Legs.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/BLM-Corrupt.jpg",alt:"BLM-Corrupt.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/BLM-Red-Hat-Man.jpg",alt:"BLM-Red-Hat-Man.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Bad-Biker.jpg",alt:"Bad-Biker.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Bending-Lakes.jpg",alt:"Bending-Lakes.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/River-Rocks.jpg",alt:"River-Rocks.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Standing-Tall.jpeg",alt:"Standing-Tall.jpeg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Love.jpeg",alt:"Porto-Love.jpeg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Ghost-Fishing-Edit-test.jpg",alt:"Ghost-Fishing-Edit-test.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Texture-Fishing.jpg",alt:"Texture-Fishing.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Waiting-for-the-Sun.jpg",alt:"Porto-Waiting-for-the-Sun.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Trainformation.jpg",alt:"Porto-Trainformation.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Bus-Thoughts.jpg",alt:"Porto-Bus-Thoughts.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Porto-Play-for-Pay.jpg",alt:"Porto-Play-for-Pay.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/life/Hauptbahnhof-Nights.jpg",alt:"Hauptbahnhof-Nights.jpg"}))))),n.a.createElement("div",null,n.a.createElement("div",{id:"left-nav-div"},n.a.createElement("a",{className:"lower-nav-link",href:"/portrait"},n.a.createElement(h.a,null)," Portrait")),n.a.createElement("div",{id:"right-nav-div"},n.a.createElement("a",{className:"lower-nav-link",href:"/auto"},"Automotive ",n.a.createElement(h.b,null)))),n.a.createElement(O,{popupOpen:this.state.popupOpen,imageClicked:this.state.imageClicked,imageClickedAlt:this.state.imageClickedAlt,closePopup:this.closePopup}))}}]),t}(l.Component),S=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).setOpen=function(){!1===l.state.menuOpen?l.setState({menuOpen:!0}):l.setState({menuOpen:!1})},l.handleImageClick=function(e){e.preventDefault(),l.setState({imageClicked:e.target.src}),l.setState({imageClickedAlt:e.target.alt}),l.setState({popupOpen:!0})},l.closePopup=function(){l.setState({popupOpen:!1,imageClicked:"",imageClickedAlt:""})},l.state={homePage:!1,activePage:"work",burgerCurrentPage:"portrait",menuOpen:!1,imageClicked:"",imageClickedAlt:"",popupOpen:!1},l}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"portrait"},n.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),n.a.createElement(k,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),n.a.createElement(j,{menuOpen:this.state.menuOpen,burgerCurrentPage:this.state.burgerCurrentPage}),n.a.createElement("div",{className:"content"},n.a.createElement(v.a,{className:"image-container"},n.a.createElement(b.a,{className:"row"},n.a.createElement(P.a,null,n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Baller-Sariah.jpg",alt:"Baller-Sariah.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Board-Man.jpg",alt:"Board-Man.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Strong-Maria.jpg",alt:"Strong-Maria.jpg"}))),n.a.createElement(P.a,null,n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Anita-Chiefs.jpg",alt:"Anita-Chiefs.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Anita-Loves-Mum.jpg",alt:"Anita-Loves-Mum.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Illy-Speechless.jpg",alt:"Illy-Speechless.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Sisters-Album-Cover.jpg",alt:"Sisters-Album-Cover.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Valentine-Smiles.jpg",alt:"Valentine-Smiles.jpg"}))),n.a.createElement(P.a,null,n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Sandhya-Profi.jpg",alt:"Sandhya-Profi.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Jenny-Kitchen-Liiving.jpg",alt:"Jenny-Kitchen-Liiving.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Skilly.jpg",alt:"Skilly.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Angry-Alex.jpg",alt:"Angry-Alex.jpg"}))))),n.a.createElement(v.a,{className:"mobile-container"},n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Anita-Chiefs.jpg",alt:"Anita-Chiefs.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Baller-Sariah.jpg",alt:"Baller-Sariah.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Board-Man.jpg",alt:"Board-Man.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Anita-Loves-Mum.jpg",alt:"Anita-Loves-Mum.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Strong-Maria.jpg",alt:"Strong-Maria.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Sandhya-Profi.jpg",alt:"Sandhya-Profi.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Jenny-Kitchen-Liiving.jpg",alt:"Jenny-Kitchen-Liiving.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Valentine-Smiles.jpg",alt:"Valentine-Smiles.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Skilly.jpg",alt:"Skilly.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Illy-Speechless.jpg",alt:"Illy-Speechless.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Falcon-Frauen.jpeg",alt:"Falcon-Frauen.jpeg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Sisters-Album-Cover.jpg",alt:"Sisters-Album-Cover.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/portrait/Angry-Alex.jpg",alt:"Angry-Alex.jpg"}))))),n.a.createElement("div",null,n.a.createElement("div",{id:"left-nav-div"},n.a.createElement("a",{className:"lower-nav-link",href:"/auto"},n.a.createElement(h.a,null)," Automotive")),n.a.createElement("div",{id:"right-nav-div"},n.a.createElement("a",{className:"lower-nav-link",href:"/life"},"Life ",n.a.createElement(h.b,null)))),n.a.createElement(O,{popupOpen:this.state.popupOpen,imageClicked:this.state.imageClicked,imageClickedAlt:this.state.imageClickedAlt,closePopup:this.closePopup}))}}]),t}(l.Component),N=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).setOpen=function(){!1===l.state.menuOpen?l.setState({menuOpen:!0}):l.setState({menuOpen:!1})},l.handleImageClick=function(e){e.preventDefault(),l.setState({imageClicked:e.target.src}),l.setState({imageClickedAlt:e.target.alt}),l.setState({popupOpen:!0})},l.closePopup=function(){l.setState({popupOpen:!1,imageClicked:"",imageClickedAlt:""})},l.state={homePage:!1,activePage:"work",burgerCurrentPage:"auto",menuOpen:!1,imageClicked:"",imageClickedAlt:"",popupOpen:!1},l}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"auto"},n.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),n.a.createElement(k,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),n.a.createElement(j,{menuOpen:this.state.menuOpen,burgerCurrentPage:this.state.burgerCurrentPage}),n.a.createElement("div",{className:"content"},n.a.createElement(v.a,{className:"image-container"},n.a.createElement(b.a,{className:"row"},n.a.createElement(P.a,null,n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-1.jpg",alt:"438-Spider-1.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-2.jpg",alt:"438-Spider-2.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-1.jpg",alt:"Caddy-1.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-4.jpg",alt:"Caddy-4.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-1.jpg",alt:"Falcon-1.jpg"})),n.a.createElement(b.a,{className:"row"},n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-2.jpg",alt:"Falcon-2.jpg"}))),n.a.createElement(P.a,null,n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-5.jpg",alt:"438-Spider-5.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-3.jpg",alt:"438-Spider-3.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-3.jpg",alt:"Caddy-3.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-5.jpg",alt:"Caddy-5.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-4.jpg",alt:"Falcon-4.jpg"})),n.a.createElement(b.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-3.jpg",alt:"Falcon-3.jpg"}))))),n.a.createElement(v.a,{className:"mobile-container"},n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-1.jpg",alt:"438-Spider-1.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-5.jpg",alt:"438-Spider-5.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-3.jpg",alt:"438-Spider-3.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/438-Spider-2.jpg",alt:"438-Spider-2.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-1.jpg",alt:"Caddy-1.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-3.jpg",alt:"Caddy-3.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-4.jpg",alt:"Caddy-4.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Caddy-5.jpg",alt:"Caddy-5.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-1.jpg",alt:"Falcon-1.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-2.jpg",alt:"Falcon-2.jpg"})),n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-4.jpg",alt:"Falcon-4.jpg"}))),n.a.createElement(b.a,{xs:!0},n.a.createElement(P.a,null,n.a.createElement("img",{id:"photo",onClick:this.handleImageClick,src:"./images/auto/Falcon-3.jpg",alt:"Falcon-3.jpg"}))))),n.a.createElement("div",null,n.a.createElement("div",{id:"left-nav-div"},n.a.createElement("a",{className:"lower-nav-link",href:"/life"},n.a.createElement(h.a,null)," Life")),n.a.createElement("div",{id:"right-nav-div"},n.a.createElement("a",{className:"lower-nav-link",href:"/portrait"},"Portrait ",n.a.createElement(h.b,null)))),n.a.createElement(O,{popupOpen:this.state.popupOpen,imageClicked:this.state.imageClicked,imageClickedAlt:this.state.imageClickedAlt,closePopup:this.closePopup}))}}]),t}(l.Component);t(42);var y=function(e){return n.a.createElement("div",{id:"about-content"},n.a.createElement("img",{id:"aaron",src:"./images/Aaron_Williams.jpg",alt:"Aaron Williams portrait"}),n.a.createElement("p",{id:"aw-about"},"I\u2019m Aaron Williams, photographer and filmmaker based in Berlin, Germany."))},w=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).setOpen=function(){!1===l.state.menuOpen?l.setState({menuOpen:!0}):l.setState({menuOpen:!1})},l.state={homePage:!1,activePage:"about",burgerCurrentPage:"about",menuOpen:!1},l}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"about"},n.a.createElement(E,{homePage:this.state.homePage,activePage:this.state.activePage}),n.a.createElement(k,{menuOpen:this.state.menuOpen,onClick:this.setOpen,homePage:this.state.homePage}),n.a.createElement(j,{menuOpen:this.state.menuOpen,burgerCurrentPage:this.state.burgerCurrentPage}),n.a.createElement(y,null))}}]),t}(l.Component),x=t(18),A=t(26),B=(t(43),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).setOpen=function(){!1===l.state.menuOpen?l.setState({menuOpen:!0}):l.setState({menuOpen:!1})},l.handleSubmit=function(e){var a;e.preventDefault(),""===l.state.firstName||""===l.state.lastName||""===l.state.email||""===l.state.subject||""===l.state.message?alert("Please fill in all required fields"):(fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object(A.a)({"form-name":"contact"},l.state),Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&"))}).catch((function(e){return alert(e)})),l.setState({formSubmitted:!0,firstName:"",lastName:"",email:"",subject:"",message:""}))},l.handleChange=function(e){return l.setState(Object(x.a)({},e.target.name,e.target.value))},l.state={homePage:!1,activePage:"contact",burgerCurrentPage:"contact",formSubmitted:!1,menuOpen:!1,firstName:"",lastName:"",email:"",subject:"",message:""},l}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(E,{activePage:this.state.activePage}),n.a.createElement(k,{menuOpen:this.state.menuOpen,onClick:this.setOpen}),n.a.createElement(j,{menuOpen:this.state.menuOpen,burgerCurrentPage:this.state.burgerCurrentPage}),this.state.formSubmitted?n.a.createElement("p",{id:"submitted-message"},"Thank you for your message!"):"",n.a.createElement("div",{id:"contact-form"},n.a.createElement("form",{name:"contact",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),n.a.createElement("div",null,n.a.createElement("label",null,"Your Name: *")),n.a.createElement("input",{type:"text",id:"fname",name:"firstName",placeholder:"First Name",value:this.state.firstName,onChange:this.handleChange,required:!0}),n.a.createElement("input",{type:"text",id:"lname",name:"lastName",placeholder:"Last Name",value:this.state.lastName,onChange:this.handleChange,required:!0}),n.a.createElement("div",null,n.a.createElement("label",null,"Your Email: *")),n.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"john.doe@example.com",value:this.state.email,onChange:this.handleChange,required:!0}),n.a.createElement("div",null,n.a.createElement("label",null,"Subject: *")),n.a.createElement("input",{type:"text",id:"subject",name:"subject",value:this.state.subject,onChange:this.handleChange,required:!0}),n.a.createElement("div",null,n.a.createElement("label",null,"Message: *")),n.a.createElement("textarea",{id:"email-message",name:"message",value:this.state.message,onChange:this.handleChange,required:!0}),n.a.createElement("div",null,n.a.createElement("button",{id:"contact-submit",type:"submit",onClick:this.handleSubmit},"Submit")),n.a.createElement("p",null,"* indicates a required field"))))}}]),t}(l.Component)),L=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).state={key:"value"},l}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g.a,null,n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/life",component:I}),n.a.createElement(p.a,{exact:!0,path:"/portrait",component:S}),n.a.createElement(p.a,{exact:!0,path:"/auto",component:N}),n.a.createElement(p.a,{exact:!0,path:"/about",component:w}),n.a.createElement(p.a,{exact:!0,path:"/contact",component:B}),n.a.createElement(p.a,{exact:!0,path:"/",component:f}))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(49);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.5acce9b3.chunk.js.map