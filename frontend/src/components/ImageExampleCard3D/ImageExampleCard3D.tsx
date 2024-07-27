import { CardContainer, CardItem } from "../../aceternity/components/ui/3d-card";
import cn from "../../lib/cn";
import ImageExampleSrc from '/ImageExample.png';

export function ImageExampleCard3D({ className }: { className?: string }) {
    return (
        <CardContainer className={cn("inter-var lg:h-[500px] lg:w-[800px] h-[200px] w-[300px] max-w-full p-5 rounded-md", className)}>
            <CardItem CardItem translateZ="100" className="h-full w-full" >
                <img
                    src={ImageExampleSrc}
                    className="h-full w-full rounded-md group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
            </CardItem >
        </CardContainer >
    );
}
