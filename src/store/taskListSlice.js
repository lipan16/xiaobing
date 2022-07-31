import {createSlice} from '@reduxjs/toolkit'

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        currentListType: {}
    },
    reducers: {
        currentListTypeChanged: (state, action) => {
            state.currentListType = action.payload
        }
    }
})
export const {currentListTypeChanged} = taskListSlice.actions

export default taskListSlice.reducer
