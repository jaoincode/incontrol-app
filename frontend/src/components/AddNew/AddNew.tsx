import StyledModal from "./styles";

import React, { useState } from "react";

import Button from "../Button";
import Input from "../Input";

import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/Firebase";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import X from "../../assets/close.png";

interface Props {
  open: boolean;
  onClose: () => void;
  type: "spent" | "entry" | "";
}

const AddNew: React.FC<Props> = ({ open, onClose, type }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState<number>(0);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const spentsRef = collection(db, "spents");
  const entriesRef = collection(db, "entries");

  const submitNewValue = async (type: "spent" | "entry") => {
    const actualCollection = type === "spent" ? spentsRef : entriesRef;

    if (!user) return navigate("/login");

    await addDoc(actualCollection, {
      description,
      value,
      createdAt: new Date().toISOString().slice(0, 10),
      ownerId: user.uid,
    });

    setDescription("");
    setValue(0);

    if (type === "spent") return navigate("/spents");
    navigate("/entries");
  };

  const addNew = async (type: "spent" | "entry") => {
    if (user) {
      submitNewValue(type);

      onClose();
      setValue(0);
      setDescription("");
    }
  };

  if (!open || !type) return null;

  return (
    <StyledModal>
      <div className="fadeIn">
        <div className="form">
          <div className="head">
            <h1>{type[0].toUpperCase() + type.substring(1)}</h1>
            <button className="close" onClick={onClose}>
              <img src={X} alt="" />
            </button>
          </div>

          <Input
            type="text"
            id="description"
            placeholder="Description..."
            label="Description"
            value={description}
            name="description"
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(target.value)
            }
          />

          <Input
            type="number"
            id="value"
            placeholder="Value..."
            label="Value"
            value={value ? value : ""}
            name="value"
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setValue(+target.value)
            }
          />
          <Button text="+ add" onClick={() => addNew(type)} />
        </div>
      </div>
    </StyledModal>
  );
};

export default AddNew;
