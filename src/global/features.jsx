import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
    id: ""
   
};

const features = createSlice({
    name: "crestdashboard",
    initialState,
    reducers: {
        userData: (state, {payload}) => {
            state.user = payload;
            console.log("User Data:", payload);
        },
        userId: (state, {payload}) => {
            state.id = payload;
            console.log("User id:", payload);
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

export const {userData, userId, logout, loginToken} =
    features.actions;

export default features.reducer;
