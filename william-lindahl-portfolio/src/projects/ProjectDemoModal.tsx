import { CloseIcon, NewPageIcon } from "../svgs/svgs";
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
    close: () => void
}

function ProjectDemoModal({name, type, description, listOfTags, video, linkToCode, linkToDemo, close}: ProjectProps) {
    return (
        <div className="size-full fixed top-0 left-0 z-1000 bg-bgPrimary/60 backdrop-blur-xl flex flex-row justify-center items-center">
            <div className="max-w-[700px] w-full max-h-[95%] lg:max-h-[80%] mx-4 bg-bgSecondary rounded-lg border border-bgTertiary overflow-hidden overflow-y-scroll relative">
                <div className="p-2 flex flex-row items-center gap-2 sticky top-0 bg-bgSecondary">
                    <h1 className="pl-2 text-strong text-2xl">{name}</h1>
                    <Tag text={type} bgColor="tertiary" textColor="primary" borderColor="secondary"/>
                    <button onClick={close} className="p-1 rounded-full hover:bg-bgTertiary text-strong ml-auto"><CloseIcon/></button>
                </div>
                <div className="flex flex-col gap-2 overflow-hidden grow h-full px-4">

                    <p className="text-muted max-w-[90%] leading-5">{description}</p>
                    <TagList listOfTags={listOfTags} />
                    <video className="w-full" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    

                </div>

                <div className="px-4 py-2 flex flex-row justify-between mt-auto sticky bottom-0 bg-bgSecondary">
                        {linkToCode ? <a href={linkToCode} target="_blank"  className="text-primary cursor-pointer">
                                        <div className="flex flex-row gap-1">
                                            <p>Kod</p><NewPageIcon width="16" color="var(--color-primary)"/>
                                        </div>
                                        </a>: null}
                        {linkToDemo ? <a href={linkToDemo} target="_blank" className="text-primary cursor-pointer">
                                        <div className="flex flex-row gap-1">
                                            <p>Besök</p><NewPageIcon width="16" color="var(--color-primary)"/>
                                        </div>
                                        </a>: null}
                </div>  
            </div>
        </div>
    );
} export default ProjectDemoModal;