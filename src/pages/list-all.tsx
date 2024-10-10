import axios from "axios";
import { useEffect, useState } from "react";
import TableOFus from "../components/Tableofus";

export default function Listiall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/data/list-all")
      .then((ans) => setData(ans.data))
      .catch((err) => err);
  }, []);


  return (
    <div>
      <TableOFus data={data} />
    </div>
  );
}
