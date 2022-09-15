import { action, atom } from 'nanostores'

export const count = atom<number>(0)

export const clearCount = action(count, 'clear', store => {
  store.set(0)
})

export const increaseCount = action(count, 'increaseCount', store => {
  store.set(store.get() + 1)
})