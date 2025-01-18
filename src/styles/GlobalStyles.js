import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  /* 移动设备 */
  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
  }

  /* 平板设备 */
  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      padding: 0 30px;
    }
  }

  /* 桌面设备 */
  @media (min-width: 1025px) {
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyles; 