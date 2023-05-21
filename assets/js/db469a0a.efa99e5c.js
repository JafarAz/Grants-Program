"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[36883],{2392:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},i="Contracts performance messurement tool",o={unversionedId:"applications/contracts-tool",id:"applications/contracts-tool",title:"Contracts performance messurement tool",description:"- Team Name: Gloslab",source:"@site/applications/contracts-tool.md",sourceDirName:"applications",slug:"/applications/contracts-tool",permalink:"/applications/contracts-tool",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/contracts-tool.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Generating benchmarking results",id:"generating-benchmarking-results",level:4},{value:"Integrating Smart-bench with CI/CD",id:"integrating-smart-bench-with-cicd",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Smart-bench updated \u2014 Basic functionality",id:"milestone-1-smart-bench-updated--basic-functionality",level:3},{value:"Milestone Smart-bench in CI/CD flow \u2014 Additional features",id:"milestone-smart-bench-in-cicd-flow--additional-features",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contracts-performance-messurement-tool"},"Contracts performance messurement tool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Gloslab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," Fiat 18.05.2023, 20:22"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The key objective of this grant is to build a tool which allows to compare contracts performance and to track its regressions.\nSubject of comparison are solidity, and ink! contracts running on parachains (pallet-contract and pallet-evm).\nTool will be integrated with CI and running each night, generating measurements data and providing its visualizations."),(0,r.kt)("p",null,"Our team has strong interest in contracts development on Polkadot and building Polkadot ecosystem."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"generating-benchmarking-results"},"Generating benchmarking results"),(0,r.kt)("p",null,"Project is based on smart-bench Parity repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smart-bench"},"https://github.com/paritytech/smart-bench")," and developed in rust language.\nApart of existing ink! and solidity contracts support, will be introduces support for solang compiled contract running on pallet-contract.\nFinally the tool will measure performance of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ink! contract run on pallet-contract (currently supported)"),(0,r.kt)("li",{parentName:"ul"},"Solidity contracts compiled with solc run on pallet-evm (supported but outdated)"),(0,r.kt)("li",{parentName:"ul"},"Solidity contracts compiled with solang and run on pallet-contract (new functionality)")),(0,r.kt)("p",null,"The tool is run with following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"smart-bench [OPTIONS] --instance-count <INSTANCE_COUNT> --call-count <CALL_COUNT> <TYPE> [CONTRACTS] --url <WS_NODE_ADRESS>\n")),(0,r.kt)("p",null,"where as a type can be used ink-wasm, sol-wasm or evm"),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"smart-bench ink-wasm erc20 erc1155 --instance-count 10 --call-count 20 --url ws://localhost:9988\nsmart-bench sol-wasm erc20 erc1155 --instance-count 10 --call-count 20 --url ws://localhost:9988\nsmart-bench evm erc20 erc1155 --instance-count 10 --call-count 20 --url ws://localhost:9988\n")),(0,r.kt)("p",null,"The performance measurements are run against test network, which will be setup using Zombienet.\nRequired scripts, which spins network and run smart-bench, will be delivered with the tool.\nSmart bench collects following stats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Block number\nPoV size \nBlock Weight - reference time and proof size\nWitness\nBlock size\nNumber of extrinsics processed in block\n")),(0,r.kt)("h4",{id:"integrating-smart-bench-with-cicd"},"Integrating Smart-bench with CI/CD"),(0,r.kt)("p",null,"Architecture for performance tracking tooling is built upon the concept of ",(0,r.kt)("a",{parentName:"p",href:"https://githubnext.com/projects/flat-data"},"Flat Data"),", whereas sets of data is stored within repository itself. Data is being created and processed for storage on a timely schedule."),(0,r.kt)("p",null,"Github repository used in this architecture is self sufficient in terms of spinning up benchmarking environment, storing and processing benchmark results created within run of Github Action workflow. Repository contains all configuration files required for provisioning of benchmarking environment. Other provided utilities also allow to effortlessly start local Grafana and InfluxDB instances (available as Dockerfiles and Docker Compose configuration) for out of the box experience of running visualizations against data where all of this is part of the same repository. For syncing of most recent data standard git operations apply (sync local git repository with remote origin to get latest data)."),(0,r.kt)("p",null,"Github Action is responsible for running smart-bench software against Zombienet to create benchmarking results. Results are then post-processed to also include various metadata about environment used for its creation. Results are then committed and pushed to the repository. Metadata of benchmark results consists of various properties such as (consider following as draft, to be defined exactly as implementation proceeds):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commit hashes of Zombienet, parachain implementation (Moonbeam or contract-pallet based) and smart-bench"),(0,r.kt)("li",{parentName:"ul"},"Human readable versions of above if can be determined"),(0,r.kt)("li",{parentName:"ul"},"Type of contract"),(0,r.kt)("li",{parentName:"ul"},"Contract compiler"),(0,r.kt)("li",{parentName:"ul"},"Parachain to run the contract")),(0,r.kt)("p",null,"Measurements themselves are raw data as returned by smart-bench software. "),(0,r.kt)("p",null,"Performance tracking is concerned with Moonbeam and pallet-contracts. Coverage of the benchmarks strives to create results for binary release of parachains. So for every binary release of parachain, results will be created and stored in the repository."),(0,r.kt)("p",null,"Summary of items provided by repository:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dockerfiles to run grafana, influxdb, smart-bench"),(0,r.kt)("li",{parentName:"ul"},"Docker Compose to ease local setup of all components"),(0,r.kt)("li",{parentName:"ul"},"Scripts to transform smart-bench output to data format ingestible by InfluxDB"),(0,r.kt)("li",{parentName:"ul"},"Scripts uploading data to InfluxDB will try to parse benchmarking data from smart-bench provided format and accompany them with metadata to create contexts for visualizations. Repository will also provide configuration files for dashboards of Grafana")),(0,r.kt)("p",null,"The Grafana dashboard provided offers a comprehensive regression detection feature, enabling the visualization of performance comparisons between Ink! and pallet-contracts against Solidity and Moonbeam. The dashboard prominently displays the contracts' throughput as a key metric, calculated individually for each contract type. The graph within the dashboard showcases the temporal dimension on the X-axis, representing dates, while the Y-axis represents the throughput. This graph comprises three distinct data series, each corresponding to one of the contract types. The graph's are preserved as PNG dumps and stored in the repository."),(0,r.kt)("p",null,"Limitations:\nthe project does not compile the contracts by itself, contracts are delivered in binary form."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"The project is useful for ecosystem at contracts development stage to track its performance and regressions on Polkadot.\nIt is going to be used also to measure ink! language performance by Parity core team."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sebastian Miasojed"),(0,r.kt)("li",{parentName:"ul"},"Karol Kokoszka")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Sebastian Miasojed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:s.miasojed@gmail.com"},"s.miasojed@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ")),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Racula-Janusza Korczaka 15B, 66-004 Zielona G\xf3ra, Poland, NIP:5961572852"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Gloslab Sebastian Miasojed")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"We combine development and architecting skills from embedded world, cloud systems and apply them to crypto world.\nUntil now the team has shown his proficiency aligning smart-bench with newest libraries required by ink! contracts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/smart-bench/pull/32"},"https://github.com/paritytech/smart-bench/pull/32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/smart-bench/pull/31"},"https://github.com/paritytech/smart-bench/pull/31")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/smart-bench/pull/28"},"https://github.com/paritytech/smart-bench/pull/28")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/blockstats/pull/22"},"https://github.com/paritytech/blockstats/pull/22"))),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/smiasojed"},"https://github.com/smiasojed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/karolk91"},"https://github.com/karolk91"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sebastian-miasojed-83b6123"},"https://www.linkedin.com/in/sebastian-miasojed-83b6123")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/karol-kokoszka-a66959103"},"https://www.linkedin.com/in/karol-kokoszka-a66959103"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"Work has been started, smart bench has been updated with new libraries and is able to build and run on test net with ink! contracts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/smart-bench/pull/32"},"https://github.com/paritytech/smart-bench/pull/32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/smart-bench/pull/31"},"https://github.com/paritytech/smart-bench/pull/31")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/smart-bench/pull/28"},"https://github.com/paritytech/smart-bench/pull/28")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/blockstats/pull/22"},"https://github.com/paritytech/blockstats/pull/22"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  0.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 15000 EUR")),(0,r.kt)("h3",{id:"milestone-1-smart-bench-updated--basic-functionality"},"Milestone 1 Smart-bench updated \u2014 Basic functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 5 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  0.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 6500 EUR")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up test net and run contracts with transactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Create Docker and docker-compose related configurations to build and start smart-bench, Zombienet and parachains to generate benchmarking results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Updated evm contracts"),(0,r.kt)("td",{parentName:"tr",align:null},"We will update tool with support for newest Moonbeam parachain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Support for solidity-wasm contracts"),(0,r.kt)("td",{parentName:"tr",align:null},"We will deliver support for solidity contract compiled with solang to wasm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Launch scripts"),(0,r.kt)("td",{parentName:"tr",align:null},"Scripts which will allow to launch the tool on Zombienet.")))),(0,r.kt)("h3",{id:"milestone-smart-bench-in-cicd-flow--additional-features"},"Milestone Smart-bench in CI/CD flow \u2014 Additional features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 7 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  0,5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 8500 EUR")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the performance tracking tooling to generate the graphs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Create Docker and docker-compose related configurations to run Grafana and InfluxDB pre-configured with dashboards and measurements.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish article on Medium that explains what was done/achieved as part of the grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Github Actions benchmark jobs"),(0,r.kt)("td",{parentName:"tr",align:null},"Create workflow and implement a job to utilize Dockerized benchmarking for generating results and uploading them to repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Results processing tools"),(0,r.kt)("td",{parentName:"tr",align:null},"Implementation of tooling to translate smart-bench output format to format of InfluxDB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Github Actions workflow"),(0,r.kt)("td",{parentName:"tr",align:null},"Create complete workflow running parallel jobs based on matrix strategy for all missing measurements.")))),(0,r.kt)("p",null,"..."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"We are going to promote the project writing article and involve other developers to maintain it in the future"),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Parity team"))}u.isMDXComponent=!0}}]);