import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background-color: #0b615e;
  color: white;
  width: 100%;
  min-width: 960px;
  font-weight: bold;
  padding: 0.75rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;

  &:nth-child(even) {
    background-color: #d0ebed;
  }
`;

export const TableWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;
