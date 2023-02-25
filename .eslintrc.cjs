module.exports = {
  root: true, // ESLint 설정 파일이 있는 디렉토리의 최상위 디렉토리가 프로젝트 루트임을 지정합니다.
  parserOptions: {
    // 파서의 옵션을 설정합니다.
    tsconfigRootDir: __dirname, // tsconfig.json 파일이 위치한 폴더를 tsconfigRootDir로 지정
    project: './tsconfig.eslint.json', // TypeScript 프로젝트의 tsconfig 파일이 있는 위치
  },
  extends: [
    // 다른 ESLint 설정을 확장(상속)하도록 지정합니다.
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    // ESLint 플러그인을 로드합니다.
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser', // 어떤 파서(parser)를 사용할지 지정합니다. 여기서는 TypeScript를 사용하므로 @typescript-eslint/parser를 사용합니다.
  rules: {
    // 사용자 정의 규칙을 설정합니다.
    'no-console': 'off', // console.log와 같은 디버깅 용도의 console 사용을 허용합니다.
    'no-unused-vars': 'off', // 사용하지 않는 변수를 허용합니다.
    'import/extensions': 'off', // TypeScript의 모듈 시스템은 자동으로 파일의 확장자를 인식하기 때문에, 이 규칙을 끄는 것이 좋습니다.
    '@typescript-eslint/no-unused-vars': [
      'error', // 사용하지 않는 TypeScript 변수를 에러로 처리합니다.
      { argsIgnorePattern: '^next$' }, // 무시할 매개변수의 이름을 정규식 패턴으로 작성하면 됩니다.
    ],
    'import/prefer-default-export': 'off', // export default 대신 export를 사용할 수 있습니다.
    'prettier/prettier': [
      // Prettier 코드 포맷터를 적용하여 코드를 더 읽기 쉽게 만듭니다.
      'error', // 해당 rule은 Prettier가 적용하지 않은 코드를 찾아서 Linting 에러를 발생시키는 역할을 합니다.
      {
        endOfLine: 'auto', // 'auto' : 코드의 끝을 의미하는 개행 문자('\n', '\r\n')의 형식을 자동으로 설정합니다. // 이렇게 설정하면 프로젝트에 따라 다른 OS를 사용하더라도 개행 문자의 형식이 일관되게 유지됩니다.
      },
    ],
  },
  env: {
    node: true, // 사용하고 있는 환경을 설정합니다. 여기서는 Node.js 환경을 사용하므로 node: true로 설정합니다.
  },
  ignorePatterns: ['build/**/*'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
