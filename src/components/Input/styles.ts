import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  transition: border 0.2s;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "red" : "#0b615e")};
    box-shadow: 0 0 0 2px
      ${({ hasError }) =>
        hasError ? "rgba(255, 0, 0, 0.2)" : "rgba(11, 97, 94, 0.2)"};
  }
`;
