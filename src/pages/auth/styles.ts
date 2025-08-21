import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #d0ebed;
`;

export const LoginCard = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  width: 350px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  color: #0b615e;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0b615e;
    box-shadow: 0 0 0 2px rgba(11, 97, 94, 0.2);
  }
`;
