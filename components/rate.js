import { forwardRef,useState } from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import FeatherIcon from "feather-icons-react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import * as apis from '@/apis/apis'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Rate(props){

    const router = useRouter()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const rate = async(value) => {
        await apis.saveRate(value)
        handleClickOpen()
        setTimeout(() => {
            handleClose()
            setTimeout(() => {
                router.push('/')
            },1000)
        },2000)
    }
    
    return(
        <div style={{height:'100%', width:'100%',position:'relative',backgroundColor:'rgb(250,250,250)'}}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <Typography variant="h6" sx={{textAlign:'center',verticalAlign:'center'}}>شكراعلى تقييم مركز الخدمات الحكومي</Typography>
                </DialogContent>
            </Dialog>
            <div style={{height:'85%', width:'100%', position:'absolute', top:'15%'}}>
                <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
                    <div style={{height:'35%',width:'90%',display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'3%'}}>
                        <div
                            style={{
                                height:'30vh',
                                width:'30vh',
                                backgroundImage:'url("/images/mdc.jpg")',
                                backgroundSize:'contain',
                                backgroundRepeat:'no-repeat'
                            }}
                        />
                        <Typography variant="h5" sx={{width:'30vh',textAlign:'center',verticalAlign:'center'}}>رضاك يهمنا</Typography>
                        <div
                            style={{
                                height:'30vh',
                                width:'30vh',
                                backgroundImage:'url("/images/gov.jpg")',
                                backgroundSize:'contain',
                                backgroundRepeat:'no-repeat'
                            }}
                        />
                    </div>
                    <div style={{height:'35%',width:'90%',display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'3%'}}>
                        <Button
                            onClick={() => rate(1)}
                        >
                            <FeatherIcon
                                icon="frown"
                                width="25vh"
                                height="25vh"
                                style={{stroke: "red"}}
                            />
                        </Button>
                        <Button
                            onClick={() => rate(3)}
                        >
                            <FeatherIcon
                                icon="meh"
                                width="25vh"
                                height="25vh"
                                style={{stroke: "orange"}}
                            />
                        </Button>
                        <Button
                            onClick={() => rate(5)}
                        >
                            <FeatherIcon
                                icon="smile"
                                width="25vh"
                                height="25vh"
                                style={{stroke: "green"}}
                            />
                        </Button>
                    </div>
                    <div style={{height:'35%',width:'90%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:'3%'}}>
                        <Typography variant="h5" sx={{width:'100%',textAlign:'center',verticalAlign:'center',marginBottom:'20px'}}>رايك مهم لتحسين مستوى الخدمة</Typography>
                        <Typography sx={{width:'100%',textAlign:'center',verticalAlign:'center',fontSize:'15px'}}>مركز الاتصال الوطني 065008080</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}