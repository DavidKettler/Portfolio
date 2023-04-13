import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AnimatePresence>
      <main className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        
      </main>
    </AnimatePresence>
  )
}
