import { defineQuery } from "groq";

export const pagesQuery = defineQuery(`*[_type == "page"]`);
export const pageQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0]`);