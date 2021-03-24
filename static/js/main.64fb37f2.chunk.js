(this.webpackJsonpjamming=this.webpackJsonpjamming||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s,n=a(1),i=a.n(n),r=a(8),c=a.n(r),l=(a(13),a(2)),o=a(3),u=a(6),d=a(5),h=a(4),m=(a(14),a(15),a(0)),b=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"SearchBar",children:[Object(m.jsx)("input",{placeholder:"Enter A Song, Album, or Artist"}),Object(m.jsx)("button",{className:"SearchButton",children:"SEARCH"})]})}}]),a}(i.a.Component),j=(a(17),a(18),a(19),function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).addTrack=s.addTrack.bind(Object(u.a)(s)),s.removeTrack=s.removeTrack.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?Object(m.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(m.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Track",children:[Object(m.jsxs)("div",{className:"Track-information",children:[Object(m.jsx)("h3",{children:this.props.name}),Object(m.jsxs)("p",{children:[this.props.artist," | ",this.props.album," "]})]}),this.renderAction()]})}}]),a}(i.a.Component)),p=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"TrackList",children:this.props.tracks&&this.props.tracks.map((function(e){return Object(m.jsx)(j,{onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval,track:e,name:e.name,artist:e.artist,album:e.album},e.id)}))})}}]),a}(i.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"SearchResults",children:[Object(m.jsx)("h2",{children:"Results"}),Object(m.jsx)(p,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(i.a.Component),O=(a(20),function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).handleNameChange=s.handleNameChange.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"handleNameChange",value:function(t){this.props.onNameChange(t.target.value)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Playlist",children:[Object(m.jsx)("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(m.jsx)(p,{playlistName:this.props.playlistName,tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(m.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(i.a.Component)),k=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={searchResults:[{name:"Name 1",artist:"Artist 1",album:"Album 1",id:"ID 1"},{name:"Name 2",artist:"Artist 2",album:"Album 2",id:"ID 2"},{name:"Name 3",artist:"Artist 3",album:"Album 3",id:"ID 3"}],playlistName:"My playlist",playlistTracks:[{name:"Name 1",artist:"Artist 1",album:"Album 1",id:"ID 1"},{name:"Name 5",artist:"Artist 5",album:"Album 5",id:"ID 5"},{name:"Name 6",artist:"Artist 6",album:"Album 6",id:"ID 6"}]},s.addTrack=s.addTrack.bind(Object(u.a)(s)),s.removeTrack=s.removeTrack.bind(Object(u.a)(s)),s.updatePlaylistName=s.updatePlaylistName.bind(Object(u.a)(s)),s.savePlaylist=s.savePlaylist.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"addTrack",value:function(t){var e=this.state.playlistTracks;e.find((function(e){return e.id===t.id}))||(e.push(t),this.setState({playlistTracks:e}))}},{key:"removeTrack",value:function(t){var e=this.state.playlistTracks.filter((function(e){return e.id!==t.id}));this.setState({playlistTracks:e})}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"savePlaylist",value:function(){this.state.playlistTracks}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Ja",Object(m.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{}),Object(m.jsxs)("div",{className:"App-playlist",children:[Object(m.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(m.jsx)(O,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(i.a.Component);c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),s&&s instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var e=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;e(s),a(s),n(s),i(s),r(s)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.64fb37f2.chunk.js.map