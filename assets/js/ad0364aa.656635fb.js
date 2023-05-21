"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[82361],{60632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="Pallet Stylograph",o={unversionedId:"applications/Stylograph",id:"applications/Stylograph",title:"Pallet Stylograph",description:"- Team Name: GenesisDAO by Deep Ink Ventures GmbH",source:"@site/applications/Stylograph.md",sourceDirName:"applications",slug:"/applications/Stylograph",permalink:"/applications/Stylograph",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Stylograph.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Project Details",id:"project-details",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Framework Components Overview",id:"framework-components-overview",level:3},{value:"pallet_stylograph",id:"pallet_stylograph",level:4},{value:"ink! Stylograph Facade Builder",id:"ink-stylograph-facade-builder",level:4},{value:"Additional Development",id:"additional-development",level:2},{value:"Token Transfer",id:"token-transfer",level:3},{value:"Council Management",id:"council-management",level:2},{value:"DAO Dashboard Add-On",id:"dao-dashboard-add-on",level:2},{value:"Ecosystem Fit",id:"ecosystem-fit",level:2},{value:"Team",id:"team",level:2},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Future Plans",id:"future-plans",level:2}],d={toc:p},h="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pallet-stylograph"},"Pallet Stylograph"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," GenesisDAO by Deep Ink Ventures GmbH"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," Ethereum Mainnet, 0x918a4363C35156c8F85F86795a79189e5A1ef557, USDC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level:")," 3")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Stylograph")," ","[ stahy-luh-graf, -grahf ]"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"A writing instrument for applying ink to paper."))),(0,i.kt)("p",null,"Stylograph is a framework aimed at enhancing the functionality of substrate-based chains in the Polkadot ecosystem with plugin-like functionality."),(0,i.kt)("p",null,"By using the ink! programming language, third party developers can extend the core functionality, while focussing on the domain logic."),(0,i.kt)("p",null,"The total ask for this proposal is $100,000 and it is planned to have a subsequent development to use this functionality within Genesis DAO (see the last grant, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/GenesisDAO.md#future-plans"},"future plans section"),"). "),(0,i.kt)("h2",{id:"project-details"},"Project Details"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A group of people surrounding Ken Thompson and Dennis Ritchie were quite busy at Bell Laboratories shaping the world as we know it today. They invented a milestone in programming languages\u200a\u2014\u200aC, the breakthrough operational system Unix, the first shell, UTF-8 and a long list of others that alone would have been enough to receive a Turing award."),(0,i.kt)("p",null,"How were they so productive? Of course, the density of talent at Bell Labs was as high as within the Beatles (before John married)\u200a\u2014\u200abut one tiny detail helped drive them. And that can be summed up in one word: focus. Finding out what holds the application together in its innermost folds and excelling at that. It takes writing programs that do one thing and do it well. Today, this set of guiding principles is popularly known as the Unix philosophy."),(0,i.kt)("p",null,"This fundamental building block of system design is what guides Substrate development today. The Polkadot ecosystem is a set of domain-specific chains that focus on building the infrastructure for the web3 universe. "),(0,i.kt)("p",null,"The ink! programming language can be run on Substrate chains, either as a ",(0,i.kt)("a",{parentName:"p",href:"https://use.ink/how-it-works#use-case-1-smart-contracts-as-first-class-citizens"},"core value proposition")," - with the chain being an ecosystem for protocols developed in ink! on top of it - or as ",(0,i.kt)("a",{parentName:"p",href:"https://use.ink/how-it-works#use-case-2-smart-contracts-as-second-class-citizens"},"second class citizens")," - with protocols being able to build on top of the domain logic. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Stylograph")," introduces a third use-case by utilizing ink! as a configuration language to alter the domain specific language itself by introducing a simple and straightforward framework to inject loosely-coupled hook points into your pallets that will call smart contract functionality in registered contracts on the contracts pallet. "),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Deep Ink Ventures is building a system parachain for the Polkadot ecosystem that is building infrastructure for Decentralized Autonomous Organizations - Genesis DAO. "),(0,i.kt)("p",null,"At ",(0,i.kt)("em",{parentName:"p"},"Genesis DAO")," we are committed to the Unix philosophy. "),(0,i.kt)("p",null,"We focus on the DAO management with the core components of creating and running DAOs, overseeing token issuance and DAO treasury and having a rock-solid proposal and voting infrastructure."),(0,i.kt)("p",null,"However, DAOs can have small and granular requirements that do require small tweaks and adjustments. Sometimes on-top protocols like Yield Aggregators require additional functionality. Some of those changes may be deal breaking for technical use cases or legal reasons and therefore a hard requirement for newly founded DAOs."),(0,i.kt)("p",null,"The core team ultimately has to decide what features are reasonably part of an unbloated core and there is no one-size-fits-all solution to a lot of problems. This is where Stylograph comes to the rescue."),(0,i.kt)("h3",{id:"framework-components-overview"},"Framework Components Overview"),(0,i.kt)("p",null,"The following is an overview of the architecture we build and is merely to sketch the scope and general concept. Implementation details may vary."),(0,i.kt)("h4",{id:"pallet_stylograph"},"pallet_stylograph"),(0,i.kt)("p",null,"This pallet acts as an abstraction layer on top of pallet_contracts in order to conveniently create callback based implementations."),(0,i.kt)("p",null,"The pallet will have initial support for ",(0,i.kt)("em",{parentName:"p"},"ink!"),". The concept is easily extendable for other languages such as ",(0,i.kt)("em",{parentName:"p"},"Solidity")," or ",(0,i.kt)("em",{parentName:"p"},"ask!")," that can be added."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/120174523/236872194-471198c3-48d8-4acc-842b-0ac450929908.png",alt:"image"})),(0,i.kt)("p",null,"Since Substrate does not know about the structure of smart contracts deployed in ink! beforehand, Substrate developers utilizing Stylograph need to register the function signature they want to support for callbacks."),(0,i.kt)("p",null,"This is a one-liner in the chain specs:"),(0,i.kt)("p",null,"Stylograph is now aware of a function given by signature, function name or trait definition and knows its associated gas limit."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/120174523/236872381-418dacb9-e776-4f5f-af0a-1c133196c2dc.png",alt:"image"})),(0,i.kt)("p",null,"With the callback defined, the core developers now can add callback functions into their pallets that extension developers can utilize. "),(0,i.kt)("p",null,"For example, the function above may alter the original vote in order to come up with a more complex algorithm (and it is therefore valuable to carefully select the arguments for the callback function for extension developers to be flexible)."),(0,i.kt)("p",null,"An example might be something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/120174523/236872439-2b1cc9aa-0a5f-4982-9fc2-723828e7cfb5.png",alt:"image"})),(0,i.kt)("p",null,"The next part is the registration of extensions by accounts - the second argument given in the callback above. "),(0,i.kt)("p",null,"The Substrate node implementation can decide how they want to interpret this - e.g. if the extensions are per account or if the account represents an entity on the chain. The latter is true for ",(0,i.kt)("em",{parentName:"p"},"Genesis DAO")," where the account needs to be the owner of the DAO. Each DAO can register its own hookpoints to tweak the core to its needs."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/120174523/236872530-d4cd6aec-03f5-4221-8cd8-a67a2b04da5f.png",alt:"image"})),(0,i.kt)("p",null,"The framework now has all the information at hand to execute a fully abstracted _pallet_contracts::bare_call _and to handle errors associated with it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user calls the extrinsic of the implementing pallet. In the case of GenesisDAO that might be the ",(0,i.kt)("em",{parentName:"li"},"dao_votes")," pallet to intercept the voting process in order to alter the majority voting to a different decision system."),(0,i.kt)("li",{parentName:"ol"},"This pallet executes the callback that takes the information given from the ",(0,i.kt)("em",{parentName:"li"},"dao_votes")," panel and looks up the callback definitions registers."),(0,i.kt)("li",{parentName:"ol"},"It constructs a call to the ink! contract defined.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/120174523/236873188-5fc04a21-6d59-41c3-921a-37a8e2ece739.png",alt:"image"})),(0,i.kt)("p",null,"The gas fees are therefore called by the person utilizing the functionality - the user calling the initial extrinsic."),(0,i.kt)("h4",{id:"ink-stylograph-facade-builder"},"ink! Stylograph Facade Builder"),(0,i.kt)("p",null,"The aforementioned information is enough to automagically generate a full boilerplate contract as template that Substrate chain developers can use to deploy a sample contract and to write a macro that defines the interface that the runtime expects. "),(0,i.kt)("p",null,"This contract can be released to the extension developer community to use as a boilerplate template. They can as well import the trait for the contract to be sure that they are compatible with the specs defined by the runtime."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/120174523/236872845-248bc23e-a96b-4008-8e9e-6d6cf1756d35.png",alt:"image"})),(0,i.kt)("p",null,"We therefore are building a CLI tool to package a versioned ink! crate with installation steps and base documentation that can be published with a new runtime release of the chain to give protocol and extension developers a headstart to extension development. Both the chain and the contract will depend on those traits as dependency to identify the interface."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/120174523/236881416-f7d622dc-2993-4b84-99c3-4b1835970372.png",alt:"image"})),(0,i.kt)("h2",{id:"additional-development"},"Additional Development"),(0,i.kt)("p",null,"As this is planned to be part of our to-be-planned-system-parachain, we are as well pushing the development of the main chain within this proposal."),(0,i.kt)("h3",{id:"token-transfer"},"Token Transfer"),(0,i.kt)("p",null,"Currently we rely on wallet extensions and polkadot.js.org to transfer DAO tokens around that reside on Genesis DAO. We have a primitive frontend UI in our MVP but would like to expand this to a more user friendly interface."),(0,i.kt)("p",null,"We have already created some designs to show the direction, but this would include full wireframes, designs + additions to our backend services and, of course, the dApp:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/deep-ink-ventures/Grants-Program/assets/120174523/f5c0bdf2-1600-4264-bda5-75a7708c1459",alt:"image"})),(0,i.kt)("h2",{id:"council-management"},"Council Management"),(0,i.kt)("p",null,"We\u2019ve already created the multisignature part of council and treasury management within our product / wireframe and design department and want to roll out a Gnosis Safe - Style interface for this as part of the treasury management."),(0,i.kt)("p",null,"We are using pallet_multisig for this and currently council members need to go via polkadot.js.org, not the most user friendly interface in the world."),(0,i.kt)("p",null,"This would again include the full wireframes, desings and code changes in the backend and frontend. We have already implemented the multisig part."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/deep-ink-ventures/Grants-Program/assets/120174523/68608920-3a08-4658-bb84-2f1852b42053",alt:"image"})),(0,i.kt)("h2",{id:"dao-dashboard-add-on"},"DAO Dashboard Add-On"),(0,i.kt)("p",null,"We are createing a few designs to make the DAO Dashboard more friendly and intuitive for users and want to do the frontend implementation as well as the respective adjustments to the APIs of our backend service."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/deep-ink-ventures/Grants-Program/assets/120174523/3d1a5587-3bef-4d84-ad96-1a5c99c0d4c8",alt:"image"})),(0,i.kt)("h2",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"While we have drafted this pallet with the next iteration of the Genesis DAO chain in mind (",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1yyEBa43plj-PzlrEnK6JT5CKqyvBDUrYiR1N6984fhk/edit#heading=h.nfot0twi37l"},"here are some planned plugins and extensions for inspiration"),"), the presented functionality is carefully abstracted into a reusable component system."),(0,i.kt)("p",null,"Stylograph is to Substrate what plugins and and extensions were for CMS, Shops in web2 - a smooth way for third parties to extend the core functionality for a chain. It enables Substrate developers to concentrate on doing their domain logic well whilst their users and protocols building on top maximize flexibility and time-to-market."),(0,i.kt)("p",null,"You can think of this as the inverse to chain extension. While chain extension gives plugins a way to interact with the underlying core logic, stylograph gives chain developers an easy framework to make their core extendable with plugins and extensions via smart contracts. They can be used by any chain that wants to have a growing extension ecosystem."),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Jakob Drzazga"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," \t",(0,i.kt)("a",{parentName:"li",href:"mailto:admin@deep-ink.ventures"},"admin@deep-ink.ventures"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deep Ink Ventures GmbH, registered with the commercial register at the local court of Berlin, HRB 247342")),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4-5 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3-4 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," $ 100,000")),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"The development will happen on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deep-ink-ventures/genesis-dao-node"},"https://github.com/deep-ink-ventures/genesis-dao-node")," as we test the functionality in a full chain, but the pallet will be released as it's own crate."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3-4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 70,000")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a can integrate the pallet and start working with")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide benchmarking & weights for the pallet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0e.")),(0,i.kt)("td",{parentName:"tr",align:null},"State of the art Tech Stack"),(0,i.kt)("td",{parentName:"tr",align:null},"We will use next.js/react for all frontend components, python / django for the backend services and rust for developing the substrate components")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Pallet Development"),(0,i.kt)("td",{parentName:"tr",align:null},"Develop the pallet as specified within the ",(0,i.kt)("inlineCode",{parentName:"td"},"pallet_stylograph")," section above.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Frontend Integration: Dashboard Add-On"),(0,i.kt)("td",{parentName:"tr",align:null},"Develop full wireframes and designs + Frontend, Backend integration, deployed on ",(0,i.kt)("a",{parentName:"td",href:"https://genesis-dao.org"},"https://genesis-dao.org"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Frontend Integration: Token Transfer"),(0,i.kt)("td",{parentName:"tr",align:null},"Develop full wireframes and designs + Frontend, Backend integration, deployed on ",(0,i.kt)("a",{parentName:"td",href:"https://genesis-dao.org"},"https://genesis-dao.org"),".")))),(0,i.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3-4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a can integrate the pallet and start working with")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"State of the art Tech Stack"),(0,i.kt)("td",{parentName:"tr",align:null},"We will use next.js/react for all frontend components, python / django for the backend services and rust for developing the substrate components")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Facade Builder"),(0,i.kt)("td",{parentName:"tr",align:null},"Develop the code generator for smart contracts as specified above in the ",(0,i.kt)("inlineCode",{parentName:"td"},"ink! Stylograph Facade Builder")," section.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Refrence Implementation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a sample implementation alongside with ",(0,i.kt)("inlineCode",{parentName:"td"},"pallet_contracts")," on the Genesis DAO test chain to demonstrate the functionality.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Frontend Integration: Councils Management"),(0,i.kt)("td",{parentName:"tr",align:null},"Develop full wireframes and designs + Frontend, Backend integration, deployed on ",(0,i.kt)("a",{parentName:"td",href:"https://genesis-dao.org"},"https://genesis-dao.org"),".")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Our future plan is to include (and therefore maintain and extend) this pallet within our Genesis DAO Chain. The exact game plan is laid out ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1yyEBa43plj-PzlrEnK6JT5CKqyvBDUrYiR1N6984fhk/edit"},"here"),"."))}u.isMDXComponent=!0}}]);