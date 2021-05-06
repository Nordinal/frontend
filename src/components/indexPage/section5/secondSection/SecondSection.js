import InfoTop from '../infoTop/InfoTop'
import Institute from '../institute/Institute';
import s from './SecondSection.module.css'

const SecondSection = (props) => {
    const handleClick = () => {
        props.setCount(3);
    }
    return(
        <div className={s.bg}>
            <div className={s.container}>
                <div className={s.info}>
                    <InfoTop count={props.count}/>
                </div>
                <p className={s.title}>Выбери институт в котором хочешь обучаться</p>
                <div className={s.items}>
                    {props.reducer.institute.map( (item, index) => <Institute instituteModal={props.reducer.institute[index].instituteModal} text={props.reducer.institute[index].textBtn} img={props.reducer.institute[index].img} isActive={index === props.reducer.active ? true : false} updateActive={() => props.updateActive(index)} key={index}></Institute>)}
                </div>
                <div className={s.bottom}>
                    <button className={s.btn} onClick={handleClick}>Выбрать</button>
                </div>
            </div>
        </div>
    )
}

export default SecondSection;