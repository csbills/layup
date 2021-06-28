import { useState, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import ProductPage from '../pages/mobile/productPage';

export default function Home() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width) {
      if (width < 500) {
        setIsMobile(true);
      }
    }
  }, [])

  return (
    <>
      {isMobile && (
        <ProductPage />
      )}

    </>
  )
}
