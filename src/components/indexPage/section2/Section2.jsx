import s from './Section2.module.css'
import Tag from './tag/Tag';
import i21 from '../../../img/plus.svg'


const Section2 = (props) => {
    
    return (
        <div className={s.container}>
            <h3 className={s.mainText}>Напишите свой тег о ЗИД</h3>
            <div className={s.tags}>
                {props.reducer.tag.map((item, index) => <Tag reducer={item} key={index}/>)}
                <img src={i21} className={s.plus}/>
            </div>

        </div>
    );
}

export default Section2;