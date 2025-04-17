"use client"

import NavDesktopLink from './NavDesktopLink';
import { LuCircleUserRound, LuMonitorSmartphone, LuBookImage, LuMusic, LuAtSign } from 'react-icons/lu'

export default function NavDesktop() {

  return (
    <nav 
      className="
        flex justify-center
        pt-2 md:pt-6
        relative z-10 persist-nav 
        bg-background
      "
    >

      <NavDesktopLink href="/" label="intro">
        <LuCircleUserRound size={18} />
      </NavDesktopLink>

      <NavDesktopLink href="/dev" label="dev">
        <LuMonitorSmartphone size={18}  />
      </NavDesktopLink>

      <NavDesktopLink href="/marketing" label="marketing">
        <LuBookImage size={18}  />
      </NavDesktopLink>

      <NavDesktopLink href="/music" label="music">
        <LuMusic size={18}  />
      </NavDesktopLink>

      <NavDesktopLink href="/contact" label="contact">
        <LuAtSign size={18}  />
      </NavDesktopLink>

    </nav>
  )
}