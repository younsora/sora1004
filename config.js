/*
 * 제휴상품 마진 관리 — 설정 파일
 *
 * ▣ firebase 를 null 로 두면: 각자의 브라우저에만 저장됩니다. (혼자 쓰거나 시험할 때)
 * ▣ firebase 에 값을 넣으면: 회사 Google 계정으로 로그인한 팀원 모두가 같은 데이터를 봅니다.
 *    값은 Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → "SDK 설정 및 구성"에서 복사합니다. (README 4단계)
 *
 * 이 값(apiKey 등)은 웹페이지에 공개되어도 괜찮은 값입니다.
 * 실제 보안은 firestore.rules 의 회사 도메인 제한이 담당하므로, 그 파일을 꼭 함께 적용하세요.
 */
window.APP_CONFIG = {
  firebase: null,
  // firebase: {
  //   apiKey: "여기에-붙여넣기",
  //   authDomain: "프로젝트ID.firebaseapp.com",
  //   projectId: "프로젝트ID",
  //   appId: "여기에-붙여넣기"
  // },

  // 로그인을 허용할 회사 이메일 도메인 (@ 뒤 부분). 예: "mycompany.co.kr"
  allowedDomain: "example.co.kr"
};
