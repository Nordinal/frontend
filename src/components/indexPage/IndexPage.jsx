import Section1Container from "./section1/Section1Container"
import Section2Container from "./section2/Section2Container"
import s from './IndexPage.module.css'
import Section3Container from "./section3/Section3Container"
import Section4Container from "./section4/Section4Container"
import Section5Container from "./section5/Section5Container"

const IndexPage = () => {

    return (
        <div className={s.container}>
            <Section1Container />
            <Section2Container />
            <Section3Container />
            <Section4Container />
            <Section5Container />
        </div>
    );
}

export default IndexPage;