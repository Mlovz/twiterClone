import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"); */

/* @font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-ExtraLight.ttf');
  font-style:normal
}
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-Light.ttf');
  font-style:normal
}
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-Regular.ttf');
  font-weight: 400;
  font-style:normal
}
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-Medium.ttf');
   font-weight: 500;
  font-style:normal
}
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-SemiBold.ttf');
   font-weight: 600;
  font-style:normal
}
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-Bold.ttf');
   font-weight: 700;
  font-style:normal
}
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-ExtraBold.ttf');
   font-weight: 800;
  font-style:normal;
}
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url('../fonts/Nunito-Black.ttf');
  font-weight: 900;
  font-style:normal
} */
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--secondary);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--primary);
  }
  body{
    font-family: 'Nunito', sans-serif;
  }
  a{
    text-decoration: none;
  }
  :root {
    --primary: #fff;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #dbdbdb;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --gray_light: #f7f9f9;
    --gray_dark: #eff3f4;
  }
`;
