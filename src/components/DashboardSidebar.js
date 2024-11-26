import React from 'react';

const DashboardSidebar = ({ setShowProfileSettings }) => {
  return (
    <aside className="dashboard-sidebar">
      <ul>
        <li>
          <button onClick={() => setShowProfileSettings(false)}>Dashboard Overview</button>
        </li>
        <li>
          <button onClick={() => setShowProfileSettings(true)}>Profile Settings</button>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;