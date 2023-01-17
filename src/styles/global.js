import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;//fica de olho : ou > possivel erro?
  font-family: poppins

}
`
export default GlobalStyle;

//  box-sizing: border-box; serve para não ter que se preocupa com height e widht, independente do padding ou margin.


