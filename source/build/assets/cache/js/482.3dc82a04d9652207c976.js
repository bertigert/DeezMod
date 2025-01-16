"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[482],{h6Gj:(e,t,n)=>{n.d(t,{J8:()=>r,Xg:()=>l,hw:()=>i,r8:()=>a}),n("/eM8");var s=n("nrKQ");const i=(e,t)=>new Promise(((n,i)=>{s.A.call({method:"shownotification.getShows",data:{START:e,NB:t},success:e=>n({userShowOptinList:e.data.map((e=>({id:e.SHOW_ID,name:e.SHOW_NAME,imageMd5:e.SHOW_ART_MD5,channel:{optin_push:!0}}))),nextShowsIndex:void 0!==e.next_cursor?Number(e.next_cursor):null}),error:i})})),a=e=>new Promise(((t,n)=>{s.A.call({method:"shownotification.subscribe",data:{SHOW_ID:e},success:t,error:n})})),l=e=>new Promise(((t,n)=>{s.A.call({method:"shownotification.unsubscribe",data:{SHOW_ID:e},success:t,error:n})})),r=()=>new Promise(((e,t)=>{s.A.call({method:"shownotification.unsubscribeAll",data:{},success:e,error:t})}))},qPkO:(e,t,n)=>{n.d(t,{A:()=>l});var s=n("q1tI"),i=n("Wp0Y"),a=n("puIx");const l=({messageType:e})=>e===a.l.OPTIN_UPDATED?s.createElement("div",{className:"notifications-success"},s.createElement("p",null,(0,i.WI)("settingspage_text_preferencesupdatedwithin48hrs_web","settingspage_text_preferencesupdatedwithin48hrs_web",{sprintf:[String(48)],count:48}))):e===a.l.EMAIL_SENT?s.createElement("div",{className:"notifications-success"},s.createElement("p",null,(0,i.AP)("settingspage_text_emailsenttoconfirmchoices_web"))):e===a.l.SAVE_FAILED?s.createElement("div",{className:"notifications-error"},s.createElement("p",null,(0,i.AP)("settingspage_text_errorpreferencesnotsavedtryagain_web"))):null},MbwU:(e,t,n)=>{n.d(t,{A:()=>E}),n("aRRr");var s,i=n("q1tI"),a=n("X6oL"),l=n("LmGy"),r=n("wAmb"),o=n("pVdW"),c=n("PF77");const p=(0,a.Ay)()(s=class extends i.Component{constructor(e){super(e)}render(){const{channelList:e,optin:t,group:n,onOptinValueChange:s,isWebview:a}=this.props;return a||"transactional"!==t.name?i.createElement(l.Tr,null,i.createElement(r.Td,{pl:"spacing.2xs"},i.createElement(o.E,{fontWeight:"bold",fontSize:"md"},t.label),i.createElement(o.E,{color:"text.neutral.secondary.default",fontSize:"xs"},t.description)),e.map((e=>i.createElement(r.Td,{key:`optin-${t.name}-${e.name}`,textAlign:"center"},void 0!==t.channel[e.name]?i.createElement(c.Sc,{"data-testid":`${n.name}-${t.name}-${e.name}`,isChecked:t.channel[e.name],onChange:()=>{if(this.props.tracking){const s=n.name,i=(t.channel[e.name]?"uncheck_":"check_")+t.name;let a="notification-preferences_sms";"optin_push"===e.name?a="notification-preferences_notifications":"optin_mail"===e.name&&(a="notification-preferences_email"),this.props.tracking.trackEvent({event:"click",eventlabel:s,eventaction:i,eventcategory:a})}s(t.name,e.name,!t.channel[e.name])}}):null)))):null}})||s;var h,u=n("y7xR"),d=n("QqEF"),m=n("cyRG"),g=n("3H/6"),S=n("TnRy");const E=({group:e,optinList:t,onOptinValueChange:n,channelList:s,displayChannelHeader:a=!0,isWebview:c,children:E})=>i.createElement("div",null,i.createElement(u.D,{pt:"spacing.xl"},e.label),e.description.length?i.createElement("p",null,e.description):null,i.createElement(d.X,{size:"sm"},a?i.createElement(m.d,null,i.createElement(l.Tr,null,h||(h=i.createElement(r.Td,{pl:"spacing.2xs",width:"700px"})),s.map((e=>i.createElement(r.Td,{key:`col-${e.name}`,textAlign:"center",w:"110px"},i.createElement(g.m,{label:e.description},i.createElement(o.E,{fontSize:"xs",noOfLines:2},e.label))))))):null,i.createElement(S.N,null,t.map((t=>i.createElement(p,{key:`optin-${t.name}`,optin:t,group:e,onOptinValueChange:n,channelList:s,isWebview:c}))),E)))},"tU3/":(e,t,n)=>{n.d(t,{A:()=>_}),n("J7II");var s,i,a=n("q1tI"),l=n("TRpf"),r=n("X6oL"),o=n("RGaU"),c=n("HmE0"),p=n("Wp0Y"),h=n("aHAS"),u=n("MbwU"),d=n("Zy2V"),m=n("qPkO"),g=n("puIx"),S=n("Yrjs"),E=n("h6Gj");let w=(0,r.Ay)()(s=class extends a.Component{constructor(e){super(e),this.state={displayMessage:null,unsubscribedChannels:[],userShowOptinList:[],nextShowsIndex:null,loadingShows:!0},this.displayedMessageTimeout=void 0,this.getSelectedOptinsForChannel=e=>this.props.optinList.filter((t=>void 0!==t.channel[e]&&t.channel[e])).length+this.state.userShowOptinList.filter((t=>void 0!==t.channel[e]&&t.channel[e])).length,this.displayMessage=e=>{this.displayedMessageTimeout&&clearTimeout(this.displayedMessageTimeout),this.setState({displayMessage:e}),this.displayedMessageTimeout=setTimeout((()=>{this.setState({displayMessage:null}),this.displayedMessageTimeout=null}),5e3)},this.onOptinValueChange=(e,t)=>{const{unsubscribedChannels:n}=this.state;this.setState({displayMessage:null,unsubscribedChannels:n.filter((e=>e!==t))});const s=this.props.optinList.find((t=>t.name===e));void 0!==s?this.props.toggleOptin(e,t).then((()=>this.displayMessage(!1===s.channel[t]&&void 0!==s.channels_requiring_validation&&s.channels_requiring_validation.includes(t)?g.l.EMAIL_SENT:g.l.OPTIN_UPDATED))).catch((()=>this.displayMessage(g.l.SAVE_FAILED))):this.setState({displayMessage:g.l.SAVE_FAILED})},this.onUnsubscribeAll=(e,t)=>{const{unsubscribedChannels:n}=this.state;n.includes(t)?this.setState({unsubscribedChannels:n.filter((e=>e!==t))}):(this.setState({displayMessage:null,unsubscribedChannels:[...n,t]}),0!==this.getSelectedOptinsForChannel(t)&&this.props.unselectAllOptins(t).then((()=>(0,E.J8)())).then((()=>{this.setState({userShowOptinList:[],nextShowsIndex:null}),this.displayMessage(g.l.OPTIN_UPDATED)})).catch((()=>this.displayMessage(g.l.SAVE_FAILED))))},this.onUserShowOptinValueChange=(e,t,n)=>{const{unsubscribedChannels:s,userShowOptinList:i}=this.state;this.setState({displayMessage:null,unsubscribedChannels:s.filter((e=>e!==t)),userShowOptinList:i.map((s=>(s.id===e&&(s.channel[t]=n),s)))});const a=()=>this.displayMessage(g.l.OPTIN_UPDATED),l=()=>this.displayMessage(g.l.SAVE_FAILED);n?(0,E.r8)(e).then(a).catch(l):(0,E.Xg)(e).then(a).catch(l)},this.onViewMoreShowsClick=()=>{const{nextShowsIndex:e}=this.state;null!==e&&(this.setState({loadingShows:!0}),(0,E.hw)(e,S.fp).then((e=>{this.setState({userShowOptinList:[...this.state.userShowOptinList,...e.userShowOptinList],nextShowsIndex:e.nextShowsIndex,loadingShows:!1})})).catch((()=>this.setState({loadingShows:!1}))),this.props.tracking&&this.props.tracking.trackEvent({event:"click",eventlabel:"podcast",eventaction:"view-more",eventcategory:"notification-preferences_notifications"}))},this.renderUnsubscribeAllGroup=()=>{const{displayChannelHeader:e}=this.props,{unsubscribedChannels:t}=this.state,n=this.channelList,s={name:"unsubscribe_all",label:(0,p.AP)("optinpreferences_text_unsubscribealldzremails_web"),description:(0,p.AP)("optinpreferences_text_inclmusicrlsespodcastslistendata_web"),group:"unsubscribe_all",channel:Object.fromEntries(n.map((e=>[e.name,t.includes(e.name)])))};return a.createElement(u.A,{key:"grp-all",group:{name:"unsubscribe_all",label:(0,p.AP)("optinpreferences_title_unsubscribeall_web"),description:""},optinList:[s],channelList:n,onOptinValueChange:this.onUnsubscribeAll,displayChannelHeader:e})},this.displayedMessageTimeout=null}componentDidMount(){this.displayShows&&(0,E.hw)(0,S.fp).then((e=>{this.setState({...e,loadingShows:!1}),this.props.tracking&&this.props.tracking.trackEvent({event:"onDisplay",eventvalue:e.userShowOptinList.length,eventlabel:"podcast",eventaction:"list-display",eventcategory:"notification-preferences_notifications"})})).catch((()=>this.setState({loadingShows:!1})))}componentWillUnmount(){this.displayedMessageTimeout&&clearTimeout(this.displayedMessageTimeout)}get channelList(){const{channelList:e,channelFilter:t}=this.props;return void 0===t?e:e.filter((e=>t.includes(e.name)))}get displayShows(){return-1!==this.channelList.findIndex((e=>e.name===S.Tn))}renderShowOptinGroup(){const{userShowOptinList:e,nextShowsIndex:t,loadingShows:n}=this.state,s=this.channelList;return a.createElement(a.Fragment,null,e.length?a.createElement(d.A,{userShowOptinList:e,channelList:s,onUserShowOptinValueChange:this.onUserShowOptinValueChange}):null,n?i||(i=a.createElement(o.k,null)):null,n||null===t?null:a.createElement(c.$n,{onClick:this.onViewMoreShowsClick,size:"small",variant:"outline","data-testid":"show-more-btn"},(0,p.AP)("Plus")))}render(){const{displayMessage:e}=this.state,{optinList:t,groupList:n,displayChannelHeader:s,displayUnsubscribeAllFooter:i}=this.props,l=this.channelList;return 0===l.length||0===t.length||0===n.length?null:a.createElement(a.Fragment,null,n.map((e=>a.createElement(a.Fragment,{key:`grp-${e.name}`},a.createElement(u.A,{key:`grp-${e.name}`,group:e,optinList:t.filter((t=>t.group===e.name)),channelList:l,onOptinValueChange:this.onOptinValueChange,displayChannelHeader:s},e.name===S.ko&&this.displayShows?this.renderShowOptinGroup():null)))),i?this.renderUnsubscribeAllGroup():null,null!==e?a.createElement(m.A,{messageType:e}):null)}})||s;const _=(0,l.Ng)((e=>({channelList:e.user.USER.OPTINS.channel,groupList:e.user.USER.OPTINS.group,optinList:e.user.USER.OPTINS.optin})),{toggleOptin:h.XD,unselectAllOptins:h.Cn})(w)},Zy2V:(e,t,n)=>{n.d(t,{A:()=>g});var s,i=n("q1tI"),a=n("X6oL"),l=n("LmGy"),r=n("wAmb"),o=n("y7xR"),c=n("PF77"),p=n("5G9X"),h=n("0CJU");const u=(0,a.Ay)()(s=class extends i.Component{constructor(e){super(e)}render(){const{userShowOptin:e,channelList:t,insideApp:n,onUserShowOptinValueChange:s}=this.props;return i.createElement(l.Tr,null,i.createElement(r.Td,{pl:"spacing.2xs",display:"flex",alignItems:"center",gap:"spacing.s"},i.createElement(h.A,{type:p.Ay.Show,width:56,height:56,bordered:!0,data:{SHOW_ID:e.id,SHOW_NAME:e.name,SHOW_ART_MD5:e.imageMd5},alt:e.name,coverLink:!n})," ",i.createElement(o.D,{size:"sm"},e.name)),t.map((t=>i.createElement(r.Td,{key:`show-${e.id}-${t.name}`,textAlign:"center"},void 0!==e.channel[t.name]?i.createElement(c.Sc,{isChecked:e.channel[t.name],onChange:()=>{if(this.props.tracking){const n=(e.channel[t.name]?"uncheck_podcast_":"check_podcast_")+e.id;let s="notification-preferences_sms";"optin_push"===t.name?s="notification-preferences_notifications":"optin_mail"===t.name&&(s="notification-preferences_email"),this.props.tracking.trackEvent({event:"click",eventlabel:"podcasts",eventaction:n,eventcategory:s})}s(e.id,t.name,!e.channel[t.name])}}):null))))}})||s;var d=n("Wp0Y"),m=n("pVdW");const g=({userShowOptinList:e,channelList:t,onUserShowOptinValueChange:n,insideApp:s=!1})=>i.createElement(i.Fragment,null,i.createElement(l.Tr,null,i.createElement(r.Td,{pl:"spacing.2xs"},i.createElement(m.E,{fontWeight:"bold",fontSize:"md"},(0,d.AP)("optinpreferences_title_newepisodenotifications_web")),i.createElement(m.E,{color:"text.neutral.secondary.default",fontSize:"xs"},(0,d.AP)("optinpreferences_text_newreleasespodcastsisubscribeto_web"))),t.map((e=>i.createElement(r.Td,{key:`show-${e.name}`,className:"optin-col"})))),e.map((e=>i.createElement(u,{key:`show-${e.id}`,userShowOptin:e,onUserShowOptinValueChange:n,channelList:t,insideApp:s}))))},Yrjs:(e,t,n)=>{n.d(t,{Tn:()=>a,fp:()=>i,ko:()=>s});const s="podcasts",i=5,a="optin_push"},puIx:(e,t,n)=>{n.d(t,{l:()=>s});let s=function(e){return e[e.OPTIN_UPDATED=0]="OPTIN_UPDATED",e[e.EMAIL_SENT=1]="EMAIL_SENT",e[e.SAVE_FAILED=2]="SAVE_FAILED",e}({})}}]);