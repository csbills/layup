import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from './Carrousel.module.scss';
import Image from 'next/image'

import lakersFrontJersey from '../../images/front.jpg'
import lakersBackJersey from '../../images/back.jpg';
import lakersCloseJersey from '../../images/close.jpg';

export default function Carrousel() {
    return (
        <div className={styles.container}>
            <AliceCarousel
                autoPlay
                autoPlayInterval={3000}
                disableButtonsControls
            >
                <Image src={lakersFrontJersey} layout="responsive" className="sliderimg" quality={100} />
                <Image src={lakersBackJersey} layout="responsive" className="sliderimg" quality={100} />
            </AliceCarousel>
        </div>
    )
}