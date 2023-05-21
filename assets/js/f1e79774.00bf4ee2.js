"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[71921],{50903:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(95657);const r={},i="Pontem Network (VM).",o={unversionedId:"applications/pontem",id:"applications/pontem",title:"Pontem Network (VM).",description:"- Team Name: Dfinance (Wings Stiftung).",source:"@site/applications/pontem.md",sourceDirName:"applications",slug:"/applications/pontem",permalink:"/applications/pontem",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/pontem.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team\u2019s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Pre-Alpha version of Move pallet",id:"milestone-1---pre-alpha-version-of-move-pallet",level:3},{value:"Milestone 2 \u2014 Alpha version of Move pallet",id:"milestone-2--alpha-version-of-move-pallet",level:3},{value:"Milestone 3 \u2014 Beta version &amp; Ecosystem",id:"milestone-3--beta-version--ecosystem",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],m={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pontem-network-vm"},"Pontem Network (VM)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Dfinance (Wings Stiftung)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 32AAAxmKJ9XxCsGSwt11oAuovCUHbgsgfY.")),(0,l.kt)("h2",{id:"project-overview"},"Project Overview"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Pontem Network aims to bring the Move VM and Move language, and ecosystem around it to Polkadot."),(0,l.kt)("p",null,"The Move language and the Move Virtual Machine, both developed by Facebook Libra, are among the safest technologies out there that enable the creation of smart contracts. While having built-in security by design such as resource-oriented architecture and formal verification, Move VM still severely lacks toolsets and documentation."),(0,l.kt)("p",null,"We are going to create the Move pallet to make it possible for developers to publish their Move VM modules and execute scripts, also, we already built a rich toolset and documentation for Move language, so we will need only adopt it for Polkadot."),(0,l.kt)("p",null,"This is where our team has a unique experience, due to over 2 years spent working with Move and building tools around it. We have been working closely with Libra (as recognized technical adopters) as part of the Dfinance project which is utilizing the Move language and Move VM in order to run safe and usable smart contracts."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"Implementation of Move VM pallet won't be an easy task, even taking into account our experience connecting Move VM with Cosmos SDK, achieved via integrating Move VM as GRPC service."),(0,l.kt)("p",null,"In the case of Polkadot WASM Runtime we can\u2019t repeat the same approach with GRPC due to limitations of Runtime, but we can do a more elegant solution by utilizing Move VM inside Runtime. To be clear let\u2019s see our plan step by step."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Move VM and language written in Rust language and can be compiled to WASM, unfortunately we can\u2019t use crates that depend on runtime. We will create a stable working pallet by forking of Move VM/language and replace creates with ones we can use."),(0,l.kt)("li",{parentName:"ol"},"We will make Move VM outputs (writesets) compatible with Polkadot key-value storage, as during our latest research we discovered it\u2019s not going to work \u201cout of the box\u201d and will require some time to build a solution. Same with address format SS58, and non VM balances."),(0,l.kt)("li",{parentName:"ol"},"We need to make gas usage of Move VM compatible with Polkadot standards. At least by using the same units like other VMs/pallets using."),(0,l.kt)("li",{parentName:"ol"},"Build a documentation around the Move pallet, adopt existing tools and docs about VM and language.")),(0,l.kt)("p",null,"We already have rich experience in these topics because of our current Dfinance project, so far we developed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/dnode/tree/master/x/vm"},"Cosmos SDK Move VM")," module, brings Move VM to Cosmos SDK."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.dfinance.co/move_vm"},"Documentation")," of how to write your own Move modules and scripts on Dfinance network."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=damirka.move-ide"},"VSCode plugin")," to write modules and scripts for both Libra and Dfinance network."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/intellij-move"},"IntelliJ plugin")," for Move language."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/dvm"},"Move VM")," as a server."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/move-tools"},"Toolset")," for Move language: dissembler, resources viewer, language server, executor."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/move-book"},"Move Book")," - the first book about Move."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/contracts"},"DeFi contracts")," framework on Move language.")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Developers can be interested to build their DApps on Polkadot using Move technology stack, as it\u2019s a safe and useful language which is getting more and more adoption."),(0,l.kt)("li",{parentName:"ul"},"Libra is developing and using Move, so Polkadot will have at least initial compatibility with Libra at least by allowing using the same modules in both networks."),(0,l.kt)("li",{parentName:"ul"},"Flow - Crypto Kitties creators blockchain also going to utilize Move VM and language, also by creating new language on top of it - Cadence, which can be adopted to Polkadot later.")),(0,l.kt)("h2",{id:"team"},"Team"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Oleg Gaidukov - CTO."),(0,l.kt)("li",{parentName:"ul"},"Boris Povod - R&D Lead and Blockchain developer."),(0,l.kt)("li",{parentName:"ul"},"Alexander Kozlovsky - Rust developer and Rust community enthusiast."),(0,l.kt)("li",{parentName:"ul"},"Dmitry Yakushev - Rust developer."),(0,l.kt)("li",{parentName:"ul"},"Vitaly Rudko - Dev Ops.")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Boris Povod"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:boris@dfinance.co"},"boris@dfinance.co")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dfinance.co"},"https://dfinance.co"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," Gubbelstasse 11, 6300 Zug, Switzerland"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Wings Stiftung")),(0,l.kt)("h3",{id:"teams-experience"},"Team\u2019s experience"),(0,l.kt)("p",null,"We are an experienced team, our current project is ",(0,l.kt)("a",{parentName:"p",href:"https://dfinance.co/"},"Dfinance"),", in the past we've launched ",(0,l.kt)("a",{parentName:"p",href:"https://wings.ai/"},"Wings")," platform, and before that we've developed ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/borispovod/crypti-sources"},"Crypti")," (which became Lisk)."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/dnode/tree/master/x/vm"},"Cosmos SDK Move VM")," module, brings Move VM to Cosmos SDK."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/vscode-move-ide"},"VSCode plugin")," repository."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/intellij-move"},"IntelliJ plugin")," for Move language."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/dvm"},"Move VM")," as a server."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dfinance/move-tools"},"Toolset")," for Move language: dissembler, resources viewer, language server, executor.")),(0,l.kt)("p",null,"Contributions to other projects (Libra & Cosmos SDK): "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/libra/libra/pull/4058"},"https://github.com/libra/libra/pull/4058")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/libra/libra/pull/4053"},"https://github.com/libra/libra/pull/4053")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/libra/libra/pull/3472"},"https://github.com/libra/libra/pull/3472")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/libra/libra/pull/6116"},"https://github.com/libra/libra/pull/6116")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/6053"},"https://github.com/cosmos/cosmos-sdk/pull/6053"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ogaidukov/"},"https://www.linkedin.com/in/ogaidukov/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/boris-povod-361a1b79/"},"https://www.linkedin.com/in/boris-povod-361a1b79/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/a-koz/"},"https://www.linkedin.com/in/a-koz/"))),(0,l.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 months."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Effort:")," 357 days."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 1.4658 BTC.")),(0,l.kt)("h3",{id:"milestone-1---pre-alpha-version-of-move-pallet"},"Milestone 1 - Pre-Alpha version of Move pallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month"),(0,l.kt)("li",{parentName:"ul"},"Working days ",(0,l.kt)("strong",{parentName:"li"},"x")," ppl. ",(0,l.kt)("strong",{parentName:"li"},":")," 28 ",(0,l.kt)("strong",{parentName:"li"},"x")," 4"),(0,l.kt)("li",{parentName:"ul"},"Effort: 112 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.419 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0."),(0,l.kt)("td",{parentName:"tr",align:null},"Crates list"),(0,l.kt)("td",{parentName:"tr",align:null},"Building a list of crates we have to replace with analogues could work in runtime or make our own versions which can work in runtime also.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Crates developing"),(0,l.kt)("td",{parentName:"tr",align:null},"During our research we can use sp-std for part of cases, but unfortunately we will have to fork it and add additional functional or create our analogue crates contains missed functional.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Crates replace"),(0,l.kt)("td",{parentName:"tr",align:null},"Adopt Move VM for runtime using developed crates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Move Pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a Polkadot pallet with Move VM inside. Alpha version, without processing of WriteSets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Addresses support"),(0,l.kt)("td",{parentName:"tr",align:null},"Add support of SS58 addresses to Move VM.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Compiler"),(0,l.kt)("td",{parentName:"tr",align:null},"Adopt compiler to compile modules/scripts for Move VM inside pallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit-tests"),(0,l.kt)("td",{parentName:"tr",align:null},"Basic unit-tests coverage, at least 30%.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker-compose to quickly launch standalone version of Move VM.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial documentation how to run Move VM inside Pallet/standalone, execute scripts and publish modules.")))),(0,l.kt)("h3",{id:"milestone-2--alpha-version-of-move-pallet"},"Milestone 2 \u2014 Alpha version of Move pallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month"),(0,l.kt)("li",{parentName:"ul"},"Working days ",(0,l.kt)("strong",{parentName:"li"},"x")," ppl. ",(0,l.kt)("strong",{parentName:"li"},":")," 28 ",(0,l.kt)("strong",{parentName:"li"},"x")," 5"),(0,l.kt)("li",{parentName:"ul"},"Effort: 140 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.5508 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0."),(0,l.kt)("td",{parentName:"tr",align:null},"WriteSets processing"),(0,l.kt)("td",{parentName:"tr",align:null},"Process WriteSets from MoveVM to Polka storage. Read/Write operations, Del operations.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Events processing"),(0,l.kt)("td",{parentName:"tr",align:null},"Process Move events format to Polkadot one and publish them to block.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Publish Transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a transaction type to support Move module publishing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Execute Arguments Parsing"),(0,l.kt)("td",{parentName:"tr",align:null},"To enable execute script transactions support we need to parse script arguments.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Standard Library"),(0,l.kt)("td",{parentName:"tr",align:null},"Move Standard Library Module adoption for Polkadot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Execute Transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a transaction type to execute Move scripts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit-tests"),(0,l.kt)("td",{parentName:"tr",align:null},"Cover 60% of the pallet functional with unit tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Resource viewer"),(0,l.kt)("td",{parentName:"tr",align:null},"Resource viewer to view Move resources from Substrate node storage.")))),(0,l.kt)("h3",{id:"milestone-3--beta-version--ecosystem"},"Milestone 3 \u2014 Beta version & Ecosystem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},"Working days ",(0,l.kt)("strong",{parentName:"li"},"x")," ppl. ",(0,l.kt)("strong",{parentName:"li"},":")," 21 ",(0,l.kt)("strong",{parentName:"li"},"x")," 5"),(0,l.kt)("li",{parentName:"ul"},"Effort: 105 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.496 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0."),(0,l.kt)("td",{parentName:"tr",align:null},"Gas compatibility"),(0,l.kt)("td",{parentName:"tr",align:null},"Change VM gas usage units and math to make it compatible with Polkadot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Non-VM balances compatibility"),(0,l.kt)("td",{parentName:"tr",align:null},"VM supports native coins inside smart contracts, example: DOT.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"REST API"),(0,l.kt)("td",{parentName:"tr",align:null},"REST API to compile, publish/execute modules and scripts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"RPC"),(0,l.kt)("td",{parentName:"tr",align:null},"RPC to publish/execute modules and scripts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Supplement documentation with all features we provided: txs, compilers, smart contracts examples.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Deployment of prod env"),(0,l.kt)("td",{parentName:"tr",align:null},"Spin up instances on the top of DigitalOcean/Kubernetes cluster, set an auto deploy etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"disassembler adoption"),(0,l.kt)("td",{parentName:"tr",align:null},"Adopt current disassembler for Substrate node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit-tests"),(0,l.kt)("td",{parentName:"tr",align:null},"Cover 85% of pallet functional with unit tests.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"Wings Stiftung plans to continue supporting Move ecosystem. We want to build a bridge between Polkadot and Libra as Parachain, and launch our Parachain with Move VM pallet inside. Also, we going to proceed with further development of toolset (Move debugger, unit-testing framework, etc.) and extend our Wallet with Polkadot-specific features."),(0,l.kt)("h2",{id:"additional-information"},"Additional Information"),(0,l.kt)("p",null,"Wings Stiftung will be as well supporting financially this project. We are going to apply to another Grant for the implementation of the ",(0,l.kt)("a",{parentName:"p",href:"https://pontem.network"},"Pontem network"),"."))}d.isMDXComponent=!0}}]);