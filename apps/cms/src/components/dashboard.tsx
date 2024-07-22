import React from 'react';
import { Card } from "@repo/ui/atoms/Card";
import { Icon } from "@repo/ui/atoms/Icon";
import { Icons, IconSize } from "@repo/ui/atoms";
// import DatePickerInput from '@repo/ui/datepicker';

function Dashboard() {
  // const  Card = await import('@repo/ui/card');
  return (
    <div className="dashboard">
      <div className="gutter--left gutter--right dashboard__wrap">
        <div className="dashboard__group">
          <h2 className="dashboard__label pl-8">Dashboard</h2>
          <Card heading='Card' type='primary' />
          <Icon name={Icons.BULB_ICON} size={IconSize.sm} cssClasses='pl-8' />
          {/* <DatePickerInput></DatePickerInput> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

