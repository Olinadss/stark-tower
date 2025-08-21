import { Outlet, Navigate } from "react-router";
import { Header } from "../../../components/Header";
import styled from "styled-components";
import { getCurrentUser } from "../../../utils/login";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

export function AppLayout() {
  const user = getCurrentUser();
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
