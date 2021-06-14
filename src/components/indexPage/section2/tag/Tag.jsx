import s from './Tag.module.css'
import like from '../../../../img/like.svg'
import {useState} from 'react'

const Tag = (props) => {
    const [active, setActive] = useState(false);
    
    return (
        <div className={props.isFetching ? s.container + " " + s.disabled : s.container}>
            <div className={props.reducer.status ? s.last + " " + s.active : s.last} onClick={() => {
                    if(props.dataNew){
                        props.setActiveTag(props.reducer._id);
                        if(!props.reducer.status){
                            props.updateLikeTag(props.reducer._id);
                        }
                        else{
                            props.updateUnLikeTag(props.reducer._id);
                        }
                        props.initTagNotFetch();
                    }
                }
                }>
                {props.reducer.tag}
                <div className={props.dataNew ? active ? s.like + " " + s.activeLike : s.like : s.disable}>
                    <img src={like} alt='like'/>
                </div>
            </div>
        </div>
    )

}

export default Tag; 