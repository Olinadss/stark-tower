import { RouterProvider } from "react-router";
import { router } from "./routes";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
