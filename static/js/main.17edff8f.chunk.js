(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),r=a.n(c),s=(a(14),a(1)),o=a(2),l=a(4),p=a(3),m=a(5),u=(a(15),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Clicky"},i.a.createElement("h2",{className:"mainHeader"},"Californication Memory Game"),i.a.createElement("div",{id:"score"},"Score: ",this.props.points))}}]),t}(i.a.Component)),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.imagelink.map(function(t,a){return i.a.createElement("div",{onClick:function(){return e.props.random()},className:"grid-item",key:a},i.a.createElement("img",{onClick:function(){return e.props.guess(t)},src:t,alt:"friend"}))});return i.a.createElement("div",{className:"tiles"},t)}}]),t}(i.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).guess=function(e){console.log(e);for(var t=0;t<a.state.clicked.length;t++)a.state.clicked[t]!==e?a.setState({points:a.state.points+1}):(window.alert("Game Over!!"),a.setState({points:0}),a.setState({clicked:[]}),console.log(a.state.clicked));10===a.state.points&&(window.alert("Winner!!"),a.setState({points:0}),a.setState({clicked:[]})),a.state.clicked.push(e),console.log(a.state.clicked)},a.random=function(e){for(var t=[],n=a.state.imagelink.slice();n.length>0;){var i=Math.floor(Math.random()*n.length),c=n.splice(i,1)[0];t.push(c)}a.setState({imagelink:t})},a.state={imagelink:["../hank.jpg","../karen.jpg","../becca.jpg","../levon.jpg","../charlie.jpg","../marcy.jpg","../atticus.jpg","../eddie.jpg","../lew.jpg","../mia.jpg","../samurai.jpg","../stu.jpg","../sasha.jpg","../julia.jpg","../richard.jpg","../faith.jpg"],clicked:[],points:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"grid-container App-header"},i.a.createElement("div",{className:"menu"},i.a.createElement(u,{points:this.state.points})),i.a.createElement(d,{guess:this.guess,random:this.random,imagelink:this.state.imagelink})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.17edff8f.chunk.js.map