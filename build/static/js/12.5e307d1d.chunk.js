(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{938:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return j}));var c=n(4),r=n.n(c),a=n(8),i=n(95),o=n.n(i),s=n(82),l=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},947:function(e,t,n){"use strict";var c,r=n(18),a=(n(0),n(1)),i=n(17),o=n(2),s=a.e.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),l=function(e){var t=e.onClick,n=e.expanded;return Object(o.jsxs)(s,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(o.jsx)(i.V,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(o.jsx)(i.x,{}):Object(o.jsx)(i.u,{})]})};l.defaultProps={expanded:!1},t.a=l},979:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Be}));var c,r,a,i,o,s,l,b,j,d,u,x,p,O,m,h,f,k,y,v,g=n(19),S=n(20),T=n(0),C=n(36),w=n(29),V=n(15),A=n.n(V),L=n(53),z=n(17),I=n(257),q=n(424),P=n(157),U=n(60),D=n(192),E=n(37),Q=n(3),B=n(39),N=n(18),F=n(1),M=n(259),W=n(947),H=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[56],a=c[56];return"".concat(r,"/").concat(a)},K=n(2),R=F.e.div(c||(c=Object(N.a)(["\n  margin-top: 24px;\n"]))),J=Object(F.e)(z.F)(r||(r=Object(N.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),G=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,r=e.lpLabel,a=e.addLiquidityUrl,i=Object(B.a)();return Object(K.jsxs)(R,{children:[Object(K.jsxs)(z.z,{justifyContent:"space-between",children:[Object(K.jsxs)(z.V,{children:[i(316,"Stake"),":"]}),Object(K.jsx)(J,{href:a,children:r})]}),!n&&Object(K.jsxs)(z.z,{justifyContent:"space-between",children:[Object(K.jsxs)(z.V,{children:[i(23,"Total Liquidity"),":"]}),Object(K.jsx)(z.V,{children:c})]}),Object(K.jsx)(z.z,{justifyContent:"flex-start",children:Object(K.jsx)(z.E,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},X=n(190),$=Object(F.e)(z.z)(a||(a=Object(N.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),Y=Object(F.e)(z.U)(i||(i=Object(N.a)(["\n  margin-left: 4px;\n"]))),Z=function(e){var t=e.lpLabel,n=e.multiplier,c=e.isCommunityFarm,r=e.farmImage,a=e.tokenSymbol;return Object(K.jsxs)($,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(K.jsx)(z.C,{src:"/images/farms/".concat(r,".svg"),alt:a,width:64,height:64}),Object(K.jsxs)(z.z,{flexDirection:"column",alignItems:"flex-end",children:[Object(K.jsx)(z.A,{mb:"4px",color:"white",children:t}),Object(K.jsxs)(z.z,{justifyContent:"center",children:[c?Object(K.jsx)(X.b,{}):Object(K.jsx)(X.c,{}),Object(K.jsx)(Y,{variant:"secondary",children:n})]})]})]})},_=n(4),ee=n.n(_),te=n(8),ne=n(938),ce=n(23),re=n(256),ae=n(264),ie=n(427),oe=n(428),se=n(61),le=n(110),be=F.e.div(o||(o=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,c=e.theme;return n?c.shadows.warning:c.shadows.inset}),(function(e){return e.theme.colors.text})),je=Object(F.e)(z.D)(s||(s=Object(N.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),de=Object(F.e)(z.V)(l||(l=Object(N.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),ue=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,o=e.inputTitle,s=Object(B.a)(),l="0"===t||!t,b=l?"0":parseFloat(t).toFixed(4);return Object(K.jsxs)("div",{style:{position:"relative"},children:[Object(K.jsxs)(be,{isWarning:l,children:[Object(K.jsxs)(z.z,{justifyContent:"space-between",pl:"16px",children:[Object(K.jsx)(z.V,{fontSize:"14px",children:o}),Object(K.jsxs)(z.V,{fontSize:"14px",children:[s(1120,"Balance"),": ",b.toLocaleString()]})]}),Object(K.jsxs)(z.z,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(K.jsx)(je,{onChange:c,placeholder:"0",value:a}),Object(K.jsx)(z.i,{size:"sm",onClick:r,mr:"8px",children:s(452,"Max")}),Object(K.jsx)(z.V,{fontSize:"16px",children:n})]})]}),l&&Object(K.jsxs)(de,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",Object(K.jsxs)(z.E,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:[s(999,"get")," ",n]})]})]})},xe=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,i=e.addLiquidityUrl,o=Object(T.useState)(""),s=Object(S.a)(o,2),l=s[0],b=s[1],j=Object(T.useState)(!1),d=Object(S.a)(j,2),u=d[0],x=d[1],p=Object(B.a)(),O=Object(T.useMemo)((function(){return Object(se.b)(t)}),[t]),m=Object(T.useCallback)((function(e){b(e.currentTarget.value)}),[b]),h=Object(T.useCallback)((function(){b(O)}),[O,b]);return Object(K.jsxs)(z.J,{title:p(1068,"Stake LP tokens"),onDismiss:c,children:[Object(K.jsx)(ue,{value:l,onSelectMax:h,onChange:m,max:O,symbol:a,addLiquidityUrl:i,inputTitle:p(1070,"Stake")}),Object(K.jsxs)(le.a,{children:[Object(K.jsx)(z.i,{variant:"secondary",onClick:c,fullWidth:!0,children:p(462,"Cancel")}),Object(K.jsx)(z.i,{fullWidth:!0,disabled:u||"0"===O||"0"===l,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(l);case 3:x(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:u?p(488,"Pending Confirmation"):p(464,"Confirm")})]}),Object(K.jsxs)(z.F,{href:i,style:{alignSelf:"center"},children:[p(999,"Get")," ",a]})]})},pe=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,i=Object(T.useState)(""),o=Object(S.a)(i,2),s=o[0],l=o[1],b=Object(T.useState)(!1),j=Object(S.a)(b,2),d=j[0],u=j[1],x=Object(B.a)(),p=Object(T.useMemo)((function(){return Object(se.b)(c)}),[c]),O=Object(T.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(T.useCallback)((function(){l(p)}),[p,l]);return Object(K.jsxs)(z.J,{title:x(1126,"Unstake LP tokens"),onDismiss:n,children:[Object(K.jsx)(ue,{onSelectMax:m,onChange:O,value:s,max:p,symbol:a,inputTitle:x(588,"Unstake")}),Object(K.jsxs)(le.a,{children:[Object(K.jsx)(z.i,{variant:"secondary",onClick:n,fullWidth:!0,children:x(462,"Cancel")}),Object(K.jsx)(z.i,{disabled:d,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(s);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),fullWidth:!0,children:d?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},Oe=F.e.div(b||(b=Object(N.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),me=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.addLiquidityUrl,i=Object(B.a)(),o=Object(ie.a)(r).onStake,s=Object(oe.a)(r).onUnstake,l=Object(se.a)(t),b=l.toLocaleString(),j=Object(z.gb)(Object(K.jsx)(xe,{max:n,onConfirm:o,tokenName:c,addLiquidityUrl:a})),d=Object(S.a)(j,1)[0],u=Object(z.gb)(Object(K.jsx)(pe,{max:t,onConfirm:s,tokenName:c})),x=Object(S.a)(u,1)[0];return Object(K.jsxs)(z.z,{justifyContent:"space-between",alignItems:"center",children:[Object(K.jsx)(z.A,{color:0===l?"textDisabled":"text",children:b}),0===l?Object(K.jsx)(z.i,{onClick:d,children:i(999,"Stake LP")}):Object(K.jsxs)(Oe,{children:[Object(K.jsx)(z.B,{variant:"tertiary",onClick:x,mr:"6px",children:Object(K.jsx)(z.I,{color:"primary"})}),Object(K.jsx)(z.B,{variant:"tertiary",onClick:d,children:Object(K.jsx)(z.a,{color:"primary"})})]})]})},he=n(270),fe=function(e){var t=e.earnings,n=e.pid,c=Object(B.a)(),r=Object(T.useState)(!1),a=Object(S.a)(r,2),i=a[0],o=a[1],s=Object(he.b)(n).onReward,l=Object(se.a)(t),b=l.toLocaleString();return Object(K.jsxs)(z.z,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(K.jsx)(z.A,{color:0===l?"textDisabled":"text",children:b}),Object(K.jsx)(z.i,{disabled:0===l||i,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,s();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(562,"Harvest")})]})},ke=F.e.div(j||(j=Object(N.a)(["\n  padding-top: 16px;\n"]))),ye=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=e.addLiquidityUrl,a=Object(B.a)(),i=Object(T.useState)(!1),o=Object(S.a)(i,2),s=o[0],l=o[1],b=Object(U.b)(t.lpSymbol),j=b.pid,d=b.lpAddresses,u=Object(U.c)(j),x=u.allowance,p=u.tokenBalance,O=u.stakedBalance,m=u.earnings,h=Object(ce.a)(d),f=t.lpSymbol.toUpperCase(),k=c&&x&&x.isGreaterThan(0),y=Object(T.useMemo)((function(){return Object(ne.b)(n,h)}),[n,h]),v=Object(ae.a)(y).onApprove,g=Object(T.useCallback)(Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,v();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[v]);return Object(K.jsxs)(ke,{children:[Object(K.jsxs)(z.z,{children:[Object(K.jsx)(z.V,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"CAKE"}),Object(K.jsx)(z.V,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(1072,"Earned")})]}),Object(K.jsx)(fe,{earnings:m,pid:j}),Object(K.jsxs)(z.z,{children:[Object(K.jsx)(z.V,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:f}),Object(K.jsx)(z.V,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(1074,"Staked")})]}),c?k?Object(K.jsx)(me,{stakedBalance:O,tokenBalance:p,tokenName:f,pid:j,addLiquidityUrl:r}):Object(K.jsx)(z.i,{mt:"8px",fullWidth:!0,disabled:s,onClick:g,children:a(758,"Approve Contract")}):Object(K.jsx)(re.a,{mt:"8px",fullWidth:!0})]})},ve=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,i=a*Math.pow(1+c/365,365*r);return t=i-a,Math.round(100*t)/100},ge=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Se=F.e.div(d||(d=Object(N.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Te=F.e.div(u||(u=Object(N.a)(["\n  margin-bottom: '10px';\n"]))),Ce=Object(F.e)(z.V)(x||(x=Object(N.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),we=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.cakePrice,r=e.apy,a=e.addLiquidityUrl,i=Object(B.a)(),o=r.times(new A.a(100)).toNumber(),s=1e3/c.toNumber(),l=ve({numberOfDays:1,farmApy:o,cakePrice:c}),b=ve({numberOfDays:7,farmApy:o,cakePrice:c}),j=ve({numberOfDays:30,farmApy:o,cakePrice:c}),d=ve({numberOfDays:365,farmApy:o,cakePrice:c});return Object(K.jsxs)(z.J,{title:"ROI",onDismiss:t,children:[Object(K.jsxs)(Se,{children:[Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(860,"Timeframe")})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(858,"ROI")})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(864,"TOAST per $1000")})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:"1d"})}),Object(K.jsx)(Te,{children:Object(K.jsxs)(z.V,{children:[ge({amountEarned:l,amountInvested:s}),"%"]})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:l})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:"7d"})}),Object(K.jsx)(Te,{children:Object(K.jsxs)(z.V,{children:[ge({amountEarned:b,amountInvested:s}),"%"]})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:b})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:"30d"})}),Object(K.jsx)(Te,{children:Object(K.jsxs)(z.V,{children:[ge({amountEarned:j,amountInvested:s}),"%"]})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:j})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:"365d(APY)"})}),Object(K.jsx)(Te,{children:Object(K.jsxs)(z.V,{children:[ge({amountEarned:d,amountInvested:s}),"%"]})}),Object(K.jsx)(Te,{children:Object(K.jsx)(z.V,{children:d})})]}),Object(K.jsx)(Ce,{fontSize:"12px",color:"textSubtle",children:i(866,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(K.jsx)(z.z,{justifyContent:"center",children:Object(K.jsxs)(z.F,{href:a,children:[i(999,"Get")," ",n]})})]})},Ve=function(e){var t=e.lpLabel,n=e.cakePrice,c=e.apy,r=e.addLiquidityUrl,a=Object(z.gb)(Object(K.jsx)(we,{lpLabel:t,cakePrice:n,apy:c,addLiquidityUrl:r})),i=Object(S.a)(a,1)[0];return Object(K.jsx)(z.B,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(K.jsx)(z.l,{})})},Ae=(Object(F.f)(p||(p=Object(N.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),F.e.div(O||(O=Object(N.a)(["\n  background-size: 300% 300%;\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])))),Le=F.e.div(m||(m=Object(N.a)(["\n  align-self: baseline;\n  background: #1b1b1c;\n  border-radius: 15px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]))),ze=F.e.div(h||(h=Object(N.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Ie=F.e.div(f||(f=Object(N.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),qe=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethPrice,i=e.ethereum,o=e.account,s=Object(B.a)(),l=Object(T.useState)(!1),b=Object(S.a)(l,2),j=b[0],d=b[1],u=M.a.includes(t.tokenSymbol),x=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),p=Object(T.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===Q.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===Q.b.CAKE?c.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===Q.b.ETH?a.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,a,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),O=p?"$".concat(Number(p).toLocaleString(void 0,{maximumFractionDigits:0})):"-",m=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),h=t.dual?t.dual.earnLabel:"CAKE",f=t.apy&&t.apy.times(new A.a(100)).toNumber().toLocaleString("en-US").slice(0,-1),k=t.quoteTokenAdresses,y=t.quoteTokenSymbol,v=t.tokenAddresses,g=H({quoteTokenAdresses:k,quoteTokenSymbol:y,tokenAddresses:v}),C="".concat(I.a,"/").concat(g);return Object(K.jsxs)(Le,{children:["CAKE"===t.tokenSymbol&&Object(K.jsx)(Ae,{}),Object(K.jsx)(Z,{lpLabel:m,multiplier:t.multiplier,isCommunityFarm:u,farmImage:x,tokenSymbol:t.tokenSymbol}),!n&&Object(K.jsxs)(z.z,{justifyContent:"space-between",alignItems:"center",children:[Object(K.jsxs)(z.V,{children:[s(736,"APR"),":"]}),Object(K.jsx)(z.V,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Ve,{lpLabel:m,addLiquidityUrl:C,cakePrice:c,apy:t.apy}),f,"%"]}):Object(K.jsx)(z.S,{height:24,width:80})})]}),Object(K.jsxs)(z.z,{justifyContent:"space-between",children:[Object(K.jsxs)(z.V,{children:[s(318,"Earn"),":"]}),Object(K.jsx)(z.V,{bold:!0,children:h})]}),Object(K.jsx)(ye,{farm:t,ethereum:i,account:o,addLiquidityUrl:C}),Object(K.jsx)(ze,{}),Object(K.jsx)(W.a,{onClick:function(){return d(!j)},expanded:j}),Object(K.jsx)(Ie,{expanded:j,children:Object(K.jsx)(G,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:O,lpLabel:m,addLiquidityUrl:C})})]})},Pe=n(48),Ue=function(e){var t=e.stackedOnly,n=e.setStackedOnly,c=Object(C.i)(),r=c.url,a=c.isExact,i=Object(B.a)();return Object(K.jsxs)(De,{children:[Object(K.jsxs)(Ee,{children:[Object(K.jsx)(z.Z,{checked:t,onChange:function(){return n(!t)}}),Object(K.jsxs)(z.V,{color:"white",children:[" ",i(1116,"Staked only")]})]}),Object(K.jsxs)(z.j,{activeIndex:a?0:1,size:"sm",variant:"primary",children:[Object(K.jsx)(z.k,{as:Pe.a,to:"".concat(r),children:i(698,"Active")}),Object(K.jsx)(z.k,{as:Pe.a,to:"".concat(r,"/history"),children:i(700,"Inactive")})]})]})},De=F.e.div(k||(k=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ee=F.e.div(y||(y=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),z.V),Qe=F.e.div(v||(v=Object(N.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Be=function(){var e=Object(C.i)().path,t=Object(B.a)(),n=Object(U.d)(),c=Object(U.j)(),r=Object(U.i)(),a=Object(L.j)(),i=a.account,o=a.ethereum,s=Object(U.l)(),l=Object(w.b)(),b=Object(D.a)().fastRefresh;Object(T.useEffect)((function(){i&&l(Object(E.b)(i))}),[i,l,b]);var j=Object(T.useState)(!1),d=Object(S.a)(j,2),u=d[0],x=d[1],p=n.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})),O=n.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier})),m=p.filter((function(e){return e.userData&&new A.a(e.userData.stakedBalance).isGreaterThan(0)})),h=Object(T.useCallback)((function(e,t){var a,l=new A.a((null===(a=n.find((function(e){return e.pid===I.e})))||void 0===a?void 0:a.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=I.d.times(e.poolWeight),n=t.times(I.b),a=l.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===Q.b.BUSD||e.quoteTokenSymbol===Q.b.UST)a=l.times(n).div(e.lpTotalInQuoteToken).times(r);else if(e.quoteTokenSymbol===Q.b.ETH)a=c.div(s).times(n).div(e.lpTotalInQuoteToken);else if(e.quoteTokenSymbol===Q.b.CAKE)a=n.div(e.lpTotalInQuoteToken);else if(e.dual){var i=e&&l.times(t).times(I.b).div(e.lpTotalInQuoteToken),o=e.tokenPriceVsQuote&&new A.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(I.b).div(e.lpTotalInQuoteToken);a=i&&o&&i.plus(o)}return Object(g.a)(Object(g.a)({},e),{},{apy:a})})).map((function(e){return Object(K.jsx)(qe,{farm:e,removed:t,bnbPrice:r,cakePrice:c,ethPrice:s,ethereum:o,account:i},e.pid)}))}),[n,r,s,c,o,i]);return Object(K.jsxs)(P.a,{children:[Object(K.jsx)(z.A,{as:"h1",size:"lg",color:"white",mb:"50px",style:{textAlign:"center"},children:t(696,"Stake LP tokens to earn TOAST")}),Object(K.jsx)(Ue,{stackedOnly:u,setStackedOnly:x}),Object(K.jsxs)("div",{children:[Object(K.jsx)(Qe,{}),Object(K.jsxs)(q.a,{children:[Object(K.jsx)(C.b,{exact:!0,path:"".concat(e),children:h(u?m:p,!1)}),Object(K.jsx)(C.b,{exact:!0,path:"".concat(e,"/history"),children:h(O,!0)})]})]})]})}}}]);
//# sourceMappingURL=12.5e307d1d.chunk.js.map