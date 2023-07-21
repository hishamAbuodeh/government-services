import {useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import BaseCard from './baseCard';
import Divider from '@mui/material/Divider';
import MyCard from './card';
import data from '../data'
import Services from './services';
import Sanad from './sanad';
import AboutUs from './aboutUs';
import aboutQues from '@/aboutQues';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }} >
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
}
  
export default function MainContainer() {

    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [ind,setInd] = useState(0);

    const handleChange = (value,index) => {
        setValue(value)
        if(index >= 0){
            setInd(index)
        }
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const showCards = () =>{
        return data.map((cardData,index) => {
            return(
                <MyCard key={index} data={cardData} handleChange={handleChange} index={index}/>
            )
        })
    }

  return (
    <div style={{height:'100%', width:'100%',position:'relative',backgroundColor:'rgb(250,250,250)'}}>
        <div style={{height:'85%', width:'100%', position:'absolute', top:'15%'}}>
            <Box sx={{ height: '100%',width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    style={{height:'100%',width:'100%'}}
                >
                    <TabPanel value={value} index={0} dir={theme.direction} style={{height:'100%',width:'100%'}}>
                        <div style={{ height: '100%',width:'100%', display:'flex',justifyContent:'flex-end',alignItems:'flex-start',flexWrap:'wrap',marginTop:'3%'}}>
                            {showCards()}
                        </div>
                        <Divider sx={{fontWeight:'bold'}}/>
                        {/* <Sanad/>
                        <Divider sx={{fontWeight:'bold'}}/>
                        <div style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <AboutUs data={aboutQues}/>
                        </div> */}
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction} style={{height:'100%',width:'100%',}}>
                        <Box style={{ height: '100%',width:'100%', display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
                            <BaseCard title={data[ind].name} iconType={'arrow-left'} right={true} onClick={handleChange}>
                            <div style={{backgroundColor:'rgb(250,251,251)',padding:20,borderRadius:20}}>
                                <Services data={data[ind].services}/>
                            </div>
                            </BaseCard>
                        </Box>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    </div>
  );
}