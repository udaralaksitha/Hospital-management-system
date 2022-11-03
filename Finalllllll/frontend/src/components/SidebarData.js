import { Icon } from '@material-ui/core'
import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TodayIcon from '@mui/icons-material/Today';
import SickIcon from '@mui/icons-material/Sick';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import InfoIcon from '@mui/icons-material/Info';

export const SidebarData= [

   {
       title:"Patient",
       icon:<InfoIcon />,
       link:"/patients"
       
    },
   
   {
      title:"Doctor",
      icon:<LocalHospitalIcon />,
      link:"/doctor"
   },
   
   {
       title:"Echanneling",
       icon:<TodayIcon />,
       link:"/echan"
    },
   
    {
       title:"Covid",
       icon:<SickIcon />,
       link:"/cpatients"
    },
    
    {
       title:"Operation",
       icon:<HealthAndSafetyIcon />,
       link:"/optheatre"
    },
    
    {
       title:"Lab",
       icon:<ScienceIcon />,
       link:"/labtest"
    } 
   ]
   
