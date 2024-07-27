import { CardContainer, CardItem } from "../../aceternity/components/ui/3d-card";
import cn from "../../lib/cn";
import ImageExampleSrc from '/ImageExample.png';

export function ImageExampleCard3D({ className }: { className?: string }) {
    return (
        <CardContainer className={cn("inter-var lg:h-[500px] lg:w-[800px] h-[200px] w-[300px] max-w-full rounded-md", className)}>
            <CardItem CardItem translateZ="100" className="h-full w-full">
                <div className="bg-gradient-to-r rounded-md from-blue-500 to-green-500 p-5">
                    <img
                        src={ImageExampleSrc}
                        className="h-full w-full rounded-md group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </div>
            </CardItem >
        </CardContainer >
    );
}
