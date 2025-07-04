import {Layout} from "./components/Layout";
import {Brands} from "./components/sections/Brands.tsx";
import {Hero} from "./components/sections/Hero.tsx";
import {Services} from "./components/sections/Services.tsx";
import {AboutUs} from "./components/sections/AboutUs.tsx";
import {Pricing} from "./components/sections/Pricing.tsx";
import {CTA} from "./components/sections/CallToAction.tsx";

function App() {

    return (
        <Layout title="Lijie">
            <Hero/>
            <Brands/>
            <Services/>
            <AboutUs/>
            <Pricing/>
            <CTA/>
        </Layout>
    )
}

export default App
