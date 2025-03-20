"use client"

import { type ReactNode, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  
  const [displayChildren, setDisplayChildren] = useState(children)
  
  // Handle route changes
  useEffect(() => {
    const handleRouteChangeStart = () => {
      
    }
    
  
    
    // This is a workaround since Next.js App Router doesn't have the same events
    // as the Pages Router
    window.addEventListener('beforeunload', handleRouteChangeStart)
    
    // Update children when pathname changes
    setDisplayChildren(children)
    
    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart)
    }
  }, [pathname, children])

  return (
    <div className="relative w-full flex-1 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
          }}
          className="absolute w-full h-full"
        >
          <main className="h-full">
            {displayChildren}
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

