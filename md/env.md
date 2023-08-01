# 초기 환경세팅

- Install Next.js-

```
npx create-next-app
```

- Install Tailwind CSS (css 세팅)

```
npm install -D tailwindcss
npx tailwindcss init
```

```
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
```

- `애니메이션 이미지` - library 설치 https://github.com/mifi/react-lottie-player

```
npm install --save react-lottie-player
```

- `다크모드 테마` - library 설치 https://github.com/pacocoursey/next-themes

```
$ npm install next-themes
# or
$ yarn add next-themes
```

- Install env

```js
npm i dotenv

//  config file : .env 에서 데이터 연결
export const NOTION_TOKEN = process.env.NOTION_TOKEN;
```
