import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import styles from '../styles/Home.module.scss';

import { IoCartOutline } from 'react-icons/io5';
import { useState } from 'react';

let corSecundaria = '#552583';

export default function Home() {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityLess() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className={styles.container}>
      <Header />

      <div style={{ flex: 1, marginBottom: '7rem', marginTop: '1rem' }}>
        <div className={styles.jerseyContainer}>
          <Carrousel />
        </div>

        <div className={styles.infoContainer}>
          <span className="brand">NIKE</span>
          <span>REGATA ICON EDITION LOS ANGELES LAKERS 2020</span>
          <span>ARTNR.: BR7843(YELLOW/PURPLE)</span>
        </div>

        <div className={styles.actionsContainer}>
          <div className={styles.quantityButton}>
            <button onClick={handleQuantityLess}>{'<'}</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>{'>'}</button>
          </div>

          <div className={styles.sizeContainer}>
            <div className={styles.buttonSize}>
              <span>P</span>
            </div>

            <div className={styles.buttonSizeActive}>
              <span>M</span>
            </div>

            <div className={styles.buttonSize}>
              <span>G</span>
            </div>

            <div className={styles.buttonSize}>
              <span>GG</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.jerseyFooter}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span>R$179,90</span>
          <button style={{ background: corSecundaria }}>CARRINHO<IoCartOutline style={{ marginLeft: '10px', fontSize: '1rem' }} /></button>
        </div>
      </div>
    </div>
  )
}
