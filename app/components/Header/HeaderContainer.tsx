// app/components/Header/HeaderContainer.tsx
"use client";
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import MobileHeader from './MobileHeader';

export default function HeaderContainer() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? <Header /> : <MobileHeader />;
}
