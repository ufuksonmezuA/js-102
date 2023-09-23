import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const users = ["Ahmet", "Mehmet", "Ali", "Veli"]
const users2 = ["Ali", "Mesut"]
const age = 20;

//PROPS AKTARIMI
export default function Home() {
  return (
    <div>
        <Header systemUsers={users}/>
        <h2>Test</h2>
        <p>selam</p>
        
      <div style={{ width:"20rem", display: "flex", flexDirection: "column", justifyContent:"center", gap:"1rem"}}>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" style={{backgroundColor: "#efd892", color: "#000"}}>Contained</Button>
        <Button variant="contained" disabled>Contained</Button>
        <Button variant="contained" size="large">Contained</Button>
        <Button variant="contained" startIcon={<DeleteIcon />}>Contained</Button>
        <Button variant="contained" endIcon={<DeleteIcon />}>Contained</Button>

      </div>
        {JSON.stringify(users)}
        <Footer systemUsers={users}/>

    </div>
  )
}
