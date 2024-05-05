// import {createSlice} from "@reduxjs/toolkit"
// // const userSlice=createSlice({
// //     name:"user",
// //     initialState:{
// //         authuser:null,
// //     },
// //     reducers:{
// //         setAuthUser:(state,action)=>{
// //             state.authuser=action.payload;
// //         }
// //     }
// // })

// // export const {setAuthUser}=userSlice.actions;
// // export default userSlice.reducer;
// const userSlice = createSlice({
//     name:"user",
//     initialState:{
//         authUser: null,
//     },
//     reducers: {
//         setAuthUser: (state, action) => {
//            state.authUser=action.payload;
//         }
//     }
// });

// export const { setAuthUser } = userSlice.actions;
// export default userSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUsers:null,
        selectedUser:null,
        onlineUsers:null,
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser = action.payload;
        },
        setOtherUsers:(state, action)=>{
            state.otherUsers = action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload;
        },
        setOnlineUsers:(state,action)=>{
            state.onlineUsers = action.payload;
        }
    }
});
export const {setAuthUser,setOtherUsers,setSelectedUser,setOnlineUsers} = userSlice.actions;
export default userSlice.reducer;