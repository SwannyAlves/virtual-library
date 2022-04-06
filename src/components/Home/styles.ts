import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: var(--dark);
    height: 100vh;
    padding: 5%;
    display: flex;
    align-items: center;
`;

export const HomeContent = styled.div`
  background-color: #582be7;
  border-radius: 20px;
  display: flex;
  max-height: 500px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

 @media (max-width: 720px) { 
    padding: 20px; 
    flex-direction: column-reverse;
  
  }
`
export const HomeImg = styled.img`
  width: 50%;
  border-radius: 20px;
`

export const HomeTitle = styled.h1`
  color: #F2F2F2;
  font-size: 50px;
  @media (max-width: 720px) { 
    font-size: 40px;
  }
  margin-bottom: 20px;
`

export const HomePhrase = styled.h2`
  color: var(--light-purple);
  font-size: 1rem;
  font-weight: lighter;
  width: 70%;
  opacity: 0.8;
  @media (max-width: 720px) { 
    width: 90%;
  }
`

export const HomeAuthor = styled.h3`
  color: var(--light-purple);
  font-size: 0.7rem;
  font-weight: lighter;
  opacity: 0.6;
  margin-bottom: 20px; 
`

export const HomeSearch = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  @media (max-width: 720px) { 
    padding: 0;
  }
`

export const HomeImgCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: center;
    flex-wrap: wrap;

    @media (max-width: 720px) { 
    align-items: center;
  }
`