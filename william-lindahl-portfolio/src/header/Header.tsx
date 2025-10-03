import { useState, useEffect } from 'react'
import { AboutIcon, ExperienceIcon, ProjectsIcon } from '../svgs/svgs';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("about");
    const navSections = ["about", "projects", "experience"];

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 25); // true if scrolled more than 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            console.log("Scroll");
            // Only consider sections that are in navSections
            const visible = entries
            .filter((entry) => entry.isIntersecting && navSections.includes(entry.target.id))
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visible.length > 0) {
            setActive(visible[0].target.id); // pick closest to top
            }
        },
        { threshold: 0.5 }
        );

        // Observe only the navSections
        navSections.forEach((id) => {
            
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    function scrollToElement(id: string) {
        const element = document.getElementById(id)
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className={`sticky top-2 z-100`}> 
            <div className={`w-[350px] max-w-full m-auto grid auto-cols-fr grid-flow-col flex-nowrap text-muted p-1 rounded-full transition-all duration-200 overflow-hidden ${scrolled ? "outline outline-highlight bg-bgSecondary shadow-lg shadow-black" : "py-1 outline-none shadow-none"}`}> 
                <button onClick={() => scroll({top: 0, behavior: 'smooth'})} 
                        className={`transition-all border-black/0 duration-400 flex-1 flex flex-row item-center gap-1 justify-center rounded-full cursor-pointer ${active === "about" ? "text-primary hover:text-primary border border-secondary bg-tertiary" : "hover:text-strong"}`}><AboutIcon width='16'/>Info</button>
                <button onClick={() => scrollToElement("projects")}
                        className={`transition-all border-black/0 duration-400 flex-1 flex flex-row item-center gap-1 justify-center rounded-full cursor-pointer ${active === "projects" ? "text-primary hover:text-primary border border-secondary bg-tertiary" : "hover:text-strong"}`}><ProjectsIcon width='16'/>Projekt</button>
                <button onClick={() => scrollToElement("experience")} 
                        className={`transition-all border-black/0 duration-400 flex-1 flex flex-row item-center gap-1 justify-center rounded-full cursor-pointer ${active === "experience" ? "text-primary hover:text-primary border border-secondary bg-tertiary" : "hover:text-strong"}`}><ExperienceIcon width='16'/>Erfarenhet</button>
            </div>
        </div>
    );
} export default Header;