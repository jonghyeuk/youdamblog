(function(){
  'use strict';
  const $=s=>document.querySelector(s), C=window.FORTUNE_CONTENT, toast=$('#toast');
  const hours=$('#birthHour');
  for(let h=0;h<24;h++){const o=document.createElement('option');o.value=String(h);o.textContent=`${String(h).padStart(2,'0')}시`;hours.appendChild(o)}
  function hash(text){let h=2166136261;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  function score(seed,key,min=52,span=44){return min+(hash(`${seed}:${key}`)%span)}
  function notify(text){toast.textContent=text;toast.hidden=false;clearTimeout(notify.t);notify.t=setTimeout(()=>toast.hidden=true,2200)}
  function elementCounts(eight,hasTime){const counts={木:0,火:0,土:0,金:0,水:0};const parts=[eight.getYearWuXing(),eight.getMonthWuXing(),eight.getDayWuXing()];if(hasTime)parts.push(eight.getTimeWuXing());parts.join('').split('').forEach(x=>{if(x in counts)counts[x]++});return counts}
  function band(n){return n>=78?'high':n>=64?'mid':'low'}
  function buildResult(data){
    if(typeof window.Solar==='undefined')throw new Error('calendar-library-unavailable');
    const [y,m,d]=data.birthDate.split('-').map(Number),hour=data.hour==='unknown'?12:Number(data.hour),minute=Number(data.minute||0);
    const solar=window.Solar.fromYmdHms(y,m,d,hour,minute,0),lunar=solar.getLunar(),eight=lunar.getEightChar();
    const pillars=[eight.getYear(),eight.getMonth(),eight.getDay(),data.hour==='unknown'?'시주 미입력':eight.getTime()];
    const targetYear=window.Solar.fromYmd(2027,7,1).getLunar().getYearInGanZhiExact();
    const seed=`${data.birthDate}|${data.hour}|${data.gender}|${pillars.join('')}|${targetYear}`;
    const counts=elementCounts(eight,data.hour!=='unknown'),dominant=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0];
    const areaScores={money:score(seed,'money'),family:score(seed,'family'),people:score(seed,'people'),change:score(seed,'change')};
    const total=Math.round(Object.values(areaScores).reduce((a,b)=>a+b,0)/4),season=C.seasons[hash(seed)%4];
    return {name:data.nickname.trim()||'당신',birthDate:data.birthDate,hour:data.hour,gender:data.gender,pillars,counts,dominant,areaScores,total,season,headline:C.headlines[hash(seed+'headline')%C.headlines.length],summary:`${C.elements[dominant].ko}의 기운이 도드라져 ${C.elements[dominant].copy}이 삶의 바탕이 됩니다. 2027년에는 ${season.line}`,move:C.moves[hash(seed+'move')%C.moves.length],caution:C.cautions[hash(seed+'caution')%C.cautions.length],timeline:C.quarters.map((q,i)=>({...q,score:score(seed,`quarter-${i}`,55,39)}))};
  }
  function render(r){
    $('#resultName').textContent=r.name;$('#seasonIcon').textContent=r.season.icon;$('#seasonName').textContent=r.season.name;$('#pillars').textContent=`사주 네 기둥 · ${r.pillars.join('  |  ')}`;$('#headline').textContent=r.headline;$('#summary').textContent=r.summary;$('#totalScore').textContent=r.total;
    $('#flowGrid').innerHTML=Object.entries(r.areaScores).map(([key,value])=>{const a=C.areas[key];return `<article><header><span>${a.icon}</span><div><small>${a.label}</small><strong>${value}</strong></div></header><div class="meter"><i style="width:${value}%"></i></div><p>${a[band(value)]}</p></article>`}).join('');
    $('#elementCopy').textContent=`가장 도드라진 기운은 ${C.elements[r.dominant].ko}입니다. 오행은 좋고 나쁨보다 서로 보완되는 균형으로 읽습니다.`;
    const max=Math.max(...Object.values(r.counts),1);$('#elementBars').innerHTML=Object.entries(r.counts).map(([key,value])=>`<div><span>${key}<small>${C.elements[key].ko}</small></span><i><b style="height:${Math.max(12,value/max*100)}%;background:${C.elements[key].color}"></b></i><strong>${value}</strong></div>`).join('');
    $('#timeline').innerHTML=r.timeline.map((q,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><div><small>${q[0]} · ${q[1]}</small><strong>${q[2]}</strong><i><b style="width:${q.score}%"></b></i></div><em>${q.score}</em></article>`).join('');
    $('#oneMove').textContent=r.move;$('#caution').textContent=`조심할 점 · ${r.caution}`;$('#result').hidden=false;window.currentFortune=r;history.replaceState(null,'','#result');setTimeout(()=>$('#result').scrollIntoView({behavior:'smooth'}),50)
  }
  $('#fortuneForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);try{render(buildResult({nickname:fd.get('nickname')||'',birthDate:fd.get('birthDate'),hour:fd.get('birthHour'),minute:fd.get('birthMinute'),gender:fd.get('gender')}))}catch(err){notify('계산을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.')}});
  $('#shareResult').addEventListener('click',async()=>{const r=window.currentFortune;if(!r)return;const text=`내 인생의 지금 계절은 ‘${r.season.name}’, 2027년 흐름 지수는 ${r.total}. ${r.headline} — 유담운세`;const url=`${location.origin}/fortune/`;if(navigator.share){try{await navigator.share({title:'유담운세 · 나의 다음 계절',text,url});return}catch(e){if(e.name==='AbortError')return}}try{await navigator.clipboard.writeText(`${text}\n${url}`);notify('결과와 링크를 복사했습니다.')}catch{notify('주소창 링크를 복사해 보내주세요.')}});
  $('#saveResult').addEventListener('click',()=>{const r=window.currentFortune;if(!r)return;localStorage.setItem('youdam-fortune-profile',JSON.stringify({nickname:r.name,birthDate:r.birthDate,hour:r.hour,gender:r.gender}));notify('이 기기에 저장했습니다. 서버에는 전송하지 않습니다.')});
  $('#retry').addEventListener('click',()=>{history.replaceState(null,'','#start');$('#start').scrollIntoView({behavior:'smooth'})});
  try{const saved=JSON.parse(localStorage.getItem('youdam-fortune-profile'));if(saved){$('#nickname').value=saved.nickname==='당신'?'':saved.nickname;$('#birthDate').value=saved.birthDate||'';hours.value=saved.hour||'unknown';const g=document.querySelector(`[name="gender"][value="${saved.gender}"]`);if(g)g.checked=true}}catch{}
})();
