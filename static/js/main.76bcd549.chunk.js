(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){e.exports=a(314)},178:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(47),o=a.n(l),c=a(15),u=a(16),i=a(18),s=a(17),p=a(19),d=(a(175),a(178),a(316)),m=a(317),h=a(324),f=a(332),g=a(140),v=a(331),E=a(325),O=a(327),S=a(326),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(d.a,{placeholder:!0},r.a.createElement(m.a,{columns:2,stackable:!0,textAlign:"center"},r.a.createElement(h.a,{vertical:!0},"Or"),r.a.createElement(m.a.Row,{verticalAlign:"middle"},r.a.createElement(m.a.Column,null,r.a.createElement(f.a,{icon:!0},r.a.createElement(g.a,{name:"paste"}),"\u0421 \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0435\u043d\u0430"),r.a.createElement(v.a,{id:"upload_clipboard",secondary:!0}," ","\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c"," ")),r.a.createElement(m.a.Column,null,r.a.createElement(f.a,{icon:!0},r.a.createElement(g.a,{name:"file"}),"\u0421 \u0444\u0430\u0439\u043b\u0430"),r.a.createElement("div",null,r.a.createElement(E.a,{id:"upload_textfile",type:"file",encType:"multipart/form-data"})))))),r.a.createElement(O.a,null,r.a.createElement(O.a.Field,{id:"fullText",control:S.a,label:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",value:this.props.state.data.fullText,onChange:function(t,a){var n=JSON.parse(JSON.stringify(e.props.state));n.data.fullText=a.value,e.props.changeState(n)},autoHeight:!0})))}},{key:"componentDidMount",value:function(){var e=this;document.getElementById("upload_textfile").addEventListener("change",function(t){var a=t.target.files[0],n=new FileReader;n.onload=function(e){var t=JSON.parse(JSON.stringify(this.props.state));t.data.fullText=e.target.result,this.props.changeState(t)}.bind(e),n.readAsText(a)},!1),document.getElementById("upload_clipboard").addEventListener("click",function(){navigator.clipboard.readText().then(function(t){var a=JSON.parse(JSON.stringify(e.props.state));a.data.fullText=t,e.props.changeState(a)}).catch(function(t){var a=JSON.parse(JSON.stringify(e.props.state));a.data.fullText="",e.props.changeState(a)})},!1)}}]),t}(n.Component);var y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(JSON.stringify(this.props.state));e.data.clearedText=e.data.fullText.replace(/[^A-Z\u0410-\u042f]/gi," ").replace(/\s+/g," ").toLowerCase(),this.props.changeState(e)}},{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(O.a.Field,{control:S.a,label:"\u041e\u0447\u0438\u0449\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",value:this.props.state.data.clearedText,autoHeight:!0}))}}]),t}(n.Component),j=a(329),w=a(328);Array.prototype.customeSort=function(e){return function e(t,a){if(0===t.length)return[];var n=[];var r=[];var l=t[0];for(var o=1;o<t.length;o++)a(t[o],l)?n[n.length]=t[o]:r[r.length]=t[o];return e(n,a).concat(l,e(r,a))}(this,e)};var C=[{text:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",value:"defaultSort"},{text:"\u0412 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e \u0441 \u043d\u0430\u0447\u0430\u043b\u0430",value:"ascendingFromBeginningSort"},{text:"\u0412 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0441 \u043d\u0430\u0447\u0430\u043b\u0430",value:"descendingFromBeginningSort"},{text:"\u0412 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e \u0441 \u043a\u043e\u043d\u0446\u0430",value:"asceningFromEndingSort"},{text:"\u0412 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0441 \u043a\u043e\u043d\u0446\u0430",value:"descendingFromEndingSort"}],k={defaultSort:function(e){return e},ascendingFromBeginningSort:function(e){return e.customeSort(function(e,t){return e.localeCompare(t)<0})},descendingFromBeginningSort:function(e){return e.customeSort(function(e,t){return t.localeCompare(e)<0})},asceningFromEndingSort:function(e){return e.customeSort(function(e,t){var a=e.split("").reverse().join(""),n=t.split("").reverse().join("");return a.localeCompare(n)<0})},descendingFromEndingSort:function(e){return e.customeSort(function(e,t){var a=e.split("").reverse().join(""),n=t.split("").reverse().join("");return n.localeCompare(a)<0})}};var N=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(this.props.state));e.data.words=this.props.state.data.clearedText.split(" ").filter(function(e){return""!==e&&e.length>=3}),this.props.changeState(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(O.a,null,r.a.createElement(O.a.Field,null,r.a.createElement(j.a,{options:C,defaultValue:C[0].value,onChange:function(t,a){var n=JSON.parse(JSON.stringify(e.props.state));n.data.words=k[a.value](n.data.words),e.props.changeState(n)}})),r.a.createElement(O.a.Field,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Body,null,this.props.state.data.words.map(function(e,t){return r.a.createElement(w.a.Row,{key:t},r.a.createElement(w.a.Cell,null,e))})))))}}]),t}(n.Component),x=a(73),J=["\u0430","\u0435","\u0451","\u0438","\u043e","\u0443","\u044b","\u044d","\u044e","\u044f"],W=["\u0431","\u0432","\u0433","\u0434","\u0436","\u0437","\u0439","\u043a","\u043b","\u043c","\u043d","\u043f","\u0440","\u0441","\u0442","\u0444","\u0445","\u0446","\u0447","\u0448","\u0449","\u044a","\u044c"],R=function(e,t){return e.length>=t.length?-1:1},F=["\u0432","\u0432\u0448\u0438","\u0432\u0448\u0438\u0441\u044c","\u0438\u0432","\u0438\u0432\u0448\u0438","\u0438\u0432\u0448\u0438\u0441\u044c","\u044b\u0432","\u044b\u0432\u0448\u0438","\u044b\u0432\u0448\u0438\u0441\u044c"].sort(R),V=["\u0441\u044f","\u0441\u044c"].sort(R),B=["\u0435\u0435","\u0438\u0435","\u044b\u0435","\u043e\u0435","\u0438\u043c\u0438","\u044b\u043c\u0438","\u0435\u0439","\u0438\u0439","\u044b\u0439","\u043e\u0439","\u0435\u043c","\u0438\u043c","\u044b\u043c","\u043e\u043c","\u0435\u0433\u043e","\u043e\u0433\u043e","\u0435\u043c\u0443","\u043e\u043c\u0443","\u0438\u0445","\u044b\u0445","\u0443\u044e","\u044e\u044e","\u0430\u044f","\u044f\u044f","\u043e\u044e","\u0435\u044e"].sort(R),T=["\u0435\u043c","\u043d\u043d","\u0432\u0448","\u044e\u0449","\u0449","\u0438\u0432\u0448","\u044b\u0432\u0448","\u0443\u044e\u0449"].sort(R),I=["\u043b\u0430","\u043d\u0430","\u0435\u0442\u0435","\u0439\u0442\u0435","\u043b\u0438","\u0439","\u043b","\u0435\u043c","\u043d","\u043b\u043e","\u043d\u043e","\u0435\u0442","\u044e\u0442","\u043d\u044b","\u0442\u044c","\u0435\u0448\u044c","\u043d\u043d\u043e","\u0438\u043b\u0430","\u044b\u043b\u0430","\u0435\u043d\u0430","\u0435\u0439\u0442\u0435","\u0443\u0439\u0442\u0435","\u0438\u0442\u0435","\u0438\u043b\u0438","\u044b\u043b\u0438","\u0435\u0439","\u0443\u0439","\u0438\u043b","\u044b\u043b","\u0438\u043c","\u044b\u043c","\u0435\u043d","\u0438\u043b\u043e","\u044b\u043b\u043e","\u0435\u043d\u043e","\u044f\u0442","\u0443\u0435\u0442","\u0443\u044e\u0442","\u0438\u0442","\u044b\u0442","\u0435\u043d\u044b","\u0438\u0442\u044c","\u044b\u0442\u044c","\u0438\u0448\u044c","\u0443\u044e","\u044e"].sort(R),M=["\u0430","\u0435\u0432","\u043e\u0432","\u0438\u0435","\u044c\u0435","\u0435","\u0438\u044f\u043c\u0438","\u044f\u043c\u0438","\u0430\u043c\u0438","\u0435\u0438","\u0438\u0438","\u0438","\u0438\u0435\u0439","\u0435\u0439","\u043e\u0439","\u0438\u0439","\u0439","\u0438\u044f\u043c","\u044f\u043c","\u0438\u0435\u043c","\u0435\u043c","\u0430\u043c","\u043e\u043c","\u043e","\u0443","\u0430\u0445","\u0438\u044f\u0445","\u044f\u0445","\u044b","\u044c","\u0438\u044e","\u044c\u044e","\u044e","\u0438\u044f","\u044c\u044f","\u044f"].sort(R),P=["\u043e\u0441\u0442","\u043e\u0441\u0442\u044c"].sort(R),A=["\u0435\u0439\u0448","\u0435\u0439\u0448\u0435"].sort(R),L=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"stemAll",value:function(e){var t=this;return e.map(function(e){return t.stem(e)})}},{key:"stem",value:function(e){var t=this.findWordParts(e);console.log(JSON.parse(JSON.stringify(t)));var a=this.stemByWordParts(t).word;return console.log(this.stemByWordParts(t)),a}},{key:"stemByWordParts",value:function(e){var t,a;if(this.removeEnding(e,F),t=this.removeEnding(e,V),a=this.removeEnding(e,B),this.removeEnding(e,T),a)return e;if(this.removeEnding(e,I),t||this.removeEnding(e,M),"\u0438"===e.RV.slice(e.RV.length-1)&&(e.RV=e.RV.slice(0,e.RV.length-1),e.word=e.word.slice(0,e.word.length-1)),e.R2)for(var n=0;n<=P.length-1;n++){var r=P[n];if(e.R2.slice(e.R2.length-r.length)===r){e.RV=e.RV.slice(0,e.RV.length-r.length),e.word=e.word.slice(0,e.word.length-r.length);break}}return this.removeEnding(e,A.concat(["\u043d","\u044c"])),e}},{key:"findWordParts",value:function(e){var t=Math.min.apply(Math,Object(x.a)(e.split("").map(function(t,a){return J.includes(t)&&W.includes(e[a-1])?a:e.length}))),a=e.substr(t+1,e.length),n=Math.min.apply(Math,Object(x.a)(a.split("").map(function(e,t){return W.includes(e)&&J.includes(a[t-1])?t:a.length}))),r=a.substr(n+1,a.length),l=Math.min.apply(Math,Object(x.a)(r.split("").map(function(e,t){return W.includes(e)&&J.includes(r[t-1])?t:r.length}))),o=r.substr(l+1,r.length);return{word:e,RV:a,R1:r,R2:o}}},{key:"removeEnding",value:function(e,t){for(var a=0;a<=t.length-1;a++){var n=t[a];if(e.RV.slice(e.RV.length-n.length)===n)return e.RV=e.RV.slice(0,e.RV.length-n.length),e.word=e.word.slice(0,e.word.length-n.length),!0}return!1}}]),e}(),_=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=new L,t=JSON.parse(JSON.stringify(this.props.state));t.data.stemmedWords=e.stemAll(this.props.state.data.words).filter(function(e){return""!==e}),this.props.changeState(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(O.a,null,r.a.createElement(O.a.Field,null,r.a.createElement(j.a,{options:C,defaultValue:C[0].value,onChange:function(t,a){var n=JSON.parse(JSON.stringify(e.props.state));n.data.stemmedWords=k[a.value](n.data.stemmedWords),e.props.changeState(n)}})),r.a.createElement(O.a.Field,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Body,null,this.props.state.data.stemmedWords.map(function(e,t){return r.a.createElement(w.a.Row,{key:t},r.a.createElement(w.a.Cell,null,e))})))))}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(JSON.stringify(this.props.state)),t=[];this.props.state.data.stemmedWords.forEach(function(e){var a=t.findIndex(function(t){return t.value===e});-1!==a?t[a].count+=1:t.push({value:e,count:1})}),e.data.groupedWords=t.sort(function(e,t){return t.count-e.count}),this.props.changeState(e)}},{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(O.a.Field,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Body,null,this.props.state.data.groupedWords.map(function(e,t){return r.a.createElement(w.a.Row,{key:t},r.a.createElement(w.a.Cell,null,e.value),r.a.createElement(w.a.Cell,null,e.count))})))))}}]),t}(n.Component),Z=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(JSON.stringify(this.props.state));this.props.state.data.weightCoef=[{width:1,words:e.data.groupedWords.slice(0,4)},{width:2,words:e.data.groupedWords.slice(4,10)},{width:3,words:e.data.groupedWords.slice(10,20)}]}},{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(O.a.Field,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Body,null,this.props.state.data.groupedWords.slice(0,20).map(function(e,t){return r.a.createElement(w.a.Row,{key:t},r.a.createElement(w.a.Cell,null,e.value),r.a.createElement(w.a.Cell,null,e.count),r.a.createElement(w.a.Cell,null,t<4?"1  \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":t<10?"2  \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":"3  \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"))})))))}}]),t}(n.Component);var H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(O.a.Field,null,r.a.createElement(E.a,{icon:{name:"search",circular:!0,link:!0},placeholder:"Search ...",onChange:function(e,t){var a=this,n=new L,r=JSON.parse(JSON.stringify(this.props.state)),l=t.value.replace(/[^A-Z\u0410-\u042f]/gi," ").replace(/\s+/g," ").toLowerCase(),o=l.split(" ").filter(function(e){return""!==e}),c=[],u=n.stemAll(o).filter(function(e){return""!==e&&e.length>=3}),i=0,s=0,p=0;this.props.state.data.groupedWords.forEach(function(e){return p+=e.count}),p/=this.props.state.data.groupedWords.length,u.forEach(function(e){var t=0;if(a.props.state.data.weightCoef.forEach(function(a){a.words.forEach(function(n){n.value===e&&(t=a.width)})}),0!==t){var n=a.props.state.data.groupedWords.find(function(t){return t.value===e});c.push(n.value),i+=1/t*n.count,s+=n.count}else s+=p}),r.data.relevance={text:l,stemmedWords:u,relevance:i/s,matchingWords:c},this.props.changeState(r)}.bind(this)})),r.a.createElement(O.a.Field,null,r.a.createElement("b",null,"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438:"," ",this.props.state.data.relevance.relevance)),r.a.createElement(O.a.Field,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Body,null,this.props.state.data.relevance.matchingWords.map(function(e,t){return r.a.createElement(w.a.Row,{key:t},r.a.createElement(w.a.Cell,null,e))})))))}}]),t}(n.Component),q=[{text:"\u0422\u0440\u0435\u0445\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u0430\u044f N-\u0433\u0440\u0430\u043c\u043c\u0430",value:3},{text:"\u0427\u0435\u0442\u044b\u0440\u0435\u0445\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u0430\u044f N-\u0433\u0440\u0430\u043c\u043c\u0430",value:4},{text:"\u041f\u044f\u0442\u0438\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u0430\u044f N-\u0433\u0440\u0430\u043c\u043c\u0430",value:5}];function z(e){for(var t=this.props.state.data.fullText.replace(/[^A-Z\u0410-\u042f]/gi,"").toLowerCase(),a=[],n=function(n){var r=t.slice(n,n+e);a[r]?a[r]+=1:a[r]=1;var l=a.findIndex(function(e){return e.value===r});-1!==l?a[l].count+=1:a.push({value:r,count:1})},r=0;r<t.length-e+1;r++)n(r);var l=JSON.parse(JSON.stringify(this.props.state));l.data.ngrams=a.sort(function(e,t){return t.count-e.count}),this.props.changeState(l)}var G=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){z.bind(this,3)()}},{key:"render",value:function(){var e=this;return r.a.createElement(O.a,null,r.a.createElement(O.a.Field,null,r.a.createElement(j.a,{options:q,defaultValue:3,onChange:function(t,a){z.bind(e,a.value)()}})),r.a.createElement(O.a.Field,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Body,null,this.props.state.data.ngrams.map(function(e,t){return r.a.createElement(w.a.Row,{key:t},r.a.createElement(w.a.Cell,null,e.value),r.a.createElement(w.a.Cell,null,e.count))})))))}}]),t}(n.Component),K=a(330),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).panes=[{menuItem:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(b,{state:a.props.state,changeState:a.props.changeState}))}},{menuItem:"\u041e\u0447\u0438\u0441\u0442\u043a\u0430",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(y,{state:a.props.state,changeState:a.props.changeState}))}},{menuItem:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u043e\u0432\u0430",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(N,{state:a.props.state,changeState:a.props.changeState}))}},{menuItem:"\u0421\u0442\u0435\u043c\u043c\u0438\u043d\u0433",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(_,{state:a.props.state,changeState:a.props.changeState}))}},{menuItem:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(D,{state:a.props.state,changeState:a.props.changeState}))}},{menuItem:"\u0412\u0435\u0441\u043e\u0432\u044b\u0435 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u044b",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(Z,{state:a.props.state,changeState:a.props.changeState}))}},{menuItem:"\u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(H,{state:a.props.state,changeState:a.props.changeState}))}},{menuItem:"N-\u0433\u0440\u0430\u043c\u043c\u044b",render:function(){return r.a.createElement(K.a.Pane,null,r.a.createElement(G,{state:a.props.state,changeState:a.props.changeState}))}}],a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(K.a,{menu:{fluid:!0,vertical:!0,tabular:!0,pointing:!0},panes:this.panes})}}]),t}(n.Component),U=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={data:{fullText:"",clearedText:"",words:[],stemmedWords:[],groupedWords:[],weightCoef:[],relevance:{text:"",stemmedWords:[],relevance:"",matchingWords:[]},ngrams:[]}},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"changeState",value:function(e){this.setState(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Q,{state:this.state,changeState:this.changeState.bind(this)}))}}]),t}(n.Component);o.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[170,2,1]]]);
//# sourceMappingURL=main.76bcd549.chunk.js.map