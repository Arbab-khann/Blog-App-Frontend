import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Store = createContext();
function Storedata(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://blog-backend-ldhh.onrender.com/data").then((res) => {
      setdata(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <>
      <Store.Provider value={[data, setdata]}>{props.children}</Store.Provider>
    </>
  );
}
export default Storedata;
