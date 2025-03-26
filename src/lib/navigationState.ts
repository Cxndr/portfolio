"use client"

import { create } from 'zustand'

type NavigationState = {
  direction: 'up' | 'down' | null
  setDirection: (direction: 'up' | 'down' | null) => void
}

export const useNavigationState = create<NavigationState>((set: any) => ({
  direction: null,
  setDirection: (direction: 'up' | 'down' | null) => set({ direction }),
})) 