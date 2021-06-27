import Image from 'next/image'
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import styles from '../styles/Home.module.scss';

import lakersFrontJersey from '../images/front.jpg';
import lakersBackJersey from '../images/back.jpg';

import { IoCartOutline } from 'react-icons/io5';

let corSecundaria = '#552583';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div style={{ flex: 1, marginBottom: '2rem' }}>
        <div className={styles.jerseyContainer}>
          <Carrousel />
        </div>

        <div className={styles.infoContainer}>
          <span className="brand">NIKE</span>
          <span>REGATA ICON EDITION LOS ANGELES LAKERS 2020</span>
          <span>ARTNR.: BR7843(YELLOW/PURPLE)</span>
        </div>
      </div>

      <div className={styles.jerseyFooter}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <span>R$179,90</span>
          <button style={{ background: corSecundaria }}>CARRINHO<IoCartOutline style={{marginLeft: '10px', fontSize: '1rem'}} /></button>
        </div>
      </div>
    </div>
  )
}
