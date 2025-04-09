"use client"

import { create } from 'zustand'

type NavigationState = {
  direction: 'up' | 'down' | 'left' | 'right' | null
  setDirection: (direction: 'up' | 'down' | 'left' | 'right' | null) => void
}

export const useNavigationState = create<NavigationState>((set) => ({
  direction: null,
  setDirection: (direction: 'up' | 'down' | 'left' | 'right' | null) => set({ direction }),
}))

