import { create } from 'zustand'

interface State {
	email: string
}

export const useNumberState = create<State>()(() => ({ email: 'hello' }))
