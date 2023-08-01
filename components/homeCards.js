import styles from '@/styles/HomeCards.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

export default function HomeCards(){
    const router = useRouter()
    return (
        <div className={styles.body}>
        <Card sx={{ width: '30%' }} dir='rtl' onClick={() =>router.push('/services')}>
        <CardContent>
            <Typography gutterBottom variant="h5" sx={{textAlign:'center',verticalAlign:'center'}} component="div">
            الخدمات
            </Typography>
        </CardContent>
        <CardActions sx={{width:'100%'}}>
            <Button sx={{textAlign:'center',verticalAlign:'center',width:'100%'}} size="large">اضغط للمزيد <ArrowBackIcon style={{marginRight:10}}/></Button>
        </CardActions>
        </Card>
        <Card sx={{ width: '30%' }} dir='rtl' onClick={() =>router.push('/sanadqr')}>
        <CardContent>
            <Typography gutterBottom variant="h5" sx={{textAlign:'center',verticalAlign:'center'}} component="div">
            لتفعيل دورك
            </Typography>
        </CardContent>
        <CardActions sx={{width:'100%'}}>
            <Button sx={{textAlign:'center',verticalAlign:'center',width:'100%'}} size="large">اضغط للمزيد <ArrowBackIcon style={{marginRight:10}}/></Button>
        </CardActions>
        </Card>
        <Card sx={{ width: '30%' }} dir='rtl' onClick={() =>router.push('aboutus')}>
        <CardContent>
            <Typography gutterBottom variant="h5" sx={{textAlign:'center',verticalAlign:'center'}} component="div">
            عن المركز
            </Typography>
        </CardContent>
        <CardActions sx={{width:'100%'}}>
            <Button sx={{textAlign:'center',verticalAlign:'center',width:'100%'}} size="large">اضغط للمزيد <ArrowBackIcon style={{marginRight:10}}/></Button>
        </CardActions>
        </Card>
    </div>
    )
}