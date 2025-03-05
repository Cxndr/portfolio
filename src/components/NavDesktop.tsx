"use client"

import NavDesktopLink from './NavDesktopLink';
import { LuCircleUserRound, LuMonitorSmartphone, LuBookImage, LuMusic, LuAtSign } from 'react-icons/lu'

export default function NavDesktop() {

  return (
    <nav className="hidden md:flex justify-center mt-6 mb-1">

      <NavDesktopLink href="/" label="intro">
        <LuCircleUserRound size={18} />
      </NavDesktopLink>

      <NavDesktopLink href="/dev/0" label="dev">
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