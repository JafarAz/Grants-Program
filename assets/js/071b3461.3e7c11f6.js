"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[44109],{59580:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},i="Dot Marketplace v3",o={unversionedId:"applications/dot_marketplace-Phase3",id:"applications/dot_marketplace-Phase3",title:"Dot Marketplace v3",description:"- Status: Open",source:"@site/applications/dot_marketplace-Phase3.md",sourceDirName:"applications",slug:"/applications/dot_marketplace-Phase3",permalink:"/applications/dot_marketplace-Phase3",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/dot_marketplace-Phase3.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"<strong>Repository Hierarchy</strong>",id:"repository-hierarchy",level:3},{value:"<strong>Ecosystem Fit</strong>",id:"ecosystem-fit",level:3},{value:"<strong>Team \ud83d\udc65</strong>",id:"team-",level:2},{value:"<strong>Team members</strong>",id:"team-members",level:3},{value:"<strong>Contact</strong>",id:"contact",level:3},{value:"<strong>Legal Structure</strong>",id:"legal-structure",level:3},{value:"<strong>Team&#39;s experience</strong>",id:"teams-experience",level:3},{value:"<strong>Team Code Repos</strong>",id:"team-code-repos",level:3},{value:"<strong>Development Status \ud83d\udcd6</strong>",id:"development-status-",level:2},{value:"<strong>Development Roadmap</strong> \ud83d\udd29",id:"development-roadmap-",level:2},{value:"<strong>Milestone 1</strong>",id:"milestone-1",level:3},{value:"<strong>Milestone 2</strong>",id:"milestone-2",level:3},{value:"<strong>Milestone 3</strong>",id:"milestone-3",level:3},{value:"<strong>Additional Project Details</strong>",id:"additional-project-details",level:3},{value:"<strong>Future Plans</strong>",id:"future-plans",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dot-marketplace-v3"},"Dot Marketplace v3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project Name:")," Dot Marketplace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Wow Labz"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qv954czydwz72egdzhkkuw85jegwrsmlt8a5xs8 (BTC - Bitcoin)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Level:")," 2")),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Links To Previous Approved Grants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md"},"Phase 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md"},"Phase 2"))),(0,r.kt)("p",null,"This is phase 3 of Dot Marketplace, which is a general-purpose decentralized marketplace created as a Substrate pallet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dot Marketplace can be used by any decentralized project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India Buildathon (2021)."),(0,r.kt)("li",{parentName:"ul"},"In the previous phases we have built a decentralised bounty platform and a decentralised court for dispute resolution. More details can be found on the respective grant proposals shared above.")),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"The current scope of work involves ",(0,r.kt)("strong",{parentName:"p"},"milestone-based submissions")," in which a project is divided into multiple configurable milestones(min 1 and max 5) to allow parallel or sequential execution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each project must have at least one milestone and can have a maximum of five milestones (configurable)"),(0,r.kt)("li",{parentName:"ul"},"Each milestone has its independent bidding system where multiple workers can place their bids"),(0,r.kt)("li",{parentName:"ul"},"The publisher can select a bid as per the requirement and ratings of the worker and other criteria that can be added to a user account."),(0,r.kt)("li",{parentName:"ul"},"A worker can bid for multiple milestones of a single project based on their expertise."),(0,r.kt)("li",{parentName:"ul"},"A project reaches completion only if all milestones in the project are completed and approved by the publisher."),(0,r.kt)("li",{parentName:"ul"},"In our current implementation all milestones are independent, hence they can be completed and approved by the publisher irrespective of the overall project status."),(0,r.kt)("li",{parentName:"ul"},"Based on the requirements, a publisher can add more milestones to a project even after it is pushed to the market, provided the total number of milestones does not exceed 5 (configurable)"),(0,r.kt)("li",{parentName:"ul"},"Decentralized IPFS Storage for project materials using NFTStorage Provider. Each material will have a unique CID that can be accessed by both Publisher and Worker."),(0,r.kt)("li",{parentName:"ul"},"Advance Search by task tags, ids & title."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/WowLabz/dot-marketplace-v2"},"decentralized court")," implemented in phase 2 is functional for each milestone of a project"),(0,r.kt)("li",{parentName:"ul"},"All of the above features will be updated as a new feature for the existing marketplace pallet. Similarly, the selekatal UI will be updated to showcase the same."),(0,r.kt)("li",{parentName:"ul"},"A new file server written using the rocket framework will be provided for the integration with IPFS (using NftStorage). ")),(0,r.kt)("p",null,"The flow of tasking pallet with milestone based submission"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/66478092/190300655-1d2085b3-b728-4ced-8238-f262a9c5c5f8.png",alt:"Tasking-Court-Flow4 drawio"})),(0,r.kt)("h3",{id:"repository-hierarchy"},(0,r.kt)("strong",{parentName:"h3"},"Repository Hierarchy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node\n\u251c\u2500\u2500 build.rs\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 chain_spec.rs\n    \u251c\u2500\u2500 cli.rs\n    \u251c\u2500\u2500 command.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 main.rs\n    \u251c\u2500\u2500 rpc.rs\n    \u2514\u2500\u2500 service.rs\npallets\n\u251c\u2500\u2500 pallet-chat\n\u2502   \u251c\u2500\u2500 Cargo.toml\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 benchmarking.rs\n\u2502       \u251c\u2500\u2500 lib.rs\n\u2502       \u251c\u2500\u2500 mock.rs\n\u2502       \u2514\u2500\u2500 tests.rs\n\u2514\u2500\u2500 pallet-tasking\n    \u251c\u2500\u2500 Cargo.toml\n    \u251c\u2500\u2500 README.md\n    \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 benchmarking.rs\n        \u251c\u2500\u2500 lib.rs\n        \u251c\u2500\u2500 mock.rs\n        \u251c\u2500\u2500 utils.rs\n        \u2514\u2500\u2500 tests.rs\nruntime\n\u251c\u2500\u2500 build.rs\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n")),(0,r.kt)("p",null,"The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running."),(0,r.kt)("h3",{id:"ecosystem-fit"},(0,r.kt)("strong",{parentName:"h3"},"Ecosystem Fit")),(0,r.kt)("p",null,"We believe this work could be helpful for any Polkadot parachains/parathreads interested in including a marketplace with on-chain dispute resolution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Almost all parachains/parathreads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilizing a marketplace like Dot Marketplace, where technical, marketing, or governance-centric projects can be published as bounties. And community members are invited to bid for and execute them."),(0,r.kt)("li",{parentName:"ul"},"A milestone-based submission will enhance the functionality of the marketplace and provide a more comprehensive user experience for both the worker and the publisher."),(0,r.kt)("li",{parentName:"ul"},"The on-chain court will act as a dispute resolution mechanism between users involved in a project. A set of community members meeting specific criteria get to be a part of the jury for the dispute and cast votes, based on which a decision is reached."),(0,r.kt)("li",{parentName:"ul"},"To facilitate easier communication between a customer and a worker, a one-to-one chat feature is also created.")),(0,r.kt)("h2",{id:"team-"},(0,r.kt)("strong",{parentName:"h2"},"Team \ud83d\udc65")),(0,r.kt)("h3",{id:"team-members"},(0,r.kt)("strong",{parentName:"h3"},"Team members")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/startupamit/"},(0,r.kt)("strong",{parentName:"a"},"Amit Singh"))," ","[ Product Manager ]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/roshit/"},(0,r.kt)("strong",{parentName:"a"},"Roshit Omanakuttan"))," ","[ Technical Architect ]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/loakesh-indiran-8a2282140"},(0,r.kt)("strong",{parentName:"a"},"Loakesh Indiran"))," ","[ Full Stack Developer ]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.linkedin.com/in/tejas-vijay-1430a3190"},(0,r.kt)("strong",{parentName:"a"},"Tejas Gaware"))," ","[ Backend Developer ]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/rajat-petwal-947440197/"},(0,r.kt)("strong",{parentName:"a"},"Rajat Petwal"))," ","[ Backend Developer ]")),(0,r.kt)("h3",{id:"contact"},(0,r.kt)("strong",{parentName:"h3"},"Contact")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Amit Singh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," amit (dot) singh (@) wowlabz.com"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.wowlabz.com/"},"http://www.wowlabz.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://dotmarketplace.co/"},"Dot marketplace website"))),(0,r.kt)("h3",{id:"legal-structure"},(0,r.kt)("strong",{parentName:"h3"},"Legal Structure")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Wow Internet Labz Private Limited")),(0,r.kt)("h3",{id:"teams-experience"},(0,r.kt)("strong",{parentName:"h3"},"Team's experience")),(0,r.kt)("p",null,"Dot Marketplace is being built by the team at Wow Labz. Wow Labz is one of India's leading turnkey product development companies. The team is also building Socialli - an interoperable metaverse protocol on Polkadot. Additionally the team at Wow Labz has built ",(0,r.kt)("a",{parentName:"p",href:"https://www.polkadotindia.org/"},"Polkadot India")," - a 15,000+ community of polkadot enthusiasts predominantly from the Indian region. The team has previously built a decentralized storage protocol called Lake Network - ",(0,r.kt)("a",{parentName:"p",href:"https://lakenetwork.io/"},"https://lakenetwork.io/")," in addition to multiple dApps on Ethereum, Stellar, EOS, and Hyperledger."),(0,r.kt)("p",null,"A list of centralized and decentralised apps published can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.wowlabz.com/work/"},"here"),"."),(0,r.kt)("h3",{id:"team-code-repos"},(0,r.kt)("strong",{parentName:"h3"},"Team Code Repos")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/WowLabz/projects"},"https://github.com/orgs/WowLabz/projects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WowLabz/tasking_backend"},"https://github.com/WowLabz/tasking_backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WowLabz/tasking_frontend"},"https://github.com/WowLabz/tasking_frontend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WowLabz/yoda_creator_economy_node"},"https://github.com/WowLabz/yoda_creator_economy_node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WowLabz/dot-marketplace-v2"},"https://github.com/WowLabz/dot-marketplace-v2"))),(0,r.kt)("h2",{id:"development-status-"},(0,r.kt)("strong",{parentName:"h2"},"Development Status \ud83d\udcd6")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here's a link to the approved grant proposal for the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md"},"first phase")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md"},"second phase")),(0,r.kt)("li",{parentName:"ul"},"We are in touch with @takahser and @Rouven from the Web 3 Grants and Treasuries team, respectively.")),(0,r.kt)("h2",{id:"development-roadmap-"},(0,r.kt)("strong",{parentName:"h2"},"Development Roadmap")," \ud83d\udd29"),(0,r.kt)("p",null,"*",(0,r.kt)("strong",{parentName:"p"},"*Overview**")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2.0 Months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2.39"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 29,925 USD")),(0,r.kt)("h3",{id:"milestone-1"},(0,r.kt)("strong",{parentName:"h3"},"Milestone 1")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 3.0 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE: 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PTE: 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 12,725 USD")),(0,r.kt)("p",null,"The main deliverable for this milestone is to facilitate the creation of a project that can accommodate multiple milestones that may or may not depend on each other. These functionalities will be implemented as an upgrade to the existing marketplace pallet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sr no."),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a"),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c"),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker image of the build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Project Structure"),(0,r.kt)("td",{parentName:"tr",align:null},"The existing application only allows one milestone per project. Phase 3 modifies it to allow a publisher to add multiple milestones under the same project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple Bidders"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple bidders can now bid for the same milestone, and the publisher can choose one worker based on the bidder ratings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Escrow"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple subaccounts are created for a project to account for each milestone and make it easier to store all funds for transfer/exchange.")))),(0,r.kt)("h3",{id:"milestone-2"},(0,r.kt)("strong",{parentName:"h3"},"Milestone 2")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2.0 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 9,225 USD")),(0,r.kt)("p",null,"In continuation to previous work, this milestone involves the creation of an on-chain decentralized court to handle dispute resolution. Each milestone can go into a dispute on the same scope as mentioned in the second phase of dot marketplace. The other milestones in a project are not affected by the dispute of one of the milestones. The court pallet will be upgraded to support these new features."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sr no."),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a"),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c"),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker image of the build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Decentralized Court Module"),(0,r.kt)("td",{parentName:"tr",align:null},"An on-chain decentralized court for dispute resolution within the ecosystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1a"),(0,r.kt)("td",{parentName:"tr",align:null},"Disapprove Milestone"),(0,r.kt)("td",{parentName:"tr",align:null},"In the case of a customer not being satisfied with the work submitted by the service provider (worker). A set of jurors is shortlisted (court summon) to resolve the dispute and pass a verdict.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1b"),(0,r.kt)("td",{parentName:"tr",align:null},"Disapprove Rating"),(0,r.kt)("td",{parentName:"tr",align:null},"The customer or the service provider, once they have received their rating for a particular milestone and are not satisfied with it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1c"),(0,r.kt)("td",{parentName:"tr",align:null},"General Dispute"),(0,r.kt)("td",{parentName:"tr",align:null},"A general dispute function for cases that do not fall under the categories mentioned in 1a and 1b.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Voting module"),(0,r.kt)("td",{parentName:"tr",align:null},"Each juror can review the dispute and cast their vote, which also includes their rating for both the customer and the worker. After two days, all the juror votes are counted, and a winner is identified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Frontend App"),(0,r.kt)("td",{parentName:"tr",align:null},"Supporting frontend UI to test the aforementioned functionality.")))),(0,r.kt)("h3",{id:"milestone-3"},(0,r.kt)("strong",{parentName:"h3"},"Milestone 3")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 3.0 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 7975 USD")),(0,r.kt)("p",null,"The main deliverables in this milestone are to use decentralized IPFS based storages to store all the files realated to tasks & advanced search. A file server integrated to nft storage will provided, using rocket framework & the search feature will be an update to the makerplace pallet. The skeletal UI will also be updated to showcase all the new features in Phase3."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sr no."),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a"),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c"),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker image of the build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Decentralized Storage"),(0,r.kt)("td",{parentName:"tr",align:null},"All tasks related docs will be stored on a decentralized IPFS platform.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Search"),(0,r.kt)("td",{parentName:"tr",align:null},"Search based on task progress, tags, tasks or milestone id's.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Frontend App"),(0,r.kt)("td",{parentName:"tr",align:null},"Supporting frontend UI to test the aforementioned functionality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Website"),(0,r.kt)("td",{parentName:"tr",align:null},"Dedicated one-page website for Dot Marketplace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"Website article showing motivation behind phase 3 of dot marketplace and how to make the best use of it.")))),(0,r.kt)("h3",{id:"additional-project-details"},(0,r.kt)("strong",{parentName:"h3"},"Additional Project Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Technology stack being used",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rust, Substrate, React, Python, centralized cloud storage")))),(0,r.kt)("h3",{id:"future-plans"},(0,r.kt)("strong",{parentName:"h3"},"Future Plans")),(0,r.kt)("p",null,"This is the last phase in our current roadmap. Post this we would focus on partnerships with chains on the dotsama ecosystem for integrating DotMarketplace as their native bounty management tool (this work has already started). If future, if the traction is great, we could create a fresh proposal for an excellent UI or integrate DotMarketplace within PolkaJS Apps itself with native support for multiple tokens besides DOT."),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website, Polkadot India Buildathon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have been working on this roadmap since we applied for the Web3 grant")))}u.isMDXComponent=!0}}]);