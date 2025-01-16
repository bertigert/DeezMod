"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[4684],{"/uRm":(e,t,a)=>{a.d(t,{F:()=>l});let l=function(e){return e.ONBOARDING="ON_BOARDING",e.ONBOARDING_LEGACY="ON_BOARDING_LEGACY",e.SELECT_PROFILE="SELECT_PROFILE",e.BRIDGED_WEBVIEW="BRIDGED_WEBVIEW",e.PLAYLIST_ASSISTANT="PLAYLIST_ASSISTANT",e}({})},Ozpl:(e,t,a)=>{a.d(t,{A:()=>i});var l=a("q1tI"),n=a("juqV"),r=a("sk1u");const i=({children:e,className:t=""})=>{const a=(0,n.A)(r.A.infoItem,t);return l.createElement("li",{className:a},e)}},WY4A:(e,t,a)=>{a.d(t,{A:()=>r});var l=a("q1tI"),n=a("CdHq");const r=({children:e,className:t=""})=>l.createElement(n.s,{as:"ul",mt:"spacing.xs",color:"text.neutral.secondary.default",className:t},e)},"oq/a":(e,t,a)=>{a.d(t,{A:()=>r});var l=a("q1tI"),n=a("CdHq");const r=({children:e,className:t=""})=>l.createElement(n.s,{justifyContent:"center",direction:"column",flex:"1",className:t},e)},wRgy:(e,t,a)=>{a.d(t,{A:()=>c});var l=a("q1tI"),n=a("juqV"),r=a("TDRX"),i=a("9OcB"),s=a("sk1u");const c=({className:e="",children:t,...a})=>{const c=(0,n.A)(s.A.thumbnail,e);return l.createElement(r.a,{className:c},l.createElement(i.A,a,t))}},zJSK:(e,t,a)=>{a.d(t,{A:()=>r});var l=a("q1tI"),n=a("y7xR");const r=({children:e,className:t=""})=>l.createElement(n.D,{color:"text.neutral.primary.default",variant:"display.m",mb:"spacing.xl",noOfLines:2,wordBreak:"break-word",className:t,title:e},e)},"2NhJ":(e,t,a)=>{a.d(t,{Ay:()=>r});var l=a("q1tI"),n=a("CdHq");const r=({children:e,className:t=""})=>l.createElement(n.s,{gap:"spacing.2xl",className:t,"data-testid":"masthead"},e)},"0oF4":(e,t,a)=>{a.d(t,{A:()=>o});var l=a("q1tI"),n=a("juqV"),r=a("6R6N"),i=a("BJtZ");const s={root:"CSc6R","is-disabled":"aLtBD",isDisabled:"aLtBD","is-restricted":"EyGqz",isRestricted:"EyGqz",container:"ui85P",note:"jSAPr","is-active":"llBv5",isActive:"llBv5"};var c=a("Wp0Y");const o=({rank:e})=>{const t=(0,n.A)(s.root,(0,i.A)(s));return l.createElement("div",{className:t,"aria-label":(0,c.AP)("datagrid_text_bypopularity_web",{sprintf:[`${e} / 10`]}),"data-testid":"popularity"},l.createElement(r.A,{className:s.container},(()=>{const t=[];for(let a=0;a<5;a++){const r=a<=e/2-1,i=(0,n.A)(s.note,{[s.isActive]:r});t.push(l.createElement("span",{key:a,"data-testid":r?"note-active":"note-inactive",className:i}))}return t})()))}},iphN:(e,t,a)=>{a.d(t,{A:()=>se});var l=a("q1tI"),n=a("M3gt"),r=a("8m9I"),i=a("CdHq"),s=a("iiSH"),c=a("AfN5"),o=a("STEc");const d=a("DjLa").WR.PLAYLIST,m={TITLE:{SIZE:o.uq.Full},ARTIST:{SIZE:o.uq.PercentXs},PARENT:{BREAKPOINT:o.x1.md,SIZE:o.uq.PercentXs},DATE:{BREAKPOINT:o.x1.md,SIZE:o.uq.xl},DURATION:{SIZE:o.uq.sm},POPULARITY:{BREAKPOINT:o.x1.xl,SIZE:o.uq.sm},SELECT:{ALIGN:o.uP.Right,SIZE:o.uq.sm}};var A,u,E,p,I=a("xCFc"),y=a("kSle"),S=a("xLtY"),P=a("BP9I"),T=a("1Uwb"),b=a("XLml"),h=a("fSLK"),g=a("lXQd"),x=a("o+h5"),_=a("0JBE"),L=a("/G5K"),f=a("pQlO"),R=a("0oF4"),v=a("r4LN"),N=a("wkd/"),C=a("LGn+"),k=a("+UU7"),D=a("tgyz"),O=a("Wp0Y"),w=a("CxZw"),B=a("5G9X"),q=a("SehT"),Y=a("X/h3");const F=(0,l.memo)((0,_.S2)((({data:e,index:t,style:a})=>{const{context:n,container:r,loadingStatus:i,isOrderable:s,lastSeen:c,shouldExplicitBeHidden:o}=(0,I.$A)(),{playerStatus:d,play:y,isItemLoadedInPlayer:S}=(0,D.A)(n,r,i.isFullyFetched),{onRemoveTrack:P,onReplaceTrack:b}=(0,k.A)(r.id),h=e.toDisplay[t],_=h.item.hasExplicitLyrics&&o,F=(0,l.useCallback)(((t,a)=>{y({playIndex:a,playItems:e.toPlay,isTrackActive:t})}),[e.toPlay,y]),U=(0,l.useCallback)((t=>{y({notify:!1,playIndex:t,playItems:e.toPlay,playLyrics:!0})}),[e.toPlay,y]);return l.createElement(T.A.Row,{style:a,uuid:h.uuid,id:h.item.id,index:h.index,isActive:S(h.item)&&d.isSameContext,isOrderable:s,isReadable:h.item.right===w.A.READABLE,isRestrictedByExplicit:_,isUnseen:(0,Y.g)(c,h.item.date),type:h.item.type,isDraggable:!0},l.createElement(C.A,{size:m.TITLE.SIZE},l.createElement(C.A.Play,{ariaLabel:(0,O.AP)("generic_action_playsongXbyartistX_web",{sprintf:[h.item.title,(0,g.A)(h,"item.artists[0].name","")]}),hasExplicitCover:h.item.parent.hasExplicitCover,onPlayItems:F,pictureUrl:h.item.cover(x.r4).url}),A||(A=l.createElement(C.A.Unseen,null)),u||(u=l.createElement(C.A.Download,null)),l.createElement(C.A.PlayableLabel,{hasExplicitLyrics:h.item.hasExplicitLyrics,label:h.item.title,onPlayItems:F,tooltipText:(0,q.Y)(h.item,o)}),l.createElement(T.A.IconGroup,null,l.createElement(C.A.OpenReplaceItem,{item:h.item,onReplaceTrack:b,onRemoveTrack:P}),l.createElement(C.A.ShowLyrics,{item:h.item,lyricsId:h.item.lyricsId,onPlayLyrics:U}),E||(E=l.createElement(C.A.AddToFeedback,null)),l.createElement(C.A.OpenContextMenu,{item:h.item}))),l.createElement(T.A.CellBody,{size:m.ARTIST.SIZE},l.createElement(v.A,{links:h.item.artists.map((e=>({...e,type:B.Ay.Artist})))})),l.createElement(T.A.CellBody,{breakpoint:m.PARENT.BREAKPOINT,size:m.PARENT.SIZE},l.createElement(v.A,{links:[{...h.item.parent,type:B.Ay.Album}]})),l.createElement(T.A.CellBody,{breakpoint:m.DATE.BREAKPOINT,size:m.DATE.SIZE},l.createElement(L.A,{date:1e3*h.item.date})),l.createElement(T.A.CellBody,{size:m.DURATION.SIZE},l.createElement(f.A,{duration:h.item.duration})),l.createElement(T.A.CellBody,{breakpoint:m.POPULARITY.BREAKPOINT,size:m.POPULARITY.SIZE},l.createElement(R.A,{rank:h.item.popularity})),l.createElement(T.A.CellBody,{align:m.SELECT.ALIGN,size:m.SELECT.SIZE},p||(p=l.createElement(N.A,null))))}),(({index:e,data:t})=>({item:B.Ay.Track,itemIndex:e,itemId:t.toDisplay[e].item.id}))),h.t7);var U,H=a("7Gye"),K=a("pVdW"),Z=a("TRpf"),G=a("+dDc"),z=a("nxAS"),W=a("/uRm");const X=({playlistId:e})=>{const{IS_PERSONAL:t,IS_COLLABORATIVE:a,IS_LOVETRACKS:n}=(0,Z.d4)((t=>(0,G.lS)(t.entities,{id:e,currentUserId:t.user.id}))),r=(0,Z.wA)();return e?!t&&!a||n?null:l.createElement(i.s,{role:"button",gap:"spacing.s",alignItems:"center",padding:"spacing.s",onClick:()=>{r((0,z.J2)({name:W.F.PLAYLIST_ASSISTANT,data:{playlistId:e,hideLogo:!0}}))},_hover:{bg:"background.neutral.tertiary.hovered",cursor:"pointer"},bg:"background.neutral.primary.default"},l.createElement(i.s,{alignItems:"center",justifyContent:"center",bg:"background.neutral.tertiary.default",borderRadius:"2xs",height:`${x.r4.height}px`,width:`${x.r4.width}px`},U||(U=l.createElement(H.c,{color:"icon.neutral.secondary.default"}))),l.createElement(K.E,{variant:"body.s.default",paddingX:"spacing.s",_hover:{textDecoration:"underline"}},(0,O.AP)("playlistpage_action_addtracks_web"))):null};var Q,J,V,j,M,$,ee=a("ZH8F"),te=a("dalA"),ae=a("3AbJ"),le=a("ftFY"),ne=a("7u2F"),re=a("EBWn"),ie=a("tZCQ");const se=({context:e,hasFilter:t=!0,isFullyFetched:a,isPersonalFavoritesSongs:o=!1,items:A,lastSeen:u,nextFetchDataIndex:E,onFetch:p,onReorder:h,options:g=[],playlistId:x,shouldExplicitBeHidden:_=!1,total:L})=>{const f={id:x,type:c.Kk.PLAYLIST},R=(0,l.useRef)(null),{loadingStatus:v,fetchNext:N,fetchAll:C}=(0,ae.A)(p,x,a,E,e,s.XQ),{manageItems:k,tableItems:w}=(0,le.A)(x,A,e,{fetchAll:C,sortStorageKey:d}),{playerStatus:B,play:q}=(0,D.A)(e,f,a),Y=(0,re.A)(x,w,e,h),U=(0,ne.A)(w,e,C);(0,te.A)(ee.g.PLAY,(()=>{q({playItems:w.toPlay})}),e),(0,te.A)(ee.g.FILTER,(e=>{t||k.action.filter(e.query||"")}),e);const H=(0,I.Ay)({container:f,context:e,options:g,isPersonalFavoritesSongs:o,lastSeen:u,loadingStatus:v,manageItems:k,order:Y,playerStatus:B,select:U,shouldExplicitBeHidden:_});return l.createElement(I.ru,{value:H},!o&&t?l.createElement(i.s,{alignItems:"center",mt:"spacing.xl",mb:"spacing.2xl"},l.createElement(y.A,{playlistId:x,context:e}),Q||(Q=l.createElement(i.s,{justifyContent:"flex-end",ms:"auto"},l.createElement(S.A,null)))):t&&(J||(J=l.createElement(S.A,null))),l.createElement(T.A,{tableRef:R,rowCount:L},l.createElement(T.A.Header,null,l.createElement(T.A.CellHead,{size:m.TITLE.SIZE,sortPath:"item.title"},(0,O.AP)("datagrid_title_trackUPP_web")),l.createElement(T.A.CellHead,{size:m.ARTIST.SIZE,sortPath:"item.artist.name"},(0,O.AP)("datagrid_title_artistUPP_web")),l.createElement(T.A.CellHead,{breakpoint:m.PARENT.BREAKPOINT,size:m.PARENT.SIZE,sortPath:"item.parent.name"},(0,O.AP)("datagrid_title_albumUPP_web")),l.createElement(T.A.CellHead,{breakpoint:m.DATE.BREAKPOINT,size:m.DATE.SIZE,sortPath:"item.date"},(0,O.AP)("datagrid_title_addedtrackUPP_web")),l.createElement(T.A.CellHead,{ariaLabel:(0,O.AP)("sortingmenu_title_duration_web"),size:m.DURATION.SIZE,sortPath:"item.duration"},V||(V=l.createElement(r.m,null))),l.createElement(T.A.CellHead,{breakpoint:m.POPULARITY.BREAKPOINT,size:m.POPULARITY.SIZE,sortPath:"item.popularity"},l.createElement("span",null,(0,O.AP)("datagrid_title_popularityabbrevUPP_web"))),l.createElement(T.A.CellHead,{align:m.SELECT.ALIGN,size:m.SELECT.SIZE},j||(j=l.createElement(P.A,null)))),l.createElement(T.A.Body,null,!ie.A.isAllowed("playlist_assistant_end_of_tracklist")&&l.createElement(X,{playlistId:x}),l.createElement(n.A,{isItemLoaded:e=>e<A.length-s.Hs,itemCount:w.toDisplay.length,loadMoreItems:N,threshold:s.Hs},(({onItemsRendered:e,ref:t})=>l.createElement(b.A,{onItemsRendered:e,tableRef:R,items:w,ref:t},F))),M||(M=l.createElement(T.A.RowLoader,null)))),0===w.toDisplay.length&&($||($=l.createElement(T.A.EmptyContent,null))))}},xLtY:(e,t,a)=>{a.d(t,{A:()=>d});var l=a("q1tI"),n=a("kSUS"),r=a("lXQd"),i=a("Wp0Y"),s=a("CdHq"),c=a("Z9kq"),o=a("xCFc");const d=({placeholder:e=(0,i.AP)("search_action_searchwithintracks_web")})=>{const{manageItems:t,loadingStatus:a}=l.useContext(o.Gt);if(!t||"function"!=typeof t.action.filter)return null;const d=(0,n.A)((e=>{t.action.filter((0,r.A)(e,"target.value",""))}),500);return l.createElement(s.s,{flex:"1",ms:"spacing.m",my:0,w:{md:"375px",base:"320px"}},l.createElement(c.D,{isDisabled:a.isLoadingAll,onChange:d,size:"medium",placeholder:e}))}},"+UU7":(e,t,a)=>{a.d(t,{A:()=>s}),a("/eM8");var l=a("TRpf"),n=a("Wp0Y"),r=a("fkXJ"),i=a("eq2Y");const s=e=>{const t=(0,l.wA)();return{onReplaceTrack:(a,l)=>new Promise(((s,c)=>{t((0,i.Ct)({playlistId:e,selectedSong:l.legacy,oldSongId:a.id})).then(s).catch((e=>{!1===e&&(0,r.A)({body:(0,n.AP)("playlist_action_tracksalreadyaddedtotheplaylist_web")}),c(e)}))})),onRemoveTrack:a=>new Promise(((l,n)=>{t((0,i.Vc)({playlist_id:e,songs:[[a.id,0]],context:{}})).then(l).catch(n)}))}}},EBWn:(e,t,a)=>{a.d(t,{A:()=>c});var l=a("Oqsq"),n=a("lXQd"),r=a("nLzw"),i=a("1Pdy"),s=a("t08u");const c=(e,t,a,c)=>{const{triggerTracking:o}=(0,s.A)(a.TYPE),d={},m=t.toDisplay.map((e=>((0,l.A)(d,e.uuid,e.item.id),e.uuid)));return(t,a,l)=>{if("function"!=typeof c)return;const s=m.filter((e=>!t.includes(e)));let A=0;if(t.includes(a)){for(A=m.indexOf(a);t.includes(m[A])&&A>0;)A--;A>0&&(A+=1)}else A=s.indexOf(a),A+=l===i.Nz.TOP?0:1;var u;s.splice(A,0,...t),(0,r.A)(s,m)||(c({id:e,order:(u=s,u.map((e=>(0,n.A)(d,e))))}),o({action:"dragdrop",eventaction:t.length>1?"dragdrop-multi":"dragdrop-single"}))}}},kSle:(e,t,a)=>{a.d(t,{A:()=>w});var l,n=a("q1tI"),r=a("TRpf"),i=a("Jfek"),s=a("+dDc"),c=a("xobL"),o=a("5G9X"),d=a("1h7S"),m=a("9MQu"),A=a("rOn+"),u=a("KJ1h"),E=a("TqF5"),p=a("Wp0Y"),I=a("HmE0"),y=a("ZUSG"),S=a("N67Q"),P=a("aoCz");const T=()=>{const{id:e,isEditable:t}=n.useContext(d.PK),a=(0,r.wA)();return t?n.createElement(S.A,null,n.createElement(I.K0,{"aria-haspopup":!0,"aria-label":(0,p.AP)("generic_action_edit_web"),icon:l||(l=n.createElement(y.r,null)),onClick:()=>{a((0,E.qf)({name:"PLAYLIST_ASSISTANT",props:{type:P.F.EDITION,playlistId:e}}))},variant:"ghost"})):null};var b=a("Ye48"),h=a("Eiyd"),g=a("C53p"),x=a("D/zM"),_=a("+pY+");const L=class{constructor(e){this._counter=void 0,this._counter=new x.A({id:_.Ps.LAUNCH_MUSICQUIZ_FROM_PLAYLIST_PAGE,tags:e})}log(){this._counter.increment(),this._counter.send()}};var f,R=a("A2sV"),v=a("tZCQ"),N=a("BVS8"),C=a("3H/6"),k=a("GkjM");const D=()=>{var e;const{id:t,context:a}=(0,n.useContext)(d.PK),{data:l}=(0,R.Hi1)({variables:{playlistId:t}});return null!=l&&null!==(e=l.playlist)&&void 0!==e&&e.isBlindTestable?!1===v.A.isAllowed("contextual_menu_blindtest")?null:n.createElement(S.A,null,n.createElement(C.m,{label:(0,p.AP)("contextualmenu_title_playXfeaturename_web"),"aria-label":(0,p.AP)("contextualmenu_title_playXfeaturename_web")},n.createElement(I.K0,{as:k.A,to:`/game/blindtest/playlist/${t}?context=${a.TYPE}`,"aria-haspopup":!0,"aria-label":(0,p.AP)("contextualmenu_title_playXfeaturename_web"),icon:f||(f=n.createElement(N.Q,null)),onClick:()=>{new L({playlist_id:t}).log()},variant:"ghost"}))):null};var O;const w=({playlistId:e,context:t,isSponsored:a=!1})=>{const l=(0,r.d4)((t=>(0,s.lS)(t.entities,{id:e,currentUserId:t.user.id}))),E=(0,r.d4)((e=>(0,c.Jt)(e.user))),p=(0,d.Ay)({containerData:l,context:t,id:e,isDownloadable:E,isEditable:l.IS_PERSONAL,isLoveable:!l.IS_PERSONAL,isShareable:!l.IS_PRIVATE,isSponsored:a,type:o.Ay.Playlist,shareType:i.Gb.playlist});return n.createElement(d.PK.Provider,{value:p},O||(O=n.createElement(m.e,{size:"medium",gap:"spacing.xs",spacing:0,"data-testid":"toolbar"},n.createElement(h.A,null),n.createElement(n.Suspense,{fallback:null},n.createElement(A.A,null),n.createElement(T,null),n.createElement(g.A,null),n.createElement(D,null),n.createElement(u.A,null),n.createElement(b.A,null)))))}},"rOn+":(e,t,a)=>{a.d(t,{A:()=>c});var l=a("q1tI"),n=a("0oT0"),r=a("N67Q"),i=a("1h7S"),s=a("cFUB");const c=()=>{const{context:e,id:t,isLoveable:a,isSponsored:c,type:o}=l.useContext(i.PK);return a?l.createElement(r.A,null,l.createElement(n.A,{action:s.Hj.FAVORITE,color:!0===c?s.cW.LIGHT:s.cW.DEFAULT,context:e,id:t,type:o})):null}},KJ1h:(e,t,a)=>{a.d(t,{A:()=>c});var l=a("q1tI"),n=a("0oT0"),r=a("N67Q"),i=a("1h7S"),s=a("cFUB");const c=()=>{const{context:e,id:t,isDownloadable:a,type:c}=l.useContext(i.PK);return a?l.createElement(r.A,null,l.createElement(n.A,{action:s.Hj.DOWNLOAD,context:e,id:t,type:c})):null}},Ye48:(e,t,a)=>{a.d(t,{A:()=>m});var l,n=a("q1tI"),r=a("HmE0"),i=a("5Loq"),s=a("Wp0Y"),c=a("2EvD"),o=a("N67Q"),d=a("1h7S");const m=({placement:e="right"})=>{const{id:t,containerData:a,context:m,isSponsored:A,type:u}=n.useContext(d.PK),E={anchor:n.createElement(r.K0,{"aria-haspopup":!0,"aria-label":(0,s.AP)("generic_action_viewmenu_web"),colorScheme:!0===A?"white":"neutral",icon:l||(l=n.createElement(i.j,null)),variant:"ghost"}),context:m,data:a,id:t,placement:e,type:u};return n.createElement(o.A,null,n.createElement(c.A,E))}},Eiyd:(e,t,a)=>{a.d(t,{A:()=>d});var l=a("q1tI"),n=a("H/eQ"),r=a("N67Q"),i=a("0oT0"),s=a("1h7S"),c=a("cFUB"),o=a("ZH8F");const d=()=>{const{containerData:e,context:t,id:a,type:d}=l.useContext(s.PK),m=(0,l.useCallback)((()=>{document.dispatchEvent((0,o.e)(o.g.PLAY,{context:t}))}),[t]);return(0,l.useEffect)((()=>(n.A.subscribe("EVENT.TRACKLIST.togglePlayAll",m),()=>{n.A.unsubscribe("EVENT.TRACKLIST.togglePlayAll",m)})),[m]),e.NB_SONG||e.NB_EPISODES?l.createElement(r.A,{testId:"play"},l.createElement(i.A,{id:a,items:e.items||void 0,type:d,onClick:m,context:t,action:c.Hj.PLAY_SMALL,color:c.cW.PRIMARY,wordingType:c.Hn.STANDARD})):null}},C53p:(e,t,a)=>{a.d(t,{A:()=>u});var l,n=a("q1tI"),r=a("TRpf"),i=a("HmE0"),s=a("EPmj"),c=a("Wp0Y"),o=a("TqF5"),d=a("N67Q"),m=a("Jfek"),A=a("1h7S");const u=()=>{const{id:e,isShareable:t,containerData:a,context:u,shareType:E,isSponsored:p}=n.useContext(A.PK),I=(0,r.wA)();return t&&E?n.createElement(d.A,null,n.createElement(i.K0,{"aria-haspopup":!0,"aria-label":(0,c.AP)("Partager"),colorScheme:!0===p?"white":"neutral",icon:l||(l=n.createElement(s.l,null)),onClick:()=>{I((0,o.qf)({name:m.DN,props:{componentType:m.Wg.directShareMasthead,context:u,data:a,id:e,type:E}}))},variant:"ghost"})):null}},"1h7S":(e,t,a)=>{a.d(t,{Ay:()=>o,PK:()=>s});var l=a("chf7"),n=a("Jfek");const[r,i,s]=(0,l.q6)({name:"ToolbarContext"}),c={context:{ID:"",TYPE:""},id:"",isEditable:!1,isShareable:!1,isLoveable:!1,isDownloadable:!1,isSponsored:!1,shareType:n.Gb.song,type:""},o=e=>({...c,...e})},N67Q:(e,t,a)=>{a.d(t,{A:()=>n});var l=a("q1tI");const n=({children:e,testId:t})=>t?l.createElement("div",{"data-testid":t},e):l.createElement("div",null,e)},"X/h3":(e,t,a)=>{a.d(t,{g:()=>l});const l=(e,t)=>!(!e||!t)&&t>e},"Fg+i":(e,t,a)=>{a.d(t,{Zo:()=>l,eb:()=>r,lC:()=>n});const l="1c51eebdce4b220e94e2ffddef5cf2f1",n="d6172ff86cb3f10e16a46ad0cb8f3259";let r=function(e){return e.latest="latest",e.resume="resume",e}({})},sk1u:(e,t,a)=>{a.d(t,{A:()=>l});const l={thumbnail:"GryKF","thumbnail-list":"U1nbu",thumbnailList:"U1nbu","info-item":"dMJfv",infoItem:"dMJfv"}}}]);