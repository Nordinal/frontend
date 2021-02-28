import s from './Tag.module.css'

const Tag = (props) => {

        return (
            <div className={s.last}>
                {props.reducer}
            </div>
        )

}

export default Tag;