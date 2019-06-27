import { TEXTCHANGE } from '../actions'

const initialState = { value: "default" }

export default (state = initialState, action) => {
  switch (action.type) {
    case TEXTCHANGE:
      return { value: action.target }  
    default:
      return state
  }
}