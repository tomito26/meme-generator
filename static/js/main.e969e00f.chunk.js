(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(0),c=n.n(s),i=n(9),l=n.n(i),o=(n(34),n(35),n(36),n(45)),r=n(47);var h=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("header",{children:Object(a.jsxs)(o.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"light",children:[Object(a.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(a.jsxs)(r.a,{className:"m-auto",children:[Object(a.jsx)("img",{className:"img-fluid",style:{height:"100px",width:"100px"},src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"meme"}),Object(a.jsx)(r.a.Link,{href:"#pricing",className:"pt-3 ml-3",children:Object(a.jsx)("h1",{children:"Meme Generator"})})]})})]})})})},j=n(22),m=n(23),b=n(24),d=n(11),u=n(27),x=n(26),p=n(43),g=n(44),O=n(25),v=n(46),f=(n(40),function(e){Object(u.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length);console.log(t);var n=this.state.allMemeImgs[t].url;console.log(t),this.setState({randomImg:n})}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(O.a,{md:"3"}),Object(a.jsxs)(O.a,{md:"6",children:[Object(a.jsxs)(v.a,{onSubmit:this.handleSubmit,children:[Object(a.jsxs)(v.a.Group,{className:"pt-5 mt-5 d-flex",children:[Object(a.jsx)(v.a.Control,{type:"text",value:this.state.topText,name:"topText",placeholder:"Top text",onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)(v.a.Control,{type:"text",value:this.state.bottomText,name:"bottomText",placeholder:"Bottom Text",onChange:this.handleChange})]}),Object(a.jsx)("input",{type:"submit",className:"btn btn-info",value:"Gen"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("img",{src:this.state.randomImg,className:"img-fluid",alt:""}),Object(a.jsx)("h1",{className:"top",children:this.state.topText}),Object(a.jsx)("h1",{className:"bottom",children:this.state.bottomText})]})]}),Object(a.jsx)(O.a,{md:"3"})]})})})}}]),n}(s.Component));var C=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsx)(f,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.e969e00f.chunk.js.map