import algoliasearch from "algoliasearch";
import { ALGOLIA_APP_ID, ALGOLIA_KEY } from "../utils/constants";

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_KEY);

export interface SearchResult {
  type: string;
  hits: any[];
}

interface SearchOnAlgoliaInput {
  index: string;
  query: string;
  filters?: string;
  aroundLatLng?: string;
  aroundRadius?: number;
  hitsPerPage?: number;
}

export const searchOnAlgolia = async (queries: SearchOnAlgoliaInput[], onResult: (result: SearchResult[]) => void) => {
  const query = queries.map((i) => {
    const { index, ...rest } = i;
    return {
      indexName: index,
      params: rest
    };
  });
  const { results } = await client.multipleQueries(query);
  onResult(
    results.map<SearchResult>((r) => {
      return {
        type: r.index,
        hits: r.hits as any[]
      };
    })
  );
};
