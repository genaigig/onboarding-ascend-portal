
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ManagerDashboard = () => {
  const newJoiners = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Software Engineer",
      startDate: "Jan 15, 2024",
      progress: 75,
      pendingItems: 2,
      status: "active"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Product Designer",
      startDate: "Jan 20, 2024",
      progress: 40,
      pendingItems: 5,
      status: "active"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Data Analyst",
      startDate: "Jan 25, 2024",
      progress: 90,
      pendingItems: 1,
      status: "active"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Marketing Specialist",
      startDate: "Feb 01, 2024",
      progress: 20,
      pendingItems: 8,
      status: "upcoming"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "text-onboard-green-600";
    if (progress >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusBadge = (status: string) => {
    return status === "active" ? 
      <span className="status-badge status-approved">Active</span> :
      <span className="status-badge status-pending">Upcoming</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-onboard-blue-50 via-white to-onboard-green-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manager Dashboard</h1>
              <p className="text-gray-600 mt-1">Monitor and manage your team's onboarding progress</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                Export Report
              </Button>
              <Button className="bg-onboard-gradient hover:opacity-90">
                Add New Joiner
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Joiners</p>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                </div>
                <div className="w-12 h-12 bg-onboard-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-onboard-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Actions</p>
                  <p className="text-2xl font-bold text-yellow-600">16</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-onboard-green-600">1</p>
                </div>
                <div className="w-12 h-12 bg-onboard-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-onboard-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
                  <p className="text-2xl font-bold text-onboard-blue-600">56%</p>
                </div>
                <div className="w-12 h-12 bg-onboard-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-onboard-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Joiners List */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Your New Joiners</CardTitle>
            <CardDescription>Monitor onboarding progress and pending actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {newJoiners.map((joiner, index) => (
                <div
                  key={joiner.id}
                  className="flex items-center justify-between p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-onboard-blue-500 to-onboard-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {joiner.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{joiner.name}</h3>
                        {getStatusBadge(joiner.status)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{joiner.role}</span>
                        <span>•</span>
                        <span>Start Date: {joiner.startDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="text-center min-w-[120px]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className={`text-sm font-semibold ${getProgressColor(joiner.progress)}`}>
                          {joiner.progress}%
                        </span>
                      </div>
                      <Progress value={joiner.progress} className="h-2" />
                    </div>

                    <div className="text-center min-w-[100px]">
                      <div className="text-sm text-gray-500">Pending Actions</div>
                      <div className="text-lg font-semibold text-yellow-600">
                        {joiner.pendingItems}
                      </div>
                    </div>

                    <Button 
                      variant="default"
                      className="bg-onboard-gradient hover:opacity-90 transition-all duration-200"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;
