"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[9394],{d6Kh:(e,t,a)=>{a.d(t,{Dh:()=>l,TV:()=>o,gj:()=>n,mK:()=>r});var i=a("5G9X"),s=a("Wp0Y");const r="top_result",o="lyrics",n={[i.Ay.Track]:(0,s.AP)("Titres"),[i.Ay.Artist]:(0,s.AP)("Artistes"),[i.Ay.Album]:(0,s.AP)("favoritessidebar_title_albums_web"),[i.Ay.Playlist]:(0,s.AP)("Playlists"),[i.Ay.Channel]:(0,s.AP)("Univers"),[i.Ay.Show]:(0,s.AP)("Podcasts"),[i.Ay.Radio]:(0,s.WI)("Mix","Mix",{count:2}),[i.Ay.Livestream]:(0,s.AP)("Radios"),[i.Ay.User]:(0,s.AP)("Profils"),[i.Ay.Episode]:(0,s.AP)("generic_title_episodes_web"),[o]:(0,s.AP)("generic_title_lyricsmatches_web"),[i.Ay.FlowConfig]:(0,s.AP)("Flow")},l={[r]:!0,...n}},RTUF:(e,t,a)=>{a.d(t,{i:()=>o,m:()=>r});var i=a("q1tI");const s=i.createContext({isDragging:!1}),r=({children:e})=>{const[t,a]=i.useState(!1);i.useEffect((()=>{const e=e=>{e.preventDefault()},t=()=>{document.removeEventListener("dragend",t),document.removeEventListener("drop",t),document.removeEventListener("dragenter",e),document.removeEventListener("dragover",e),a(!1),document.body.classList.remove("is-dragging")};return document.addEventListener("dragstart",(()=>{document.addEventListener("dragenter",e),document.addEventListener("dragover",e),document.addEventListener("dragend",t),document.addEventListener("drop",t),a(!0),document.body.classList.add("is-dragging")})),()=>{document.removeEventListener("dragend",t),document.removeEventListener("drop",t),document.removeEventListener("dragenter",e),document.removeEventListener("dragover",e)}}),[]);const r=i.useMemo((()=>({isDragging:t})),[t]);return i.createElement(s.Provider,{value:r},e)},o=()=>{const e=i.useContext(s);if(!e)throw new Error("useDrag must be used wrapped inside a DragProvider");return e}},r4LN:(e,t,a)=>{a.d(t,{A:()=>y});var i=a("q1tI"),s=a("juqV"),r=a("iooo"),o=a("GkjM"),n=a("BJtZ"),l=a("t08u"),c=a("/5X2"),d=a("xCFc"),_=a("iiSH"),m=a("1Pdy");const p={root:"hjoo7",multilines:"yjFrI",link:"_ZA0C",text:"A9te1","is-active":"_MAPk",isActive:"_MAPk"};var v=a("kb9X");const y=({links:e,onClick:t})=>{const{id:a,index:y,type:u}=i.useContext(c.gy),{context:g,rowHeight:A}=i.useContext(d.Gt),{triggerTracking:h}=(0,l.A)(g.TYPE),f=(0,v.A)(),w=(0,n.A)(p),P=(0,s.A)(p.root,w,{[p.multilines]:A>m.F4.md}),b=(0,s.A)(p.link,w),F=(0,s.A)(p.text,w),k=e=>""!==e?e:_.fs;return i.createElement("div",{className:P},e.map(((s,n)=>i.createElement(i.Fragment,{key:s.path},null===s.path?i.createElement("span",{className:F,"data-testid":s.type},k(s.name)):i.createElement(o.A,{className:b,"data-testid":s.type,to:(0,r.jd)(s.path),onClick:()=>{f(),null==t||t(s),h({action:s.type,item:{id:a,rank:y,type:u}})}},k(s.name)),n<e.length-1?", ":null))),0===e.length&&"-")}},"x4+n":(e,t,a)=>{a.d(t,{E:()=>o});var i=a("Wp0Y"),s=a("3nMj"),r=a("iiSH");const o=(e,t)=>{if(Number.isNaN(e))return r.fs;const a=new Date(1e3*t),o=a.getDate(),n=new Date(1e3*t-864e5).getDate(),l=a.getMonth(),c=a.getFullYear(),d=new Date(e),_=d.getDate(),m=d.getMonth(),p=d.getFullYear();return o===_&&l===m&&c===p?(0,i.AP)("masthead_title_today_web"):n===_&&l===m&&c===p?(0,i.AP)("generic_title_yesterday_web"):(0,s.A)(e)}},syib:(e,t,a)=>{a.d(t,{A:()=>v});var i=a("Au7y"),s=a("Sb6s"),r=a("TRpf"),o=a("Fzox"),n=a("Nz/Y"),l=a("34sk"),c=a("yJX9"),d=a("vXsw"),_=a("xobL"),m=a("A2sV");const p=i.J1`
	fragment isPlaylistFavorite on Playlist {
		isFavorite
	}
`,v=e=>{const t={playlistId:e},a=(0,r.wA)(),i=(0,o.G)((({user:e})=>(0,_.UJ)(e))),v=(0,n.A)(),{data:y}=(0,s.I)({fragment:p,from:{__typename:"Playlist",id:e},optimistic:!0}),[u]=(0,m.LQK)({variables:t,optimisticResponse:{__typename:"Mutation",addPlaylistToFavorite:{playlist:{id:e,isFavorite:!0,__typename:"Playlist"},__typename:"PlaylistMutationFavoriteAddOut"}},onCompleted:()=>{a((0,l.TD)(c.Z.favorites,{id:e,timestamp:Date.now()},"playlist"))}}),[g]=(0,m.nPg)({variables:t,onCompleted:()=>{a((0,l.E$)(c.Z.favorites,e,"playlist"))},optimisticResponse:{__typename:"Mutation",removePlaylistFromFavorite:{playlist:{id:e,isFavorite:!1,__typename:"Playlist"},__typename:"PlaylistMutationFavoriteRemoveOut"}}}),A=(0,o.G)((t=>t.feedbacks.favorites.playlist.feedbacks[e])),h=Boolean(A||(null==y?void 0:y.isFavorite));return{isFavorite:h,toggleFavorite:()=>{i?h?g():(v(),u()):d.g.goToConnection()}}}},"6rbY":(e,t,a)=>{a.d(t,{A:()=>v});var i=a("Au7y"),s=a("Sb6s"),r=a("TRpf"),o=a("Fzox"),n=a("Nz/Y"),l=a("34sk"),c=a("yJX9"),d=a("vXsw"),_=a("xobL"),m=a("A2sV");const p=i.J1`
	fragment isPodcastFavorite on Podcast {
		isPodcastFavorite: isFavorite
	}
`,v=e=>{const t={podcastId:e},a=(0,r.wA)(),i=(0,o.G)((({user:e})=>(0,_.UJ)(e))),v=(0,n.A)(),{data:y}=(0,s.I)({fragment:p,from:{__typename:"Podcast",id:e},optimistic:!0}),[u]=(0,m.HwP)({variables:t,onCompleted:()=>{a((0,l.TD)(c.Z.favorites,{id:e,timestamp:Date.now()},"show"))},optimisticResponse:{__typename:"Mutation",addPodcastToFavorite:{podcast:{id:e,isPodcastFavorite:!0,__typename:"Podcast"},__typename:"PodcastMutationFavoriteAddOut"}}}),[g]=(0,m.PKC)({variables:t,onCompleted:()=>{a((0,l.E$)(c.Z.favorites,e,"show"))},optimisticResponse:{__typename:"Mutation",removePodcastFromFavorite:{podcast:{id:e,isPodcastFavorite:!1,__typename:"Podcast"},__typename:"PodcastMutationFavoriteRemoveOut"}}}),A=(0,o.G)((t=>t.feedbacks.favorites.show.feedbacks[e])),h=Boolean(A||(null==y?void 0:y.isPodcastFavorite));return{isFavorite:h,toggleFavorite:()=>{i?h?g():(v(),u()):d.g.goToConnection()}}}},gczi:(e,t,a)=>{a.d(t,{A:()=>g});var i=a("Au7y"),s=a("Sb6s"),r=a("TRpf"),o=a("Fzox"),n=a("X6oL"),l=a("Nz/Y"),c=a("34sk"),d=a("yJX9"),_=a("OPhi"),m=a("vXsw"),p=a("xobL"),v=a("A2sV"),y=a("5G9X");const u=i.J1`
	fragment isTrackFavorite on Track {
		isFavorite
	}
`,g=e=>{const t={trackId:e},a=(0,r.wA)(),i=(0,o.G)((({user:e})=>(0,p.UJ)(e))),g=(0,l.A)(),A=(0,n.z1)(),{data:h}=(0,s.I)({fragment:u,from:{__typename:"Track",id:e},optimistic:!0}),[f]=(0,v.M7C)({variables:t,optimisticResponse:{__typename:"Mutation",addTrackToFavorite:{track:{id:e,isFavorite:!0,__typename:"Track"},__typename:"TrackMutationFavoriteAddOut"}},onCompleted:()=>{a((0,c.TD)(d.Z.favorites,{id:e,timestamp:Date.now()},"song"));const t=A.getTrackingData(),{pagecategory:i,pagename:s,index:r}=t,o=i||s,n="track";o&&A.trackEvent({eventaction:`click-favorite-${o}_${n}`,event:"click",eventcategory:o,eventlabel:`favorite-${o}_${n}`,item:{id:e,type:n,rank:r||0}})}}),[w]=(0,v.qAq)({variables:t,onCompleted:()=>{a((0,c.E$)(d.Z.favorites,e,"song"))},optimisticResponse:{__typename:"Mutation",removeTrackFromFavorite:{track:{id:e,isFavorite:!1,__typename:"Track"},__typename:"TrackMutationFavoriteRemoveOut"}}}),[P]=(0,r.d4)((t=>[(0,_.BA)(t.feedbacks,e,y.Ay.Song)])),b=Boolean(P||(null==h?void 0:h.isFavorite));return{isFavorite:b,toggleFavorite:()=>{i?b?w():(g(),f()):m.g.goToConnection()}}}},"0O3b":(e,t,a)=>{function i(e){return(e||[]).reduce(((e,t)=>(t.node&&e.push(t.node),e)),[])}a.d(t,{A:()=>i}),a("WpbS")},a9NY:(e,t,a)=>{a.d(t,{A:()=>s});var i=a("q1tI");function s(){const e="object"==typeof window,[t,a]=(0,i.useState)({width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0});return(0,i.useEffect)((()=>{if(!e)return()=>{};const t=()=>{a({width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0})};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),t}},"p/gB":(e,t,a)=>{a.d(t,{Sx:()=>E,vs:()=>w,yh:()=>b,Pe:()=>h,Us:()=>f,C3:()=>P,Bc:()=>k,kv:()=>F});var i=a("5G9X"),s=a("AY3M");const r={[s.E4]:"artist_highlight_album",[s.pN]:"dynamic_page_album",[s.x6]:"album_page",[s.qI]:"recently_played_album",[s.LF]:"landing_facebook",[s.z6]:"profile_albums",[s.WP]:"search_album",[s._v]:"search_top_album"},o={[s.pN]:"dynamic_page_artist_radio",[s.LF]:"landing_facebook",[s.x6]:"artist_page",[s.z6]:"profile_artists",[s.qI]:"recently_played_artist",[s.WP]:"search_artist",[s._v]:"search_artist_mix",[s.Gv]:"smartradio_page",[s.sI]:"artist_top",[s.Di]:"artist_similar"};var n=a("hjG6"),l=a("7E8A");const c={[s.pN]:"dynamic_page_user_radio",[s.qI]:"recently_played_user_radio",[s.WP]:"search_user_radio",[l.CONTEXT_PAGE_SEARCH_TAB_FLOW_CONFIG]:"search_user_radio"},d={[s.pN]:"dynamic_page_flow_config",[s.WP]:"search_flow_config",[l.CONTEXT_PAGE_SEARCH_TAB_FLOW_CONFIG]:"search_flow_config"},_={[s.pN]:"dynamic_page_livestream",[s.x6]:"livestream_page",[s.Ou]:"livestreams_page",[s.qI]:"recently_played_livestream",[s.WP]:"search_livestream",[s._v]:"search_top_livestream"},m={[s.E4]:"artist_highlight_playlist",[s.pN]:"dynamic_page_playlist",[s.x6]:"playlist_page",[s.qI]:"recently_played_playlist",[s.LF]:"landing_facebook",[s.z6]:"profile_playlists",[s.WP]:"search_playlist",[s._v]:"search_top_playlist",[s.lh]:"player_default_playlist"},p={[s.pN]:"dynamic_page_radio",[s.x6]:"radio_page",[s.qI]:"recently_played_radio",[s.LF]:"landing_facebook",[s.z6]:"profile_radios",[s.WP]:"search_radio",[s._v]:"search_top_radio"},v={[s.E4]:"artist_highlight_show",[s.pN]:"dynamic_page_show",[s.x6]:"show_page",[s.qI]:"recently_played_show",[s.z6]:"profile_shows",[s.WP]:"search_show",[s._v]:"search_top_show"},y={[s.pN]:"dynamic_page_smarttracklist",[s.x6]:"smarttracklist_page"};var u=a("0bYo");const g={[s.pN]:"dynamic_page_user_radio",[s.N_]:"profile_user_radio",[s.qI]:"recently_played_user_radio"},A={[i.Ay.Album]:r,[i.Ay.Artist]:o,[i.Ay.Episode]:n.A,[i.Ay.Flow]:c,[i.Ay.MultiFlow]:d,[i.Ay.Livestream]:_,[i.Ay.Playlist]:m,[i.Ay.Radio]:p,[i.Ay.Show]:v,[i.Ay.Smarttracklist]:y,[i.Ay.Track]:u.A,[i.Ay.User]:g},h=(e,t)=>A[e]&&A[e][t]||`unknown_${e}_${t}`,f=e=>h(e,s.x6),w=e=>h(e,s.pN),P=e=>h(e,s.qI),b=e=>h(e,s.d),F=e=>h(e,s.WP),k=e=>h(e,s.WP),E=e=>h(e,s.E4)},kb9X:(e,t,a)=>{a.d(t,{A:()=>r});var i=a("0JBE"),s=a("LOQS");const r=()=>{const{page:e,section:t,entityId:a,entity:r,item:o,itemId:n,itemIndex:l}=(0,i.iQ)();if(!e||!o||!n)return()=>{};const c=l||0===l?l+1:null;return()=>s.A.log({type:"cdp",eventName:"item_clicked",customAttributes:{screen_view_name:e,item_id:n,item_type:o,...r&&{screen_view_id_type:r},...a&&{screen_view_id:a},...t&&{section_name:t},...c&&{item_position:c}}})}},D2sd:(e,t,a)=>{a.d(t,{A:()=>l});var i=a("MVPB"),s=a("4OMY"),r=a("LOQS"),o=(0,s.A)("reset");function n(){this.queries=[]}const l=new class{constructor(){Object.defineProperty(this,o,{value:n}),this.queries=void 0,this.queries=[]}addQuery(e){this.queries.push({query_string:e,timestamp:(1e3*Date.now()).toString()}),this.queries.length>=20&&this.sendLog()}sendLog(){0!==this.queries.length&&(r.A.log({type:"cdp",eventName:"search_typed",customAttributes:{queries:this.queries}}),(0,i.A)(this,o)[o]())}}},"4liH":(e,t,a)=>{a.d(t,{SA:()=>s,d0:()=>i,dZ:()=>r});const i="full",s="autocomplete",r="instant_search"},ntT5:(e,t,a)=>{a.d(t,{F9:()=>v,FU:()=>p,Fw:()=>I,P$:()=>A,SC:()=>m,Sj:()=>F,TD:()=>D,UG:()=>h,Uw:()=>C,fO:()=>y,mJ:()=>d,mQ:()=>b,nD:()=>E,vg:()=>u,xX:()=>k});var i=a("nrKQ"),s=a("lXQd"),r=a("WKgy"),o=a("5G9X"),n=a("4liH"),l=a("7E8A"),c=a("d6Kh");const d="default",_="best_result",m="alternative",p="force_correction",v="force_no_correction",y="fuzzy",u="display_result",g="click_item",A="view_all",h={[o.Ay.Artist]:"view_all_artists",[o.Ay.Album]:"view_all_albums",[o.Ay.Track]:"view_all_songs",[o.Ay.Playlist]:"view_all_playlists",[o.Ay.Radio]:"view_all_radios",[o.Ay.Show]:"view_all_shows",[o.Ay.User]:"view_all_users",[o.Ay.Livestream]:"view_all_livestreams",[o.Ay.Channel]:"view_all_channels",[o.Ay.Episode]:"view_all_episodes",[o.Ay.FlowConfig]:"view_all_flow_configs",[c.TV]:"view_all_lyrics"},f="play",w="lyrics",P="add_to_favorite",b="TAG",F="search",k="tags",E="searchTag",T=[];function L(e,t,a,o,n,l){const c=i.A.call({method:"log_central.log",data:{BATCH:[{channel:"search_action",params:{action:n,method:l,context:o,query:e?e.trim().substring(0,80):"",suggested_query:t?t.trim().substring(0,80):"",search_version:(0,s.A)(r.A.getState(),"user.USER.ABTEST.search.option","default"),item:a}}]}});T.push(c)}function I(e,t,a,i,s,r=0,o=g){e&&""!==e&&L(e,t,{id:s?s[{song:"SNG_ID",album:"ALB_ID",artist:"ART_ID",playlist:"PLAYLIST_ID",radio:"RADIO_ID",show:"SHOW_ID",user:"USER_ID",channel:"id"}[s.__TYPE__]]||s.id:null,rank:r,type:s?s.__TYPE__||s.type:"query"},a,o,i)}function C(e,t,a,i,s=0,r=g){L(e,t,{id:0,rank:s,type:"query"},a,r,i)}function D(e){if(e.pagecategory!==l.CONTEXT_PAGE_SEARCH)return;const{eventaction:t,item:a,pagename:i}=e,s="string"!=typeof(r=t)?"":r.match(/click-play-/)?f:r.match(/click-favorite-/)?P:r.match(/click-lyrics-/)?w:r.match(/click-[a-z]+-search/)||r.match(/click-best-[a-z]+-search/)||r.match(/sort-by-/)||r.match(/select-all/)||r.match(/menu-multi-/)?g:"";var r;s&&L(i,"",a,function(e){return e.match(/best|top/)?_:d}(t),s,n.d0)}}}]);