import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from './Carrousel.module.scss';
import Image from 'next/image'

import lakersFrontJersey from '../../images/front.jpg'
import lakersBackJersey from '../../images/back.jpg';
import lakersCloseJersey from '../../images/close.jpg';

const DotsCustom = () => {
    <div style={{ width: '20px', height: '20px', background: '#552583' }}>

    </div>
}

export default function Carrousel() {
    return (
        <div className={styles.container}>
            <AliceCarousel
                autoPlay
                autoPlayInterval={3000}
                disableButtonsControls
                animationType="fadeout"
            >
                <Image src={lakersFrontJersey} width="250px" height="250px" className="sliderimg" />
                <Image src={lakersBackJersey} width="250px" height="250px" className="sliderimg" />
            </AliceCarousel>
        </div>
    )
}