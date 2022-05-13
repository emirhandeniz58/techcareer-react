import AboutSection from "./AboutSection"
import ProjectSection from "./ProjectSection"
import ContactSection from './ContactSection'



function PageContent()
{

    return(<>
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}></div>

        <ProjectSection></ProjectSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
        

    </>)

}

export default PageContent