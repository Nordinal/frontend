import s from './Section6.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-theme.css";
import vector from '../../../img/vector.svg'
import ItemSection6 from './itemSection6/ItemSection6';
import ModalSection6 from './itemSection6/ModalSection6';
import {useState} from 'react'

const Section6 = (props) => {

    const [activeModule, setActiveModule] = useState(props.reducer.content.map(() => false));
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: 'slick'
    }
    const items = props.reducer.content.map((item, index) => <div onClick={() => setActiveModule(props.reducer.content.map((e, i) => index == i ? true : false))}><ItemSection6 name={item.name} img={item.img} /></div>);
    const numbers = props.reducer.content.map((e, i) => i);
    return (
      <div className={s.container} id="section6">
        <h2 className={s.title}>Нам требуются<img src={vector} className={s.vector}/></h2>
        <Slider {...settings} className={s.slick}>
            {items}
        </Slider>
        {props.reducer.content.map((item, index) => <ModalSection6 activeModule={activeModule[index]} name={item.name} setActiveModal={() => setActiveModule(props.reducer.content.map(() => false))} image={props.reducer.content[index].imageModal}/>)}
      </div>
    );
}

export default Section6;