import React, { useEffect, useState } from "react";
import "./App.css";
import { client } from "./qoreContext";
import BasketPage from "./BasketPage";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      const token = await client.authenticate("test@momsku.com", "momsku");

      console.log(token);

      localStorage.setItem("token", token);

      const { data: user } = await client.project.axios.get(`/me`);

      setUser(user);
    })();
  }, []);

  return (
    <div>{user && <BasketPage basketId={user.data.basketAktif.id} />}</div>
  );
}

export default App;
