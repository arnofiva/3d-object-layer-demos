import{d as s}from"./calcite-input-time-picker-31d08010.js";import"./index-cdda5707.js";import"./form-c843c929.js";import"./guid-4f97587b.js";import"./interactive-1607c36d.js";import"./key-89f6acdc.js";import"./label2-6ed53214.js";import"./loadable-7d140904.js";import"./t9n-2d2f005c.js";import"./observers-333b9ff3.js";import"./focusTrapComponent-08ab2cd6.js";import"./icon-6c56dd6f.js";import"./action-e3f08495.js";import"./loader-cabefae3.js";import"./input-88645e50.js";import"./progress-a90520b9.js";import"./popover-1095e00b.js";import"./openCloseComponent-6668f48b.js";import"./debounce-c198f28b.js";import"./FloatingArrow-b345edcc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */function t(i,r,a,m){var e={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return r?(e[a][2]?e[a][2]:e[a][1]).replace("%d",i):(m?e[a][0]:e[a][1]).replace("%d",i)}var p={name:"et",weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),ordinal:function(r){return r+"."},weekStart:1,relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};s.locale(p,null,!0);export{p as default};
