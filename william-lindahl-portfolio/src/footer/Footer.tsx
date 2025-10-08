import Socials from "../about/Socials";
import { EmailIcon } from "../svgs/svgs";

function Footer() {

    return(
        <div className="w-full flex flex-col  sm:flex-row-reverse flex-wrap px-5 py-10 border-t border-bgTertiary mt-20">
            
            <div className="mb-2 flex flex-row gap-1 sm:flex-row-reverse sm:ml-auto sm:m-0">
                <EmailIcon />
                <p className="text-muted">williamlindahl03@gmail.com</p>
            </div>
            <Socials />
        </div>
    );
} export default Footer;