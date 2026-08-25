let paceChoice=0,planChoice=0;
const paceOptions=[
 {icon:'💬',title:'같은 템포로 조금 더 대화한다',copy:'질문이 돌아왔다면 짧게 대화를 이어간다.',natural:18,signal:17,respect:18},
 {icon:'🌙',title:'오늘은 기분 좋게 마친다',copy:'답장이 짧거나 늦은 시간이라면 다음 대화의 여지를 둔다.',natural:17,signal:11,respect:23},
 {icon:'📨',title:'반응이 없어도 연달아 보낸다',copy:'대화가 끊길까 봐 새 주제를 계속 보낸다.',natural:4,signal:14,respect:3}
];

// 각 카드와 첫 메시지에 맞춰 이어지는 두 번째 장면.
const branchData=[
 [
  ['저도요 ㅎㅎ 아까 말한 디저트가 계속 생각나네요',[['그 집 메뉴 사진 보니까 진짜 맛있어 보이더라고요 ㅋㅋ',20,15,22],['그럼 저랑 가야겠네요. 날짜부터 정해요',10,19,10],['답장 왜 이렇게 늦었어요? 기다렸는데',3,11,3]]],
  ['ㅋㅋ 점수는 비밀인데 대화는 편했어요',[['그 말이면 충분하네요 ㅋㅋ 어떤 얘기가 제일 재밌었어요?',18,16,21],['편했으면 우리 잘 맞는 거죠?',11,18,11],['비밀이면 합격이라는 뜻으로 알게요',8,16,9]]],
  ['다음 주 일정은 아직 잘 모르겠어요',[['제가 너무 앞서갔네요. 오늘 즐거웠다는 말만 하고 싶었어요!',16,10,25],['그럼 일정 나오면 바로 알려줘요',8,15,8],['토요일 말고 일요일은요?',5,14,4]]]
 ],
 [
  ['꽃이 마음에 들었다니 저도 기분 좋네요 :)',[['오래 보려면 물은 얼마나 자주 갈아주면 돼요?',19,10,24],['다음엔 직원분 취향으로 한 송이 골라주세요',15,16,18],['예쁜 꽃 볼 때마다 직원분 생각날 듯해요',8,19,8]]],
  ['아 ㅎㅎ 그런 말은 조금 부끄럽네요',[['갑자기 말해서 당황했죠. 꽃 추천이 좋아서 감사 인사하고 싶었어요',16,10,25],['부끄러워하는 것도 귀여운데요?',6,18,5],['그럼 싫지는 않다는 뜻이죠?',4,16,3]]],
  ['퇴근 시간은 개인적인 정보라 말씀드리기 어려워요',[['맞아요, 제가 실례했어요. 불편하게 해서 죄송해요',13,4,28],['그럼 쉬는 날만 알려주세요',3,12,2],['농담이었어요 ㅋㅋ 너무 진지하시다',2,8,1]]]
 ],
 [
  ['저도 결국 카페 나왔어요 ㅎㅎ 오늘도 같은 자리예요',[['역시 집에서는 집중 어렵죠 ㅋㅋ 오늘 목표량은 얼마예요?',19,12,23],['쉬는 시간 겹치면 인사해도 돼요?',18,16,23],['제 옆자리로 오세요, 맡아둘게요',8,17,8]]],
  ['ㅋㅋ 진짜 자주 마주치긴 하네요',[['시험 기간 생활 패턴이 비슷한가 봐요. 무슨 공부해요?',18,13,22],['운명 인정할 때까지 물어볼게요',6,17,5],['저 보러 오는 거 아니었어요?',5,18,4]]],
  ['오늘은 다른 일정이 있었어요',[['아 그렇구나! 괜히 부담 줬네요. 일정 잘 보내요 :)',15,8,25],['무슨 일정인데요?',6,11,7],['내일은 꼭 와요. 기다릴게요',4,15,3]]]
 ],
 [
  ['오 벌써 들었어? 비슷한 곡으로 플리 보내줄게!',[['좋지! 나도 네 취향에 맞을 곡 몇 개 골라볼게',21,16,21],['우리 둘만의 플리 만드는 거네?',13,18,13],['곡 말고 너에 대해 더 알고 싶은데',7,20,6]]],
  ['엥 ㅋㅋ 그냥 음악 얘기한 건데?',[['내가 김칫국 마셨네 ㅋㅋ 추천곡 얘기가 재밌어서 그랬어',17,11,23],['지금부터 플러팅하면 되지 뭐',8,19,7],['아닌 척하는 거 다 알아',3,15,2]]],
  ['파트너는 아직 정하는 기간도 아닌데?',[['맞아, 내가 신났네 ㅋㅋ 합주 때 의견부터 맞춰보자',16,10,24],['그래도 난 너랑 할 거야',5,17,4],['다른 사람이랑 하려고?',3,13,2]]]
 ],
 [
  ['안녕하세요! 저도 기억나요. 잘 들어갔어요 ㅎㅎ',[['다행이에요. 어제 얘기하던 영화 결말은 결국 못 들었네요 ㅋㅋ',20,15,22],['기억한다니 성공이네요. 계속 연락해도 되죠?',10,17,10],['친구한테 제 얘기 들은 거 있어요?',7,13,9]]],
  ['아 ㅋㅋ 칭찬 감사해요',[['갑자기 외모 얘기해서 부담이었을 수도 있겠네요. 영화 얘기가 재밌었어요',16,10,24],['사진보다 실물이 낫다는 건 진짜예요',9,17,9],['칭찬만 하고 끝이에요?',4,14,3]]],
  ['연락이 엄청 빠르시네요 ㅎㅎ',[['제가 좀 급했네요 ㅋㅋ 어제 반가웠다는 인사부터 할게요',17,10,24],['빠른 사람이 기회도 잡는 거죠',7,18,7],['그래서 언제 돼요?',4,16,3]]]
 ],
 [
  ['저도 지난번에 도움받았잖아요 ㅎㅎ',[['그래도 덕분에 살았어요. 다음 근무 때 간식 취향 알려줘요!',19,13,23],['한 번씩 더 도와주면 밥 먹는 건가요 ㅋㅋ',14,17,15],['밥 약속한 거 취소 없기예요',7,16,8]]],
  ['갑자기요? 대타 가능해서 한 거예요 ㅋㅋ',[['맞아요, 혼자 착각했네요 ㅋㅋ 대타 고맙다는 뜻이었어요',16,8,25],['아직은 아니어도 곧 좋아질걸요?',5,18,4],['진짜 아무 마음도 없어요?',3,15,2]]],
  ['근무 끝나고 다른 약속이 있을 수도 있어요',[['그럼 당연히 약속 먼저 가야죠. 근무 때 봐요!',16,7,26],['끝날 때까지 기다리면 되죠?',3,14,2],['누구랑 약속인데요?',2,12,2]]]
 ],
 [
  ['헉 이 노래 아는 사람 처음 봐요! 신곡도 좋더라고요',[['특히 후렴이 좋더라고요. 다른 최애곡도 있어요?',21,14,22],['취향 이렇게 맞기 쉽지 않은데 신기해요 ㅋㅋ',17,17,18],['이 정도면 같이 공연 가야죠',10,20,10]]],
  ['ㅋㅋ 알고리즘 열일하네요',[['덕분에 좋은 곡 건졌네요. 요즘 제일 많이 듣는 곡 뭐예요?',18,13,22],['알고리즘도 우리 잘 어울린대요',8,18,7],['스토리마다 답장해도 되죠?',5,16,5]]],
  ['제가 모든 스토리에 답장하는 건 아니라서요',[['맞아요, 제가 괜히 의미를 크게 뒀네요. 불편했다면 미안해요',14,6,27],['그래도 제 건 봤잖아요',4,15,3],['그럼 어떤 스토리에 답장해요?',5,11,5]]]
 ],
 [
  ['다행이네요! 과제 무사 제출 축하해요 ㅎㅎ',[['진짜 생명의 은인이에요 ㅋㅋ 시험 준비는 잘돼가요?',19,12,23],['펜에 행운이 있었나 봐요. 다음에도 빌려주세요',14,12,17],['답례는 꼭 할게요. 번호도 저장했죠?',8,17,8]]],
  ['아뇨 그냥 그 자리가 편해서요 ㅋㅋ',[['제가 혼자 의미 부여했네요 ㅋㅋ 다들 같은 자리 찾나 봐요',16,8,24],['아직은 저 때문이 아닌 거네요?',6,17,5],['솔직히 말해도 되는데',3,13,2]]],
  ['내일 도서관에 갈지는 아직 모르겠어요',[['알겠어요! 자리 얘기는 잊고 시험 잘 봐요 :)',16,7,26],['오면 꼭 연락해요',7,14,8],['제가 자리 맡아두면 오겠죠?',4,15,3]]]
 ]
];

const planData=[
 [['🍰','소개팅 때 말한 디저트 카페','아까 말한 디저트 카페 궁금하던데, 다음 주 평일 저녁이나 주말 중 편한 때 같이 가볼래요?'],['☕','30분 커피','이번 주 바쁘면 근처에서 커피만 짧게 마셔도 좋아요. 편한 날 있어요?'],['🎬','대화에 나온 영화','그 영화 아직 안 봤다면 다음 주쯤 같이 보는 건 어때요?']],
 [['🌿','꽃 관리와 짧은 커피','꽃 관리 더 물어보고 싶은데, 혹시 근무 아닐 때 커피 한 잔 괜찮으세요? 부담되면 편하게 말씀해주세요.'],['🪴','주말 식물 마켓','이번 주말 식물 마켓이 있던데 관심 있으시면 같이 둘러볼래요?'],['☕','선택권을 둔 커피','개인적으로 연락드린 게 부담 아니었다면, 편한 날 짧게 커피 대접하고 싶어요.']],
 [['☕','공부 쉬는 시간 커피','다음에 카페에서 마주치면 쉬는 시간에 커피 한 잔 할래요? 제가 살게요.'],['🥪','시험 뒤 간단한 식사','시험 끝나는 날 비슷하면 근처에서 간단히 밥 먹을래요?'],['📚','공부 후 짧은 산책','이번 주도 같은 시간에 공부하면 끝나고 20분 정도 걸을래요?']],
 [['🎧','플레이리스트 교환 카페','서로 플리 들려주면서 이번 주 연습 전 커피 마실래?'],['🎸','함께 좋아하는 공연','우리가 얘기한 밴드 이번 주 공연하던데, 관심 있으면 같이 갈래?'],['🍜','연습 뒤 식사','다음 합주 끝나고 시간 되면 밥 먹으면서 곡 얘기 더 할래?']],
 [['🎬','못 끝낸 영화','어제 말한 영화 이번 주에 볼까 하는데, 관심 있으면 같이 볼래요?'],['☕','다음 모임 전 커피','다음 모임 전에 근처에서 커피 한 잔 하면서 얘기 더 할래요?'],['🍕','추천한 피자집','어제 추천한 피자집 궁금한데, 다음 주 중 편한 저녁에 같이 가볼래요?']],
 [['🍚','대타 답례 식사','대타 답례로 밥 사기로 한 거, 다음 스케줄 나온 뒤 둘 다 쉬는 날 맞춰볼까요?'],['🧋','근무 전 짧은 음료','다음 근무 조금 일찍 와서 음료 마실래요? 시간 안 되면 괜찮아요!'],['🍰','같이 마감한 날 디저트','같이 마감하는 날 너무 늦지 않으면 근처에서 디저트 먹고 갈래요?']],
 [['🎟️','취향 맞는 공연','우리가 얘기한 아티스트 다음 달 공연하던데, 아직 같이 갈 사람 없으면 함께 갈래요?'],['🎧','음악 좋은 카페','추천곡 교환도 할 겸 다음 주에 음악 좋은 카페 가볼래요?'],['💿','레코드 숍','새로 생긴 레코드 숍 궁금하던데, 취향 맞으면 주말에 같이 구경할래요?']],
 [['☕','시험 뒤 답례 커피','시험 끝난 날 시간 괜찮으면 펜 답례로 커피 살게요. 바쁘면 다음에 마주칠 때도 좋아요!'],['🥪','도서관 근처 식사','시험 끝나고 배고프면 도서관 근처에서 간단히 먹을래요?'],['🚶','공부 후 산책','다음에 같은 시간까지 공부하면 끝나고 잠깐 바람 쐴래요?']]
];

const branch=()=>branchData[flirtScene][opening], choices=()=>branch()[1], plans=()=>planData[flirtScene];
const originalRenderFlirt=renderFlirt;
flirtScores=function(){const a=fs().openers[opening],b=choices()[Math.max(followup,0)],p=paceOptions[paceChoice],q=[[19,17,22],[17,19,19],[18,15,23]][planChoice];return{natural:Math.min(99,Math.round(28+a[1]*.7+b[1]*.7+p.natural*.65+q[0]*.55)),signal:Math.min(99,Math.round(25+a[2]*.7+b[2]*.7+p.signal*.65+q[1]*.55)),respect:Math.min(99,Math.round(28+a[3]*.7+b[3]*.7+p.respect*.65+q[2]*.55))}};

renderFlirt=function(){
 const counter=document.querySelector('#flirtCounter'),progress=document.querySelector('#flirtProgress');
 if(flirtStep<=2)originalRenderFlirt();
 else if(flirtStep===3)flirtBody.innerHTML=`<span class="kicker">STEP 04 · 답장이 왔다</span><h2>상대의 말에 맞춰<br>한 칸만 더 가까이.</h2><div class="phone-chat"><div class="sent">${fs().openers[opening][0]}</div><div class="received">${fs().replies[opening]}</div><small>답장의 온도에 맞는 다음 말을 골라봐</small></div><div class="follow-list">${choices().map((x,i)=>`<button class="${followup===i?'selected':''}" data-follow="${i}"><span>${String.fromCharCode(65+i)}</span>${x[0]}</button>`).join('')}</div><button class="next flirt-next" data-flirt-advance ${followup<0?'disabled':''}>상대 반응 확인 →</button>`;
 else if(flirtStep===4)flirtBody.innerHTML=`<span class="kicker">STEP 05 · 대화의 템포</span><h2>한 번 더 답장이 왔어.<br>지금 속도는 어때?</h2><div class="timing-chat"><div class="sent">${fs().openers[opening][0]}</div><div class="received">${fs().replies[opening]}</div><div class="sent">${choices()[followup][0]}</div><div class="received">${branch()[0]}</div><small>상대의 마지막 답장을 보고 다음 행동을 골라봐</small></div><div class="strategy-options">${paceOptions.map((x,i)=>`<button class="strategy-option ${paceChoice===i?'selected':''}" data-pace="${i}"><span>${x.icon}</span><div><b>${x.title}</b><small>${x.copy}</small></div><em>${i===0?'대화 유지':i===1?'여유 두기':'과속 주의'}</em></button>`).join('')}</div><div class="micro-guide"><b>맥락 포인트</b><p>질문이 돌아오거나 새 이야기가 붙으면 이어가고, 짧은 답만 왔다면 자연스럽게 쉬어가는 편이 좋아.</p></div><button class="next flirt-next" data-flirt-advance>맥락에 맞는 약속 고르기 →</button>`;
 else if(flirtStep===5)flirtBody.innerHTML=`<span class="kicker">STEP 06 · 자연스러운 약속</span><h2>처음 만난 이유를<br>다음 만남의 명분으로.</h2><p>${fs().title}의 대화에서 실제로 이어질 법한 제안을 골라봐.</p><div class="plan-board"><header><small>STORY SO FAR</small><b>${fs().emoji} ${fs().title}</b><span>${branch()[0]}</span></header><div>${plans().map((x,i)=>`<button class="plan-card ${planChoice===i?'selected':''}" data-plan="${i}"><span>${x[0]}</span><small>PLAN ${String(i+1).padStart(2,'0')}</small><h3>${x[1]}</h3><p>${x[2]}</p><em>${i===0?'맥락 연결':i===1?'가벼운 선택':'짧은 약속'}</em></button>`).join('')}</div></div><div class="proposal-preview"><small>보낼 메시지 미리보기</small><strong>“${plans()[planChoice][2]}”</strong><p>${fs().where}에서 생긴 공통 맥락을 그대로 이어가는 제안</p></div><button class="next flirt-next" data-flirt-advance>최종 성사 확률 보기 →</button>`;
 else if(flirtStep===6){const saved=fs().followups;fs().followups=choices();flirtStep=4;originalRenderFlirt();flirtStep=6;fs().followups=saved;const card=flirtBody.querySelector('.date-message-card');if(card){card.querySelector('strong').textContent=`“${plans()[planChoice][2]}”`;card.insertAdjacentHTML('beforeend',`<div class="final-plan"><small>이어진 이야기</small><b>${paceOptions[paceChoice].title}</b><span>→</span><b>${plans()[planChoice][1]}</b></div>`)}}
 counter.textContent=`${flirtStep+1} / 7`;progress.style.width=`${(flirtStep+1)/7*100}%`;
};

document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.opening!==undefined){followup=-1;paceChoice=0;planChoice=0}if(b.dataset.pace!==undefined){paceChoice=+b.dataset.pace;renderFlirt()}if(b.dataset.plan!==undefined){planChoice=+b.dataset.plan;renderFlirt()}if(b.matches('[data-flirt-advance]')&&!b.disabled){flirtStep++;renderFlirt()}if(b.matches('[data-flirt-reset]')||b.id==='flirtClose'){paceChoice=0;planChoice=0}},true);
