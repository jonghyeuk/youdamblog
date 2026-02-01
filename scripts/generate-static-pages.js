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
  }
];

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
            <h3>다른 글 보기</h3>
            <p><a href="/">← 전체 글 목록으로 돌아가기</a></p>
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
