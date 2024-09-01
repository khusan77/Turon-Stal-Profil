import dynamic from 'next/dynamic'
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const Hero = dynamic(() => import('@/components/Hero'), {ssr: false})
const Catalogue = dynamic(() => import('@/components/Catalogue'), {ssr: false})
const Features = dynamic(() => import('@/components/Features'), {ssr: false})
const Contacts = dynamic(() => import('@/components/Contacts'), {ssr: false})
const Footer = dynamic(() => import('@/components/Footer'), {ssr: false})


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Catalogue />
        <Features />
        <Contacts />
        <Footer />
      </div>
    </main>
  );
};

export default Home;