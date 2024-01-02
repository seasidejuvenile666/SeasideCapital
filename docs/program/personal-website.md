---
sidebar_position: 1
---

# 面向小白的0成本搭建个人网站教程

## 框架

目前搭建个人网站的框架主要有`docusaurus`和`hexo`两种，本教程使用`docusaurus`

## 搭建环境

1. 安装IDE（我用的是[vscode](https://code.visualstudio.com/Download)）
2. 安装[node.js](https://nodejs.org/en)

安装好vscode后在vscode中打开一个文件夹，我这里是新建的`test`文件夹

## 引入docusaurus脚手架

在vscode的终端输入一行命令`npx create-docusaurus@latest my-website classic`，其中`my-website`可以改成自己的项目名，我这里是`starknetSB`

![docusaurus](/img/docs/program/personal-website/1.png)

按下回车后还需要输入一个y，整个过程大约需要几分钟

![docusaurus](/img/docs/program/personal-website/2.png)

安装好后打开自己的文件夹，我这里需要打开`starknetSB`文件夹

![docusaurus](/img/docs/program/personal-website/3.png)

## 修改题目并测试

`docusaurus`有很多功能可以使用，建议大家自己看官网摸索

1. [中文官网](https://www.docusaurus.cn/)
2. [英文官网](https://docusaurus.io/)

我这里演示一个修改题目并且在本地测试的例子

首先找到根目录下的`docusaurus.config.js`文件，修改title的值为`starknetSB`

![docusaurus](/img/docs/program/personal-website/4.png)

然后在终端输入`npm start`

![docusaurus](/img/docs/program/personal-website/5.png)

运行完毕后就会在浏览器中跳出一个域名为`localhost:3000`的测试网页，可以看到我的网页题目成功被修改为`starknetSB`

![docusaurus](/img/docs/program/personal-website/6.png)

## 部署

网页要想让其他人能访问必须被部署到服务器上，[vercel](https://vercel.com/)提供了免费的静态网页部署服务

首先把我们的代码push到github上，点击左边的源代码管理图标

![docusaurus](/img/docs/program/personal-website/7.png)

点击下面的`发布到github`(vscode需要先连接到自己的github)

![docusaurus](/img/docs/program/personal-website/8.png)

点击vscode上方的选择`private`或`public`方式

![docusaurus](/img/docs/program/personal-website/9.png)

接着去[vercel官网](https://vercel.com/)登录自己github，然后import

![docusaurus](/img/docs/program/personal-website/10.png)

然后选择框架为Docusaurus（v2），点击deploy

![docusaurus](/img/docs/program/personal-website/11.png)

大约一分钟后，出现这个页面就是成功了，然后点击右上角的continue to dashboard

![docusaurus](/img/docs/program/personal-website/12.png)

vercel会给你分配一个域名，点击域名就来到自己的网页了

![docusaurus](/img/docs/program/personal-website/13.png)

![docusaurus](/img/docs/program/personal-website/14.png)