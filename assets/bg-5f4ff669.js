import{d as i}from"./calcite-input-time-picker-31d08010.js";import"./index-cdda5707.js";import"./form-c843c929.js";import"./guid-4f97587b.js";import"./interactive-1607c36d.js";import"./key-89f6acdc.js";import"./label2-6ed53214.js";import"./loadable-7d140904.js";import"./t9n-2d2f005c.js";import"./observers-333b9ff3.js";import"./focusTrapComponent-08ab2cd6.js";import"./icon-6c56dd6f.js";import"./action-e3f08495.js";import"./loader-cabefae3.js";import"./input-88645e50.js";import"./progress-a90520b9.js";import"./popover-1095e00b.js";import"./openCloseComponent-6668f48b.js";import"./debounce-c198f28b.js";import"./FloatingArrow-b345edcc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */var m={name:"bg",weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekStart:1,ordinal:function(t){var r=t%100;if(r>10&&r<20)return t+"-ти";var _=t%10;return _===1?t+"-ви":_===2?t+"-ри":_===7||_===8?t+"-ми":t+"-ти"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};i.locale(m,null,!0);export{m as default};
