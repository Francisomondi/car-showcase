import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <h1>Car Showcase</h1>
    </main>
  )
}
