import { Absolute, Relative } from "../common/Position";
import { BoxProps, Flex } from "rebass";
import { searchOnAlgolia, SearchResult } from "../../libraries/algolia";
import { SearchResults } from "./UserSearchResult";
import React, { useRef, useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import { Searchbar } from "@components/input/searchbar";
import { Loader } from "@components/appIcons/animations/Loader";

export interface AlgoliaSearchProps extends Omit<BoxProps, "css"> {
  onChoose: (item: any) => void;
  triggerError?: boolean;
}

export const AlgoliaSearch = ({ onChoose, triggerError, ...props }: AlgoliaSearchProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [algoliaLoading, setAlgoliaLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  useClickAway(ref, () => {
    setToggle(false);
  });
  const onChange = async (event) => {
    setAlgoliaLoading(true);
    setInputValue(event.target.value);
    setToggle(true);
    await searchOnAlgolia(
      [
        {
          index: "modules",
          query: event.target.value
        }
      ].filter((e) => e),
      (result) => {
        setAlgoliaLoading(false);
        setResults(result);
      }
    );
  };
  const users = results[0]?.hits.map((hit) => hit);

  return (
    <Relative ref={ref} width="100%" px={2} {...props}>
      <Flex m="auto">
        <Searchbar
          ref={inputRef}
          value={props.value}
          width="100%"
          onChange={onChange}
          placeholder="Rechercher un module"
          autoFocus={true}
          triggerError={triggerError}
        />
      </Flex>
      {algoliaLoading && (
        <Absolute top="30%" right={4} sx={{ "> div": { margin: 0 } }}>
          <Loader />
        </Absolute>
      )}
      {toggle && users && (
        <SearchResults
          users={users}
          none={inputValue !== "" && !users.length}
          onClick={async (item) => {
            setToggle(false);
            onChoose(item);
          }}
        />
      )}
    </Relative>
  );
};
