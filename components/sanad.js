import Typography from '@mui/material/Typography';

export default function Sanad(props){
    return(
        <div style={{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{backgroundColor:'#fff',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column',marginTop:'2%',marginBottom:'2%',}}>
                <div
                    style={{
                        height:'25vh',
                        width:'50vh',
                        backgroundImage:'url("/images/sanad.jpg")',
                        backgroundSize:'contain',
                        backgroundRepeat:'no-repeat'
                    }}
                />
                <Typography variant="h4" sx={{width:'50vh',textAlign:'center',verticalAlign:'center'}}>يرجى مسح الكود لتفعيل دورك</Typography>
            </div>
        </div>
    )
}