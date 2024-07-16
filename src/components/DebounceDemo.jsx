import { useState, useEffect } from "react";

const useDebounce = (value) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
};

const searchCharacters = (term) => {
  console.log("new search...");
  return new Promise((res) => {
    setTimeout(() => {
      res(term);
    }, 500);
  });
};

export const DebounceDemo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const debounceSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    if (debounceSearchTerm) {
      setSearching(true);
      searchCharacters(debounceSearchTerm).then((result) => {
        setSearching(false);
      });
    }
  }, [debounceSearchTerm]);
  return (
    <div>
      <input onChange={(e) => setSearchTerm(e.target.value)} />
      <p>searchTerm: {searchTerm}</p>
      <p>Debounced searchTerm: {debounceSearchTerm}</p>
      {searching && <p>searching....</p>}
    </div>
  );
};
