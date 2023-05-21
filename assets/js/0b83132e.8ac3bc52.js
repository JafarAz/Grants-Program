"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[17806],{41897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(95657);const i={},l="Formal Guarantees for GRANDPA Finality Gadget",o={unversionedId:"docs/RFPs/Open/formal_guarantees_for_grandpa",id:"docs/RFPs/Open/formal_guarantees_for_grandpa",title:"Formal Guarantees for GRANDPA Finality Gadget",description:"Status:* Open",source:"@site/docs/RFPs/Open/formal_guarantees_for_grandpa.md",sourceDirName:"docs/RFPs/Open",slug:"/docs/RFPs/Open/formal_guarantees_for_grandpa",permalink:"/docs/RFPs/Open/formal_guarantees_for_grandpa",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Open/formal_guarantees_for_grandpa.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Decentralized Security Marketplace",permalink:"/docs/RFPs/Open/decentralized-security-marketplace"},next:{title:"Grant Management Web Application",permalink:"/docs/RFPs/Open/grant_management_webapp"}},s={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables",id:"deliverables",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"formal-guarantees-for-grandpa-finality-gadget"},"Formal Guarantees for GRANDPA Finality Gadget"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh"},"Bhargav Bhatt"),",  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"David Hawig"))),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("p",null,"Consensus layers are the backbones of blockchains. Any vulnerability in the consensus mechanism can have far reaching consequences on the integrity and security of the whole system. Polkadot\u2019s Relay Chain uses ",(0,r.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/finality.html"},"GRANDPA")," (a deterministic finality gadget) to achieve consensus in the network. "),(0,r.kt)("p",null,"This proposal aims to provide formal guarantees of GRANDPA\u2019s correctness and security by modeling the consensus mechanism and verifying it against formal specifications. We expect this exercise would lead to better implementations, since writing formal specs exposes implicit assumptions. Furthermore, developers can identify invariants to guide implementation, and use counterexamples to produce tests that expose bugs. "),(0,r.kt)("p",null,"We are open to any reasonable formal methods approach that rigorously proves the correctness of GRANDPA\u2019s claims of validity, finality and liveness. Suggested list of techniques include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Model-checking (in TLA+ Apalache, Ironfleet, IVY) "),(0,r.kt)("li",{parentName:"ul"},"interactive theorem proving (in Isabelle/HOL, Coq, verdi)"),(0,r.kt)("li",{parentName:"ul"},"Any other temporal property verification tool for distributed systems")),(0,r.kt)("p",null,"We envision the project to prove both safety and liveness properties of GRANDPA which interacts with a Block Production mechanism (like ",(0,r.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html"},"BABE")," or ",(0,r.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/block-production/SASSAFRAS.html"},"Sassafras"),") by assuming an abstract interface. "),(0,r.kt)("h2",{id:"deliverables"},"Deliverables"),(0,r.kt)("p",null,"The structure of the grant and the milestones depends highly on the project itself. It\u2019s therefore up to the applying team to come up with a milestone and delivery structure. "),(0,r.kt)("p",null,"The deliverables listed below are just an initial draft, assuming the project uses the approach of Modelcheking in TLA+ and can be changed. Proof of correctness can be delivered in stages. Verification of safety properties is mandatory and liveness properties is an optional objective."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"A document describing the design decisions in the modeling process, including justification for abstractions and assumptions (e.g. on the network model, latency, behavior of validators, nature of faults) w.r.t to protocol in the Paper and Spec. In-line comments in the TLA+/ PlusCal models that provide a clear mapping to the feature/property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructions to set up the required environment to run the analysis, preferably a docker image with all the tools pre-installed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"High-level document summarizing the results of the verification efforts as well as a final presentation for a broader audience that summarizes the key take-aways.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Proof Artifact"),(0,r.kt)("td",{parentName:"tr",align:null},"Models and specs in TLA+ that adhere to protocol implementations with reasonable abstraction gaps. As a stepping stone, the block production mechanism could be instantiated with BABE.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Proof Artifact"),(0,r.kt)("td",{parentName:"tr",align:null},"Formalize the validity, finality and liveness of GRANDPA as temporal properties in TLA+.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Engagements"),(0,r.kt)("td",{parentName:"tr",align:null},"Engage with the Web3 research team via regular meetings to refine the models and specs. For eg., clarify any assume/ rely reasoning made in the protocols. Engage with Web3 team to determine if detected bugs's are spurious.")))))}m.isMDXComponent=!0}}]);