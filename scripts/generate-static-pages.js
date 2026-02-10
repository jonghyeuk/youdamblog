const fs = require('fs');
const path = require('path');

// Firebase 설정 (index.html에서 사용하는 것과 동일)
const firebaseConfig = {
  apiKey: "AIzaSyA-I1lfNy57idBTkj2NYxt2-yHQvHJGPlM",
  authDomain: "youdammain.firebaseapp.com",
  projectId: "youdammain",
  storageBucket: "youdammain.firebasestorage.app",
  messagingSenderId: "923242680713",
  appId: "1:923242680713:web:fb85da2af29598ec775158",
  measurementId: "G-KTLD09Z6DB"
};

console.log('🚀 정적 페이지 생성 시작...');
console.log('📝 참고: 이 스크립트는 SEO를 위한 정적 HTML 페이지를 생성합니다.');

// 포스트 디렉토리 생성
const postsDir = path.join(__dirname, '../public/posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
  console.log('✅ /public/posts 디렉토리 생성 완료');
}

// 샘플 포스트 데이터 - 애드센스 승인을 위한 고품질 콘텐츠
const samplePosts = [
  {
    id: 'how-to-write-science-paper-introduction',
    title: '과학논문 서론 작성법: 연구 배경부터 가설까지 완벽 가이드',
    slug: 'how-to-write-science-paper-introduction',
    category: '논문작성법',
    excerpt: '과학논문에서 가장 중요한 서론 작성법을 단계별로 알려드립니다. 연구 배경 설정, 선행연구 분석, 연구 목적과 가설 설정까지 체계적으로 배워보세요.',
    content: `
      <h2>서론이 중요한 이유</h2>
      <p>과학논문의 서론은 독자가 가장 먼저 읽는 부분입니다. 잘 작성된 서론은 연구의 필요성을 명확히 전달하고, 독자가 논문 전체를 읽고 싶게 만듭니다. 반면, 부실한 서론은 아무리 좋은 연구 결과가 있어도 그 가치를 제대로 전달하지 못합니다.</p>

      <h2>서론의 구조: 깔때기 모델</h2>
      <p>효과적인 서론은 '깔때기 모델'을 따릅니다. 넓은 주제에서 시작하여 점점 좁은 연구 주제로 좁혀가는 방식입니다.</p>

      <h3>1단계: 연구 배경 (Background)</h3>
      <p>연구 분야의 전반적인 상황을 설명합니다. 이 분야가 왜 중요한지, 현재 어떤 연구들이 진행되고 있는지 개괄적으로 소개합니다.</p>
      <ul>
        <li>해당 분야의 사회적, 과학적 중요성</li>
        <li>최근 연구 동향과 발전 방향</li>
        <li>일반 독자도 이해할 수 있는 배경 지식</li>
      </ul>

      <h3>2단계: 선행연구 검토 (Literature Review)</h3>
      <p>기존 연구들이 무엇을 밝혀냈고, 어떤 한계가 있는지 분석합니다. 이 과정에서 여러분의 연구가 왜 필요한지가 자연스럽게 드러납니다.</p>
      <ul>
        <li>관련 분야의 주요 연구 결과 요약</li>
        <li>기존 연구의 한계점이나 미해결 문제</li>
        <li>연구 공백(Research Gap) 식별</li>
      </ul>

      <h3>3단계: 연구 목적 (Research Objective)</h3>
      <p>앞서 발견한 연구 공백을 바탕으로, 본 연구가 해결하고자 하는 문제를 명확히 제시합니다.</p>
      <p><strong>예시:</strong> "따라서 본 연구에서는 [기존 연구의 한계]를 보완하여 [구체적인 연구 주제]를 탐구하고자 한다."</p>

      <h3>4단계: 연구 가설 (Hypothesis)</h3>
      <p>연구를 통해 검증하고자 하는 가설을 구체적으로 제시합니다. 좋은 가설은 측정 가능하고, 검증 가능하며, 명확해야 합니다.</p>

      <h2>서론 작성 시 주의사항</h2>
      <ol>
        <li><strong>너무 광범위하게 시작하지 마세요:</strong> "인류의 역사에서..."처럼 시작하면 논점이 흐려집니다.</li>
        <li><strong>인용은 신뢰할 수 있는 출처에서:</strong> 학술 논문, 정부 보고서, 공신력 있는 기관 자료를 사용하세요.</li>
        <li><strong>길이는 전체의 10-15%:</strong> 너무 짧으면 배경 설명이 부족하고, 너무 길면 본론에 집중하기 어렵습니다.</li>
        <li><strong>현재형과 과거형 적절히 사용:</strong> 일반적 사실은 현재형, 특정 연구 결과는 과거형으로 작성합니다.</li>
      </ol>

      <h2>마무리</h2>
      <p>좋은 서론을 작성하려면 많은 논문을 읽어보는 것이 중요합니다. 다양한 논문의 서론을 분석하면서 어떤 방식이 효과적인지 스스로 파악해보세요. 처음에는 어렵겠지만, 연습을 통해 반드시 실력이 향상됩니다.</p>
    `,
    date: '2024-12-15',
    views: 0,
    image: null
  },
  {
    id: 'understanding-variables-in-experiments',
    title: '실험 설계의 기초: 독립변인, 종속변인, 통제변인 완벽 이해',
    slug: 'understanding-variables-in-experiments',
    category: '연구방법론',
    excerpt: '과학 실험에서 가장 기본이 되는 변인의 개념을 쉽게 설명합니다. 독립변인, 종속변인, 통제변인의 차이와 실제 실험에서의 적용 방법을 알아보세요.',
    content: `
      <h2>변인이란 무엇인가?</h2>
      <p>변인(Variable)은 연구에서 변할 수 있는 모든 요소를 말합니다. 과학 실험의 핵심은 이 변인들을 적절히 조절하고 측정하여 인과관계를 밝히는 것입니다.</p>

      <h2>세 가지 핵심 변인</h2>

      <h3>1. 독립변인 (Independent Variable)</h3>
      <p>연구자가 <strong>의도적으로 조작하는</strong> 변인입니다. 실험의 '원인'에 해당합니다.</p>
      <p><strong>예시:</strong> "비료의 양이 식물 성장에 미치는 영향" 연구에서 → 비료의 양이 독립변인</p>
      <ul>
        <li>연구자가 직접 통제하고 변화시킴</li>
        <li>실험 조건을 만드는 핵심 요소</li>
        <li>보통 2개 이상의 수준(조건)을 설정</li>
      </ul>

      <h3>2. 종속변인 (Dependent Variable)</h3>
      <p>독립변인의 변화에 따라 <strong>측정되는 결과</strong>입니다. 실험의 '결과'에 해당합니다.</p>
      <p><strong>예시:</strong> 위 연구에서 → 식물의 키(성장)가 종속변인</p>
      <ul>
        <li>독립변인에 의해 영향을 받음</li>
        <li>객관적으로 측정 가능해야 함</li>
        <li>수치화할 수 있으면 더 좋음</li>
      </ul>

      <h3>3. 통제변인 (Controlled Variable)</h3>
      <p>실험 결과에 영향을 줄 수 있지만, <strong>일정하게 유지</strong>하는 변인입니다.</p>
      <p><strong>예시:</strong> 위 연구에서 → 햇빛 양, 물 주는 양, 온도, 화분 크기 등</p>
      <ul>
        <li>실험의 공정성을 위해 동일하게 유지</li>
        <li>통제하지 않으면 결과를 신뢰할 수 없음</li>
        <li>가능한 한 많은 변인을 통제해야 함</li>
      </ul>

      <h2>실제 실험 설계 예시</h2>
      <p><strong>연구 주제:</strong> 카페인이 집중력에 미치는 영향</p>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="border: 1px solid #ddd; padding: 10px;">변인 유형</th>
          <th style="border: 1px solid #ddd; padding: 10px;">구체적 내용</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">독립변인</td>
          <td style="border: 1px solid #ddd; padding: 10px;">카페인 섭취량 (0mg, 100mg, 200mg)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">종속변인</td>
          <td style="border: 1px solid #ddd; padding: 10px;">집중력 테스트 점수</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">통제변인</td>
          <td style="border: 1px solid #ddd; padding: 10px;">테스트 시간, 참가자 수면시간, 테스트 환경, 테스트 난이도</td>
        </tr>
      </table>

      <h2>흔히 하는 실수</h2>
      <ol>
        <li><strong>통제변인을 무시:</strong> "햇빛 양은 별로 중요하지 않겠지"라고 생각하면 안 됩니다.</li>
        <li><strong>여러 독립변인을 동시에 조작:</strong> 한 번에 한 가지만 바꿔야 원인을 파악할 수 있습니다.</li>
        <li><strong>측정 불가능한 종속변인:</strong> "행복감"보다는 "행복 지수 설문 점수"처럼 구체적으로.</li>
      </ol>

      <h2>정리</h2>
      <p>변인을 명확히 정의하는 것은 실험 설계의 첫걸음입니다. 처음 실험을 설계할 때는 변인 표를 만들어 각 변인의 역할을 명확히 정리해보세요. 이 과정이 탄탄하면 실험 전체가 탄탄해집니다.</p>
    `,
    date: '2024-12-10',
    views: 0,
    image: null
  },
  {
    id: 're-project-step-by-step-guide',
    title: 'R&E 프로젝트 A to Z: 주제 선정부터 최종 발표까지',
    slug: 're-project-step-by-step-guide',
    category: '과학탐구',
    excerpt: 'R&E(Research & Education) 프로젝트를 처음 시작하는 학생들을 위한 완벽 가이드입니다. 각 단계별로 무엇을 해야 하는지 상세하게 안내합니다.',
    content: `
      <h2>R&E란 무엇인가?</h2>
      <p>R&E(Research & Education)는 과학영재학교, 과학고, 일반고 영재학급 등에서 진행하는 연구 중심 교육 프로그램입니다. 대학교수나 연구원의 지도 아래 실제 연구를 수행하며, 이 과정에서 과학적 사고력과 연구 역량을 기릅니다.</p>

      <h2>R&E 프로젝트 타임라인</h2>

      <h3>1단계: 주제 탐색 (1-2개월)</h3>
      <p>좋은 연구 주제를 찾는 것이 성공적인 R&E의 절반입니다.</p>
      <ul>
        <li>관심 분야의 최신 연구 동향 조사</li>
        <li>과학 뉴스, 논문 초록 읽기</li>
        <li>지도교수님과의 상담</li>
        <li>실현 가능성 검토 (시간, 장비, 비용)</li>
      </ul>
      <p><strong>팁:</strong> 너무 거창한 주제보다는 작지만 명확한 질문에서 시작하세요.</p>

      <h3>2단계: 연구 계획서 작성 (2-3주)</h3>
      <p>연구 계획서는 프로젝트의 설계도입니다.</p>
      <ul>
        <li>연구 배경 및 필요성</li>
        <li>연구 목적 및 가설</li>
        <li>연구 방법 (실험 설계)</li>
        <li>예상 결과 및 기대 효과</li>
        <li>연구 일정</li>
      </ul>

      <h3>3단계: 선행연구 조사 (지속적)</h3>
      <p>관련 논문을 읽고 분석합니다.</p>
      <ul>
        <li>Google Scholar, RISS, DBpia 활용</li>
        <li>논문 요약 노트 작성</li>
        <li>참고문헌 목록 정리</li>
      </ul>

      <h3>4단계: 실험 수행 (3-6개월)</h3>
      <p>계획대로 실험을 진행하고 데이터를 수집합니다.</p>
      <ul>
        <li>실험 노트 꼼꼼히 기록</li>
        <li>예상과 다른 결과도 중요한 데이터</li>
        <li>반복 실험으로 신뢰도 확보</li>
        <li>안전 수칙 준수</li>
      </ul>

      <h3>5단계: 데이터 분석 (1-2개월)</h3>
      <p>수집한 데이터를 분석하고 해석합니다.</p>
      <ul>
        <li>그래프, 표로 시각화</li>
        <li>통계 분석 (필요시)</li>
        <li>결과의 의미 해석</li>
      </ul>

      <h3>6단계: 논문 작성 (1-2개월)</h3>
      <p>연구 결과를 논문 형식으로 정리합니다.</p>
      <ul>
        <li>서론, 재료 및 방법, 결과, 고찰, 결론</li>
        <li>참고문헌 정리</li>
        <li>지도교수님 피드백 반영</li>
      </ul>

      <h3>7단계: 발표 준비 (2-3주)</h3>
      <p>발표 자료를 만들고 연습합니다.</p>
      <ul>
        <li>PPT 슬라이드 제작</li>
        <li>발표 스크립트 작성</li>
        <li>예상 질문 준비</li>
        <li>발표 연습 (시간 체크)</li>
      </ul>

      <h2>성공적인 R&E를 위한 조언</h2>
      <ol>
        <li><strong>팀원과의 소통:</strong> 정기적인 미팅, 역할 분담 명확히</li>
        <li><strong>기록의 중요성:</strong> 모든 과정을 꼼꼼히 기록하세요</li>
        <li><strong>실패를 두려워하지 마세요:</strong> 예상과 다른 결과도 발견입니다</li>
        <li><strong>일정 관리:</strong> 마감에 쫓기면 질이 떨어집니다</li>
      </ol>

      <h2>마무리</h2>
      <p>R&E는 단순한 과제가 아니라, 진짜 과학자처럼 사고하고 연구하는 경험입니다. 이 과정에서 얻는 역량은 대학 진학뿐 아니라 평생의 자산이 됩니다.</p>
    `,
    date: '2024-12-08',
    views: 0,
    image: null
  },
  {
    id: 'student-record-research-strategy',
    title: '학생부종합전형 연구활동 기록 전략: 이렇게 써야 합격한다',
    slug: 'student-record-research-strategy',
    category: '대입준비',
    excerpt: '학생부종합전형에서 연구활동을 효과적으로 기록하는 방법을 알려드립니다. 입학사정관이 주목하는 포인트와 실제 작성 예시를 확인하세요.',
    content: `
      <h2>학생부에서 연구활동이 중요한 이유</h2>
      <p>학생부종합전형에서 연구활동 기록은 학생의 <strong>지적 호기심</strong>, <strong>탐구 역량</strong>, <strong>전공 적합성</strong>을 보여주는 핵심 자료입니다. 단순히 "연구를 했다"가 아니라, "어떤 문제의식에서 시작해 어떻게 해결해 나갔는가"를 보여줘야 합니다.</p>

      <h2>입학사정관이 보는 포인트</h2>
      <ol>
        <li><strong>주도성:</strong> 스스로 문제를 발견하고 해결하려 했는가?</li>
        <li><strong>깊이:</strong> 표면적 탐구가 아닌 심층적 분석을 했는가?</li>
        <li><strong>성장:</strong> 활동을 통해 어떤 변화가 있었는가?</li>
        <li><strong>연결성:</strong> 희망 전공과 어떻게 연결되는가?</li>
      </ol>

      <h2>세부능력 및 특기사항 작성법</h2>

      <h3>STAR 기법 활용하기</h3>
      <ul>
        <li><strong>S(Situation):</strong> 어떤 상황/맥락에서 시작했는가</li>
        <li><strong>T(Task):</strong> 어떤 과제/목표를 설정했는가</li>
        <li><strong>A(Action):</strong> 구체적으로 무엇을 했는가</li>
        <li><strong>R(Result):</strong> 어떤 결과와 배움을 얻었는가</li>
      </ul>

      <h3>좋은 예시 vs 나쁜 예시</h3>
      <p><strong>나쁜 예:</strong></p>
      <blockquote style="background: #fee; padding: 15px; border-left: 4px solid #c00; margin: 15px 0;">
      "과학탐구대회에 참가하여 식물 성장에 관한 실험을 수행함. 좋은 결과를 얻어 교내 대회에서 수상함."
      </blockquote>
      <p>→ 너무 일반적, 구체성 없음, 배움이 드러나지 않음</p>

      <p><strong>좋은 예:</strong></p>
      <blockquote style="background: #efe; padding: 15px; border-left: 4px solid #0a0; margin: 15px 0;">
      "학교 화단의 같은 종 식물이 위치에 따라 다른 성장을 보이는 것에 의문을 품고, 일조량과 토양 pH가 식물 성장에 미치는 영향을 탐구함. 3개월간 통제 실험을 설계하여 주 2회 데이터를 수집하였으며, 그 결과 토양 pH보다 일조량이 더 결정적 요인임을 발견함. 이 과정에서 변인 통제의 어려움을 경험하며, 단일 요인 분석의 한계를 인식하고 다변량 분석에 대한 관심이 생김."
      </blockquote>
      <p>→ 문제의식이 명확, 구체적 과정, 결과와 배움이 연결됨</p>

      <h2>과목별 연계 전략</h2>

      <h3>과학 교과</h3>
      <ul>
        <li>교과 내용에서 심화 탐구로 확장</li>
        <li>실험 설계 및 수행 과정 상세 기록</li>
        <li>가설-실험-결론의 과학적 사고 과정 강조</li>
      </ul>

      <h3>국어 교과</h3>
      <ul>
        <li>연구 보고서 작성 능력</li>
        <li>발표 및 토론 역량</li>
        <li>논리적 글쓰기 능력</li>
      </ul>

      <h3>수학 교과</h3>
      <ul>
        <li>데이터 분석, 통계 활용</li>
        <li>수학적 모델링 시도</li>
      </ul>

      <h2>연간 로드맵</h2>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="border: 1px solid #ddd; padding: 10px;">학년</th>
          <th style="border: 1px solid #ddd; padding: 10px;">중점 활동</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">1학년</td>
          <td style="border: 1px solid #ddd; padding: 10px;">관심 분야 탐색, 기초 탐구 활동, 독서</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">2학년</td>
          <td style="border: 1px solid #ddd; padding: 10px;">심화 연구(R&E, 소논문), 교과 연계 프로젝트</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">3학년</td>
          <td style="border: 1px solid #ddd; padding: 10px;">기존 활동 심화, 자기소개서 연결, 면접 준비</td>
        </tr>
      </table>

      <h2>마무리</h2>
      <p>학생부 기록은 활동이 끝난 후가 아니라 <strong>활동 전에 미리 계획</strong>해야 합니다. 무엇을 할지, 어떻게 기록할지, 어떤 성장을 보여줄지를 미리 설계하세요. 담임선생님, 교과선생님과의 소통도 중요합니다.</p>
    `,
    date: '2024-12-05',
    views: 0,
    image: null
  },
  {
    id: 'how-to-cite-references-correctly',
    title: '참고문헌 인용법 총정리: APA, MLA, Chicago 스타일 비교',
    slug: 'how-to-cite-references-correctly',
    category: '논문작성법',
    excerpt: '논문 작성 시 필수인 참고문헌 인용법을 스타일별로 정리했습니다. APA, MLA, Chicago 스타일의 차이점과 올바른 인용 방법을 예시와 함께 알아봅니다.',
    content: `
      <h2>왜 참고문헌 인용이 중요한가?</h2>
      <p>참고문헌 인용은 단순한 형식이 아닙니다. 올바른 인용은:</p>
      <ul>
        <li>원저자에 대한 <strong>학문적 예의</strong>를 지키는 것</li>
        <li><strong>표절을 방지</strong>하는 핵심 수단</li>
        <li>연구의 <strong>신뢰도와 객관성</strong>을 높이는 방법</li>
        <li>독자가 <strong>원문을 찾아볼 수 있게</strong> 하는 것</li>
      </ul>

      <h2>주요 인용 스타일 비교</h2>

      <h3>1. APA 스타일 (American Psychological Association)</h3>
      <p><strong>주로 사용:</strong> 사회과학, 심리학, 교육학</p>
      <p><strong>특징:</strong> 저자-연도 방식</p>

      <p><strong>본문 내 인용:</strong></p>
      <blockquote style="background: #f5f5f5; padding: 15px; margin: 15px 0;">
      김철수(2023)에 따르면, 고등학생의 연구 역량은... <br>
      또는: ...것으로 나타났다(김철수, 2023).
      </blockquote>

      <p><strong>참고문헌 목록:</strong></p>
      <blockquote style="background: #f5f5f5; padding: 15px; margin: 15px 0;">
      김철수. (2023). 고등학생 연구 교육의 효과. <em>교육연구</em>, 15(2), 45-67.
      </blockquote>

      <h3>2. MLA 스타일 (Modern Language Association)</h3>
      <p><strong>주로 사용:</strong> 인문학, 문학, 언어학</p>
      <p><strong>특징:</strong> 저자-페이지 방식</p>

      <p><strong>본문 내 인용:</strong></p>
      <blockquote style="background: #f5f5f5; padding: 15px; margin: 15px 0;">
      김철수는 "연구 역량은 훈련을 통해 발전한다"고 주장했다(45).
      </blockquote>

      <p><strong>참고문헌 목록:</strong></p>
      <blockquote style="background: #f5f5f5; padding: 15px; margin: 15px 0;">
      김철수. "고등학생 연구 교육의 효과." <em>교육연구</em>, vol. 15, no. 2, 2023, pp. 45-67.
      </blockquote>

      <h3>3. Chicago 스타일</h3>
      <p><strong>주로 사용:</strong> 역사학, 일부 인문학</p>
      <p><strong>특징:</strong> 각주/미주 방식 또는 저자-연도 방식</p>

      <p><strong>각주 방식:</strong></p>
      <blockquote style="background: #f5f5f5; padding: 15px; margin: 15px 0;">
      연구 역량은 훈련을 통해 발전한다.¹<br><br>
      ¹ 김철수, <em>고등학생 연구 교육의 효과</em> (서울: 교육출판사, 2023), 45.
      </blockquote>

      <h2>인용 시 주의사항</h2>

      <h3>직접 인용 vs 간접 인용</h3>
      <p><strong>직접 인용:</strong> 원문을 그대로 인용 (따옴표 사용, 페이지 번호 필수)</p>
      <blockquote style="background: #e8f4ff; padding: 15px; margin: 15px 0;">
      김철수(2023)는 "과학적 사고력은 반복적인 실험 경험을 통해 발달한다"(p. 52)고 주장하였다.
      </blockquote>

      <p><strong>간접 인용:</strong> 원문의 내용을 자신의 말로 재구성</p>
      <blockquote style="background: #e8f4ff; padding: 15px; margin: 15px 0;">
      김철수(2023)에 따르면, 학생들의 과학적 사고력은 실험 활동을 반복할수록 향상된다.
      </blockquote>

      <h3>흔한 실수</h3>
      <ol>
        <li><strong>모자이크 표절:</strong> 몇 단어만 바꾸고 인용하지 않는 것</li>
        <li><strong>출처 누락:</strong> 참고했지만 인용을 빠뜨리는 것</li>
        <li><strong>형식 불일치:</strong> 본문과 참고문헌 목록의 스타일이 다른 것</li>
        <li><strong>정보 누락:</strong> 저자, 연도, 페이지 등 필수 정보가 빠진 것</li>
      </ol>

      <h2>인용 도구 활용</h2>
      <p>참고문헌 관리를 도와주는 도구들:</p>
      <ul>
        <li><strong>Zotero:</strong> 무료, 사용하기 쉬움</li>
        <li><strong>Mendeley:</strong> PDF 관리 기능 우수</li>
        <li><strong>EndNote:</strong> 전문적, 유료</li>
        <li><strong>Google Scholar:</strong> 인용 형식 자동 생성 기능</li>
      </ul>

      <h2>마무리</h2>
      <p>참고문헌 인용은 처음에는 번거로워 보이지만, 한 번 익히면 평생 사용하는 기술입니다. 지금 사용하는 스타일 하나를 확실히 익혀두세요. 대학에 가서도, 대학원에 가서도 반드시 필요합니다.</p>
    `,
    date: '2024-12-01',
    views: 0,
    image: null
  },
  {
    id: 'how-to-find-research-topic',
    title: '연구 주제 찾는 법: 엄마의 비닐봉지에서 시작된 과학탐구',
    slug: 'how-to-find-research-topic',
    category: '연구방법론',
    excerpt: '막연하게 느껴지는 연구 주제 선정. 거창한 곳이 아닌 일상의 작은 의문에서 시작해 꼬리에 꼬리를 물며 구체화하는 방법을 알려드립니다.',
    content: `
      <h2>왜 주제 선정이 어렵게 느껴질까?</h2>
      <p>"연구 주제를 정하세요."</p>
      <p>이 말을 들으면 대부분의 고등학생들은 막막해집니다. <strong>'뭔가 대단한 걸 해야 할 것 같은데...'</strong>, <strong>'노벨상 받을 만한 주제여야 하나?'</strong> 하는 생각이 먼저 듭니다.</p>
      <p>하지만 현실은 다릅니다. 좋은 연구 주제는 거창한 곳에서 나오지 않습니다. 오히려 <strong>너무 평범해서 그냥 지나쳤던 일상의 순간</strong>에서 시작되는 경우가 많습니다.</p>

      <h2>일상에서 주제 발견하기: 엄마의 비닐봉지</h2>
      <p>실제 사례를 하나 들어볼게요.</p>

      <blockquote style="background: #f0f7ff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
      "우리 엄마는 장을 보고 오실 때마다 비닐봉지를 한가득 들고 오세요. 그런데 항상 '이거 환경에 안 좋은데...'라고 중얼거리시면서도 계속 쓰시더라고요. 편하니까요."
      </blockquote>

      <p>이 평범한 관찰에서 연구가 시작됩니다.</p>

      <h3>첫 번째 의문: 왜 계속 쓸까?</h3>
      <p>비닐이 환경에 나쁜 건 다 아는데, 왜 계속 사용할까요?</p>
      <ul>
        <li>편리하다</li>
        <li>가격이 싸다</li>
        <li>대안이 마땅치 않다</li>
      </ul>
      <p>여기서 <strong>"편리함과 환경 사이의 딜레마"</strong>라는 큰 그림이 보이기 시작합니다.</p>

      <h3>두 번째 의문: 그래서 비닐은 어떻게 되는 거지?</h3>
      <p>버려진 비닐봉지는 어디로 갈까요?</p>
      <ul>
        <li>재활용될까? → 실제로 재활용률은 얼마나 될까?</li>
        <li>매립될까? → 분해되는 데 얼마나 걸릴까?</li>
        <li>소각될까? → 어떤 물질이 나올까?</li>
      </ul>

      <h3>세 번째 의문: 문제가 있다면 해결책은?</h3>
      <p>여기서 연구 방향이 갈립니다:</p>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="border: 1px solid #ddd; padding: 12px;">방향</th>
          <th style="border: 1px solid #ddd; padding: 12px;">연구 주제 예시</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;"><strong>대안 탐색</strong></td>
          <td style="border: 1px solid #ddd; padding: 12px;">생분해성 비닐의 실제 분해 속도 측정</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;"><strong>처리 방법</strong></td>
          <td style="border: 1px solid #ddd; padding: 12px;">미생물을 이용한 플라스틱 분해 가능성</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;"><strong>행동 변화</strong></td>
          <td style="border: 1px solid #ddd; padding: 12px;">비닐봉지 사용 줄이기 캠페인의 효과 분석</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;"><strong>현황 분석</strong></td>
          <td style="border: 1px solid #ddd; padding: 12px;">우리 동네 재활용 분리수거 실태 조사</td>
        </tr>
      </table>

      <h2>꼬리에 꼬리를 무는 질문법</h2>
      <p>이것이 바로 <strong>"꼬리물기 기법"</strong>입니다. 하나의 관찰에서 시작해 계속 "왜?", "그래서?", "그러면?"을 물어가는 방식이죠.</p>

      <h3>꼬리물기의 5단계</h3>
      <ol>
        <li><strong>관찰</strong>: 일상에서 이상하거나 궁금한 점 발견<br>
        <em>"엄마가 비닐봉지를 쓰면서 미안해하신다"</em></li>

        <li><strong>첫 번째 질문</strong>: 왜 그럴까?<br>
        <em>"왜 환경에 나쁜 걸 알면서도 쓸까?"</em></li>

        <li><strong>확장 질문</strong>: 그래서 어떻게 되는 거지?<br>
        <em>"버려진 비닐은 어떻게 처리될까?"</em></li>

        <li><strong>문제 인식</strong>: 여기서 문제점은 뭐지?<br>
        <em>"재활용률이 낮고 분해도 안 된다면?"</em></li>

        <li><strong>해결 방향</strong>: 어떻게 해결할 수 있을까?<br>
        <em>"대안을 찾을까? 처리 방법을 연구할까?"</em></li>
      </ol>

      <h2>주제 선정 시 체크리스트</h2>
      <p>꼬리물기를 통해 몇 가지 주제 후보가 나왔다면, 다음 기준으로 최종 선택하세요:</p>

      <h3>실현 가능성</h3>
      <ul>
        <li>학교 실험실에서 할 수 있는가?</li>
        <li>필요한 재료를 구할 수 있는가?</li>
        <li>주어진 시간 내에 완료할 수 있는가?</li>
      </ul>

      <h3>측정 가능성</h3>
      <ul>
        <li>결과를 숫자로 측정할 수 있는가?</li>
        <li>객관적인 데이터를 얻을 수 있는가?</li>
        <li>반복 실험이 가능한가?</li>
      </ul>

      <h3>의미와 가치</h3>
      <ul>
        <li>이 연구가 왜 필요한지 설명할 수 있는가?</li>
        <li>누군가에게 도움이 되는가?</li>
        <li>기존 연구와 어떻게 다른가?</li>
      </ul>

      <h2>흔히 하는 실수</h2>

      <h3>1. 너무 거창하게 시작하기</h3>
      <p><strong>잘못된 예:</strong> "암을 치료하는 신약 개발"</p>
      <p><strong>현실적인 예:</strong> "특정 식물 추출물의 항산화 효과 측정"</p>

      <h3>2. 너무 광범위한 주제</h3>
      <p><strong>잘못된 예:</strong> "환경오염의 해결책"</p>
      <p><strong>현실적인 예:</strong> "우리 학교 급식 잔반이 퇴비로 전환되는 과정 분석"</p>

      <h3>3. 측정할 수 없는 주제</h3>
      <p><strong>잘못된 예:</strong> "행복의 의미 탐구"</p>
      <p><strong>현실적인 예:</strong> "수면 시간이 학업 집중도에 미치는 영향 (설문 기반)"</p>

      <h2>일상에서 주제 찾기 연습</h2>
      <p>오늘부터 연습해보세요. 하루에 하나씩 "왜?"를 던져보는 겁니다.</p>

      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="border: 1px solid #ddd; padding: 12px;">일상의 관찰</th>
          <th style="border: 1px solid #ddd; padding: 12px;">꼬리물기 예시</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">카페 얼음이 빨리 녹는다</td>
          <td style="border: 1px solid #ddd; padding: 12px;">얼음 모양에 따라 녹는 속도가 다를까?</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">식물이 창가 쪽으로 기울어 자란다</td>
          <td style="border: 1px solid #ddd; padding: 12px;">빛의 방향이 식물 성장에 미치는 영향은?</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">비 온 뒤 지렁이가 나온다</td>
          <td style="border: 1px solid #ddd; padding: 12px;">토양 수분과 지렁이 행동의 상관관계는?</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">할머니 댁 김치가 더 맛있다</td>
          <td style="border: 1px solid #ddd; padding: 12px;">발효 온도/시간에 따른 김치 맛 성분 변화는?</td>
        </tr>
      </table>

      <h2>마무리</h2>
      <p>좋은 연구 주제는 멀리 있지 않습니다. <strong>지금 이 순간에도 여러분 주변에는 수많은 "왜?"가 숨어 있습니다.</strong></p>
      <p>엄마의 비닐봉지, 아침에 마신 커피, 학교 가는 길에 본 가로수... 모든 것이 연구 주제가 될 수 있습니다.</p>
      <p>오늘부터 "그냥 그런가 보다" 대신 <strong>"왜 그럴까?"</strong>를 습관처럼 던져보세요. 그 질문이 꼬리에 꼬리를 물다 보면, 어느새 여러분만의 독창적인 연구 주제가 탄생해 있을 겁니다.</p>
    `,
    date: '2025-02-01',
    views: 0,
    image: null
  },
  {
    id: 'school-activity-yearly-focusing-strategy',
    title: '학교 내부 활동의 중요성: 고1부터 고3까지 학년별 포커싱 전략',
    slug: 'school-activity-yearly-focusing-strategy',
    category: '대입준비',
    excerpt: '학생부종합전형은 선생님이 쓰는 기록입니다. 고1의 다양한 탐색에서 고3의 집중까지, 학년별 활동 전략과 선생님과의 소통이 왜 핵심인지 알려드립니다.',
    content: `
      <h2>학종의 본질: 선생님이 쓰는 기록</h2>
      <p>학생부종합전형(학종)을 준비하는 학생들이 가장 먼저 이해해야 할 사실이 있습니다. <strong>학생부는 선생님이 쓰는 것</strong>이라는 점입니다.</p>
      <p>아무리 대단한 활동을 했어도, 그것이 학생부에 담기지 않으면 입학사정관은 알 수 없습니다. 그리고 학생부를 쓰는 것은 선생님입니다. 그렇기 때문에 학교 내부 활동과 선생님과의 소통은 학종 준비의 <strong>가장 핵심적인 요소</strong>입니다.</p>

      <h2>왜 학교 내부 활동이 중요한가?</h2>
      <p>외부 활동(대회 수상, 외부 R&E 등)이 아무리 화려해도, 학생부에 기록될 수 있는 것은 <strong>학교 내부에서 이루어진 활동</strong>이 중심입니다. 교육부 정책 변화로 외부 수상 실적의 기재가 제한되면서, 학교 안에서 무엇을 했는지가 더욱 중요해졌습니다.</p>
      <ul>
        <li><strong>교과 세특(세부능력 및 특기사항)</strong>: 수업 시간에 보여준 탐구 역량</li>
        <li><strong>창의적 체험활동</strong>: 동아리, 봉사, 진로 활동 기록</li>
        <li><strong>행동특성 및 종합의견</strong>: 담임선생님이 작성하는 총평</li>
      </ul>
      <p>이 모든 것이 <strong>학교 안에서</strong> 만들어지는 기록입니다.</p>

      <h2>고1: 다양한 탐색의 시기</h2>
      <p>고등학교 1학년은 <strong>탐색의 시기</strong>입니다. 이때 가장 중요한 것은 다양한 프로그램에 적극적으로 참여하는 것입니다.</p>

      <h3>왜 다양하게 해야 하는가?</h3>
      <p>고1 때 여러 분야를 경험하는 것은 단순한 방황이 아닙니다. 이것은 <strong>진로 탐색의 과정</strong>이며, 나중에 "왜 이 분야를 선택했는가"에 대한 스토리의 시작점이 됩니다.</p>
      <ul>
        <li>교내 과학탐구대회, 수학경시대회, 독서토론대회 등 <strong>다양한 대회 참가</strong></li>
        <li>여러 동아리 체험 또는 자율동아리 만들기</li>
        <li>수업 시간 발표, 보고서 작성에 적극 참여</li>
        <li>관심 분야 독서 후 독서 기록 남기기</li>
      </ul>
      <p>이 시기에는 "깊이"보다 <strong>"폭"</strong>이 중요합니다. 다양한 경험 속에서 자신이 진짜 흥미를 느끼는 분야를 발견하는 것이 목표입니다.</p>

      <h2>고2: 포커싱의 시작</h2>
      <p>고1에서 다양하게 탐색했다면, 고2에서는 <strong>방향을 좁혀야</strong> 합니다. 입학사정관이 보고 싶어하는 것은 "이 학생이 어떤 분야에 진심인가"입니다.</p>

      <h3>포커싱 전략</h3>
      <ol>
        <li><strong>관심 분야 2-3개로 축소</strong>: 고1에서 경험한 것 중 가장 흥미로웠던 분야 선택</li>
        <li><strong>심화 탐구 시작</strong>: 교과 연계 보고서, 소논문, 심화 실험</li>
        <li><strong>동아리 활동 집중</strong>: 관련 동아리에서 리더십 발휘</li>
        <li><strong>교과 세특 전략적 관리</strong>: 희망 전공과 연결되는 탐구 활동 수행</li>
      </ol>
      <p>고2의 활동은 고1의 다양한 경험에서 <strong>자연스럽게 이어지는 스토리</strong>여야 합니다. "고1 때 여러 분야를 접하다가 특히 OO에 관심이 생겨서 깊이 파고들었다"는 서사가 만들어져야 합니다.</p>

      <h2>고3: 완성과 집중</h2>
      <p>고3은 지금까지의 활동을 <strong>하나의 이야기로 완성</strong>하는 시기입니다.</p>
      <ul>
        <li><strong>핵심 분야 1-2개에 올인</strong>: 가장 자신 있는 분야에 집중</li>
        <li><strong>기존 탐구의 심화/확장</strong>: 고2에서 한 연구를 더 깊이 파고들기</li>
        <li><strong>자기소개서 연계</strong>: 활동이 자기소개서의 소재가 될 수 있도록 정리</li>
        <li><strong>면접 대비</strong>: 자신의 활동에 대해 논리적으로 설명하는 연습</li>
      </ul>

      <h2>선생님과의 소통: 학종의 숨은 핵심</h2>
      <p>여기서 가장 중요한 이야기를 하겠습니다. <strong>선생님과의 소통</strong>입니다.</p>
      <p>학생부는 선생님이 씁니다. 선생님이 여러분의 활동과 성장을 <strong>알아야</strong> 기록할 수 있습니다. 그런데 선생님은 한 반에 30명, 여러 반을 담당하십니다. 모든 학생의 활동을 자동으로 파악하기는 어렵습니다.</p>

      <h3>선생님에게 관심을 인식시키는 방법</h3>
      <blockquote style="background: #f0f7ff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
      "선생님, 저 이런 분야에 관심이 많은데요. 이번 수업 내용과 관련해서 더 알아보고 싶어요."
      </blockquote>
      <p>이 한마디가 만들어내는 변화는 큽니다. 선생님 입장에서는 학생에 대한 <strong>"관심 인식"</strong>이 생깁니다.</p>
      <ul>
        <li><strong>수업 후 질문</strong>: 수업 내용에서 궁금한 점을 찾아 질문하세요</li>
        <li><strong>탐구 계획 공유</strong>: "이런 주제로 더 알아보려고 하는데 조언 부탁드립니다"</li>
        <li><strong>중간 결과 보고</strong>: 탐구 과정에서 발견한 것을 선생님과 공유</li>
        <li><strong>피드백 반영</strong>: 선생님의 조언을 실제로 반영하고 그 결과를 보여주기</li>
      </ul>
      <p>어떤 피드백을 받든, 중요한 것은 선생님이 여러분에 대해 <strong>"이 학생은 OO에 진심이구나"</strong>라는 인식을 갖게 되는 것입니다. 이 인식이 학생부 기록에 자연스럽게 반영됩니다.</p>

      <h3>담임선생님과의 관계</h3>
      <p>담임선생님은 "행동특성 및 종합의견"을 작성합니다. 이것은 학생의 전체적인 모습을 보여주는 기록입니다.</p>
      <ul>
        <li>정기적으로 진로 상담을 요청하세요</li>
        <li>자신의 활동과 고민을 솔직하게 이야기하세요</li>
        <li>담임선생님이 여러분의 성장 과정을 <strong>직접 목격</strong>할 수 있게 하세요</li>
      </ul>

      <h2>학년별 활동 요약표</h2>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="border: 1px solid #ddd; padding: 10px;">학년</th>
          <th style="border: 1px solid #ddd; padding: 10px;">활동 방향</th>
          <th style="border: 1px solid #ddd; padding: 10px;">선생님 소통</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;"><strong>고1</strong></td>
          <td style="border: 1px solid #ddd; padding: 10px;">다양한 탐색, 폭넓은 경험</td>
          <td style="border: 1px solid #ddd; padding: 10px;">"여러 분야에 관심이 많아요"</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;"><strong>고2</strong></td>
          <td style="border: 1px solid #ddd; padding: 10px;">2-3개 분야로 포커싱, 심화 탐구</td>
          <td style="border: 1px solid #ddd; padding: 10px;">"이 분야를 더 깊이 하고 싶어요"</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;"><strong>고3</strong></td>
          <td style="border: 1px solid #ddd; padding: 10px;">핵심 1-2개 집중, 스토리 완성</td>
          <td style="border: 1px solid #ddd; padding: 10px;">"이 활동이 저를 이렇게 성장시켰어요"</td>
        </tr>
      </table>

      <h2>마무리: 활동 관리는 전략이다</h2>
      <p>학종 준비는 단순히 "많이 하는 것"이 아닙니다. <strong>고1의 다양한 탐색 → 고2의 포커싱 → 고3의 완성</strong>이라는 큰 흐름 속에서, 일관된 성장 스토리를 만들어 가는 것입니다.</p>
      <p>그리고 이 모든 과정에서 <strong>선생님과의 소통</strong>은 필수입니다. 학생부는 선생님이 쓰는 기록이니까요. 선생님이 여러분의 관심과 노력과 성장을 직접 알고 계셔야, 그 이야기가 학생부에 생생하게 담깁니다.</p>
      <p>오늘부터 시작해보세요. 다음 수업 후, 선생님께 한 가지 질문을 던져보는 것부터요.</p>
    `,
    date: '2025-02-07',
    views: 0,
    image: null
  },
  {
    id: 'bean-sprout-growth-experiment',
    title: '콩나물 성장 조건 탐구: 일상 속 실험에서 식량 전략까지',
    slug: 'bean-sprout-growth-experiment',
    category: '과학탐구',
    excerpt: '콩나물 키우기는 누구나 할 수 있는 가장 쉬운 과학 실험입니다. 빛, 온도, 수분 조건을 바꿔가며 성장을 관찰하고, 이를 식량 생산 전략으로 확장하는 탐구 과정을 소개합니다.',
    content: `
      <h2>왜 콩나물인가?</h2>
      <p>과학탐구 주제를 고민할 때 가장 어려운 것이 "실현 가능성"입니다. 비싼 장비, 특수한 재료, 복잡한 실험 절차... 이런 조건 때문에 많은 학생들이 주제 선정 단계에서 막힙니다.</p>
      <p><strong>콩나물은 이 모든 고민을 해결합니다.</strong></p>
      <ul>
        <li>재료비: 콩 한 봉지 2,000원</li>
        <li>장비: 페트병, 거즈, 물만 있으면 됨</li>
        <li>기간: 5-7일이면 충분한 데이터 수집</li>
        <li>난이도: 초등학생도 할 수 있을 만큼 쉬움</li>
      </ul>
      <p>하지만 쉽다고 해서 가치가 없는 것은 아닙니다. 중요한 것은 <strong>어떤 질문을 던지느냐</strong>입니다.</p>

      <h2>실험 설계: 변인 설정하기</h2>
      <p>콩나물 성장 실험의 핵심은 <strong>조건을 하나씩 바꿔가며</strong> 성장 차이를 관찰하는 것입니다.</p>

      <h3>실험 1: 빛의 영향</h3>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="border: 1px solid #ddd; padding: 10px;">변인</th>
          <th style="border: 1px solid #ddd; padding: 10px;">내용</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">독립변인</td>
          <td style="border: 1px solid #ddd; padding: 10px;">빛의 유무 (어둠 / 자연광 / 형광등)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">종속변인</td>
          <td style="border: 1px solid #ddd; padding: 10px;">콩나물 길이(cm), 줄기 굵기, 색깔</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">통제변인</td>
          <td style="border: 1px solid #ddd; padding: 10px;">물 주는 양, 온도, 콩 품종, 용기 크기</td>
        </tr>
      </table>
      <p><strong>예상 결과:</strong> 어두운 곳에서 자란 콩나물이 더 길지만 줄기가 가늘고 노란색, 빛을 받은 콩나물은 짧지만 굵고 초록색일 것입니다. 이것이 바로 <strong>황화현상(etiolation)</strong>입니다.</p>

      <h3>실험 2: 물 주는 빈도의 영향</h3>
      <ul>
        <li>조건 A: 하루 1회 물주기</li>
        <li>조건 B: 하루 3회 물주기</li>
        <li>조건 C: 하루 6회 물주기</li>
      </ul>
      <p>수분 공급 빈도에 따라 성장 속도와 뿌리 발달이 어떻게 달라지는지 관찰합니다.</p>

      <h3>실험 3: 온도의 영향</h3>
      <ul>
        <li>조건 A: 냉장고 안 (약 5도C)</li>
        <li>조건 B: 실온 (약 22도C)</li>
        <li>조건 C: 따뜻한 곳 (약 30도C)</li>
      </ul>
      <p>온도에 따른 발아율과 성장 속도를 비교합니다. 효소 활성 온도와 연결 지어 해석할 수 있습니다.</p>

      <h2>데이터 수집과 기록</h2>
      <p>매일 같은 시간에 다음을 측정하고 기록합니다:</p>
      <ol>
        <li><strong>길이 측정</strong>: 자로 줄기 길이를 밀리미터 단위로 측정</li>
        <li><strong>사진 촬영</strong>: 같은 각도, 같은 배경에서 촬영 (비교용)</li>
        <li><strong>색깔 관찰</strong>: 노랑, 연두, 초록 등 색 변화 기록</li>
        <li><strong>뿌리 발달</strong>: 뿌리 길이와 밀도 관찰</li>
        <li><strong>발아율</strong>: 전체 콩 중 발아한 비율 계산</li>
      </ol>
      <blockquote style="background: #f0f7ff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
      <strong>팁:</strong> 최소 10개 이상의 콩나물을 각 조건에 배치하세요. 개체 차이에 의한 오차를 줄이기 위해 평균값을 사용하는 것이 중요합니다.
      </blockquote>

      <h2>결과 분석: 그래프로 보여주기</h2>
      <p>수집한 데이터는 <strong>성장 곡선 그래프</strong>로 정리합니다.</p>
      <ul>
        <li><strong>X축</strong>: 날짜 (1일, 2일, 3일...)</li>
        <li><strong>Y축</strong>: 콩나물 평균 길이 (cm)</li>
        <li><strong>선</strong>: 각 조건별로 다른 색 또는 선 스타일</li>
      </ul>
      <p>그래프에서 조건별 성장 속도 차이가 시각적으로 드러나면, 설득력 있는 결과가 됩니다.</p>

      <h2>식량 전략으로의 확장</h2>
      <p>여기서 탐구가 끝나면 "콩나물 키우기 보고서"에 불과합니다. <strong>진짜 과학탐구</strong>는 이 결과를 더 큰 맥락으로 연결하는 데 있습니다.</p>

      <h3>도시 농업과 식량 안보</h3>
      <p>콩나물은 토양 없이, 좁은 공간에서, 짧은 기간에 재배할 수 있는 작물입니다. 이 특성은 다음과 같은 실제 문제와 연결됩니다:</p>
      <ul>
        <li><strong>도시 농업</strong>: 아파트에서도 가능한 식량 생산</li>
        <li><strong>식량 위기 대비</strong>: 재난 상황에서 빠르게 재배 가능한 작물 연구</li>
        <li><strong>우주 식량</strong>: NASA의 우주 식물 재배 연구와 연결</li>
        <li><strong>개발도상국 영양 공급</strong>: 저비용 고영양 식품으로서의 가능성</li>
      </ul>
      <p>"최적의 콩나물 성장 조건을 찾는 것"이 곧 <strong>"제한된 자원으로 최대의 식량을 생산하는 전략"</strong>이 됩니다.</p>

      <h3>논문 제목 예시</h3>
      <p>같은 실험이라도 제목에 따라 깊이가 달라집니다:</p>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #ffebee;">
          <td style="border: 1px solid #ddd; padding: 10px;"><strong>평범한 제목</strong></td>
          <td style="border: 1px solid #ddd; padding: 10px;">콩나물 성장에 영향을 미치는 요인</td>
        </tr>
        <tr style="background: #e8f5e9;">
          <td style="border: 1px solid #ddd; padding: 10px;"><strong>전략적 제목</strong></td>
          <td style="border: 1px solid #ddd; padding: 10px;">도시 환경에서의 효율적 콩나물 재배 조건 최적화: 빛, 온도, 수분 변인 분석</td>
        </tr>
      </table>

      <h2>주의사항과 실험 윤리</h2>
      <ol>
        <li><strong>반복 실험</strong>: 최소 3회 이상 반복하여 결과의 신뢰도를 확보하세요</li>
        <li><strong>대조군 설정</strong>: 반드시 아무 조작도 하지 않은 대조군을 포함하세요</li>
        <li><strong>정직한 기록</strong>: 예상과 다른 결과가 나와도 그대로 기록하세요</li>
        <li><strong>위생 관리</strong>: 곰팡이 발생에 주의하고, 오염된 시료는 제외 이유를 기록하세요</li>
      </ol>

      <h2>마무리</h2>
      <p>콩나물 실험은 <strong>과학탐구의 모든 요소</strong>를 연습할 수 있는 최고의 입문 주제입니다. 변인 설정, 데이터 수집, 그래프 분석, 결론 도출 그리고 실제 문제와의 연결까지.</p>
      <p>시작이 쉽다는 것은 약점이 아니라 <strong>강점</strong>입니다. 쉽게 시작해서 깊이 있게 파고드는 것, 그것이 진짜 과학적 사고입니다. 오늘 마트에서 콩 한 봉지를 사오는 것부터 시작해보세요.</p>
    `,
    date: '2025-02-07',
    views: 0,
    image: null
  },
  {
    id: 'village-event-statistical-analysis',
    title: '마을 속 사건의 연관성 분석: 통계적 가설 검증으로 진실 찾기',
    slug: 'village-event-statistical-analysis',
    category: '과학탐구',
    excerpt: '드라마에서 영감을 받은 과학탐구 주제입니다. 한 마을에서 벌어지는 사건들의 연관성을 통계적으로 분석하고, 가설을 세우고 검증하며 하나씩 지워가는 논리적 탐구 과정을 소개합니다.',
    content: `
      <h2>드라마에서 시작된 과학적 질문</h2>
      <p>추리 드라마를 보면 이런 장면이 나옵니다. 한 마을에서 특이한 사건들이 연달아 벌어집니다. 주민들은 "우연이겠지"라고 말하지만, 주인공은 "이건 우연이 아니야"라고 직감합니다.</p>
      <p>그런데 이 질문을 과학적으로 던져봅시다. <strong>"정말 우연이 아닌지, 어떻게 증명할 수 있을까?"</strong></p>
      <p>이것이 바로 <strong>통계적 가설 검증</strong>의 핵심 질문입니다. 그리고 이 과정은 취미처럼 조금씩, 논리적으로 사고하며 진행할 수 있는 매력적인 탐구 주제입니다.</p>

      <h2>가설 검증의 기본 구조</h2>
      <p>통계적 가설 검증은 <strong>"가정을 세우고, 데이터로 검증하며, 맞지 않는 가정을 하나씩 지워가는 과정"</strong>입니다.</p>

      <h3>귀무가설과 대립가설</h3>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="border: 1px solid #ddd; padding: 10px;">용어</th>
          <th style="border: 1px solid #ddd; padding: 10px;">의미</th>
          <th style="border: 1px solid #ddd; padding: 10px;">마을 사건 예시</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;"><strong>귀무가설 (H0)</strong></td>
          <td style="border: 1px solid #ddd; padding: 10px;">"아무 관계가 없다"는 가정</td>
          <td style="border: 1px solid #ddd; padding: 10px;">마을의 질병 발생과 공장 위치는 관련이 없다</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;"><strong>대립가설 (H1)</strong></td>
          <td style="border: 1px solid #ddd; padding: 10px;">"관계가 있다"는 주장</td>
          <td style="border: 1px solid #ddd; padding: 10px;">공장에 가까울수록 질병 발생률이 높다</td>
        </tr>
      </table>
      <p>과학에서는 "있다"를 증명하는 것이 아니라, <strong>"없다"는 가정이 틀렸음을 보이는 방식</strong>으로 접근합니다. 이것이 가설 검증의 핵심 논리입니다.</p>

      <h2>마을 사건 분석: 구체적 예시</h2>
      <p>가상의 시나리오를 만들어 봅시다.</p>
      <blockquote style="background: #f0f7ff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
      <strong>시나리오:</strong> A마을에서 최근 5년간 특정 질환 환자가 인근 마을보다 많이 발생하고 있다. 마을 주민들은 3년 전 마을 근처에 들어선 시설과 관련이 있다고 의심하고 있다.
      </blockquote>

      <h3>단계 1: 데이터 수집</h3>
      <p>객관적인 숫자를 모읍니다:</p>
      <ul>
        <li>A마을과 비교 마을(B, C)의 연도별 해당 질환 발생 건수</li>
        <li>각 마을의 인구수 (발생률 계산을 위해)</li>
        <li>시설 가동 전후의 데이터 분리</li>
        <li>환자 거주지의 시설과의 거리</li>
      </ul>

      <h3>단계 2: 기초 통계 분석</h3>
      <p>먼저 <strong>기술 통계</strong>로 전체 그림을 봅니다:</p>
      <ul>
        <li><strong>평균</strong>: A마을의 평균 발생률 vs B, C 마을의 평균 발생률</li>
        <li><strong>표준편차</strong>: 데이터가 얼마나 흩어져 있는가</li>
        <li><strong>추세</strong>: 시간에 따라 증가하고 있는가</li>
      </ul>

      <h3>단계 3: 유의성 검정</h3>
      <p>여기서 <strong>유효숫자</strong>와 <strong>통계적 유의성</strong>이 중요해집니다.</p>
      <p>"A마을의 발생률이 더 높아 보이는데, 이것이 우연일 확률은 얼마인가?"</p>
      <ul>
        <li><strong>카이제곱 검정</strong>: 마을별 발생 빈도가 기대값과 유의미하게 다른지 확인</li>
        <li><strong>t-검정</strong>: 두 마을 간 평균 발생률 차이가 통계적으로 유의한지 확인</li>
        <li><strong>p-value</strong>: 0.05보다 작으면 "우연이 아닐 가능성이 높다"고 판단</li>
      </ul>
      <blockquote style="background: #fff3e0; padding: 20px; border-left: 4px solid #ff9800; margin: 20px 0;">
      <strong>유효숫자의 중요성:</strong> 발생률이 3.2%와 3.7%라면 차이가 있는 것처럼 보이지만, 표본 수가 30명이라면 이 차이는 통계적으로 의미가 없을 수 있습니다. 숫자의 정밀도와 표본 크기를 함께 고려해야 합니다.
      </blockquote>

      <h2>가정을 세우고 지워가는 과정</h2>
      <p>이 탐구의 가장 매력적인 부분은 <strong>소거법</strong>입니다. 여러 가정(가설)을 세우고, 데이터로 하나씩 검증하며 맞지 않는 것을 지워갑니다.</p>

      <h3>가정 목록 예시</h3>
      <ol>
        <li><strong>가정 1</strong>: 시설에서 배출되는 물질이 원인이다 → 거리별 발생률 분석으로 검증</li>
        <li><strong>가정 2</strong>: 마을의 고령화가 원인이다 → 연령별 보정 후 재분석</li>
        <li><strong>가정 3</strong>: 식수원이 다르기 때문이다 → 식수원별 수질 데이터 비교</li>
        <li><strong>가정 4</strong>: 단순한 우연의 일치다 → 통계적 유의성 검정</li>
      </ol>
      <p>각 가정을 데이터로 검증하여 <strong>"이 가정은 데이터와 맞지 않으므로 기각한다"</strong>고 결론 내리는 과정이 반복됩니다. 마치 탐정이 용의자를 하나씩 제외하듯이요.</p>

      <h2>이 탐구가 특별한 이유</h2>

      <h3>1. 논리적 사고 훈련</h3>
      <p>감이 아닌 <strong>데이터</strong>로 판단하는 습관을 기릅니다. "느낌상 그런 것 같다"가 아니라, "p-value가 0.03이므로 95% 신뢰수준에서 유의하다"로 말할 수 있게 됩니다.</p>

      <h3>2. 취미처럼 조금씩 가능</h3>
      <p>이 탐구는 한 번에 끝내지 않아도 됩니다:</p>
      <ul>
        <li>1주차: 시나리오 설정, 가설 수립</li>
        <li>2주차: 데이터 수집 방법 설계</li>
        <li>3주차: 가상 데이터 생성 또는 공공 데이터 수집</li>
        <li>4주차: 기초 통계 분석</li>
        <li>5-6주차: 가설 검증, 결론 도출</li>
      </ul>

      <h3>3. 실제 사회 문제와 연결</h3>
      <p>이 방법론은 실제로 역학 조사, 환경 영향 평가, 범죄 분석 등에서 사용됩니다. 고등학생 수준에서 이런 방법론을 경험하는 것은 매우 의미 있습니다.</p>

      <h2>주의사항</h2>
      <ul>
        <li><strong>상관관계 ≠ 인과관계</strong>: 두 변수가 함께 변한다고 해서 하나가 원인이라고 단정할 수 없습니다</li>
        <li><strong>표본 크기</strong>: 너무 적은 데이터로 결론 내리지 마세요</li>
        <li><strong>교란 변수</strong>: 다른 요인이 결과에 영향을 줄 수 있음을 항상 고려하세요</li>
        <li><strong>윤리적 고려</strong>: 실제 마을이나 개인을 특정하지 않도록 주의하세요</li>
      </ul>

      <h2>마무리</h2>
      <p>통계적 가설 검증은 어렵게 느껴질 수 있지만, <strong>본질은 단순합니다</strong>. "가정을 세우고, 데이터로 확인하고, 맞지 않으면 지운다." 이 과정을 반복하는 것입니다.</p>
      <p>드라마 속 탐정처럼, 데이터라는 증거를 가지고 논리적으로 진실에 다가가는 과정. 그 자체가 과학이고, 그 과정에서 기르는 논리적 사고력은 어떤 분야에서든 빛을 발합니다.</p>
      <p>흥미로운 시나리오 하나를 설정하고, 오늘부터 조금씩 시작해보세요. 결론에 도달하는 그 순간의 쾌감은 드라마 못지않습니다.</p>
    `,
    date: '2025-02-07',
    views: 0,
    image: null
  }
];

// 관련 글 링크 생성 함수
function getRelatedPostsHTML(currentPost) {
  // 같은 카테고리 우선, 그 다음 다른 카테고리
  const sameCategory = samplePosts.filter(p => p.id !== currentPost.id && p.category === currentPost.category);
  const otherCategory = samplePosts.filter(p => p.id !== currentPost.id && p.category !== currentPost.category);
  const related = [...sameCategory, ...otherCategory].slice(0, 3);

  if (related.length === 0) return '<p><a href="/">← 전체 글 목록으로 돌아가기</a></p>';

  let html = '<ul style="list-style: none; padding: 0;">';
  related.forEach(p => {
    html += `<li style="margin-bottom: 1rem; padding: 1rem; background: var(--bg-light); border-radius: 8px;">
      <a href="/posts/${p.slug}.html" style="text-decoration: none; color: var(--text-dark);">
        <span style="display: inline-block; background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; margin-bottom: 0.3rem;">${p.category}</span><br>
        <strong>${p.title}</strong>
      </a>
    </li>`;
  });
  html += '</ul>';
  html += '<p style="margin-top: 1rem;"><a href="/">← 전체 글 목록으로 돌아가기</a></p>';
  return html;
}

// 포스트 템플릿 생성 함수
function generatePostHTML(post) {
  const imageSection = post.image
    ? `<div style="text-align: center; margin-bottom: 2rem;">
         <img src="${post.image}" alt="${post.title}" class="article-featured-image" width="1200" height="630" loading="lazy">
       </div>`
    : '';

  return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | 고등학생 과학논문 코칭</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="author" content="Youdam">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://youdam.com/posts/${post.slug}.html">

    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:url" content="https://youdam.com/posts/${post.slug}.html">
    ${post.image ? `<meta property="og:image" content="${post.image}">` : '<meta property="og:image" content="https://youdam.com/images/og-image.svg">'}
    <meta property="og:site_name" content="고등학생 과학논문 코칭">
    <meta property="og:locale" content="ko_KR">
    <meta property="article:published_time" content="${post.date}">
    <meta property="article:section" content="${post.category}">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.excerpt}">
    ${post.image ? `<meta name="twitter:image" content="${post.image}">` : '<meta name="twitter:image" content="https://youdam.com/images/og-image.svg">'}

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#2563eb">

    <!-- Google AdSense -->
    <meta name="google-adsense-account" content="ca-pub-3718064189631211">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3718064189631211" crossorigin="anonymous"></script>

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KTLD09Z6DB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KTLD09Z6DB');
    </script>

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${post.title}",
      "description": "${post.excerpt}",
      "datePublished": "${post.date}",
      "dateModified": "${post.date}",
      "author": {
        "@type": "Person",
        "name": "Youdam",
        "url": "https://youdam.com/about.html"
      },
      "publisher": {
        "@type": "Organization",
        "name": "고등학생 과학논문 코칭",
        "logo": {
          "@type": "ImageObject",
          "url": "https://youdam.com/images/logo.svg",
          "width": 600,
          "height": 315
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://youdam.com/posts/${post.slug}.html"
      },
      "articleSection": "${post.category}",
      "inLanguage": "ko-KR",
      "keywords": ["${post.category}", "과학논문", "고등학생", "R&E", "논문작성"]
    }
    </script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #2563eb;
            --secondary-color: #0ea5e9;
            --accent-color: #10b981;
            --text-dark: #1f2937;
            --text-medium: #4b5563;
            --text-light: #6b7280;
            --bg-light: #f8fafc;
            --bg-white: #ffffff;
            --border-light: #e5e7eb;
            --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.8;
            color: var(--text-dark);
            background-color: var(--bg-light);
            font-size: 16px;
        }

        .header {
            background: var(--bg-white);
            box-shadow: var(--shadow-sm);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid var(--border-light);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
        }

        .logo-text {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 700;
            color: var(--text-dark);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 1.5rem;
            align-items: center;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--text-medium);
            font-weight: 500;
            transition: color 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.95rem;
        }

        .nav-menu a:hover {
            color: var(--primary-color);
            background: var(--bg-light);
        }

        .main-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 3rem 2rem;
        }

        .breadcrumb {
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
            color: var(--text-light);
        }

        .breadcrumb a {
            color: var(--primary-color);
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-view {
            background: var(--bg-white);
            border-radius: 16px;
            padding: 3rem;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-light);
        }

        .article-header {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border-light);
        }

        .article-category {
            display: inline-block;
            background: var(--primary-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }

        .article-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 1rem;
            line-height: 1.3;
        }

        .article-meta {
            display: flex;
            gap: 1.5rem;
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .article-meta i {
            margin-right: 0.4rem;
        }

        .article-featured-image {
            width: 100%;
            max-height: 450px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: var(--shadow-md);
        }

        .article-body {
            font-size: 1.1rem;
            line-height: 1.9;
            color: var(--text-dark);
        }

        .article-body h2 {
            margin: 2.5rem 0 1rem;
            color: var(--text-dark);
            font-size: 1.6rem;
            font-weight: 600;
            border-left: 4px solid var(--primary-color);
            padding-left: 1rem;
        }

        .article-body h3 {
            margin: 2rem 0 0.8rem;
            color: var(--text-dark);
            font-size: 1.3rem;
            font-weight: 600;
        }

        .article-body p {
            margin-bottom: 1.5rem;
        }

        .article-body ul, .article-body ol {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
        }

        .article-body li {
            margin-bottom: 0.7rem;
        }

        .article-body blockquote {
            border-left: 4px solid var(--primary-color);
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
            background: var(--bg-light);
            border-radius: 0 8px 8px 0;
            font-style: italic;
        }

        .article-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
        }

        .article-body th, .article-body td {
            border: 1px solid var(--border-light);
            padding: 0.75rem;
            text-align: left;
        }

        .article-body th {
            background: var(--bg-light);
            font-weight: 600;
        }

        .ad-container {
            margin: 2.5rem 0;
            padding: 1.5rem;
            background: var(--bg-light);
            border-radius: 8px;
            text-align: center;
        }

        .related-posts {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border-light);
        }

        .related-posts h3 {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }

        .footer {
            background: var(--text-dark);
            color: white;
            text-align: center;
            padding: 3rem 2rem;
            margin-top: 3rem;
        }

        .footer-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .footer h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }

        .footer p {
            opacity: 0.8;
            margin-bottom: 1.5rem;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1.5rem;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
        }

        .footer-links a:hover {
            opacity: 1;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 1.5rem;
            opacity: 0.6;
            font-size: 0.85rem;
        }

        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }

            .article-title {
                font-size: 1.7rem;
            }

            .article-view {
                padding: 2rem 1.5rem;
            }

            .main-content {
                padding: 2rem 1rem;
            }

            .article-meta {
                flex-direction: column;
                gap: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <a href="/" class="logo">
                <div class="logo-icon">
                    <i class="fas fa-pen-fancy"></i>
                </div>
                <span class="logo-text">과학논문 코칭</span>
            </a>

            <ul class="nav-menu">
                <li><a href="/">홈</a></li>
                <li><a href="/about.html">소개</a></li>
                <li><a href="/contact.html">문의</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <nav class="breadcrumb">
            <a href="/">홈</a> &gt; <a href="/?category=${encodeURIComponent(post.category)}">${post.category}</a> &gt; ${post.title}
        </nav>

        <article class="article-view" itemscope itemtype="https://schema.org/BlogPosting">
            <header class="article-header">
                <span class="article-category">${post.category}</span>
                <h1 class="article-title" itemprop="headline">${post.title}</h1>
                <div class="article-meta">
                    <span><i class="fas fa-user"></i> <span itemprop="author">Youdam</span></span>
                    <span><i class="fas fa-calendar"></i> <time datetime="${post.date}" itemprop="datePublished">${new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                    <span><i class="fas fa-folder"></i> <span itemprop="articleSection">${post.category}</span></span>
                </div>
            </header>

            ${imageSection}

            <div class="article-body" itemprop="articleBody">
                ${post.content}
            </div>

            <!-- AdSense Ad Slot -->
            <div class="ad-container">
                <ins class="adsbygoogle"
                     style="display:block; text-align:center;"
                     data-ad-client="ca-pub-3718064189631211"
                     data-ad-slot="1234567890"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>

            <meta itemprop="dateModified" content="${post.date}">
        </article>

        <section class="related-posts">
            <h3>관련 글 추천</h3>
            ${getRelatedPostsHTML(post)}
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <h3>고등학생 과학논문 코칭</h3>
            <p>10년 경력 대학 강사의 체계적인 논문 작성 가이드</p>
            <div class="footer-links">
                <a href="/about.html">소개</a>
                <a href="/contact.html">문의</a>
                <a href="/privacy-policy.html">개인정보처리방침</a>
                <a href="/terms-of-service.html">이용약관</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 고등학생 과학논문 코칭. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
}

// 포스트 생성
console.log('📝 포스트 페이지 생성 중...');
samplePosts.forEach(post => {
  const html = generatePostHTML(post);
  const filepath = path.join(postsDir, `${post.slug}.html`);
  fs.writeFileSync(filepath, html, 'utf8');
  console.log(`✅ 생성 완료: /posts/${post.slug}.html`);
});

console.log('');
console.log('✨ 정적 페이지 생성 완료!');
console.log(`📊 총 ${samplePosts.length}개의 포스트 생성됨`);
console.log('');
console.log('📌 다음 단계:');
console.log('  1. npm run build - 사이트맵 생성');
console.log('  2. npm run deploy - Firebase 배포');
console.log('');
