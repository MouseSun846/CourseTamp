import{_ as e}from"./page-head.oCct3Gr2.js";import{e as t,o,a as l,w as s,g as i,n as a,b as n,d as r,k as c,F as u,r as d,y as p,I as h,i as f,j as m,t as b,p as y,s as g,l as k,z as w,S as x}from"./index--SrXNd4W.js";import{_ as v,r as _,e as S}from"./eventbus.DRLqkKVv.js";import{_ as C}from"./uni-icons.Fdu5APQc.js";function I(e){let t="";for(let o in e){t+=`${o}:${e[o]};`}return t}const N=v({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:24},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#2979ff"},styles:{type:Object,default:()=>({color:"#333",disableColor:"#F7F6F6",borderColor:"#e5e5e5"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1}),computed:{isVal(){const e=this.val;return!(!e&&0!==e)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(e){let t="";for(let o in e)e[o]&&(t+=`${o} `);return t}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled})},inputContentStyle(){const e=this.focusShow?this.primaryColor:this.styles.borderColor;return I({"border-color":(this.inputBorder&&this.msg?"#dd524d":e)||"#e5e5e5","background-color":this.disabled?this.styles.disableColor:"#fff"})},inputStyle(){return I({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":"10px","padding-left":this.prefixIcon?"":"10px"})}},watch:{value(e){this.val=e},modelValue(e){this.val=e},focus(e){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(e=>{this.localMsg=e}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(e){this.$emit("iconClick",e)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(e){let t=e.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(t=this.trimStr(t)),"string"==typeof this.trim&&(t=this.trimStr(t,this.trim))),this.errMsg&&(this.errMsg=""),this.val=t,this.$emit("input",t),this.$emit("update:modelValue",t)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(e){this.focusShow=!0,this.$emit("focus",e)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(e){if(e.detail.value,this.focusShow=!1,this.$emit("blur",e),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:e}=this.form;"blur"===e&&this.formItem.onFieldChange()}},onConfirm(e){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(e){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},trimStr:(e,t="both")=>"both"===t?e.trim():"left"===t?e.trimLeft():"right"===t?e.trimRight():"start"===t?e.trimStart():"end"===t?e.trimEnd():"all"===t?e.replace(/\s+/g,""):e}},[["render",function(e,m,b,y,g,k){const w=_(t("uni-icons"),C),x=p,v=h,S=f;return o(),l(S,{class:a(["uni-easyinput",{"uni-easyinput-error":k.msg}]),style:n(k.boxStyle)},{default:s((()=>[i(S,{class:a(["uni-easyinput__content",k.inputContentClass]),style:n(k.inputContentStyle)},{default:s((()=>[b.prefixIcon?(o(),l(w,{key:0,class:"content-clear-icon",type:b.prefixIcon,color:"#c0c4cc",onClick:m[0]||(m[0]=e=>k.onClickIcon("prefix")),size:"22"},null,8,["type"])):r("",!0),"textarea"===b.type?(o(),l(x,{key:1,class:a(["uni-easyinput__content-textarea",{"input-padding":b.inputBorder}]),name:b.name,value:g.val,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,disabled:b.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:k.inputMaxlength,focus:g.focused,autoHeight:b.autoHeight,onInput:k.onInput,onBlur:k._Blur,onFocus:k._Focus,onConfirm:k.onConfirm},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","onInput","onBlur","onFocus","onConfirm"])):(o(),l(v,{key:2,type:"password"===b.type?"text":b.type,class:"uni-easyinput__content-input",style:n(k.inputStyle),name:b.name,value:g.val,password:!g.showPassword&&"password"===b.type,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:b.disabled,maxlength:k.inputMaxlength,focus:g.focused,confirmType:b.confirmType,onFocus:k._Focus,onBlur:k._Blur,onInput:k.onInput,onConfirm:k.onConfirm},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","onFocus","onBlur","onInput","onConfirm"])),"password"===b.type&&b.passwordIcon?(o(),c(u,{key:3},[k.isVal?(o(),l(w,{key:0,class:a(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:g.showPassword?"eye-slash-filled":"eye-filled",size:22,color:g.focusShow?b.primaryColor:"#c0c4cc",onClick:k.onEyes},null,8,["class","type","color","onClick"])):r("",!0)],64)):b.suffixIcon?(o(),c(u,{key:4},[b.suffixIcon?(o(),l(w,{key:0,class:"content-clear-icon",type:b.suffixIcon,color:"#c0c4cc",onClick:m[1]||(m[1]=e=>k.onClickIcon("suffix")),size:"22"},null,8,["type"])):r("",!0)],64)):(o(),c(u,{key:5},[b.clearable&&k.isVal&&!b.disabled&&"textarea"!==b.type?(o(),l(w,{key:0,class:a(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:"clear",size:b.clearSize,color:k.msg?"#dd524d":g.focusShow?b.primaryColor:"#c0c4cc",onClick:k.onClear},null,8,["class","size","color","onClick"])):r("",!0)],64)),d(e.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-2a426a5a"]]);const V=v({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick(){this.$emit("click")}}},[["render",function(e,t,c,u,p,h){const g=f,k=y;return o(),l(g,{class:"uni-section"},{default:s((()=>[i(g,{class:"uni-section-header",onClick:h.onClick},{default:s((()=>[c.type?(o(),l(g,{key:0,class:a(["uni-section-header__decoration",c.type])},null,8,["class"])):d(e.$slots,"decoration",{key:1},void 0,!0),i(g,{class:"uni-section-header__content"},{default:s((()=>[i(k,{style:n({"font-size":c.titleFontSize,color:c.titleColor}),class:a(["uni-section__content-title",{distraction:!c.subTitle}])},{default:s((()=>[m(b(c.title),1)])),_:1},8,["style","class"]),c.subTitle?(o(),l(k,{key:0,style:n({"font-size":c.subTitleFontSize,color:c.subTitleColor}),class:"uni-section-header__content-sub"},{default:s((()=>[m(b(c.subTitle),1)])),_:1},8,["style"])):r("",!0)])),_:1}),i(g,{class:"uni-section-header__slot-right"},{default:s((()=>[d(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),i(g,{class:"uni-section-content",style:n({padding:h._padding})},{default:s((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]);const z=v({data:()=>({scrollTop:0,levelDetail:{levelName:"第01关",summary:{stepId:0,levelDetail:{content:"资料分析主讲",url:"https://www.baidu.com"},isLocked:!1},stepList:[{stepId:1,levelDetail:{content:"知识考点",url:"https://www.baidu.com"},isLocked:!0},{stepId:2,levelDetail:{content:"特训练习",url:"https://www.baidu.com"},isLocked:!1},{stepId:3,levelDetail:{content:"老师点评",url:"https://www.baidu.com"},isLocked:!0},{stepId:4,levelDetail:{content:"可配置",url:"https://www.baidu.com"},isLocked:!1},{stepId:5,levelDetail:{content:"可配置",url:"https://www.baidu.com"},isLocked:!0},{stepId:6,levelDetail:{content:"可配置",url:"https://www.baidu.com"},isLocked:!0}]},goalInfo:{number:3,predictGoal:30},bookList:["No.123456","No.123456","No.123456","No.123456","No.1234562222222222","No.123456","No.123456","No.123456","No.123456","No.1234562222222222"],bookNumber:"",bookNumberValue:"",goalNumber:0,goalNumberValue:0,finishTime:"2024-10-15"}),mounted(){S.emit("titleUpdate",{title:"个人中心"})},methods:{onGoalNumberChange(e){this.goalNumberValue=e},onGoalSetting(){console.log(this.goalNumberValue),this.goalNumber=this.goalNumberValue},onBookNumberBind(){this.bookNumber=this.bookNumberValue},getStepContentClass:e=>e?"step-content-body step-content-body-lock":"step-content-body step-content-body-unlock",scroll:function(e){this.scrollHeight=e.detail.scrollHeight,this.scrollTop=e.detail.scrollTop},onbookNumberIuput(e){console.log(e)}}},[["render",function(a,n,d,p,h,v){const S=_(t("page-head"),e),C=y,I=f,z=_(t("uni-easyinput"),N),B=w,$=_(t("uni-section"),V),T=x;return o(),l(I,{class:"container"},{default:s((()=>[i(S,{class:"page-head-box"}),i(I,{class:"scroll-box"},{default:s((()=>[i(T,{"scroll-top":h.scrollTop,"scroll-y":"true","show-scrollbar":!1,class:"scroll-Y",onScroll:v.scroll},{default:s((()=>[i(I,{class:"step-content"},{default:s((()=>[i(I,{class:"step-content-body step-content-body-unlock"},{default:s((()=>[i(I,{class:"level-card"},{default:s((()=>[i($,{title:"书籍绑定",type:"line",padding:"",titleFontSize:"18px"},{default:s((()=>[0===h.bookList.length?(o(),l(I,{key:0,class:"book-box book-box-view book-box-view-bg"},{default:s((()=>[i(I,{class:"no-bind-book"},{default:s((()=>[(o(),c("svg",{t:"1728999818523",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1572",width:"32",height:"32",style:{"margin-left":"10px","margin-right":"20px"}},[g("path",{d:"M661.76 65.28c-64 0-119.04 38.4-149.76 94.72-30.08-56.32-85.76-94.72-149.76-94.72H65.92v835.84h272.64c51.2 0 135.68 17.28 149.12 57.6 12.8 0 19.84 0.64 49.28 0v-0.64c13.44-40.32 97.92-57.536 148.48-57.536h272.64V65.28h-296.32zM338.56 843.52H115.84V122.88h247.68c46.72 0 94.08 27.52 113.92 70.4v679.872c-30.208-29.248-95.424-30.784-138.88-29.632z m570.24-0.64h-223.36c-43.456-1.152-110.144 0.512-139.456 30.528V193.28h1.216c19.84-42.88 67.2-70.4 113.92-70.4h247.68v720z",fill:"#8492a6","p-id":"1573"})])),i(C,{class:"book-text"},{default:s((()=>[m(b(h.bookNumber||"未绑定"),1)])),_:1})])),_:1})])),_:1})):r("",!0),h.bookList.length?(o(),l(I,{key:1,class:"book-box book-box-view"},{default:s((()=>[(o(!0),c(u,null,k(h.bookList,((e,t)=>(o(),l(I,{class:"book-box-body",key:t},{default:s((()=>[i(I,{class:"book-box-body-content"},{default:s((()=>[i(I,{class:"book-box-body-number"},{default:s((()=>[(o(),c("svg",{t:"1729172555273",class:"icon",viewBox:"0 0 1068 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4494",width:"32",height:"32"},[g("path",{d:"M999.513043 44.521739h-489.73913l-48.973913 48.973913v881.530435l48.973913 48.973913h489.73913l48.973914-48.973913V93.495652L999.513043 44.521739zM558.747826 142.469565h146.921739v783.582609h-146.921739V142.469565z m391.791304 783.582609h-146.921739V142.469565h146.921739v783.582609z",fill:"#f2ff7f","p-id":"4495"}),g("path",{d:"M158.052174 20.034783l-53.426087 44.521739L20.034783 950.53913l44.521739 53.426087 258.226087 20.034783 53.426087-44.521739 86.817391-885.982609-44.521739-53.426087L158.052174 20.034783z m124.660869 901.565217l-160.27826-13.356522L198.121739 122.434783l160.278261 11.130434-75.686957 788.034783z m545.391305-656.695652h97.947826v171.408695h-97.947826z m-244.869565 0h97.947826v171.408695h-97.947826z",fill:"#f2ff7f","p-id":"4496"})]))])),_:1})])),_:1}),i(I,{class:"book-box-body-title-container"},{default:s((()=>[i(I,{class:"book-box-body-title"},{default:s((()=>[m(b(e),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):r("",!0),i(I,{class:"book-box"},{default:s((()=>[i(z,{class:"book-input",trim:"all",modelValue:h.bookNumberValue,"onUpdate:modelValue":n[0]||(n[0]=e=>h.bookNumberValue=e),placeholder:"请输入书籍编码",onInput:v.onbookNumberIuput},null,8,["modelValue","onInput"]),i(I,{class:"book-btn",onClick:v.onBookNumberBind},{default:s((()=>[i(B,{type:"primary",style:{"font-size":"13px"}},{default:s((()=>[m("确定")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),i(I,{class:"step-content"},{default:s((()=>[i(I,{class:"step-content-body step-content-body-unlock"},{default:s((()=>[i(I,{class:"level-card"},{default:s((()=>[i($,{title:"目标设置",type:"line",padding:"",titleFontSize:"18px"},{default:s((()=>[i($,{title:"预计完成时间",type:"square",padding:""},{default:s((()=>[i(I,{class:"book-box book-box-view"},{default:s((()=>[(o(),c("svg",{t:"1729001633682",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9748",width:"32",height:"32",style:{"margin-left":"10px","margin-right":"20px"}},[g("path",{d:"M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m-34.133333 218.453333a54.613333 54.613333 0 0 0-54.613334 54.613334v273.066666l0.597334 8.106667a54.613333 54.613333 0 0 0 54.016 46.506667h273.066666l8.106667-0.597334A54.613333 54.613333 0 0 0 805.546667 546.133333l-0.597334-8.106666A54.613333 54.613333 0 0 0 750.933333 491.52H532.48V273.066667l-0.597333-8.106667A54.613333 54.613333 0 0 0 477.866667 218.453333z",fill:"#8492a6","p-id":"9749"})])),i(C,{class:"book-text"},{default:s((()=>[m(b(h.finishTime||"未知"),1)])),_:1})])),_:1})])),_:1}),i($,{title:"今日目标",type:"square",padding:""},{default:s((()=>[i(I,{class:"book-box book-box-view"},{default:s((()=>[(o(),c("svg",{t:"1729001256170",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4755",width:"32",height:"32",style:{"margin-left":"10px","margin-right":"20px"}},[g("path",{d:"M85.930667 590.762667H78.762667a78.762667 78.762667 0 1 1 0-157.525334h7.168a433.664 433.664 0 0 1 347.306666-347.306666V78.762667a78.762667 78.762667 0 1 1 157.525334 0v7.168a433.664 433.664 0 0 1 347.306666 347.306666h7.168a78.762667 78.762667 0 1 1 0 157.525334h-7.168a433.664 433.664 0 0 1-347.306666 347.306666v7.168a78.762667 78.762667 0 1 1-157.525334 0v-7.168a433.664 433.664 0 0 1-347.306666-347.306666zM512 748.373333a236.373333 236.373333 0 1 0 0-472.576 236.373333 236.373333 0 0 0 0 472.576z m0-78.762666a157.525333 157.525333 0 1 1 0-315.050667 157.525333 157.525333 0 0 1 0 315.050667z",fill:"#8492A6","p-id":"4756"})])),i(C,{class:"book-text"},{default:s((()=>[m(b(h.goalNumber||"未设置"),1)])),_:1})])),_:1}),i(I,{class:"book-box"},{default:s((()=>[i(z,{class:"book-input",trim:"all",modelValue:h.goalNumberValue,"onUpdate:modelValue":n[1]||(n[1]=e=>h.goalNumberValue=e),placeholder:"请输入书籍编码",onInput:v.onGoalNumberChange},null,8,["modelValue","onInput"]),i(I,{class:"book-btn",onClick:v.onGoalSetting},{default:s((()=>[i(B,{type:"primary",style:{"font-size":"13px"}},{default:s((()=>[m("确定")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),i(I,{style:{width:"100%",height:"100px"}})])),_:1},8,["scroll-top","onScroll"])])),_:1})])),_:1})}],["__scopeId","data-v-892b308f"]]);export{z as default};