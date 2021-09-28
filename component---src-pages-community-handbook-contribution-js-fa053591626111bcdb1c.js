(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[4864],{52455:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(67294),a=t(11521),l=t(25444),r=t(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.secondaryColor})),i=t(61424),c=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1];return o.createElement(r,null,o.createElement("div",{className:"go-back"},o.createElement(l.Link,{to:"/community/handbook"},o.createElement(a.PSe,null),o.createElement("h4",null,"Table of Content")),o.createElement("div",{className:"toc-toggle-btn"},n?o.createElement(i.QAE,{className:"toc-menu-icon",onClick:function(){t(!n)}}):o.createElement(i.Ejh,{className:"toc-menu-icon",onClick:function(){t(!n)}}))),o.createElement("div",{className:"toc-list"},o.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/about",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"About")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/community",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Community")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/contribution",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Contribution")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/repository-overview",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Repository Overview")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/projects",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Projects")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/mentorship-programs",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Mentorship Programs")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/learn-layer5",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Learn Layer5")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/connect-with-us",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Connect with us")),o.createElement("li",null,o.createElement(l.Link,{to:"/community/handbook/code-of-conduct",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Code of Conduct")))))}},71689:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var o=t(67294),a=t(70456),l=t(20092),r=t(36179),i=t(57067),c=t(21101),m=t(52455),s=t(18381),u=function(){return o.createElement(c.U,null,o.createElement("div",{className:"page-header-section"},o.createElement("h1",null,"Contribution")),o.createElement(m.Z,null),o.createElement("div",{className:"page-section"},o.createElement(i.W2,null,o.createElement("h2",null,"General contribution flow"),o.createElement("p",null,"Pull requests (PRs) are the best ways to propose changes to a project repository. At Layer5 org, we use the Github Flow:"),o.createElement("div",{className:"content"},o.createElement("h3",null,"Working by forking any of the project repository"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Just head over to the ",o.createElement("a",{href:"https://github.com/layer5io"},"Layer5 org")," Github page and click the \"Fork\" button. It's just that simple. Once you've done that, you can use your favorite git client to clone your repo or just head straight to the command line.")," ")),o.createElement("h3",null,"Clone your fork to your local machine"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Go to your GitHub account, open the forked repository, click on the code button and then click the “copy to clipboard” icon if you intend to use a command-line tool. ")),o.createElement("li",null,o.createElement("span",null,"Open the terminal and run the following git command:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git clone “URL you copied from the clipboard.”"}))))),o.createElement("h3",null,"Add 'upstream' repo to list of remotes"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Keeping your fork up to date while this isn't a necessary step. If you plan on doing anything more than a tiny quick fix, you'll want to make sure you keep your fork up to date by tracking the original \"upstream\" repo that you forked earlier.")),o.createElement("li",null,o.createElement("span",null,"To do this, you'll need to add a remote. An example of the command is given below:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git remote add upstream https://github.com/layer5io/meshery.git "})),'Here “meshery" is used as the example repo. Be sure to reference the actual repo you are contributing to.'))),o.createElement("h3",null,"Create and checkout a new branch"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Whenever you begin to work on a new feature or bugfix, it's important that you create a new branch. Not only is it a proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task completed.")),o.createElement("li",null,o.createElement("span",null,"Perform the flow:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:" git checkout -b your-new-branch-name"})),"For example,",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git checkout -b feature"})),"  (feature being a branch name)"))),o.createElement("h3",null,"Make the necessary changes to your file."),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Now, go to town hacking away and make whatever changes you want to.")),o.createElement("li",null,o.createElement("span",null,"To add the changes you have made to your branch, use:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git add <file> "})))),o.createElement("li",null,o.createElement("span",null," If you add multiple file changes to the branch, you simply use:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:" git add ."}))))),o.createElement("h3",null,"Commit the changes made"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Now commit those changes using the git commit command:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git commit -s -m “This is my commit message”"}))))),o.createElement("h3",null,"Push changes to Github and submit a pull request (PR)"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"To push your changes, run the git command:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git push origin your_branch_name"})))))))))},d=t(45027),h=t(34967),g=t(97956),p=t(38155),b=function(){return o.createElement(a.f6,{theme:p.Z},o.createElement(l.Z,null,o.createElement(g.Z,null),o.createElement(r.Z,{title:"Contribution",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),o.createElement(d.Z,null),o.createElement(u,null),o.createElement(h.Z,null)))}},21101:function(e,n,t){"use strict";t.d(n,{U:function(){return o}});var o=t(70456).ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n    .highlight{\n      font-weight: 600;\n    }\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n    ul > li {\n        color: ",";\n      }\n    ol > li {\n        color: ",";\n      }\n    ul > li > span {\n        color: ",";\n      }\n    ol > li > span {\n      color: ",";\n    }\n    }\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n    .page-section{\n      margin-top: -29rem;\n      margin-left: 20rem;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n\n    table {\n    border-collapse: collapse;\n    width: 98%;\n    margin: 1rem 0 2rem 0;\n    .github-icon{\n      height: 1.7rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .site-icon{\n      height: 1.6rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n        }\n\n  td, th {\n    border: 0.05rem solid ",";\n    text-align: left;\n    padding: 0.5rem;\n        }\n      .linkscol{\n        text-align: center;\n        width:8%;\n      }\n  tbody:nth-child(even) {\n    background-color: ",';\n        }\n\n  .codes{\n    width:75%\n    margin-top:-2rem;\n  }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.2em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",";\n    }\n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n    }\n    }\n\n    @media only screen and (max-width: 475px){\n        .page-header-section h1{\n            padding: 0 1rem;\n            line-height: 3rem;\n            padding-top: 4rem;\n        }\n        .page-section{\n          margin-top: -2rem;\n          margin-left: 0rem;\n        }\n        table{\n          margin-left: -1.5rem;\n        }\n        .frontendTable{\n          margin-left: -2.8rem;\n        }\n    }\n  .channels-list {\n    padding-left: 40px;\n  }\n  .channels-img {\n    width: 30px;\n    height: 30px;\n  }\n  .channels-para {\n    display: flex;\n    align-items: flex-end;\n  }\n"],(function(e){return e.theme.menuColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.black}),(function(e){return e.theme.black}),(function(e){return e.theme.tertiaryColor}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.secondaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.secondaryLightColor}))}}]);
//# sourceMappingURL=component---src-pages-community-handbook-contribution-js-fa053591626111bcdb1c.js.map