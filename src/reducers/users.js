import { FETCH_USERS } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
           // debugger
            //console.log(action.payload)
            return [ ...state, ...action.payload.data ]
    }

    return state
}