import s from './Section8.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-theme.css";
import vector from '../../../img/vector.svg'
import ItemSection8 from './itemSection8/ItemSection8';

const Section8 = (props) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slick'
    }
    const items = props.reducer.content.map((item, index) => <ItemSection8 title={item.title} text={item.text} img={item.img} url={item.url} />);
    return (
      <div className={s.container} id="section8">
        <h2 className={s.title}>Наша продукция<img src={vector} className={s.vector}/></h2>
        <p className={s.desc}>Cерийное производство ряда новых образцов</p>
        <Slider {...settings}>
            {items}
        </Slider>
      </div>
    );
}

export default Section8;