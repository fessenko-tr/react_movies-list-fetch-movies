(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var i=c(8),s=c.n(i),a=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(7),m=c(9),b=(c(20),c(6)),u=c.n(b);function v(e){return fetch("".concat("https://www.omdbapi.com/?apikey=fabffcfb","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var h=function(e){var t=e.onMovieAdd,c=Object(r.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],d=Object(r.useState)(null),b=Object(n.a)(d,2),h=b[0],O=b[1],x=Object(r.useState)(!1),f=Object(n.a)(x,2),p=f[0],N=f[1],g=Object(r.useState)(!1),y=Object(n.a)(g,2),w=y[0],I=y[1],k=function(){var e=Object(m.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),I(!0),e.next=4,v(s);case 4:if(!("Error"in(c=e.sent))){e.next=9;break}return N(!0),I(!1),e.abrupt("return");case 9:O({title:c.Title,description:c.Plot,imgUrl:"N/A"===c.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":c.Poster,imdbUrl:"https://www.imdb.com/title/"+c.imdbID,imdbId:c.imdbID}),I(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:k,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:u()("input",{"is-danger":p}),value:s,onChange:function(e){N(!1),a(e.target.value)}})}),p&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{disabled:!s.trim(),"data-cy":"searchButton",type:"submit",className:u()("button is-light",{"is-loading":w}),children:"Find a movie"})}),h&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){h&&(t(h),O(null),a(""))},children:"Add to the list"})})]})]}),h&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:h})]})]})},O=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{onMovieAdd:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2d7b9ec0.chunk.js.map