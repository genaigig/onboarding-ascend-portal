
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const NewJoinerDashboard = () => {
  const joinerName = "Sarah Mitchell";
  const completionPercentage = 40;
  const completedTasks = 4;
  const totalTasks = 10;

  const onboardingTasks = [
    {
      id: 1,
      title: "Upload Government ID",
      status: "complete",
      dueDate: "2024-01-15",
      action: "View"
    },
    {
      id: 2,
      title: "Fill Personal Information Form",
      status: "complete",
      dueDate: "2024-01-15",
      action: "View"
    },
    {
      id: 3,
      title: "Upload Proof of Address",
      status: "pending",
      dueDate: "2024-01-16",
      action: "Under Review"
    },
    {
      id: 4,
      title: "Complete Bank Details Form",
      status: "action-required",
      dueDate: "2024-01-16",
      action: "Update Required"
    },
    {
      id: 5,
      title: "Company Policy Training",
      status: "not-started",
      dueDate: "2024-01-18",
      action: "Start Training"
    },
    {
      id: 6,
      title: "IT Security Training",
      status: "not-started",
      dueDate: "2024-01-20",
      action: "Start Training"
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      'complete': 'status-badge status-approved',
      'pending': 'status-badge status-pending',
      'action-required': 'status-badge status-rejected',
      'not-started': 'status-badge status-not-started'
    };

    const labels = {
      'complete': 'Complete',
      'pending': 'Pending Review',
      'action-required': 'Action Required',
      'not-started': 'Not Started'
    };

    return <span className={styles[status as keyof typeof styles]}>{labels[status as keyof typeof labels]}</span>;
  };

  const getActionButton = (task: any) => {
    const variants: any = {
      'complete': 'secondary',
      'pending': 'secondary',
      'action-required': 'destructive',
      'not-started': 'default'
    };

    return (
      <Button 
        size="sm" 
        variant={variants[task.status]}
        className="transition-all duration-200 hover:scale-105"
      >
        {task.action}
      </Button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-onboard-blue-50 via-white to-onboard-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome, {joinerName}!</h1>
              <p className="text-gray-600 mt-1">Let's get you set up and ready to go</p>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Start Date: Jan 15, 2024</span>
                <span>•</span>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-semibold">Your Progress</CardTitle>
                <CardDescription>Onboarding completion status</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - completionPercentage / 100)}`}
                      className="text-onboard-blue-500 transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-onboard-blue-600">{completionPercentage}%</div>
                      <div className="text-xs text-gray-500">Complete</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    {completedTasks} of {totalTasks} tasks completed
                  </div>
                  <Progress value={completionPercentage} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tasks List */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Your Onboarding Checklist</CardTitle>
                <CardDescription>Complete these tasks to finish your onboarding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {onboardingTasks.map((task, index) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {task.status === 'complete' ? (
                              <div className="w-6 h-6 bg-onboard-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900">{task.title}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              {getStatusBadge(task.status)}
                              <span className="text-xs text-gray-500">Due: {task.dueDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {getActionButton(task)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJoinerDashboard;
