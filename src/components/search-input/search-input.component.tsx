import { ChangeEventHandler, FC } from "react";
import { IconSearch20 } from "../svg/search-icon.component";
import "./search-input.scss";

type SearchInputProps = {
  placeholder: string;
  searchHandler: (value: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  searchHandler,
}) => {
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="search">
      <input
        onChange={changeHandler}
        placeholder={placeholder}
        className="searchInput"
      ></input>
      <IconSearch20 />
    </div>
  );
};
