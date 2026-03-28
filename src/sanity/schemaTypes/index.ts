import type { SchemaTypeDefinition } from "sanity";

import { pageType } from "./page";
import { blockContentType } from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pageType, blockContentType]
};