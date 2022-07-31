import {createSlice} from '@reduxjs/toolkit'

export const bpiTime = createSlice({
    name: 'bpiTime',
    initialState: {
        timeType: true,
    },
    reducers: {
        changeTimeType: (state, action) => {
            state.timeType = action.payload
        }
    }
})
export const {changeTimeType} = bpiTime.actions

export default bpiTime.reducer
