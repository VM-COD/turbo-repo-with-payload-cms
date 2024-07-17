import React from 'react';
import Card from "@repo/ui/card";
import DatePickerInput from '@repo/ui/datepicker';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="gutter--left gutter--right dashboard__wrap">
        <div className="dashboard__group">
          <h2 className="dashboard__label pl-8">Dashboard</h2>
          <Card />
          <DatePickerInput></DatePickerInput>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

