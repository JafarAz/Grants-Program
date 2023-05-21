"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[49039],{79712:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));a(95657);const r={},o="NFTStore",i={unversionedId:"applications/NFTStore_Network",id:"applications/NFTStore_Network",title:"NFTStore",description:"Proposer:* NFTT Studio",source:"@site/applications/NFTStore_Network.md",sourceDirName:"applications",slug:"/applications/NFTStore_Network",permalink:"/applications/NFTStore_Network",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/NFTStore_Network.md",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Introduction",id:"introduction",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"Data Structure",id:"data-structure",level:4},{value:'<span id="interface">Main pallet storage and method</span>',id:"main-pallet-storage-and-method",level:4},{value:"UI",id:"ui",level:4},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team Members",id:"team-members",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Experience",id:"team-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Verify Production of Concepts (POC) and Implement Substrate Modules",id:"milestone-1--verify-production-of-concepts-poc-and-implement-substrate-modules",level:4},{value:"Future Plans",id:"future-plans",level:2}],d={toc:m},u="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nftstore"},"NFTStore"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/NFTT-studio"},"NFTT Studio")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:"),"  1AeR4htoGwDRMpw7S2TTrzjJxeGLZsopiE")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("h4",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"NFTStore is an exclusive public chain for managing NFT assets. Users can not only issue their own NFTs, but also trade NFT transactions. The project is developed based on substrate 2.0. In the first phase of the design, we will write the business code at the runtime level. The project actually needs to consider whether to introduce the contract layer. In the economic model, we will fully give the token holders the transaction income on the platform Store. NFT is one of the important ways for the application of blockchain technology to approach life off-chain. We hope that this public chain will provide more possibilities for real-world assets on the chain. In addition, there are members of the team who have rich e-commerce experience. I believe that NFTStore has become the amazon.com of the blockchain and the best trading platform for digital assets in the world."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("h4",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,"NFTStore based on Substrate 2.0 and the Polkadot. Contains NFTStore node, pallet_nft, pallet_store and Front End."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/NFTT-studio/graphics/main/NFTT-Components.png",alt:"img"})," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"NFTStore Node")," is the customized chain node built by Substrate 2.0 .  ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"pallet_nft")," is used to create and manage NFT assets.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"pallet_store")," is responsible for NFT sales.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Front End")," provides Web UI for everyone to interact with the NFTStore. Front End will be built with React.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"NFTStore Token $NFTT")," is the native token of the NFTStore, and it will play the role of governance and other utilities. ",(0,l.kt)("strong",{parentName:"p"},"$NFTT")," is necessary to secure and power the chain."))),(0,l.kt)("h4",{id:"data-structure"},"Data Structure"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/NFTT-studio/graphics/main/NFTTT-UML.png",alt:"img"})),(0,l.kt)("p",null,"As shown above,  NFT design adopts ERC721 protocol\u3002"),(0,l.kt)("h4",{id:"main-pallet-storage-and-method"},(0,l.kt)("span",{id:"interface"},"Main pallet storage and method")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API-ID"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Pallet Name")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Storage")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Public Method")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{id:"nft"},"pallet_nft ")),(0,l.kt)("td",{parentName:"tr",align:null},"NFTMap get(fn get_nfts ): map hasher(blake2_128_concat) T::AcountId => NFT;"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pub fn create_nft(name:Vec<u8>,description:Vec<u8>, imageUrl:Vec<u8>, type:u8, amount:u256 ")," )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"pallet_nft"),(0,l.kt)("td",{parentName:"tr",align:null},"ERC721:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- safeTransferFrom(from:AccountId,to:AccountID,tokenId:u256,data:Vec<u8>)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- safeTransferFrom(from:AccountId,to:AccountID,tokenId:u256) "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- transferFrom(from:AccountId,to:AccountID,tokenId:u256)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- approve(approved: AccountId, tokenId:u256) "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," - setapproveForAll(approved: AccountId,  approved:bool)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- getApprove( tokenId:u256) "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- isApproveForAll(owner: AccountId, operator:AccountId) "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," - burn(from: AccountId, tokenId:u256)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{id:"store"}," pallet_store")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," StoreMap get(fn get_onsale):map hasher(blake2_128_concat)  u8 =>Vec<NFT>;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pub fn sell_setting(contractAddress:Vec<u8>, tokenId:u256,  price:u256 )"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," pub fn buy(contractAddress:vec<u8>, tokenId:u256)"))))),(0,l.kt)("h4",{id:"ui"},"UI"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/NFTT-studio/graphics/main/nfttt-frontend-mock-up.png",alt:"img"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT"},"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT")),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team Members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"blackjooohn - CTO/Project Lead"),(0,l.kt)("li",{parentName:"ul"},"MingMing - Product Director & FE"),(0,l.kt)("li",{parentName:"ul"},"Dragon - Full-stack Developer")),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"No Legal Entity"),(0,l.kt)("h3",{id:"team-experience"},"Team Experience"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"blackjooohn"),"   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Over 15 years of experiences in Development and Management   "),(0,l.kt)("li",{parentName:"ul"},"Has plenty of experience in Software Development and Blockchain Development   "),(0,l.kt)("li",{parentName:"ul"},"Currently, focus on Cross-chain technologies ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MingMing"),"   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Former Product Manager in Baidu   "),(0,l.kt)("li",{parentName:"ul"},"Former Product Manager in Alibaba  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Dragon"),"   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full-stack Developer   "),(0,l.kt)("li",{parentName:"ul"},"Over 20 years of experiences in Product Development and Management   "),(0,l.kt)("li",{parentName:"ul"},"Has plenty of experience in Software Architecture   ")),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NFTT Studio: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/NFTT-studio"},"https://github.com/NFTT-studio"))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 0.4 BTC")),(0,l.kt)("h4",{id:"milestone-1--verify-production-of-concepts-poc-and-implement-substrate-modules"},"Milestone 1 \u2014 Verify Production of Concepts (POC) and Implement Substrate Modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time Equivalent (FTE)"),": 2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.4 BTC ")),(0,l.kt)("p",null,"In the first milestone, the features for the POC will be implemented and tested by limited users. "),(0,l.kt)("p",null,"The following features will be included:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NFTStore Node  "),(0,l.kt)("li",{parentName:"ul"},"Pallet_nft"),(0,l.kt)("li",{parentName:"ul"},"Pallet_store"),(0,l.kt)("li",{parentName:"ul"},"Front End   ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Number")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Deliverable")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Specification")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache License 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Documents containing the description of whole architecture design for NFTStore.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a full test suite and guide for  NFT .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1a."),(0,l.kt)("td",{parentName:"tr",align:null},"Node Repo"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete the deployment of the basic public chain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1b."),(0,l.kt)("td",{parentName:"tr",align:null},"NFTStore token"),(0,l.kt)("td",{parentName:"tr",align:null},"$NFTT Complete the design of the economic model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2a."),(0,l.kt)("td",{parentName:"tr",align:null},"Pallet_nft"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete the development of pallet_nft and realize the ERC721 standard. ",(0,l.kt)("a",{parentName:"td",href:"#nft"},"Related nft interfaces")," that need to be delivered")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2b."),(0,l.kt)("td",{parentName:"tr",align:null},"Pallet_store"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete the development of pallet_store . ",(0,l.kt)("a",{parentName:"td",href:"#store"},"Related store interfaces")," that need to be delivered")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Front End"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete the development of the basic interactive page, the specific page can refer to: ",(0,l.kt)("a",{parentName:"td",href:"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT"},"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker Image"),(0,l.kt)("td",{parentName:"tr",align:null},"The NFTStore Network docker image contains the POC version running anywhere to verify the idea of the NFTStore.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In phase 1, our goal is to make it easy for users to create NFTs and trade their NFTs."),(0,l.kt)("li",{parentName:"ul"},"In phase 2, integrate more NFTs from other platforms on NFTStore through Polkadot cross-chain technology. "),(0,l.kt)("li",{parentName:"ul"},"In phase 3, more integration with off-chain, such as holding art exhibitions")))}s.isMDXComponent=!0}}]);