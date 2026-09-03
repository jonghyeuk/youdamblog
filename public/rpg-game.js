const rpgQuestions=[
  {scene:'오래 다닌 회사에서 예상보다 빠른 퇴직 제안을 받았다.',ask:'가장 먼저 드는 생각은?',answers:[['가족 생활비부터 다시 계산한다',[3,0,0,1,0,1]],['이참에 미뤄둔 일을 시작한다',[0,1,3,0,2,0]],['믿을 만한 사람들에게 정보를 구한다',[0,1,0,3,0,2]]]},
  {scene:'친구가 확실한 기회라며 큰돈이 들어가는 일을 권한다.',ask:'당신의 첫 행동은?',answers:[['계약과 숫자부터 혼자 검토한다',[1,3,0,0,0,2]],['잃어도 되는 범위에서 경험해 본다',[0,1,3,0,2,0]],['친구의 사정과 관계부터 확인한다',[1,0,0,3,0,2]]]},
  {scene:'가족 여행 전날, 모두의 계획이 엉켜버렸다.',ask:'당신이 맡는 역할은?',answers:[['예약과 이동 순서를 다시 정리한다',[2,3,0,1,0,0]],['다 괜찮다며 분위기부터 살린다',[0,0,1,3,1,1]],['혼자 움직일 수 있는 대안을 만든다',[0,1,1,0,3,1]]]},
  {scene:'회의에서 후배가 당신의 아이디어를 자기 것처럼 발표했다.',ask:'어떻게 대응할까?',answers:[['기록을 준비해 차분히 바로잡는다',[1,3,0,0,0,2]],['이번에는 두고 다음 판을 준비한다',[0,1,2,0,2,1]],['따로 만나 관계를 깨지 않게 말한다',[1,0,0,3,0,2]]]},
  {scene:'주말에 아무 일정도 없는 날이 생겼다.',ask:'가장 마음이 가는 선택은?',answers:[['집과 가족에게 밀린 일을 처리한다',[3,0,0,1,0,1]],['처음 가보는 곳으로 당일치기를 간다',[0,0,2,0,3,1]],['오래 못 본 사람에게 연락한다',[0,0,1,3,1,1]]]},
  {scene:'모임에서 모두가 꺼리는 어려운 일을 누군가는 맡아야 한다.',ask:'당신이라면?',answers:[['결국 내가 맡고 끝까지 책임진다',[3,1,0,1,0,1]],['사람별 강점을 보고 일을 나눈다',[1,3,0,2,0,0]],['새로운 방법으로 일을 절반으로 줄인다',[0,2,2,0,1,1]]]},
  {scene:'갑자기 3천만 원의 여유자금이 생겼다.',ask:'가장 가까운 선택은?',answers:[['대출 상환과 비상금부터 챙긴다',[3,1,0,0,0,2]],['공부한 분야에 일부 투자한다',[0,2,3,0,0,1]],['내 삶을 바꿀 시간과 경험을 산다',[0,0,1,0,3,2]]]},
  {scene:'가까운 사람이 분명 잘못된 결정을 하려 한다.',ask:'어디까지 개입할까?',answers:[['싫은 소리를 들어도 끝까지 막는다',[2,1,0,2,0,1]],['근거만 말하고 선택은 맡긴다',[0,2,0,0,2,2]],['먼저 왜 그러는지 오래 들어본다',[1,0,0,3,0,2]]]},
  {scene:'새로운 기술을 배워야 하는 상황이 왔다.',ask:'당신의 방식은?',answers:[['검증된 강좌를 정해 매일 따라간다',[2,2,0,0,0,2]],['일단 눌러보고 부딪치며 익힌다',[0,1,3,0,2,0]],['잘하는 사람과 함께 시작한다',[0,1,1,3,0,1]]]},
  {scene:'앞으로 10년을 한 문장으로 정할 수 있다면?',ask:'가장 놓치기 싫은 것은?',answers:[['내 사람들을 지킬 수 있는 안정',[3,0,0,2,0,1]],['아직 해보지 않은 두 번째 전성기',[0,1,3,0,2,0]],['내 뜻대로 쓸 수 있는 시간',[0,0,1,0,3,2]]]},
];

const rpgJobs=[
  {icon:'🛡️',name:'생활력 만렙 방패기사',tag:'누군가는 결국 당신 뒤에 숨는다',copy:'위기가 오면 제일 먼저 현실을 계산하고 사람을 지킵니다. 남의 퀘스트는 잘 막아주지만 자기 모험은 자꾸 다음으로 미룹니다.',skill:'생활비 결계',weak:'혼자 다 책임지려다 체력이 먼저 닳습니다.'},
  {icon:'♟️',name:'눈치 100단 협상술사',tag:'싸우지 않고 판을 바꾸는 사람',copy:'말보다 구조를 보고, 감정보다 다음 수를 읽습니다. 어수선한 파티에서 결국 작전을 짜는 사람입니다.',skill:'판세 뒤집기',weak:'계산이 길어지면 기회가 먼저 떠납니다.'},
  {icon:'⚗️',name:'한 방을 노리는 인생 연금술사',tag:'평범한 재료로 두 번째 전성기를 만든다',copy:'안전한 답보다 가능성 있는 실험에 마음이 갑니다. 실패도 재료로 바꾸지만 가끔 경고문을 너무 작게 읽습니다.',skill:'위기 기회 변환',weak:'흥미로운 제안 앞에서 방어력이 낮아집니다.'},
  {icon:'🤝',name:'인맥을 소환하는 길드마스터',tag:'혼자보다 함께일 때 능력치가 폭발한다',copy:'사람의 마음과 자리를 연결하는 힘이 있습니다. 문제를 해결하기 전에 모두가 떠나지 않게 만드는 파티의 중심입니다.',skill:'사람 소환진',weak:'거절해야 할 부탁까지 퀘스트로 받아옵니다.'},
  {icon:'🏹',name:'혼자서도 잘 사는 독립 레인저',tag:'남의 지도보다 내 방향을 믿는다',copy:'관습보다 내 시간과 선택을 중요하게 여깁니다. 길이 사라져도 새 길을 만들지만 도움을 청하는 타이밍은 늦습니다.',skill:'단독 생존',weak:'파티원이 다가오기 전에 혼자 출발합니다.'},
  {icon:'🔮',name:'잔소리로 치유하는 통찰 현자',tag:'결국 맞는 말을 해서 조금 얄밉다',copy:'사건보다 원인을 보고, 지금보다 그다음을 생각합니다. 조용히 듣다가 핵심을 짚는 파티의 마지막 안전장치입니다.',skill:'미래 복기',weak:'정답을 알면서도 행동은 내일로 미룹니다.'},
];

let rpgStep=-1,rpgAnswers=[],rpgInvite=null;
const rpgGame=document.querySelector('#rpgGame');
const rpgBody=document.querySelector('#rpgBody');
const rpgCounter=document.querySelector('#rpgCounter');
const rpgProgress=document.querySelector('#rpgProgress');

function rpgScores(answers=rpgAnswers){const scores=[0,0,0,0,0,0];answers.forEach((a,i)=>rpgQuestions[i].answers[a][1].forEach((v,j)=>scores[j]+=v));return scores}
function rpgJobIndex(scores){let best=0;scores.forEach((v,i)=>{if(v>scores[best])best=i});return best}
function rpgEncode(scores){return scores.map(v=>v.toString(36)).join('')}
function rpgDecode(code){if(!/^[0-9a-z]{6}$/i.test(code||''))return null;const scores=code.toLowerCase().split('').map(v=>parseInt(v,36));return scores.every(Number.isFinite)?scores:null}
function rpgInviteFromHash(){const query=location.hash.split('?')[1];if(!query)return null;return rpgDecode(new URLSearchParams(query).get('invite'))}
function rpgOpen(){rpgInvite=rpgInviteFromHash();rpgStep=-1;rpgAnswers=[];rpgGame.hidden=false;document.body.style.overflow='hidden';if(!location.hash.startsWith('#play-rpg'))history.replaceState(null,'','#play-rpg');rpgRender()}
function rpgClose(){rpgGame.hidden=true;document.body.style.overflow='';if(location.hash.startsWith('#play-rpg'))history.replaceState(null,'','#games')}
function rpgReset(){rpgStep=-1;rpgAnswers=[];rpgInvite=null;history.replaceState(null,'','#play-rpg');rpgRender()}
function rpgPercent(scores){const max=Math.max(...scores,1);return scores.map(v=>Math.round(35+v/max*65))}
function rpgCompatibility(mine,theirs){const a=rpgPercent(mine),b=rpgPercent(theirs);const balance=Math.round(a.reduce((sum,v,i)=>sum+(100-Math.abs(v-b[i])),0)/6);const same=rpgJobIndex(mine)===rpgJobIndex(theirs);return Math.min(97,Math.max(48,Math.round(balance*.72+(same?12:18))))}
function rpgPairLine(a,b,score){if(a===b)return score>80?'닮아서 빠르지만 고집이 부딪히면 보스전이 됩니다.':'같은 장점과 같은 약점을 공유하는 거울 파티입니다.';const pair=[a,b].sort((x,y)=>x-y).join('-');const lines={'0-1':'한 명이 막고 한 명이 판을 짜는 정석 공략 파티','0-2':'안전장치와 폭발력이 함께 있는 반전 파티','0-3':'사람을 지키고 모으는 든든한 장기전 파티','0-4':'집을 지키는 사람과 길을 여는 사람의 원정 파티','0-5':'현실 방어와 미래 통찰이 만난 생존 전문 파티','1-2':'계산과 모험이 번갈아 판을 뒤집는 전략 파티','1-3':'작전과 인맥으로 문을 여는 협상 전문 파티','1-4':'계획과 자유가 긴장감 있게 공존하는 탐험 파티','1-5':'말하지 않아도 다음 수를 읽는 두뇌 파티','2-3':'기회와 사람을 동시에 끌어당기는 확장형 파티','2-4':'계획보다 출발이 빠른 사고뭉치 원정대','2-5':'한 명이 벌이고 한 명이 수습하는 드라마 파티','3-4':'함께하고 싶은 사람과 혼자이고 싶은 사람의 밀당 파티','3-5':'사람의 마음을 읽고 방향까지 잡는 상담 파티','4-5':'독립적인 실행력과 긴 시야가 만난 조용한 강팀'};return lines[pair]||'서로의 빈 능력치를 채우는 의외의 강팀'}

function rpgRender(){
  const total=rpgQuestions.length;
  rpgCounter.textContent=rpgStep<0?'파티 모집':rpgStep<total?`${rpgStep+1} / ${total}`:'RESULT';
  rpgProgress.style.width=rpgStep<0?'4%':`${Math.min(rpgStep,total)/total*100}%`;
  if(rpgStep<0){const invited=rpgInvite?rpgJobs[rpgJobIndex(rpgInvite)]:null;rpgBody.innerHTML=`<div class="rpg-opening"><span class="rpg-mark">⚔️ LIFE QUEST</span><h2>${invited?`${invited.icon} ${invited.name}<br>캐릭터가 당신을 파티에 초대했습니다`:'당신의 인생은<br>어떤 직업입니까?'}</h2><p>${invited?'10개의 선택을 끝내면 두 사람의 파티 궁합과 함께 맞을 보스가 공개됩니다.':'돈, 가족, 관계와 두 번째 전성기 앞에서 내린 선택으로 인생 RPG 직업을 만듭니다.'}</p><div class="rpg-rule"><b>10개의 현실 퀘스트</b><span>결과를 만든 뒤 친구를 초대하면 둘만의 파티 궁합이 열립니다.</span></div><button class="next rpg-next" data-rpg-start>${invited?'초대 수락하고 캐릭터 만들기':'내 캐릭터 생성하기'} →</button></div>`;return}
  if(rpgStep<total){const q=rpgQuestions[rpgStep],picked=rpgAnswers[rpgStep];rpgBody.innerHTML=`<div class="rpg-question"><span class="kicker">QUEST ${String(rpgStep+1).padStart(2,'0')} · 인생의 갈림길</span><div class="rpg-scene">${q.scene}</div><h2>${q.ask}</h2><div class="rpg-answers">${q.answers.map((a,i)=>`<button class="${picked===i?'selected':''}" data-rpg-answer="${i}"><span>${String.fromCharCode(65+i)}</span><b>${a[0]}</b></button>`).join('')}</div><button class="next rpg-next" data-rpg-next ${picked===undefined?'disabled':''}>${rpgStep===total-1?'직업 확인하기':'다음 퀘스트'} →</button></div>`;return}
  const scores=rpgScores(),idx=rpgJobIndex(scores),job=rpgJobs[idx],p=rpgPercent(scores),labels=['방어','전략','모험','관계','독립','통찰'];
  if(rpgInvite){const otherIdx=rpgJobIndex(rpgInvite),other=rpgJobs[otherIdx],compat=rpgCompatibility(scores,rpgInvite);rpgBody.innerHTML=`<div class="rpg-result"><span class="rpg-mark">PARTY MATCH COMPLETE</span><h2>두 사람의 파티 궁합<br><em>${compat}%</em></h2><div class="rpg-party"><article><span>${other.icon}</span><small>초대한 파티원</small><b>${other.name}</b></article><i>＋</i><article><span>${job.icon}</span><small>나의 직업</small><b>${job.name}</b></article></div><section class="rpg-verdict"><small>이 파티의 정체</small><strong>${rpgPairLine(idx,otherIdx,compat)}</strong><p>${compat>=83?'서로 다른 방식이 꽤 정확하게 맞물립니다. 큰 퀘스트일수록 함께할 이유가 생깁니다.':compat>=68?'평소에는 잘 맞지만 결정적인 순간에는 역할을 미리 나누는 편이 좋습니다.':'재미는 확실하지만 같은 보스를 보고 있는지 자주 확인해야 합니다.'}</p></section><div class="actions"><button data-rpg-invite>이번엔 내가 파티 모집 ↗</button><button data-rpg-reset>내 캐릭터 다시 만들기</button></div><p class="rpg-disclaimer">가상의 선택을 조합한 오락용 결과이며 실제 성격이나 관계를 진단하지 않습니다.</p></div>`;return}
  rpgBody.innerHTML=`<div class="rpg-result"><span class="rpg-mark">CHARACTER CREATED</span><div class="rpg-job-icon">${job.icon}</div><small>나의 인생 RPG 직업</small><h2>${job.name}</h2><strong class="rpg-tagline">“${job.tag}”</strong><p>${job.copy}</p><div class="rpg-stats">${p.map((v,i)=>`<div><span>${labels[i]}</span><i><b style="width:${v}%"></b></i><em>${v}</em></div>`).join('')}</div><div class="rpg-skills"><div><small>고유 스킬</small><b>${job.skill}</b></div><div><small>치명적 약점</small><b>${job.weak}</b></div></div><section class="rpg-invite-box"><span>👥</span><div><small>NEXT QUEST</small><strong>혼자 보면 캐릭터,<br>둘이 보면 파티가 됩니다.</strong><p>친구에게 초대장을 보내면 두 사람의 파티 궁합이 열립니다.</p></div><button data-rpg-invite>파티원 초대하기 →</button></section><div class="actions"><button data-rpg-save>결과 카드 저장 ↓</button><button data-rpg-reset>다른 직업으로 ↻</button></div><p class="rpg-disclaimer">가상의 선택을 조합한 오락용 결과이며 실제 성격이나 미래를 진단하지 않습니다.</p></div>`;
}

async function rpgShare(){const scores=rpgScores(),job=rpgJobs[rpgJobIndex(scores)],url=`${location.origin}${location.pathname}#play-rpg?invite=${rpgEncode(scores)}`,text=`나는 ${job.name}! 내 인생 파티에 들어와서 우리 궁합을 확인해 봐.`;if(navigator.share)try{await navigator.share({title:'내 인생 RPG 직업 · 파티 초대',text,url});return}catch{}try{await navigator.clipboard.writeText(`${text} ${url}`);notify('파티 초대 링크를 복사했습니다 ✓')}catch{prompt('아래 초대 링크를 복사하세요',url)}}
function rpgSave(){const scores=rpgScores(),job=rpgJobs[rpgJobIndex(scores)],p=rpgPercent(scores),c=document.createElement('canvas');c.width=1080;c.height=1350;const x=c.getContext('2d');x.fillStyle='#17132d';x.fillRect(0,0,1080,1350);x.fillStyle='#6d45d8';x.beginPath();x.arc(900,170,310,0,Math.PI*2);x.fill();x.fillStyle='#f2c14e';x.font='900 46px Arial';x.fillText('별별상점 · LIFE RPG',70,105);x.font='140px Arial';x.fillText(job.icon,70,310);x.fillStyle='#fff';x.font='900 66px Arial';wrap(job.name,70,410,900,82,x);x.fillStyle='#f2c14e';x.font='800 36px Arial';wrap(`“${job.tag}”`,70,610,900,50,x);x.fillStyle='#fff';x.font='700 28px Arial';['방어','전략','모험','관계','독립','통찰'].forEach((n,i)=>{const y=790+i*65;x.fillText(n,70,y);x.fillStyle='#39334d';x.fillRect(190,y-22,680,22);x.fillStyle='#50d6c9';x.fillRect(190,y-22,680*p[i]/100,22);x.fillStyle='#fff';x.fillText(String(p[i]),900,y)});x.fillStyle='#f2c14e';x.font='800 34px Arial';x.fillText('친구를 초대해 파티 궁합을 확인하세요 ↗',70,1255);const a=document.createElement('a');a.download=`별별상점-${job.name}.png`;a.href=c.toDataURL('image/png');a.click()}
function wrap(text,x,y,max,line,ctx){let out='',yy=y;text.split(' ').forEach(w=>{const test=out+w+' ';if(ctx.measureText(test).width>max){ctx.fillText(out,x,yy);out=w+' ';yy+=line}else out=test});ctx.fillText(out,x,yy)}

document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;if(t.matches('[data-rpg-start]')){rpgStep=0;rpgRender()}if(t.dataset.rpgAnswer!==undefined){rpgAnswers[rpgStep]=+t.dataset.rpgAnswer;rpgRender()}if(t.matches('[data-rpg-next]')&&!t.disabled){rpgStep++;rpgRender()}if(t.matches('[data-rpg-invite]'))rpgShare();if(t.matches('[data-rpg-save]'))rpgSave();if(t.matches('[data-rpg-reset]'))rpgReset()});
document.querySelector('#rpgClose').addEventListener('click',rpgClose);
document.addEventListener('click',e=>{const t=e.target.closest('button');if(t&&t.dataset.game==='6'){e.preventDefault();e.stopImmediatePropagation();rpgOpen()}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!rpgGame.hidden)rpgClose()});
