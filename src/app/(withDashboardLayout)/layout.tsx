import DashBoardDrawer from '@/components/Dashboard/DashboardDrawer/DashboardDrawer';
import React from 'react';

const DashBoardLayout = ({children}:{children:React.ReactNode}) => {
  return <DashBoardDrawer>{children}</DashBoardDrawer>
};

export default DashBoardLayout;