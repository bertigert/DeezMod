"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[9792],{GWQc:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f}),a("/eM8");var r,s,o,n,p=a("q1tI"),c=a("TRpf"),i=a("X6oL"),l=a("FSqQ"),d=a("zCrf"),m=a("ISNy");const h=p.lazy((()=>Promise.all([a.e(9537),a.e(2966),a.e(7285),a.e(9506),a.e(1421),a.e(9094),a.e(555),a.e(5665),a.e(7827),a.e(1403),a.e(5928)]).then(a.bind(a,"m/d2"))));let u=(0,i.Ay)({event:"updatepage",pagename:"track",pagecategory:"catalog"})(((s=class extends p.Component{constructor(...e){super(...e),this.state={error:null}}componentDidMount(){const{appState:e,match:{params:{id:t}}}=this.props;e?this.props.loadTrack({id:t,rehydrateData:e?{...e,partial:!1}:void 0}).catch((e=>this.setState({error:e}))):this.props.fetchTrack({id:t}).catch((e=>this.setState({error:e})))}shouldComponentUpdate(e){const{match:{params:t},data:a}=this.props;return Number(a.SNG_ID)!==Number(e.data.SNG_ID)||Number(t.id)!==Number(e.match.params.id)||e.data.partial!==a.partial}componentDidUpdate(){const{data:e,match:{params:{id:t}}}=this.props;!1!==e.partial&&(this.props.loadTrack({id:t}).catch((e=>this.setState({error:e}))),this.props.tracking&&this.props.tracking.trackEvent())}componentWillUnmount(){(0,d.w8)()}render(){const{match:{params:e},data:t}=this.props;if(this.state.error)throw this.state.error;if(Number(e.id)!==Number(t.SNG_ID)||t.partial)return o||(o=p.createElement(l.A,null));const a={dataFromStore:t,params:e};return p.createElement(p.Suspense,{fallback:n||(n=p.createElement(l.A,null))},p.createElement(h,a))}}).displayName="track",s.defaultProps={appState:void 0},r=s))||r;const f=(0,c.Ng)((({entities:e,player:t},{match:{params:a}})=>({data:(0,m.EM)(e,a),currentTrack:t.music.track,playerType:t.config.playerType})),{loadTrack:d.SM,fetchTrack:d.mF})(u)},FSqQ:(e,t,a)=>{a.d(t,{A:()=>n});var r,s=a("q1tI"),o=a("juqV");class n extends s.Component{render(){const{className:e}=this.props;let t=(0,o.A)("loader-container",e);return s.createElement("div",{className:t,"data-testid":"loader"},r||(r=s.createElement("div",{className:"loader animate-spin"})))}}},juqV:(e,t,a)=>{function r(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(a=r(e[t]))&&(s&&(s+=" "),s+=a)}else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}a.d(t,{A:()=>s});const s=function(){for(var e,t,a=0,s="",o=arguments.length;a<o;a++)(e=arguments[a])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}}}]);