import Nav from "../components/Nav";
import Headline from "../components/Headline";
import WhyChooseUs from "../components/WhyChooseUs";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import BlogPost from "../components/BlogPost";
import Faq from "../components/Faq";
import OurServices from "../components/OurServices";
import FeaturedProjects from "../components/FeaturedProjects";
import PopularProject from "../components/PopularProject";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
    return (
        <div className="bg-[#ECFDF5] font-inter">
            <Nav />
            <Headline />
            <OurServices />
            <About />
            <WhyChooseUs />
            <PopularProject />
            <OurTeam />
            <OurMission />
            <BlogPost />
            <Faq />
            <FeaturedProjects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
  }
  