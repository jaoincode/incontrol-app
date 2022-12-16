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

function Spents() {
  const [spents, setSpents] = useState<IItem[] | null>(null);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
    getSpents();
  }, []);

  const spentsRef = collection(db, "spents");

  const getSpents = async () => {
    const spentsQuery = query(spentsRef, where("ownerId", "==", user?.uid));

    const spentsData = await getDocs(spentsQuery);

    setSpents(
      spentsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IItem[]
    );
  };

  return (
    <section className="appContainer fadeIn">
      <Title>Spents</Title>
      <br />
      <Paragraph>See all your spents list</Paragraph>
      <br />
      <Box>
        <List type="spent" itemsList={spents} />
      </Box>
    </section>
  );
}

export default Spents;
