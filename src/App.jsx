import { GlobalStyle } from "components/styles/GlobalStyle";
import Router from "shared/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer newestOnTop position="top-right" autoClose={3000} />
      <Router />
    </>
  );
}

export default App;
