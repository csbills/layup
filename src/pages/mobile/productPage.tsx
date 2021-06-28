import Header from '../../components/Header';
import Carrousel from '../../components/Carrousel';
import styles from '../../styles/mobile/ProductPage.module.scss';

import { IoCartOutline, IoStarSharp, IoStarHalfSharp } from 'react-icons/io5';
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
                </div>

                <div className={styles.descriptionContainer}>
                    <div style={{ background: '#ffff', padding: '10px' }}>
                        <div>
                            <h1>DESCRIÇÃO</h1>
                            <div className={styles.lineRounded} style={{ background: corSecundaria }}></div>
                        </div>
                        <p>
                            Capture a identidade distinta da sua equipe em um design novo e inovador quando
                            você pegar esta camisa de Swingman do ícone do LeBron James Los Angeles Lakers.
                            Inspirado diretamente na camisa Authentic da Nike, ele apresenta acabamentos clássicos e gráficos
                            Los Angeles Lakers, juntamente com a tecnologia Dri-FIT da Nike para maior conforto.
                            Antes de ir para o próximo jogo do Los Angeles Lakers, pegue esta camisa incrível para que todos saibam que seu fandom está na vanguarda.
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
                        <span>Réplica de 1ª Linha</span>
                    </div>
                </div>

                <div className={styles.comentSection}>
                    <div style={{ background: '#ffff', padding: '10px' }}>
                        <div>
                            <h1>COMENTÁRIOS</h1>
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

                            <p>Atendimento ótimo, entrega chegou antes da data prevista MUITO BOM.</p>

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

                            <p>Qualidade do tecido muito, só demorou um pouco pra chegar mas tudo bem.</p>

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
                    <span>R$179,90</span>
                    <button style={{ background: corSecundaria }}>CARRINHO<IoCartOutline style={{ marginLeft: '10px', fontSize: '1rem' }} /></button>
                </div>
            </div>
        </div>
    )
}
