import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 

const YandexMetrika = () => {
  const location = useLocation();

  useEffect(() => {
 
    if (window.ym) return;

    const script = document.createElement('script');
    script.src = 'https://mc.yandex.ru/metrika/tag.js?id=107022242';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.ym(107022242, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
      });
    };
  }, []);

  useEffect(() => {
    if (window.ym) {
      window.ym(107022242, 'hit', location.pathname + location.search);
    }
  }, [location]); 

  return null;
};

export default YandexMetrika;