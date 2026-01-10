import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import '../styles/Portfolio.css';

import do_you_need_it from '../images/do_you_need_it.jpg';
import look_out_the_window from '../images/look_out_the_window.jpg';
import no_focus from '../images/no_focus.jpg';
import closing_tag from '../images/closing_tag.jpg';
import smart_table from '../images/smart_table.jpg';
import website from '../images/website.jpg';

const Portfolio = () => {


    const projects = [
        { id: 1, 
          title: 'Проект «Оно тебе надо»', 
          description: 'описание сайта', 
          image: do_you_need_it, 
          alt: 'Надпись «Оно тебе надо» на фоне цветов.'
        },
        { id: 2,
          title: 'Проект «Посмотри в окно»',
          description: 'описание сайта',
          image: look_out_the_window,
          alt: 'Видео городского пейзажа выбранного города.'
        },
        { id: 3,
          title: 'Проект «Нет фокуса»',
          description: 'описание сайта',
          image: no_focus,
          alt: 'Заголовок  «No focus» и текст о концентрации.'
        },
        { id: 4,
          title: 'Проект «Закрывающий тег»',
          description: 'описание сайта',
          image: closing_tag,
          alt: 'Фотография фургона и параграф о вёрстке.'
        },
        { id: 5,
          title: 'Проект «Умная таблица»',
          description: 'описание сайта', 
          image: smart_table,
          alt: 'Сведения покупателя.'
        },
        { id: 6,
          title: 'Проект «Веб-сайт»',
          description: 'описание сайта',
          image: website,
          alt: 'Отображаются названия товаров, добавленных в корзину.'
        }
    ]

    return (
            <div className="portfolio">
                <h3>Портфолио</h3>
                <p>Описание работ в целом</p>
                  <Swiper 
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    effect="fade"
                    loop={true}
                    className="portfolioSwiper"
                    >
                      
                       {projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <div className="projectSlide"> 
                                <img 
                                    src={project.image}
                                    alt={project.alt} 
                                    className="projectImage"
                                />
                              <div className="projectInfo">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
              </div>
    )

}

export default Portfolio;