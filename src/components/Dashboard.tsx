import { Button } from './ui/button';
import { LogOut, Home, UserCircle, Settings, ExternalLink, Menu, X } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useState } from 'react';
import { DashboardHome } from './DashboardHome';
import { UsersPage } from './UsersPage';
import { SettingsPage } from './SettingsPage';

interface DashboardProps {
  onLogout: () => void;
}

type PageType = 'home' | 'users' | 'settings';

// Dados das empresas
const companiesData = {
  quantumcert: {
    name: 'QuantumCert',
    url: 'https://quantumcert.vercel.app/'
  },
  bikilock: {
    name: 'BikiLock',
    url: 'https://bike-lock-iota.vercel.app/'
  }
};

export function Dashboard({ onLogout }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'home':
        return 'Dashboard';
      case 'users':
        return 'Usuários';
      case 'settings':
        return 'Configurações';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-black border-r border-gray-800 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          {/* Header Sidebar */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-white">Nave Mãe 2.0</h2>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-gray-900"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <Button 
              className={`w-full justify-start ${currentPage === 'home' ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              onClick={() => handlePageChange('home')}
            >
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button 
              className={`w-full justify-start ${currentPage === 'users' ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              onClick={() => handlePageChange('users')}
            >
              <UserCircle className="w-4 h-4 mr-2" />
              Usuários
            </Button>
            <Button 
              className={`w-full justify-start ${currentPage === 'settings' ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              onClick={() => handlePageChange('settings')}
            >
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
          </nav>

          {/* Companies Section */}
          <div className="p-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 mb-3">EMPRESAS</p>
            <div className="space-y-2">
              <a href={companiesData.quantumcert.url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full justify-between bg-gray-900 text-white hover:bg-gray-800 border border-gray-700">
                  <span>QuantumCert</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              <a href={companiesData.bikilock.url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full justify-between bg-gray-900 text-white hover:bg-gray-800 border border-gray-700">
                  <span>BikiLock</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* User Info */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <Avatar>
                <AvatarFallback className="bg-white text-black">L</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">Lucas</p>
                <p className="text-xs text-gray-400 truncate">Admin</p>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-gray-900 text-white hover:bg-gray-800 border border-gray-700"
              onClick={onLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-black border-b border-gray-800 sticky top-0 z-10">
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-gray-900"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl text-white">{getPageTitle()}</h1>
            </div>
            <div className="w-10 lg:hidden"></div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 overflow-auto">
          {currentPage === 'home' && <DashboardHome />}
          {currentPage === 'users' && <UsersPage />}
          {currentPage === 'settings' && <SettingsPage />}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
