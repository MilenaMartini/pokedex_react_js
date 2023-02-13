import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: white
`

export const Form = styled.div`
display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: beige;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px

h1 {
  color: #2c2c2c;
  font-size: 29px;
  font-weight: bold;
}

a {
  color: #2c2c2c;
  font-size: 15px;
  font-weight: bold;
}

p {
  color: gray;
  font-size: 15px;
  font-weight: bold;
}

`
