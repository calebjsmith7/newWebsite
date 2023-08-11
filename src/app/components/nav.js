import Link from "next/link";

export default function Nav() {
  return (
    <div className='nav'>
      <div className='navLeft'>
        <Link href={'/'}><h1 className='name'>CALEB SMITH</h1></Link>
      </div>
      <div className="navRight">
        <Link href={'/music'}>Music</Link>
        <Link href={'/creative'}>Creative</Link>
        <Link href={'/marketing'}>Digital Marketing</Link>
        <Link href={'mailto:calebjoelsmith@gmail.com'}>Contact</Link>
      </div>
    </div>
  )
}
