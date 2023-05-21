"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[78112],{41378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},o="Map Bridge",l={unversionedId:"applications/MAP-Bridge",id:"applications/MAP-Bridge",title:"Map Bridge",description:"Proposer:*  zcheng9",source:"@site/applications/MAP-Bridge.md",sourceDirName:"applications",slug:"/applications/MAP-Bridge",permalink:"/applications/MAP-Bridge",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/MAP-Bridge.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Description",id:"project-description",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Implement Substrate MMR Module",id:"milestone-1-implement-substrate-mmr-module",level:3},{value:"Milestone 2 Integrate ULVP module into substrate",id:"milestone-2-integrate-ulvp-module-into-substrate",level:3},{value:"Future Plans",id:"future-plans",level:2}],m={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"map-bridge"},"Map Bridge"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:"),"  zcheng9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 1CFM6QDvxwXEV3dUN9x2ftqq4rwAfkxN9W"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/89#issuecomment-792968983"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This project deliver a bridge  relay  to connect Polkadot and other PoW chains(Ethereum specific in this proposal). The bridge  relay can provide an non-interactive, succinct proof of POW  of a bridged chain based on ULVP (ultra-light verification protocol) .  And based on such proof,  it can further verify  inner state of certain account or transaction inclusion proof."),(0,i.kt)("h3",{id:"project-description"},"Project Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MAP-Bridge would implement a new data structure called merkle mountain range(MMR) which contain the information of  all confirmed block headers. And the root of MMR would be include in the new mined block somewhere."),(0,i.kt)("li",{parentName:"ul"},"In order to achieve this, we have to include the most recently MMR root in the new mined blocks in both Ethereum and Map bridge(parachain in Polkadot). For MAP bridge we can simply include it in the block header. For Ethereum, we have three possible way: firstly we could propose a EIP to ensure  block header of Ethereum including MMR root; secondly we could deployed a contract in Ethereum to maintain most recent MMR root; and the last choice is to use CHT root in Ethereum instead of MMR root to do the verification work. In our proposal, we prefer to use the second method. "),(0,i.kt)("li",{parentName:"ul"},"MAP-Bridge is build on a verification module called Ultra-Light Verification Protocol (ULVP). ULVP origins from the paper ",(0,i.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/226.pdf"},'"Flyclient:  Super-Light Clients for Cryptocurrencies"'),".  Any node could verify the existence of any transaction or the balance of any account with very limited data through ULVP compare to SPV. "),(0,i.kt)("li",{parentName:"ul"},"The verification mechanism is as following:"),(0,i.kt)("li",{parentName:"ul"},"The verifier connects some randomly selected full node in the destiny chain (at least one of these must be honest) and request them sending their tail blocks and corresponding proofs. Then the verifier validates the proof with the longest tail block. If it is a valid proof, the verifier would select this tail block as his choice and save it for next step. Otherwise he would drop this full node  and check the second-longest tail block. The verifier continues this steps until it finds the tail block with valid proof. Based on our assumption, he connects at least one honest prover. Thus this algorithm would eventually find the honest longest tail block."),(0,i.kt)("li",{parentName:"ul"},"The verifier connects some other randomly selected full node in the destiny chain and obtains  the block header in specified height and the corresponding MMR branch proof of this header upon to the most recent MMR. The verifier has the root of the most recent MMR which include in the tail block header. He could then validate the MMR branch proof based on it. If he get the valid block header he can save it for next step, otherwise keep doing it for another full node."),(0,i.kt)("li",{parentName:"ul"},"This step is similar to SPV.  The verifier connects some other randomly selected full node in the destiny chain.  The he could request  them sending the detail of the transaction in specified height with the merkle branch proof up to the transaction root in block header( for state of any account is similar since the state root is stored in the header too). After that he could check the validity of the merkle proof. If the check passed, he could be sure that this transaction is indeed included in the destiny chain. If not, he could try another full node. If none of them could provide valid proof, he would know this transaction is not included in the destiny chain yet. "),(0,i.kt)("li",{parentName:"ul"},"More details of ULVP could be found ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/marcopolo-protocol/marcopolo-protocol-sub-protocol-ultra-light-verification-protocol-ulvp-adc73eccf566"},"Here"),".")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chan"),(0,i.kt)("li",{parentName:"ul"},"Seabook"),(0,i.kt)("li",{parentName:"ul"},"LYU.L")),(0,i.kt)("h3",{id:"team-website"},"Team Website"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maplabs.io/"},"https://www.maplabs.io/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"MAP labs"),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dr. Chan received the Ph.D. degree in applied mathematics from Illinois Institute of Technology, Illinois, USA in 2017. His research interests include consensus algorithms, P2P protocol, cryptography, blockchain interoperbility."),(0,i.kt)("li",{parentName:"ul"},"Dr. Seabook is  based in Australia and get his Blockchain PhD. from Australian Deakin University. He has more than 15 years of professional software design, architecture and development experiences. He has worked as Chief Technology Officer and Senior Architect in Telstra, Accenture, Qantas, eBay and Citibank."),(0,i.kt)("li",{parentName:"ul"},"LYU.L holds a master degree from Tsinghua University and also a member of China national blockchain and distributed ledger committee. He has more than 13 years of experience inlarge-scale computing and algorithm, with many patents such as consensus algorithm and blockchain transaction.")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Philasande-map/mapbridge"},"https://github.com/Philasande-map/mapbridge"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," $ 2 BTC.")),(0,i.kt)("h3",{id:"milestone-1-implement-substrate-mmr-module"},"Milestone 1 Implement Substrate MMR Module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:"),"1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 1 BTC\nIn this milestone, we will build Substrate-based MMR for MAP bridge and also provide the MMR proof generating and verifying method in runtime module . This is a preliminary for ULVP module which can verify the validity of tail block of a certain blockchain carry heaviest proof of work.  Furthermore, we will implement  the block header storage functionality. This would make the blockchain  could  manage the MMR\uff08such as appending new blocks into blockchain and retrieving the MMR based on the MMR root  in a certain block header, etc. \uff09. We will provide proper unit-test for this milestone.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"This milestone will have unit-test for MMR trie, MMR proof runtime api and MMR manager. In the guide we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"MMR Trie Structure"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement this MMR Trie based on the exist Library. We will fork this ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/tari-project/tari/tree/development/base_layer/mmr"},"Repo")," and realize all the functionality we need based on that. Including customlized field in MMR node, customlized merging method and MMR manager.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrae MMR proof runtime module"),(0,i.kt)("td",{parentName:"tr",align:null},"Deliver MMR proof verification in substrate SRML runtime and provide the ability to generate and manage MMR.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"AppendBlock"),(0,i.kt)("td",{parentName:"tr",align:null},"Append the current block as leaf node into MMR. Method signature:  Public bool Appendblock(Header blockheader)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"RetrieveMMR"),(0,i.kt)("td",{parentName:"tr",align:null},"Retrieve the MMR based on the root provide.   Method signature: Public *MMR RetrieveMMR(Hash root)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"GenerateProof"),(0,i.kt)("td",{parentName:"tr",align:null},"Generate the merkle branch proof in MMR. Method signature: Public ",(0,i.kt)("em",{parentName:"td"},"Proof GenerateProof("),"MMR mmr, Leafnode leaf)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"VerifyProofByRoot"),(0,i.kt)("td",{parentName:"tr",align:null},"Verify if the proof is consistent with root. Method signature: Public bool VerifyBlockByRoot(Hash root, *Proof proof)")))),(0,i.kt)("h3",{id:"milestone-2-integrate-ulvp-module-into-substrate"},"Milestone 2 Integrate ULVP module into substrate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," $1BTC\nIn this milestone, we will further implement the ULVP module and some add-on module. This would involving generating and verifying succinct proof,  specifying the cross-chain transaction, implementing the cross-chain transaction pool, building P2P network based on libp2p. Once this milestone is accomplished, the whole feature of ULVP module is complete and could be used to verify inner state of certain account or transaction inclusion proof for other blockchain. We will include proper test and documentation for this milestone")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can import the protocol.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"This milestone will have unit-test for ULVP module to ensure functionality. In the guide we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"ULVP module"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement ULVP module to retrieve the transaction or state from another blockchain. We will realize all the three verification steps we mention above using the Substrate MMR module we finished in milestone 1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"P2P Relay Substrate module"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement P2P Relay Substrate module which provide the functionality which could discover ethereum nodes and connect any ethereum node if the peer manager is not full. Once the connection has established, it use gossip to broadcast MAP parachain block announcement and cross chain transactions to ethereum, and receive message from ethereum. which contains ethereum block announcement, cross transactions, MMR Proof and Receipt Proof.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Cross-chain asset transfer demo"),(0,i.kt)("td",{parentName:"tr",align:null},"Realized a demo to enable token transfer between Polkadot parachain(MAP bridge) and Ethereum testnet. This need first deployed a contract in Ethereum testnet which maintain the MMR root of Ethereum. Next we need to deployed a mint contract in bridge parachain and a lock contract in Ethereum. If user lock some token in Ethereum to the lock contract, any node in the bridge parachain could verify this lock transaction. And the mint contract would mint the token in parachain if the lock transaction is indeed confirmed in Ethereum testnet.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"We plan to extend our bridge to most POW and POS type blockchains in the future. Through our bridge we could link more and more other blockchain systems into Polkadot Ecosystem ."))}h.isMDXComponent=!0}}]);