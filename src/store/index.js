import {configureStore} from '@reduxjs/toolkit'

import taskListReducer from './taskListSlice'
import bpiTime from './bpiTime'

export default configureStore({
    reducer: {
        taskList: taskListReducer,
        bpiTime
    }
})
