import { useEffect, useState } from "react";

import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import List from "../../components/List";
import Box from "../../components/Box";

import { useNavigate } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/Firebase";

import { IItem } from "../Home/Home";

function Entries() {
  const [entries, setEntries] = useState<IItem[] | null>(null);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
    getEntries();
  }, []);

  const entriesRef = collection(db, "entries");

  const getEntries = async () => {
    const entriesQuery = query(entriesRef, where("ownerId", "==", user?.uid));

    const entriesData = await getDocs(entriesQuery);

    setEntries(
      entriesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IItem[]
    );
  };

  return (
    <section className="appContainer fadeIn">
      <Title>Entries</Title>
      <br />
      <Paragraph>See all your entries list</Paragraph>
      <br />
      <Box>
        <List type="entry" itemsList={entries} />
      </Box>
    </section>
  );
}

export default Entries;
