
import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import NewJoinerDashboard from '@/components/NewJoinerDashboard';
import DocumentUpload from '@/components/DocumentUpload';
import FormFilling from '@/components/FormFilling';
import ManagerDashboard from '@/components/ManagerDashboard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentView, setCurrentView] = useState('login');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <LoginPage />;
      case 'new-joiner':
        return <NewJoinerDashboard />;
      case 'documents':
        return <DocumentUpload />;
      case 'forms':
        return <FormFilling />;
      case 'manager':
        return <ManagerDashboard />;
      default:
        return <LoginPage />;
    }
  };

  if (currentView === 'login') {
    return (
      <div>
        {renderCurrentView()}
        {/* Demo Navigation - Hidden in login view */}
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl border space-y-2 opacity-80 hover:opacity-100 transition-opacity">
          <p className="text-xs text-gray-600 font-semibold mb-2">Demo Navigation:</p>
          <div className="flex flex-col space-y-1">
            <Button size="sm" variant="outline" onClick={() => setCurrentView('new-joiner')}>
              New Joiner Dashboard
            </Button>
            <Button size="sm" variant="outline" onClick={() => setCurrentView('documents')}>
              Document Upload
            </Button>
            <Button size="sm" variant="outline" onClick={() => setCurrentView('forms')}>
              Form Filling
            </Button>
            <Button size="sm" variant="outline" onClick={() => setCurrentView('manager')}>
              Manager Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderCurrentView()}
      {/* Navigation Bar for other views */}
      <div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border space-x-2 flex items-center">
        <Button size="sm" variant={currentView === 'login' ? 'default' : 'outline'} onClick={() => setCurrentView('login')}>
          Login
        </Button>
        <Button size="sm" variant={currentView === 'new-joiner' ? 'default' : 'outline'} onClick={() => setCurrentView('new-joiner')}>
          Joiner
        </Button>
        <Button size="sm" variant={currentView === 'documents' ? 'default' : 'outline'} onClick={() => setCurrentView('documents')}>
          Docs
        </Button>
        <Button size="sm" variant={currentView === 'forms' ? 'default' : 'outline'} onClick={() => setCurrentView('forms')}>
          Forms
        </Button>
        <Button size="sm" variant={currentView === 'manager' ? 'default' : 'outline'} onClick={() => setCurrentView('manager')}>
          Manager
        </Button>
      </div>
    </div>
  );
};

export default Index;
