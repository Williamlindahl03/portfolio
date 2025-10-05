import { GithubIcon, NewPageIcon } from "../svgs/svgs";
import Tag from "../tags/Tag";
import TagList from "../tags/TagList";

type ProjectProps = {
    video: string,
    name: string,
    type: string,
    time: string,
    description?: string,
    listOfTags: string[],
    linkToCode?: string,
    linkToDemo?: string
}

function ProjectDemoModal({name, type, description, listOfTags, video, linkToCode, linkToDemo}: ProjectProps) {
    return (
        <div className="size-full fixed top-0 left-0 z-1000 bg-bgPrimary/60 backdrop-blur-xl flex flex-row justify-center items-center">
            <div className="max-w-[700px] w-full h-[80%] p-4 mx-4 bg-bgSecondary rounded-lg border border-bgTertiary">
                <div className="flex flex-row items-center gap-2">
                    <h1 className="text-strong text-2xl">{name}Example Project</h1>
                    <Tag text={"Eget Project"} bgColor="tertiary" textColor="primary" borderColor="secondary"/>
                    <button className="w-12 p-2 aspect-square rounded-full hover:bg-bgTertiary text-strong ml-auto">X</button>
                </div>
                
                <p className="text-muted max-w-[90%] leading-5">{description}Sommarjobbade två år som Brevbärare på PostNord i Sandviken och jobbade även extra där emellan under studierna. Jobbade mycket självständigt och under stress.</p>
                <TagList listOfTags={listOfTags} />
                <video className="w-full py-4" controls>
                    <source src="/SVTAppDemo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-row justify-between mt-auto">
                    {linkToCode ? <a className="text-primary cursor-pointer">
                                    <div className="flex flex-row gap-1">
                                        <p>Kod</p><GithubIcon width="16" color="var(--color-primary)"/>
                                    </div>
                                    </a>: null}
                    {linkToDemo ? <a href={linkToDemo} className="text-primary cursor-pointer">
                                    <div className="flex flex-row gap-1">
                                        <p>Besök</p><NewPageIcon width="16" color="var(--color-primary)"/>
                                    </div>
                                    </a>: null}
                </div>
            </div>
        </div>
    );
} export default ProjectDemoModal;