
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { drawerItems } from '@/utils/drawerItems';
import { UserRole } from '@/types';
import SidebarItems from './SidebarItems';
import { getUserInfo } from '@/services/auth.services';
 

const Sidebar = () => {
  const [userRole, setUserRole]  = React.useState('');
  React.useEffect(() => {
    const {role} = getUserInfo();
    setUserRole(role)

  },[])
 
 return (
  <Box>
<Stack 

sx={{
    py:1,mt:1
}} direction='row' alignItems='center' justifyContent='center' gap={1} component={Link} href='/'>
    <Image src={assets.svgs.logo} width={40} height={40} alt='logo'/>
    <Typography variant='h6' component='h2'>Life Line Medical Center</Typography>

</Stack>
<List>
            {drawerItems(  userRole as UserRole).map((item, index) => (
              <SidebarItems key={index}   item={item}/>
            ))}
          </List>
  </Box>
 );
};

export default Sidebar;
