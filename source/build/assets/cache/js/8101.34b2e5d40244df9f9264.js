"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[8101],{MTsA:(e,t,n)=>{n.d(t,{A:()=>g});var s,i,a=n("q1tI"),r=n("juqV"),o=n("Wp0Y"),l=n("H/eQ"),c=n("GPus"),d=n("yCtO"),u=n("pVdW");class m extends a.Component{constructor(e){super(e),this._onClickOutsideDropDown=e=>{this._navbarLinks.contains(e.target)||(this.setState({isOpenDropDown:!1}),document.removeEventListener("click",this._onClickOutsideDropDown))},this._onResize=this._onResize.bind(this),this._onToggleDropDown=this._onToggleDropDown.bind(this),this.state={items:e.items,lastVisibleElementIndex:1/0,isOpenDropDown:!1}}componentDidMount(){this._getTabWidth(),l.A.subscribe(l.A.layout.resize,this._onResize),l.A.subscribe(l.A.layout.adsBackground,this._onResize),l.A.trigger(l.A.navigation.tab_displayed,{type:this.props.active})}UNSAFE_componentWillReceiveProps(e){this.setState({lastVisibleElementIndex:1/0,items:e.items},this._getTabWidth)}componentWillUnmount(){l.A.unsubscribe(l.A.layout.resize,this._onResize),l.A.unsubscribe(l.A.layout.adsBackground,this._onResize)}render(){const e=(0,r.A)({navbar:!0,"navbar-center":"center"===this.props.align});return a.createElement("nav",{className:e},a.createElement("div",{style:this.props.style,className:"container"},a.createElement("ul",{className:"navbar-nav",ref:e=>this._navbarLinks=e,role:"tablist"},this._renderList())))}_renderList(){const e=[],{items:t,lastVisibleElementIndex:n}=this.state;for(let s=0,i=t.length;s<i;s++)if(!t[s].disabled){if(!(s<n)){e.push(this._renderViewMore(s));break}e.push(this._renderItem(s))}return e}_renderItem(e,t=!1){const{active:n,textSize:s}=this.props,i=this.state.items[e],o=(0,r.A)({"navbar-item":!t,"dropdown-item":t,active:n===i.id}),l=i.isButton&&n!==i.id,c=(0,r.A)({"navbar-link":!t,"navbar-button":l}),d=n===i.id?void 0:this._onItemClick.bind(this,i);return a.createElement("li",{key:i.id,className:o},a.createElement(u.E,{as:"a",color:l?"text.accent.onDark.default":"text.neutral.secondary.default",fontWeight:n===i.id?"semibold":"normal",_hover:{color:l?"text.accent.onDark.default":"text.neutral.secondary.hovered"},className:c,role:"tab",tabIndex:"0","aria-selected":n===i.id,onClick:d,onKeyDown:d,"data-testid":`${i.id}-tab`,variant:{large:"body.l.default",medium:"body.m.default"}[s]},i.label))}_renderViewMore(e){const{isOpenDropDown:t,items:n,lastVisibleElementIndex:l}=this.state,m=(0,r.A)("navbar-item","navbar-dropdown",{"dropdown-active":t}),g=[];for(let t=e,s=n.length;t<s;t++)n[t].disabled||g.push(this._renderItem(t,!0));return a.createElement("li",{className:m,key:"viewmore_"+l},a.createElement(u.E,{as:"button",color:"text.neutral.secondary.default",_hover:{color:"text.neutral.secondary.hovered"},className:"navbar-link",type:"button","data-testid":"more_button",onClick:this._onToggleDropDown},(0,o.AP)("Plus"),t?s||(s=a.createElement(c.o,{marginStart:"5px",marginTop:"3px"})):i||(i=a.createElement(d.e,{marginStart:"5px",marginTop:"3px"}))),a.createElement("ul",{className:"dropdown-menu is-right"},g))}_onToggleDropDown(e){if(e.stopPropagation(),void 0!==e.keyCode&&13!==e.keyCode)return;const t=!this.state.isOpenDropDown;this.setState({isOpenDropDown:t}),t&&document.addEventListener("click",this._onClickOutsideDropDown,{once:!0,capture:!0})}_onItemClick(e,t){void 0!==t.keyCode&&13!==t.keyCode||(e.action&&e.action(e),this.setState({isOpenDropDown:!1}),l.A.trigger(l.A.navigation.tab_displayed,{type:e.id}))}_onResize(){let e=1/0,t=0,n=0;const s=this._navbarLinks.offsetWidth,i=this._linksWidth.entries();for(const[a,r]of i){if(t+=r,t>s){e=n;break}n=a}this.state.lastVisibleElementIndex!==e&&this.setState({lastVisibleElementIndex:e})}_getTabWidth(){this._linksWidth=[],Array.from(this._navbarLinks.childNodes).forEach(((e,t)=>{this._linksWidth[t]=e.getBoundingClientRect().width})),this._onResize()}}m.defaultProps={align:"left",textSize:"large"};const g=m},RTUF:(e,t,n)=>{n.d(t,{i:()=>r,m:()=>a});var s=n("q1tI");const i=s.createContext({isDragging:!1}),a=({children:e})=>{const[t,n]=s.useState(!1);s.useEffect((()=>{const e=e=>{e.preventDefault()},t=()=>{document.removeEventListener("dragend",t),document.removeEventListener("drop",t),document.removeEventListener("dragenter",e),document.removeEventListener("dragover",e),n(!1),document.body.classList.remove("is-dragging")};return document.addEventListener("dragstart",(()=>{document.addEventListener("dragenter",e),document.addEventListener("dragover",e),document.addEventListener("dragend",t),document.addEventListener("drop",t),n(!0),document.body.classList.add("is-dragging")})),()=>{document.removeEventListener("dragend",t),document.removeEventListener("drop",t),document.removeEventListener("dragenter",e),document.removeEventListener("dragover",e)}}),[]);const a=s.useMemo((()=>({isDragging:t})),[t]);return s.createElement(i.Provider,{value:a},e)},r=()=>{const e=s.useContext(i);if(!e)throw new Error("useDrag must be used wrapped inside a DragProvider");return e}},"/G5K":(e,t,n)=>{n.d(t,{A:()=>u});var s=n("q1tI"),i=n("juqV"),a=n("TRpf"),r=n("xobL"),o=n("x4+n"),l=n("BJtZ");const c={root:"MaxOe",label:"xogtX","is-active":"oSYze",isActive:"oSYze","is-disabled":"nRbxm",isDisabled:"nRbxm","is-restricted":"K50Uu",isRestricted:"K50Uu"};var d=n("iiSH");const u=({date:e,dataTestId:t})=>{const[n]=(0,a.d4)((e=>[(0,r.mI)({SERVER_TIMESTAMP:(0,r.mS)(e.user),clientTimestampDelta:(0,r.gE)(e.user)})])),u=(0,i.A)(c.label,(0,l.A)(c));return s.createElement("div",{className:c.root},s.createElement("span",{className:u,"data-testid":t},e>0?(0,o.E)(e,n):d.fs))}},r4LN:(e,t,n)=>{n.d(t,{A:()=>p});var s=n("q1tI"),i=n("juqV"),a=n("iooo"),r=n("GkjM"),o=n("BJtZ"),l=n("t08u"),c=n("/5X2"),d=n("xCFc"),u=n("iiSH"),m=n("1Pdy");const g={root:"hjoo7",multilines:"yjFrI",link:"_ZA0C",text:"A9te1","is-active":"_MAPk",isActive:"_MAPk"};var h=n("kb9X");const p=({links:e,onClick:t})=>{const{id:n,index:p,type:v}=s.useContext(c.gy),{context:b,rowHeight:E}=s.useContext(d.Gt),{triggerTracking:_}=(0,l.A)(b.TYPE),k=(0,h.A)(),A=(0,o.A)(g),y=(0,i.A)(g.root,A,{[g.multilines]:E>m.F4.md}),D=(0,i.A)(g.link,A),f=(0,i.A)(g.text,A),x=e=>""!==e?e:u.fs;return s.createElement("div",{className:y},e.map(((i,o)=>s.createElement(s.Fragment,{key:i.path},null===i.path?s.createElement("span",{className:f,"data-testid":i.type},x(i.name)):s.createElement(r.A,{className:D,"data-testid":i.type,to:(0,a.jd)(i.path),onClick:()=>{k(),null==t||t(i),_({action:i.type,item:{id:n,rank:p,type:v}})}},x(i.name)),o<e.length-1?", ":null))),0===e.length&&"-")}},"wkd/":(e,t,n)=>{n.d(t,{A:()=>l});var s=n("q1tI"),i=n("PF77"),a=n("6R6N"),r=n("/5X2"),o=n("xCFc");const l=()=>{const{id:e,index:t,type:n,uuid:l}=(0,r.$_)(),{select:c}=(0,o.$A)();return s.createElement(a.A,null,s.createElement(i.Sc,{isChecked:c&&c.isSelected(l),onChange:()=>{c&&c.toggleSelect(e,n,l,t)},"data-testid":"select_button"}))}},BP9I:(e,t,n)=>{n.d(t,{A:()=>v});var s=n("q1tI"),i=n("HmE0"),a=n("PF77"),r=n("5Loq"),o=n("6R6N"),l=n("dSZ9"),c=n("xCFc"),d=n("t08u"),u=n("5G9X"),m=n("1Pdy");var p;const v=()=>{const{container:e,context:t,options:n,isPersonalFavoritesSongs:v,select:b}=(0,c.$A)(),{triggerTracking:E}=(0,d.A)(t.TYPE),_=b&&b.getSelectedItemsCount()||0,k=b&&b.getSelectedTrackIds()||[],A=1===_?b&&b.getSelectedItems()[0].item.legacy:{},y=(0,s.useCallback)((()=>{b&&b.toggleSelectAll()}),[b]),D=(0,s.useCallback)((()=>{E({action:"menu",eventaction:`menu-multi-${_}`})}),[_,E]),f={anchor:s.createElement(i.K0,{"aria-label":"open-menu","aria-haspopup":!0,icon:p||(p=s.createElement(r.j,null)),onClick:D,size:"sm",variant:"ghost"}),context:t,data:{...A,[u.vn[e.type]]:e.id,IS_DELETABLE:n.includes(m.Rj.Delete)&&!v},hasHeader:!0,id:k};return s.createElement("div",{className:"kjb5O"},_>0&&s.createElement("div",{className:"l5ll1"},s.createElement(l.A,f)),s.createElement(o.A,null,s.createElement(a.Sc,{isChecked:_>0,onChange:y})))}},ZH8F:(e,t,n)=>{n.d(t,{e:()=>i,g:()=>s});let s=function(e){return e.FILTER="table-filter",e.PLAY="table-play",e}({});const i=(e,t)=>new CustomEvent(e,{detail:t})},dalA:(e,t,n)=>{n.d(t,{A:()=>i});var s=n("q1tI");const i=(e,t,n,i=document)=>{const a=({detail:e})=>{e.context.ID===n.ID&&e.context.TYPE===n.TYPE&&t(e)};return s.useEffect((()=>i&&i.addEventListener?(i.addEventListener(e,a),()=>{i.removeEventListener(e,a)}):()=>{})),{eventName:e,handleEvent:a}}},"7u2F":(e,t,n)=>{n.d(t,{A:()=>o}),n("/eM8");var s=n("q1tI"),i=n("xhuf"),a=n("LWGD"),r=n("t08u");const o=(e,t,n)=>{const{triggerTracking:o}=(0,r.A)(t.TYPE),[l,c]=(0,s.useState)([]),d=(0,s.useRef)(!1),u=(0,s.useMemo)((()=>{const t={};return e.toDisplay.forEach((e=>t[e.uuid]=e)),t}),[e.toDisplay]),m=Object.keys(u),g=(0,s.useMemo)((()=>{const e=(0,i.A)(l,m);return e.length>0?(0,a.A)(l,...e):l}),[m,l]);d.current&&0===l.length&&(d.current=!1),d.current&&m.length>l.length&&c(m),g.length!==l.length&&c(g);const h=(0,s.useCallback)((()=>l.map((e=>u[e]))),[u,l]),p=(0,s.useCallback)((()=>l.length),[l.length]),v=(0,s.useCallback)((()=>{const e={},t=h(),n=[];return t.forEach((t=>{const s=t.item.id;void 0===e[s]&&(n.push(s),e[s]=!0)})),n}),[h]),b=(0,s.useCallback)((e=>l.includes(e)),[l]),E=(0,s.useCallback)(((e,t,n,s=0)=>{b(n)?(d.current=!1,c(l.filter((e=>e!==n)))):(m.length===l.length+1&&(d.current=!0),c([...l,n])),o({action:"select",item:{id:e,rank:s,type:t}})}),[m.length,b,l,o]),_=(0,s.useCallback)((async()=>{l.length>0?(d.current=!1,c([])):("function"==typeof n&&await n(),d.current=!0,c(m)),o({action:"select",eventaction:"select-all"})}),[m,n,l.length,o]);return{getSelectedItems:h,getSelectedItemsCount:p,getSelectedTrackIds:v,isSelected:b,toggleSelect:E,toggleSelectAll:_}}},"x4+n":(e,t,n)=>{n.d(t,{E:()=>r});var s=n("Wp0Y"),i=n("3nMj"),a=n("iiSH");const r=(e,t)=>{if(Number.isNaN(e))return a.fs;const n=new Date(1e3*t),r=n.getDate(),o=new Date(1e3*t-864e5).getDate(),l=n.getMonth(),c=n.getFullYear(),d=new Date(e),u=d.getDate(),m=d.getMonth(),g=d.getFullYear();return r===u&&l===m&&c===g?(0,s.AP)("masthead_title_today_web"):o===u&&l===m&&c===g?(0,s.AP)("generic_title_yesterday_web"):(0,i.A)(e)}},kb9X:(e,t,n)=>{n.d(t,{A:()=>a});var s=n("0JBE"),i=n("LOQS");const a=()=>{const{page:e,section:t,entityId:n,entity:a,item:r,itemId:o,itemIndex:l}=(0,s.iQ)();if(!e||!r||!o)return()=>{};const c=l||0===l?l+1:null;return()=>i.A.log({type:"cdp",eventName:"item_clicked",customAttributes:{screen_view_name:e,item_id:o,item_type:r,...a&&{screen_view_id_type:a},...n&&{screen_view_id:n},...t&&{section_name:t},...c&&{item_position:c}}})}}}]);