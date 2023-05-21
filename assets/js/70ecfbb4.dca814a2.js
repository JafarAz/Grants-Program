"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[95731],{52797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(95657);const l={},i="polkashots.io",r={unversionedId:"applications/polkashots",id:"applications/polkashots",title:"polkashots.io",description:"Proposer:* Nicolas Ochem",source:"@site/applications/polkashots.md",sourceDirName:"applications",slug:"/applications/polkashots",permalink:"/applications/polkashots",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/polkashots.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"polkadot-snapshot-generator",id:"polkadot-snapshot-generator",level:4},{value:"polkashots.io",id:"polkashotsio-1",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Terraform",id:"terraform",level:5},{value:"Kubernetes",id:"kubernetes",level:5},{value:"Docker",id:"docker",level:4},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"polkashotsio"},"polkashots.io"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," Nicolas Ochem"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qu45ws52gkjgmwgu8gmqh2ejkcf4clt93jnnvsm")),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Implement, release and maintain a snapshot website for Polkadot and Kusama."),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,"Substrate has an ",(0,o.kt)("inlineCode",{parentName:"p"},"--export-chain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--import-chain")," feature to allow node operators to sync faster."),(0,o.kt)("p",null,"This is a key feature to be able to recover quickly in case of node failure. This results in decreased downtime, which is beneficial for the ecosystem."),(0,o.kt)("p",null,"This work will consist of an open source project, and a production website."),(0,o.kt)("h4",{id:"polkadot-snapshot-generator"},"polkadot-snapshot-generator"),(0,o.kt)("p",null,"The open-source project, ",(0,o.kt)("inlineCode",{parentName:"p"},"polkadot-snapshot-generator"),", will consist of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"infrastructure code for running a Polkadot node (or Kusama, or any substrate node) on Kubernetes on a cloud platform, deployed with Terraform"),(0,o.kt)("li",{parentName:"ul"},"code to take filesystem-level snapshot of a live chain, then run ",(0,o.kt)("inlineCode",{parentName:"li"},"export-chain")," command"),(0,o.kt)("li",{parentName:"ul"},"mechanism to upload the snapshot to a storage bucket and publish a website with the most recent snapshot"),(0,o.kt)("li",{parentName:"ul"},"a master cronjob, the ",(0,o.kt)("inlineCode",{parentName:"li"},"snapshot engine"),", that triggers snapshot creation on a schedule")),(0,o.kt)("p",null,"There will be 2 kind of generated snapshots: RocksDB and Parity DB, until RocksDB becomes deprecated."),(0,o.kt)("h4",{id:"polkashotsio-1"},"polkashots.io"),(0,o.kt)("p",null,"We will also deploy and maintain ",(0,o.kt)("a",{parentName:"p",href:"https://polkashots.io"},"https://polkashots.io"),", a website hosted on Cloud Infrastructure which will make snapshots available for free for community members."),(0,o.kt)("p",null,"The snapshot generation frequency will be configurable. 24 hours frequency seems reasonable. Nodes typically sync very fast from a 24 hour lag."),(0,o.kt)("p",null,"Snapshots will be stored on a public Google cloud storage bucket. We will be providing Polkadot and Kusama snapshots."),(0,o.kt)("p",null,"The snapshots will be clearly identified by block height and block hash. Hyperlinks will be provided to the main indexing websites (Polkascan, Polkastats) so the user can verify that the snapshot they are downloading is indeed the legitimate Polkadot chain."),(0,o.kt)("p",null,"Additionally, the snapshots will be hashed and a signature will be published on the polkashots.io website."),(0,o.kt)("p",null,"There will be static links (such as ",(0,o.kt)("a",{parentName:"p",href:"https://polkashots.io/dot/rocksdb"},"https://polkashots.io/dot/rocksdb"),") that always point to a recent snapshot, which should simplify setup of an automated recovery mechanism."),(0,o.kt)("p",null,"We will modify our own existing projects, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/midl-dev/polkadot-k8s"},"polkadot-k8s")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/midl-dev/polkadot-k8s-aux"},"polkadot-k8s-aux"),". We will configure the default behaviour when spinning up a new chain to download snapshots automatically from the polkashots website."),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,"To my knowledge, there is no other active snapshot website for Polkadot/Kusama."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dotleap.com/how-to-import-a-pre-synced-kusama-database/"},"This page")," appears to be no longer updated."),(0,o.kt)("p",null,"People on Riot Validator Lounges regularly ask for fresh snapshots."),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nicolas Ochem")),(0,o.kt)("h3",{id:"team-website"},"Team Website"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://MIDL.dev"},"https://MIDL.dev"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("p",null,"MIDLDEV OU (incorporated in Estonia)."),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("p",null,"We are a blockchain SaaS infrastructure company and this project is in line with the range of services that we offer. We can deliver a solid codebase and a website that will be dependable, fast and relevant."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midl-dev"},"https://github.com/midl-dev")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nicolasochem"},"https://github.com/nicolasochem"))),(0,o.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/nicolasochem/"},"https://www.linkedin.com/in/nicolasochem/"))),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," One month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  0.5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 1 BTC")),(0,o.kt)("p",null,"Note: the cost will cover the initial development as well as the costs related to hosting the website and snapshots for some time."),(0,o.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  0.5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 1 BTC")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"The code will be easy to deploy, taking only a few utilities and one single command. The entire cycle - from spinup to teardown - will be clearly explained in the README")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,o.kt)("td",{parentName:"tr",align:null},"We will be posting a follow-up on ",(0,o.kt)("a",{parentName:"td",href:"https://medium.com/better-programming/a-polkadot-validator-on-kubernetes-3e694cb43841"},"our post about deploying a Polkadot validator on Kubernetes")," to explain how to use snapshots to deploy a validator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,o.kt)("td",{parentName:"tr",align:null},"A Terraform manifest to deploy all cloud resources in a simple way.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"A set of Docker container descriptions (Dockerfiles and scripts) that are used to manage the snapshot website")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,o.kt)("td",{parentName:"tr",align:null},"A Kubernetes manifest, built with Kustomize, to deploy the containers and cronjobs for snapshot creation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4."),(0,o.kt)("td",{parentName:"tr",align:null},"Testing"),(0,o.kt)("td",{parentName:"tr",align:null},"While infrastructure code is not a natural candidate for testing due to its heavy reliance on external components, we will be providing a script to parse terraform, dockerfile and kubernetes codebase and check for consistency")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5."),(0,o.kt)("td",{parentName:"tr",align:null},"Live website"),(0,o.kt)("td",{parentName:"tr",align:null},"Deploy polkashots.io with recently updated snapshots")))),(0,o.kt)("p",null,"The open-source project will have three directories, ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),". Their contents are described below."),(0,o.kt)("h5",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"The terraform module takes parameters such as ",(0,o.kt)("inlineCode",{parentName:"p"},"chain_name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"billing_account"),"... as input, and uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/google/index.html"},"Terraform GCP provider"),". It creates a Google Cloud Project and a Kubernetes cluster."),(0,o.kt)("p",null,"Inside the cluster, it deploys a configurable number of Kubernetes namespaces as described below."),(0,o.kt)("p",null,"It also configures ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/cloud-build"},"Google Cloud Build")," to automatically build the containers needed to run the snapshotting jobs, and push them to the cluster."),(0,o.kt)("p",null,"The entire setup can be destroyed with ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform destroy"),"."),(0,o.kt)("h5",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"A Kubernetes Deployment runs a Polkadot or Kusama node in a Pod with a Persistent Volume for storage."),(0,o.kt)("p",null,"This node can optionally be brought up from a snapshot itself (in case the snapshot engine itself needs to be recreated)."),(0,o.kt)("p",null,"It is not possible to do ",(0,o.kt)("inlineCode",{parentName:"p"},"export-chain")," on a running node, therefore it is necessary to leverage some cloud filesystem snapshotting capabilities."),(0,o.kt)("p",null,"A Kubernetes Cron Job triggers a pod with special privileges that in turns triggers the following Kubernetes actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"take a ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volume-snapshots/"},"Persistent Volume Snapshot")," of the Polkadot node storage"),(0,o.kt)("li",{parentName:"ul"},"create a persistent volume from the snapshot"),(0,o.kt)("li",{parentName:"ul"},'triggers a Kubernetes job called "snapshotter" which:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"mounts the persistent volume created from snapshot"),(0,o.kt)("li",{parentName:"ul"},"runs the ",(0,o.kt)("inlineCode",{parentName:"li"},"export-chain")," command against it"),(0,o.kt)("li",{parentName:"ul"},"compresses, hashes the snapshot, then uploads it to a bucket"),(0,o.kt)("li",{parentName:"ul"},"builds a Jekyll static website from source and pushes it to Firebase, with relevant metadata of the generated snapshot"))),(0,o.kt)("li",{parentName:"ul"},"tears down all objects created above")),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)("p",null,"A series of custom-build containers built for performing the actions described in the previous section, namely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"snapshot-importer: imports a snapshot when initially kicking off the setup"),(0,o.kt)("li",{parentName:"ul"},"snapshot-engine: the job that sends kubernetes control plane commands to generate a filesystem-level snapshot"),(0,o.kt)("li",{parentName:"ul"},"snapshotter: the job that performs ",(0,o.kt)("inlineCode",{parentName:"li"},"export-chain")," and pushes it to a bucket"),(0,o.kt)("li",{parentName:"ul"},"website-builder: the job that builds the Jekyll static site")),(0,o.kt)("p",null,"The Dockerfiles and associated scripts to build the containers listed above will be shipped as part of the project."),(0,o.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,o.kt)("p",null,"We will be announcing the website and the project on Medium."),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"We may be extending offers to various Substrate chains to have their snapshots hosted on our platform."),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("p",null,"Earlier we received a grant from the Tezos foundation, part of the purpose was to develop a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/midl-dev/tezos-snapshot-generator"},"similar snapshotting project")," for the Tezos blockchain."))}m.isMDXComponent=!0}}]);