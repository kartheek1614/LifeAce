
import React from 'react';
import { 
  Plus, 
  Wrench, 
  FileText, 
  Calculator, 
  MessageSquareQuote, 
  PhoneCall, 
  MessagesSquare, 
  Compass,
  ChevronLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`h-screen bg-white border-r fixed left-0 transition-all duration-300 z-10 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center p-4 border-b">
        <div className="flex items-center gap-3">
          {collapsed ? (
            <img 
              src="/lovable-uploads/fab9f198-772f-4d1c-bcc5-21cd9b3c15b0.png" 
              alt="Dhanvantri Logo" 
              className="h-6 w-6"
            />
          ) : (
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/fab9f198-772f-4d1c-bcc5-21cd9b3c15b0.png" 
                alt="Dhanvantri Logo" 
                className="h-6 w-6"
              />
              <span className="font-semibold">Dhanvantri</span>
            </div>
          )}
        </div>
        <div className="ml-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className="h-8 w-8"
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
      
      <div className="p-3">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-start gap-3 mb-6"
        >
          <Plus className="h-4 w-4" />
          {!collapsed && <span>New Chat</span>}
        </Button>
        
        <div className="space-y-1">
          <div className="flex items-center gap-3 font-medium px-3 py-2">
            <Wrench className="h-4 w-4" />
            {!collapsed && <span>My Tools</span>}
          </div>
          
          <div className="pl-2">
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-start gap-3 py-2"
            >
              <FileText className="h-4 w-4" />
              {!collapsed && <span>My Health Journal</span>}
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-start gap-3 py-2"
            >
              <Calculator className="h-4 w-4" />
              {!collapsed && <span>BMI Calculator</span>}
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-start gap-3 py-2"
            >
              <MessageSquareQuote className="h-4 w-4" />
              {!collapsed && <span>Ask a Doctor</span>}
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-start gap-3 py-2"
            >
              <PhoneCall className="h-4 w-4" />
              {!collapsed && <span>Emergency Contacts</span>}
            </Button>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full flex items-center justify-start gap-3 mt-4 py-2"
        >
          <MessagesSquare className="h-4 w-4" />
          {!collapsed && <span>Chats</span>}
        </Button>
        
        <div className="mt-6">
          <div className="flex items-center gap-3 font-medium px-3 py-2">
            <Compass className="h-4 w-4" />
            {!collapsed && <span>Explore Tools</span>}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full p-3 border-t">
        <div className="space-y-2">
          <Button 
            variant="default" 
            className="w-full bg-lifeace-blue hover:bg-blue-800"
          >
            {collapsed ? <span>Log</span> : <span>Login</span>}
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
          >
            {collapsed ? <span>Sign</span> : <span>Sign up</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
