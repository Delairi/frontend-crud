import { createSlice } from '@reduxjs/toolkit'

const initialState: User[] = []

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        set: (state, action) => {
            state = action.payload
            return state
        },
        add: (state, action) => {
            state = [...state, action.payload]
            return state
        },
        update: (state, action) => {
           const up = state.map((user) => {
            if(user.id === action.payload.id){
                return action.payload
            }
            return user
           })
           return up
        },
        del: (state, action) => {
            const filter = state.filter((user) => user.id !== action.payload)
            return filter
        },
    },
})

export const { set,add,update,del } = formSlice.actions

export default formSlice.reducer