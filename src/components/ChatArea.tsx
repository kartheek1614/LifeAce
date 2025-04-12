
import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolsSection from './ToolsSection';

interface ChatAreaProps {
  sidebarCollapsed: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({ sidebarCollapsed }) => {
  return (
    <div className={`flex-1 h-screen flex flex-col bg-lifeace-light overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <div></div>
        <div></div> {/* Removed LIFEACE text from top-right */}
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <div className="mb-2">
            <img 
              src="/lovable-uploads/fab9f198-772f-4d1c-bcc5-21cd9b3c15b0.png" 
              alt="Dhanvantri Logo" 
              className="h-20 w-auto"
            />
          </div>
          
          <div className="flex items-center mb-10">
            <span className="text-lifeace-blue font-bold text-xl">LIFE</span>
            <span className="text-lifeace-orange font-bold text-xl">ACE</span>
          </div>
          
          <h1 className="text-2xl text-gray-600 mb-12">How can I help you today?</h1>
          
          <div className="w-full relative mb-16">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center border">
                <Plus className="h-3 w-3 text-lifeace-orange" />
              </div>
            </div>
            <input
              type="text"
              placeholder="Ask a medical query..."
              className="w-full bg-gray-100 border border-gray-200 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-lifeace-blue"
            />
          </div>
          
          <ToolsSection />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
