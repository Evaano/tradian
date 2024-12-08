import { Tag } from ".prisma/client";
import { Pill } from "@mantine/core";

export const ArticleFilters = ({
                                 activeFilters,
                                 onFilterToggle,
                               }: {
  activeFilters: Tag[];
  onFilterToggle: (filter: Tag) => void;
}) => {
  const filterOptions: Tag[] = [
    "Business",
    "Import",
    "Export",
    "Individual",
    "Transit",
    "Vessels",
  ];

  return (
      <div className="flex space-x-2 my-5">
        {filterOptions.map((filter) => (
            <Pill
                size="xl"
                withRemoveButton={activeFilters.includes(filter)}
                key={filter}
                style={{
                  backgroundColor: activeFilters.includes(filter)
                      ? "#573550"
                      : "gray",
                  color: activeFilters.includes(filter) ? "white" : "black",
                }}
                onClick={() => onFilterToggle(filter)}
            >
              {filter}
            </Pill>
        ))}
      </div>
  );
};
