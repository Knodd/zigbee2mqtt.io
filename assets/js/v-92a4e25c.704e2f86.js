"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6691],{9832:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-92a4e25c",path:"/devices/72922-A.html",title:"Sylvania 72922-A control via MQTT",lang:"en-US",frontmatter:{title:"Sylvania 72922-A control via MQTT",description:"Integrate your Sylvania 72922-A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/72922-A.md",git:{updatedTime:1646158945e3}}},48779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a(66252);const d=(0,i.uE)('<h1 id="sylvania-72922-a" tabindex="-1"><a class="header-anchor" href="#sylvania-72922-a" aria-hidden="true">#</a> Sylvania 72922-A</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>72922-A</td></tr><tr><td>Vendor</td><td>Sylvania</td></tr><tr><td>Description</td><td>SMART+ Smart Plug</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/72922-A.jpg" alt="Sylvania 72922-A"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),o=(0,i.Uk)("This device supports OTA updates, for more information see "),s=(0,i.Uk)("OTA updates"),r=(0,i.Uk)("."),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),c={},l=(0,a(83744).Z)(c,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[o,(0,i.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[s])),_:1}),r]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);