import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
}

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:disabled:hover {
    background-color: #ccc;
    filter: none;
  }

  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return css`
          background-color: #e0e0e0;
          color: #333333;

          &:hover:not(:disabled) {
            background-color: #d5d5d5;
          }

          &:active:not(:disabled) {
            background-color: #bdbdbd;
          }
        `;
      case "danger":
        return css`
          background-color: #d9534f;
          color: white;

          &:hover:not(:disabled) {
            background-color: #c9302c;
          }

          &:active:not(:disabled) {
            background-color: #a71d2a;
          }
        `;
      default:
        return css`
          background-color: #0b615e;
          color: white;

          &:hover:not(:disabled) {
            background-color: #137f7b;
          }

          &:active:not(:disabled) {
            background-color: #06423f;
          }
        `;
    }
  }}
`;
