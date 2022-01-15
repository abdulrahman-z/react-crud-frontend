import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardContents from "./components/DashboardContents";
import UsersList from "./components/UsersList";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/dashboardcontents" element={<DashboardContents />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PageWrapper>
    </ThemeConfig>
  );
}

export default App;
