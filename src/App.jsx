import styled from "styled-components";
import "./App.css";
import Headers from "./Components/Header";
import Navbar from "./Components/Navbar";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useFirebase } from "./Context/Context";
import { useState } from "react";
import { useEffect } from "react";
import { getDatabase, ref, set, onValue ,remove} from "firebase/database";
import AddContact from "./Components/AddContact";
import Update from "./Components/Update";
import Contact from "./Components/Contact";
import HeroSection from "./Components/HeroSection";
import ErrorComp from "./Components/ErrorComp";

function App() {
  const firebase = useFirebase();
  const [searchdata,setsearchdata]=useState("")
  const [resdata, setresdata] = useState([]);
  const [hide,sethide]=useState(false);
  const [hideupdateform,sethideupdateform]=useState(false)
  const [Idval,setIdval]=useState("")
  const [id,setid]=useState()
  const [search,setsearch]=useState("")
  const getdata = ref(firebase.database, "contacts/");
   const [searchfilterdata,setsearchfilterdata]=useState("")

const func=()=>{
  if(resdata.length>0){
    let data= resdata&&resdata.filter((item)=>!item.userid.name.toLowerCase().indexOf(search.toLowerCase()))
    return setsearchfilterdata(data);
  }
 
}

useEffect(()=>{
    
  func()


},[search])
  useEffect(() => {
    onValue(getdata, (snapshot) => {
      let data = snapshot.val();
      setresdata(data);
    });
  }, []);
  
  const handleEditicon=(i)=>{
    sethideupdateform(hideupdateform===false?true:false)
   setIdval(resdata[i])
   setid(i)
  }
  const handledelete=(i)=>{
   
    remove(ref(firebase.database,`contacts/${i}`)).then((res)=>alert("Delete Successfully..."))
  }
  
  useEffect(()=>{

  },[handledelete])
  
  console.log(searchfilterdata)

  return (
    <Container>
      <Headers />
      <Navbar setsearch={setsearch} hide={hide} sethide={sethide}/>
      <HeroSection>
        {
          hide&&<AddContact sethideupdateform={sethideupdateform} resdata={resdata&&resdata} sethide={sethide} />

        }
        {
          hideupdateform&&<Update id={id} Idval={Idval} sethideupdateform={sethideupdateform} resdata={resdata} />

        }
       {
          !resdata&& <ErrorComp/>
       }
      
       
        { searchfilterdata ? searchfilterdata.map((item,i)=>(
         <Contact key={item.userid.email} email={item.userid.email} name={item.userid.name} handleEditicon={handleEditicon} handledelete={handledelete} i={i}/>


        )) : resdata&&
          resdata&&resdata.length>0&&resdata.map((item,i) => (
             <Contact key={item.userid.email} email={item.userid.email} name={item.userid.name} handleEditicon={handleEditicon} handledelete={handledelete} i={i}/>
          ))
          }
      </HeroSection>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 393px;
  height: 852px;
  padding: 8px 17px;
  gap: 20px;
  background-color: #323334;
`;


