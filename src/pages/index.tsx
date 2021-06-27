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

      <div style={{ flex: 1, marginBottom: '7rem' }}>
        <div className={styles.firstPageContainer}>
          <div className={styles.jerseyContainer}>
            <Carrousel />
          </div>

          <div>
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

          <div></div>
        </div>

        <div className={styles.descriptionContainer}>
          <div style={{ background: '#ffff', padding: '10px' }}>
            <h1>DESCRIÇÃO</h1>
            <div className={styles.lineRounded} style={{ background: corSecundaria }}></div>
            <p>
              Capture a identidade distinta da sua equipe em um design novo e inovador quando
              você pegar esta camisa de Swingman do ícone do LeBron James Los Angeles Lakers.
              Inspirado diretamente na camisa Authentic da Nike, ele apresenta acabamentos clássicos e gráficos
              Los Angeles Lakers, juntamente com a tecnologia Dri-FIT da Nike para maior conforto.
              Antes de ir para o próximo jogo do Los Angeles Lakers, pegue esta camisa incrível para que todos saibam que seu fandom está na vanguarda.
            </p>
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
