import { useState, useEffect } from 'react'

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const navSections = ["about", "projects", "experience"];

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 0); // true if scrolled more than 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            console.log("SCroll");
            // Only consider sections that are in navSections
            const visible = entries
            .filter((entry) => entry.isIntersecting && navSections.includes(entry.target.id))
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visible.length > 0) {
            setActive(visible[0].target.id); // pick closest to top
            }
        },
        { threshold: 0.6 }
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
        <div className={`h-24 sticky top-0 transition-all duration-300 ${scrolled ? "py-1" : "py-0"}`}> 
            <div className={`w-[350px] m-auto grid auto-cols-fr grid-flow-col flex-nowrap text-muted rounded-full transition-all duration-300 outline overflow-hidden ${scrolled ? " outline-highlight py-0 bg-bgSecondary" : "py-1 outline-none"}`}> 
                <button className={`px-2 flex-1 text-primary rounded-full hover:text-primary z-1`} onClick={() => scroll({top: 0, behavior: 'smooth'})}>Info</button>
                <button className={`px-2 flex-1 rounded-full hover:text-primary z-1`} onClick={() => scrollToElement("projects")}>{active}</button>
                <button className={`px-2 flex-1 rounded-full hover:text-primary z-1`} onClick={() => scrollToElement("experience")}>Erfarenhet</button>
            </div>
        </div>
    );
} export default Header;