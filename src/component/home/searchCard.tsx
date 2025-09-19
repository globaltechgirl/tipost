import type { FC } from "react";
import { Card, TextInput } from "@mantine/core";

// Props interface for SearchCard
interface SearchCardProps {
  search: string;                
  setSearch: (val: string) => void;
}

/**
 * SearchCard Component
 *
 * Displays a styled input field inside a card for searching posts.
 * Uses controlled input pattern with value and onChange callback.
 */

const SearchCard: FC<SearchCardProps> = ({ search, setSearch }) => {
  return (
    <Card
      p={6}
      style={{
        backgroundColor: "var(--white-200)",
        borderRadius: "12px",
        border: "0.5px solid var(--white-400)",
      }}
    >
      <TextInput
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        styles={{
          root: { width: "100%" }, 
          input: {
            border: "0.5px solid var(--white-400)",
            backgroundColor: "var(--white-100)",
            borderRadius: "8px",
            padding: "10px",
            fontSize: 10,
            fontWeight: 400,
            color: "var(--black-200)",
          },
        }}
      />
    </Card>
  );
};

export default SearchCard;
