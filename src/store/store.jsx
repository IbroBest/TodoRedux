import {createStore,mobilereducers,applymiddleware}from 'redux'
import thunk from 'thunk'

const reducer  =  mobilereducers({

})

const initialState = {}

const middleware = [thunk];

const store = creareStore(
    reducer,
    initialState,
    applymiddleware(...middleware)
)