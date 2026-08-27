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
 {icon:'✨',title:'눈에 띄는 20대 후반 신입 회원',where:'새로운 취미 모임',intro:'밝고 매력적인 신입 회원이 유독 내 경험과 여유를 좋게 봐준다.',bias:8,beats:['첫 모임 뒤 상대가 “선배님처럼 편한 분은 처음”이라며 개인 메시지를 보낸다.','늦은 밤에도 사진과 일상 이야기가 이어지고 답장을 기다리게 된다.','나이 차이 때문에 오해할까 봐 배우자에게는 연락 사실을 말하지 않는다.','상대가 “모임 사람들 없이 둘이 더 편하게 한잔해요”라고 제안한다.']},
 {icon:'🏃',title:'페이스를 맞춰주는 러닝 메이트',where:'러닝크루',intro:'새벽 러닝에서 같은 페이스로 달리며 운동 밖의 고민까지 가까워졌다.',bias:7,beats:['러닝 뒤 상대가 기록 사진과 함께 개인 메시지로 “다음에도 같이 뛰어요”라고 한다.','정기 모임이 없는 날에도 둘만 새벽 러닝을 잡기 시작한다.','배우자에게는 크루 전체가 뛰었다고 설명하고 둘이 찍은 사진은 숨긴다.','상대가 지방 대회에 둘이 전날 내려가자며 숙소를 알아본다.']},
 {icon:'🏋️',title:'자세를 봐주는 크로스핏 파트너',where:'크로스핏 박스',intro:'매번 같은 조가 되면서 몸의 변화와 사적인 고민까지 칭찬받는다.',bias:8,beats:['상대가 운동 영상을 개인 톡으로 보내며 자세를 따로 봐주겠다고 한다.','운동이 끝나도 주차장에서 둘이 대화하는 시간이 길어진다.','운동하러 간다고만 말하고 둘이 늦게 식사한 일은 설명하지 않는다.','상대가 휴일에 회원 없는 시간에 둘만 운동하자고 제안한다.']},
 {icon:'🍷',title:'취향이 너무 잘 맞는 클래스 동료',where:'와인·도예 클래스',intro:'배우자와는 나누기 어려웠던 취향을 자연스럽게 이해해 주는 사람이 생겼다.',bias:7,beats:['수업 뒤 상대가 작품과 와인 사진을 보내며 개인적인 대화를 시작한다.','서로 고른 선물을 주고받으며 “우리 취향은 정말 닮았다”고 말한다.','함께 간 전시와 카페 영수증을 굳이 집에 가져가지 않는다.','상대가 다음 수업 대신 둘만 근교 공방에 다녀오자고 한다.']},
 {icon:'🏢',title:'나를 유난히 인정해 주는 후배',where:'직장 프로젝트',intro:'일을 가르쳐주던 관계에서 어느새 개인적인 위로를 주고받게 됐다.',bias:8,beats:['늦은 회의 뒤 “오늘 이야기는 우리 둘만 알고 있어요”라는 메시지가 온다.','상대가 “집에서는 몰라도 저는 선배님 가치를 알아요”라고 말한다.','업무와 무관한 메시지는 기록에서 지우고 싶어진다.','출장지에서 팀과 떨어져 둘만 저녁을 먹자는 제안을 받는다.']},
 {icon:'⛳',title:'라운드마다 챙겨주는 골프 동반자',where:'스크린골프·라운딩',intro:'실력과 매너를 칭찬해 주는 사람과 정기적으로 같은 조가 된다.',bias:6,beats:['상대가 스윙 영상을 보내며 둘만 연습 시간을 맞추자고 한다.','운동 이야기보다 외모와 사생활을 묻는 메시지가 많아진다.','배우자에게 누구와 라운딩하는지는 일부러 자세히 말하지 않는다.','상대가 부부 동반 대신 둘만 1박 골프를 가자고 제안한다.']},
 {icon:'📱',title:'하루의 마지막 대화가 된 사람',where:'오픈채팅·온라인 모임',intro:'얼굴보다 생각을 먼저 알게 됐고 매일 안부를 기다리게 됐다.',bias:9,beats:['상대가 가족에게도 말하지 않은 고민을 나에게만 털어놓는다.','프로필 사진이 바뀌면 가장 먼저 알아보고 칭찬하게 된다.','채팅방 알림을 숨김으로 바꾸고 대화 일부를 삭제한다.','상대가 실제로 단둘이 만나 우리 관계를 확인하자고 한다.']},
 {icon:'☕',title:'매일 나를 기억하는 단골집 사람',where:'카페·공유오피스',intro:'정해진 시간에 마주치며 주문뿐 아니라 기분과 일정까지 기억하게 됐다.',bias:5,beats:['상대가 “오늘은 늦으셨네요”라며 유난히 반갑게 맞아준다.','집에서는 못 받던 관심을 여기서 받는다는 생각이 든다.','가족에게는 이 사람과 매일 대화한다는 사실을 굳이 말하지 않는다.','상대가 영업이 끝난 뒤 둘만 다른 곳에서 차를 마시자고 한다.']}
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
