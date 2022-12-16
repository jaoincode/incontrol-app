import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import SecondTitle from "../../components/SecondTitle/";
import Paragraph from "../../components/Paragraph/";
import Values from "../../components/Values/";
import Button from "../../components/Button/";
import AddNew from "../../components/AddNew";
import Title from "../../components/Title/";
import List from "../../components/List";
import Box from "../../components/Box/";

import CartShopping from "../../assets/cartshopping.svg";
import MoneyBill from "../../assets/moneybill.svg";

import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/Firebase";

import reduceValues from "../../utils/reduceValues";

export interface IItem {
  description: string;
  createdAt: string;
  ownerId: string;
  value: number;
  id: string;
}

type ModalTypes = "entry" | "spent";

const Home = () => {
  const [user] = useAuthState(auth);

  const [spents, setSpents] = useState<IItem[] | null>(null);
  const [entries, setEntries] = useState<IItem[] | null>(null);

  const [menuOpen, setMenuOpen] = useState(true);
  const [menuType, setMenuType] = useState<ModalTypes | "">("");

  const openType = (type: ModalTypes) => {
    setMenuType(type);
    setMenuOpen(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/login");
    getAllItems();
  }, [user]);

  const spentsRef = collection(db, "spents");
  const entriesRef = collection(db, "entries");

  const getAllItems = async () => {
    const spentsQuery = query(spentsRef, where("ownerId", "==", user?.uid));
    const entriesQuery = query(entriesRef, where("ownerId", "==", user?.uid));

    const spentsData = await getDocs(spentsQuery);
    const entriesData = await getDocs(entriesQuery);

    setSpents(
      spentsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IItem[]
    );
    setEntries(
      entriesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IItem[]
    );
  };

  return (
    <>
      <AddNew
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        type={menuType}
      />
      <section className="appContainer">
        <div className="flexDiv fadeIn">
          <Box small={true}>
            <Title>Good morning!</Title>
            <Paragraph>
              It’s good to see you. Control your finances easly.
            </Paragraph>
            <div className="boxInfos fadeIn2">
              {entries && spents && (
                <>
                  <Values
                    text="Entries total:"
                    value={reduceValues(entries).toFixed(2)}
                    type="entries"
                  />
                  <Values
                    text="Spents total:"
                    value={reduceValues(spents).toFixed(2)}
                    type="spents"
                  />
                  <Values
                    text="Remainder total:"
                    value={(
                      reduceValues(entries) - reduceValues(spents)
                    ).toFixed(2)}
                  />
                </>
              )}
            </div>
          </Box>
          <Box small={true}>
            <Title>Add a new...</Title>
            <Paragraph>Add a new spent or entry.</Paragraph>
            <div className="boxButtons fadeIn2">
              <Button
                text="+ Entry"
                icon={MoneyBill}
                onClick={() => openType("entry")}
              />
              <Button
                text="+ Spent"
                icon={CartShopping}
                onClick={() => openType("spent")}
              />
            </div>
          </Box>
        </div>
        <div className="flexDiv fadeIn">
          <Title>See your finances infos...</Title>
          <Box>
            <SecondTitle>Entries</SecondTitle>
            <List type="entry" itemsList={entries} />
          </Box>
          <Box>
            <SecondTitle>Spents</SecondTitle>
            <List type="spent" itemsList={spents} />
          </Box>
        </div>
      </section>
    </>
  );
};

export default Home;
