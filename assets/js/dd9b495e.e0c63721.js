"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[61996],{68308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},o="CryptoLab Staking Reward Collector",i={unversionedId:"applications/cryptolab-staking-reward-collector-front-end",id:"applications/cryptolab-staking-reward-collector-front-end",title:"CryptoLab Staking Reward Collector",description:"Team Name:* CryptoLab",source:"@site/applications/cryptolab-staking-reward-collector-front-end.md",sourceDirName:"applications",slug:"/applications/cryptolab-staking-reward-collector-front-end",permalink:"/applications/cryptolab-staking-reward-collector-front-end",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/cryptolab-staking-reward-collector-front-end.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1 (Implementation)",id:"milestone-1-implementation",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cryptolab-staking-reward-collector"},"CryptoLab Staking Reward Collector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," CryptoLab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x064530BBA1ea3aaE6cC68207Ec75EEa6a7C0c78b (DAI)")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"This application is in response to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md"},"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md")),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Staking Rewards Collector requests us to make a front-end UI so that non-technical-background people can utilize the tool in a simple way. As the requested features are quite similar to what we have done recently, We intend to implement the requests from the rfps on ",(0,r.kt)("a",{parentName:"p",href:"https://www.cryptolab.network"},"https://www.cryptolab.network"),"."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"We plan to utilize the current Staking Reward webpage (",(0,r.kt)("a",{parentName:"p",href:"https://www.cryptolab.network/tools/dotSR"},"https://www.cryptolab.network/tools/dotSR"),") on CryptoLab as the design base. However, we will change the data source from our DB to Staking Rewards Collector, retrieving rewards from the subscan because the subscan stores all rewards data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mockup UI")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Staking Reward Dashboard")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5772463/120571225-3fb02880-c44c-11eb-89b3-59328790e19f.png",alt:"image"})),(0,r.kt)("p",null,"See the image above, CryptoLab already have a similar page for users to query their rewards. We are going to enhance the followings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filter as requested"),(0,r.kt)("li",{parentName:"ul"},"Export to CSV or JSON")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5772463/120603398-920a3d00-c47e-11eb-9b0e-4541fecc89b5.png",alt:"image"})),(0,r.kt)("p",null,"The table content would also be re-worked to the Staking Rewards Collector one, mockup as below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5772463/120638628-f0e1ad80-c4a2-11eb-8297-911efdb9aa20.png",alt:"image"})),(0,r.kt)("p",null,"One thing needs to discuss is that is the Tax column necessary? As it is not an input variable, users cannot enter their rates in their countries. We intend to remove the column from the webpage if you're ok."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Staking Reward Filter")),(0,r.kt)("p",null,"Upon clicking the filter icon, a dialog would appear and provide the following options as requested. A help button would be in this dialog to give users hints of how to use it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5772463/120784731-fc92aa00-c55e-11eb-9dee-f71f5b3ba49c.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tech Stack")),(0,r.kt)("p",null,"Front End: Vue.js"),(0,r.kt)("p",null,"Back End: Rust, NodeJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Architecture")),(0,r.kt)("p",null,"Currently, CryptoLab is served on a single VPS, thus the Staking Rewards Collector would be an application on it. When a user want to see the rewards, the website would call an API on the ",(0,r.kt)("em",{parentName:"p"},"cryptolab-web-backend"),", and it then spawns a thread to call the Staking Rewards Collector and parse the responses in files. The image below show the concept of architecture of the service."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5772463/120573135-b0a50f80-c44f-11eb-912a-d625ba4112fd.png",alt:"image"})),(0,r.kt)("p",null," The modules in white blocks are what we have now. We plan to call Staking Rewards Collector from the ",(0,r.kt)("em",{parentName:"p"},"cryptolab-web-backend")," and parse the json output to respond to the query from the website."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"The staking-rewards-collector is a tool for gathering staking rewards for given addresses and cross-referencing those with daily price data. It is a handy tool for every validator and nominator in the ecosystem. However, since it currently has a CLI and requires technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users reach this tool and enjoy the benefits."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Yu-Kai Tseng ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yktseng"},"GitHub")," has a master's degree in Computer Science. He also had 9-year working experience in developing Industrial Network Management Softwares/Services and is now a freelancer. Yu-kai is familiar with backend service development and had experience in leading large distributed system design and development.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Yao-Hsin Chen ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iisaint"},"GitHub")," has a Ph.D. in Computer Science focusing on information security. He is a big believer in blockchain and is a co-founder of a blockchain-based solar technology company in Taiwan. Currently, he is organizing a small start-up to deliver services in the Polkadot ecosystem."))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Yu-kai Tseng"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:tanistseng@gmail.com"},"tanistseng@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.cryptolab.network"},"https://www.cryptolab.network"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"We have already developed the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cryptolab.network"},"Cryptolab.Network")," website and telegram bots for both Kusama and Polkadot validators, which were tipped from both chain's councils."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cryptolab-network/polkadot-staking-site"},"https://github.com/cryptolab-network/polkadot-staking-site")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cryptolab-network/cryptolab-web-server"},"https://github.com/cryptolab-network/cryptolab-web-server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cryptolab-network/chain-data-collector"},"https://github.com/cryptolab-network/chain-data-collector"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yktseng"},"https://github.com/yktseng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iisaint"},"https://github.com/iisaint"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Original ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md"},"RFP")," (requests for proposal)")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"milestone-1-implementation"},"Milestone 1 (Implementation)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 15 days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 4000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. (1 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. (2 days)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. (3 days)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate Staking Rewards Collector to CryptoLab"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop CryptoLab backend so that it can call the Staking Rewards Collector and parse the output files. (2 days)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate Staking Rewards Collector to CryptoLab Website"),(0,r.kt)("td",{parentName:"tr",align:null},"Add RESTful APIs to allow parameter input and retrieve the output files. (1 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"UI for filter"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop a dialog to allow user input necessary parameters. (1 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"UI for data visualizer"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the table on our current Staking Reward Viewer to fit the requested one. (1 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down List for download report"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the download button to allow users select either CSV or JSON. (0.5 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Help page"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement help texts and descriptions for users. (0.5 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7."),(0,r.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"Deploy the code on CryptoLab. (1 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8."),(0,r.kt)("td",{parentName:"tr",align:null},"Test live environment"),(0,r.kt)("td",{parentName:"tr",align:null},"Test on both Chrome and Firefox and provide a report (1 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9."),(0,r.kt)("td",{parentName:"tr",align:null},"Polishing"),(0,r.kt)("td",{parentName:"tr",align:null},"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc. (TBD days)")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Ask users to enter the ",(0,r.kt)("em",{parentName:"p"},"Start Balance")," is bothersome. To further enhance the Staking Rewards Collector, it is technically possible to auto fill the ",(0,r.kt)("em",{parentName:"p"},"Start Balance")," of the start date by recording the block number at 12:00 am each day and then collecting the balances during the block number from Polkascan. However, it requires specific works and would not be included in the planned 3-week duration. We may do it if feedbacks from users are positive."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5772463/120570179-18f0f280-c44a-11eb-9ec6-3a68e91803b3.png",alt:"image"})),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,r.kt)("p",null,"We see the RFP on the github and think it is very similar to what we have already done. We think we are suitable for working on it because CryptoLab has provided tools for both validators and nominators. Thus current CryptoLab users can enjoy the benefit from the Staking Rewards Collector. The CryptoLab can also attract more Staking Rewards Collector users to use the site."))}m.isMDXComponent=!0}}]);