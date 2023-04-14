import { Footer, Navbar } from '../components';
import { About, Explore, Books, Hagrid, Hero, Insights, WhatsNew, World,Harry,Voldemort} from '../sections';
import PhotosGrid from '../sections/PhotoGrid';




const Page = () => (

  <div className="bg-slate-900 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <PhotosGrid/>
    </div>
    <div className="relative">
      <Harry/>
      <Hagrid />
      <Voldemort/>
      <div className="gradient-04 z-0" />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Books />
      <Insights />
      <WhatsNew />
    </div>
    <Footer />
  </div>
);

export default Page;
