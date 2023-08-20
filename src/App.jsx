import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
        snr:"##FE6C08"
      },
    },
  });
  return (
    <div style={{backgroundColor:"#E1E1E1"}}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
        </PersistGate>
         
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
