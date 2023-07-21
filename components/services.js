import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

export default function Services({data}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const showAlerts = (alerts) => {
    return alerts.map(alert => {
        return(
            <Alert severity="warning">{alert}</Alert>
        )
    })
  }

  const NeededPapers = ({papers}) => {
    
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box sx={{maxWidth:'50%', width:'25%'}} dir="ltr">
          <Stepper activeStep={activeStep} orientation="vertical">
            {papers.map((paper, index) => (
              <Step key={paper.label}>
                <StepLabel
                  optional={
                    index === papers.length -1 ? (
                      <Typography variant="caption">الوثيقة الاخيرة</Typography>
                    ) : null
                  }
                >
                  {paper.label}
                </StepLabel>
                <StepContent>
                  <Typography>{paper.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        style={{background:'#1976d2'}}
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === papers.length - 1 ? 'النهاية' : 'التالي'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        الرجوع
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === papers.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                اعادة الخطوات
              </Button>
            </Paper>
          )}
        </Box>
      );
  }

  const showServices = () =>{
    return data.map((ser,index) => {
        return (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {ser.serviceName}
            </Typography>
            <Chip label="اضغط للمزيد" />
            </div>
            </AccordionSummary>
            <AccordionDetails>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {showAlerts(ser.notes)}
                <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <NeededPapers papers={ser.neededPapers}/>
                </div>
            </Stack>
            </AccordionDetails>
        </Accordion>
        )
    })
  }
  return (
    <div>
        {showServices()}
    </div>
  );
}