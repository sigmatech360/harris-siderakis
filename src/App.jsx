import { useEffect } from "react";
import AppRouter from "./Router/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import "./assets/style/common.css"
import "./assets/style/forms.css"
import { Toaster } from "react-hot-toast";
import { useDispatch } from "./store";
import { initializeUser } from "./store/slices/user";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);
  

  return (
    <>
    <NotificationProvider>
    <Toaster position={'top-right'} />
      <AppRouter />

    </NotificationProvider>
    </>
  );
}

export default App;
