import {Container} from "../shared/Container.tsx";
import {Title} from "../shared/Title.tsx";
import {Paragraph} from "../shared/Paragraph.tsx";
import {services} from "../../utils/services-data.tsx";
import {Service} from "../cards/Service.tsx";

export const Services = () => {
    return (<section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title> Our Services </Title>
                <Paragraph>
                    Help Players and Clans Better War
                </Paragraph>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {
                    services.map((service, key) => (
                        <Service
                            key={key}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}></Service>
                    ))
                }

            </div>
        </Container></section>)
}