import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InfoDialogs from './infoDialg';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 25;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}%)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: `${drawerWidth}%`,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const navItems = [{name:'Home',href:'/'},{name:'Services',href:'services'},{name:'Sanad QR',href:'/sanadqr'}, {name:'About us',href:'/aboutus'}];

export default function CustomDrawer() {

  const router = useRouter()

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeBtu, setActiveBtu] = useState(0);
  const [openDia, setOpenDia] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    router.push('/')
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {openDia?
        <InfoDialogs open={openDia} setOpen={setOpenDia} />
      :
        <></>
      }
      <AppBar position="fixed" open={open} style={{background: 'rgb(1,1,13)',background: 'linear-gradient(90deg, rgba(1,1,13,1) 17%, rgba(242,7,7,1) 41%, rgba(9,131,48,1) 85%)'}}>
        <Toolbar style={{height:'15vh',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Typography variant="h6" noWrap sx={{ pt:'1%', pb:'1%' }} component="div">
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                <Avatar
                        src="/images/gov.jpg"
                        sx={{ width: '8vh', height: '8vh' }}
                />
                <Button size="large" sx={{flexGrow: 1}} style={{color:'#fff'}} dir="rtl"
                    onClick={() => handleChange()}
                >
                  الرجوع
                    <ArrowBackIcon style={{marginRight:10}}/>
                </Button>
            </div>
          </Typography>
          <div style={{marginLeft:20}}>
              مركز الخدمات الحكومي
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.name} sx={{ color: '#fff' }} onClick={() => router.push(item.href)}>
                  {item.name}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              size='large'
              sx={{ ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: `${drawerWidth}%`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${drawerWidth}%`,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{textAlign:'center'}}>
            خيارات اللغة
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {['عربي', 'English', ].map((text,index) => (
            <ListItem key={text}>
                {index == activeBtu?
                    <ListItemButton 
                        style={{padding:5,background: '#64d98a',borderRadius:10}}
                        onClick={() => {setActiveBtu(index),setOpen(false)}}
                    >
                        <ListItemText primary={text} style={{color:'#fff',textAlign:'center'}}/>
                    </ListItemButton>
                :
                    <ListItemButton 
                        style={{padding:5,borderRadius:10}}
                        onClick={() => setOpenDia(true)}
                    >
                        <ListItemText primary={text} style={{color:'#64d98a',textAlign:'center'}}/>
                    </ListItemButton>
                }
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}