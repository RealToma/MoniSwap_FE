import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lounchpad | Deposit & remove liquidity.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
