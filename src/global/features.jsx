import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
   
};

const features = createSlice({
    name: "crestdashboard",
    initialState,
    reducers: {
        userData: (state, {payload}) => {
            state.user = payload;
            console.log("User Data:", payload);
        },
        
        loginToken: (state, {payload}) => {
            state.userToken = payload;
            console.log("User Token:", payload);
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
            state.isLoggedIn = false
        },
       
    },
});

export const {userData, logout, loginToken} =
    features.actions;

export default features.reducer;
