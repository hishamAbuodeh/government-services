import CustomDrawer from "@/components/drawer"
import Sanad from '@/components/sanad';

export default function Home() {
  return (
    <div style={{height:'100%'}}>
      <CustomDrawer/>
      <div style={{height:'100%', width:'100%',position:'relative',backgroundColor:'rgb(250,250,250)'}}>
        <div style={{height:'85%', width:'100%', position:'absolute', top:'15%'}}>
            <div style={{height:'100%', width:'100%',display:'flex',justifyContent:'center',alignContent:'center'}}>
                <Sanad/>
            </div>
        </div>
      </div>
    </div>
  )
}