import Image from 'next/image'
import styles from './page.module.css'
import guyHat from '../../public/guyhat.jpg'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={guyHat} width={'100%'} style={{maxWidth: '90vw', maxHeight: '60vh', objectFit: 'cover', borderRadius: 50}}/>  
    </main>
  )
}
