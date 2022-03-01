"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[5662],{32873:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-37ec4ea9",path:"/devices/SZ-ESW02.html",title:"Sercomm SZ-ESW02 control via MQTT",lang:"en-US",frontmatter:{title:"Sercomm SZ-ESW02 control via MQTT",description:"Integrate your Sercomm SZ-ESW02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-11-09T18:37:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SZ-ESW02.md",git:{updatedTime:1646158945e3}}},44493:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const o=(0,i(66252).uE)('<h1 id="sercomm-sz-esw02" tabindex="-1"><a class="header-anchor" href="#sercomm-sz-esw02" aria-hidden="true">#</a> Sercomm SZ-ESW02</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SZ-ESW02</td></tr><tr><td>Vendor</td><td>Sercomm</td></tr><tr><td>Description</td><td>Telstra smart plug 2</td></tr><tr><td>Exposes</td><td>switch (state), power, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SZ-ESW02.jpg" alt="Sercomm SZ-ESW02"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>With the device unplugged (or socket switched off), press and hold the pairing button for ~4 seconds. Continue holding the pairing button while plugging in the device (or switching the socket on) and continue to hold while the LED has been illuminated (in 4 seconds). The sensor shall the wipe any knowledge of the previous network and other configuration parameters and begin searching for a new network (Auto Joining State).</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),a={},r=(0,i(83744).Z)(a,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);