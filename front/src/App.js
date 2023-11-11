import Header from './components/Header';
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import React, {useState} from "react";
import AuthPage from "./components/workspace/AuthPage";

export const UserContext = React.createContext();


const App = () => {

  const theme = createTheme({

  })

  const [user, setUser] = useState({
    token: "",
    username: "",
    isAuthenticated: false,
  })


  return (
    <ThemeProvider theme={theme}>

        <BrowserRouter>
          <UserContext.Provider value={{user,setUser}}>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/login" element={<AuthPage isExist={true} />} />
            <Route path="/registration" element={<AuthPage isExist={false} />} />
            <Route path="*" element={<Typography>Not found</Typography>} />
          </Routes>
            </UserContext.Provider>
        </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
