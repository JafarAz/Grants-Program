"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[32599],{79066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="Payments Pallet",o={unversionedId:"applications/lip_payments",id:"applications/lip_payments",title:"Payments Pallet",description:"Team Name:* Virto Network",source:"@site/applications/lip_payments.md",sourceDirName:"applications",slug:"/applications/lip_payments",permalink:"/applications/lip_payments",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/lip_payments.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Github",id:"team-github",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Payment pallet basic functionality",id:"milestone-1--payment-pallet-basic-functionality",level:3},{value:"Milestone 2 \u2014 Payment pallet extensions",id:"milestone-2--payment-pallet-extensions",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"payments-pallet"},"Payments Pallet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Virto Network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," pvirtoK3FxBxXjxhkH2yZ4C62gjpgPNhCE9HnrGqzyocfBA (kUSD)")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Virto Network aims to create the Local Incentives Protocol(",(0,i.kt)("a",{parentName:"p",href:"https://virto.network/docs/whitepaper.md"},"LIP whitepaper"),")\nwhich defines a secure payment infrastructure and means to trade off-chain\nassets with cryptocurrency by connecting decentralized markets and users. LIP\nwill facilitate a better local welfare redistribution through local tax\ncollection from economic activities."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/virto-network/virto-node/tree/master/pallets/payment"},"Payments Pallet")," is fundamental part of LIP, it's an escrow like\nsystem that allows people pay with cryptocurrency for any product or service\nfrom the real world, it has been redesigned from the ground up to be highly\nconfigurable to serve the needs of the Virto Network as well as any other\nsubstrate based chain that wants to engage with real-world assets."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"This is a successor and change of scope to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/plip.md"},"PLIP proposal"),".\nPrevious proposal defined a simple escrow system and means for people buying\nand selling cryptocurrency to set rates on their listing on-chain. LIP\nsupersedes that initial version of the protocol defining a more robust,\neconomically secure and configurable escrow pallet(now payments pallet) leaving\nout the ",(0,i.kt)("em",{parentName:"p"},"Rates Pallet")," that is to be implemented as a external decentralized\nAPI using Matrix as storage backend."),(0,i.kt)("p",null,"Payments pallet has been reworked to include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Escrow-like functionality. Payments are frozen in the seller's account until\na release is triggered, usually when the parties come to an agreement\noff-chain(an end-to-end encrypted Matrix room in Virto)"),(0,i.kt)("li",{parentName:"ul"},"An incentive mechanism to ensure that buyers release/confirm the payment."),(0,i.kt)("li",{parentName:"ul"},"Dispute system with a configurable ",(0,i.kt)("em",{parentName:"li"},"dispute resolver"),", a way for users of the\npallet to dynamically assign an account to each payment individually with the\npermissions to resolve conflicts when disagreements arise."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"fee handler")," that allows setting up dynamic fees. e.g. in Virto is used to\npay a ",(0,i.kt)("em",{parentName:"li"},"local tax")," to communities and a ",(0,i.kt)("em",{parentName:"li"},"market fee")," for marketplaces."),(0,i.kt)("li",{parentName:"ul"},"Payment with remark to add extra metadata to payments. e.g. in Virto is used\nto incentive people buying via Marketplaces as the fee handler can use the\ndata to apply discounts.")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Payments pallet is a useful primitive for any substrate based blockchain that\nconsiders integrating escrow functionality serving as security protection\nagainst scammers and other malicious actors not planning to honor the terms of\nan off-chain trade.  "),(0,i.kt)("p",null,"We will propose the inclusion of the pallet in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-web3-stack/open-runtime-module-library/issues/665"},"orml\nrepository"),"\nas we use some of its crates internally and with the hope it can have better\nvisibility serving a wider audience. We will also champion its usage outside of\nthe Virto network(e.g. in Karura) to iterate and validate the pallet's design\nand functionality before the Virto Network is launched which comes with the\nbenefit of bringing our primary use case of decentralized on&off ramps earlier\nto the Kusama ecosystem."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Team lead and architect")," Daniel Olano",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Lead economist and game theory expert")," Qian Che",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Runtime Developer")," Stanly Johnson",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Developer and Marketplace builder")," David Barinas",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Rust Developer")," Kenji Phang",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Rust Developer")," Gabriela Azcona  "),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Daniel Olano"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:we@virto.team"},"we@virto.team")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://virto.network"},"https://virto.network"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"Virto aims to remain a decentralized autonomous organization and has no plans\nto become a legal entity."),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Daniel Olano")," is a Rust/Substrate Guru, and grinding full time to bring his\nbrain child, Virto, into fruition. He was first inspired to create Virto to\nfacilitate seamless fiat to crypto onboarding for users with varied financial\nliteracy to combat the plague of hyperinflation across Latin America, but is\nexcited to expand to failing fiat economies worldwide. He is currently\nfacilitating the first Rust developer workshop in Spanish to increase\nvisibility of Substrate and Polkadot to developers across LATAM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Qian Che")," is an Economist based in Berlin with a passion of solving\nproblems that concern public welfare. She has research experience in game\ntheory modeling about mechanism of coalitions in tackling climate change.\nFollowing this passion, blockchain opens her eyes and she sees it as an amazing\ntooling to utilize decentralized system to create positive social impact.\nBesides, she has been working as data analyst in global IT firms for more than\n5 years. These experience drives her where she is now to further contribute to\nVirto Network.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stanly Johnson")," is based in Bangalore, India and is a seasoned software\nengineer across the stack of programming languages underpinning Web3\ntechnologies, including Rust, Python, and Solidity. He is currently working as\na runtime developer part-time with Valibre specializing in cross-chain\ntransfers and escrow. Stanly\u2019s passion for distributed systems stems from the\nopportunity it provides to reach everyone by eliminating systemic barriers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"David Barinas")," is a hacker minded entrepreneur, ex-CTO and co-founder of\nValiu, a YCombinator startup providing USD pegged accounts and remittances to\npeople in Latin-America. Excited to apply his expertise in on&off ramps using\nVirto Network as the decentralized backend infrastructure for\n",(0,i.kt)("a",{parentName:"p",href:"https://www.joinbloque.com"},(0,i.kt)("em",{parentName:"a"},"Bloque")),"(payments, automation tools and analytics\nfor merchants in latam)."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/virto-network/"},"https://github.com/virto-network/"))),(0,i.kt)("h3",{id:"team-github"},"Team Github"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Daniel Olano:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olanod"},"https://github.com/olanod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Qian Che:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheqian0602"},"https://github.com/cheqian0602")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stanly Johnson:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/stanly-johnson"},"https://github.com/stanly-johnson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"David Barinas:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/stanly-johnson"},"https://github.com/stanly-johnson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kenji Phang:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KenjiPcx"},"https://github.com/KenjiPcx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gabriela Azcona:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/azconita"},"https://github.com/azconita"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"Since the PLIP proposal months ago, we have been continuously working and\niterating on the protocol and pallet economics, we have divided the work in two\nmilestones out of which the first one is already completed."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("h3",{id:"milestone-1--payment-pallet-basic-functionality"},"Milestone 1 \u2014 Payment pallet basic functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 21,600 kUSD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"The pallet will come with ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," and ",(0,i.kt)("strong",{parentName:"td"},"usage instructions")," as part of the crate documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Tests & benchmarks"),(0,i.kt)("td",{parentName:"tr",align:null},"All core functions will be fully covered by unit tests and benchmarks to ensure the weights of functions are correct.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Escrow functionality"),(0,i.kt)("td",{parentName:"tr",align:null},"Economically secure escrow based payments with incentive system for fund release.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Dispute resolution"),(0,i.kt)("td",{parentName:"tr",align:null},'Means for assigning a "judge" individually to each payment to resolve conflicts between the two parties.')))),(0,i.kt)("h3",{id:"milestone-2--payment-pallet-extensions"},"Milestone 2 \u2014 Payment pallet extensions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 14,400 kUSD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend the documentation to include example on how to implement custom handlers and configuration of the extra features.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create an article in virto.network talking about the benefits of the payments pallet and how it can be used by anyone in the ecosystem.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Stand-alone"),(0,i.kt)("td",{parentName:"tr",align:null},"Making the pallet generic and without being tight to Virto-only features. Create pull request in ORML repository to have the pallet included")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Fee processing"),(0,i.kt)("td",{parentName:"tr",align:null},"Configurable system to allow custom logic to charge extra fees that might be used by merchants.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Remarks system"),(0,i.kt)("td",{parentName:"tr",align:null},"Making payments with metadata to allow custom login react differently based on the payment information.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integrating the payments pallet in the ORML or Substrate repositories to\nserve a bigger audience."),(0,i.kt)("li",{parentName:"ul"},"Use the payments pallet in an existing Kusama parachain to expedite the\nlaunch and initial validation of ",(0,i.kt)("em",{parentName:"li"},"swap.cash"),", Virto's reference use case of\ndecentralized on&off-ramps for the Kusama ecosystem."),(0,i.kt)("li",{parentName:"ul"},"Create a first stable version of\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/virto-network/valor"},"Valor"),", Virto's runtime that enables\ndecentralizable APIs and progressive decentralization.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nWeb3 Foundation Website, the Substrate Builder's Program, as well as a\nnetworking meeting with the Acala team."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Previous Funding and Support")),(0,i.kt)("p",null,"Virto team has received minor funds from the Kusama\n",(0,i.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/post/616"},"treasury")," for creating\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/virto-network/sube"},"Sube"),", a lightweight Substrate client.",(0,i.kt)("br",{parentName:"p"}),"\n","Also worth noting that in early 2020 Virto Network started as an internal\ninitiative at Valiu, a YC startup providing dollar accounts to Venezuelan migrants\nin Latin America, as an effort to create a decentralized on & off ramps platform\nbut later developed independently with a brother scope and self-funded for the\nmost part of 2021."))}c.isMDXComponent=!0}}]);