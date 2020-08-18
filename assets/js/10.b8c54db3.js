(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(t,e,r){"use strict";r.r(e);var a=r(42),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"tcp-ip参考模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip参考模型"}},[t._v("#")]),t._v(" TCP/IP参考模型")]),t._v(" "),r("p",[t._v("TCP/IP是Internet的基础网络通信协议，它规范了网络上所有网络设备之间数据往来的格式和传送方式。TCP和IP是两个独立的协议，它们负责网络中数据的传输。TCP位于OSI参考模型的传输层，而IP则位于网络层")]),t._v(" "),r("p",[t._v("TCP/IP中包含一组通信协议，因此被称为协议簇。TCP/IP协议簇中包含网络接口层、网络层、传输层和应用层。TCP/IP协议簇和OSI参考模型间的对应关系如图")]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/network/image-20200813174316262.png",alt:"image-20200813174316262"}})]),t._v(" "),r("h2",{attrs:{id:"网络接口层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络接口层"}},[t._v("#")]),t._v(" 网络接口层")]),t._v(" "),r("p",[t._v("在TCP/IP参考模型中，网络接口层位于最低层。它负责通过网络发送和接收IP数据报。网络接口层包括各种物理网络协议，例如，局域网的Ethernet（以太网）协议、Token Ring（令牌环）协议，分组交换网的X.25协议等。")]),t._v(" "),r("h2",{attrs:{id:"网络层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),r("p",[t._v("在TCP/IP参考模型中，网络层位于第2层。它负责将源主机的报文分组发送到目的主机，源主机与目的主机可以在一个网段中，也可以在不同的网段中。")]),t._v(" "),r("p",[t._v("网络层包括下面4个核心协议。")]),t._v(" "),r("p",[t._v("1、IP（Internet Protocol，网际协议）：主要任务是对数据包进行寻址和路由，把数据包从一个网络转发到另一个网络。")]),t._v(" "),r("p",[t._v("2、ICMP（Internet Control Message Protocol，网际控制报文协议）：用于在IP主机和路由器之间传递控制消息。控制消息是指网络是否连通、主机是否可达、路由是否可用等网络本身的消息，这些控制消息虽然并不传输用户数据，但是对于用户数据的传递起着重要的作用。•")]),t._v(" "),r("p",[t._v("3、ARP（Address Resolution Protocol，地址解析协议）：可以通过IP地址得知其物理地址（Mac地址）的协议。在TCP/IP网络环境下，每个主机被都分配了一个32位的IP地址，这种互联网地址是在网际范围标识主机的一种逻辑地址。为了让报文在物理网络上传送，必须知道目的主机的物理地址，这样就存在IP地址向物理地址的转换问题。")]),t._v(" "),r("p",[t._v("4、RARP（Reverse Address Resolution Protocol，逆向地址解析协议）：该协议用于完成物理地址向IP地址的转换。")]),t._v(" "),r("h2",{attrs:{id:"传输层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),r("p",[t._v("在TCP/IP参考模型中，传输层位于第3层。它负责在应用程序之间实现端到端的通信。传输层中定义了下面两种协议。")]),t._v(" "),r("p",[t._v("1、TCP：是一种可靠的面向连接的协议，它允许将一台主机的字节流无差错地传送到目的主机。TCP同时要完成流量控制功能，协调收发双方的发送与接收速度，达到正确传输的目的。")]),t._v(" "),r("p",[t._v("2、UDP：是一种不可靠的无连接协议。与TCP相比，UDP更加简单，数据传输速率也较高。当通信网的可靠性较高时，UDP方式具有更高的优越性。")]),t._v(" "),r("h2",{attrs:{id:"应用层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),r("p",[t._v("在TCP/IP参考模型中，应用层位于最高层，其中包括了所有与网络相关的高层协议。常用的应用层协议说明如下。")]),t._v(" "),r("p",[t._v("1、Telnet（Teletype Network，网络终端协议）：用于实现网络中的远程登录功能。")]),t._v(" "),r("p",[t._v("2、FTP（File Transfer Protocol，文件传输协议）：用于实现网络中的交互式文件传输功能。")]),t._v(" "),r("p",[t._v("3、SMTP（Simple Mail Transfer Protocol，简单邮件传输协议）：用于实现网络中的电子邮件传送功能。")]),t._v(" "),r("p",[t._v("4、DNS（Domain Name System，域名系统）：用于实现网络设备名称到IP地址的映射。")]),t._v(" "),r("p",[t._v("5、SNMP（Simple Network Management Protocol，简单网络管理协议）：用于管理与监视网络设备。")]),t._v(" "),r("p",[t._v("6、RIP（Routing Information Protocol，路由信息协议）：用于在网络设备之间交换路由信息。")]),t._v(" "),r("p",[t._v("7、NFS（Network File System，网络文件系统）：用于网络中不同主机之间的文件共享。")]),t._v(" "),r("p",[t._v("8、HTTP（Hyper Text Transfer Protocol，超文本传输协议）：这是互联网上应用最为广泛的一种网络协议。所有的WWW文件都必须遵守这个标准。设计HTTP的最初目的是为了提供一种发布和接收HTML页面的方法。")])])}),[],!1,null,null,null);e.default=v.exports}}]);