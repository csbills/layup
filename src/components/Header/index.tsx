import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss';

import { IoCartOutline, IoMenu } from 'react-icons/io5';

export default function Header() {
    return (
        <div className={styles.container}>
            <div>
                <IoMenu className={styles.bars} />
            </div>

            <Link href="/">
                <a className={styles.logo}>LAYUP</a>
            </Link>

            <Link href="/">
                <a className={styles.cartIcon}><IoCartOutline /></a>
            </Link>
        </div>
    )
}