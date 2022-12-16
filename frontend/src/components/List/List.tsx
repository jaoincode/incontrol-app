import StyledList from "./styles";
import React, { useEffect, useState } from "react";

import formateDate from "../../utils/formateDate";

import { IItem } from "../../pages/Home/Home";

interface Props {
  itemsList: IItem[] | null;
  type: "entry" | "spent";
}

const List: React.FC<Props> = ({ itemsList, type }) => {
  const [items, setItems] = useState<IItem[] | null>(null);

  useEffect(() => {
    setItems(itemsList);
  }, [itemsList]);

  return (
    <StyledList type={type}>
      {items && items.length > 0 ? (
        items.map(({ description, createdAt, value, id }: IItem) => (
          <div className="item" key={id}>
            <p className="itemName">{description}</p>
            <span className="itemDate">{formateDate(createdAt)}</span>
            <span className="itemValue">$ {value.toFixed(2)}</span>
          </div>
        ))
      ) : (
        <span className="nothingFound">Nothing Found</span>
      )}
    </StyledList>
  );
};

export default List;
