import Section1Container from "./section1/Section1Container"
import Section2Container from "./section2/Section2Container"
import s from './IndexPage.module.css'
import Section3Container from "./section3/Section3Container"
import Section4Container from "./section4/Section4Container"
import Section5Container from "./section5/Section5Container"
import Section6Container from "./section6/Section6Container"
import Section7Container from "./section7/Section7Container"
import Section8Container from "./section8/Section8Container"
import Section9Container from "./section9/Section9Container"
import Section10Container from "./section10/Section10Container"

const IndexPage = () => {

    return (
        <div className={s.container}>
            <Section1Container />
            <Section2Container />
            <Section3Container />
            <Section4Container />
            <Section5Container />
            <Section6Container />
            <Section7Container />
            <Section8Container />
            <Section9Container />
            <Section10Container />
        </div>
    );
}

export default IndexPage;