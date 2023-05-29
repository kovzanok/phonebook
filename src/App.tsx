import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage";
import Layout from "./components/Layout";
import ClientPage from './pages/ClientPage';
import EditClientPage from './pages/EditClientPage';
import NewClientPage from './pages/NewClientPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Main></Main>}></Route>
            <Route path="/:id" element={<ClientPage></ClientPage>}></Route>
            <Route path="/:id/edit" element={<EditClientPage></EditClientPage>}></Route>
            <Route path="/new" element={<NewClientPage></NewClientPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
