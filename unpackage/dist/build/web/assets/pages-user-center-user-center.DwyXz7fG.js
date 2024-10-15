import{_ as t}from"./page-head.B5vbt6pe.js";import{e,o as l,a as s,w as o,g as i,n as a,b as n,d as u,k as r,F as c,r as d,y as p,I as h,i as m,j as f,t as b,p as y,s as g,z as x,S as _}from"./index-ww2j1fWM.js";import{_ as k,r as v,e as w}from"./eventbus.8buDs7Qt.js";import{_ as S}from"./uni-icons.BoMWlvwM.js";function V(t){let e="";for(let l in t){e+=`${l}:${t[l]};`}return e}const C=k({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:24},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#2979ff"},styles:{type:Object,default:()=>({color:"#333",disableColor:"#F7F6F6",borderColor:"#e5e5e5"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1}),computed:{isVal(){const t=this.val;return!(!t&&0!==t)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(t){let e="";for(let l in t)t[l]&&(e+=`${l} `);return e}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled})},inputContentStyle(){const t=this.focusShow?this.primaryColor:this.styles.borderColor;return V({"border-color":(this.inputBorder&&this.msg?"#dd524d":t)||"#e5e5e5","background-color":this.disabled?this.styles.disableColor:"#fff"})},inputStyle(){return V({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":"10px","padding-left":this.prefixIcon?"":"10px"})}},watch:{value(t){this.val=t},modelValue(t){this.val=t},focus(t){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(t=>{this.localMsg=t}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(t){this.$emit("iconClick",t)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(t){let e=t.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(e=this.trimStr(e)),"string"==typeof this.trim&&(e=this.trimStr(e,this.trim))),this.errMsg&&(this.errMsg=""),this.val=e,this.$emit("input",e),this.$emit("update:modelValue",e)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(t){this.focusShow=!0,this.$emit("focus",t)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(t){if(t.detail.value,this.focusShow=!1,this.$emit("blur",t),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:t}=this.form;"blur"===t&&this.formItem.onFieldChange()}},onConfirm(t){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(t){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},trimStr:(t,e="both")=>"both"===e?t.trim():"left"===e?t.trimLeft():"right"===e?t.trimRight():"start"===e?t.trimStart():"end"===e?t.trimEnd():"all"===e?t.replace(/\s+/g,""):t}},[["render",function(t,f,b,y,g,x){const _=v(e("uni-icons"),S),k=p,w=h,V=m;return l(),s(V,{class:a(["uni-easyinput",{"uni-easyinput-error":x.msg}]),style:n(x.boxStyle)},{default:o((()=>[i(V,{class:a(["uni-easyinput__content",x.inputContentClass]),style:n(x.inputContentStyle)},{default:o((()=>[b.prefixIcon?(l(),s(_,{key:0,class:"content-clear-icon",type:b.prefixIcon,color:"#c0c4cc",onClick:f[0]||(f[0]=t=>x.onClickIcon("prefix")),size:"22"},null,8,["type"])):u("",!0),"textarea"===b.type?(l(),s(k,{key:1,class:a(["uni-easyinput__content-textarea",{"input-padding":b.inputBorder}]),name:b.name,value:g.val,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,disabled:b.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:x.inputMaxlength,focus:g.focused,autoHeight:b.autoHeight,onInput:x.onInput,onBlur:x._Blur,onFocus:x._Focus,onConfirm:x.onConfirm},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","onInput","onBlur","onFocus","onConfirm"])):(l(),s(w,{key:2,type:"password"===b.type?"text":b.type,class:"uni-easyinput__content-input",style:n(x.inputStyle),name:b.name,value:g.val,password:!g.showPassword&&"password"===b.type,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:b.disabled,maxlength:x.inputMaxlength,focus:g.focused,confirmType:b.confirmType,onFocus:x._Focus,onBlur:x._Blur,onInput:x.onInput,onConfirm:x.onConfirm},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","onFocus","onBlur","onInput","onConfirm"])),"password"===b.type&&b.passwordIcon?(l(),r(c,{key:3},[x.isVal?(l(),s(_,{key:0,class:a(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:g.showPassword?"eye-slash-filled":"eye-filled",size:22,color:g.focusShow?b.primaryColor:"#c0c4cc",onClick:x.onEyes},null,8,["class","type","color","onClick"])):u("",!0)],64)):b.suffixIcon?(l(),r(c,{key:4},[b.suffixIcon?(l(),s(_,{key:0,class:"content-clear-icon",type:b.suffixIcon,color:"#c0c4cc",onClick:f[1]||(f[1]=t=>x.onClickIcon("suffix")),size:"22"},null,8,["type"])):u("",!0)],64)):(l(),r(c,{key:5},[b.clearable&&x.isVal&&!b.disabled&&"textarea"!==b.type?(l(),s(_,{key:0,class:a(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:"clear",size:b.clearSize,color:x.msg?"#dd524d":g.focusShow?b.primaryColor:"#c0c4cc",onClick:x.onClear},null,8,["class","size","color","onClick"])):u("",!0)],64)),d(t.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-2a426a5a"]]);const I=k({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick(){this.$emit("click")}}},[["render",function(t,e,r,c,p,h){const g=m,x=y;return l(),s(g,{class:"uni-section"},{default:o((()=>[i(g,{class:"uni-section-header",onClick:h.onClick},{default:o((()=>[r.type?(l(),s(g,{key:0,class:a(["uni-section-header__decoration",r.type])},null,8,["class"])):d(t.$slots,"decoration",{key:1},void 0,!0),i(g,{class:"uni-section-header__content"},{default:o((()=>[i(x,{style:n({"font-size":r.titleFontSize,color:r.titleColor}),class:a(["uni-section__content-title",{distraction:!r.subTitle}])},{default:o((()=>[f(b(r.title),1)])),_:1},8,["style","class"]),r.subTitle?(l(),s(x,{key:0,style:n({"font-size":r.subTitleFontSize,color:r.subTitleColor}),class:"uni-section-header__content-sub"},{default:o((()=>[f(b(r.subTitle),1)])),_:1},8,["style"])):u("",!0)])),_:1}),i(g,{class:"uni-section-header__slot-right"},{default:o((()=>[d(t.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),i(g,{class:"uni-section-content",style:n({padding:h._padding})},{default:o((()=>[d(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]);const B=k({name:"UniNumberBox",emits:["change","input","update:modelValue","blur","focus"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},background:{type:String,default:"#f5f5f5"},color:{type:String,default:"#333"},disabled:{type:Boolean,default:!1}},data:()=>({inputValue:0}),watch:{value(t){this.inputValue=+t},modelValue(t){this.inputValue=+t}},created(){1===this.value&&(this.inputValue=+this.modelValue),1===this.modelValue&&(this.inputValue=+this.value)},methods:{_calcValue(t){if(this.disabled)return;const e=this._getDecimalScale();let l=this.inputValue*e,s=this.step*e;if("minus"===t){if(l-=s,l<this.min*e)return;l>this.max*e&&(l=this.max*e)}if("plus"===t){if(l+=s,l>this.max*e)return;l<this.min*e&&(l=this.min*e)}this.inputValue=(l/e).toFixed(String(e).length-1),this.$emit("change",+this.inputValue),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue)},_getDecimalScale(){let t=1;return~~this.step!==this.step&&(t=Math.pow(10,String(this.step).split(".")[1].length)),t},_onBlur(t){this.$emit("blur",t);let e=t.detail.value;if(!e)return;e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min);const l=this._getDecimalScale();this.inputValue=e.toFixed(String(l).length-1),this.$emit("change",+this.inputValue),this.$emit("input",+this.inputValue)},_onFocus(t){this.$emit("focus",t)}}},[["render",function(t,e,u,r,c,d){const p=y,b=m,g=h;return l(),s(b,{class:"uni-numbox"},{default:o((()=>[i(b,{onClick:e[0]||(e[0]=t=>d._calcValue("minus")),class:"uni-numbox__minus uni-numbox-btns",style:n({background:u.background})},{default:o((()=>[i(p,{class:a(["uni-numbox--text",{"uni-numbox--disabled":c.inputValue<=u.min||u.disabled}]),style:n({color:u.color})},{default:o((()=>[f("-")])),_:1},8,["class","style"])])),_:1},8,["style"]),i(g,{disabled:u.disabled,onFocus:d._onFocus,onBlur:d._onBlur,class:"uni-numbox__value",type:"number",modelValue:c.inputValue,"onUpdate:modelValue":e[1]||(e[1]=t=>c.inputValue=t),style:n({background:u.background,color:u.color})},null,8,["disabled","onFocus","onBlur","modelValue","style"]),i(b,{onClick:e[2]||(e[2]=t=>d._calcValue("plus")),class:"uni-numbox__plus uni-numbox-btns",style:n({background:u.background})},{default:o((()=>[i(p,{class:a(["uni-numbox--text",{"uni-numbox--disabled":c.inputValue>=u.max||u.disabled}]),style:n({color:u.color})},{default:o((()=>[f("+")])),_:1},8,["class","style"])])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-0f576b9a"]]);const $=k({data:()=>({scrollTop:0,levelDetail:{levelName:"第01关",summary:{stepId:0,levelDetail:{content:"资料分析主讲",url:"https://www.baidu.com"},isLocked:!1},stepList:[{stepId:1,levelDetail:{content:"知识考点",url:"https://www.baidu.com"},isLocked:!0},{stepId:2,levelDetail:{content:"特训练习",url:"https://www.baidu.com"},isLocked:!1},{stepId:3,levelDetail:{content:"老师点评",url:"https://www.baidu.com"},isLocked:!0},{stepId:4,levelDetail:{content:"可配置",url:"https://www.baidu.com"},isLocked:!1},{stepId:5,levelDetail:{content:"可配置",url:"https://www.baidu.com"},isLocked:!0},{stepId:6,levelDetail:{content:"可配置",url:"https://www.baidu.com"},isLocked:!0}]},goalInfo:{number:3,predictGoal:30},bookNumber:"",bookNumberValue:"",goalNumber:0,goalNumberValue:0,finishTime:"2024-10-15"}),mounted(){w.emit("titleUpdate",{title:"个人中心"})},methods:{onGoalNumberChange(t){this.goalNumberValue=t},onGoalSetting(){console.log(this.goalNumberValue),this.goalNumber=this.goalNumberValue},onBookNumberBind(){this.bookNumber=this.bookNumberValue},getStepContentClass:t=>t?"step-content-body step-content-body-lock":"step-content-body step-content-body-unlock",scroll:function(t){this.scrollHeight=t.detail.scrollHeight,this.scrollTop=t.detail.scrollTop},onbookNumberIuput(t){console.log(t)}}},[["render",function(a,n,u,c,d,p){const h=v(e("page-head"),t),k=y,w=m,S=v(e("uni-easyinput"),C),V=x,$=v(e("uni-section"),I),N=v(e("uni-number-box"),B),F=_;return l(),s(w,{class:"container"},{default:o((()=>[i(h,{class:"page-head-box"}),i(w,{class:"scroll-box"},{default:o((()=>[i(F,{"scroll-top":d.scrollTop,"scroll-y":"true","show-scrollbar":!1,class:"scroll-Y",onScroll:p.scroll},{default:o((()=>[i(w,{class:"step-content"},{default:o((()=>[i(w,{class:"step-content-body step-content-body-unlock"},{default:o((()=>[i(w,{class:"level-card"},{default:o((()=>[i($,{title:"书籍绑定",type:"line",padding:"",titleFontSize:"18px"},{default:o((()=>[i(w,{class:"book-box book-box-view"},{default:o((()=>[(l(),r("svg",{t:"1728999818523",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1572",width:"32",height:"32",style:{"margin-left":"10px","margin-right":"20px"}},[g("path",{d:"M661.76 65.28c-64 0-119.04 38.4-149.76 94.72-30.08-56.32-85.76-94.72-149.76-94.72H65.92v835.84h272.64c51.2 0 135.68 17.28 149.12 57.6 12.8 0 19.84 0.64 49.28 0v-0.64c13.44-40.32 97.92-57.536 148.48-57.536h272.64V65.28h-296.32zM338.56 843.52H115.84V122.88h247.68c46.72 0 94.08 27.52 113.92 70.4v679.872c-30.208-29.248-95.424-30.784-138.88-29.632z m570.24-0.64h-223.36c-43.456-1.152-110.144 0.512-139.456 30.528V193.28h1.216c19.84-42.88 67.2-70.4 113.92-70.4h247.68v720z",fill:"#8492a6","p-id":"1573"})])),i(k,{class:"book-text"},{default:o((()=>[f(b(d.bookNumber||"未绑定"),1)])),_:1})])),_:1}),i(w,{class:"book-box"},{default:o((()=>[i(S,{class:"book-input",trim:"all",modelValue:d.bookNumberValue,"onUpdate:modelValue":n[0]||(n[0]=t=>d.bookNumberValue=t),placeholder:"请输入书籍编码",onInput:p.onbookNumberIuput},null,8,["modelValue","onInput"]),i(w,{class:"book-btn",onClick:p.onBookNumberBind},{default:o((()=>[i(V,{type:"primary",style:{"font-size":"13px"}},{default:o((()=>[f("确定")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),i(w,{class:"step-content"},{default:o((()=>[i(w,{class:"step-content-body step-content-body-unlock"},{default:o((()=>[i(w,{class:"level-card"},{default:o((()=>[i($,{title:"目标设置",type:"line",padding:"",titleFontSize:"18px"},{default:o((()=>[i($,{title:"预计完成时间",type:"square",padding:""},{default:o((()=>[i(w,{class:"book-box book-box-view"},{default:o((()=>[(l(),r("svg",{t:"1729001633682",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9748",width:"32",height:"32",style:{"margin-left":"10px","margin-right":"20px"}},[g("path",{d:"M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m-34.133333 218.453333a54.613333 54.613333 0 0 0-54.613334 54.613334v273.066666l0.597334 8.106667a54.613333 54.613333 0 0 0 54.016 46.506667h273.066666l8.106667-0.597334A54.613333 54.613333 0 0 0 805.546667 546.133333l-0.597334-8.106666A54.613333 54.613333 0 0 0 750.933333 491.52H532.48V273.066667l-0.597333-8.106667A54.613333 54.613333 0 0 0 477.866667 218.453333z",fill:"#8492a6","p-id":"9749"})])),i(k,{class:"book-text"},{default:o((()=>[f(b(d.finishTime||"未知"),1)])),_:1})])),_:1})])),_:1}),i($,{title:"今日目标",type:"square",padding:""},{default:o((()=>[i(w,{class:"book-box"},{default:o((()=>[(l(),r("svg",{t:"1729001256170",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4755",width:"32",height:"32",style:{"margin-left":"10px","margin-right":"20px"}},[g("path",{d:"M85.930667 590.762667H78.762667a78.762667 78.762667 0 1 1 0-157.525334h7.168a433.664 433.664 0 0 1 347.306666-347.306666V78.762667a78.762667 78.762667 0 1 1 157.525334 0v7.168a433.664 433.664 0 0 1 347.306666 347.306666h7.168a78.762667 78.762667 0 1 1 0 157.525334h-7.168a433.664 433.664 0 0 1-347.306666 347.306666v7.168a78.762667 78.762667 0 1 1-157.525334 0v-7.168a433.664 433.664 0 0 1-347.306666-347.306666zM512 748.373333a236.373333 236.373333 0 1 0 0-472.576 236.373333 236.373333 0 0 0 0 472.576z m0-78.762666a157.525333 157.525333 0 1 1 0-315.050667 157.525333 157.525333 0 0 1 0 315.050667z",fill:"#8492A6","p-id":"4756"})])),i(k,{class:"book-text"},{default:o((()=>[f(b(d.goalNumber||"未设置"),1)])),_:1}),i(N,{min:1,max:100,value:d.goalNumberValue,class:"book-input-number",onChange:p.onGoalNumberChange},null,8,["value","onChange"]),i(w,{class:"book-btn",onClick:p.onGoalSetting},{default:o((()=>[i(V,{type:"primary",style:{"font-size":"13px"}},{default:o((()=>[f("确定")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["scroll-top","onScroll"])])),_:1})])),_:1})}],["__scopeId","data-v-bdfd2066"]]);export{$ as default};
