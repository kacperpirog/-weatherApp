import styled from "styled-components";

export const StyledFormWeather = styled.div`
  left: 50%;
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  form {
  }
  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #000;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    :focus,
    :valid {
      top: -20px;
      left: 0;
      color: #03e9f4;
      font-size: 12px;
    }
  }

  button {
    border: 0;
    outline: none;
    border-radius: 0;
    padding: 5px;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: #1ab188;
    color: #fff;
    transition: all.5s ease;
    -webkit-appearance: none;
    &:hover,
    &:focus {
      background: #fff;
      color: #1ab188;
    }
  }

  button-block {
    display: block;
    width: 100%;
  }
`;
