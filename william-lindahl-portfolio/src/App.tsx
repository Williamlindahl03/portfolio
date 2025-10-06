import './App.css'
import Projectlist from './projects/ProjectList'
import About from "./about/About";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Experience from "./experience/Experience";

function App() {

  return (
    <>
      <div className='w-full bg-bgPrimary flex justify-center'>
        <div className='w-[100%] max-w-[800px] px-4 flex flex-col'>

          <div id="page" className='size-full'>
            <Header />
            <About />

            <div id="projects">
              <h1 className='text-strong font-bold text-3xl mt-6 pt-14 pb-4'>Projekt</h1>
              <Projectlist />
            </div>

            <div id="experience">
              <h1 className='text-strong font-bold text-3xl mt-6 pt-14 pb-4'>Erfarenhet</h1>
              <Experience/>
            </div>
            
            <Footer />
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
