import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { companyInfo, fleet } from '../data/mock';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vehicleType: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (save to localStorage for demo)
    setTimeout(() => {
      const existingQuotes = JSON.parse(localStorage.getItem('sunEnterprisesQuotes') || '[]');
      const newQuote = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      };
      existingQuotes.push(newQuote);
      localStorage.setItem('sunEnterprisesQuotes', JSON.stringify(existingQuotes));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Quote request submitted successfully! We will contact you shortly.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          vehicleType: '',
          serviceType: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-sky-50/50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Contact Us</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Get in Touch
            <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
              With Us Today
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our corporate travel services? Need a customized quote? 
            We're here to help you find the perfect transportation solution.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-sm bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Office Address</h3>
                        <p className="text-slate-600 text-sm">{companyInfo.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Phone Numbers</h3>
                        <a href={`tel:${companyInfo.landline}`} className="text-slate-600 text-sm block hover:text-sky-600 transition-colors">
                          {companyInfo.landline} (Landline)
                        </a>
                        {companyInfo.mobile.map((num) => (
                          <a key={num} href={`tel:${num}`} className="text-slate-600 text-sm block hover:text-sky-600 transition-colors">
                            {num} (Mobile)
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Email Address</h3>
                        <a href={`mailto:${companyInfo.email}`} className="text-slate-600 text-sm hover:text-sky-600 transition-colors">
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Working Hours</h3>
                        <p className="text-slate-600 text-sm">24/7 Service Available</p>
                        <p className="text-slate-500 text-xs mt-1">Office: Mon-Sat, 9AM-7PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">GST Number</h3>
                        <p className="text-slate-600 text-sm font-mono">{companyInfo.gst}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Request a Quote
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and our team will get back to you with a customized quote.
                  </p>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Thank You!</h3>
                      <p className="text-slate-600">Your quote request has been submitted. We'll contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="h-12"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                            className="h-12"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                            className="h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Vehicle Type</Label>
                          <Select onValueChange={(value) => handleSelectChange('vehicleType', value)}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                            <SelectContent>
                              {fleet.map((vehicle) => (
                                <SelectItem key={vehicle.id} value={vehicle.category}>
                                  {vehicle.category} - {vehicle.model}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Service Type</Label>
                          <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="monthly">Monthly Contract</SelectItem>
                              <SelectItem value="daily">Daily On-Demand</SelectItem>
                              <SelectItem value="hourly">Hourly Package</SelectItem>
                              <SelectItem value="airport">Airport Transfer</SelectItem>
                              <SelectItem value="employee">Employee Transportation</SelectItem>
                              <SelectItem value="event">Event Transportation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Requirements</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements (number of vehicles, duration, pickup locations, etc.)"
                          rows={4}
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white btn-hover-scale"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="w-5 h-5 mr-2" />
                            Submit Quote Request
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Our Location</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Visit Our Office
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Located in Kolathur, Chennai - easily accessible from all major areas of the city.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              title="Sun Enterprises Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8394534761937!2d80.21305797486098!3d13.120853387220098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6a6f27e1!2sKolathur%2C%20Chennai%2C%20Tamil%20Nadu%20600099!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
