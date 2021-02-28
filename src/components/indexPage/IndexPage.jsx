import Section1Container from "./section1/Section1Container"
import Section2Container from "./section2/Section2Container"
import s from './IndexPage.module.css'

const IndexPage = () => {

    return (
        <div className={s.container}>
            <Section1Container />
            <Section2Container />
        </div>
    );
}

export default IndexPage;