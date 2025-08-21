import styled from "styled-components";

export const Card = styled.section`
  margin-top: 2rem;
  background-color: #ecf4fe;
  border-radius: 16px;
  padding: 2rem;
  width: 920px;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #0b615e;
  margin: 0;
`;

export const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ActiveCount = styled.div`
  background-color: #137f7b;
  color: white;
  font-weight: bold;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
`;

export const CardForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
