import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"


export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-500 ">
      <div className="fixed w-full h-full -z-10 top-0">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     </div>
     
     <div className="container mx-auto px-4">
       <Nav />
       <Hero />
       <About />
       <Technologies />
       <Experience />
       <Projects />
       <Contact />
     </div> 
    </div>
    

    
  )
}