import styled from "styled-components";

export const ContentBanner = styled.section`
  margin-top: 2rem;
  background-color: #ecf4fe;
  padding: 2rem;
  border-radius: 16px;
  width: 920px;
  height: 183px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const ButtonCustom = styled.button`
  background-color: #0b615e;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #137f7b;
  }

  &:active {
    background-color: #06423f;
  }
`;

export const VisitorsList = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 16px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background-color: #ecf4fe;
  width: 920px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #0b615e;
  color: white;
  font-weight: bold;
  padding: 0.75rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;

  &:nth-child(even) {
    background-color: #d0ebed;
  }
`;
