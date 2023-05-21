"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[95314],{95314:(t,e,i)=>{i.r(e),i.d(e,{diagram:()=>H});var r=i(70044),n=i(81188),c=i(43047),s=i(59373),a=(i(27856),i(27484),i(17967),function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[1,4],i=[1,7],r=[1,5],n=[1,9],c=[1,6],s=[2,6],a=[1,16],o=[6,8,14,20,22,24,25,27,29,32,37,40,50,55],l=[8,14,20,22,24,25,27,29,32,37,40],h=[8,13,14,20,22,24,25,27,29,32,37,40],m=[1,26],u=[6,8,14,50,55],y=[8,14,55],g=[1,53],p=[1,52],b=[8,14,30,33,35,38,55],d=[1,67],f=[1,68],k=[1,69],_=[8,14,33,35,42,55],$={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,GG:6,document:7,EOF:8,":":9,DIR:10,options:11,body:12,OPT:13,NL:14,line:15,statement:16,commitStatement:17,mergeStatement:18,cherryPickStatement:19,acc_title:20,acc_title_value:21,acc_descr:22,acc_descr_value:23,acc_descr_multiline_value:24,section:25,branchStatement:26,CHECKOUT:27,ref:28,BRANCH:29,ORDER:30,NUM:31,CHERRY_PICK:32,COMMIT_ID:33,STR:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,openDirective:46,typeDirective:47,closeDirective:48,argDirective:49,open_directive:50,type_directive:51,arg_directive:52,close_directive:53,ID:54,";":55,$accept:0,$end:1},terminals_:{2:"error",6:"GG",8:"EOF",9:":",10:"DIR",13:"OPT",14:"NL",20:"acc_title",21:"acc_title_value",22:"acc_descr",23:"acc_descr_value",24:"acc_descr_multiline_value",25:"section",27:"CHECKOUT",29:"BRANCH",30:"ORDER",31:"NUM",32:"CHERRY_PICK",33:"COMMIT_ID",34:"STR",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",50:"open_directive",51:"type_directive",52:"arg_directive",53:"close_directive",54:"ID",55:";"},productions_:[0,[3,2],[3,2],[3,3],[3,4],[3,5],[7,0],[7,2],[11,2],[11,1],[12,0],[12,2],[15,2],[15,1],[16,1],[16,1],[16,1],[16,2],[16,2],[16,1],[16,1],[16,1],[16,2],[26,2],[26,4],[19,3],[19,5],[19,5],[19,5],[19,5],[18,2],[18,4],[18,4],[18,4],[18,6],[18,6],[18,6],[18,6],[18,6],[18,6],[18,8],[18,8],[18,8],[18,8],[18,8],[18,8],[17,2],[17,3],[17,3],[17,5],[17,5],[17,3],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,3],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[41,0],[41,1],[39,1],[39,1],[39,1],[5,3],[5,5],[46,1],[47,1],[49,1],[48,1],[28,1],[28,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,r,n,c,s){var a=c.length-1;switch(n){case 3:return c[a];case 4:return c[a-1];case 5:return r.setDirection(c[a-3]),c[a-1];case 7:r.setOptions(c[a-1]),this.$=c[a];break;case 8:c[a-1]+=c[a],this.$=c[a-1];break;case 10:this.$=[];break;case 11:c[a-1].push(c[a]),this.$=c[a-1];break;case 12:this.$=c[a-1];break;case 17:this.$=c[a].trim(),r.setAccTitle(this.$);break;case 18:case 19:this.$=c[a].trim(),r.setAccDescription(this.$);break;case 20:r.addSection(c[a].substr(8)),this.$=c[a].substr(8);break;case 22:r.checkout(c[a]);break;case 23:r.branch(c[a]);break;case 24:r.branch(c[a-2],c[a]);break;case 25:r.cherryPick(c[a],"",void 0);break;case 26:r.cherryPick(c[a-2],"",c[a]);break;case 27:case 29:r.cherryPick(c[a-2],"","");break;case 28:r.cherryPick(c[a],"",c[a-2]);break;case 30:r.merge(c[a],"","","");break;case 31:r.merge(c[a-2],c[a],"","");break;case 32:r.merge(c[a-2],"",c[a],"");break;case 33:r.merge(c[a-2],"","",c[a]);break;case 34:r.merge(c[a-4],c[a],"",c[a-2]);break;case 35:r.merge(c[a-4],"",c[a],c[a-2]);break;case 36:r.merge(c[a-4],"",c[a-2],c[a]);break;case 37:r.merge(c[a-4],c[a-2],c[a],"");break;case 38:r.merge(c[a-4],c[a-2],"",c[a]);break;case 39:r.merge(c[a-4],c[a],c[a-2],"");break;case 40:r.merge(c[a-6],c[a-4],c[a-2],c[a]);break;case 41:r.merge(c[a-6],c[a],c[a-4],c[a-2]);break;case 42:r.merge(c[a-6],c[a-4],c[a],c[a-2]);break;case 43:r.merge(c[a-6],c[a-2],c[a-4],c[a]);break;case 44:r.merge(c[a-6],c[a],c[a-2],c[a-4]);break;case 45:r.merge(c[a-6],c[a-2],c[a],c[a-4]);break;case 46:r.commit(c[a]);break;case 47:r.commit("","",r.commitType.NORMAL,c[a]);break;case 48:r.commit("","",c[a],"");break;case 49:r.commit("","",c[a],c[a-2]);break;case 50:r.commit("","",c[a-2],c[a]);break;case 51:r.commit("",c[a],r.commitType.NORMAL,"");break;case 52:r.commit("",c[a-2],r.commitType.NORMAL,c[a]);break;case 53:r.commit("",c[a],r.commitType.NORMAL,c[a-2]);break;case 54:r.commit("",c[a-2],c[a],"");break;case 55:r.commit("",c[a],c[a-2],"");break;case 56:r.commit("",c[a-4],c[a-2],c[a]);break;case 57:r.commit("",c[a-4],c[a],c[a-2]);break;case 58:r.commit("",c[a-2],c[a-4],c[a]);break;case 59:r.commit("",c[a],c[a-4],c[a-2]);break;case 60:r.commit("",c[a],c[a-2],c[a-4]);break;case 61:r.commit("",c[a-2],c[a],c[a-4]);break;case 62:r.commit(c[a],"",r.commitType.NORMAL,"");break;case 63:r.commit(c[a],"",r.commitType.NORMAL,c[a-2]);break;case 64:r.commit(c[a-2],"",r.commitType.NORMAL,c[a]);break;case 65:r.commit(c[a-2],"",c[a],"");break;case 66:r.commit(c[a],"",c[a-2],"");break;case 67:r.commit(c[a],c[a-2],r.commitType.NORMAL,"");break;case 68:r.commit(c[a-2],c[a],r.commitType.NORMAL,"");break;case 69:r.commit(c[a-4],"",c[a-2],c[a]);break;case 70:r.commit(c[a-4],"",c[a],c[a-2]);break;case 71:r.commit(c[a-2],"",c[a-4],c[a]);break;case 72:r.commit(c[a],"",c[a-4],c[a-2]);break;case 73:r.commit(c[a],"",c[a-2],c[a-4]);break;case 74:r.commit(c[a-2],"",c[a],c[a-4]);break;case 75:r.commit(c[a-4],c[a],c[a-2],"");break;case 76:r.commit(c[a-4],c[a-2],c[a],"");break;case 77:r.commit(c[a-2],c[a],c[a-4],"");break;case 78:r.commit(c[a],c[a-2],c[a-4],"");break;case 79:r.commit(c[a],c[a-4],c[a-2],"");break;case 80:r.commit(c[a-2],c[a-4],c[a],"");break;case 81:r.commit(c[a-4],c[a],r.commitType.NORMAL,c[a-2]);break;case 82:r.commit(c[a-4],c[a-2],r.commitType.NORMAL,c[a]);break;case 83:r.commit(c[a-2],c[a],r.commitType.NORMAL,c[a-4]);break;case 84:r.commit(c[a],c[a-2],r.commitType.NORMAL,c[a-4]);break;case 85:r.commit(c[a],c[a-4],r.commitType.NORMAL,c[a-2]);break;case 86:r.commit(c[a-2],c[a-4],r.commitType.NORMAL,c[a]);break;case 87:r.commit(c[a-6],c[a-4],c[a-2],c[a]);break;case 88:r.commit(c[a-6],c[a-4],c[a],c[a-2]);break;case 89:r.commit(c[a-6],c[a-2],c[a-4],c[a]);break;case 90:r.commit(c[a-6],c[a],c[a-4],c[a-2]);break;case 91:r.commit(c[a-6],c[a-2],c[a],c[a-4]);break;case 92:r.commit(c[a-6],c[a],c[a-2],c[a-4]);break;case 93:r.commit(c[a-4],c[a-6],c[a-2],c[a]);break;case 94:r.commit(c[a-4],c[a-6],c[a],c[a-2]);break;case 95:r.commit(c[a-2],c[a-6],c[a-4],c[a]);break;case 96:r.commit(c[a],c[a-6],c[a-4],c[a-2]);break;case 97:r.commit(c[a-2],c[a-6],c[a],c[a-4]);break;case 98:r.commit(c[a],c[a-6],c[a-2],c[a-4]);break;case 99:r.commit(c[a],c[a-4],c[a-2],c[a-6]);break;case 100:r.commit(c[a-2],c[a-4],c[a],c[a-6]);break;case 101:r.commit(c[a],c[a-2],c[a-4],c[a-6]);break;case 102:r.commit(c[a-2],c[a],c[a-4],c[a-6]);break;case 103:r.commit(c[a-4],c[a-2],c[a],c[a-6]);break;case 104:r.commit(c[a-4],c[a],c[a-2],c[a-6]);break;case 105:r.commit(c[a-2],c[a-4],c[a-6],c[a]);break;case 106:r.commit(c[a],c[a-4],c[a-6],c[a-2]);break;case 107:r.commit(c[a-2],c[a],c[a-6],c[a-4]);break;case 108:r.commit(c[a],c[a-2],c[a-6],c[a-4]);break;case 109:r.commit(c[a-4],c[a-2],c[a-6],c[a]);break;case 110:r.commit(c[a-4],c[a],c[a-6],c[a-2]);break;case 111:this.$="";break;case 112:this.$=c[a];break;case 113:this.$=r.commitType.NORMAL;break;case 114:this.$=r.commitType.REVERSE;break;case 115:this.$=r.commitType.HIGHLIGHT;break;case 118:r.parseDirective("%%{","open_directive");break;case 119:r.parseDirective(c[a],"type_directive");break;case 120:c[a]=c[a].trim().replace(/'/g,'"'),r.parseDirective(c[a],"arg_directive");break;case 121:r.parseDirective("}%%","close_directive","gitGraph")}},table:[{3:1,4:2,5:3,6:e,8:i,14:r,46:8,50:n,55:c},{1:[3]},{3:10,4:2,5:3,6:e,8:i,14:r,46:8,50:n,55:c},{3:11,4:2,5:3,6:e,8:i,14:r,46:8,50:n,55:c},{7:12,8:s,9:[1,13],10:[1,14],11:15,14:a},t(o,[2,124]),t(o,[2,125]),t(o,[2,126]),{47:17,51:[1,18]},{51:[2,118]},{1:[2,1]},{1:[2,2]},{8:[1,19]},{7:20,8:s,11:15,14:a},{9:[1,21]},t(l,[2,10],{12:22,13:[1,23]}),t(h,[2,9]),{9:[1,25],48:24,53:m},t([9,53],[2,119]),{1:[2,3]},{8:[1,27]},{7:28,8:s,11:15,14:a},{8:[2,7],14:[1,31],15:29,16:30,17:32,18:33,19:34,20:[1,35],22:[1,36],24:[1,37],25:[1,38],26:39,27:[1,40],29:[1,44],32:[1,43],37:[1,42],40:[1,41]},t(h,[2,8]),t(u,[2,116]),{49:45,52:[1,46]},t(u,[2,121]),{1:[2,4]},{8:[1,47]},t(l,[2,11]),{4:48,8:i,14:r,55:c},t(l,[2,13]),t(y,[2,14]),t(y,[2,15]),t(y,[2,16]),{21:[1,49]},{23:[1,50]},t(y,[2,19]),t(y,[2,20]),t(y,[2,21]),{28:51,34:g,54:p},t(y,[2,111],{41:54,33:[1,57],34:[1,59],35:[1,55],38:[1,56],42:[1,58]}),{28:60,34:g,54:p},{33:[1,61],35:[1,62]},{28:63,34:g,54:p},{48:64,53:m},{53:[2,120]},{1:[2,5]},t(l,[2,12]),t(y,[2,17]),t(y,[2,18]),t(y,[2,22]),t(b,[2,122]),t(b,[2,123]),t(y,[2,46]),{34:[1,65]},{39:66,43:d,44:f,45:k},{34:[1,70]},{34:[1,71]},t(y,[2,112]),t(y,[2,30],{33:[1,72],35:[1,74],38:[1,73]}),{34:[1,75]},{34:[1,76],36:[1,77]},t(y,[2,23],{30:[1,78]}),t(u,[2,117]),t(y,[2,47],{33:[1,80],38:[1,79],42:[1,81]}),t(y,[2,48],{33:[1,83],35:[1,82],42:[1,84]}),t(_,[2,113]),t(_,[2,114]),t(_,[2,115]),t(y,[2,51],{35:[1,85],38:[1,86],42:[1,87]}),t(y,[2,62],{33:[1,90],35:[1,88],38:[1,89]}),{34:[1,91]},{39:92,43:d,44:f,45:k},{34:[1,93]},t(y,[2,25],{35:[1,94]}),{33:[1,95]},{33:[1,96]},{31:[1,97]},{39:98,43:d,44:f,45:k},{34:[1,99]},{34:[1,100]},{34:[1,101]},{34:[1,102]},{34:[1,103]},{34:[1,104]},{39:105,43:d,44:f,45:k},{34:[1,106]},{34:[1,107]},{39:108,43:d,44:f,45:k},{34:[1,109]},t(y,[2,31],{35:[1,111],38:[1,110]}),t(y,[2,32],{33:[1,113],35:[1,112]}),t(y,[2,33],{33:[1,114],38:[1,115]}),{34:[1,116],36:[1,117]},{34:[1,118]},{34:[1,119]},t(y,[2,24]),t(y,[2,49],{33:[1,120],42:[1,121]}),t(y,[2,53],{38:[1,122],42:[1,123]}),t(y,[2,63],{33:[1,125],38:[1,124]}),t(y,[2,50],{33:[1,126],42:[1,127]}),t(y,[2,55],{35:[1,128],42:[1,129]}),t(y,[2,66],{33:[1,131],35:[1,130]}),t(y,[2,52],{38:[1,132],42:[1,133]}),t(y,[2,54],{35:[1,134],42:[1,135]}),t(y,[2,67],{35:[1,137],38:[1,136]}),t(y,[2,64],{33:[1,139],38:[1,138]}),t(y,[2,65],{33:[1,141],35:[1,140]}),t(y,[2,68],{35:[1,143],38:[1,142]}),{39:144,43:d,44:f,45:k},{34:[1,145]},{34:[1,146]},{34:[1,147]},{34:[1,148]},{39:149,43:d,44:f,45:k},t(y,[2,26]),t(y,[2,27]),t(y,[2,28]),t(y,[2,29]),{34:[1,150]},{34:[1,151]},{39:152,43:d,44:f,45:k},{34:[1,153]},{39:154,43:d,44:f,45:k},{34:[1,155]},{34:[1,156]},{34:[1,157]},{34:[1,158]},{34:[1,159]},{34:[1,160]},{34:[1,161]},{39:162,43:d,44:f,45:k},{34:[1,163]},{34:[1,164]},{34:[1,165]},{39:166,43:d,44:f,45:k},{34:[1,167]},{39:168,43:d,44:f,45:k},{34:[1,169]},{34:[1,170]},{34:[1,171]},{39:172,43:d,44:f,45:k},{34:[1,173]},t(y,[2,37],{35:[1,174]}),t(y,[2,38],{38:[1,175]}),t(y,[2,36],{33:[1,176]}),t(y,[2,39],{35:[1,177]}),t(y,[2,34],{38:[1,178]}),t(y,[2,35],{33:[1,179]}),t(y,[2,60],{42:[1,180]}),t(y,[2,73],{33:[1,181]}),t(y,[2,61],{42:[1,182]}),t(y,[2,84],{38:[1,183]}),t(y,[2,74],{33:[1,184]}),t(y,[2,83],{38:[1,185]}),t(y,[2,59],{42:[1,186]}),t(y,[2,72],{33:[1,187]}),t(y,[2,58],{42:[1,188]}),t(y,[2,78],{35:[1,189]}),t(y,[2,71],{33:[1,190]}),t(y,[2,77],{35:[1,191]}),t(y,[2,57],{42:[1,192]}),t(y,[2,85],{38:[1,193]}),t(y,[2,56],{42:[1,194]}),t(y,[2,79],{35:[1,195]}),t(y,[2,80],{35:[1,196]}),t(y,[2,86],{38:[1,197]}),t(y,[2,70],{33:[1,198]}),t(y,[2,81],{38:[1,199]}),t(y,[2,69],{33:[1,200]}),t(y,[2,75],{35:[1,201]}),t(y,[2,76],{35:[1,202]}),t(y,[2,82],{38:[1,203]}),{34:[1,204]},{39:205,43:d,44:f,45:k},{34:[1,206]},{34:[1,207]},{39:208,43:d,44:f,45:k},{34:[1,209]},{34:[1,210]},{34:[1,211]},{34:[1,212]},{39:213,43:d,44:f,45:k},{34:[1,214]},{39:215,43:d,44:f,45:k},{34:[1,216]},{34:[1,217]},{34:[1,218]},{34:[1,219]},{34:[1,220]},{34:[1,221]},{34:[1,222]},{39:223,43:d,44:f,45:k},{34:[1,224]},{34:[1,225]},{34:[1,226]},{39:227,43:d,44:f,45:k},{34:[1,228]},{39:229,43:d,44:f,45:k},{34:[1,230]},{34:[1,231]},{34:[1,232]},{39:233,43:d,44:f,45:k},t(y,[2,40]),t(y,[2,42]),t(y,[2,41]),t(y,[2,43]),t(y,[2,45]),t(y,[2,44]),t(y,[2,101]),t(y,[2,102]),t(y,[2,99]),t(y,[2,100]),t(y,[2,104]),t(y,[2,103]),t(y,[2,108]),t(y,[2,107]),t(y,[2,106]),t(y,[2,105]),t(y,[2,110]),t(y,[2,109]),t(y,[2,98]),t(y,[2,97]),t(y,[2,96]),t(y,[2,95]),t(y,[2,93]),t(y,[2,94]),t(y,[2,92]),t(y,[2,91]),t(y,[2,90]),t(y,[2,89]),t(y,[2,87]),t(y,[2,88])],defaultActions:{9:[2,118],10:[2,1],11:[2,2],19:[2,3],27:[2,4],46:[2,120],47:[2,5]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],r=[],n=[null],c=[],s=this.table,a="",o=0,l=0,h=1,m=c.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var p=u.yylloc;c.push(p);var b=u.options&&u.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var d,f,k,_,$,x,v,w,E,T={};;){if(f=i[i.length-1],this.defaultActions[f]?k=this.defaultActions[f]:(null==d&&(E=void 0,"number"!=typeof(E=r.pop()||u.lex()||h)&&(E instanceof Array&&(E=(r=E).pop()),E=e.symbols_[E]||E),d=E),k=s[f]&&s[f][d]),void 0===k||!k.length||!k[0]){var L="";for($ in w=[],s[f])this.terminals_[$]&&$>2&&w.push("'"+this.terminals_[$]+"'");L=u.showPosition?"Parse error on line "+(o+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(o+1)+": Unexpected "+(d==h?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(L,{text:u.match,token:this.terminals_[d]||d,line:u.yylineno,loc:p,expected:w})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+d);switch(k[0]){case 1:i.push(d),n.push(u.yytext),c.push(u.yylloc),i.push(k[1]),d=null,l=u.yyleng,a=u.yytext,o=u.yylineno,p=u.yylloc;break;case 2:if(x=this.productions_[k[1]][1],T.$=n[n.length-x],T._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},b&&(T._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),void 0!==(_=this.performAction.apply(T,[a,l,o,y.yy,k[1],n,c].concat(m))))return _;x&&(i=i.slice(0,-1*x*2),n=n.slice(0,-1*x),c=c.slice(0,-1*x)),i.push(this.productions_[k[1]][0]),n.push(T.$),c.push(T._$),v=s[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}},x={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,r,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var c in n)this[c]=n[c];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),c=0;c<n.length;c++)if((i=this._input.match(this.rules[n[c]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=c,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[c])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),50;case 1:return this.begin("type_directive"),51;case 2:return this.popState(),this.begin("arg_directive"),9;case 3:return this.popState(),this.popState(),53;case 4:return 52;case 5:return this.begin("acc_title"),20;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),22;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 34:case 38:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:return 14;case 13:case 14:break;case 15:return 6;case 16:return 40;case 17:return 33;case 18:return 38;case 19:return 42;case 20:return 43;case 21:return 44;case 22:return 45;case 23:return 35;case 24:return 29;case 25:return 30;case 26:return 37;case 27:return 32;case 28:return 27;case 29:case 30:return 10;case 31:return 9;case 32:return"CARET";case 33:this.begin("options");break;case 35:return 13;case 36:return 36;case 37:this.begin("string");break;case 39:return 34;case 40:return 31;case 41:return 54;case 42:return 8}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:BT\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},options:{rules:[34,35],inclusive:!1},string:{rules:[38,39],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,40,41,42,43],inclusive:!0}}};function v(){this.yy={}}return $.lexer=x,v.prototype=$,$.Parser=v,new v}());a.parser=a;const o=a;let l=(0,r.g)().gitGraph.mainBranchName,h=(0,r.g)().gitGraph.mainBranchOrder,m={},u=null,y={};y[l]={name:l,order:h};let g={};g[l]=u;let p=l,b="LR",d=0;function f(){return(0,n.q)({length:7})}let k={};const _=function(t){if(t=r.e.sanitizeText(t,(0,r.g)()),void 0===g[t]){let e=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}{p=t;const e=g[p];u=m[e]}};function $(t,e,i){const r=t.indexOf(e);-1===r?t.push(i):t.splice(r,1,i)}function x(t){const e=t.reduce(((t,e)=>t.seq>e.seq?t:e),t[0]);let i="";t.forEach((function(t){i+=t===e?"\t*":"\t|"}));const n=[i,e.id,e.seq];for(let r in g)g[r]===e.id&&n.push(r);if(r.l.debug(n.join(" ")),e.parents&&2==e.parents.length){const i=m[e.parents[0]];$(t,e,i),t.push(m[e.parents[1]])}else{if(0==e.parents.length)return;{const i=m[e.parents];$(t,e,i)}}x(t=function(t,e){const i=Object.create(null);return t.reduce(((t,r)=>{const n=e(r);return i[n]||(i[n]=!0,t.push(r)),t}),[])}(t,(t=>t.id)))}const v=function(){const t=Object.keys(m).map((function(t){return m[t]}));return t.forEach((function(t){r.l.debug(t.id)})),t.sort(((t,e)=>t.seq-e.seq)),t},w={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},E={parseDirective:function(t,e,i){c.m.parseDirective(this,t,e,i)},getConfig:()=>(0,r.g)().gitGraph,setDirection:function(t){b=t},setOptions:function(t){r.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{k=JSON.parse(t)}catch(e){r.l.error("error while parsing gitGraph options",e.message)}},getOptions:function(){return k},commit:function(t,e,i,n){r.l.debug("Entering commit:",t,e,i,n),e=r.e.sanitizeText(e,(0,r.g)()),t=r.e.sanitizeText(t,(0,r.g)()),n=r.e.sanitizeText(n,(0,r.g)());const c={id:e||d+"-"+f(),message:t,seq:d++,type:i||w.NORMAL,tag:n||"",parents:null==u?[]:[u.id],branch:p};u=c,m[c.id]=c,g[p]=c.id,r.l.debug("in pushCommit "+c.id)},branch:function(t,e){if(t=r.e.sanitizeText(t,(0,r.g)()),void 0!==g[t]){let e=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw e.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},e}g[t]=null!=u?u.id:null,y[t]={name:t,order:e?parseInt(e,10):null},_(t),r.l.debug("in createBranch")},merge:function(t,e,i,n){t=r.e.sanitizeText(t,(0,r.g)()),e=r.e.sanitizeText(e,(0,r.g)());const c=m[g[p]],s=m[g[t]];if(p===t){let e=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(void 0===c||!c){let e=new Error('Incorrect usage of "merge". Current branch ('+p+")has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},e}if(void 0===g[t]){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},e}if(void 0===s||!s){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},e}if(c===s){let e=new Error('Incorrect usage of "merge". Both branches have same head');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(e&&void 0!==m[e]){let r=new Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw r.hash={text:"merge "+t+e+i+n,token:"merge "+t+e+i+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+i+" "+n]},r}const a={id:e||d+"-"+f(),message:"merged branch "+t+" into "+p,seq:d++,parents:[null==u?null:u.id,g[t]],branch:p,type:w.MERGE,customType:i,customId:!!e,tag:n||""};u=a,m[a.id]=a,g[p]=a.id,r.l.debug(g),r.l.debug("in mergeBranch")},cherryPick:function(t,e,i){if(r.l.debug("Entering cherryPick:",t,e,i),t=r.e.sanitizeText(t,(0,r.g)()),e=r.e.sanitizeText(e,(0,r.g)()),i=r.e.sanitizeText(i,(0,r.g)()),!t||void 0===m[t]){let i=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}let n=m[t],c=n.branch;if(n.type===w.MERGE){let i=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}if(!e||void 0===m[e]){if(c===p){let i=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}const s=m[g[p]];if(void 0===s||!s){let i=new Error('Incorrect usage of "cherry-pick". Current branch ('+p+")has no commits");throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}const a={id:d+"-"+f(),message:"cherry-picked "+n+" into "+p,seq:d++,parents:[null==u?null:u.id,n.id],branch:p,type:w.CHERRY_PICK,tag:i??"cherry-pick:"+n.id};u=a,m[a.id]=a,g[p]=a.id,r.l.debug(g),r.l.debug("in cherryPick")}},checkout:_,prettyPrint:function(){r.l.debug(m);x([v()[0]])},clear:function(){m={},u=null;let t=(0,r.g)().gitGraph.mainBranchName,e=(0,r.g)().gitGraph.mainBranchOrder;g={},g[t]=null,y={},y[t]={name:t,order:e},p=t,d=0,(0,r.y)()},getBranchesAsObjArray:function(){return Object.values(y).map(((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)})).sort(((t,e)=>t.order-e.order)).map((({name:t})=>({name:t})))},getBranches:function(){return g},getCommits:function(){return m},getCommitsArray:v,getCurrentBranch:function(){return p},getDirection:function(){return b},getHead:function(){return u},setAccTitle:r.o,getAccTitle:r.p,getAccDescription:r.q,setAccDescription:r.v,setDiagramTitle:r.w,getDiagramTitle:r.x,commitType:w};let T={};const L=0,M=1,I=2,O=3,A=4;let R={},C={},S=[],P=0;const N=(t,e,i)=>{const r=(0,n.t)().gitGraph,c=t.append("g").attr("class","commit-bullets"),s=t.append("g").attr("class","commit-labels");let a=0;Object.keys(e).sort(((t,i)=>e[t].seq-e[i].seq)).forEach((t=>{const n=e[t],o=R[n.branch].pos,l=a+10;if(i){let t,e=void 0!==n.customType&&""!==n.customType?n.customType:n.type;switch(e){case L:t="commit-normal";break;case M:t="commit-reverse";break;case I:t="commit-highlight";break;case O:t="commit-merge";break;case A:t="commit-cherry-pick";break;default:t="commit-normal"}if(e===I){const e=c.append("rect");e.attr("x",l-10),e.attr("y",o-10),e.attr("height",20),e.attr("width",20),e.attr("class",`commit ${n.id} commit-highlight${R[n.branch].index%8} ${t}-outer`),c.append("rect").attr("x",l-6).attr("y",o-6).attr("height",12).attr("width",12).attr("class",`commit ${n.id} commit${R[n.branch].index%8} ${t}-inner`)}else if(e===A)c.append("circle").attr("cx",l).attr("cy",o).attr("r",10).attr("class",`commit ${n.id} ${t}`),c.append("circle").attr("cx",l-3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${n.id} ${t}`),c.append("circle").attr("cx",l+3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${n.id} ${t}`),c.append("line").attr("x1",l+3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${n.id} ${t}`),c.append("line").attr("x1",l-3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${n.id} ${t}`);else{const i=c.append("circle");if(i.attr("cx",l),i.attr("cy",o),i.attr("r",n.type===O?9:10),i.attr("class",`commit ${n.id} commit${R[n.branch].index%8}`),e===O){const e=c.append("circle");e.attr("cx",l),e.attr("cy",o),e.attr("r",6),e.attr("class",`commit ${t} ${n.id} commit${R[n.branch].index%8}`)}if(e===M){c.append("path").attr("d",`M ${l-5},${o-5}L${l+5},${o+5}M${l-5},${o+5}L${l+5},${o-5}`).attr("class",`commit ${t} ${n.id} commit${R[n.branch].index%8}`)}}}if(C[n.id]={x:a+10,y:o},i){const t=4,e=2;if(n.type!==A&&(n.customId&&n.type===O||n.type!==O)&&r.showCommitLabel){const t=s.append("g"),i=t.insert("rect").attr("class","commit-label-bkg"),c=t.append("text").attr("x",a).attr("y",o+25).attr("class","commit-label").text(n.id);let l=c.node().getBBox();if(i.attr("x",a+10-l.width/2-e).attr("y",o+13.5).attr("width",l.width+2*e).attr("height",l.height+2*e),c.attr("x",a+10-l.width/2),r.rotateCommitLabel){let e=-7.5-(l.width+10)/25*9.5,i=10+l.width/25*8.5;t.attr("transform","translate("+e+", "+i+") rotate("+"-45, "+a+", "+o+")")}}if(n.tag){const i=s.insert("polygon"),r=s.append("circle"),c=s.append("text").attr("y",o-16).attr("class","tag-label").text(n.tag);let l=c.node().getBBox();c.attr("x",a+10-l.width/2);const h=l.height/2,m=o-19.2;i.attr("class","tag-label-bkg").attr("points",`\n          ${a-l.width/2-t/2},${m+e}\n          ${a-l.width/2-t/2},${m-e}\n          ${a+10-l.width/2-t},${m-h-e}\n          ${a+10+l.width/2+t},${m-h-e}\n          ${a+10+l.width/2+t},${m+h+e}\n          ${a+10-l.width/2-t},${m+h+e}`),r.attr("cx",a-l.width/2+t/2).attr("cy",m).attr("r",1.5).attr("class","tag-hole")}}a+=50,a>P&&(P=a)}))},G=(t,e,i=0)=>{const r=t+Math.abs(t-e)/2;if(i>5)return r;if(S.every((t=>Math.abs(t-r)>=10)))return S.push(r),r;const n=Math.abs(t-e);return G(t,e-n/5,i+1)},D=(t,e,i,r)=>{const n=C[e.id],c=C[i.id],s=((t,e,i)=>Object.keys(i).filter((r=>i[r].branch===e.branch&&i[r].seq>t.seq&&i[r].seq<e.seq)).length>0)(e,i,r);let a,o="",l="",h=0,m=0,u=R[i.branch].index;if(s){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10,u=R[i.branch].index;const t=n.y<c.y?G(n.y,c.y):G(c.y,n.y);a=n.y<c.y?`M ${n.x} ${n.y} L ${n.x} ${t-h} ${o} ${n.x+m} ${t} L ${c.x-h} ${t} ${l} ${c.x} ${t+m} L ${c.x} ${c.y}`:`M ${n.x} ${n.y} L ${n.x} ${t+h} ${l} ${n.x+m} ${t} L ${c.x-h} ${t} ${o} ${c.x} ${t-m} L ${c.x} ${c.y}`}else n.y<c.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=R[i.branch].index,a=`M ${n.x} ${n.y} L ${n.x} ${c.y-h} ${o} ${n.x+m} ${c.y} L ${c.x} ${c.y}`),n.y>c.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=R[e.branch].index,a=`M ${n.x} ${n.y} L ${c.x-h} ${n.y} ${o} ${c.x} ${n.y-m} L ${c.x} ${c.y}`),n.y===c.y&&(u=R[e.branch].index,a=`M ${n.x} ${n.y} L ${n.x} ${c.y-h} ${o} ${n.x+m} ${c.y} L ${c.x} ${c.y}`);t.append("path").attr("d",a).attr("class","arrow arrow"+u%8)},B=(t,e)=>{const i=(0,n.t)().gitGraph,r=t.append("g");e.forEach(((t,e)=>{const n=e%8,c=R[t.name].pos,s=r.append("line");s.attr("x1",0),s.attr("y1",c),s.attr("x2",P),s.attr("y2",c),s.attr("class","branch branch"+n),S.push(c);const a=(t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text");let i=[];i="string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[];for(const r of i){const t=document.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","0"),t.setAttribute("class","row"),t.textContent=r.trim(),e.appendChild(t)}return e})(t.name),o=r.insert("rect"),l=r.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);l.node().appendChild(a);let h=a.getBBox();o.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-h.width-4-(!0===i.rotateCommitLabel?30:0)).attr("y",-h.height/2+8).attr("width",h.width+18).attr("height",h.height+4),l.attr("transform","translate("+(-h.width-14-(!0===i.rotateCommitLabel?30:0))+", "+(c-h.height/2-1)+")"),o.attr("transform","translate(-19, "+(c-h.height/2)+")")}))},H={parser:o,db:E,renderer:{draw:function(t,e,i,c){R={},C={},T={},P=0,S=[];const a=(0,n.t)(),o=a.gitGraph;r.l.debug("in gitgraph renderer",t+"\n","id:",e,i),T=c.db.getCommits();const l=c.db.getBranchesAsObjArray();let h=0;l.forEach(((t,e)=>{R[t.name]={pos:h,index:e},h+=50+(o.rotateCommitLabel?40:0)}));const m=(0,s.Ys)(`[id="${e}"]`);N(m,T,!1),o.showBranches&&B(m,l),((t,e)=>{const i=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach((t=>{const r=e[t];r.parents&&r.parents.length>0&&r.parents.forEach((t=>{D(i,e[t],r,e)}))}))})(m,T),N(m,T,!0),n.u.insertTitle(m,"gitTitleText",o.titleTopMargin,c.db.getDiagramTitle()),(0,n.v)(void 0,m,o.diagramPadding,o.useMaxWidth??a.useMaxWidth)}},styles:t=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map((e=>`\n        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }\n        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }\n        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }\n        .label${e}  { fill: ${t["git"+e]}; }\n        .arrow${e} { stroke: ${t["git"+e]}; }\n        `)).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${t.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}\n  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}\n  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }\n  .tag-hole { fill: ${t.textColor}; }\n\n  .commit-merge {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n  }\n`}}}]);