import {useState} from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import BaseCard from './baseCard';

export default function AboutUs({data}) {
  // const theme = useTheme();
  // const [activeStep, setActiveStep] = useState(0);
  // const maxdata = data.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const showQuestions = () =>{
    return data.map((qs,index) => {
        return (
            <Accordion key={index} dir='rtl'>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {qs.label}
            </Typography>
            <Chip label="اضغط للمزيد" />
            </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                  {qs.description}
              </Typography>
            </AccordionDetails>
        </Accordion>
        )
    })
  }
  return (
    // <Box sx={{ maxWidth: '50%', flexGrow: 1, alignSelf:'center'}} dir='rtl'>
    //   <Paper
    //     square
    //     elevation={0}
    //     sx={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       height: 50,
    //       pl: 2,
    //       pr:2,
    //       bgcolor: 'background.default',
    //     }}
    //   >
    //     <Typography>{data[activeStep].label}</Typography>
    //   </Paper>
    //   <Box sx={{ height: 200, width: '100%', p: 2,bgcolor: 'background.default', }}>
    //     {data[activeStep].description}
    //   </Box>
    //   <Divider sx={{fontWeight:'bold'}}/>
    //   <MobileStepper
    //     variant="text"
    //     steps={maxdata}
    //     position="static"
    //     activeStep={activeStep}
    //     nextButton={
    //       <Button
    //         size="small"
    //         onClick={handleNext}
    //         disabled={activeStep === maxdata - 1}
    //       >
    //         التالي
    //         {theme.direction === 'ltr' ? (
    //           <KeyboardArrowLeft />
    //         ) : (
    //           <KeyboardArrowRight />
    //         )}
    //       </Button>
    //     }
    //     backButton={
    //       <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
    //         {theme.direction === 'ltr' ? (
    //           <KeyboardArrowRight />
    //         ) : (
    //           <KeyboardArrowLeft />
    //         )}
    //         السابق
    //       </Button>
    //     }
    //   />
    // </Box>
    <div style={{width:'60%',marginTop:'3%'}}>
      <BaseCard title={'عن المركز'}>
        {showQuestions()}
      </BaseCard>
    </div>
  );
}