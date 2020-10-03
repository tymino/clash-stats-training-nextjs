import Link from 'next/link';
import s from '../styles/Navmenu.module.sass';


export default function NavMenu() {
  return (
    <nav className={s.navMenu}>
      <Link href='/'>
        <a className={s.linkMain}>Main</a>
      </Link>
    </nav>
  )
}