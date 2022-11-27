import {configureStore} from '@reduxjs/toolkit'

import bpiTime from './bpiTime'

export default configureStore({
    reducer: {
        bpiTime
    }
})
