import Header from '../../components/Header';
import Carrousel from '../../components/Carrousel';
import styles from '../../styles/mobile/ProductPage.module.scss';

import { IoCartOutline, IoStarSharp, IoStarHalfSharp, IoAdd } from 'react-icons/io5';
import { RiSubtractLine } from 'react-icons/ri';
import { useState } from 'react';

let corSecundaria = '#552583';

export default function Home() {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('P');
    const [price, setPrice] = useState(179.9);

    function handleQuantityLess() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
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
                                <button onClick={handleQuantityLess}><RiSubtractLine /></button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}><IoAdd /></button>
                            </div>

                            <div className={styles.sizeContainer}>

                                {size === 'P' ? (
                                    <div className={styles.buttonSizeActive} onClick={() => setSize('P')}>
                                        <span>P</span>
                                    </div>
                                ) : (
                                    <div className={styles.buttonSize} onClick={() => setSize('P')}>
                                        <span>P</span>
                                    </div>
                                )}

                                {size === 'M' ? (
                                    <div className={styles.buttonSizeActive} onClick={() => setSize('M')}>
                                        <span>M</span>
                                    </div>
                                ) : (
                                    <div className={styles.buttonSize} onClick={() => setSize('M')}>
                                        <span>M</span>
                                    </div>
                                )}

                                {size === 'G' ? (
                                    <div className={styles.buttonSizeActive} onClick={() => setSize('G')}>
                                        <span>G</span>
                                    </div>
                                ) : (
                                    <div className={styles.buttonSize} onClick={() => setSize('G')}>
                                        <span>G</span>
                                    </div>
                                )}

                                {size === 'GG' ? (
                                    <div className={styles.buttonSizeActive} onClick={() => setSize('GG')}>
                                        <span>GG</span>
                                    </div>
                                ) : (
                                    <div className={styles.buttonSize} onClick={() => setSize('GG')}>
                                        <span>GG</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.descriptionContainer}>
                    <div style={{ background: '#ffff', padding: '10px' }}>
                        <div>
                            <h1>DESCRI????O</h1>
                            <div className={styles.lineRounded} style={{ background: corSecundaria }}></div>
                        </div>
                        <p>
                            Capture a identidade distinta da sua equipe em um design novo e inovador quando
                            voc?? pegar esta camisa de Swingman do ??cone do LeBron James Los Angeles Lakers.
                            Inspirado diretamente na camisa Authentic da Nike, ele apresenta acabamentos cl??ssicos e gr??ficos
                            Los Angeles Lakers, juntamente com a tecnologia Dri-FIT da Nike para maior conforto.
                            Antes de ir para o pr??ximo jogo do Los Angeles Lakers, pegue esta camisa incr??vel para que todos saibam que seu fandom est?? na vanguarda.
                        </p>
                    </div>
                </div>

                <div className={styles.detailsContainer}>
                    <div style={{ background: '#ffff', padding: '10px' }}>
                        <div>
                            <h1>DETALHES</h1>
                            <div className={styles.lineRounded} style={{ background: corSecundaria }}></div>
                        </div>
                        <span>Marca: Nike</span>
                        <span>Material: 100% Polyester</span>
                        <span>Time: Los Angeles Lakers</span>
                        <span>Cor: Amarelo/Roxo</span>
                        <span>R??plica de 1?? Linha</span>
                    </div>
                </div>

                <div className={styles.comentSection}>
                    <div style={{ background: '#ffff', padding: '10px' }}>
                        <div>
                            <h1>COMENT??RIOS</h1>
                            <div className={styles.lineRounded} style={{ background: corSecundaria }}></div>
                        </div>

                        <div className={styles.comentsContainer}>
                            <div className={styles.starContainer}>
                                <IoStarSharp className={styles.star} />
                                <IoStarSharp className={styles.star} />
                                <IoStarSharp className={styles.star} />
                                <IoStarSharp className={styles.star} />
                                <IoStarSharp className={styles.star} />
                            </div>

                            <p>Atendimento ??timo, entrega chegou antes da data prevista MUITO BOM.</p>

                            <div className={styles.nameAndDateContainer}>
                                <h1>Caio</h1>
                                <span>29 de jun de 2021</span>
                            </div>
                        </div>

                        <div className={styles.comentsContainer}>
                            <div className={styles.starContainer}>
                                <IoStarSharp className={styles.star} />
                                <IoStarSharp className={styles.star} />
                                <IoStarSharp className={styles.star} />
                                <IoStarSharp className={styles.star} />
                                <IoStarHalfSharp className={styles.star} />
                            </div>

                            <p>Qualidade do tecido muito, s?? demorou um pouco pra chegar mas tudo bem.</p>

                            <div className={styles.nameAndDateContainer}>
                                <h1>Rossi</h1>
                                <span>13 de jun de 2021</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className={styles.jerseyFooter}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span>R${(price * quantity).toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                    <button style={{ background: corSecundaria }}>CARRINHO<IoCartOutline style={{ marginLeft: '10px', fontSize: '1rem' }} /></button>
                </div>
            </div>
        </div>
    )
}
