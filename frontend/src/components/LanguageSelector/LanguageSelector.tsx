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
            <SelectTrigger className="bg-transparent border-2 border-white rounded-md h-[50px] w-[140px] text-white">
                <SelectValue placeholder="Select a Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="plaintext">Text</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                    <SelectItem value="ruby">Ruby</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default LanguageSelector;