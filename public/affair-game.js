const affairProfiles=[
 {icon:'💍',title:'오래된 부부',copy:'함께한 시간이 길고 일상이 안정된 관계',bias:2},
 {icon:'🏠',title:'각자 바쁜 부부',copy:'생활은 함께하지만 대화 시간이 줄어든 관계',bias:7},
 {icon:'🌿',title:'재혼·새로운 동반자',copy:'서로의 과거와 현재를 존중하며 만든 관계',bias:3},
 {icon:'🤝',title:'오랜 연인·동반자',copy:'혼인 여부와 관계없이 약속을 이어온 사이',bias:5}
];
const affairStyles=[
 {icon:'🧴',title:'무향·실용 중심',copy:'기초 관리만 하고 옷과 향에는 큰 변화를 주지 않는다.',bias:0,novelty:0,validation:0},
 {icon:'🌿',title:'은은한 향과 단정함',copy:'스킨이나 가벼운 향, 깔끔한 옷차림을 일상적으로 즐긴다.',bias:1,novelty:2,validation:1},
 {icon:'🪞',title:'향수·스타일 변화를 즐김',copy:'향의 양과 종류, 피부 관리와 옷차림 변화를 적극적으로 즐긴다.',bias:2,novelty:5,validation:3},
 {icon:'🥂',title:'외향적 모임·표현형',copy:'새로운 사람과 자주 어울리고 호감과 칭찬을 적극적으로 표현한다.',bias:3,novelty:4,validation:6}
];
const affairScenes=[
 {icon:'🏢',title:'나를 유난히 챙기는 직장 동료',where:'직장',intro:'프로젝트를 함께하며 개인적인 고민까지 나누기 시작했다.',bias:8,beats:['늦은 회의 뒤 “오늘 일은 우리 둘만 아는 이야기로 하죠”라는 메시지가 온다.','상대는 “배우자보다 선배님이 제 마음을 더 잘 알아요”라고 말한다.','업무와 무관한 메시지를 지우고 싶다는 생각이 든다.','출장지에서 둘만 저녁을 먹자는 구체적인 제안을 받았다.']},
 {icon:'🎓',title:'동창회에서 다시 만난 옛 인연',where:'동창 모임',intro:'오랜만에 만났지만 예전 감정과 추억이 빠르게 살아났다.',bias:10,beats:['상대가 “그때 우리가 이어졌다면 어땠을까?”라고 묻는다.','배우자에게는 동창 여러 명과 만난다고 말하면 된다는 생각이 든다.','둘이 주고받은 옛 사진을 가족에게 보이고 싶지 않다.','상대가 다음에는 둘만 옛 동네를 걸어보자고 한다.']},
 {icon:'🥾',title:'주말 동호회의 말 잘 통하는 회원',where:'취미 모임',intro:'취미와 생활 방식이 비슷해 모임 밖에서도 대화가 이어진다.',bias:6,beats:['모임 뒤 상대가 개인적으로 장비를 보러 가자고 제안한다.','“우린 취미 친구일 뿐”이라는 말이 오히려 자주 나온다.','배우자가 모임 이야기를 물으면 그 사람만 빼고 설명한다.','상대가 다른 회원에게 알리지 말고 둘만 여행을 가자고 한다.']},
 {icon:'📱',title:'온라인에서 매일 대화하는 사람',where:'온라인 모임',intro:'얼굴보다 생각을 먼저 알게 됐고, 하루의 마지막 대화가 되었다.',bias:9,beats:['상대가 가족에게 말하지 않은 고민을 나에게만 털어놓는다.','프로필 사진을 기다리게 되고 답장이 늦으면 신경이 쓰인다.','채팅방 알림을 숨김으로 바꿔두었다.','상대가 실제로 단둘이 만나 관계를 확인하자고 한다.']},
 {icon:'☕',title:'단골로 만난 편안한 사람',where:'동네 생활권',intro:'정해진 시간에 자주 마주치며 서로의 일상을 기억하게 됐다.',bias:5,beats:['상대가 “오늘은 혼자 오셨네요”라며 유난히 반가워한다.','집에서는 못 받던 관심을 여기서 받는다는 생각이 든다.','가족에게는 이 사람과 대화한 사실을 굳이 말하지 않는다.','상대가 영업이 끝난 뒤 따로 차를 마시자고 한다.']},
 {icon:'🤝',title:'나를 인정해 주는 거래처 사람',where:'업무 관계',intro:'내 능력을 높이 평가하고 사소한 개인 일정까지 챙겨준다.',bias:7,beats:['선물과 함께 개인 번호로 고맙다는 연락이 온다.','상대는 “일 때문에 만나는 건지 보고 싶어서인지 모르겠다”고 한다.','업무 비용으로 둘만의 식사를 처리할 방법을 생각한다.','계약이 끝난 뒤에도 비밀스럽게 만나자는 제안을 받았다.']}
];
const affairChoices=[
 [
  {role:'safe',title:'업무·모임의 공개된 대화로 돌린다',copy:'둘만의 비밀이라는 분위기를 만들지 않는다.'},
  {role:'grey',title:'기분은 좋지만 일단 대화를 이어간다',copy:'선을 넘지는 않았다고 생각하며 개인 대화를 유지한다.'},
  {role:'risk',title:'우리 둘만 아는 이야기로 남긴다',copy:'비밀이 친밀감을 높인다고 느낀다.'}
 ],
 [
  {role:'safe',title:'상대의 감정과 내 관계의 경계를 분명히 말한다',copy:'설렘이 생겨도 행동의 기준은 현재 약속에 둔다.'},
  {role:'grey',title:'마음만 주고받는 건 괜찮다고 생각한다',copy:'육체적 관계가 아니면 외도가 아니라고 구분한다.'},
  {role:'risk',title:'나를 이해해 주는 사람을 놓치고 싶지 않다',copy:'현재 관계의 빈자리를 새로운 사람으로 채운다.'}
 ],
 [
  {role:'safe',title:'숨기고 싶은 순간부터 관계를 재점검한다',copy:'삭제·거짓말이 필요해진 이유를 먼저 본다.'},
  {role:'grey',title:'괜한 오해를 막으려고 숨기는 것뿐이다',copy:'평화를 위한 비밀이라고 스스로 설명한다.'},
  {role:'risk',title:'들키지만 않으면 누구도 상처받지 않는다',copy:'발견 여부를 행동의 기준으로 삼는다.'}
 ],
 [
  {role:'safe',title:'둘만의 만남은 거절하고 현재 관계를 먼저 정리한다',copy:'새 관계보다 기존 약속과 문제를 먼저 다룬다.'},
  {role:'grey',title:'한 번 만나보고 내 마음을 확인한다',copy:'확인이라는 이름으로 경계를 시험한다.'},
  {role:'risk',title:'이번 기회를 놓치면 후회할 것 같다',copy:'결과보다 지금의 설렘을 선택한다.'}
 ]
];
let affairStep=0,affairProfile=0,affairStyle=0,affairScene=0,affairChoice=-1,affairPoints=0,affairHistory=[];
const affairModal=document.querySelector('#flirtGame'),affairBody=document.querySelector('#flirtBody'),ap=()=>affairProfiles[affairProfile],as=()=>affairScenes[affairScene];
function orderedAffairChoices(stage){const shift=(affairScene+stage)%3,list=affairChoices[stage].map(x=>({...x}));return list.slice(shift).concat(list.slice(0,shift))}
function openAffair(){affairModal.hidden=false;document.body.style.overflow='hidden';history.replaceState(null,'','#play-affair');renderAffair()}
function closeAffair(){affairModal.hidden=true;document.body.style.overflow='';if(location.hash==='#play-affair'||location.hash==='#play-flirt')history.replaceState(null,'','#games');resetAffair()}
function resetAffair(){affairStep=0;affairProfile=0;affairStyle=0;affairScene=0;affairChoice=-1;affairPoints=0;affairHistory=[]}
function affairProbability(){return Math.min(96,Math.max(6,12+ap().bias+as().bias+affairStyles[affairStyle].bias+affairPoints*8))}
function affairTraits(){const risk=affairHistory.filter(x=>x==='risk').length,grey=affairHistory.filter(x=>x==='grey').length,safe=affairHistory.filter(x=>x==='safe').length,style=affairStyles[affairStyle];return{novelty:Math.min(98,30+risk*17+grey*8+style.novelty),validation:Math.min(98,32+risk*13+grey*11+style.validation),secrecy:Math.min(98,18+risk*19+grey*10),responsibility:Math.min(98,35+safe*16-grey*3-risk*7)}}
function renderAffair(){
 const shown=Math.min(affairStep+1,7);document.querySelector('#flirtCounter').textContent=`${shown} / 7`;document.querySelector('#flirtProgress').style.width=`${shown/7*100}%`;
 if(affairStep===0)affairBody.innerHTML=`<div class="affair-opening"><span class="kicker">STEP 01 · 관계와 생활 스타일</span><small>당신의 바람기 상황 테스트</small><h2>겉모습 하나가 아니라,<br><em>선택의 조합</em>을 봅니다.</h2><p>향수·스킨·옷차림이나 외향성만으로 바람기를 판단할 수 없습니다. 생활 스타일은 작은 배경값일 뿐, 실제 결과는 비밀과 경계 앞에서 고른 행동이 결정합니다.</p></div><h3 class="affair-section-title">현재 관계</h3><div class="affair-profiles">${affairProfiles.map((x,i)=>`<button class="${affairProfile===i?'selected':''}" data-affair-profile="${i}"><span>${x.icon}</span><b>${x.title}</b><small>${x.copy}</small></button>`).join('')}</div><h3 class="affair-section-title">평소 향·관리·사교 스타일</h3><div class="affair-styles">${affairStyles.map((x,i)=>`<button class="${affairStyle===i?'selected':''}" data-affair-style="${i}"><span>${x.icon}</span><b>${x.title}</b><small>${x.copy}</small></button>`).join('')}</div><aside class="style-note"><b>판정 원칙</b><p>꾸미는 사람이나 외향적인 사람이 더 바람을 피운다는 뜻이 아닙니다. 이 항목이 확률에 주는 영향은 최대 3점이며, 비밀·거짓말·경계 선택이 훨씬 크게 반영됩니다.</p></aside><button class="next affair-next" data-affair-next>유혹의 장면 만나기 →</button>`;
 else if(affairStep===1)affairBody.innerHTML=`<span class="kicker">STEP 02 · 경계가 흔들리는 순간</span><h2>어떤 만남이<br>마음을 흔들었을까요?</h2><div class="affair-scenes">${affairScenes.map((x,i)=>`<button class="${affairScene===i?'selected':''}" data-affair-scene="${i}"><span>${x.icon}</span><small>${x.where}</small><b>${x.title}</b><p>${x.intro}</p></button>`).join('')}</div><button class="next affair-next" data-affair-next>이 상황으로 들어가기 →</button>`;
 else if(affairStep<=5){const stage=affairStep-2,opts=orderedAffairChoices(stage);affairBody.innerHTML=`<div class="affair-head"><div><span class="kicker">STEP ${String(affairStep+1).padStart(2,'0')} · BOUNDARY ${stage+1}</span><h2>${as().icon} ${as().where}</h2><p>${as().title}</p></div><div class="temptation-meter"><small>흔들림</small><b>${affairProbability()}%</b></div></div><section class="temptation-card"><small>지금 생긴 일</small><strong>“${as().beats[stage]}”</strong><p>${stage===0?'아직은 작은 호의처럼 보입니다.':stage===1?'감정에 이름을 붙이기 시작합니다.':stage===2?'숨겨야 하는 것이 생겼습니다.':'마지막 선택이 남았습니다.'}</p></section><h3 class="decision-title">당신이라면 어떻게 하시겠습니까?</h3><div class="affair-options">${opts.map((x,i)=>`<button class="${affairChoice===i?'selected':''}" data-affair-choice="${i}"><span>${String.fromCharCode(65+i)}</span><div><b>${x.title}</b><small>${x.copy}</small></div></button>`).join('')}</div><button class="next affair-next" data-affair-next ${affairChoice<0?'disabled':''}>${affairStep===5?'바람기 결과 확인 →':'다음 경계로 →'}</button>`}
 else {const n=affairProbability(),t=affairTraits(),style=affairStyles[affairStyle],rank=n>=80?'위험한 설렘 추종형':n>=60?'경계가 흐려지는 편':n>=40?'인정 욕구에 흔들리는 편':n>=25?'선을 살피는 현실형':'약속 우선형';affairBody.innerHTML=`<div class="affair-result"><span class="kicker">RESULT · 관계 경계 보고서</span><div class="affair-icon">${n>=60?'🌪️':'⚓'}</div><div class="badge">${rank}</div><h2>상황 속 바람필 확률<br><em>${n}%</em></h2><p>${n>=60?'새로운 사람 자체보다 인정받는 느낌과 비밀스러운 친밀감에 마음이 움직였습니다. 감정보다 행동의 경계를 먼저 정하는 것이 필요합니다.':n>=40?'설렘은 느끼지만 관계의 약속도 의식하고 있습니다. 숨기고 싶은 행동이 생기는 순간이 중요한 경계선입니다.':'호감이 생기는 것과 행동으로 옮기는 것을 구분하고, 현재 관계의 약속을 우선했습니다.'}</p><section class="affair-chart"><div class="affair-ring" style="--affair:${n*3.6}deg"><b>${n}%</b><small>놀이형 확률</small></div><div><small>${ap().title} · ${as().where}</small><h3>당신을 흔드는 것은<br><em>${t.validation>=t.novelty?'인정받는 감정':'새로운 설렘'}</em></h3><p>실제 외도 가능성을 예측하는 통계가 아니라 네 번의 가상 선택을 점수화한 결과입니다.</p></div></section><div class="style-combination"><span>${style.icon}</span><div><small>생활 스타일 조합</small><b>${style.title} + ${as().title}</b><p>향·관리·사교 성향 반영 ${style.bias}점 / 경계 선택 반영 ${affairPoints*8}점. 겉모습보다 숨기는 행동의 비중이 훨씬 큽니다.</p></div></div><div class="affair-traits">${[['새로움 추구',t.novelty],['인정 욕구',t.validation],['비밀 허용',t.secrecy],['관계 책임',t.responsibility]].map(x=>`<div><span>${x[0]}</span><i><b style="width:${x[1]}%"></b></i><em>${x[1]}</em></div>`).join('')}</div><div class="result-card affair-message"><small>관계의 경계선</small><strong>“호감은 저절로 생길 수 있지만, 비밀과 행동은 내가 선택합니다.”</strong><em>향수, 화장품, 옷차림, 외향성만으로 외도 성향을 판단할 수 없습니다. 이 결과는 오락용 상황 테스트입니다.</em></div><div class="actions"><button data-affair-share>결과 공유</button><button data-affair-reset>다른 유혹 살펴보기 ↻</button></div></div>`}
}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.game==='1'){e.preventDefault();e.stopImmediatePropagation();openAffair();return}if(b.dataset.affairProfile!==undefined){affairProfile=+b.dataset.affairProfile;renderAffair()}if(b.dataset.affairStyle!==undefined){affairStyle=+b.dataset.affairStyle;renderAffair()}if(b.dataset.affairScene!==undefined){affairScene=+b.dataset.affairScene;renderAffair()}if(b.dataset.affairChoice!==undefined){affairChoice=+b.dataset.affairChoice;renderAffair()}if(b.matches('[data-affair-next]')&&!b.disabled){if(affairStep>=2&&affairStep<=5){const chosen=orderedAffairChoices(affairStep-2)[affairChoice];affairHistory.push(chosen.role);affairPoints+=chosen.role==='risk'?2:chosen.role==='grey'?1:0}affairStep++;affairChoice=-1;renderAffair()}if(b.matches('[data-affair-reset]')){resetAffair();renderAffair()}if(b.matches('[data-affair-share]'))shareAffair()},true);
document.querySelector('#flirtClose').onclick=closeAffair;
async function shareAffair(){const n=affairProbability(),text=`${as().where} 상황에서 나온 나의 바람필 확률은 ${n}% — 당신은 어디에서 경계를 세울까요?`,url=`${location.origin}${location.pathname}#play-affair`;if(navigator.share)try{await navigator.share({title:'바람필 확률 · 당신의 바람기',text,url});return}catch{}await navigator.clipboard.writeText(`${text} ${url}`);notify('게임 바로가기 복사 완료 ✓')}
