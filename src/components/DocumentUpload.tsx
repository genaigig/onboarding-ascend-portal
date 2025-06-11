
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const DocumentUpload = () => {
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});

  const requiredDocuments = [
    {
      id: 'gov-id',
      title: 'Government ID',
      description: 'Passport, Driver\'s License, or National ID',
      status: 'approved',
      rejectionComment: null,
      fileName: 'passport_john_doe.pdf'
    },
    {
      id: 'proof-address',
      title: 'Proof of Address',
      description: 'Utility bill, Bank statement (within 3 months)',
      status: 'rejected',
      rejectionComment: 'Document is too blurry. Please upload a clearer image.',
      fileName: 'utility_bill.jpg'
    },
    {
      id: 'signed-offer',
      title: 'Signed Offer Letter',
      description: 'Your signed employment offer letter',
      status: 'pending',
      rejectionComment: null,
      fileName: 'offer_letter_signed.pdf'
    },
    {
      id: 'bank-void-check',
      title: 'Void Check or Bank Statement',
      description: 'For direct deposit setup',
      status: 'not-uploaded',
      rejectionComment: null,
      fileName: null
    },
    {
      id: 'emergency-contact',
      title: 'Emergency Contact Form',
      description: 'Completed emergency contact information',
      status: 'not-uploaded',
      rejectionComment: null,
      fileName: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <div className="w-8 h-8 bg-onboard-green-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'rejected':
        return (
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        );
      case 'pending':
        return (
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
        );
    }
  };

  const handleFileUpload = (documentId: string, file: File) => {
    console.log(`Uploading ${file.name} for ${documentId}`);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(prev => ({ ...prev, [documentId]: progress }));
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadProgress(prev => ({ ...prev, [documentId]: 0 }));
        }, 1000);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-onboard-blue-50 via-white to-onboard-green-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Document Upload</h1>
              <p className="text-gray-600 mt-1">Upload all required documents to complete your onboarding</p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              ← Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {requiredDocuments.map((document, index) => (
            <Card 
              key={document.id} 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {getStatusIcon(document.status)}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{document.title}</h3>
                      <span className={`status-badge ${
                        document.status === 'approved' ? 'status-approved' :
                        document.status === 'rejected' ? 'status-rejected' :
                        document.status === 'pending' ? 'status-pending' :
                        'status-not-started'
                      }`}>
                        {document.status === 'not-uploaded' ? 'Not Uploaded' :
                         document.status === 'pending' ? 'Pending Review' :
                         document.status === 'approved' ? 'Approved' :
                         'Rejected'}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{document.description}</p>
                    
                    {document.fileName && (
                      <div className="flex items-center space-x-2 mb-3">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm text-gray-700">{document.fileName}</span>
                      </div>
                    )}
                    
                    {document.rejectionComment && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                        <div className="flex">
                          <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-red-800">Rejection Reason:</h4>
                            <p className="text-sm text-red-700 mt-1">{document.rejectionComment}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {uploadProgress[document.id] > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Uploading...</span>
                          <span className="text-sm text-gray-600">{uploadProgress[document.id]}%</span>
                        </div>
                        <Progress value={uploadProgress[document.id]} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex space-x-3">
                      <div className="flex-1">
                        <input
                          type="file"
                          id={`file-${document.id}`}
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(document.id, file);
                          }}
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        />
                        <label
                          htmlFor={`file-${document.id}`}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          {document.status === 'not-uploaded' ? 'Upload File' : 'Replace File'}
                        </label>
                      </div>
                      
                      {document.fileName && (
                        <Button variant="outline" size="sm">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button 
            size="lg" 
            className="bg-onboard-gradient hover:opacity-90 transition-all duration-200 px-8"
          >
            Complete Document Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
