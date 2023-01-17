import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #120b81;

`
export const Form = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111362;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;

h1 {
  color: white;
  font-size: 20px;
  font-weight: lighter;
}

p {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

a {
  color: white;
  font-size: 14px;
  font-weight: bold;
}
`

