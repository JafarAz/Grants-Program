"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[16994],{24570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},i="dart-scale-codec",o={unversionedId:"applications/dart-scale-codec",id:"applications/dart-scale-codec",title:"dart-scale-codec",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/applications/dart-scale-codec.md",sourceDirName:"applications",slug:"/applications/dart-scale-codec",permalink:"/applications/dart-scale-codec",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/dart-scale-codec.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1 \u2014 Dart Implementation",id:"milestone-1--dart-implementation",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2},{value:"Are there are any teams who have already contributed (financially) to the project?",id:"are-there-are-any-teams-who-have-already-contributed-financially-to-the-project",level:3},{value:"Have you applied for other grants so far?",id:"have-you-applied-for-other-grants-so-far",level:3}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dart-scale-codec"},"dart-scale-codec"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nbltrust"},"NBLTrust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 1LcdMwwiG1Vt8UmMqUk1RLAd2MUpbeoyba")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"A Dart implementation of  the SCALE (Simple Concatenated Aggregate Little-Endian) Codec. We are building a wallet app called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/pull/338"},(0,r.kt)("strong",{parentName:"a"},"Jadewallet"))," which will support DOT/KSM, this project is a component of it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jadewallet")," is making a new paradigm of self-custody, which uses ",(0,r.kt)("strong",{parentName:"p"},"multi-party computation (MPC)")," and ",(0,r.kt)("strong",{parentName:"p"},"threshold signature scheme (TSS)")," technology. ",(0,r.kt)("strong",{parentName:"p"},"MPC based Threshold Signatures")," gives clients total autonomy over whose digital assets and multisignature ability with keyless cryptographic security."),(0,r.kt)("p",null,"We are building ",(0,r.kt)("strong",{parentName:"p"},"Jadewallet")," with Flutter, although there are Rust, C++ implementations of the SCALE Codec, we think the Dart implementation is the first choice.  And we hope the project will also help the Polkadot developer community."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alex Xu"),(0,r.kt)("li",{parentName:"ul"},"Hilbert Zhou")),(0,r.kt)("h3",{id:"team-website"},"Team Website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nbltrust.com/#/en/team"},"https://www.nbltrust.com/#/en/team"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"Tuolian (Shanghai) Co., Ltd."),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alex Xu: Co-Founder and CTO in NBLTrust for 4 years, core developer in our three custody products. IT Consultant in IBM for 9 years. ",(0,r.kt)("strong",{parentName:"li"},"Polkadot Ambassador China"),". Worked as TA in two training courses hold by Parity in China.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hilbert Zhou: 2 years ops experience on AIX, websphere and Power. 7+ years backend service development experience including HFT, CTA and blockchain.")),(0,r.kt)("p",null,"Founded in 2017 and headquartered in Shanghai, China, Tuolian(Shanghai) Co., Ltd. is a high-tech company specializing in the field of digital asset custody."),(0,r.kt)("p",null,"Tuolian has secure custody softwares based on self-developed high-strength classical cryptographic algorithm, hot & cold wallet and hardware wallet products that meet the bank's security level requirements, to provide overall solutions and related technical services for digital asset custody."),(0,r.kt)("p",null,"Tuolian provides a full range of custody services for well-known companies or organizations such as Math Wallet and HashQuark."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nbltrust"},"https://github.com/nbltrust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexxuyang"},"https://github.com/alexxuyang"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 0.85 BTC.")),(0,r.kt)("h3",{id:"milestone-1--dart-implementation"},"Milestone 1 \u2014 Dart Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.85 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivering document in dart supported format, and publish the package to pub.dev")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivering Unit tests.",(0,r.kt)("br",null),"Delivering an example of fetching and analyzing binary metadata from chain's runtime.",(0,r.kt)("br",null),"Delivering an example of sending extrinsics to substrate based chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Implementing the Library"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivering a library that support converting between object/json/binary of following types: MetadataV11 & 12, u8, u16, u32, u64, u256, bool, fixed length array, dynamic length array, bytes, address, String, Compact, Hash256, Balance, Extrinsic, Generalized structure, Generalized Enum")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"We are planning to make our dart-substrate-sdk open source."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("h3",{id:"are-there-are-any-teams-who-have-already-contributed-financially-to-the-project"},"Are there are any teams who have already contributed (financially) to the project?"),(0,r.kt)("p",null,"No."),(0,r.kt)("h3",{id:"have-you-applied-for-other-grants-so-far"},"Have you applied for other grants so far?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/pull/338"},(0,r.kt)("strong",{parentName:"a"},"Jadewallet"))))}m.isMDXComponent=!0}}]);