"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[5348],{aFHr:(e,t,n)=>{n.d(t,{A:()=>P});var i=n("+9dH"),a=n("q1tI"),s=n("Lj5U"),r=n("T9aU"),o=n("CyAC"),l=n("xobL"),c=n("Fzox"),d=n("juqV"),h=n("iwso"),m=n("Wp0Y"),u=n("u7vQ"),p=n("AfN5"),_=n("5G9X"),g=n("o+h5"),A=n("1lpQ"),C=n("GkjM"),y=n("QOhT");var I,k=n("nN8/"),N=n("HQpa"),D=n("gVf4");const T=({context:e,data:t,index:n,pageContext:i})=>{const s=new h.Ay(t),{isPaused:r,isPlaying:o}=(0,D.A)(_.Ay.Track,s.id),{dynamicContentlogAction:l}=(0,k.D2)(),c=()=>{t.module_id&&l({action:k.D$.ITEM_CLICKED,payload:{module_id:t.module_id,item:{id:String(e.ID),type:N.S.SONG,position:n+1}}})},T=()=>{o||r?u.Ay.control.togglePause():u.Ay.play({id:s.id,type:p.Kk.TRACK_MIX,context:{...e,CONTEXT_ID:s.id},forceAsFirstTrack:!0})},M=(0,d.A)("WcgM4","nano-card-item");return a.createElement("li",{className:M,key:`song-${s.id}-${n}`},a.createElement("div",{className:"nano-card-picture"},a.createElement(y.A,{data:s.legacy,pageContext:i,alt:s.title,context:e,type:_.Ay.Track,height:g.fn.height,width:g.fn.height,onClick:()=>{c(),T()},coverLink:!1})),a.createElement("div",{role:"button",className:"nano-card-infos","aria-label":o?`${(0,m.AP)("Pause")} ${s.title}`:`${(0,m.AP)("Play")} ${s.title}`,onClick:T},(()=>{const e=(0,d.A)("Gv5g9","heading-4");return a.createElement("div",{className:e},a.createElement("div",{className:"A5T9K",onClick:c},a.createElement("span",{className:"kiSKz","data-instance":"song_title","data-index":n},s.title),s.hasExplicitLyrics&&a.createElement("span",{className:"ZIP89"},I||(I=a.createElement(A.A,{size:"small"})))))})(),(()=>{if(s.artist&&s.artist.path&&s.artist.name)return a.createElement("div",{className:"heading-4-sub ellipsis",onClick:c},a.createElement("span",{key:"artistLabel"},(0,m.AP)("par")+" "),a.createElement(C.A,{to:s.artist.path,"data-instance":"song_artist","data-index":n,onClick:e=>{e.stopPropagation()}},s.artist.name))})()))},M=({data:e,context:t,pageContext:n=""})=>a.createElement("ul",{className:"nano-card-list"},e.map(((e,s)=>{const r={context:e.context||t,data:e,index:s,type:_.Ay.Track};return a.createElement(T,(0,i.A)({key:r.type+r.data.SNG_ID},r,{pageContext:n}))})));var R=n("sAMA"),w=n("fsGD");const S=e=>{const t=(0,c.G)((e=>(0,l.Uw)(e.user)===R.g)),n=(0,r.A)(w.l4),i=e.data.filter(((e,i)=>{const a=e.__TYPE__||e.type||null;if(!n.includes(a))throw new Error(`[Dynamic Pages]: Item of type "${a}" is not supported by the "${w.l4}" layout.`);return!(t&&(0,o.AP)(e)||(e.index=i,0))}));return a.createElement("ul",{className:"thumbnail-grid thumbnail-grid-responsive thumbnail-grid-one-line","data-testid":"horizontal-list"},(0,s.A)(i,3).map(((t,n)=>a.createElement("li",{className:"thumbnail-col thumbnail-col-list",key:n},a.createElement(M,{data:t,pageContext:e.pageContext})))))};var L=n("X/JG"),O=n("lpJY");const P=e=>e.layoutType===w.l4?a.createElement(L.A,e,a.createElement(S,{data:e.data,pageContext:e.pageContext,section_id:e.section_id||""})):a.createElement(L.A,e,a.createElement(O.A,(0,i.A)({},e,{nbLines:1})))},"X/JG":(e,t,n)=>{n.d(t,{A:()=>k});var i,a,s,r,o=n("+9dH"),l=n("17x9"),c=n.n(l),d=n("q1tI"),h=n("TRpf"),m=n("kSUS"),u=n("juqV"),p=n("Wp0Y"),_=n("H/eQ"),g=n("LOQS"),A=n("HmE0"),C=n("hIIJ"),y=n("sCpb"),E=n("fsGD"),f=n("vF4p"),v=n("6vqc"),b=n("RSbz"),x=n("nN8/");class I extends d.Component{constructor(e){super(e),this._initAds=this._initAds.bind(this),this._debouncedCheckItems=this._debouncedCheckItems.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onMouseOut=this._onMouseOut.bind(this),this.state={itemIndex:0,itemWidth:0,containerWidth:0,displayedItemCount:0,hasControlLeft:!1,hasControlRight:!0,mouseIn:!1},this._nodeRef=d.createRef()}getChildContext(){return{layout:E.Pl}}componentDidMount(){this.props.data.length>0&&(this._checkItems(),_.A.subscribe(_.A.layout.adsBackground,this._initAds),_.A.subscribe(_.A.layout.resize,this._debouncedCheckItems),this._setAutoAnimate())}componentDidUpdate(e,t){const{mouseIn:n}=this.state,{data:i,related:a}=this.props;t.mouseIn!==n&&(n?clearTimeout(this._intervalAutoAnimate):this._setAutoAnimate()),(e.data.length!==i.length||e.related!==a&&i.length>0)&&this._checkItems()}componentWillUnmount(){clearTimeout(this._timeoutRef),this._debounceRef&&this._debounceRef.cancel(),this.props.autoAnimate&&clearTimeout(this._intervalAutoAnimate),_.A.unsubscribe(_.A.layout.adsBackground,this._initAds),_.A.unsubscribe(_.A.layout.resize,this._debouncedCheckItems)}render(){const{itemIndex:e,itemWidth:t}=this.state,{children:n,related:i,hasMoreItems:a}=this.props,s=e*("rtl"===this.props.langDirection?1:-1)*t,r={transform:`translateX(${s}px)`,msTransform:`translateX(${s}px)`,WebkitTransform:`translateX(${s}px)`},o={};""!==i.target&&""!==i.label&&a&&(o.label=i.label,o.target=i.target);const l=d.Children.map(n,(e=>d.isValidElement(e)?d.cloneElement(e,{viewMore:o}):e));return d.createElement("div",{className:"carousel",ref:this._nodeRef},d.createElement("div",{className:"container"},this._renderHeadings()),d.createElement("div",{className:"container"},d.createElement("div",{className:"carousel-wrapper"},d.createElement("div",{className:"carousel-inner",style:r,onMouseEnter:this._onMouseOver,onMouseLeave:this._onMouseOut},l))))}_renderHeadings(){const{alignment:e,enrichedTitle:t}=this.props,n=(0,u.A)("channel-headings",{"is-centered":"center"===e});return d.createElement("div",{className:n},t?this._renderEnrichedTitle():this._renderTitle(),this._renderControls())}_renderTitle(){const{title:e,related:t,subtitle:n,target:i}=this.props;if(""===e)return null;const a=t.target||i;return d.createElement(x.Mk.Consumer,null,(({dynamicContentlogAction:t})=>d.createElement(C.A,{href:void 0!==a&&""!==a?a:void 0,title:e,subtitle:n,onClick:()=>this._onClickViewAll(t)})))}_renderEnrichedTitle(){const{related:e,target:t,enrichedTitle:n}=this.props,i=e.target||t;return d.createElement(y.A,{href:void 0!==i&&""!==i?i:void 0,enrichedTitle:n})}_onClickViewAll(e){const{module_id:t,pageContext:n,tab:i}=this.props;e({action:x.D$.VIEW_ALL_CLICKED,payload:{module_id:t}}),null!=n&&n.includes("profile_")&&g.A.log({type:"cdp",eventName:"view_all_clicked",customAttributes:{section_name:f.Xw[i],screen_view_name:"profile_recently_played"===n?f.Xw.home:f.Xw[n.replace("profile_","")]}})}_shouldDisplayControls(){const{hasControlLeft:e,hasControlRight:t}=this.state;return e||t}_renderControlRight(){return this._shouldDisplayControls()?d.createElement("div",{className:"carousel-control carousel-next"},d.createElement(A.K0,{"aria-label":(0,p.AP)("Suivant"),isDisabled:!this.state.hasControlRight,icon:"ltr"===this.props.langDirection?i||(i=d.createElement(v.v,null)):a||(a=d.createElement(b.Y,null)),onClick:this._onSlide.bind(this,"right",!0),variant:"ghost"})):null}_renderControlLeft(){return this._shouldDisplayControls()?d.createElement("div",{className:"carousel-control carousel-prev"},d.createElement(A.K0,{"aria-label":(0,p.AP)("Précédent"),isDisabled:!this.state.hasControlLeft,icon:"ltr"===this.props.langDirection?s||(s=d.createElement(b.Y,null)):r||(r=d.createElement(v.v,null)),onClick:this._onSlide.bind(this,"left",!0),variant:"ghost"})):null}_renderControls(){if(!this.props.data.length)return null;let e={};return this.props.autoAnimate&&(e={onMouseEnter:this._onMouseOver,onMouseLeave:this._onMouseOut}),d.createElement("div",(0,o.A)({className:"carousel-controls"},e),this._renderControlLeft(),this._renderControlRight())}_onAutoAnimation(){const{hasControlLeft:e,hasControlRight:t,mouseIn:n}=this.state;!n&&t?this._onSlide("right",t):!n&&e&&this._processNewState(0)}_onMouseOver(){this.setState({mouseIn:!0})}_onMouseOut(){this.setState({mouseIn:!1})}_onSlide(e,t){if(t){const{itemIndex:t,displayedItemCount:n}=this.state,i=t+("left"===e?-1:1)*n;i!==t&&this._processNewState(i)}}_measureContainerWidth(){return this._nodeRef.current?this._nodeRef.current.querySelector(".carousel-inner").getBoundingClientRect().width:0}_checkItems(){if(!this._nodeRef.current)return;const e=this._nodeRef.current.getElementsByClassName("thumbnail-col");if(!e||0===e.length)return;const t=this._measureContainerWidth(),n="margin"+("rtl"===this.props.langDirection?"Right":"Left"),i=e[0].offsetWidth+parseInt(window.getComputedStyle(e[0])[n],10),a=Math.min(e.length,Math.ceil(t/i));this.setState({containerWidth:t,displayedItemCount:a,itemWidth:i},(()=>{this._processNewState(this.state.itemIndex)}))}_debouncedCheckItems(){this._debounceRef=(0,m.A)((()=>{this._checkItems()}),300),this._debounceRef()}_processNewState(e){if(!this._nodeRef.current)return;const t=this._nodeRef.current.getElementsByClassName("thumbnail-col"),{displayedItemCount:n}=this.state;e=Math.min(t.length-n,Math.max(0,e)),this.setState({itemIndex:e,hasControlLeft:e>0,hasControlRight:e+n<t.length})}_initAds(){this._checkItems()}_setAutoAnimate(){this.props.autoAnimate&&(this._intervalAutoAnimate=setInterval((()=>{this._onAutoAnimation()}),6e3))}}I.childContextTypes={layout:c().string},I.defaultProps={title:"",subtitle:"",target:"",section_id:"",hasMoreItems:!1,related:{target:"",label:""},options:[],alignment:"center",autoAnimate:!1,context:""};const k=(0,h.Ng)((({user:e})=>({langDirection:e.DIRECTION})))(I)},sCpb:(e,t,n)=>{n.d(t,{A:()=>m});var i=n("q1tI"),a=n("CdHq"),s=n("mmFw"),r=n("pVdW"),o=n("y7xR"),l=n("9OcB"),c=n("GkjM"),d=n("hz5U"),h=n("5G9X");const m=({enrichedTitle:e,href:t})=>{var n;let m;if(null!==(n=e.pictures[0])&&void 0!==n&&n.md5){const t=d.A.getCoverType(e.type);m=d.A.getImageSrc(t,e.pictures[0].md5,48,48,"none")}return i.createElement(a.s,{direction:"row",align:"center"},i.createElement(c.A,{to:t,me:"spacing.s"},e.type===h.Ay.Artist||e.type===h.Ay.User?i.createElement(s.eu,{src:m,name:e.title,size:"size.xl",variant:"neutral","data-testid":"dynamic_page_section_image"}):i.createElement(l.A,{src:m,type:e.type,alt:e.title,size:"size.xl","data-testid":"dynamic_page_section_image"})),i.createElement(a.s,{direction:"column",w:"100%"},i.createElement(r.E,{variant:"body.s.default",mb:"spacing.xs",color:"text.neutral.secondary.default","data-testid":"dynamic_page_section_lead_in",noOfLines:1,maxW:"90%"},e.lead_in),i.createElement(o.D,{variant:"heading.m",noOfLines:1,maxW:"90%","data-testid":"dynamic_page_section_title"},i.createElement(c.A,{to:t,_hover:{textDecoration:"underline"},_active:{textDecoration:"underline"},_focus:{textDecoration:"underline"}},e.title))))}},lpJY:(e,t,n)=>{n.d(t,{A:()=>i});const i=n("lG1H").A}}]);