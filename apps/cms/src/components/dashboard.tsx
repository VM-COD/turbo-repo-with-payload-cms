import React from 'react';
import Card from "@repo/ui/card";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="gutter--left gutter--right dashboard__wrap">
        <div className="dashboard__group">
          <h2 className="dashboard__label">Dashboard</h2>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

