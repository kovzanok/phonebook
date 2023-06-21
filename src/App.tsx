import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage";
import Layout from "./components/Layout";
import ClientPage from "./pages/ClientPage";
import EditClientPage from "./pages/EditClientPage";
import NewClientPage from "./pages/NewClientPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useState, useEffect } from "react";
import { AuthContext, LoginContext } from "./context";
import { LoadingOverlay } from "@mantine/core";
import { useAppDispatch } from "./store/store";
import { authSelector, verifyAuth } from "./store/authSlice";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector(authSelector);

  const dispatch = useAppDispatch();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  useEffect(() => {
    try {
      dispatch(verifyAuth());
    } catch {}
  }, []);
  if (auth.isLoading === "loading") return <LoadingOverlay visible />;
  return (
    <>
      <LoginContext.Provider value={[login, setLogin]}>
        <AuthContext.Provider value={[isAuth, setIsAuth]}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Main></Main>}></Route>
                <Route path='/:id' element={<ClientPage></ClientPage>}></Route>
                <Route
                  path='/:id/edit'
                  element={<EditClientPage></EditClientPage>}
                ></Route>
                <Route
                  path='/new'
                  element={<NewClientPage></NewClientPage>}
                ></Route>
              </Route>
              <Route path='/login' element={<LoginPage></LoginPage>}></Route>
              <Route
                path='/register'
                element={<RegisterPage></RegisterPage>}
              ></Route>
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
