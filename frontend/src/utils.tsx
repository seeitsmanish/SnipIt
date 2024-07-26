import { generateSlug } from "random-word-slugs";
export const getRandomRoomSlug = () => {

    const randomNum = Math.floor(Math.random() * 4) + 1;
    const slug = generateSlug(randomNum, { format: 'kebab' });
    return slug;
}