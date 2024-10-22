import React, { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const App:React.FC = ()=>{
  const { name } = useParams<{ name: string }>();
  const [hospitalList,setHospitalList] = useState([]);
  const data = useFetch.useGetFetch('/search/' + name);

  useEffect(()=>{

  },[data])

  return (
    <div>

    </div>
  )
}

export default App;