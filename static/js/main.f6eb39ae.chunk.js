(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(9),o=a.n(s),l=a(17),u=a(2),m=a(3),d=a(5),h=a(4),v=a(6),p=a(7),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.onInputChange=function(e){a.setState({query:e.target.value})},a.onFormSubmit=function(e){e.preventDefault();var t=Object(p.a)(Object(p.a)(a)),n=t.props,r=t.state;n.onSubmit(r.query)},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{className:"ui huge center aligned container"},r.a.createElement("form",{className:"search-bar ui search",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"ui left icon input ".concat(e.isLoading?"loading":"")},r.a.createElement("input",{className:"prompt",onChange:this.onInputChange,value:e.query,type:"text",placeholder:"Search..."}),r.a.createElement("i",{className:"search icon"}))))}}]),t}(r.a.Component);var f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1},a.onHover=function(){console.log("hover"),a.setState({active:!0})},a.afterHover=function(){a.setState({active:!1})},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state,a=e.repository,n=a.url,i=a.name,c=a.description,s=a.watchersCount,o=a.forksCount,l=a.language,u=a.owner,m=a.openIssuesCount;return r.a.createElement("div",{className:"row ui ".concat(t.active?"secondary":""," segment"),onMouseOver:this.onHover,onFocus:this.onHover,onMouseOut:this.afterHover,onBlur:this.afterHover},r.a.createElement("div",{className:"middle aligned seven wide column"},r.a.createElement("h3",null,r.a.createElement("a",{className:"link",href:n},i)),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"middle aligned three wide column"},r.a.createElement("a",{href:u.html_url},r.a.createElement("img",{alt:"avatar",className:"ui avatar image",src:u.avatar_url}),r.a.createElement("span",null," ",u.login))),r.a.createElement("div",{className:"middle aligned center aligned two wide column"},r.a.createElement("div",null,l)),r.a.createElement("div",{className:"middle aligned center aligned four wide column"},function(e){var t=e.watchersCount,a=e.forksCount,n=e.openIssuesCount,i=[];return n&&i.push(r.a.createElement("div",{className:"ui orange basic label"},r.a.createElement("i",{className:"info icon"}),n)),t&&i.push(r.a.createElement("div",{className:"ui image blue basic label"},r.a.createElement("i",{className:"star outline icon"}),t)),a&&i.push(r.a.createElement("div",{className:"ui green basic label"},r.a.createElement("i",{className:"copy outline icon"}),a)),i}({forksCount:o,watchersCount:s,openIssuesCount:m})))}}]),t}(r.a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"renderRepositoryList",value:function(){return this.props.repositories.map(function(e){return r.a.createElement(f,{repository:{id:e.id,url:e.html_url,name:e.full_name,description:e.description,watchersCount:e.watchers_count,forksCount:e.forks_count,language:e.language,openIssuesCount:e.open_issues_count,owner:e.owner},key:e.id})})}},{key:"render",value:function(){var e=this.props;return null===e.repositories?r.a.createElement("div",{align:"center"},r.a.createElement("i",null,"results will be shown here...")):0===e.repositories.length?r.a.createElement("div",{align:"center"},r.a.createElement("i",null,"there are no repositories with this name")):r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui hidden divider"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"seven wide column"},"Name"),r.a.createElement("div",{className:"three wide column "},"Author"),r.a.createElement("div",{className:"center aligned two wide column "},"Language"),r.a.createElement("div",{className:"center aligned four wide column "},"Labels")),this.renderRepositoryList())}}]),t}(r.a.Component);var b=function(e){var t=e.text;return r.a.createElement("div",{className:"ui container center aligned"},r.a.createElement("div",{className:"ui active medium centered inline loader"}),t)};var N=function(){return r.a.createElement("div",{className:"ui center aligned container"},r.a.createElement("div",{className:"ui hidden divider"}),r.a.createElement("h2",{className:"ui icon massive header"},r.a.createElement("i",{className:"github icon"}),r.a.createElement("div",{className:"content"},"GitHub"," ",r.a.createElement("div",{className:"sub header"},"Search Repositories"))))},w=a(18),y=a.n(w).a.create({baseURL:"https://api.github.com"}),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={repositories:null,isSearching:!1},a.onSearchSubmit=function(){var e=Object(l.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isSearching:!0}),e.next=3,y.get("/search/repositories",{params:{q:t}});case 3:n=e.sent,console.log(n),a.setState({repositories:n.data.items,isSearching:!1});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"renderRepositoryList",value:function(){var e=this.state;return e.isSearching?r.a.createElement(b,null):r.a.createElement(g,{repositories:e.repositories})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui very padded container"},r.a.createElement(N,null),r.a.createElement(E,{onSubmit:this.onSearchSubmit}),r.a.createElement("div",{className:"ui hidden divider"}),this.renderRepositoryList())}}]),t}(r.a.Component);c.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f6eb39ae.chunk.js.map