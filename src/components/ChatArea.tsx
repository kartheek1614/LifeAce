
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
        <div className="flex items-center gap-2">
          <span className="text-lifeace-blue font-bold">LIFE</span>
          <span className="text-lifeace-orange font-bold">ACE</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <div className="mb-6">
            <LogoIcon />
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

// Helper Logo Icon component
const LogoIcon = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 13.3333C45.5333 13.3333 50 17.8 50 23.3333C50 28.8667 45.5333 33.3333 40 33.3333C34.4667 33.3333 30 28.8667 30 23.3333C30 17.8 34.4667 13.3333 40 13.3333ZM40 33.3333C46.7333 33.3333 52.8 36.6 56.1333 41.5333C54.4 46.9333 50.2 51.1333 44.8 52.8667C43.2 53.3333 41.5333 53.6 39.8667 53.6C38.2 53.6 36.5333 53.3333 34.9333 52.8667C29.5333 51.1333 25.3333 46.9333 23.6 41.5333C26.9333 36.6 33 33.3333 39.7333 33.3333H40ZM54.6667 66.6667H25.3333V46.6667C25.3333 38.6 31.9333 32 40 32C48.0667 32 54.6667 38.6 54.6667 46.6667V66.6667Z" fill="#0D47A1"/>
        <path d="M26.6667 40C33.2961 40 38.6667 34.6294 38.6667 28C38.6667 21.3706 33.2961 16 26.6667 16C20.0373 16 14.6667 21.3706 14.6667 28C14.6667 34.6294 20.0373 40 26.6667 40Z" fill="#FF8A3D"/>
        <path d="M53.3333 40C59.9627 40 65.3333 34.6294 65.3333 28C65.3333 21.3706 59.9627 16 53.3333 16C46.7039 16 41.3333 21.3706 41.3333 28C41.3333 34.6294 46.7039 40 53.3333 40Z" fill="#FF8A3D"/>
        <path d="M40 53.3333C46.6294 53.3333 52 47.9627 52 41.3333C52 34.7039 46.6294 29.3333 40 29.3333C33.3706 29.3333 28 34.7039 28 41.3333C28 47.9627 33.3706 53.3333 40 53.3333Z" fill="#FF8A3D"/>
      </svg>
    </div>
    <div className="flex items-center mt-1">
      <span className="text-lifeace-blue font-bold text-lg">LIFE</span>
      <span className="text-lifeace-orange font-bold text-lg">ACE</span>
    </div>
  </div>
);

// Import ChevronDown
import { ChevronDown } from 'lucide-react';

export default ChatArea;
