(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{54997:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return n(62888)}])},62888:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(70603),s=n(85893),i=n(85827),r=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"GOVERNANCE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address","name":"_account","type":"address"}],"name":"calculatePaymentETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address","name":"_tokenPayment","type":"address"},{"internalType":"address","name":"_account","type":"address"}],"name":"calculatePaymentToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address","name":"_tokenAddr","type":"address"}],"name":"getAttributes","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"}],"name":"getAttributesETH","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address[]","name":"_excluded","type":"address[]"}],"name":"getAttributesETHExcluding","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address[]","name":"_onlyIssuers","type":"address[]"}],"name":"getAttributesETHIncludingOnly","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address[]","name":"_excluded","type":"address[]"}],"name":"getAttributesExcluding","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"}],"name":"getAttributesFree","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address[]","name":"_excluded","type":"address[]"}],"name":"getAttributesFreeExcluding","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address[]","name":"_onlyIssuers","type":"address[]"}],"name":"getAttributesFreeIncludingOnly","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_attribute","type":"bytes32"},{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address[]","name":"_onlyIssuers","type":"address[]"}],"name":"getAttributesIncludingOnly","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"governance","outputs":[{"internalType":"contract IQuadGovernance","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_governance","type":"address"},{"internalType":"address","name":"_passport","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"passport","outputs":[{"internalType":"contract IQuadPassport","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]'),d=n(68220),l=function(){return(0,s.jsx)(d.N,{kybId:"xgeqwrwk",backendUrl:"https://kyb-v1.quadrata.tech/"})},o=n(67294),p=n(32046),u=n(61744),y=n(95283),c=n(98490),m=n(16748),b=n(73359),v=n(88684),h=function(){var e=(0,i.LN)().chain,t=(0,o.useState)("0"),n=t[0],d=t[1],h=(0,o.useState)("Not Verified KYC/KYB - Become Verified:"),T=(h[0],h[1]),x=(0,o.useState)(!0),f=x[0],g=x[1],w=(0,i.mA)(),N=w.address,k=w.isConnected,_=(0,i.KQ)({addressOrName:N}),j=_.data,E=(_.isError,_.isLoading,(0,o.useState)()),I=E[0],A=E[1],S="Goerli"===(null===e||void 0===e?void 0:e.name)?78:"Mainnet"===(null===e||void 0===e?void 0:e.name)?28:0,C="Goerli"===(null===e||void 0===e?void 0:e.name)?"0x23e33FC2704Bb332C0410B006e8016E7B99CF70A":"Mainnet"===(null===e||void 0===e?void 0:e.name)?"0xe0C8df4270F4342132ec333F6048cb703E7A9c77":"0x0000000000000000000000000000000000000000",M=(0,c.We)().openConnectModal,B=(0,i.do)({addressOrName:"0x5C6b81212c0A654B6e247F8DEfeC9a95c63EF954",contractInterface:r,functionName:"getAttributesFree",args:[N,1,p.id("IS_BUSINESS")]}),H=B.data,F=(B.isLoading,B.isSuccess);B.error;(0,o.useEffect)((function(){F?"0x7749ed7587e6dbf171ce6be50bea67236732d7ccfd51e327bc28b612ec06faa7"===(null===H||void 0===H?void 0:H[0].toString())?(T("Verifed KYB - You are a verified business"),g(!0)):"0xa357fcb91396b2afa7ab60192e270c625a2eb250b8f839ddb179f207b40459b4"===(null===H||void 0===H?void 0:H[0].toString())&&(T("Verified KYC - You are a verified individual"),g(!0)):(T("Not Verified KYC/KYB - Become Verified:"),g(!1))}),[F,H]);var O=(0,m.a)(v.FN),K=(O.loading,O.error,O.data);console.log(K);var V=(0,a.Z)((0,b.t)(v.kQ,{}),2),D=V[0],P=V[1];P.loading,P.error,P.data;(0,o.useEffect)((function(){D({variables:{id:S,amount:n}}).then((function(e){var t,n,a,s,i,r,d,l,o,p=[{pubKey:null===(n=null===(t=e.data)||void 0===t?void 0:t.depositDatasByNodeOperator[0])||void 0===n||null===(a=n.validator)||void 0===a?void 0:a.pubKey,signature:null===(i=null===(s=e.data)||void 0===s?void 0:s.depositDatasByNodeOperator[0])||void 0===i?void 0:i.signature,depositDataRoot:null===(d=null===(r=e.data)||void 0===r?void 0:r.depositDatasByNodeOperator[0])||void 0===d?void 0:d.depositDataRoot,amount:u.parseEther((null===(o=null===(l=e.data)||void 0===l?void 0:l.depositDatasByNodeOperator[0])||void 0===o?void 0:o.amount)||"0").toString()}];A(p),R()}))}),[n,S]),(0,o.useEffect)((function(){var e;null===(e=window)||void 0===e||e.ethereum.on("chainChanged",(function(){window.location.reload()}))}),[]);var Y=(0,i.PJ)({addressOrName:C,contractInterface:y,functionName:"stake",args:[I,"test"],overrides:{value:u.parseEther(n||"0")}}),q=Y.config,L=Y.error,G=(Y.isError,Y.isSuccess,Y.status),R=Y.refetch,Q=(0,i.GG)(q),U=(Q.data,Q.isLoading,Q.isSuccess,Q.error,Q.write);console.log(I),console.log(G),console.log(L);var W=(0,o.useState)(!1),J=W[0],X=W[1];return(0,o.useEffect)((function(){X(!0)}),[]),J?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("main",{className:"min-h-screen",children:(0,s.jsxs)("div",{className:"grid justify-items-center",children:[(0,s.jsx)("div",{className:"text-2xl font-bold mt-8",children:"Stake Ether. Carbon neutral."}),(0,s.jsx)("div",{className:"text-xm font-bold",children:"Receive swETH and a swNFT."}),(0,s.jsx)("div",{className:"card w-96 glass shadow-xl mt-2 justify-items-center",children:(0,s.jsxs)("div",{className:"card-body text-center text-xs items-center",children:["Available to stake:"," ","undefined"===typeof j?"0":0|Number(null===j||void 0===j?void 0:j.formatted)," ","ETH",(0,s.jsxs)("label",{className:"input-group",children:[(0,s.jsx)("span",{children:(0,s.jsx)("img",{src:"/ethL.png",width:"15px",height:"auto"})}),(0,s.jsx)("input",{type:"number",placeholder:"Amount",className:"input input-bordered input-primary w-full max-w-xs",onChange:function(e){return d(e.target.value)}})]}),k&&f?(0,s.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){return null===U||void 0===U?void 0:U()},disabled:!U,children:"Stake your ETH"}):k&&!f?(0,s.jsx)("label",{htmlFor:"kyb",className:"btn btn-primary btn-block",children:"Become Verified"}):(0,s.jsx)("button",{className:"btn btn-primary btn-block",onClick:M,children:"Connect Wallet"})]})}),(0,s.jsx)("div",{className:"text-xm font-bold mt-12",children:"Swell & Blockscape Statistics"}),(0,s.jsx)("div",{className:"card w-96 bg-base-100 shadow-xl border border-base-300 mt-1",children:(0,s.jsxs)("div",{className:"card-body grid grid-cols-2",children:[(0,s.jsx)("div",{children:"Commission"}),(0,s.jsx)("div",{className:"text-right",children:"9%"}),(0,s.jsx)("div",{children:"TVL"}),(0,s.jsx)("div",{className:"text-right",children:"32"}),(0,s.jsx)("div",{children:"APR"}),(0,s.jsx)("div",{className:"text-right",children:"4.1%"}),(0,s.jsx)("div",{children:"Exchange rate"}),(0,s.jsx)("div",{className:"text-right",children:"1 ETH = 1 swETH"}),(0,s.jsx)("div",{children:"Uptime"}),(0,s.jsx)("div",{className:"text-right",children:"99,95%"})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"text-xm font-bold",children:"FAQs"}),(0,s.jsxs)("div",{tabIndex:0,className:"collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-xl mt-1 w-96",children:[(0,s.jsx)("div",{className:"collapse-title text-xl font-medium",children:"What is Swell Network?"}),(0,s.jsx)("div",{className:"collapse-content",children:(0,s.jsx)("p",{children:"Swell Network is a permissionless, non-custodial, and liquid ETH staking protocol built for stakers, node operators, and the Ethereum ecosystem."})})]}),(0,s.jsxs)("div",{tabIndex:0,className:"collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-xl mt-2 w-96",children:[(0,s.jsx)("div",{className:"collapse-title text-xl font-medium",children:"How does Swell work?"}),(0,s.jsx)("div",{className:"collapse-content",children:(0,s.jsx)("p",{children:"Swell works as a marketplace for stakers and node operators to earn rewards from running validators to attest transactions and propose blocks on the Ethereum Beacon Chain. stakers choose a node operator and deposit their ETH directly with their validator to earn ETH staking rewards, minus any penalties and protocol fees and receive in return a liquid staking derivative token called swETH which is a 1:1 representation of their staked ETH. Node operators with the technical expertise and infrastructure are able to register and set up validators with Swell in order to attract stakers to fill the 32 ETH requirement to run a validator. This is done in a permissionless manner and requires 16 ETH as collateral. Institutional blockchain infrastructure providers are also able to register with Swell to provide validation services to stakers with 1 ETH as collateral. This will however require being verified by the Swell Network DAO."})})]}),(0,s.jsxs)("div",{tabIndex:0,className:"collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-xl mt-2 w-96",children:[(0,s.jsx)("div",{className:"collapse-title text-xl font-medium",children:"Who is blockscape?"}),(0,s.jsx)("div",{className:"collapse-content",children:(0,s.jsx)("p",{children:"We are a team of blockchain ethusiasts and software engineers providing staking and validation services to the many blockchain ecosystems."})})]}),(0,s.jsx)("input",{type:"checkbox",id:"kyb",className:"modal-toggle"}),(0,s.jsx)("div",{className:"modal",children:(0,s.jsxs)("div",{className:"modal-box relative",children:[(0,s.jsx)("label",{htmlFor:"kyb",className:"btn btn-sm btn-circle absolute right-2 top-2",children:"\u2715"}),(0,s.jsx)(l,{})]})})]})})}):null}}},function(e){e.O(0,[82,526,325,774,888,179],(function(){return t=54997,e(e.s=t);var t}));var t=e.O();_N_E=t}]);