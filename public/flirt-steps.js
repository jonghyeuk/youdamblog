let paceChoice=0;
let planChoice=0;

const paceOptions=[
  {icon:'⚡',title:'지금 흐름에서 자연스럽게 제안',copy:'답장 온도가 좋을 때 짧고 구체적으로 약속을 꺼낸다.',natural:18,signal:20,respect:17},
  {icon:'🌙',title:'오늘은 기분 좋게 대화 마무리',copy:'무리해서 약속을 잡지 않고 다음 대화의 여지를 남긴다.',natural:16,signal:10,respect:23},
  {icon:'📨',title:'답장 오기 전에 한 번 더 보내기',copy:'분위기가 끊길까 봐 추가 메시지로 확실하게 밀어붙인다.',natural:5,signal:16,respect:4}
];

const datePlans=[
  {icon:'☕',title:'취향 연결 카페',copy:'대화에서 나온 취향을 기억해 60~90분 정도의 가벼운 약속을 제안한다.',natural:19,signal:17,respect:21},
  {icon:'🎟️',title:'전시·공연 같이 보기',copy:'공통 관심사가 분명할 때 날짜와 콘텐츠를 구체적으로 제안한다.',natural:16,signal:22,respect:17},
  {icon:'🌆',title:'산책하고 디저트',copy:'부담 없는 동선과 헤어질 시간을 열어둔 짧은 코스를 제안한다.',natural:18,signal:16,respect:23}
];

const originalFlirtScores=flirtScores;
const originalRenderFlirt=renderFlirt;

flirtScores=function(){
  const base=originalFlirtScores();
  const pace=paceOptions[paceChoice];
  const plan=datePlans[planChoice];
  return {
    natural:Math.min(99,Math.round(base.natural*.68+pace.natural+plan.natural*.55)),
    signal:Math.min(99,Math.round(base.signal*.68+pace.signal+plan.signal*.55)),
    respect:Math.min(99,Math.round(base.respect*.68+pace.respect+plan.respect*.55))
  };
};

renderFlirt=function(){
  const counter=document.querySelector('#flirtCounter');
  const progress=document.querySelector('#flirtProgress');

  if(flirtStep<=3){
    originalRenderFlirt();
  }else if(flirtStep===4){
    flirtBody.innerHTML=`<span class="kicker">STEP 05 · MESSAGE TIMING</span><h2>답장은 왔어.<br>언제 약속을 꺼낼까?</h2><p>좋은 문장도 타이밍이 어긋나면 부담이 돼. 지금 대화의 온도를 읽어봐.</p><div class="timing-chat"><div class="sent">${fs().openers[opening][0]}</div><div class="received">${fs().replies[opening]}</div><div class="sent">${fs().followups[followup][0]}</div><small>상대가 메시지를 읽은 지 2분 · 아직 입력 중 표시는 없음</small></div><div class="strategy-options">${paceOptions.map((x,i)=>`<button class="strategy-option ${paceChoice===i?'selected':''}" data-pace="${i}"><span>${x.icon}</span><div><b>${x.title}</b><small>${x.copy}</small></div><em>${i===0?'추천 루트':i===1?'안전 루트':'직진 루트'}</em></button>`).join('')}</div><div class="micro-guide"><b>공략 포인트</b><p>답장을 재촉하지 않고, 상대가 거절하거나 일정을 바꿀 수 있는 여지를 남길수록 ‘상대 존중’ 점수가 올라가.</p></div><button class="next flirt-next" data-flirt-advance>데이트 코스 설계 →</button>`;
  }else if(flirtStep===5){
    flirtBody.innerHTML=`<span class="kicker">STEP 06 · DATE PLAN</span><h2>“언제 한 번” 말고<br>고를 수 있는 약속을 줘.</h2><p>${fs().title}에서 시작한 대화에 가장 자연스러운 첫 데이트 코스를 선택해.</p><div class="plan-board"><header><small>SELECTED ROUTE</small><b>${fs().emoji} ${fs().title}</b><span>${routeMeta[flirtScene][1]}</span></header><div>${datePlans.map((x,i)=>`<button class="plan-card ${planChoice===i?'selected':''}" data-plan="${i}"><span>${x.icon}</span><small>PLAN ${String(i+1).padStart(2,'0')}</small><h3>${x.title}</h3><p>${x.copy}</p><em>${i===0?'부담 낮음':i===1?'취향 적중': '대화 여유'}</em></button>`).join('')}</div></div><div class="proposal-preview"><small>보낼 메시지 미리보기</small><strong>“${datePlans[planChoice].title} 어때요? 이번 주가 바쁘면 다음 주도 괜찮아요.”</strong><p>구체적인 제안 + 상대가 선택할 수 있는 여지</p></div><button class="next flirt-next" data-flirt-advance>최종 성사 확률 보기 →</button>`;
  }else if(flirtStep===6){
    flirtStep=4;
    originalRenderFlirt();
    flirtStep=6;
    const resultCard=flirtBody.querySelector('.date-message-card');
    if(resultCard){
      resultCard.insertAdjacentHTML('beforeend',`<div class="final-plan"><small>선택한 공략</small><b>${paceOptions[paceChoice].title}</b><span>→</span><b>${datePlans[planChoice].title}</b></div>`);
    }
  }

  counter.textContent=`${flirtStep+1} / 7`;
  progress.style.width=`${(flirtStep+1)/7*100}%`;
};

document.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if(!button)return;
  if(button.dataset.pace!==undefined){paceChoice=Number(button.dataset.pace);renderFlirt()}
  if(button.dataset.plan!==undefined){planChoice=Number(button.dataset.plan);renderFlirt()}
  if(button.matches('[data-flirt-advance]')){flirtStep+=1;renderFlirt()}
  if(button.matches('[data-flirt-reset]')){paceChoice=0;planChoice=0}
  if(button.id==='flirtClose'){paceChoice=0;planChoice=0}
},true);
