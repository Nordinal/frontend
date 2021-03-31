import s from './Section6.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-theme.css";
import vector from '../../../img/vector.svg'
import ItemSection6 from './itemSection6/ItemSection6';

const Section6 = (props) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: 'slick'
    }
    const items = props.reducer.content.map((item, index) => <ItemSection6 name={item.name} img={item.img} />);
    return (
      <div className={s.container} id="section6">
        <h2 className={s.title}>Нам требуются<img src={vector} className={s.vector}/></h2>
        <Slider {...settings}>
            {items}
        </Slider>
      </div>
    );
}

export default Section6;