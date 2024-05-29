import styled from 'styled-components'
const Headers = () => {
    return (
        <Header>
        <img src="/logos_firebase.png" alt="" />
        <h1>Firebase Contact App</h1>
      </Header>
    );
};

export default Headers;

const Header = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  width: 361px;
  height: 60px;
  border-radius: 10px;
  background-color: white;
  color: black;

  img {
    width: 21.88px;
    height: 30px;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;