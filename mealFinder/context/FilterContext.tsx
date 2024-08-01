import {ReactNode, SetStateAction, createContext, useState} from 'react';
import {FilterFood} from '../types/item';

type FilterContext = {
  filterData: FilterFood[];
  setFilterData: React.Dispatch<SetStateAction<FilterFood[]>>;
};

export const FilterContext = createContext<FilterContext>({
  filterData: [],
  setFilterData: () => {},
});

export const FilterContextProvider = ({children}: {children: ReactNode}) => {
  const [data, setData] = useState<FilterFood[]>([]);
  return (
    <FilterContext.Provider
      value={{
        filterData: data,
        setFilterData: setData,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
