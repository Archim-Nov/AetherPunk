import{i as y}from"./main-B0k0c_uB.js";const u=y.global.t,o=y.global.t,c=y.global.te;function p(t){return t==="zh-CN"?()=>{}:n=>c(n,t)?o(n,void 0,{locale:t}):void 0}function I(t,n={},a="zh-CN"){return o(`profileFallback.${t}`,n,{locale:a})}function s(t,n,a,e){if(!n)return a??"";const i=`lore.${t}.${n}`,m=e?o(i,void 0,{locale:e}):u(i);return m===i?a??n:m}function h(t,n,a,e){if(!n)return e??"";const i=`stats.${t}.${n}.${a}`,m=u(i);return m===i?e??"":m}function b(t,n,a,e,i){if(!n)return e??"";const m=`academy.${t}.${n}.${a}`,r=i?o(m,void 0,{locale:i}):u(m);return r===m?e??"":r}function x(t,n,a,e){const m=Math.min(t==="arcanet"?7:5,Math.max(1,Math.round(n))),r=`ranks.${t}.${m}`,d=e?o(r,void 0,{locale:e}):u(r);return d===r?a??"":d}function R(t,n){const{id:a,label:e}=t;if(a.startsWith("bloodline:")){const i="skillModifiers.bloodlinePrefix",m=n?o(i,void 0,{locale:n}):u(i);if(m===i)return e;const r=e.replace(/^血缘\s*/,"");return r?`${m} ${r}`:m}if(a.startsWith("faction:")){const i=a.split(":")[1];if(i==="independent"){const m=s("factions","chorus","街头",n),r=s("factions","independent","独立者",n);return`${m} / ${r}`}return s("factions",i,e,n)}if(a.startsWith("background:")){const i=a.slice(11),m=i.lastIndexOf(":"),r=m>0?i.slice(0,m):i;return s("origins",r,e,n)}return e}function v(t,n,a,e,i){if(!n)return e??"";const m=`loreDetails.${t}.${n}.${a}`,r=i?o(m,void 0,{locale:i}):u(m);return r===m?e??"":r}function f(t,n,a,e){const i=`questionnaire.${t}.${n}.${a}`,m=u(i);return m===i?e??"":m}const Q=[[20,"legend"],[16,"extraordinary"],[12,"expert"],[8,"skilled"],[4,"usable"],[0,"novice"]];function g(t){var a;const n=((a=Q.find(([e])=>t>=e))==null?void 0:a[1])??"novice";return u(`skillRank.${n}`)}function T(t,n,a){const e=`resources.${t.replace(/\./g,"__")}.${n}`,i=u(e);return i===e?a??"":i}function z(t,n,a){const e=`questionnaire.result.${t}`,i=o(e,n);return i===e?a??"":i}function w(t,n,a,e){const i=`questionnaire.adventure.${t}.options.${n}.${a}`,m=u(i);return m===i?e??"":m}const l={terminal:"characterCreation.disciplineTerminalLabel",preloaded:"characterCreation.disciplinePreloadedLabel",ritual:"characterCreation.disciplineRitualLabel"};function E(t,n){var i;const a=[];t.faction&&a.push(s("factions",t.faction,t.faction,n)),(i=t.originBackground)!=null&&i.id?a.push(s("origins",t.originBackground.id,t.originBackground.name??void 0,n)):t.origin&&a.push(t.origin);const e=t.discipline?l[t.discipline]:void 0;if(e){const m=n?o(e,void 0,{locale:n}):u(e);m!==e&&a.push(m)}return a.join(" · ")}const S=`version: 1
# Optional. Use arcanet, chorus, academy, or independent. Omit factionId for a generic fallback template.
factionId: arcanet
enemyTemplate:
  threatTier: 2
  # Optional combat AI role: striker, controller, defender, or supporter.
  # Omit when the enemy has no clear tactical role.
  tacticRole: striker
  attributes:
    str: 8
    rea: 8
    con: 7
    log: 6
    sen: 6
    com: 5
  equipmentIds:
    - weapon.t1.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - aether-stabilizer

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,U=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 2
    sen: 3
    com: 2
  equipmentIds:
    - focus.t0.003
  loadout:
    - rit_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,k=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 3
    sen: 2
    com: 2
  equipmentIds:
    - focus.t0.002
  loadout:
    - rit_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,q=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 2
    sen: 2
    com: 2
  equipmentIds:
    - focus.t0.001
  loadout:
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,C=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 2
    sen: 2
    com: 2
  equipmentIds:
    - focus.t0.001
  loadout:
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,K=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 3
    sen: 2
    com: 1
  equipmentIds:
    - focus.t0.003
  loadout:
    - rit_t1_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,B=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 2
    sen: 3
    com: 2
  equipmentIds:
    - focus.t0.002
  loadout:
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,N=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 2
    sen: 2
    com: 2
  equipmentIds:
    - focus.t0.002
  loadout:
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,D=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 3
    sen: 2
    com: 1
  equipmentIds:
    - focus.t0.001
  loadout:
    - rit_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,P=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 2
    con: 2
    log: 2
    sen: 2
    com: 1
  equipmentIds:
    - focus.t0.002
  loadout:
    - rit_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,W=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 2
    sen: 2
    com: 3
  equipmentIds:
    - focus.t0.003
  loadout:
    - rit_t1_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,F=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 3
    sen: 2
    com: 2
  equipmentIds:
    - focus.t0.001
  loadout:
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,j=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 2
    sen: 3
    com: 3
  equipmentIds:
    - focus.t0.003
  loadout:
    - rit_t1_036
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,J=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 3
    rea: 5
    con: 3
    log: 6
    sen: 5
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_010
    - rit_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,$=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 3
    rea: 6
    con: 3
    log: 7
    sen: 4
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_010
    - rit_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,L=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 3
    rea: 5
    con: 3
    log: 6
    sen: 6
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_003
    - rit_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,O=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 4
    rea: 5
    con: 4
    log: 5
    sen: 4
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,M=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 3
    rea: 5
    con: 5
    log: 5
    sen: 5
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_036
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,A=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 3
    rea: 5
    con: 4
    log: 5
    sen: 6
    com: 5
  equipmentIds:
    - focus.t1.001
    - weapon.t1.001
  loadout:
    - rit_t1_009
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Y=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 4
    rea: 6
    con: 3
    log: 5
    sen: 4
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_007
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,G=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 5
    rea: 5
    con: 4
    log: 5
    sen: 4
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_007
    - rit_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,H=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 3
    rea: 7
    con: 3
    log: 5
    sen: 5
    com: 5
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_001
    - rit_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,V=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 3
    rea: 5
    con: 3
    log: 6
    sen: 4
    com: 6
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,X=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 3
    rea: 5
    con: 3
    log: 6
    sen: 4
    com: 7
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_027
    - rit_t1_036
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Z=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 3
    rea: 5
    con: 3
    log: 5
    sen: 6
    com: 6
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_036
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,nn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 6
    rea: 8
    con: 5
    log: 9
    sen: 7
    com: 7
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_010
    - rit_t1_003
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,tn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 6
    rea: 9
    con: 5
    log: 10
    sen: 6
    com: 7
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t1_010
    - rit_t2_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,en=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 6
    rea: 8
    con: 5
    log: 9
    sen: 8
    com: 7
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_003
    - rit_t1_010
    - rit_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,an=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 7
    rea: 8
    con: 6
    log: 8
    sen: 6
    com: 7
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_036
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,mn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 6
    rea: 8
    con: 7
    log: 8
    sen: 7
    com: 7
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t1_009
    - rit_t1_036
    - rit_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,rn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 6
    rea: 8
    con: 6
    log: 8
    sen: 8
    com: 7
  equipmentIds:
    - focus.t1.001
    - weapon.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_001
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,un=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 7
    rea: 9
    con: 5
    log: 8
    sen: 6
    com: 7
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_007
    - rit_t1_010
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,on=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 8
    rea: 8
    con: 6
    log: 8
    sen: 6
    com: 7
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_007
    - rit_t2_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,sn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 6
    rea: 10
    con: 5
    log: 8
    sen: 7
    com: 7
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_001
    - rit_t1_007
    - rit_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,yn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 6
    rea: 8
    con: 5
    log: 9
    sen: 6
    com: 8
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_027
    - rit_t1_036
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,dn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 6
    rea: 8
    con: 5
    log: 9
    sen: 6
    com: 9
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t1_009
    - rit_t2_002
    - rit_t1_036
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,cn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 6
    rea: 8
    con: 5
    log: 8
    sen: 8
    com: 8
  equipmentIds:
    - focus.t1.001
  loadout:
    - rit_t1_009
    - rit_t1_036
    - rit_t1_027
    - rit_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Qn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 9
    rea: 10
    con: 8
    log: 12
    sen: 9
    com: 10
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t2_007
    - rit_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ln=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 9
    rea: 11
    con: 8
    log: 13
    sen: 8
    com: 10
  equipmentIds:
    - focus.t1.002
  loadout:
    - rit_t2_007
    - rit_t2_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,_n=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 9
    rea: 10
    con: 8
    log: 12
    sen: 10
    com: 10
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t1_010
    - rit_t2_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,pn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 10
    rea: 10
    con: 9
    log: 11
    sen: 8
    com: 10
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t2_002
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,In=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 9
    rea: 10
    con: 10
    log: 11
    sen: 9
    com: 10
  equipmentIds:
    - focus.t1.002
  loadout:
    - rit_t2_002
    - rit_t1_009
    - rit_t1_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,hn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 9
    rea: 10
    con: 9
    log: 11
    sen: 10
    com: 10
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - weapon.t1.001
  loadout:
    - rit_t2_002
    - rit_t1_009
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,bn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 10
    rea: 11
    con: 8
    log: 11
    sen: 8
    com: 10
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t2_005
    - rit_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,xn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 11
    rea: 10
    con: 9
    log: 11
    sen: 8
    com: 10
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t2_005
    - rit_t2_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Rn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 9
    rea: 12
    con: 8
    log: 11
    sen: 9
    com: 10
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t1_010
    - rit_t2_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,vn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 9
    rea: 10
    con: 8
    log: 12
    sen: 8
    com: 11
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t2_002
    - rit_t1_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,fn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 9
    rea: 10
    con: 8
    log: 12
    sen: 8
    com: 12
  equipmentIds:
    - focus.t1.002
  loadout:
    - rit_t2_002
    - rit_t2_018
    - rit_t1_036
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,gn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 9
    rea: 10
    con: 8
    log: 11
    sen: 10
    com: 11
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
  loadout:
    - rit_t2_002
    - rit_t1_036
    - rit_t2_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Tn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 12
    rea: 12
    con: 11
    log: 14
    sen: 11
    com: 12
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_007
    - rit_t2_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,zn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 12
    rea: 13
    con: 11
    log: 15
    sen: 10
    com: 12
  equipmentIds:
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_007
    - rit_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,wn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 12
    rea: 12
    con: 11
    log: 14
    sen: 12
    com: 12
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_007
    - rit_t2_005
    - rit_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,En=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 13
    rea: 12
    con: 12
    log: 13
    sen: 10
    com: 12
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_002
    - rit_t1_009
    - rit_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Sn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 12
    rea: 12
    con: 13
    log: 13
    sen: 11
    com: 12
  equipmentIds:
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_002
    - rit_t2_018
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Un=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 12
    rea: 12
    con: 12
    log: 13
    sen: 12
    com: 12
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_002
    - rit_t1_009
    - rit_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,kn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 13
    rea: 13
    con: 11
    log: 13
    sen: 10
    com: 12
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_005
    - rit_t2_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,qn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 14
    rea: 12
    con: 12
    log: 13
    sen: 10
    com: 12
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_006
    - rit_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Cn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 12
    rea: 14
    con: 11
    log: 13
    sen: 11
    com: 12
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_005
    - rit_t2_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Kn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 12
    rea: 12
    con: 11
    log: 14
    sen: 10
    com: 13
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_002
    - rit_t2_018
    - rit_t3_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Bn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 12
    rea: 12
    con: 11
    log: 14
    sen: 10
    com: 14
  equipmentIds:
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_002
    - rit_t2_018
    - rit_t2_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Nn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 12
    rea: 12
    con: 11
    log: 13
    sen: 12
    com: 13
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t2_027
    - rit_t3_018
    - rit_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Dn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 15
    rea: 14
    con: 14
    log: 16
    sen: 13
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_002
    - rit_t2_007
    - rit_t3_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Pn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 15
    rea: 15
    con: 14
    log: 17
    sen: 12
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_002
    - rit_t3_003
    - rit_t2_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Wn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 15
    rea: 14
    con: 14
    log: 16
    sen: 14
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_003
    - rit_t2_007
    - rit_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Fn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 16
    rea: 14
    con: 15
    log: 15
    sen: 12
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_001
    - rit_t2_002
    - rit_t3_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,jn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 15
    rea: 14
    con: 16
    log: 15
    sen: 13
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_009
    - rit_t2_002
    - rit_t2_018
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Jn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 15
    rea: 14
    con: 15
    log: 15
    sen: 14
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_001
    - rit_t3_009
    - rit_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,$n=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 16
    rea: 15
    con: 14
    log: 15
    sen: 12
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_001
    - rit_t2_006
    - rit_t2_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ln=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 17
    rea: 14
    con: 15
    log: 15
    sen: 12
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_001
    - rit_t3_002
    - rit_t2_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,On=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 15
    rea: 16
    con: 14
    log: 15
    sen: 13
    com: 14
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_002
    - rit_t3_003
    - rit_t2_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Mn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 15
    rea: 14
    con: 14
    log: 16
    sen: 12
    com: 15
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_009
    - rit_t3_018
    - rit_t2_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,An=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 15
    rea: 14
    con: 14
    log: 16
    sen: 12
    com: 16
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_009
    - rit_t3_018
    - rit_t2_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Yn=`version: 1
factionId: academy
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 15
    rea: 14
    con: 14
    log: 15
    sen: 14
    com: 15
  equipmentIds:
    - focus.t1.001
    - focus.t1.002
    - focus.t1.003
  loadout:
    - rit_t3_009
    - rit_t3_018
    - rit_t2_027
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Gn=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.003
  loadout:
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Hn=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Vn=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 2
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Xn=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 3
    rea: 2
    con: 3
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.003
  loadout:
    - weap_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Zn=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 3
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,nt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,tt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,it=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 2
    con: 2
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - weapon.t0.002
  loadout:
    - weap_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,et=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 4
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.003
  loadout:
    - weap_t1_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,at=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,mt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 2
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,rt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ut=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 7
    rea: 5
    con: 7
    log: 2
    sen: 5
    com: 1
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_005
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ot=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 7
    rea: 6
    con: 7
    log: 3
    sen: 4
    com: 1
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_005
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,st=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 7
    rea: 5
    con: 7
    log: 2
    sen: 6
    com: 1
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,yt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 8
    rea: 5
    con: 8
    log: 1
    sen: 4
    com: 1
  equipmentIds:
    - weapon.t1.001
    - armor.t1.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,dt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 7
    rea: 5
    con: 9
    log: 1
    sen: 5
    com: 1
  equipmentIds:
    - weapon.t1.001
    - armor.t1.003
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ct=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 7
    rea: 5
    con: 8
    log: 1
    sen: 6
    com: 1
  equipmentIds:
    - weapon.t1.001
    - armor.t1.001
  loadout:
    - weap_t1_001
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Qt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 8
    rea: 6
    con: 7
    log: 1
    sen: 4
    com: 1
  equipmentIds:
    - weapon.t1.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,lt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 9
    rea: 5
    con: 8
    log: 1
    sen: 4
    com: 1
  equipmentIds:
    - weapon.t1.005
  loadout:
    - weap_t1_005
    - weap_t1_013
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,_t=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 7
    rea: 7
    con: 7
    log: 1
    sen: 5
    com: 1
  equipmentIds:
    - weapon.t1.004
  loadout:
    - weap_t1_004
    - weap_t1_012
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,pt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 7
    rea: 5
    con: 7
    log: 2
    sen: 4
    com: 2
  equipmentIds:
    - armor.t1.001
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,It=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 7
    rea: 5
    con: 7
    log: 2
    sen: 4
    com: 3
  equipmentIds:
    - armor.t1.003
  loadout:
    - app_t1_007
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ht=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 7
    rea: 5
    con: 7
    log: 1
    sen: 6
    com: 2
  equipmentIds:
    - armor.t1.001
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,bt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 10
    rea: 8
    con: 9
    log: 5
    sen: 7
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_005
    - app_t1_006
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,xt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 10
    rea: 9
    con: 9
    log: 6
    sen: 6
    com: 3
  equipmentIds:
    - terminal.t1.001
    - weapon.t1.001
  loadout:
    - app_t1_005
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Rt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 10
    rea: 8
    con: 9
    log: 5
    sen: 8
    com: 3
  equipmentIds:
    - terminal.t1.001
    - weapon.t1.001
  loadout:
    - app_t1_006
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,vt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 11
    rea: 8
    con: 10
    log: 4
    sen: 6
    com: 3
  equipmentIds:
    - weapon.t1.001
    - armor.t1.001
  loadout:
    - weap_t1_001
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ft=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 10
    rea: 8
    con: 11
    log: 4
    sen: 7
    com: 3
  equipmentIds:
    - weapon.t1.005
    - armor.t1.003
  loadout:
    - weap_t1_005
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,gt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 10
    rea: 8
    con: 10
    log: 4
    sen: 8
    com: 3
  equipmentIds:
    - weapon.t1.001
    - armor.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Tt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 11
    rea: 9
    con: 9
    log: 4
    sen: 6
    com: 3
  equipmentIds:
    - weapon.t1.001
    - weapon.t1.005
  loadout:
    - weap_t1_001
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,zt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 12
    rea: 8
    con: 10
    log: 4
    sen: 6
    com: 3
  equipmentIds:
    - weapon.t1.004
    - weapon.t1.005
  loadout:
    - weap_t1_005
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,wt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 10
    rea: 10
    con: 9
    log: 4
    sen: 7
    com: 3
  equipmentIds:
    - weapon.t1.004
    - weapon.t1.001
  loadout:
    - weap_t1_004
    - weap_t1_012
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Et=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 10
    rea: 8
    con: 9
    log: 5
    sen: 6
    com: 4
  equipmentIds:
    - armor.t1.001
    - armor.t1.003
  loadout:
    - app_t1_007
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,St=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 10
    rea: 8
    con: 9
    log: 5
    sen: 6
    com: 5
  equipmentIds:
    - armor.t1.003
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ut=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 10
    rea: 8
    con: 9
    log: 4
    sen: 8
    com: 4
  equipmentIds:
    - armor.t1.003
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_006
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,kt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 13
    rea: 10
    con: 12
    log: 8
    sen: 9
    com: 6
  equipmentIds:
    - terminal.t1.001
    - terminal.t2.002
  loadout:
    - app_t1_005
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,qt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 13
    rea: 11
    con: 12
    log: 9
    sen: 8
    com: 6
  equipmentIds:
    - terminal.t1.001
    - terminal.t2.002
  loadout:
    - app_t2_009
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ct=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 13
    rea: 10
    con: 12
    log: 8
    sen: 10
    com: 6
  equipmentIds:
    - terminal.t1.001
    - terminal.t2.002
  loadout:
    - app_t1_006
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Kt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 14
    rea: 10
    con: 13
    log: 7
    sen: 8
    com: 6
  equipmentIds:
    - weapon.t1.001
    - weapon.t2.001
    - armor.t1.003
  loadout:
    - weap_t1_001
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Bt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 13
    rea: 10
    con: 14
    log: 7
    sen: 9
    com: 6
  equipmentIds:
    - weapon.t1.005
    - weapon.t2.001
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Nt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 13
    rea: 10
    con: 13
    log: 7
    sen: 10
    com: 6
  equipmentIds:
    - weapon.t2.001
    - armor.t1.003
    - terminal.t1.001
  loadout:
    - weap_t2_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Dt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 14
    rea: 11
    con: 12
    log: 7
    sen: 8
    com: 6
  equipmentIds:
    - weapon.t1.001
    - weapon.t2.001
  loadout:
    - weap_t1_001
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Pt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 15
    rea: 10
    con: 13
    log: 7
    sen: 8
    com: 6
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
  loadout:
    - weap_t2_001
    - weap_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Wt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 13
    rea: 12
    con: 12
    log: 7
    sen: 9
    com: 6
  equipmentIds:
    - weapon.t1.004
    - weapon.t2.001
  loadout:
    - weap_t1_012
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ft=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 13
    rea: 10
    con: 12
    log: 8
    sen: 8
    com: 7
  equipmentIds:
    - armor.t1.003
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,jt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 13
    rea: 10
    con: 12
    log: 8
    sen: 8
    com: 8
  equipmentIds:
    - armor.t1.003
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Jt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 13
    rea: 10
    con: 12
    log: 7
    sen: 10
    com: 7
  equipmentIds:
    - armor.t1.003
    - terminal.t2.002
  loadout:
    - app_t1_007
    - app_t1_006
    - app_t2_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,$t=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 16
    rea: 12
    con: 15
    log: 10
    sen: 11
    com: 8
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_002
    - app_t2_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Lt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 16
    rea: 13
    con: 15
    log: 11
    sen: 10
    com: 8
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t2_016
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ot=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 16
    rea: 12
    con: 15
    log: 10
    sen: 12
    com: 8
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_002
    - app_t2_009
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Mt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 17
    rea: 12
    con: 16
    log: 9
    sen: 10
    com: 8
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,At=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 16
    rea: 12
    con: 17
    log: 9
    sen: 11
    com: 8
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Yt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 16
    rea: 12
    con: 16
    log: 9
    sen: 12
    com: 8
  equipmentIds:
    - weapon.t2.001
    - armor.t1.003
    - terminal.t2.002
  loadout:
    - weap_t2_001
    - app_t2_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Gt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 17
    rea: 13
    con: 15
    log: 9
    sen: 10
    com: 8
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
  loadout:
    - weap_t2_001
    - weap_t2_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ht=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 18
    rea: 12
    con: 16
    log: 9
    sen: 10
    com: 8
  equipmentIds:
    - weapon.t2.002
    - weapon.t2.004
  loadout:
    - weap_t2_002
    - weap_t2_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Vt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 16
    rea: 14
    con: 15
    log: 9
    sen: 11
    com: 8
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.004
  loadout:
    - weap_t2_001
    - weap_t2_012
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Xt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 16
    rea: 12
    con: 15
    log: 10
    sen: 10
    com: 9
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Zt=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 16
    rea: 12
    con: 15
    log: 10
    sen: 10
    com: 10
  equipmentIds:
    - armor.t1.003
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t2_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ni=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 16
    rea: 12
    con: 15
    log: 9
    sen: 12
    com: 9
  equipmentIds:
    - armor.t1.003
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_002
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ti=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 19
    rea: 14
    con: 18
    log: 12
    sen: 13
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t3_003
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ii=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 19
    rea: 15
    con: 18
    log: 13
    sen: 12
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t3_003
    - app_t3_014
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ei=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 19
    rea: 14
    con: 18
    log: 12
    sen: 14
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_002
    - app_t2_009
    - app_t3_015
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ai=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 20
    rea: 14
    con: 19
    log: 11
    sen: 12
    com: 10
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t2_002
    - weap_t3_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,mi=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 19
    rea: 14
    con: 20
    log: 11
    sen: 13
    com: 10
  equipmentIds:
    - weapon.t2.002
    - weapon.t2.004
    - armor.t1.003
  loadout:
    - weap_t2_002
    - weap_t2_004
    - weap_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ri=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 19
    rea: 14
    con: 19
    log: 11
    sen: 14
    com: 10
  equipmentIds:
    - weapon.t2.001
    - armor.t1.003
    - terminal.t2.002
  loadout:
    - weap_t2_001
    - app_t2_009
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ui=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 20
    rea: 15
    con: 18
    log: 11
    sen: 12
    com: 10
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.004
  loadout:
    - weap_t2_001
    - weap_t2_004
    - weap_t3_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,oi=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 21
    rea: 14
    con: 19
    log: 11
    sen: 12
    com: 10
  equipmentIds:
    - weapon.t2.002
    - weapon.t2.004
  loadout:
    - weap_t2_002
    - weap_t2_004
    - weap_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,si=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 19
    rea: 16
    con: 18
    log: 11
    sen: 13
    com: 10
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
  loadout:
    - weap_t2_001
    - weap_t2_012
    - weap_t3_023
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,yi=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 19
    rea: 14
    con: 18
    log: 12
    sen: 12
    com: 11
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t3_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,di=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 19
    rea: 14
    con: 18
    log: 12
    sen: 12
    com: 12
  equipmentIds:
    - armor.t1.003
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t3_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ci=`version: 1
factionId: arcanet
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 19
    rea: 14
    con: 18
    log: 11
    sen: 14
    com: 11
  equipmentIds:
    - armor.t1.003
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_009
    - app_t3_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Qi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.003
  loadout:
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,li=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,_i=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,pi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 3
    con: 3
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ii=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,hi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 3
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,bi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.002
  loadout:
    - weap_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,xi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ri=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 4
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.003
  loadout:
    - weap_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,vi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,fi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,gi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 3
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ti=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 3
    rea: 7
    con: 3
    log: 6
    sen: 5
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,zi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 3
    rea: 8
    con: 3
    log: 7
    sen: 4
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_005
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,wi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 3
    rea: 7
    con: 3
    log: 6
    sen: 6
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ei=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 4
    rea: 7
    con: 4
    log: 5
    sen: 4
    com: 3
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Si=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 3
    rea: 7
    con: 5
    log: 5
    sen: 5
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ui=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 3
    rea: 7
    con: 4
    log: 5
    sen: 6
    com: 3
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_007
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ki=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 4
    rea: 8
    con: 3
    log: 5
    sen: 4
    com: 3
  equipmentIds:
    - weapon.t1.001
  loadout:
    - weap_t1_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,qi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 5
    rea: 7
    con: 4
    log: 5
    sen: 4
    com: 3
  equipmentIds:
    - weapon.t1.004
    - weapon.t1.001
  loadout:
    - weap_t1_004
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ci=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 3
    rea: 9
    con: 3
    log: 5
    sen: 5
    com: 3
  equipmentIds:
    - weapon.t1.001
  loadout:
    - weap_t1_001
    - weap_t1_012
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ki=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 3
    rea: 7
    con: 3
    log: 6
    sen: 4
    com: 4
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Bi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 3
    rea: 7
    con: 3
    log: 6
    sen: 4
    com: 5
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ni=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 3
    rea: 7
    con: 3
    log: 5
    sen: 6
    com: 4
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_006
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Di=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 6
    rea: 10
    con: 5
    log: 9
    sen: 7
    com: 5
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_005
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Pi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 6
    rea: 11
    con: 5
    log: 10
    sen: 6
    com: 5
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_005
    - app_t1_022
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Wi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 6
    rea: 10
    con: 5
    log: 9
    sen: 8
    com: 5
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Fi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 7
    rea: 10
    con: 6
    log: 8
    sen: 6
    com: 5
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_007
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ji=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 6
    rea: 10
    con: 7
    log: 8
    sen: 7
    com: 5
  equipmentIds:
    - armor.t1.003
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ji=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 6
    rea: 10
    con: 6
    log: 8
    sen: 8
    com: 5
  equipmentIds:
    - weapon.t1.001
    - armor.t1.003
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_007
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,$i=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 7
    rea: 11
    con: 5
    log: 8
    sen: 6
    com: 5
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Li=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 8
    rea: 10
    con: 6
    log: 8
    sen: 6
    com: 5
  equipmentIds:
    - weapon.t1.004
    - weapon.t1.005
  loadout:
    - weap_t1_004
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Oi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 6
    rea: 12
    con: 5
    log: 8
    sen: 7
    com: 5
  equipmentIds:
    - weapon.t1.004
    - weapon.t1.001
  loadout:
    - weap_t1_012
    - weap_t1_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Mi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 6
    rea: 10
    con: 5
    log: 9
    sen: 6
    com: 6
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ai=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 6
    rea: 10
    con: 5
    log: 9
    sen: 6
    com: 7
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t2_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Yi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 6
    rea: 10
    con: 5
    log: 8
    sen: 8
    com: 6
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_006
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Gi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 9
    rea: 12
    con: 8
    log: 12
    sen: 9
    com: 8
  equipmentIds:
    - terminal.t1.001
    - terminal.t2.002
  loadout:
    - app_t1_006
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Hi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 9
    rea: 13
    con: 8
    log: 13
    sen: 8
    com: 8
  equipmentIds:
    - terminal.t1.001
    - terminal.t2.002
  loadout:
    - app_t2_009
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Vi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 9
    rea: 12
    con: 8
    log: 12
    sen: 10
    com: 8
  equipmentIds:
    - terminal.t1.001
    - terminal.t2.002
  loadout:
    - app_t2_002
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Xi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 10
    rea: 12
    con: 9
    log: 11
    sen: 8
    com: 8
  equipmentIds:
    - weapon.t1.001
    - armor.t1.003
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_007
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Zi=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 9
    rea: 12
    con: 10
    log: 11
    sen: 9
    com: 8
  equipmentIds:
    - terminal.t2.001
    - terminal.t1.001
  loadout:
    - app_t2_003
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ne=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 9
    rea: 12
    con: 9
    log: 11
    sen: 10
    com: 8
  equipmentIds:
    - weapon.t2.001
    - armor.t1.003
    - terminal.t2.002
  loadout:
    - weap_t2_001
    - app_t2_003
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,te=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 10
    rea: 13
    con: 8
    log: 11
    sen: 8
    com: 8
  equipmentIds:
    - weapon.t1.001
    - weapon.t2.001
  loadout:
    - weap_t2_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ie=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 11
    rea: 12
    con: 9
    log: 11
    sen: 8
    com: 8
  equipmentIds:
    - weapon.t2.001
    - weapon.t1.005
  loadout:
    - weap_t2_001
    - weap_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ee=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 9
    rea: 14
    con: 8
    log: 11
    sen: 9
    com: 8
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_012
    - weap_t2_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ae=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 9
    rea: 12
    con: 8
    log: 12
    sen: 8
    com: 9
  equipmentIds:
    - terminal.t2.001
    - terminal.t1.001
  loadout:
    - app_t2_003
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,me=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 9
    rea: 12
    con: 8
    log: 12
    sen: 8
    com: 10
  equipmentIds:
    - terminal.t2.001
    - terminal.t1.001
  loadout:
    - app_t2_003
    - app_t2_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,re=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 9
    rea: 12
    con: 8
    log: 11
    sen: 10
    com: 9
  equipmentIds:
    - terminal.t2.002
    - terminal.t1.001
  loadout:
    - app_t2_003
    - app_t1_006
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ue=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 12
    rea: 14
    con: 11
    log: 14
    sen: 11
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,oe=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 12
    rea: 15
    con: 11
    log: 15
    sen: 10
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t2_016
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,se=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 12
    rea: 14
    con: 11
    log: 14
    sen: 12
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_002
    - app_t2_009
    - app_t3_015
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ye=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 13
    rea: 14
    con: 12
    log: 13
    sen: 10
    com: 10
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
    - armor.t1.003
  loadout:
    - weap_t2_001
    - app_t2_003
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,de=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 12
    rea: 14
    con: 13
    log: 13
    sen: 11
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
    - armor.t1.003
  loadout:
    - app_t2_003
    - app_t2_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ce=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 12
    rea: 14
    con: 12
    log: 13
    sen: 12
    com: 10
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
    - armor.t1.003
  loadout:
    - weap_t2_001
    - app_t2_003
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Qe=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 13
    rea: 15
    con: 11
    log: 13
    sen: 10
    com: 10
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
    - terminal.t1.001
  loadout:
    - weap_t2_001
    - app_t1_006
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,le=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 14
    rea: 14
    con: 12
    log: 13
    sen: 10
    com: 10
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
  loadout:
    - weap_t2_001
    - weap_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,_e=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 12
    rea: 16
    con: 11
    log: 13
    sen: 11
    com: 10
  equipmentIds:
    - weapon.t2.001
    - terminal.t1.001
  loadout:
    - weap_t2_001
    - weap_t2_012
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,pe=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 12
    rea: 14
    con: 11
    log: 14
    sen: 10
    com: 11
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t2_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ie=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 12
    rea: 14
    con: 11
    log: 14
    sen: 10
    com: 12
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t2_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,he=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 12
    rea: 14
    con: 11
    log: 13
    sen: 12
    com: 11
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_002
    - app_t2_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,be=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 15
    rea: 16
    con: 14
    log: 16
    sen: 13
    com: 12
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t3_003
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,xe=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 15
    rea: 17
    con: 14
    log: 17
    sen: 12
    com: 12
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t3_003
    - app_t3_014
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Re=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 15
    rea: 16
    con: 14
    log: 16
    sen: 14
    com: 12
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_002
    - app_t3_015
    - app_t2_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ve=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 16
    rea: 16
    con: 15
    log: 15
    sen: 12
    com: 12
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - weap_t2_001
    - app_t2_003
    - app_t2_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,fe=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 15
    rea: 16
    con: 16
    log: 15
    sen: 13
    com: 12
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
    - armor.t1.003
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t3_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ge=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 15
    rea: 16
    con: 15
    log: 15
    sen: 14
    com: 12
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
    - terminal.t2.001
    - armor.t1.003
  loadout:
    - weap_t2_001
    - app_t2_003
    - app_t2_009
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Te=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 16
    rea: 17
    con: 14
    log: 15
    sen: 12
    com: 12
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
  loadout:
    - weap_t2_001
    - weap_t2_004
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ze=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 17
    rea: 16
    con: 15
    log: 15
    sen: 12
    com: 12
  equipmentIds:
    - weapon.t2.002
    - weapon.t2.004
  loadout:
    - weap_t2_002
    - weap_t2_004
    - weap_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,we=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 15
    rea: 18
    con: 14
    log: 15
    sen: 13
    com: 12
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
  loadout:
    - weap_t2_001
    - weap_t2_012
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ee=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 15
    rea: 16
    con: 14
    log: 16
    sen: 12
    com: 13
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t3_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Se=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 15
    rea: 16
    con: 14
    log: 16
    sen: 12
    com: 14
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - app_t3_009
    - app_t3_018
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ue=`version: 1
factionId: chorus
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 15
    rea: 16
    con: 14
    log: 15
    sen: 14
    com: 13
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_009
    - app_t3_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ke=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,qe=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ce=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 2
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ke=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Be=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 3
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ne=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,De=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Pe=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.002
  loadout:
    - weap_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,We=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 4
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.003
  loadout:
    - weap_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Fe=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,je=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Je=`version: 1
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 3
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,$e=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Le=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.003
  loadout:
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Oe=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: controller
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 2
    sen: 2
    com: 1
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Me=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 3
    rea: 2
    con: 3
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.003
  loadout:
    - weap_t1_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ae=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 3
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ye=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: defender
  attributes:
    str: 2
    rea: 2
    con: 3
    log: 1
    sen: 3
    com: 1
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ge=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.002
  loadout:
    - weap_t1_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,He=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 3
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ve=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: striker
  attributes:
    str: 4
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 1
  equipmentIds:
    - weapon.t0.003
  loadout:
    - weap_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Xe=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ze=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 3
    con: 2
    log: 1
    sen: 2
    com: 2
  equipmentIds:
    - terminal.t0.002
  loadout:
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,na=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 0
  tacticRole: supporter
  attributes:
    str: 2
    rea: 2
    con: 2
    log: 1
    sen: 2
    com: 3
  equipmentIds:
    - terminal.t0.001
  loadout:
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ta=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 7
    rea: 7
    con: 5
    log: 2
    sen: 5
    com: 1
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ia=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 7
    rea: 8
    con: 5
    log: 3
    sen: 4
    com: 1
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_005
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ea=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: controller
  attributes:
    str: 7
    rea: 7
    con: 5
    log: 2
    sen: 6
    com: 1
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,aa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 8
    rea: 7
    con: 6
    log: 1
    sen: 4
    com: 1
  equipmentIds:
    - weapon.t1.001
    - armor.t1.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ma=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 7
    rea: 7
    con: 7
    log: 1
    sen: 5
    com: 1
  equipmentIds:
    - weapon.t1.005
    - armor.t1.003
  loadout:
    - weap_t1_005
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ra=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: defender
  attributes:
    str: 7
    rea: 7
    con: 6
    log: 1
    sen: 6
    com: 1
  equipmentIds:
    - weapon.t1.001
    - armor.t1.001
  loadout:
    - weap_t1_001
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ua=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 8
    rea: 8
    con: 5
    log: 1
    sen: 4
    com: 1
  equipmentIds:
    - weapon.t1.001
  loadout:
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,oa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 9
    rea: 7
    con: 6
    log: 1
    sen: 4
    com: 1
  equipmentIds:
    - weapon.t1.005
    - weapon.t1.001
  loadout:
    - weap_t1_005
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,sa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: striker
  attributes:
    str: 7
    rea: 9
    con: 5
    log: 1
    sen: 5
    com: 1
  equipmentIds:
    - weapon.t1.004
  loadout:
    - weap_t1_004
    - weap_t1_012
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ya=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 7
    rea: 7
    con: 5
    log: 2
    sen: 4
    com: 2
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,da=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 7
    rea: 7
    con: 5
    log: 2
    sen: 4
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ca=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 1
  tacticRole: supporter
  attributes:
    str: 7
    rea: 7
    con: 5
    log: 1
    sen: 6
    com: 2
  equipmentIds:
    - terminal.t1.001
    - armor.t1.001
  loadout:
    - app_t1_007
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Qa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 10
    rea: 10
    con: 7
    log: 5
    sen: 7
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_006
    - app_t1_005
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,la=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 10
    rea: 11
    con: 7
    log: 6
    sen: 6
    com: 3
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_005
    - app_t1_022
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,_a=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: controller
  attributes:
    str: 10
    rea: 10
    con: 7
    log: 5
    sen: 8
    com: 3
  equipmentIds:
    - terminal.t1.001
    - weapon.t1.001
  loadout:
    - app_t1_006
    - app_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,pa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 11
    rea: 10
    con: 8
    log: 4
    sen: 6
    com: 3
  equipmentIds:
    - weapon.t1.001
    - armor.t1.003
  loadout:
    - weap_t1_001
    - weap_t1_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ia=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 10
    rea: 10
    con: 9
    log: 4
    sen: 7
    com: 3
  equipmentIds:
    - weapon.t1.005
    - weapon.t1.001
    - armor.t1.003
  loadout:
    - weap_t1_005
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ha=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: defender
  attributes:
    str: 10
    rea: 10
    con: 8
    log: 4
    sen: 8
    com: 3
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
    - armor.t1.003
  loadout:
    - weap_t1_001
    - app_t1_005
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ba=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 11
    rea: 11
    con: 7
    log: 4
    sen: 6
    com: 3
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,xa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 12
    rea: 10
    con: 8
    log: 4
    sen: 6
    com: 3
  equipmentIds:
    - weapon.t1.004
    - weapon.t1.005
  loadout:
    - weap_t1_005
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ra=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: striker
  attributes:
    str: 10
    rea: 12
    con: 7
    log: 4
    sen: 7
    com: 3
  equipmentIds:
    - weapon.t1.004
    - weapon.t1.001
  loadout:
    - weap_t1_012
    - weap_t1_004
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,va=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 10
    rea: 10
    con: 7
    log: 5
    sen: 6
    com: 4
  equipmentIds:
    - terminal.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - app_t1_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,fa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 10
    rea: 10
    con: 7
    log: 5
    sen: 6
    com: 5
  equipmentIds:
    - terminal.t1.001
    - focus.t1.001
  loadout:
    - app_t1_007
    - app_t1_010
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ga=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 2
  tacticRole: supporter
  attributes:
    str: 10
    rea: 10
    con: 7
    log: 4
    sen: 8
    com: 4
  equipmentIds:
    - terminal.t1.001
    - armor.t1.003
  loadout:
    - app_t1_007
    - app_t1_006
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ta=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 13
    rea: 12
    con: 10
    log: 8
    sen: 9
    com: 6
  equipmentIds:
    - terminal.t1.001
    - weapon.t1.001
  loadout:
    - app_t1_006
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,za=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 13
    rea: 13
    con: 10
    log: 9
    sen: 8
    com: 6
  equipmentIds:
    - terminal.t1.001
    - terminal.t2.002
  loadout:
    - app_t2_009
    - app_t1_022
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,wa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: controller
  attributes:
    str: 13
    rea: 12
    con: 10
    log: 8
    sen: 10
    com: 6
  equipmentIds:
    - terminal.t1.001
    - weapon.t1.001
  loadout:
    - app_t2_002
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ea=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 14
    rea: 12
    con: 11
    log: 7
    sen: 8
    com: 6
  equipmentIds:
    - weapon.t1.001
    - weapon.t2.001
    - armor.t1.003
  loadout:
    - weap_t1_001
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Sa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 13
    rea: 12
    con: 12
    log: 7
    sen: 9
    com: 6
  equipmentIds:
    - weapon.t2.001
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ua=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: defender
  attributes:
    str: 13
    rea: 12
    con: 11
    log: 7
    sen: 10
    com: 6
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
    - armor.t1.003
  loadout:
    - weap_t1_001
    - app_t1_006
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ka=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 14
    rea: 13
    con: 10
    log: 7
    sen: 8
    com: 6
  equipmentIds:
    - weapon.t1.001
    - weapon.t2.001
  loadout:
    - weap_t1_001
    - weap_t2_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,qa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 15
    rea: 12
    con: 11
    log: 7
    sen: 8
    com: 6
  equipmentIds:
    - weapon.t2.001
    - weapon.t1.005
  loadout:
    - weap_t2_001
    - weap_t1_005
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ca=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: striker
  attributes:
    str: 13
    rea: 14
    con: 10
    log: 7
    sen: 9
    com: 6
  equipmentIds:
    - weapon.t1.001
    - terminal.t1.001
  loadout:
    - weap_t1_012
    - weap_t2_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ka=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 13
    rea: 12
    con: 10
    log: 8
    sen: 8
    com: 7
  equipmentIds:
    - terminal.t1.001
    - focus.t1.001
  loadout:
    - app_t1_007
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ba=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 13
    rea: 12
    con: 10
    log: 8
    sen: 8
    com: 8
  equipmentIds:
    - terminal.t1.001
    - focus.t1.001
  loadout:
    - app_t2_003
    - rit_t1_009
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Na=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 3
  tacticRole: supporter
  attributes:
    str: 13
    rea: 12
    con: 10
    log: 7
    sen: 10
    com: 7
  equipmentIds:
    - terminal.t1.001
    - armor.t1.003
  loadout:
    - app_t1_007
    - app_t1_006
    - app_t2_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 3
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 2
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Da=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 16
    rea: 14
    con: 13
    log: 10
    sen: 11
    com: 8
  equipmentIds:
    - terminal.t2.001
    - weapon.t1.001
  loadout:
    - app_t2_002
    - app_t2_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Pa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 16
    rea: 15
    con: 13
    log: 11
    sen: 10
    com: 8
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t2_016
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Wa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: controller
  attributes:
    str: 16
    rea: 14
    con: 13
    log: 10
    sen: 12
    com: 8
  equipmentIds:
    - terminal.t2.001
    - weapon.t1.001
  loadout:
    - app_t2_002
    - app_t2_009
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Fa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 17
    rea: 14
    con: 14
    log: 9
    sen: 10
    com: 8
  equipmentIds:
    - weapon.t2.001
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t1_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,ja=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 16
    rea: 14
    con: 15
    log: 9
    sen: 11
    com: 8
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ja=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: defender
  attributes:
    str: 16
    rea: 14
    con: 14
    log: 9
    sen: 12
    com: 8
  equipmentIds:
    - weapon.t2.001
    - terminal.t1.001
    - armor.t1.003
  loadout:
    - weap_t2_001
    - app_t1_006
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,$a=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 17
    rea: 15
    con: 13
    log: 9
    sen: 10
    com: 8
  equipmentIds:
    - weapon.t2.001
    - terminal.t1.001
  loadout:
    - weap_t2_001
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,La=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 18
    rea: 14
    con: 14
    log: 9
    sen: 10
    com: 8
  equipmentIds:
    - weapon.t2.001
    - weapon.t2.002
  loadout:
    - weap_t2_001
    - weap_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Oa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: striker
  attributes:
    str: 16
    rea: 16
    con: 13
    log: 9
    sen: 11
    com: 8
  equipmentIds:
    - weapon.t2.001
    - terminal.t1.001
  loadout:
    - weap_t2_001
    - weap_t2_012
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ma=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 16
    rea: 14
    con: 13
    log: 10
    sen: 10
    com: 9
  equipmentIds:
    - terminal.t2.001
    - focus.t1.001
  loadout:
    - app_t2_003
    - rit_t1_009
    - app_t1_010
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Aa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 16
    rea: 14
    con: 13
    log: 10
    sen: 10
    com: 10
  equipmentIds:
    - terminal.t2.001
    - focus.t1.001
  loadout:
    - app_t2_003
    - app_t2_008
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ya=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 4
  tacticRole: supporter
  attributes:
    str: 16
    rea: 14
    con: 13
    log: 9
    sen: 12
    com: 9
  equipmentIds:
    - terminal.t2.001
    - terminal.t1.001
    - armor.t1.003
  loadout:
    - app_t2_003
    - app_t2_002
    - app_t1_006
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 4
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 2
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ga=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 19
    rea: 16
    con: 16
    log: 12
    sen: 13
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t2_002
    - app_t3_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Ha=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 19
    rea: 17
    con: 16
    log: 13
    sen: 12
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_009
    - app_t3_003
    - app_t2_016
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Va=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: controller
  attributes:
    str: 19
    rea: 16
    con: 16
    log: 12
    sen: 14
    com: 10
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_002
    - app_t3_015
    - app_t2_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: aether-flush
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: command-override
      minQuantity: 1
      maxQuantity: 1
    - itemId: tactical-nerve-drip
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Xa=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 20
    rea: 16
    con: 17
    log: 11
    sen: 12
    com: 10
  equipmentIds:
    - weapon.t2.001
    - terminal.t1.001
    - armor.t1.003
  loadout:
    - weap_t2_001
    - weap_t1_001
    - app_t1_007
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,Za=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 19
    rea: 16
    con: 18
    log: 11
    sen: 13
    com: 10
  equipmentIds:
    - weapon.t2.002
    - weapon.t2.004
    - armor.t1.003
  loadout:
    - weap_t2_002
    - weap_t2_004
    - weap_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,nm=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: defender
  attributes:
    str: 19
    rea: 16
    con: 17
    log: 11
    sen: 14
    com: 10
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
    - armor.t1.003
  loadout:
    - weap_t2_001
    - app_t2_002
    - app_t2_003
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: trauma-compress
      minQuantity: 1
      maxQuantity: 1
    - itemId: nano-repair-vial
      minQuantity: 1
      maxQuantity: 1
    - itemId: con-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,tm=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 20
    rea: 17
    con: 16
    log: 11
    sen: 12
    com: 10
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.001
  loadout:
    - weap_t2_001
    - app_t2_002
    - weap_t3_008
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,im=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 21
    rea: 16
    con: 17
    log: 11
    sen: 12
    com: 10
  equipmentIds:
    - weapon.t2.002
    - weapon.t2.004
  loadout:
    - weap_t2_002
    - weap_t2_004
    - weap_t3_001
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,em=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: striker
  attributes:
    str: 19
    rea: 18
    con: 16
    log: 11
    sen: 13
    com: 10
  equipmentIds:
    - weapon.t2.001
    - terminal.t2.002
  loadout:
    - weap_t2_012
    - weap_t2_001
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: quick-stim
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: assault-prime
      minQuantity: 1
      maxQuantity: 1
    - itemId: str-amplify-heavy
      minQuantity: 1
      maxQuantity: 1
    - itemId: devastator-vial
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,am=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 19
    rea: 16
    con: 16
    log: 12
    sen: 12
    com: 11
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
  loadout:
    - app_t2_003
    - app_t2_008
    - rit_t1_009
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,mm=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 19
    rea: 16
    con: 16
    log: 12
    sen: 12
    com: 12
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
    - focus.t1.001
  loadout:
    - app_t2_003
    - app_t2_008
    - rit_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`,rm=`version: 1
factionId: independent
enemyTemplate:
  threatTier: 5
  tacticRole: supporter
  attributes:
    str: 19
    rea: 16
    con: 16
    log: 11
    sen: 14
    com: 11
  equipmentIds:
    - terminal.t2.002
    - terminal.t2.001
    - armor.t1.003
  loadout:
    - app_t2_003
    - app_t2_009
    - app_t2_002
  inventoryItems:
    - itemId: bottled-water
      minQuantity: 1
      maxQuantity: 5
    - itemId: aether-stabilizer
      minQuantity: 1
      maxQuantity: 3
    - itemId: trace-scrubber-chip
      minQuantity: 1
      maxQuantity: 3
    - itemId: advanced-trauma-kit
      minQuantity: 1
      maxQuantity: 2
    - itemId: full-recovery-capsule
      minQuantity: 1
      maxQuantity: 1
    - itemId: basic-medpatch
      minQuantity: 1
      maxQuantity: 2
    - itemId: log-boost-light
      minQuantity: 1
      maxQuantity: 1
    - itemId: secondhand-memory-chip
      minQuantity: 1
      maxQuantity: 1
    - itemId: sen-enhance-medium
      minQuantity: 1
      maxQuantity: 1
    - itemId: log-amplify-heavy
      minQuantity: 1
      maxQuantity: 1

i18n:
  en-US: {}
  zh-CN: {}
  zh-TW: {}
  ja-JP: {}
  ko-KR: {}
  es-ES: {}
  fr-FR: {}
  de-DE: {}
  pt-BR: {}
  ru-RU: {}
`;export{li as $,Lt as A,Ot as B,Mt as C,At as D,Yt as E,Gt as F,Ht as G,Vt as H,J as I,Xt as J,Zt as K,ni as L,ti as M,ii as N,ei as O,ai as P,mi as Q,ri as R,ui as S,$ as T,oi as U,si as V,yi as W,di as X,ci as Y,Qi as Z,S as _,U as a,Ie as a$,_i as a0,pi as a1,Ii as a2,L as a3,hi as a4,bi as a5,xi as a6,Ri as a7,vi as a8,fi as a9,A as aA,Yi as aB,Gi as aC,Hi as aD,Vi as aE,Xi as aF,Zi as aG,ne as aH,te as aI,ie as aJ,ee as aK,Y as aL,ae as aM,me as aN,re as aO,ue as aP,oe as aQ,se as aR,ye as aS,de as aT,ce as aU,Qe as aV,k as aW,G as aX,le as aY,_e as aZ,pe as a_,gi as aa,Ti as ab,zi as ac,wi as ad,O as ae,Ei as af,Si as ag,Ui as ah,ki as ai,qi as aj,Ci as ak,Ki as al,Bi as am,Ni as an,Di as ao,M as ap,Pi as aq,Wi as ar,Fi as as,ji as at,Ji as au,$i as av,Li as aw,Oi as ax,Mi as ay,Ai as az,W as b,Ra as b$,he as b0,be as b1,xe as b2,Re as b3,ve as b4,fe as b5,H as b6,ge as b7,Te as b8,ze as b9,Ve as bA,Xe as bB,Ze as bC,Z as bD,na as bE,ta as bF,ia as bG,ea as bH,aa as bI,ma as bJ,ra as bK,ua as bL,oa as bM,sa as bN,nn as bO,ya as bP,da as bQ,ca as bR,Qa as bS,la as bT,_a as bU,pa as bV,Ia as bW,ha as bX,ba as bY,tn as bZ,xa as b_,we as ba,Ee as bb,Se as bc,Ue as bd,ke as be,qe as bf,Ce as bg,V as bh,Ke as bi,Be as bj,Ne as bk,De as bl,Pe as bm,We as bn,Fe as bo,je as bp,Je as bq,$e as br,X as bs,Le as bt,Oe as bu,Me as bv,Ae as bw,Ye as bx,Ge as by,He as bz,vt as c,Tn as c$,va as c0,fa as c1,ga as c2,Ta as c3,za as c4,wa as c5,Ea as c6,Sa as c7,en as c8,Ua as c9,tm as cA,im as cB,em as cC,am as cD,mm as cE,q as cF,rn as cG,rm as cH,un as cI,on as cJ,sn as cK,yn as cL,dn as cM,cn as cN,Qn as cO,ln as cP,_n as cQ,C as cR,pn as cS,In as cT,hn as cU,bn as cV,xn as cW,Rn as cX,vn as cY,fn as cZ,gn as c_,ka as ca,qa as cb,Ca as cc,Ka as cd,Ba as ce,Na as cf,Da as cg,Pa as ch,Wa as ci,an as cj,Fa as ck,ja as cl,Ja as cm,$a as cn,La as co,Oa as cp,Ma as cq,Aa as cr,Ya as cs,Ga as ct,mn as cu,Ha as cv,Va as cw,Xa as cx,Za as cy,nm as cz,ft as d,f as d$,K as d0,zn as d1,wn as d2,En as d3,Sn as d4,Un as d5,kn as d6,qn as d7,Cn as d8,Kn as d9,et as dA,at as dB,mt as dC,rt as dD,ut as dE,ot as dF,st as dG,yt as dH,dt as dI,P as dJ,ct as dK,Qt as dL,lt as dM,_t as dN,pt as dO,It as dP,ht as dQ,bt as dR,xt as dS,Rt as dT,b as dU,p as dV,v as dW,s as dX,I as dY,w as dZ,z as d_,Bn as da,B as db,Nn as dc,Dn as dd,Pn as de,Wn as df,Fn as dg,jn as dh,Jn as di,$n as dj,Ln as dk,On as dl,N as dm,Mn as dn,An as dp,Yn as dq,Gn as dr,Hn as ds,Vn as dt,Xn as du,Zn as dv,nt as dw,tt as dx,D as dy,it as dz,gt as e,x as e0,T as e1,E as e2,R as e3,g as e4,h as e5,Tt as f,zt as g,wt as h,Et as i,St as j,Ut as k,kt as l,F as m,qt as n,Ct as o,Kt as p,Bt as q,Nt as r,Dt as s,Pt as t,Wt as u,Ft as v,jt as w,j as x,Jt as y,$t as z};
