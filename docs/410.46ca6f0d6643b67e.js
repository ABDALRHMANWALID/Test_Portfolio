"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[410],{9410:(d,g,o)=>{o.r(g),o.d(g,{DashboardModule:()=>_});var l=o(6895),r=o(7731),n=o(4650),s=o(8199);const C=["header"],M=["menu"],O=[{path:"",component:(()=>{class t{constructor(e){this.services=e,this.headerStyle=()=>{if(console.log(this.headerStyleObj.headerStyle),1==this.headerStyleObj.headerStyle)this.headerStyleAct=!0,document.getElementById("header")?.classList.add("act","session_bg"),console.log(!0);else if(0==this.headerStyleObj.headerStyle){document.getElementById("header")?.classList.remove("act","session_bg");let c=window.pageYOffset;window.addEventListener("scroll",()=>{c=window.pageYOffset,console.log(c),c>750?(document.getElementById("header")?.classList.add("act","session_bg"),console.log(!0)):(document.getElementById("header")?.classList.remove("act","session_bg"),console.log(!1))})}}}ngOnChanges(e){this.services.changeEmitted$.subscribe(c=>{this.headerStyleObj=c,this.headerStyle()})}ngOnInit(){this.services.changeEmitted$.subscribe(e=>{this.headerStyleObj=e,this.headerStyle()})}toggleMenu(){this.menu.nativeElement.classList.toggle("act")}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(s.s))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dashboard"]],viewQuery:function(e,c){if(1&e&&(n.Gf(C,5),n.Gf(M,5)),2&e){let i;n.iGM(i=n.CRH())&&(c.header=i.first),n.iGM(i=n.CRH())&&(c.menu=i.first)}},features:[n.TTD],decls:92,vars:0,consts:[["id","header"],["header",""],[1,"con"],[1,"container"],[1,"logo"],["menu",""],[1,"paragraph"],["href","#Home"],["href","#About"],["href","#Skills"],["href","#Portfolio"],["href","#Blogs"],["href","#Experience"],["href","#Contact"],[1,"bars",3,"click"],[1,"session"],[1,"info"],[1,"links"],[1,"sub_title"],[1,"group_links"],["href",""],[1,"contact_info"],[1,"social"],["src","assets/images/social/icons8-facebook.svg","alt",""],["src","assets/images/social/icons8-instagram.svg","alt",""],["src","assets/images/social/icons8-linkedin.svg","alt",""],["src","assets/images/social/icons8-telegram-app.svg","alt",""],["src","assets/images/social/icons8-twitter.svg","alt",""],["src","assets/images/social/icons8-whatsapp.svg","alt",""],["src","assets/images/social/icons8-youtube.svg","alt",""]],template:function(e,c){1&e&&(n.TgZ(0,"header",0,1)(2,"div",2)(3,"div",3)(4,"div",4),n._uU(5,"Abdalrhman"),n.qZA(),n.TgZ(6,"ul",null,5)(8,"li",6)(9,"a",7),n._uU(10,"Home"),n.qZA()(),n.TgZ(11,"li",6)(12,"a",8),n._uU(13,"About"),n.qZA()(),n.TgZ(14,"li",6)(15,"a",9),n._uU(16,"Skills"),n.qZA()(),n.TgZ(17,"li",6)(18,"a",10),n._uU(19,"Portfolio"),n.qZA()(),n.TgZ(20,"li",6)(21,"a",11),n._uU(22,"Blogs"),n.qZA()(),n.TgZ(23,"li",6)(24,"a",12),n._uU(25,"Experience"),n.qZA()(),n.TgZ(26,"li",6)(27,"a",13),n._uU(28,"Contact"),n.qZA()()(),n.TgZ(29,"div",14),n.NdJ("click",function(){return c.toggleMenu()}),n._UZ(30,"span")(31,"span")(32,"span"),n.qZA()()()(),n._UZ(33,"router-outlet"),n.TgZ(34,"footer",15)(35,"div",3)(36,"div",16)(37,"div",4),n._uU(38,"Abdalrhman"),n.qZA(),n.TgZ(39,"div",6),n._uU(40,'My name is Abdalrhman Walid Mahmoud, from Egypt I am software engineer with 1+ years of experience, I work in Tech Company in Egypt "EngEgypt", '),n.qZA()(),n.TgZ(41,"div",17)(42,"div",18),n._uU(43,"Useful Links"),n.qZA(),n.TgZ(44,"ul",19)(45,"li")(46,"a",20),n._uU(47,"About me"),n.qZA()(),n.TgZ(48,"li")(49,"a",20),n._uU(50,"My Skills"),n.qZA()(),n.TgZ(51,"li")(52,"a",20),n._uU(53,"My portfolio"),n.qZA()(),n.TgZ(54,"li")(55,"a",20),n._uU(56,"My Blogs"),n.qZA()(),n.TgZ(57,"li")(58,"a",20),n._uU(59,"My Experience"),n.qZA()(),n.TgZ(60,"li")(61,"a",20),n._uU(62,"Contact me"),n.qZA()()()(),n.TgZ(63,"div",21)(64,"div",18),n._uU(65,"Contact Information"),n.qZA(),n.TgZ(66,"ul",22)(67,"li")(68,"a",20),n._UZ(69,"img",23),n.qZA()(),n.TgZ(70,"li")(71,"a",20),n._UZ(72,"img",24),n.qZA()(),n.TgZ(73,"li")(74,"a",20),n._UZ(75,"img",25),n.qZA()(),n.TgZ(76,"li")(77,"a",20),n._UZ(78,"img",26),n.qZA()(),n.TgZ(79,"li")(80,"a",20),n._UZ(81,"img",27),n.qZA()(),n.TgZ(82,"li")(83,"a",20),n._UZ(84,"img",28),n.qZA()(),n.TgZ(85,"li")(86,"a",20),n._UZ(87,"img",29),n.qZA()()(),n.TgZ(88,"div",6),n._uU(89," My personal contact"),n._UZ(90,"br"),n._uU(91," +20 0101 960 9406 "),n.qZA()()()())},dependencies:[r.lC],styles:['header[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:80px;width:100%;display:flex;align-items:center;justify-content:center;z-index:3;box-shadow:var(--main-shadow)}header.act[_ngcontent-%COMP%]{position:fixed;background-color:var(--bg-color);animation:actHeader .3s linear 0s}header.act[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:var(--gray-color-1)}header.act[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-color)}header.act[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:var(--bg-color)}header.act[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:var(--gray-color-1)}header.act[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){background-color:var(--main-color)}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:space-between}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:var(--bg-color)}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:flex-end;transition:.3s}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:var(--bg-color);height:100%;width:120px;cursor:pointer;position:relative;transition:.3s}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{z-index:-1;content:"";position:absolute;top:0;left:0;width:100%;height:0%;background-color:var(--main-color);transition:.3s}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before{height:100%}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;width:100%;color:var(--bg-color)}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]{display:none;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:8px}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:2px;width:24px;background-color:var(--bg-color)}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){width:32px;background-color:var(--main-color)}@media (max-width: 1200px){header[_ngcontent-%COMP%]{height:60px}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100px}}@media (max-width: 992px){header[_ngcontent-%COMP%]{height:80px}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]{position:relative}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:space-between}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;background-color:var(--bg-color);left:0;bottom:calc(100% + 1px);top:auto;height:auto;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start;opacity:0;transition:.3s}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul.act[_ngcontent-%COMP%]{opacity:1;bottom:auto;top:calc(100% - 1px);transition:.3s}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{align-items:flex-start;justify-content:flex-start;color:var(--main-color);height:auto;width:100%;position:relative;border-bottom:1px solid var(--offwhite-color)}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{width:0%;height:100%;z-index:1;background-color:var(--offwhite-color);opacity:.5}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before{width:100%}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{align-items:flex-start;justify-content:flex-start;color:var(--main-color);z-index:2;font-weight:600;padding:4px 16px}header[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]{display:flex}}@keyframes actHeader{0%{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}footer[_ngcontent-%COMP%]{background-color:var(--gray-color-1)}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);align-items:flex-start;justify-content:flex-start;gap:68px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:24px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:32px;color:var(--bg-color)}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:first-letter{font-size:40px!important}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{color:var(--bg-color)}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:24px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{color:var(--bg-color)}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .group_links[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:flex-start;justify-content:flex-start;column-gap:44px;row-gap:8px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .group_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--bg-color);font-size:24px;font-weight:400;font-family:Cairo,sans-serif;line-height:45px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .group_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{color:var(--bg-color);margin-bottom:24px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:8px;margin-bottom:8px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{color:var(--bg-color)}@media (max-width: 1200px){footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{gap:40px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{gap:16px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:24px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:first-letter{font-size:32px!important}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{gap:16px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .group_links[_ngcontent-%COMP%]{column-gap:32px;row-gap:8px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .group_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:20px;line-height:45px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{margin-bottom:16px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{gap:8px;margin-bottom:8px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contact_info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px}}@media (max-width: 992px){footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 768px){footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}']}),t})(),children:[{path:"",loadChildren:()=>Promise.resolve().then(o.bind(o,1104)).then(t=>t.HomeModule)},{path:"blogs",loadChildren:()=>o.e(198).then(o.bind(o,3198)).then(t=>t.BlogsModule)},{path:"projects",loadChildren:()=>o.e(93).then(o.bind(o,3093)).then(t=>t.ProjectsModule)}]}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(O),r.Bz]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,P]}),t})()}}]);