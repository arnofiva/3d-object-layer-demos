import{d as o}from"./calcite-input-time-picker-31d08010.js";import"./index-cdda5707.js";import"./form-c843c929.js";import"./guid-4f97587b.js";import"./interactive-1607c36d.js";import"./key-89f6acdc.js";import"./label2-6ed53214.js";import"./loadable-7d140904.js";import"./t9n-2d2f005c.js";import"./observers-333b9ff3.js";import"./focusTrapComponent-08ab2cd6.js";import"./icon-6c56dd6f.js";import"./action-e3f08495.js";import"./loader-cabefae3.js";import"./input-88645e50.js";import"./progress-a90520b9.js";import"./popover-1095e00b.js";import"./openCloseComponent-6668f48b.js";import"./debounce-c198f28b.js";import"./FloatingArrow-b345edcc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */var a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function e(i,r,n){var t=a[n];return Array.isArray(t)&&(t=t[r?0:1]),t.replace("%d",i)}var m={name:"de-at",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(r){return r+"."},weekStart:1,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};o.locale(m,null,!0);export{m as default};
