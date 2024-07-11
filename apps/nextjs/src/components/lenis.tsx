// Do not render this in a layout
// Have a wrapper component which does it each render
// https://github.com/darkroomengineering/lenis/issues/319
'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

const Lenis = ({ children }: { readonly children: React.ReactNode }) => {
  const lenis = useLenis()

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      lenis?.stop()
      lenis?.start()
    })
  }, [])

  return (
    <ReactLenis options={{ duration: 2 }} root>
      {children}
    </ReactLenis>
  )
}

export default Lenis
