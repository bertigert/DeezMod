"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[3284],{"ea/m":(e,t,r)=>{r.d(t,{$:()=>F,A:()=>$}),r("EV0h"),r("gS5K");var o,n=r("q1tI"),s=r("TRpf"),a=r("Ty5D"),c=r("H/eQ"),i=r("osUK"),d=r("vrNg"),u=r("PDhD"),l=r("oRs1"),p=r("7nY/"),h=r("+P3E"),m=r("FyZC"),f=r("CWHZ"),_=r("Au1S"),w=r("ndKy"),g=r("HiHM"),y=r("okAa"),A=r("ByVl"),C=r("M62g"),v=r("siwx"),b=r("CdHq"),I=r("y7xR"),R=r("HmE0"),k=r("7bxg"),E=r("Wp0Y");const S=(0,C.B)(v._,{baseStyle:{borderRadius:"base",w:"calc(50% - 32px / 2)"}}),U=({onClick:e,onClose:t,onDisplay:r,imageUrl:s,secondImageUrl:a,title:c})=>((0,n.useEffect)((()=>{r()}),[r]),n.createElement("div",{className:"container"},n.createElement(b.s,{justifyContent:"space-between",mb:"6"},n.createElement(b.s,{alignItems:"flex-end"},n.createElement(I.D,{noOfLines:1,fontSize:"22px"},c)),n.createElement(R.K0,{"aria-label":(0,E.AP)("Effacer"),variant:"ghost",onClick:t},o||(o=n.createElement(k.w,null)))),n.createElement(b.s,{as:"a",justifyContent:"space-between",onClick:e},n.createElement(S,{src:s}),n.createElement(S,{src:a})))),F=()=>{_.o()},$=({displayContentCard:e})=>{const{apiKey:t,isAvailable:r}=(0,s.d4)((({user:e})=>e.thirdParty.braze)),o=(0,s.d4)((({user:e})=>e.id)),C=(0,a.W6)(),[v,b]=(0,n.useState)();(0,n.useEffect)((()=>{if(r)return c.A.ready(c.A.user.loaded,(()=>{try{i.n(t,{baseUrl:"sdk.iad-01.braze.com",allowUserSuppliedJavascript:!0}),d.f()}catch(e){return}u.changeUser(o.toString()),l.J(),p.O((e=>{const t=e.cards.find((e=>!1===e.dismissed));t&&I(t)})),h.z((e=>{const t=e;t.clickAction="NONE",R(t),m.v(t)})),d.f()})),()=>{f&&(b(void 0),_.o(),w.z())}}),[t,r,o]);const I=e=>{const{imageUrl:t,extras:r,title:o,url:n}=e;[t,o,n,null==r?void 0:r.secondImageUrl].every((e=>void 0!==e))&&b({title:o,imageUrl:t,secondImageUrl:null==r?void 0:r.secondImageUrl,onClick:()=>{g.x(e,!0),window.location.href=n},onClose:()=>{b(void 0),y.a(e)},onDisplay:()=>{A.j([e],!0)}})},R=e=>{e.subscribeToClickedEvent((()=>{if(e.uri){const t=new URL(e.uri);C.push(t.pathname)}}))};return e&&v?n.createElement(U,v):null}},"39Zz":(e,t,r)=>{r.d(t,{J:()=>o});const o="signout-cookie"},QSbk:(e,t,r)=>{r.d(t,{M4:()=>u,gf:()=>d,ri:()=>l}),r("/eM8");var o=r("Vd8Q"),n=r("YEdj"),s=r("zuHY");const a=(0,s.VF)((0,s.ny)(s.MG));let c=null;const i=()=>{if(c)return c;const e=o.default.get("host_authent");return c=new a({tokenOutputType:s.NP.PAYLOAD,refreshTokenOutputType:s.NP.COOKIE,host:e,customFetch:(e,t)=>{const r=new Headers({Accept:"application/json"});return r.append("Origin",`https://${o.default.get("host_website_ssl")}`),(0,n.A6)(e,{...t,headers:r,credentials:"include"})},requestDelay:15}),c},d=async e=>{let t;try{t=await i().getToken()}catch(r){t=e?await i().loginWithArl().catch((async()=>await i().getToken())):await i().loginAsAnonymous()}if(null===t)throw new Error("Could not log user to new Auth");return t},u=()=>{i().invalidateCurrentToken()},l=async()=>{i().logout()}},"2qhg":(e,t,r)=>{r.r(t),r.d(t,{default:()=>Q}),r("/eM8");var o=r("/0Gg"),n=r("lXQd"),s=r("EVdn"),a=r.n(s),c=r("nrKQ"),i=r("z+LD"),d=r("Wp0Y"),u=r("vXsw"),l=r("u7vQ"),p=r("AfN5"),h=r("Vd8Q"),m=r("r2u9"),f=r("WKgy"),_=r("PbG0"),w=r("QSbk"),g=r("2+nF"),y=r("H/eQ"),A=r("exUT"),C=r("uHHB"),v=r("WBQ7"),b=r("39Zz"),I=r("ea/m"),R=r("G04z"),k=r("2gfB"),E=r("Homo"),S=r("tZCQ");const U={success:0,instant_auth:0,has_multi_account:0,error_recaptcha:0,country_closed_freemium:0,revoke_password_journey:0};class x extends Error{constructor(e,t){super(e),this.analyticsError=void 0,this.analyticsError=null!=t?t:e}}class T extends x{constructor(e,t){super(e,t),this.response=void 0,this.response={...U}}}class O extends T{constructor(e){super(null!=e?e:"Form - password or email are undefined or of the wrong type"),this.response={...U}}}class P extends T{constructor(e){super(null!=e?e:"Form - recaptcha is not disabled but has not been provided correctly"),this.response.error_recaptcha=1}}class j extends T{constructor(e){super(null!=e?e:"Form - country closed freemium"),this.response.country_closed_freemium=1}}class L extends T{constructor(e){super(null!=e?e:"Form - error and instant auth"),this.response.instant_auth=1}}var N=r("IZLt"),z=r("TqF5"),D=r("aHAS"),H=r("xobL"),M=r("dgkV");let K={check_username_active:!1,setKidStatus:function(){(0,H.p7)(f.A.getState().user)&&c.A.call({method:"user.setKidStatus",data:{parent_id:K.getParentId(),is_kid:!(0,H.zI)(f.A.getState().user)},success:function(){m.Ay.reloadApp()}})},loginMulti:function(e,t){e=Number(e),t="function"==typeof t?t:function(){},e!==K.current()?c.A.call({method:"user.loginMulti",data:{account_id:e},success:function(){return t(null,{}),(0,w.ri)(),!0},error:function(e){var r;return t(e,null),new N.A({error:null!==(r=null==e?void 0:e.message)&&void 0!==r?r:null==e?void 0:e.name,journey_type:"family-switch-member",gateway_method:"user.loginMulti",server_payload:e}).send(),!0}}):t(null,{})},getParentId:function(){return(0,H.oO)(f.A.getState().user)},isKid:function(){return(0,H.zI)(f.A.getState().user)},getOfferId:function(){return(0,H.id)(f.A.getState().user)},getOfferEligibilities:function(){var e=(f.A.getState().user.OFFER_ELIGIBILITIES||[])[0];return e=(0,o.A)(e)?e:{},{id:(0,n.A)(e,"offer.id")||0,name:(0,n.A)(e,"offer.name")||"Deezer",uri:(0,n.A)(e,"cta.subscribe_uri")||`https://${h.default.get("host_website_ssl")}/offers`}},current:function(){return(0,H.F6)(f.A.getState().user)},login:function(e,t,r,o){const n=f.A.getState().user.checkFormLogin;try{const s=(({email:e,password:t,reCaptcha:r,checkFormLogin:o,...n})=>{const s={...U};if("string"!=typeof e||"string"!=typeof t||""===e||""===t)throw new O;if(!1===r.disabled){if("string"!=typeof r.token)throw new P;r.token=r.token.trim()}e=e.trim(),t=t.trim(),(0,C.A)("dz_uid",E.VV.hashStr(`${encodeURIComponent(o)}${e}${t}`),0,10);const a=(({email:e,password:t,reCaptcha:r,handshakeJwt:o,checkFormLogin:n})=>{const s=["type=login",`mail=${encodeURIComponent(e)}`,`password=${encodeURIComponent(t)}`,`checkFormLogin=${encodeURIComponent(n)}`];return r.token&&s.push(`reCaptchaToken=${encodeURIComponent(r.token)}`),r.disabled&&s.push(`reCaptchaDisabled=${encodeURIComponent(r.disabled)}`),o&&s.push(`handshake=${encodeURIComponent(o)}`),s.join("&")})({email:e,password:t,reCaptcha:r,checkFormLogin:o,...n});switch((0,k.A)("/ajax/action.php","text",a)){case"success":return s.success=1,s;case"success_multi_account":return s.success=1,s.has_multi_account=1,s;case"reset_password_needed":return s.revoke_password_journey=1,s;case"error_and_instant_auth":throw new L;case"error_recaptcha":throw new P("Form - recaptcha verification failed");case"country_closed_freemium":throw new j;default:throw new T("Form - authentication failed")}})({email:e,password:t,reCaptcha:r,handshakeJwt:o,checkFormLogin:n});return s.success&&(_.Ay.pushSuccessfulLoginEvent(_.qR.Form),v.default.set("last_login_used",e,!0,30)),s}catch(e){var s;if(e instanceof x)return new M.A({error:"Form - authentication failed"===e.message?"invalid-login-credentials":e.message,journey_type:"login-email",gateway_method:"action.php"}).send(),_.Ay.pushFailedLoginEvent(e.analyticsError),null!==(s=e.response)&&void 0!==s?s:null;new M.A({error:"Form - authentication failed"===e.message?"invalid-login-credentials":e.message,journey_type:"login-email",gateway_method:"action.php"}).send(),i.A.error(e)}},ping:function(){try{return c.A.call({method:"deezer.ping",data:{},success:function({CHECKFORM:e,SESSION:t,USER_ID:r}){f.A.getState().user.id>0&&0===r?f.A.dispatch((0,z.qf)({name:"NO_SESSION"})):f.A.dispatch((0,D.CJ)(r)),f.A.dispatch((0,D.qO)({SESSION:t,CHECKFORM:e}))}}),!0}catch(e){return i.A.error(e),!1}},refreshSession:function(){return(0,k.A)("/ajax/action.php","text","type=refresh_session")},refreshPageAfterLogin:function(e){(0,g.Qc)(e)},logout:async function(e){try{return void 0!==l.Ay&&(l.Ay.getPlayerType()===p.Cc.CHROMECAST&&l.Ay.chromecast.stopReceiver(),l.Ay.control.pause(),l.Ay.control.stop()),await(async e=>{try{(0,R.u)().logout(),A.A.signout(),(0,I.$)()}catch(e){}y.A.trigger(y.A.user.logout),v.default.set("selectedChildAccount",!1,!0),(0,C.A)(b.J,"1",90),await(0,w.ri)(),location.href="https://"+h.default.get("host_website_ssl")+"/logout.php"+(e?"?redirect="+encodeURIComponent(e):"")})(e),!0}catch(e){i.A.error(e)}return!1},register:function(e,t){t||(t=function(){});const r=f.A.getState().user.checkForm;try{const o=(e=>{const t=(({birthday_day:e,birthday_month:t,birthday_year:r,blogname:o,checkForm:n,double_optin:s,email:a,EXPLICIT_ALLOW_TRANSFER_DATA_TO_FRANCE:c=!1,gender:i,handshakeJwt:d,is_electron:u,password:l,reCaptcha:{token:p,disabled:h}})=>{const m=["type=register",`email=${encodeURIComponent(a)}`,`password=${encodeURIComponent(l)}`,`blogname=${encodeURIComponent(o)}`,`gender=${encodeURIComponent(i)}`,`birthday_day=${encodeURIComponent(e)}`,`birthday_month=${encodeURIComponent(t)}`,`birthday_year=${encodeURIComponent(r)}`,`recaptcha=${encodeURIComponent(p||"")}`,`is_electron=${encodeURIComponent(u)}`,`checkForm=${encodeURIComponent(n)}`];return S.A.isAllowed("privacy_and_transfer_data_needed")&&m.push(`EXPLICIT_ALLOW_TRANSFER_DATA_TO_FRANCE=${encodeURIComponent(c)}`),d&&m.push(`handshake=${encodeURIComponent(d)}`),void 0!==s&&m.push(`double_optin=${encodeURIComponent(s)}`),h&&m.push(`captcha_disabled=${encodeURIComponent(h)}`),m.join("&")})(e),r=(0,k.A)("/ajax/action.php","text",t);if("error"===r)throw new x("error_checkform","Form - signup error");const o=JSON.parse(r);if(e.is_electron&&window.consentScreenApi&&window.consentScreenApi.syncRemoteConsent&&window.consentScreenApi.syncRemoteConsent(),"number"==typeof o[0]||o[0]>0||void 0!==o.redirect)return o;throw new x("error_input","Form - "+(o.message||"error_input"))})({...e,checkForm:r});if(o)return _.Ay.pushSuccessfulSignupEvent(_.qR.Form),void t(null,o);throw new Error("No signup result")}catch(e){i.A.error(e),e instanceof x&&(new M.A({error:e.message,journey_type:"signup-email",gateway_method:"action.php"}).send(),"error_checkform"===e.message&&K.ping(),_.Ay.pushFailedSignupEvent("Form - "+e.analyticsError)),new M.A({error:null==e?void 0:e.message,journey_type:"signup-email",gateway_method:"action.php"}).send(),t(e,null)}return!1},checkPassword:function(e,t){c.A.call({method:"user_checkPassword",data:{password:e},success:t})},resetPassword:function(e){try{if("string"!=typeof e||""===e.trim())return!1;e=e.trim();var t=(0,k.A)("/ajax/action.php","text","type=reset_password&reset_mail="+encodeURIComponent(e));return"success"===t?(a()("#reset_error").hide(),a()("#reset_first").hide(),a()("#reset_second").show(),a()("#reset_second_mail").html(e),a()("#foot_step3").show(),a()("#foot_step2").hide(),!0):"error"===t?(a()("#reset_error").html((0,d.AP)("<b>Adresse e-mail invalide</b><br />Merci de vérifier le format de votre adresse e-mail.")),a()("#reset_error").show(),!1):(a()("#reset_error").html((0,d.AP)("<b>Adresse email inconnue</b><br />Cette adresse email ne correspond à aucun compte.<br />Merci de saisir votre email à nouveau.")),a()("#reset_error").show(),!1)}catch(e){return i.A.error(e),!1}},resetPasswordConfirm:function(){try{var e="";1===a()("#reset_new_password").length&&(e=(e=a()("#reset_new_password").val()).trim());var t="";1===a()("#reset_new_confirm").length&&(t=(t=a()("#reset_new_confirm").val()).trim());var r="";1===a()("#key").length&&(r=a()("#key").val());var o="";return 1===a()("#email").length&&(o=(o=a()("#email").val()).trim()),"success"!==(0,k.A)("/ajax/action.php","text","type=reset_passwordConfirm&password="+encodeURIComponent(e)+"&password_confirm="+encodeURIComponent(t)+"&key="+encodeURIComponent(r)+"&email="+encodeURIComponent(o)+"&checkForm="+encodeURIComponent(f.A.getState().user.checkForm))?(a()("#reset_error").show(),!1):(a()("#reset_error").hide(),a()("#reset_first").hide(),a()("#foot_step2").hide(),a()("#reset_confirm").show(),a()("#foot_step2_login").show(),!0)}catch(e){return i.A.error(e),!1}},sendResetPassword:function(e){if("string"!=typeof e||""===e.trim())return Promise.reject(new Error("missing email"));e=e.trim();const t=["type=reset_password",`reset_mail=${encodeURIComponent(e)}`];let r={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"};r.Origin=`https://${h.default.get("host_website_ssl")}`;const o=`https://${h.default.get("host_website_ssl")}/ajax/action.php`;return fetch(o,{method:"POST",headers:r,credentials:"include",mode:void 0,body:t.join("&")}).then((e=>e.text().then((t=>{if("success"===t)return t;if(!e.ok||"error"===t)throw new Error(t);return t})))).catch((e=>{if(e instanceof TypeError)throw new Error;throw e}))},sendResetPasswordConfirm:function(e,t,r,o){const n=["type=reset_passwordConfirm",`email=${encodeURIComponent(e)}`,`key=${encodeURIComponent(t)}`,`password=${encodeURIComponent(r)}`,`password_confirm=${encodeURIComponent(o)}`,`checkForm=${encodeURIComponent(f.A.getState().user.checkForm)}`];let s={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"};s.Origin=`https://${h.default.get("host_website_ssl")}`;const a=`https://${h.default.get("host_website_ssl")}/ajax/action.php`;return fetch(a,{method:"POST",headers:s,credentials:"include",mode:void 0,body:n.join("&")}).then((e=>{if(!e.ok)throw new Error;return e.text()})).then((e=>{if("success"===e)return e;throw Error(e)})).catch((e=>{if(e instanceof TypeError)throw new Error;throw e}))},deleteAccountConfirm:async function(e){try{var t="";1===a()("#delete_account_password").length&&(t=(t=a()("#delete_account_password").val()).trim());var r="&password="+encodeURIComponent(t)+"&md5="+encodeURIComponent(e)+"&checkForm="+encodeURIComponent(f.A.getState().user.checkForm),o=(0,k.A)("/ajax/action.php","text","type=user_deleteConfirm"+r);return JSON.parse(o).error.length>0?u.g.drawFormResult("delete_result","form_error",(0,d.AP)("Veuillez vérifier votre mot de passe.")):(u.g.drawFormResult("delete_result","form_success",(0,d.AP)("Votre compte vient d'être supprimé.")),await K.logout()),!0}catch(e){return i.A.error(e),!1}}};const Q=K},"2gfB":(e,t,r)=>{r.d(t,{A:()=>a});var o=r("EVdn"),n=r.n(o),s=r("Vd8Q");function a(e,t,r,o,a){const c="http"===e.substr(0,4),i=`${"http:"===window.location.protocol?"http:":"https:"}//${window.location.host||s.default.get("host_website_ssl")}/`;let d="GET";""!==r&&void 0!==r&&(d="POST"),"boolean"!=typeof o&&(o=!1),e=e.replace(/^\/*/,""),!c&&i&&(e=i+e);const u=n().ajax({url:e,type:d,data:r,async:o,success:(e,t,r)=>{if("function"!=typeof a)return e;a(r)}});return"xml"===t?u.responseXML:u.responseText}}}]);