import s from './Section6.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-theme.css";
import vector from '../../../img/vector.svg'
import ItemSection6 from './itemSection6/ItemSection6';

const Section6 = (props) => {

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const mediaQuery = window.matchMedia('(max-width: 767px)')
      if (mediaQuery.matches) {
        settings = {
          ...settings,
          slidesToShow: 1,
          arrows: false
        }
      }
    const items = props.reducer.content.map((item, index) => <ItemSection6 name={item.name} img={item.img} imageModal={item.imageModal}/>);
    return (
      <div className={s.container} id="section6">
        <h2 className={s.title}>Нам требуются<img src={vector} className={s.vector}/></h2>
        <Slider {...settings} className={s.slick}>
            {items}
        </Slider>
      </div>
    );
}

export default Section6;