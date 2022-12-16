import StyledList from "./styles";
import React, { useEffect, useState } from "react";

import formateDate from "../../utils/formateDate";

import { IItem } from "../../pages/Home/Home";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/Firebase";

interface Props {
  itemsList: IItem[] | null;
  type: "entry" | "spent";
}

const List: React.FC<Props> = ({ itemsList, type }) => {
  const [items, setItems] = useState<IItem[] | null>(null);

  useEffect(() => {
    setItems(itemsList);
  }, [itemsList]);

  const deleteItem = async (id: string) => {
    let ref = type === "entry" ? doc(db, "entries", id) : doc(db, "spents", id);

    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    await deleteDoc(ref);
    location.reload();
  };

  return (
    <StyledList type={type}>
      {items && items.length > 0 ? (
        items.map(({ description, createdAt, value, id }: IItem) => (
          <div className="item" key={id}>
            <p className="itemName">{description}</p>
            <span className="itemDate">{formateDate(createdAt)}</span>
            <span className="itemValue">$ {value.toFixed(2)}</span>
            <button onClick={() => deleteItem(id)} className="deleteBtn">
              X
            </button>
          </div>
        ))
      ) : (
        <span className="nothingFound">Nothing Found</span>
      )}
    </StyledList>
  );
};

export default List;
