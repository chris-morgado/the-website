'use client';
import { useEffect } from 'react';

export default function ClientReady() {
  useEffect(() => {
    document.documentElement.classList.add('page-ready');
  }, []);
  return null;
}