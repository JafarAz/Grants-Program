"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[20126],{36243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(87462),o=(a(67294),a(3905));a(95657);const n={},s="Tip or Donate KSM Embeddable Button",l={unversionedId:"docs/RFPs/Closed/ksm-tipping-button",id:"docs/RFPs/Closed/ksm-tipping-button",title:"Tip or Donate KSM Embeddable Button",description:"Status:* Implemented",source:"@site/docs/RFPs/Closed/ksm-tipping-button.md",sourceDirName:"docs/RFPs/Closed",slug:"/docs/RFPs/Closed/ksm-tipping-button",permalink:"/docs/RFPs/Closed/ksm-tipping-button",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Closed/ksm-tipping-button.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"e-Passport ZK Validation  [ON HOLD PENDING REVISIONS]",permalink:"/docs/RFPs/Closed/epassport-zk-validation"},next:{title:"On-chain Quadratic Funding",permalink:"/docs/RFPs/Closed/on-chain-quadratic-funding"}},r={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"The Tipping System",id:"the-tipping-system",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Performance",id:"performance",level:3},{value:"Tip Spam",id:"tip-spam",level:3}],u={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tip-or-donate-ksm-embeddable-button"},"Tip or Donate KSM Embeddable Button"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Shard-Labs/kusama-tips-widget"},"Implemented")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," swader")),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,'This is a request for proposals to build an embeddable self-contained "Propose tip or Donate KSM" button for websites.'),(0,o.kt)("p",null,"The applying team is more than welcome to apply through ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program"},"open grants"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/learn-treasury#creating-a-treasury-proposal"},"the Kusama Treasury itself"),"."),(0,o.kt)("h2",{id:"the-tipping-system"},"The Tipping System"),(0,o.kt)("p",null,"Most Substrate-based chains like Polkadot and Kusama have an on-chain treasury. This treasury is filled from transaction fees, slashes, inflation, and donations. The treasury supports three different disbursement mechanisms: proposals, bounties, and tips. This RFP deals with Tips."),(0,o.kt)("p",null,"Anyone can propose a tip. The proposer becomes the finder, and receives a small fee if the tip is accepted. The Council votes on the tip by members seconding it with an arbitrary amount. The final amount to pay out is the median of all the amounts given by all Council members."),(0,o.kt)("p",null,"The tip begins its closing process (a countdown) when more than a half of councilors have seconded a tip. During this countdown, the remaining members can still submit their tips, but don't have to. After the countdown has elapsed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"close_tip")," extrinsic has to be called (by anyone) to perform the actual payout."),(0,o.kt)("h2",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,'The Kusama Tip Button sould be a standalone embeddable snippet of HTML and JS code. When added to a website, a "Tip or Donate KSM" button should show, text customizable by website owner.'),(0,o.kt)("p",null,"Before the user interacts with the button, the button's embedded code should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sanitize the current URL (remove UTM, hashes, alphabetically order query params, etc.)"),(0,o.kt)("li",{parentName:"ol"},"Convert this URL to bytes"),(0,o.kt)("li",{parentName:"ol"},"Check if a tip for the same URL already exists and IS ACTIVE (past tips for the same URL are OK)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'if yes, grey out button and make it unavailable with the text "Tip already pending - click to see", linking to ',(0,o.kt)("a",{parentName:"li",href:"http://kusama.dotapps.io/#/treasury/tips"},"http://kusama.dotapps.io/#/treasury/tips")," (text customizable by website owner)"),(0,o.kt)("li",{parentName:"ul"},"if no, button is available.")))),(0,o.kt)("p",null,"Once clicked, the button should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ask for permission to connect to PolkadotJS extension",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if none is present, offer to install it (take user to Github page)"),(0,o.kt)("li",{parentName:"ul"},'if allowed, a popup appears asking to "select an account"'),(0,o.kt)("li",{parentName:"ul"},"if denied, cancel all"))),(0,o.kt)("li",{parentName:"ul"},"offer two options: Propose Tip and Donate Directly (text customizable by website owner)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Propose Tip",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"clearly inform visitor that they need to have enough funds for both a fee AND a deposit, and that they will only get the deposit back after the tip has been paid out, which doesn't have to ever happen."),(0,o.kt)("li",{parentName:"ul"},"if current user is a Council member, ask for amount and then create a new Tip entry with treasury.tip_new"),(0,o.kt)("li",{parentName:"ul"},"if current user is not in Council, create a new Tip entry with treasury.report_awesome. "),(0,o.kt)("li",{parentName:"ul"},'Optionally allow visitor to attach a message. If provided, use utility.batch to batch the tip creation with system.remark. Final system remark is: "Tip for URL: MESSAGE FROM TIPPER".'),(0,o.kt)("li",{parentName:"ul"},'re-execute "tip exists" check to disable button and link to Tips page in treasury'))),(0,o.kt)("li",{parentName:"ul"},"Donate",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ask visitor for amount"),(0,o.kt)("li",{parentName:"ul"},"wrap Transfer in utility.batch function along with a system.remark. (not optional, always wrap)"),(0,o.kt)("li",{parentName:"ul"},"allow visitor to enter a custom note"),(0,o.kt)("li",{parentName:"ul"},'final system remark is "Donation for URL: MESSAGE FROM TIPPER".')))))),(0,o.kt)("h2",{id:"challenges"},"Challenges"),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,'Websites must not be notably slowed down by this implementation. This is especially challenging because the button\'s code needs to do some checking well before a visitor interacts with it. Gating the approach more (i.e. behind an additional "Tipping" button) would degrade UX, especially if the click requires a long load and check time before even allowing progress into the Tip or Donate area.'),(0,o.kt)("p",null,"Ideally, the code would be a minimal extraction of PolkadotJS API, or even slimmer standalone version, which could do the check painlessly. The tipping code itself can then be bigger and be async loaded only once a visitor interacts with the button. We assume the vast majority of users never will, so this is an acceptable tradeoff, but we welcome creative solutions to this problem."),(0,o.kt)("h3",{id:"tip-spam"},"Tip Spam"),(0,o.kt)("p",null,"It is reasonable to assume that highly popular websites will, in time, have many users wanting to create tips for them. The tip-existence check helps with that, but it does not help with minor URL modifications (i.e. no-effect query params) or tipping every page on a website."),(0,o.kt)("p",null,"The fee and deposit to create a Tip should take care of this problem."))}h.isMDXComponent=!0}}]);