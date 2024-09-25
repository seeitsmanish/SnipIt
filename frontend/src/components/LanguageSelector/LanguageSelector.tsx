import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../aceternity/components/ui/select";
import { useLanguage } from "../../context/LanguageContext";

type SideBarProps = {};

const LanguageSelector: React.FC<SideBarProps> = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <Select onValueChange={setLanguage} value={language}>
      <SelectTrigger className="focus: h-[40px] w-[120px] rounded-xl border-2 border-purple-400 bg-transparent text-purple-400 md:h-[50px] md:w-[140px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent className="mb-1 rounded-xl border border-purple-400 bg-gray-950 text-purple-400">
        <SelectGroup>
          <SelectItem
            value="plaintext"
            className="rounded-xl focus:bg-purple-400 focus:bg-opacity-20 focus:text-purple-400"
          >
            Text
          </SelectItem>
          <SelectItem
            className="rounded-xl focus:bg-purple-400 focus:bg-opacity-20 focus:text-purple-400"
            value="javascript"
          >
            JavaScript
          </SelectItem>
          <SelectItem
            className="rounded-xl focus:bg-purple-400 focus:bg-opacity-20 focus:text-purple-400"
            value="typescript"
          >
            TypeScript
          </SelectItem>
          <SelectItem
            className="rounded-xl focus:bg-purple-400 focus:bg-opacity-20 focus:text-purple-400"
            value="cpp"
          >
            C++
          </SelectItem>
          <SelectItem
            className="rounded-xl focus:bg-purple-400 focus:bg-opacity-20 focus:text-purple-400"
            value="ruby"
          >
            Ruby
          </SelectItem>
          <SelectItem
            className="rounded-xl focus:bg-purple-400 focus:bg-opacity-20 focus:text-purple-400"
            value="python"
          >
            Python
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default LanguageSelector;
