import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        getUsers: (state, action) => {
            state = action.payload;
            return state;
        },
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

const { reducer, actions } = user;
export const { addUser, getUsers } = actions;
export default reducer;