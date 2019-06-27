export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const TEXTCHANGE = 'TEXTCHANGE'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const textchange = (e) => ({
  type: TEXTCHANGE,
  target: e.target.value
})