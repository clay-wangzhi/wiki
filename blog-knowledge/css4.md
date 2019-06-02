---
title: 浅谈CSS（行高和字号、超链接的美化、background系列属性）
tag: CSS
categories: 前端
date: 2018-07-27 18:00:00
copyright: true
---

好了，今天继续学习CSS，go！本节内容有行高和字号、超链接的美化、background系列属性。

<!--more-->

## 行高和字号

### 行高

CSS中，所有的行，都有行高。盒模型的padding，绝对不是直接作用在文字上的，而是作用在“行”上的。

```css
line-height: 20px;
```

文字，是在自己的行里面居中的。

为了严格行高、字号，一般都是偶数。这样，它们的差，就是偶数，就能够被2整除。

### 单行文本垂直居中

文本在行里面居中

公式：`行高：盒子高`

需要注意的是，这个小技巧，行高=盒子高，**只适用于单行文本垂直居中！！不适用于多行**。

如果想让多行文本垂直居中，需要设置盒子的padding。

### font属性

**使用font属性，能够将字号、行高、字体，能够一起设置**

```css
font: 14px/24px "宋体";
```

等价于三行语句：

```css
font-size:14px;
line-height:24px;
font-family:"宋体";
```

font-family就是“字体”。family是“家庭”、“伐木累”的意思。

**网页中不是所有字体都能用哦，因为这个字体要看用户的电脑里面装没装**，比如你设置

```css
font-family:"华文彩云"
```

如果用户电脑里面没有这个字体，那么就会变成宋体。

**页面中，中文我们只使用： 微软雅黑、宋体、黑体。 如果页面中，需要其他的字体，那么需要切图。**

**为了防止用户电脑里面，没有微软雅黑这个字体。就要用英语的逗号，隔开备选字体**，就是说如果用户电脑里面，没有安装微软雅黑字体，那么就是宋体：

```css
font-family:"微软雅黑","宋体";
```

备选字体可以有无数个，用逗号隔开。

**我们要将英语字体，放在最前面，这样所有的中文，就不能匹配英语字体，就自动的变为后面的中文字体**：

```css
font-family: "Times New Roman","微软雅黑","宋体";
```

**所有的中文字体，都有英语别名，我们也要知道**

微软雅黑的英语别名：Microsoft YaHei

宋体的英语别名：SimSun

**行高可以用百分比，表示字号的百分之多少**。一般来说，都是大于100%的，因为行高一定要大于字号:

```css
font:12px/200% "SimSun"
```

## 超级链接的美化

超级链接就是a标签

### 伪类

也就是说，同一个标签，根据用户的某种状态不同，有不同的样式。这就叫做“伪类”。

类就是工程师加的，比如div属于box类，很明确，就是属于box类。但是a属于什么类？不明确。因为要看用户有没有点击、有没有触碰。所以，就叫做“伪类”。

伪类用冒号来表示。

a标签有4种伪类：

```css
a:link{
    color:red;
}
a:visited{
    color:orange;
}
a:hover{
    color:green;
}
a:active{
    color:black;
}
```

:link      表示， 用户没有点击过这个链接的样式。是英语“链接”的意思。

:visited    表示，用户访问过了这个链接的样式。 是英语“访问过的”的意思。

:hover     表示，用户鼠标悬停的时候链接的样式。 是英语“悬停”的意思。

:active     表示，用户用鼠标点击这个链接，但是不松手，此刻的样式。 是英语“激活”的意思。

记住，这四种状态，在css中，必须按照固定的顺序写：

a:**l**ink、a:**v**isited 、a:**h**over 、a:**a**ctive

如果不按照顺序，那么将失效。“爱恨准则”

lo**v**e **ha**te。必须先爱，后恨。

### 超链接美化

a标签在使用的时候，非常的难。因为不仅仅要控制a这个盒子，也要控制它的伪类。

我们一定要将a标签写在前面，`:link、:visited、:hover、:active`这些伪类写在后面。

a标签中，描述盒子；伪类中描述文字的样式、背景。

```css
.nav ul li a{
	display: block;
	width: 120px;
	height: 40px;
}
.nav ul li a:link ,.nav ul li a:visited{
	text-decoration: none;
	background-color: yellowgreen;
	color:white;
}
.nav ul li a:hover{
	background-color: purple;
	font-weight: bold;
	color:yellow;
}
```

记住，所有的a不继承text、font这些东西。因为a自己有一个伪类的权重。

最标准的，就是把link、visited、hover都要写。但是前端开发工程师在大量的实践中，发现不写link、visited浏览器也挺兼容。所以这些“老油条”们，就把a标签简化了：

a:link、a:visited都是可以省略的，简写在a标签里面。也就是说，a标签涵盖了link、visited的状态

```css
.nav ul li a{
	display: block;
	width: 120px;
	height: 50px;
	text-decoration: none;
	background-color: purple;
	color:white;
}
.nav ul li a:hover{
	background-color: orange;
}

```

## background系列属性

### background-color属性

背景颜色属性。

css2.1中，颜色的表示方法有哪些？一共有三种：单词、rgb表示法、十六进制表示法。

#### 用英语单词来表示

能够用英语单词来表述的颜色，都是简单颜色。

红色：

```css
background-color:red;
```

#### 用rgb方法来表示

红色：

```css
background-color:rgb(255,0,0);
```

rgb表示三原色“红”red、“绿”green、“蓝”blue。光学显示器，每个像素都是由三原色的发光原件组成的，靠明亮度不同调成不同的颜色的。

**用逗号隔开，r、g、b的值，每个值的取值范围0~255，一共256个值。**

如果此项的值，是255，那么就说明是纯色：

绿色：

```css
background-color: rgb(0,255,0);  
```

蓝色：

 ```css
background-color: rgb(0,0,255);
 ```

黑色：

```css
background-color: rgb(0,0,0);
```

光学显示器，每个元件都不发光，黑色的。

白色：

 ```css
background-color: rgb(255,255,255);
 ```

颜色可以叠加，比如黄色就是红色和绿色的叠加：

 ```css
background-color: rgb(255,255,0);
 ```

#### 十六进制表示法

红色：

```css
background-color:#ff0000;
```

所有用#开头的值，都是16进制的。

\#<font color=red>ff</font><font color=green>00</font><font color=blue>00</font>

### background-image

用于给盒子加上背景图片：

```css
background-image:url(images/wuyifan.jpg);
```

url()表示网址，uniform resouces locator 同意资源定位符

images/wuyifan.jpg 就是相对路径。

背景天生是会被平铺满的。

padding的区域有背景图。

### background-repeat属性

设置背景图是否重复的，重复方式的。

repeat表示“重复”。

也就是说，background-repeat属性，有三种值：

```css
background-repeat:no-repeat;  不重复
background-repeat:repeat-x;   横向重复
background-repeat:repeat-y;   纵向重复
```

### background-position属性

#### 属性的意思

背景定位属性，是最难的属性。

position就是“位置”的意思。background-position就是背景定位属性。

```css
background-position:向右移动量 向下移动量;
```

定位属性可以是负数。

#### 用单词描述

```css
background-position: 描述左右的词儿  描述上下的词儿;
```

描述左右的词儿： left、 center、right

描述上下的词儿： top 、center、bottom

### background-attachment

背景是否固定。

```css
background-attachment:fixed
```

背景就会被固定住，不会被滚动条滚走。

### background综合属性

background属性和border一样，是一个综合属性：

```css
background:red url(1.jpg) no-repeat 100px 100px fixed;
```

等价于：

```css
background-color:red;
background-image:url(1.jpg);
background-repeat:no-repeat;
background-position:100px 100px;
background-attachment:fixed;
```