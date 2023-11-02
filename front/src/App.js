import Home from './components/Home';
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import LoginPage from './components/login/LoginPage';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import Button from './components/Button';
import Registration from "./components/registration/Registration";
import React, {useState} from "react";

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
            <Route path="/" element={<Home />} />
            <Route path="/btn" element={<Button props="matvey" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Typography>Not found</Typography>} />
          </Routes>
            </UserContext.Provider>
        </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
