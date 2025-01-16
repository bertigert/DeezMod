"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1403],{"JKL/":(e,t,a)=>{a.d(t,{A:()=>l});var r=a("q1tI"),n=a("TDRX");const l=({children:e,className:t=""})=>r.createElement(n.a,{mt:"spacing.xl",mb:"spacing.2xl",className:t},e)},B3z3:(e,t,a)=>{a.d(t,{A:()=>i});var r=a("+9dH"),n=a("q1tI"),l=a("GkjM"),o=a("pVdW");const i=({children:e,to:t,...a})=>n.createElement(o.E,(0,r.A)({as:"span",variant:"body.default.l",color:"text.neutral.primary.default",_hover:{textDecoration:"underline"}},a),n.createElement(l.A,{to:t,"data-testid":"creator-name"},e))},uSSP:(e,t,a)=>{a.d(t,{A:()=>i});var r=a("+9dH"),n=a("q1tI"),l=a("GkjM"),o=a("3H/6");const i=({text:e,to:t,children:a,className:i="",...c})=>{var s;return n.createElement("li",(0,r.A)({className:i},c),null!==(s=e&&n.createElement(o.m,{label:e},n.createElement(l.A,{to:t},a)))&&void 0!==s?s:n.createElement(l.A,{to:t},a))}},lDkB:(e,t,a)=>{a.d(t,{A:()=>o});var r=a("q1tI"),n=a("juqV"),l=a("sk1u");const o=({children:e,className:t=""})=>{const a=(0,n.A)(l.A.thumbnailList,t);return r.createElement("ul",{className:a},e)}},Ozpl:(e,t,a)=>{a.d(t,{A:()=>o});var r=a("q1tI"),n=a("juqV"),l=a("sk1u");const o=({children:e,className:t=""})=>{const a=(0,n.A)(l.A.infoItem,t);return r.createElement("li",{className:a},e)}},WY4A:(e,t,a)=>{a.d(t,{A:()=>l});var r=a("q1tI"),n=a("CdHq");const l=({children:e,className:t=""})=>r.createElement(n.s,{as:"ul",mt:"spacing.xs",color:"text.neutral.secondary.default",className:t},e)},"oq/a":(e,t,a)=>{a.d(t,{A:()=>l});var r=a("q1tI"),n=a("CdHq");const l=({children:e,className:t=""})=>r.createElement(n.s,{justifyContent:"center",direction:"column",flex:"1",className:t},e)},WQvr:(e,t,a)=>{a.d(t,{A:()=>l});var r=a("q1tI"),n=a("CdHq");const l=({children:e,className:t=""})=>r.createElement(n.s,{alignItems:"center",gap:"spacing.s","data-testid":"masthead-subtitle",className:t},e)},wRgy:(e,t,a)=>{a.d(t,{A:()=>c});var r=a("q1tI"),n=a("juqV"),l=a("TDRX"),o=a("9OcB"),i=a("sk1u");const c=({className:e="",children:t,...a})=>{const c=(0,n.A)(i.A.thumbnail,e);return r.createElement(l.a,{className:c},r.createElement(o.A,a,t))}},zJSK:(e,t,a)=>{a.d(t,{A:()=>l});var r=a("q1tI"),n=a("y7xR");const l=({children:e,className:t=""})=>r.createElement(n.D,{color:"text.neutral.primary.default",variant:"display.m",mb:"spacing.xl",noOfLines:2,wordBreak:"break-word",className:t,title:e},e)},"2NhJ":(e,t,a)=>{a.d(t,{Ay:()=>l});var r=a("q1tI"),n=a("CdHq");const l=({children:e,className:t=""})=>r.createElement(n.s,{gap:"spacing.2xl",className:t,"data-testid":"masthead"},e)},sdUN:(e,t,a)=>{a.d(t,{A:()=>P});var r=a("q1tI"),n=a("5G9X");function l({type:e,data:{SNG_TITLE:t,ART_NAME:a,ALB_TITLE:l,TITLE:o,SUBTITLE:i,SHOW_NAME:c,EPISODE_TITLE:s}}){const m={[n.Ay.Track]:()=>t,[n.Ay.Show]:()=>c,[n.Ay.Playlist]:()=>o,[n.Ay.Artist]:()=>a,[n.Ay.Album]:()=>l,[n.Ay.Episode]:()=>s,[n.Ay.Smarttracklist]:()=>`${o} ${i}`}[e];return m?r.createElement("meta",{itemProp:"name",content:m()}):null}var o=a("Wp0Y");function i({type:e,data:{SHOW_DESCRIPTION:t,DESCRIPTION:a,EPISODE_DESCRIPTION:l,ALB_TITLE:i,ART_NAME:c,ORIGINAL_RELEASE_DATE:s,PHYSICAL_RELEASE_DATE:m,TITLE:u,SUBTITLE:d}}){const p={[n.Ay.Show]:()=>t,[n.Ay.Playlist]:()=>a,[n.Ay.Album]:()=>(0,o.AP)("%s de %s - Année de production %s",{sprintf:[i,c,new Date(s||m||Date.now()).getFullYear()]}),[n.Ay.Episode]:()=>l,[n.Ay.Smarttracklist]:()=>a||`${u} ${d}`}[e];return p?r.createElement("p",{className:"hidden",itemProp:"description"},p()):null}var c=a("hz5U");function s({type:e,data:t}){return r.createElement("meta",{itemProp:"image",content:c.A.getImageSrcForData(e,t,200,200)})}var m=a("iooo");function u({type:e,data:{SNG_ID:t,SHOW_ID:a,PLAYLIST_ID:l,ART_ID:o,ALB_ID:i,EPISODE_ID:c,SMARTTRACKLIST_ID:s}}){const u={[n.Ay.Track]:()=>`/track/${t}`,[n.Ay.Show]:()=>`/show/${a}`,[n.Ay.Playlist]:()=>`/playlist/${l}`,[n.Ay.Artist]:()=>`/artist/${o}`,[n.Ay.Album]:()=>`/album/${i}`,[n.Ay.Episode]:()=>`/episode/${c}`,[n.Ay.Smarttracklist]:()=>`/smarttracklist/${s}`}[e];return u?r.createElement("meta",{itemProp:"url",content:(0,m.jd)(u())}):null}function d({type:e,data:{EPISODE_PUBLISHED_TIMESTAMP:t}}){const a={[n.Ay.Episode]:()=>new Date(t.replace(" ","T")+"Z").toISOString()}[e];return a?r.createElement("meta",{itemProp:"datePublished",content:a()}):null}function p({type:e,data:{DURATION:t}}){const a={[n.Ay.Track]:()=>`PT${Math.floor(t/60)}M${t%60}S`,[n.Ay.Episode]:()=>`PT${Math.floor(t/60)}M${t%60}S`}[e];return a?r.createElement("meta",{itemProp:"duration",content:a()}):null}function A({type:e,data:{EPISODES:t,NB_SONG:a}}){const l={[n.Ay.Show]:()=>t.total,[n.Ay.Smarttracklist]:()=>a}[e];return l?r.createElement("meta",{itemProp:"numTracks",content:l()}):null}function E({type:e,data:{ARTISTS:t}}){const a={[n.Ay.Album]:()=>t||[],[n.Ay.Track]:()=>t||[]}[e];if(!a)return null;const l=a().find((e=>0===Number(e.ROLE_ID)||5===Number(e.ROLE_ID)));return l?r.createElement("div",{itemProp:"byArtist",itemScope:"itemscope",itemType:"http://schema.org/MusicGroup"},r.createElement("meta",{itemProp:"url",content:`/artist/${l.ART_ID}`}),r.createElement("meta",{itemProp:"name",content:l.ART_NAME})):null}var y,g,b,v,h,f,I=a("TRpf"),T=a("Vd8Q"),_=a("xobL");const S=(0,I.Ng)((({user:e})=>({userLang:(0,_.Z0)(e)})))((function({type:e,data:{SHOW_ID:t,ART_ID:a,ALB_ID:l,SMARTTRACKLIST_ID:o},userLang:i}){const c={[n.Ay.Show]:()=>`/show/${t}?autoplay=true`,[n.Ay.Artist]:()=>`/artist/${a}?autoplay=true`,[n.Ay.Album]:()=>`/album/${l}?autoplay=true`,[n.Ay.Smarttracklist]:()=>`/smarttracklist/${o}?autoplay=true`}[e];return c?r.createElement("div",{key:"action",itemProp:"potentialAction",itemScope:!0,itemType:"http://schema.org/ListenAction"},r.createElement("div",{itemProp:"target",itemScope:!0,itemType:"http://schema.org/EntryPoint"},r.createElement("meta",{itemProp:"urlTemplate",content:`https://${T.default.get("host_website_ssl")}${c()}`}),y||(y=r.createElement("meta",{itemProp:"actionPlatform",content:"http://schema.org/DesktopWebPlatform"})),g||(g=r.createElement("meta",{itemProp:"actionPlatform",content:"http://schema.org/IOSPlatform"})),b||(b=r.createElement("meta",{itemProp:"actionPlatform",content:"http://schema.org/AndroidPlatform"})),v||(v=r.createElement("meta",{itemProp:"actionPlatform",content:"http://schema.googleapis.com/GoogleAudioCast"})),h||(h=r.createElement("meta",{itemProp:"actionPlatform",content:"http://schema.googleapis.com/GoogleVideoCast"})),r.createElement("meta",{itemProp:"inLanguage",content:i})),r.createElement("div",{itemProp:"expectsAcceptanceOf",itemScope:!0,itemType:"http://schema.org/Offer"},f||(f=r.createElement("meta",{itemProp:"category",content:"subscription"})),T.default.get("country_opened").map((e=>r.createElement("div",{key:e,itemProp:"eligibleRegion",itemScope:!0,itemType:"http://schema.org/Country"},r.createElement("meta",{itemProp:"name",content:e})))))):null}));function P(e){return r.createElement("div",null,r.createElement(l,e),r.createElement(i,e),r.createElement(s,e),r.createElement(u,e),r.createElement(d,e),r.createElement(p,e),r.createElement(A,e),r.createElement(E,e),r.createElement(S,e))}},CTxd:(e,t,a)=>{a.d(t,{Ay:()=>M});var r=a("+9dH"),n=a("q1tI"),l=a("juqV"),o=a("TRpf"),i=a("Ty5D"),c=a("TDRX"),s=a("CdHq"),m=a("siwx"),u=a("//u0"),d=a("P/T7"),p=a("MMCw"),A=a("LjZa"),E=a("xobL"),y=a("iooo"),g=a("5G9X"),b=a("Fg+i"),v=a("hz5U"),h=a("Vd8Q"),f=a("FMs+"),I=a("kPsn");const T=(e,t=I.SE.MEDIUM)=>e?e.small&&t<=I.SE.SMALL?e.small:e.medium&&t<=I.SE.MEDIUM?e.medium:e.large||[]:[],_=(e,t,a)=>!e||!e.length||t>=e.length?((e,t=I.SE.MEDIUM)=>`https://${h.default.get("host_img_url_ssl")}/${e}/d41d8cd98f00b204e9800998ecf8427e/${t}x${t}-000000-80-0-0.jpg`)(a):e[t];var S=a("sAMA");const x=({children:e,alt:t,urls:a,isExplicit:h,className:I,height:x,isActive:M=!1,rounded:$,type:F,width:w,hasOverlay:O,onClick:q,redirectUrl:B,genericType:G})=>{var j;const[z,H]=(0,n.useState)(0),[U,X]=(0,n.useState)(),V=(0,o.d4)((e=>(0,E.Uw)(e.user))),W=(0,o.d4)((e=>(0,E.NF)(e.user))),J=h&&V===S.g,Q=(0,i.zy)(),K=(0,i.W6)(),Y=(0,n.useCallback)((e=>{X((e=>{try{const{color:t,visiblePixelsPercentage:a}=(0,f.xH)(e);if(a>10)return(0,f.s3)(t)}catch(e){}return"rgba(0,0,0,0)"})(e.target))}),[]),Z=(0,n.useCallback)((()=>{H(z+1)}),[z]),ee=(0,n.useCallback)((()=>{q&&q(),B&&B!==(null==Q?void 0:Q.pathname)&&K.push((0,y.jd)(B))}),[K,null==Q?void 0:Q.pathname,q,B]),te={className:(0,l.A)("tfT2j",I,{wbExq:$,oQNuQ:!O||!e,MvB5w:J,gAdNo:B,VuV5A:M}),onClick:ee},ae={};J&&(ae.style={backgroundImage:`url(${v.A.getExplicitSrc(w,x)})`,backgroundColor:`${U}`,backgroundBlendMode:"multiply",backgroundSize:"100%"});const re={alt:t,className:"KVvol",crossOrigin:"anonymous",htmlHeight:`${x}px`,loading:"lazy",src:_(T(a,Number(w)),z,F),htmlWidth:`${w}px`,onLoad:h?Y:A.A,onError:Z},ne=null===(j=re.src)||void 0===j?void 0:j.includes(v.A.PLACEHOLDER_LOVED_TRACKS_MD5),le=G===b.eb.resume,oe=G===b.eb.latest;return F===g.Ay.Generic&&(oe||le)||ne?n.createElement(c.a,(0,r.A)({as:"figure"},te),n.createElement(c.a,(0,r.A)({as:"div",borderRadius:"s"},ae,{height:"100%"}),n.createElement(s.s,{backgroundColor:W?"#FF8564":"#FFD0C3",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},ne?n.createElement(u.C,{size:"medium",boxSize:"50%",color:W?"#B5492B":"#E85E38"}):le?n.createElement(d.x,{size:"medium",boxSize:"50%",color:W?"#B5492B":"#E85E38"}):n.createElement(p.X,{size:"medium",boxSize:"50%",color:W?"#B5492B":"#E85E38"})))):n.createElement(c.a,(0,r.A)({as:"figure"},te),n.createElement(c.a,(0,r.A)({as:"div",borderRadius:"s","data-testid":"figure-style"},ae),n.createElement(m._,(0,r.A)({width:`${w}px`,borderRadius:$?"full":"s","data-testid":`${F}-cover`,objectFit:"cover"},re)),e))};x.defaultProps={height:320,width:320,rounded:!1,hasOverlay:!0};const M=x},GxIe:(e,t,a)=>{a.d(t,{A:()=>C});var r,n,l=a("q1tI"),o=a("Ty5D"),i=a("Wp0Y"),c=a("LpaV"),s=a("CrR0"),m=a("0sL9"),u=a("o6LG"),d=a("lhvF"),p=a("/eXD"),A=a("L20E"),E=a("uN8A"),y=a("TDRX"),g=a("9OcB"),b=a("5Loq"),v=a("T0hu"),h=a("GkjM"),f=a("7bA3"),I=a("1lpQ"),T=a("smbX"),_=a("nQur"),S=a("0JBE"),P=a("kb9X"),k=a("5G9X");const D=e=>{e.stopPropagation(),e.currentTarget.blur()},C=(0,S.S2)((({id:e,albumName:t,picture:a,hasExplicitCover:k,releaseDate:C,contributors:N,isExplicitAlbum:L,hasContextMenu:R=!0,onAction:x})=>{const{push:M}=(0,o.W6)(),{toggleFavorite:$,isFavorite:F}=(0,_.A)(e),{legacyContext:w}=(0,S.iQ)(),O=(0,P.A)(),q={anchor:l.createElement(s.U,{"aria-label":(0,i.AP)("Plus"),icon:r||(r=l.createElement(b.j,null))}),context:w,data:{name:t,ARTISTS:N.map((e=>({ART_NAME:e.name}))),picture:a,id:e,type:1},id:e,placement:"top",disableZoomCover:!0};return l.createElement(m.V,{onClick:()=>{O(),null==x||x({type:"navigation",target:"album",id:e}),M(`/album/${e}`)},_hover:{cursor:"pointer"},"data-testid":"album_thumbnail"},l.createElement(u.g,{ratio:1,display:"block"},l.createElement(g.A,{src:a,alt:t,isExplicitCover:k},l.createElement(d.Q,null,l.createElement(f.A,{onClick:()=>null==x?void 0:x({type:"play"}),type:"album",id:e}),l.createElement(T.A,{isFavorite:F,toggleFavorite:$}),R&&l.createElement(c.K.Provider,{value:e},l.createElement(v.A,q))))),l.createElement(p.r,{title:t},l.createElement(h.A,{onClick:t=>{O(),null==x||x({type:"navigation",target:"album",id:e}),D(t)},to:`/album/${e}`,_hover:{textDecoration:"underline"}},t)),l.createElement(A.T,null,N.map(((e,t)=>l.createElement(l.Fragment,{key:e.id},t>0&&", ",l.createElement(h.A,{onClick:t=>{O(),null==x||x({type:"navigation",target:"artist",id:e.id}),D(t)},to:`/artist/${e.id}`,_hover:{textDecoration:"underline"}},e.name))))),l.createElement(E.f,null,(0,i.AP)("Sorti le")," ",C),L&&(n||(n=l.createElement(y.a,{mt:"spacing.s"},l.createElement(I.A,null)))))}),(({id:e})=>({itemId:e,item:k.Ay.Album})))},smbX:(e,t,a)=>{a.d(t,{A:()=>i});var r=a("q1tI"),n=a("Hews"),l=a("CrR0"),o=a("Wp0Y");const i=({isFavorite:e,toggleFavorite:t})=>r.createElement(l.U,{"aria-label":e?(0,o.AP)("Retirer des Coups de cœur"):(0,o.AP)("Ajouter aux Coups de cœur"),icon:r.createElement(n.A,{isActive:e}),onClick:t})},"7bA3":(e,t,a)=>{a.d(t,{A:()=>c});var r=a("q1tI"),n=a("F3Nm"),l=a("CrR0"),o=a("0JBE"),i=a("GjdC");const c=({id:e,type:t,displayForce:a,shouldPlayRadio:c=!1,onClick:s})=>{const{legacyContext:m}=(0,o.iQ)(),u=(0,i.A)();return r.createElement(l.U,{"aria-label":"",as:"div",displayForce:a,icon:r.createElement(n.A,{id:e,type:t,context:m,radio:c,onClick:e=>{null==s||s(),e||u("direct_play")}})})}},nQur:(e,t,a)=>{a.d(t,{A:()=>E});var r=a("Au7y"),n=a("Sb6s"),l=a("TRpf"),o=a("Fzox"),i=a("X6oL"),c=a("Nz/Y"),s=a("34sk"),m=a("yJX9"),u=a("vXsw"),d=a("xobL"),p=a("A2sV");const A=r.J1`
	fragment isAlbumFavorite on Album {
		isFavorite
	}
`,E=e=>{const t={albumId:e},a=(0,l.wA)(),r=(0,o.G)((({user:e})=>(0,d.UJ)(e))),E=(0,c.A)(),y=(0,i.z1)(),{data:g}=(0,n.I)({fragment:A,from:{__typename:"Album",id:e},optimistic:!0}),[b]=(0,p._At)({variables:t,optimisticResponse:{__typename:"Mutation",addAlbumToFavorite:{album:{id:e,isFavorite:!0,__typename:"Album"},__typename:"AlbumMutationFavoriteAddOut"}},onCompleted:()=>{a((0,s.TD)(m.Z.favorites,{id:e,timestamp:Date.now()},"album"));const t=y.getTrackingData(),{pagecategory:r,pagename:n,index:l}=t,o=r||n,i="album";o&&y.trackEvent({eventaction:`click-favorite-${o}_${i}`,event:"click",eventcategory:o,eventlabel:`favorite-${o}_${i}`,item:{id:e,type:i,rank:l||0}})}}),[v]=(0,p.I7O)({variables:t,onCompleted:()=>{a((0,s.E$)(m.Z.favorites,e,"album"))},optimisticResponse:{__typename:"Mutation",removeAlbumFromFavorite:{album:{id:e,isFavorite:!1,__typename:"Album"},__typename:"AlbumMutationFavoriteRemoveOut"}}}),h=(0,o.G)((t=>t.feedbacks.favorites.album.feedbacks[e])),f=Boolean(h||(null==g?void 0:g.isFavorite));return{isFavorite:f,toggleFavorite:()=>{r?f?v():(E(),b()):u.g.goToConnection()}}}},MWM2:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a("5G9X"),n=a("kPsn"),l=a("tCiE");const o=(e,t)=>{return t&&t.length?t.map((e=>({id:e.node.id,name:e.node.name,picture:(0,n.jg)(r.Ay.Artist,e.node.picture)}))):(a=e)&&a.length?a.map((e=>{if(!(0,l.B)(e))throw new Error("Legacy contributor has wrong format");return{id:e.ART_ID,name:e.ART_NAME,picture:(0,n.kk)(r.Ay.Artist,e)}})):[];var a}},kb9X:(e,t,a)=>{a.d(t,{A:()=>l});var r=a("0JBE"),n=a("LOQS");const l=()=>{const{page:e,section:t,entityId:a,entity:l,item:o,itemId:i,itemIndex:c}=(0,r.iQ)();if(!e||!o||!i)return()=>{};const s=c||0===c?c+1:null;return()=>n.A.log({type:"cdp",eventName:"item_clicked",customAttributes:{screen_view_name:e,item_id:i,item_type:o,...l&&{screen_view_id_type:l},...a&&{screen_view_id:a},...t&&{section_name:t},...s&&{item_position:s}}})}},"Fg+i":(e,t,a)=>{a.d(t,{Zo:()=>r,eb:()=>l,lC:()=>n});const r="1c51eebdce4b220e94e2ffddef5cf2f1",n="d6172ff86cb3f10e16a46ad0cb8f3259";let l=function(e){return e.latest="latest",e.resume="resume",e}({})},sk1u:(e,t,a)=>{a.d(t,{A:()=>r});const r={thumbnail:"GryKF","thumbnail-list":"U1nbu",thumbnailList:"U1nbu","info-item":"dMJfv",infoItem:"dMJfv"}}}]);