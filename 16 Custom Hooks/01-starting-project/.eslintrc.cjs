module.exports = {
  root: true, // 이 설정 파일이 최상위임을 명시
  env: { browser: true, es2020: true }, // 브라우저 환경 변수(window, document 등) 인식
  extends: [
    "eslint:recommended", // 1. 자바스크립트 기본 룰 (오타, 변수 선언 등 감지)
    "plugin:react/recommended", // 2. 리액트 기본 룰
    "plugin:react/jsx-runtime", // 3. React 17+ (import React 생략 가능) 지원
    "plugin:react-hooks/recommended", // 4. useEffect 등 훅 사용 규칙 강제
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // 빌드된 파일과 설정 파일은 검사 제외
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } }, // 리액트 버전 명시 (경고 방지)
  plugins: ["react-refresh"],
  rules: {
    // [핵심] 정의되지 않은 변수 사용 시 에러 (빨간 줄) 표시
    "no-undef": "error",

    // [편의] 사용하지 않는 변수는 경고 (노란 줄) 표시
    "no-unused-vars": "warn",

    // [편의] 리액트 컴포넌트 파일이 .jsx 가 아니어도 허용 (선택 사항)
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],

    // [추천] prop-types 검사 끄기
    "react/prop-types": "off",

    // Vite 관련 기본 룰
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
