import CustomDrawer from "@/components/drawer"
import AboutUs from '@/components/aboutUs';
import aboutQues from '@/aboutQues';

export default function Home() {
  return (
    <div style={{height:'100%'}}>
      <CustomDrawer/>
      <div style={{height:'100%', width:'100%',position:'relative',backgroundColor:'rgb(250,250,250)'}}>
        <div style={{height:'85%', width:'100%', position:'absolute', top:'15%'}}>
            <div style={{height:'100%', width:'100%',display:'flex',justifyContent:'center'}}>
                <AboutUs data={aboutQues}/>
            </div>
        </div>
      </div>
    </div>
  )
}