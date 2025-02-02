"use client"

import NavDesktopLink from './NavDesktopLink';
import { CircleUserRound, MonitorSmartphone, BookImage, Music, BookUser, AtSign } from 'lucide-react';

export default function NavDesktop() {

  return (
    <nav className="hidden md:flex justify-center mt-6 mb-1">

      <NavDesktopLink href="/" label="intro">
        <CircleUserRound size={18} />
      </NavDesktopLink>

      <NavDesktopLink href="/dev" label="dev">
        <MonitorSmartphone size={18}  />
      </NavDesktopLink>

      <NavDesktopLink href="/marketing" label="marketing">
        <BookImage size={18}  />
      </NavDesktopLink>

      <NavDesktopLink href="/music" label="music">
        <Music size={18}  />
      </NavDesktopLink>

      <NavDesktopLink href="/tcg" label="tcg">
        <BookUser size={18}  />
      </NavDesktopLink>

      <NavDesktopLink href="/contact" label="contact">
        <AtSign size={18}  />
      </NavDesktopLink>

    </nav>
  )
}