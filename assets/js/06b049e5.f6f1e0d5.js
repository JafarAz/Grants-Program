"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[94591],{79561:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));o(95657);const i={},l="Alternative Polkadot Host Implementation",r={unversionedId:"docs/RFPs/Under Development/alternative_polkadot_host_implementations",id:"docs/RFPs/Under Development/alternative_polkadot_host_implementations",title:"Alternative Polkadot Host Implementation",description:"Status:* Under Development 1, Under Development 2",source:"@site/docs/RFPs/Under Development/alternative_polkadot_host_implementations.md",sourceDirName:"docs/RFPs/Under Development",slug:"/docs/RFPs/Under Development/alternative_polkadot_host_implementations",permalink:"/docs/RFPs/Under Development/alternative_polkadot_host_implementations",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Under Development/alternative_polkadot_host_implementations.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Alternative javascript console for Polkadot JS API",permalink:"/docs/RFPs/Under Development/alternative-polkadot-js-api-console"},next:{title:"RFP: Substrate Identity Directory",permalink:"/docs/RFPs/Under Development/identity-directory"}},s={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2}],m={toc:p},d="wrapper";function h(t){let{components:e,...o}=t;return(0,n.kt)(d,(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"alternative-polkadot-host-implementation"},"Alternative Polkadot Host Implementation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain/java-host-research"},"Under Development 1"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/hybrid_node_research.md"},"Under Development 2")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"Noc2"))),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"The architecture of Polkadot can be divided into two different parts, the Polkadot runtime and the Polkadot host. The Polkadot runtime is the core state transition logic of the chain and can be upgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot host is the environment in which the runtime executes and is expected to remain stable and mostly static over the lifetime of Polkadot."),(0,n.kt)("p",null,"The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this reason, implementation teams can build an alternative implementation of the Polkadot host while treating the Polkadot runtime as a black box. For more details of the interactions between the host and the runtime, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-spec/"},"see the specification"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The Web3 Foundation is interested in supporting additional implementations of the Polkadot Host. If you are interested in this RFP, please reach out to ",(0,n.kt)("a",{parentName:"strong",href:"mailto:spec@web3.foundation"},"spec@web3.foundation"),".")),(0,n.kt)("p",null,"Currently the following implementations are under development: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/gossamer"},"Gossamer: A Go implementation of the Polkadot Host")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/kagome"},"Kagome - C++ implementation of Polkadot Host")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot"},"Polkadot Node Implementation in Rust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/smoldot"},"Smoldot - A Lightweight Substrate and Polkadot client in Rust"))),(0,n.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,n.kt)("p",null,"For Polkadot Host Implementations, it\u2019s probably too complex to structure the entire implementation via milestones. Components of the Polkadot host are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Networking components such as Libp2p that facilitates network interactions."),(0,n.kt)("li",{parentName:"ul"},"State storage and the storage trie along with the database layer."),(0,n.kt)("li",{parentName:"ul"},"Consensus engine for GRANDPA and BABE."),(0,n.kt)("li",{parentName:"ul"},"Wasm interpreter and virtual machine."),(0,n.kt)("li",{parentName:"ul"},"Low level primitives for a blockchain, such as cryptographic primitives like hash functions."),(0,n.kt)("li",{parentName:"ul"},"Availability & Validity components to support parachains.")))}h.isMDXComponent=!0}}]);