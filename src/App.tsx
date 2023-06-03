import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage";
import Layout from "./components/Layout";
import ClientPage from './pages/ClientPage';
import EditClientPage from './pages/EditClientPage';
import NewClientPage from './pages/NewClientPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <>
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Main></Main>}></Route>
            <Route path="/:id" element={<ClientPage></ClientPage>}></Route>
            <Route path="/:id/edit" element={<EditClientPage></EditClientPage>}></Route>
            <Route path="/new" element={<NewClientPage></NewClientPage>}></Route>
          </Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
