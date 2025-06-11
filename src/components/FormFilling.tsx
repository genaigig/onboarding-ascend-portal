
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FormFilling = () => {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const [bankData, setBankData] = useState({
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    accountType: ''
  });

  const [emergencyData, setEmergencyData] = useState({
    contactName: '',
    relationship: '',
    phone: '',
    email: '',
    address: ''
  });

  const [formStatus, setFormStatus] = useState({
    personal: 'draft',
    bank: 'not-started',
    emergency: 'not-started'
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      'draft': 'status-badge status-not-started',
      'submitted': 'status-badge status-pending',
      'approved': 'status-badge status-approved',
      'not-started': 'status-badge status-not-started'
    };

    const labels = {
      'draft': 'Draft',
      'submitted': 'Submitted',
      'approved': 'Approved',
      'not-started': 'Not Started'
    };

    return <span className={styles[status as keyof typeof styles]}>{labels[status as keyof typeof labels]}</span>;
  };

  const handlePersonalSubmit = () => {
    setFormStatus(prev => ({ ...prev, personal: 'submitted' }));
    console.log('Personal form submitted:', personalData);
  };

  const handleBankSubmit = () => {
    setFormStatus(prev => ({ ...prev, bank: 'submitted' }));
    console.log('Bank form submitted:', bankData);
  };

  const handleEmergencySubmit = () => {
    setFormStatus(prev => ({ ...prev, emergency: 'submitted' }));
    console.log('Emergency form submitted:', emergencyData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-onboard-blue-50 via-white to-onboard-green-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Form Completion</h1>
              <p className="text-gray-600 mt-1">Fill out all required information forms</p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              ← Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-gray-200">
            <TabsTrigger value="personal" className="flex items-center space-x-2">
              <span>Personal Details</span>
              {getStatusBadge(formStatus.personal)}
            </TabsTrigger>
            <TabsTrigger value="bank" className="flex items-center space-x-2">
              <span>Bank Information</span>
              {getStatusBadge(formStatus.bank)}
            </TabsTrigger>
            <TabsTrigger value="emergency" className="flex items-center space-x-2">
              <span>Emergency Contacts</span>
              {getStatusBadge(formStatus.emergency)}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Personal Information
                  {getStatusBadge(formStatus.personal)}
                </CardTitle>
                <CardDescription>
                  Please provide your personal details for our records
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={personalData.firstName}
                      onChange={(e) => setPersonalData(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={personalData.lastName}
                      onChange={(e) => setPersonalData(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalData.email}
                      onChange={(e) => setPersonalData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="john.doe@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={personalData.phone}
                      onChange={(e) => setPersonalData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={personalData.dateOfBirth}
                    onChange={(e) => setPersonalData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={personalData.address}
                    onChange={(e) => setPersonalData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="123 Main Street"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={personalData.city}
                      onChange={(e) => setPersonalData(prev => ({ ...prev, city: e.target.value }))}
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={personalData.zipCode}
                      onChange={(e) => setPersonalData(prev => ({ ...prev, zipCode: e.target.value }))}
                      placeholder="10001"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select value={personalData.country} onValueChange={(value) => setPersonalData(prev => ({ ...prev, country: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline">Save Draft</Button>
                  <Button 
                    onClick={handlePersonalSubmit}
                    className="bg-onboard-gradient hover:opacity-90"
                  >
                    Submit for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bank">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Bank Information
                  {getStatusBadge(formStatus.bank)}
                </CardTitle>
                <CardDescription>
                  Provide your banking details for direct deposit setup
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name *</Label>
                  <Input
                    id="bankName"
                    value={bankData.bankName}
                    onChange={(e) => setBankData(prev => ({ ...prev, bankName: e.target.value }))}
                    placeholder="Chase Bank"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number *</Label>
                    <Input
                      id="accountNumber"
                      value={bankData.accountNumber}
                      onChange={(e) => setBankData(prev => ({ ...prev, accountNumber: e.target.value }))}
                      placeholder="************1234"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="routingNumber">Routing Number *</Label>
                    <Input
                      id="routingNumber"
                      value={bankData.routingNumber}
                      onChange={(e) => setBankData(prev => ({ ...prev, routingNumber: e.target.value }))}
                      placeholder="021000021"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountType">Account Type *</Label>
                  <Select value={bankData.accountType} onValueChange={(value) => setBankData(prev => ({ ...prev, accountType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Checking</SelectItem>
                      <SelectItem value="savings">Savings</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline">Save Draft</Button>
                  <Button 
                    onClick={handleBankSubmit}
                    className="bg-onboard-gradient hover:opacity-90"
                  >
                    Submit for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Emergency Contact
                  {getStatusBadge(formStatus.emergency)}
                </CardTitle>
                <CardDescription>
                  Provide emergency contact information for our records
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input
                      id="contactName"
                      value={emergencyData.contactName}
                      onChange={(e) => setEmergencyData(prev => ({ ...prev, contactName: e.target.value }))}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship *</Label>
                    <Select value={emergencyData.relationship} onValueChange={(value) => setEmergencyData(prev => ({ ...prev, relationship: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Phone Number *</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={emergencyData.phone}
                      onChange={(e) => setEmergencyData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+1 (555) 987-6543"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyEmail">Email Address</Label>
                    <Input
                      id="emergencyEmail"
                      type="email"
                      value={emergencyData.email}
                      onChange={(e) => setEmergencyData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="jane.doe@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyAddress">Address</Label>
                  <Input
                    id="emergencyAddress"
                    value={emergencyData.address}
                    onChange={(e) => setEmergencyData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="456 Oak Street, City, State 12345"
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline">Save Draft</Button>
                  <Button 
                    onClick={handleEmergencySubmit}
                    className="bg-onboard-gradient hover:opacity-90"
                  >
                    Submit for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FormFilling;
