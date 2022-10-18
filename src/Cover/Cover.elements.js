import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.white}; //hsl(0, 0%, 100%);
  /* box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px; */
  /* box-shadow: 0px 8px 24px 0 rgba(0, 0, 0, 0.1); */
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.dark_blue_more};
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.white};
  }
  h1 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.7rem;
    font-weight: 300;
  }
  .icono {
    color: ${({ theme }) => theme.dark_blue_more};
  }
  .dark-container {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
  }
  .dark-container:hover {
    & button {
      background-color: ${({ theme }) =>
        theme.dark_blue_more}; // hsl(200, 15%, 8%);
      border-radius: 50%;
      cursor: pointer;

      & .icono {
        color: ${({ theme }) => theme.white};
      }
    }
  }
  button {
    padding: 3px 4px;
    border: none;
    background: ${({ theme }) => theme.white};
    transition: 0.6s;
    cursor: pointer;
  }
  button:hover {
    background-color: ${({ theme }) =>
      theme.dark_blue_more}; // hsl(200, 15%, 8%);
    border-radius: 50%;
    cursor: pointer;
    & .icono {
      color: ${({ theme }) => theme.white};
    }
  }

  /*  Media Querys  */
  @media (min-width: 765px) {
    nav {
      justify-content: space-between;
      margin: 0 7rem;
    }
    h1 {
      font-size: 30px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;
export const Main = styled.main`
  /* padding: 50px 8vw 0 8vw; */

  /* box-shadow: 0 -2px 1px gray; */
  background-color: ${({ theme }) => theme.background};
`;

export const In = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 45px 0 30px;
  input {
    width: 85%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  input:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  input::placeholder {
    color: ${({ theme }) => theme.dark_blue};
  }
  select {
    width: 45%;
    padding: 10px;
    align-self: flex-start;
    margin-left: 7.5%;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.dark_blue};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  select:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  /*  Media Querys  */
  @media (min-width: 765px) {
    flex-direction: row;
    justify-content: space-around;
    input {
      width: 40%;
    }
    select {
      width: 20%;
    }
  }
`;

export const Container = styled.div`
  @media (min-width: 768px) {
    padding: 0 9rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }
`;

export const Car = styled.article`
  width: 270px;
  min-width: 270px;
  /* border: 0.2px solid black; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 7px;
  margin: 3rem auto;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark_blue};
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
  .Container {
    padding: 1rem;
  }
  .flex {
    display: flex;
    gap: 1rem;
  }
  img {
    width: 270px;
    height: 180px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  h2 {
    margin: 1rem 0;
    font-size: 19px;
    font-weight: 700;
  }
  h3 {
    font-size: 14px;
    font-weight: 700;
  }
  h4 {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Detail = styled.section`
  padding: 45px 0 30px;
  button {
    padding: 10px 45px;
    margin: 3% 10%;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    color: ${({ theme }) => theme.dark_blue};
    &:hover {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      cursor: pointer;
    }
  }
  article {
    padding: 45px 0 30px;
    text-align: center;
    color: ${({ theme }) => theme.dark_blue};

    img {
      width: 70%;
      max-width: 500px;
    }
    h2 {
      margin: 1rem 0;
      font-size: 24px;
      font-weight: 700;
    }
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    h4 {
      font-size: 16px;
      font-weight: 400;
    }
    .flex {
      display: flex;
      gap: 1rem;
      margin: 3% 0;
    }
    .detail-container {
      padding: 10px 15% 30px;
      text-align: left;
    }
    .more-detail {
      margin-top: 0;
      padding: 10px 15% 30px;
      text-align: left;
    }
    .border-countries {
      margin-top: 9%;
      .border-countries-button {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      button {
        padding: 2px 1rem;
      }
    }
  }
`;
