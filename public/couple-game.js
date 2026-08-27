const coupleCases=[
 {icon:'🧹',title:'집안일은 왜 늘 내 몫인가',where:'평일 저녁의 거실',intro:'보이는 일과 보이지 않는 일이 쌓인 끝에 시작된 싸움.',verdict:[42,43,15],fallacy:['공로 독점','보이지 않는 노동 무시'],beats:[
  ['남편','나는 쓰레기도 버리고 장도 봤어. 집안일을 안 한다는 건 너무하잖아.','아내','말해야 하는 일만 하고, 무엇을 할지 정하는 건 늘 내 몫이었어.','both','실행한 일과 계획·관리 노동을 서로 다르게 계산했다.'],
  ['아내','당신은 내가 시켜야만 움직여.','남편','뭘 해도 방식이 틀렸다고 다시 하니까 손대기 어려웠어.','both','지시 의존과 방식 통제가 함께 악순환을 만들었다.'],
  ['남편','우리 집은 원래 어머니가 집안일을 다 하셨어.','아내','그 기준을 왜 우리 집에도 그대로 적용해?','husband','원가족의 방식을 현재 배우자의 동의 없이 기준으로 삼았다.'],
  ['아내','당신은 가족에게 관심이 없어.','남편','집안일 하나로 내 가족에 대한 마음까지 부정하지 마.','wife','구체적인 행동 문제를 사람 전체에 대한 평가로 확대했다.'],
  ['남편','그럼 앞으로 각자 자기 것만 하자.','아내','해결하자는 말에 관계를 끊듯 답하는 건 협박처럼 들려.','husband','협의 대신 극단적인 철회로 대화를 닫았다.']]},
 {icon:'💳',title:'말하지 않은 지출',where:'카드 명세서를 본 밤',intro:'금액보다 숨겼다는 사실이 더 크게 번진 싸움.',verdict:[50,30,20],fallacy:['비밀의 축소','과거 소환'],beats:[
  ['아내','상의 없이 이 돈을 쓴 게 문제야.','남편','내가 번 돈으로 필요한 걸 산 것뿐이야.','husband','공동생활에 영향을 주는 돈을 개인 소유 논리만으로 설명했다.'],
  ['남편','말하면 무조건 반대할 것 같아서 말하지 않았어.','아내','내 반응을 예상했다는 이유로 숨긴 게 정당해지진 않아.','husband','예상된 갈등을 비밀의 근거로 사용했다.'],
  ['아내','지난번에도 당신 마음대로 했잖아.','남편','지금 얘기만 하면 되지 왜 옛날 일까지 꺼내?','both','반복 패턴 확인은 필요하지만 과거 사례를 무한히 쌓으면 현재 해결이 흐려진다.'],
  ['남편','당신도 친정에 돈 보낼 때 일일이 말하지 않잖아.','아내','그 문제는 따로 합의해야지 이번 지출이 없어지는 건 아니야.','husband','상대의 다른 문제로 현재 행동의 책임을 상쇄하려 했다.'],
  ['아내','이제 당신 말을 어떻게 믿어?','남편','한 번 숨긴 일로 모든 신뢰를 부정하는 건 너무해.','wife','구체적인 신뢰 훼손을 관계 전체의 영구 판결로 확대했다.']]},
 {icon:'👨‍👩‍👧',title:'자녀 문제로 갈라진 편',where:'자녀가 방으로 들어간 뒤',intro:'훈육 방식의 차이가 서로의 부모 자격을 공격하는 싸움이 됐다.',verdict:[36,39,25],fallacy:['편 가르기','부모 자격 공격'],beats:[
  ['남편','지금 바로잡지 않으면 버릇이 더 나빠져.','아내','화난 상태에서 몰아붙이는 건 훈육이 아니야.','husband','문제 행동을 다루면서 감정적 압박까지 정당화했다.'],
  ['아내','아이 앞에서 내 말을 끊으면 내가 뭐가 돼?','남편','잘못된 말이면 그 자리에서 막아야지.','both','부모 간 이견을 자녀 앞에서 힘겨루기로 드러냈다.'],
  ['남편','당신이 매번 감싸니까 아이가 저러는 거야.','아내','모든 문제를 내 양육 탓으로 돌리지 마.','husband','복합적인 문제를 배우자 한 사람의 탓으로 단순화했다.'],
  ['아내','당신은 평소에 관심도 없다가 화낼 때만 부모야.','남편','내가 일한 시간은 관심으로 치지 않는 거야?','wife','참여 부족을 지적하면서 부모 역할 전체를 부정했다.'],
  ['남편','아이가 누구 말이 맞는지 직접 고르게 하자.','아내','아이를 우리 싸움의 판사로 만들면 안 돼.','husband','자녀에게 부부 갈등의 선택 책임을 넘기려 했다.']]},
 {icon:'🏡',title:'양가 부모님 사이의 선',where:'명절 일정을 정하는 식탁',intro:'효도와 공평함의 기준이 서로 달랐던 싸움.',verdict:[34,41,25],fallacy:['효도 경쟁','마음 읽기'],beats:[
  ['아내','이번에도 시댁부터 가는 게 당연하다는 식이잖아.','남편','부모님이 연세가 더 많으니 먼저 가자는 거였어.','both','각자의 타당한 사정을 합의가 아닌 당연함으로 제시했다.'],
  ['남편','당신은 우리 부모님만 만나면 표정부터 달라져.','아내','내 감정을 정해놓고 이유를 묻지도 않잖아.','husband','표정을 근거로 상대의 마음과 의도를 단정했다.'],
  ['아내','당신은 친정 일에는 늘 손님처럼 있어.','남편','나는 불편하지 않게 조용히 있는 거야.','both','조용함을 한쪽은 무관심, 다른 쪽은 배려로 해석했다.'],
  ['남편','부모님 살아계실 때 이 정도도 못 해드려?','아내','죄책감으로 일정을 정하게 하지 마.','husband','효도의 도덕성을 이용해 배우자의 동의를 압박했다.'],
  ['아내','그럼 각자 자기 부모만 챙겨.','남편','함께 방법을 찾자는 게 아니라 벌을 주는 말처럼 들려.','wife','협상이 막히자 관계의 공동 영역을 철회했다.']]},
 {icon:'🕰️',title:'연락 없는 늦은 귀가',where:'자정을 넘긴 현관',intro:'늦은 시간보다 기다리는 사람을 고려했는지가 쟁점인 싸움.',verdict:[55,27,18],fallacy:['통제 프레임','감정 확대'],beats:[
  ['아내','늦으면 연락 한 번 하는 게 그렇게 어려워?','남편','회식 중에 계속 휴대전화 보는 것도 예의가 아니잖아.','husband','짧은 안전 연락과 지속적인 휴대전화 사용을 같은 것으로 만들었다.'],
  ['남편','내가 어린애도 아닌데 왜 일일이 보고해야 해?','아내','보고가 아니라 기다리는 사람에 대한 배려야.','husband','상호 배려 요청을 자유를 통제하는 요구로 바꿨다.'],
  ['아내','가족보다 회사 사람이 더 중요한 거지.','남편','회식 한 번으로 우선순위 전체를 판단하지 마.','wife','한 사건을 관계 전체의 가치 순위로 확대했다.'],
  ['남편','잠들면 될 걸 왜 일부러 기다렸어?','아내','연락이 없으니 무슨 일이 생겼는지 걱정됐어.','husband','정보를 주지 않은 책임을 기다린 사람의 선택으로 돌렸다.'],
  ['아내','나도 다음부터 아무 말 없이 늦게 올 거야.','남편','같이 불편해지는 게 해결은 아니잖아.','wife','상호 기준을 정하는 대신 같은 행동으로 보복하려 했다.']]},
 {icon:'🧊',title:'말을 닫아버린 며칠',where:'대화가 사라진 집',intro:'싸운 내용보다 침묵을 사용하는 방식이 문제가 된 상황.',verdict:[38,42,20],fallacy:['침묵 처벌','즉답 강요'],beats:[
  ['남편','지금 말하면 더 심해질 것 같아서 조용히 있었어.','아내','언제 다시 얘기할지도 말하지 않으니 버림받은 기분이었어.','husband','진정할 시간은 필요하지만 대화 재개 시점을 알리지 않았다.'],
  ['아내','내가 물을 때 바로 답을 해야 해결되지.','남편','생각할 시간을 달라고 했는데 계속 따라오며 물었잖아.','wife','상대가 진정할 시간을 요청했는데 즉시 대답하도록 압박했다.'],
  ['남편','당신이 먼저 사과할 때까지 말하고 싶지 않았어.','아내','그건 휴식이 아니라 나를 벌주는 침묵이야.','husband','침묵을 감정 조절이 아니라 상대를 움직이는 수단으로 사용했다.'],
  ['아내','말을 안 하면 나도 최악으로 생각할 수밖에 없어.','남편','추측한 내용을 사실처럼 몰아붙이지 마.','wife','정보 부족에서 생긴 불안을 확정된 의도로 바꿨다.'],
  ['남편','어차피 말해도 당신은 듣지 않아.','아내','대화를 시작하기도 전에 결론부터 내렸잖아.','husband','과거 경험을 근거로 현재 대화의 가능성을 미리 닫았다.']]}
];

let coupleStep=0,coupleCase=0,coupleView='husband',coupleChoice=-1,coupleCorrect=0,coupleHistory=[],coupleRepair=-1;
const coupleModal=document.querySelector('#coupleGame'),coupleBody=document.querySelector('#coupleBody'),cc=()=>coupleCases[coupleCase];
const sideLabel=s=>s==='husband'?'남편':s==='wife'?'아내':'두 사람 모두';
function coupleOptions(stage){const base=[{side:'husband',title:'남편의 책임이 더 크다'},{side:'wife',title:'아내의 책임이 더 크다'},{side:'both',title:'둘의 방식 또는 상황 책임이 함께 있다'}],shift=(coupleCase+stage)%3;return base.slice(shift).concat(base.slice(0,shift))}
function openCouple(){coupleModal.hidden=false;document.body.style.overflow='hidden';history.replaceState(null,'','#play-couple');renderCouple()}
function closeCouple(){coupleModal.hidden=true;document.body.style.overflow='';if(location.hash==='#play-couple')history.replaceState(null,'','#games');resetCouple()}
function resetCouple(){coupleStep=0;coupleCase=0;coupleView='husband';coupleChoice=-1;coupleCorrect=0;coupleHistory=[];coupleRepair=-1}
function renderCouple(){
 const shown=Math.min(coupleStep+1,9);document.querySelector('#coupleCounter').textContent=`${shown} / 9`;document.querySelector('#coupleProgress').style.width=`${shown/9*100}%`;
 if(coupleStep===0)coupleBody.innerHTML=`<div class="couple-opening"><span class="kicker">CASE 01 · 싸움의 종류</span><h2>같은 싸움,<br><em>두 개의 기억.</em></h2><p>보편적인 부부 갈등 장면을 따라가며 사람 전체가 아니라 구체적인 행동과 논리를 점검합니다.</p></div><div class="couple-cases">${coupleCases.map((x,i)=>`<button class="${coupleCase===i?'selected':''}" data-couple-case="${i}"><span>${x.icon}</span><small>${x.where}</small><b>${x.title}</b><p>${x.intro}</p></button>`).join('')}</div><button class="next couple-next" data-couple-next>이 싸움 들여다보기 →</button>`;
 else if(coupleStep===1)coupleBody.innerHTML=`<span class="kicker">CASE 02 · 먼저 들을 사람</span><h2>누구의 자리에서<br>싸움을 시작할까요?</h2><p>시점은 이야기의 순서만 바꿉니다. 최종 책임 비율은 같은 사실을 기준으로 계산됩니다.</p><div class="viewpoint-pick"><button class="${coupleView==='husband'?'selected':''}" data-couple-view="husband"><span>👨</span><b>남편의 입장부터</b><small>남편이 기억하는 말부터 듣습니다</small></button><i>VS</i><button class="${coupleView==='wife'?'selected':''}" data-couple-view="wife"><span>👩</span><b>아내의 입장부터</b><small>아내가 기억하는 말부터 듣습니다</small></button></div><button class="next couple-next" data-couple-next>양쪽 진술 듣기 →</button>`;
 else if(coupleStep<=6){const stage=coupleStep-2,b=cc().beats[stage],first=coupleView==='husband'?[b[0],b[1]]:[b[2],b[3]],second=coupleView==='husband'?[b[2],b[3]]:[b[0],b[1]],opts=coupleOptions(stage);coupleBody.innerHTML=`<div class="couple-case-head"><div><span class="kicker">EVIDENCE ${stage+1} / 5</span><h2>${cc().icon} ${cc().title}</h2></div><div class="clarity"><small>논점 구분</small><b>${coupleCorrect} / ${stage}</b></div></div><section class="couple-dialogue"><div class="first"><small>${sideLabel(first[0])}의 기억</small><blockquote>“${first[1]}”</blockquote></div><div class="second"><small>${sideLabel(second[0])}의 기억</small><blockquote>“${second[1]}”</blockquote></div></section><h3 class="decision-title">이 장면의 책임은 어디에 더 가까울까요?</h3><div class="couple-options">${opts.map((x,i)=>`<button class="${coupleChoice===i?'selected':''}" data-couple-choice="${i}"><span>${String.fromCharCode(65+i)}</span><b>${x.title}</b></button>`).join('')}</div>${coupleChoice>=0?`<aside class="couple-fact"><small>보편적 관점의 쟁점</small><p>${b[5]}</p></aside>`:''}<button class="next couple-next" data-couple-next ${coupleChoice<0?'disabled':''}>${coupleStep===6?'화해 가능성 점검 →':'다음 진술 →'}</button>`}
 else if(coupleStep===7)coupleBody.innerHTML=`<span class="kicker">CASE 08 · 싸움을 끝내는 문장</span><h2>누가 이겼는지가 아니라<br>무엇을 바꿀지 말합니다.</h2><div class="repair-list">${[['“누가 더 힘든지는 잠시 멈추고, 앞으로 누가 무엇을 맡을지 적어보자.”','행동 합의'],['“당신도 잘못한 게 있다는 것부터 인정하면 나도 사과할게.”','조건부 사과'],['“오늘은 그만하고 다음부터 서로 알아서 하자.”','문제 회피']].map((x,i)=>`<button class="${coupleRepair===i?'selected':''}" data-couple-repair="${i}"><span>${i+1}</span><b>${x[0]}</b><small>${x[1]}</small></button>`).join('')}</div><button class="next couple-next" data-couple-next ${coupleRepair<0?'disabled':''}>최종 판결문 보기 →</button>`;
 else {const v=cc().verdict,clarity=Math.round(coupleCorrect/5*100),repair= coupleRepair===0?'합의 가능':'감정 재충돌 주의';coupleBody.innerHTML=`<div class="couple-result"><span class="kicker">FINAL · 보편적 관점의 판결문</span><div class="couple-gavel">⚖️</div><div class="badge">${repair}</div><h2>이번 싸움의<br>책임 비율</h2><p>남편과 아내라는 성별이 아니라, 이 장면에서 실제로 한 말과 행동을 기준으로 나눈 놀이형 판정입니다.</p><div class="fault-bars"><div class="husband" style="--fault:${v[0]}%"><span>남편 책임</span><b>${v[0]}%</b><i></i></div><div class="wife" style="--fault:${v[1]}%"><span>아내 책임</span><b>${v[1]}%</b><i></i></div><div class="context" style="--fault:${v[2]}%"><span>상황·구조</span><b>${v[2]}%</b><i></i></div></div><section class="verdict-paper"><small>${cc().icon} ${cc().title}</small><h3>두 사람 모두의 말에는<br><em>${cc().fallacy.join(' · ')}</em>이 있었습니다.</h3><p>당신은 5개 장면 중 ${coupleCorrect}개에서 핵심 책임을 구분했습니다. 논점 감별력 ${clarity}%.</p><strong>${coupleRepair===0?'사과의 크기를 겨루기보다 다음 행동을 구체적으로 나누는 것이 이 싸움의 출구입니다.':'상대의 잘못 인정을 조건으로 걸면 사과도 협상 카드가 됩니다. 행동 합의부터 다시 시작해 보세요.'}</strong></section><div class="result-card couple-guide"><small>판결 원칙</small><strong>감정에는 옳고 그름을 매기지 않고, 모욕·거짓말·통제·약속 위반 같은 행동에 책임을 묻습니다.</strong><em>폭력이나 위협이 있는 관계는 쌍방 책임으로 다루지 말고 안전과 전문적인 도움을 먼저 고려해야 합니다.</em></div><div class="actions"><button data-couple-share>판결 공유</button><button data-couple-reset>다른 싸움 점검 ↻</button></div></div>`}
}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.game==='3'){e.preventDefault();e.stopImmediatePropagation();openCouple();return}if(b.dataset.coupleCase!==undefined){coupleCase=+b.dataset.coupleCase;renderCouple()}if(b.dataset.coupleView!==undefined){coupleView=b.dataset.coupleView;renderCouple()}if(b.dataset.coupleChoice!==undefined){coupleChoice=+b.dataset.coupleChoice;renderCouple()}if(b.dataset.coupleRepair!==undefined){coupleRepair=+b.dataset.coupleRepair;renderCouple()}if(b.matches('[data-couple-next]')&&!b.disabled){if(coupleStep>=2&&coupleStep<=6){const selected=coupleOptions(coupleStep-2)[coupleChoice].side,answer=cc().beats[coupleStep-2][4];coupleHistory.push(selected);if(selected===answer)coupleCorrect++}coupleStep++;coupleChoice=-1;renderCouple()}if(b.matches('[data-couple-reset]')){resetCouple();renderCouple()}if(b.matches('[data-couple-share]'))shareCouple()},true);
document.querySelector('#coupleClose').onclick=closeCouple;
async function shareCouple(){const v=cc().verdict,text=`${cc().title} 판결: 남편 ${v[0]}% · 아내 ${v[1]}% · 상황 ${v[2]}%. 당신이라면 어떻게 볼까요?`,url=`${location.origin}${location.pathname}#play-couple`;if(navigator.share)try{await navigator.share({title:'부부싸움 판결소',text,url});return}catch{}await navigator.clipboard.writeText(`${text} ${url}`);notify('게임 바로가기 복사 완료 ✓')}
