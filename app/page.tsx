import { Header } from '@/components/header';
import { Banner } from '@/components/banner';
import { About } from '@/components/about';
import { Progress } from '@/components/progress';
import { Provider } from '@/components/provider';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ScrollToTopOrb } from '@/components/orbTop';

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col w-full items-center pt-8 md:pt-10 max-w-[1480px]">
      <Provider />
      <Header />
      <Banner />
      <About />
      <Progress />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
