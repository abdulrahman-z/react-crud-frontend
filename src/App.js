import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserProvider from "./provider/UserProvider";
import ThemeConfig from "./themes";

const PageWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  background-color: #f7f8fc;
  height: 100%;
`;

function App() {
  return (
    <ThemeConfig>
      <PageWrapper>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </PageWrapper>
    </ThemeConfig>
  );
}

export default App;
