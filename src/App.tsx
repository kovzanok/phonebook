import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage";
import Layout from "./components/Layout";
import ClientPage from "./pages/ClientPage";
import EditClientPage from "./pages/EditClientPage";
import NewClientPage from "./pages/NewClientPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";
import { useAppDispatch } from "./store/store";
import { authSelector, verifyAuth } from "./store/authSlice";
import { useSelector } from "react-redux";
import { isAxiosError } from "axios";

function App() {
  const auth = useSelector(authSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      dispatch(verifyAuth());
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.message);
      }
    }
  }, [dispatch]);
  if (auth.isLoading === "loading") return <LoadingOverlay visible />;
  return (
    <>
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
    </>
  );
}

export default App;
