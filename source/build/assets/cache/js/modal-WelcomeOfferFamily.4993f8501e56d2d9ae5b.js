"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[7633],{"7HKI":(e,n,a)=>{a.d(n,{_:()=>l});var t=a("nKUr");const l=(0,a("AGAM").w)({displayName:"CheckCircleFilledIcon",viewBox:"0 0 24 24",pathSmall:[(0,t.jsx)("path",{fillRule:"evenodd",d:"M4 12c0-5.138 2.862-8 8-8 5.137 0 8 2.862 8 8 0 5.137-2.863 8-8 8-5.138 0-8-2.863-8-8Zm7.109.996 2.905-4.303 1.104.746-3.732 5.53-3.248-2.723.856-1.023 2.115 1.773Z",clipRule:"evenodd"})],pathMedium:[(0,t.jsx)("path",{fillRule:"evenodd",d:"M1 12C1 4.936 4.936 1 12 1s11 3.936 11 11-3.936 11-11 11S1 19.064 1 12Zm10.456 1.45L15.813 7l1.658 1.12-5.599 8.288L7 12.326l1.284-1.533 3.172 2.658Z",clipRule:"evenodd"})]});l.defaultProps={fill:"currentColor",boxSize:"24px",display:"block","data-testid":"CheckCircleFilledIcon"}},"/uRm":(e,n,a)=>{a.d(n,{F:()=>t});let t=function(e){return e.ONBOARDING="ON_BOARDING",e.ONBOARDING_LEGACY="ON_BOARDING_LEGACY",e.SELECT_PROFILE="SELECT_PROFILE",e.BRIDGED_WEBVIEW="BRIDGED_WEBVIEW",e.PLAYLIST_ASSISTANT="PLAYLIST_ASSISTANT",e}({})},"9y3W":(e,n,a)=>{a.d(n,{A:()=>x}),a("aRRr");var t,l,s=a("q1tI"),c=a("FVVF"),r=a("pVdW"),o=a("Votb"),i=a("y7xR"),d=a("HmE0"),m=a("nHPd"),p=a("TDRX"),u=a("Zlrv"),g=a("CV49"),E=a("7HKI");const x=e=>{const{onClickCallback:n=(()=>null),onClickCTA:a=null}=e;return s.createElement(s.Fragment,null,s.createElement(m.r,{textAlign:"center",paddingBlockStart:"spacing.3xl",paddingBlockEnd:"spacing.xl",paddingInline:"spacing.3xl"},s.createElement(c.T,{spacing:"spacing.xl",alignItems:"center",w:"100%"},s.createElement(c.T,{spacing:"spacing.s",alignItems:"center"},e.wordings.title?s.createElement(i.D,{as:"h2",variant:"heading.l"},e.wordings.title):null,s.createElement(p.a,null,e.wordings.description[0]?s.createElement(r.E,{variant:"body.l.default",textAlign:"center"},e.wordings.description[0]):null,e.wordings.description[1]?s.createElement(r.E,{textAlign:"center",variant:"body.l.default",whiteSpace:"pre-line"},e.wordings.description[1]):null)),(()=>{const{subscribe_url:t,cta_long:l}=e.wordings;return a?s.createElement(d.$n,{onClick:a,"data-testid":"conversionBoxCTA"},l):t?s.createElement(d.$n,{as:"a",href:t,target:"_blank",onClick:n,"data-testid":"conversionBoxCTA"},l):null})())),l||(l=s.createElement(u.s_,{right:"spacing.l",top:"spacing.l"})),s.createElement(g.c,{w:"100%",paddingBlockStart:"0",paddingBlockEnd:"spacing.2xl",paddingInline:"spacing.3xl"},s.createElement(c.T,{spacing:"spacing.xl",alignItems:"center"},s.createElement(c.T,null,(()=>{const{premium_plus:n,features:a=[]}=e.wordings;return 0===a.length?null:s.createElement(c.T,{as:"dl",spacing:"spacing.s"},s.createElement(r.E,{as:"dt",variant:"body.xl.default"},n),s.createElement(c.T,{bg:"background.neutral.tertiary.default",spacing:"spacing.m",alignItems:"flex-start",p:"spacing.l",borderRadius:"lg",role:"list"},a.map((e=>s.createElement(o.z,{as:"dd",spacing:"spacing.m",alignItems:"flex-start",key:e,role:"listitem"},t||(t=s.createElement(E._,{color:"icon.feedback.success.default",boxSize:"icon.m"})),s.createElement(r.E,{variant:"body.l.default"},e))))))})()))))}},jGoK:(e,n,a)=>{a.r(n),a.d(n,{default:()=>p});var t=a("q1tI"),l=a("TRpf"),s=a("nrKQ"),c=a("TqF5"),r=a("nxAS"),o=a("ljoE"),i=a("9y3W"),d=a("/uRm");class m extends t.Component{constructor(e){super(e),this._onButtonClick=()=>{this.props.openScreen({name:d.F.SELECT_PROFILE}),this.props.closeModal(),this._trackEvent("click")},this._onClose=()=>{this._trackEvent("close")},this._onButtonClick=this._onButtonClick.bind(this)}componentDidMount(){this.props.customerMessage&&(0,o.A)(this.props.name)}render(){const e={id:"modal_family",modalClassName:"modal-special-offer-family",wordings:this.props.data.wordings,onClickCTA:this._onButtonClick,onClose:this._onClose};return t.createElement(i.A,e)}_trackEvent(e){s.A.call({method:"log_central.log",data:{BATCH:[{channel:"pushbox",params:{name:"push_offer_family_account",action:e}}]}})}}m.defaultProps={customerMessage:!1};const p=(0,l.Ng)(null,{openScreen:r.J2,closeModal:c.Oo})(m)},ljoE:(e,n,a)=>{a.d(n,{A:()=>l});var t=a("nrKQ");function l(e){t.A.call({method:"customermessage.callback",data:{name:e}})}},nxAS:(e,n,a)=>{a.d(n,{Ay:()=>c,Fn:()=>o,J2:()=>r});const t="fullscreen/SHOW_FULLSCREEN",l="fullscreen/HIDE_FULLSCREEN",s={name:"",data:{}};function c(e=s,n={type:null}){switch(n.type){case t:return n.name?{name:n.name,data:n.data}:e;case l:return s;default:return e}}const r=({name:e,data:n})=>({type:t,name:e,data:n}),o=()=>({type:l})},TDRX:(e,n,a)=>{a.d(n,{a:()=>t});const t=(0,a("M62g").B)("div");t.displayName="Box"},CV49:(e,n,a)=>{a.d(n,{c:()=>i});var t=a("nKUr"),l=a("XuBo"),s=a("q1tI"),c=a("rMwH"),r=a("xi32"),o=a("M62g");const i=(0,r.R)(((e,n)=>{const{className:a,...r}=e,{bodyId:i,setBodyMounted:d}=(0,c.k3)();(0,s.useEffect)((()=>(d(!0),()=>d(!1))),[d]);const m=(0,l.cx)("chakra-modal__body",a),p=(0,c.x5)();return(0,t.jsx)(o.B.div,{ref:n,className:m,id:i,...r,__css:p.body})}));i.displayName="ModalBody"},nHPd:(e,n,a)=>{a.d(n,{r:()=>d});var t=a("nKUr"),l=a("81AO"),s=a("XuBo"),c=a("q1tI"),r=a("rMwH"),o=a("xi32"),i=a("M62g");const d=(0,o.R)(((e,n)=>{const{className:a,...o}=e,{headerId:d,setHeaderMounted:m}=(0,r.k3)();(0,c.useEffect)((()=>(m(!0),()=>m(!1))),[m]);const p=(0,s.cx)("chakra-modal__header",a),u=(0,r.x5)(),g=(0,l.H2)({flex:0,...u.header});return(0,t.jsx)(i.B.header,{ref:n,className:p,id:d,...o,__css:g})}));d.displayName="ModalHeader"},Votb:(e,n,a)=>{a.d(n,{z:()=>s});var t=a("nKUr"),l=a("eOc8");const s=(0,a("xi32").R)(((e,n)=>(0,t.jsx)(l.B,{align:"center",...e,direction:"row",ref:n})));s.displayName="HStack"},FVVF:(e,n,a)=>{a.d(n,{T:()=>s});var t=a("nKUr"),l=a("eOc8");const s=(0,a("xi32").R)(((e,n)=>(0,t.jsx)(l.B,{align:"center",...e,direction:"column",ref:n})));s.displayName="VStack"},y7xR:(e,n,a)=>{a.d(n,{D:()=>i});var t=a("nKUr"),l=a("qpfk"),s=a("XuBo"),c=a("xi32"),r=a("JFGw"),o=a("M62g");const i=(0,c.R)((function(e,n){const a=(0,r.V)("Heading",e),{className:c,...i}=(0,l.M)(e);return(0,t.jsx)(o.B.h2,{ref:n,className:(0,s.cx)("chakra-heading",e.className),...i,__css:a})}));i.displayName="Heading"},pVdW:(e,n,a)=>{a.d(n,{E:()=>d});var t=a("nKUr"),l=a("qpfk"),s=a("+rB9"),c=a("XuBo"),r=a("xi32"),o=a("JFGw"),i=a("M62g");const d=(0,r.R)((function(e,n){const a=(0,o.V)("Text",e),{className:r,align:d,decoration:m,casing:p,...u}=(0,l.M)(e),g=(0,s.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,t.jsx)(i.B.p,{ref:n,className:(0,c.cx)("chakra-text",e.className),...g,...u,__css:a})}));d.displayName="Text"}}]);