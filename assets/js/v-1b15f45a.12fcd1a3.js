"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66905],{59990:(t,e,i)=>{i.r(e),i.d(e,{data:()=>a});const a={key:"v-1b15f45a",path:"/devices/4200-C.html",title:"Centralite 4200-C control via MQTT",lang:"en-US",frontmatter:{title:"Centralite 4200-C control via MQTT",description:"Integrate your Centralite 4200-C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-09-21T17:10:35.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/4200-C.md",git:{updatedTime:1646158945e3}}},51172:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="centralite-4200-c" tabindex="-1"><a class="header-anchor" href="#centralite-4200-c" aria-hidden="true">#</a> Centralite 4200-C</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>4200-C</td></tr><tr><td>Vendor</td><td>Centralite</td></tr><tr><td>Description</td><td>Smart outlet</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/4200-C.jpg" alt="Centralite 4200-C"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},o=(0,i(83744).Z)(d,[["render",function(t,e){return a}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[i,a]of e)t[i]=a;return t}}}]);