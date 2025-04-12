
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatArea from '@/components/ChatArea';

const Index: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex w-full min-h-screen overflow-hidden">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
      />
      <ChatArea 
        sidebarCollapsed={sidebarCollapsed} 
      />
    </div>
  );
};

export default Index;
