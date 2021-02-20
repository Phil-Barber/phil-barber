import React, { useState } from 'react';
import { Badge } from '../components/badge';

type items = React.ReactNode[];
type filters = { [key: string]: (lookup: any) => boolean };
type lookupFunc = (item: any) => string;
interface Props {
  items: items;
  filters: filters;
  lookupFunc: lookupFunc;
  children: (filtered: React.ReactNode[]) => React.ReactNode;
}

const useFilters = (
  items: items,
  filters: filters,
  lookupFunc: lookupFunc
): [Array<string>, React.ReactNode[], (clicked: string) => () => void] => {
  const [selected, setSelected] = useState<Array<string>>([]);
  const toggleSelected = (clicked: string) => () => {
    setSelected((selected) =>
      selected.includes(clicked)
        ? selected.filter((item) => item !== clicked)
        : [...selected, clicked]
    );
  };

  const filteredItems = items.filter((item) => {
    if (!selected.length) return true;

    return selected.reduce(
      (acc, key) => acc || filters[key](lookupFunc(item)),
      false
    );
  });

  return [selected, filteredItems, toggleSelected];
};

export const FilterList: React.FC<Props> = ({
  items,
  filters,
  lookupFunc,
  children,
}: Props) => {
  const [selected, filteredItems, toggleSelected] = useFilters(
    items,
    filters,
    lookupFunc
  );

  const filterButtons = Object.keys(filters).map((key) => (
    <Badge
      key={key}
      onClick={toggleSelected(key)}
      isSelected={selected.includes(key)}
    >
      {key}
    </Badge>
  ));

  return (
    <>
      {filterButtons}
      {children(filteredItems)}
    </>
  );
};
