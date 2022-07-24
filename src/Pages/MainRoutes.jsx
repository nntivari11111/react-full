import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../components/ReqAuth";
import Sidebar from "../components/Sidebar";
import HomePage from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/"element={
            <ReqAuth>
              <Stack direction="row">
                <Sidebar />
                <HomePage/>
              </Stack>
            </ReqAuth>
            }/>
            <Route path="/login"  element={<Login/>}/>
            <Route path="/signup"element={<Signup/>}/>
        </Routes>
    )
};
export default MainRoutes;