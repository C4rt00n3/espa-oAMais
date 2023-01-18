import styled from "styled-components";

interface iStyledPhotos {
  loading?: string;
}

export const StyledListPhotos = styled.div<iStyledPhotos>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ul {
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;

    margin-bottom: 50px;

    li {
      width: 30%;
      min-height: 220px;

      margin-bottom: 5%;

      background-image: url(${({ loading }) => loading});
      background-repeat: no-repeat;

      p {
        font-weight: 600;
        margin-top: -20px;

        color: var(--Withe);
      }
    }
    h2 {
      font-size: var(--Font24);
      font-weight: 600;
    }
    @media (min-width: 700px) {
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        min-width: 30%;
        max-width: 30%;
      }
    }

    @media (min-width: 1100px) {
      width: 100%;
      flex-wrap: wrap;

      li {
        max-height: 30%;
        max-width: 30%;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  .boxLoading {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 40px;
      height: 40px;

      color: var(--Black);

      margin-top: -60px;
    }
    .loading {
      animation: gira 1s infinite linear;
    }
    @keyframes gira {
      0% {
        transform: rotate(0deg);
        opacity: 20%;
      }
      25% {
        transform: rotate(90deg);
        opacity: 40%;
      }
      50% {
        transform: rotate(180deg);
        opacity: 60%;
      }
      75% {
        transform: rotate(270deg);
        opacity: 80%;
      }
      100% {
        opacity: 100%;
        transform: rotate(360deg);
      }
    }
  }
`;
