import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../aceternity/components/ui/select"
import { useLanguage } from '../../context/LanguageContext';

type SideBarProps = {};

const LanguageSelector: React.FC<SideBarProps> = () => {
    const { language, setLanguage } = useLanguage();
    return (
        <Select onValueChange={setLanguage} value={language}>
            <SelectTrigger className="bg-transparent border-2 border-white rounded-md h-[40px] w-[120px] md:h-[50px] md:w-[140px] text-white">
                <SelectValue placeholder="Select a Language" />
            </SelectTrigger>
            <SelectContent className="bg-gray-950 text-white">
                <SelectGroup>
                    <SelectItem value="plaintext">Text</SelectItem>
                    <SelectItem value="markdown">Markdown</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                    <SelectItem value="ruby">Ruby</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default LanguageSelector;