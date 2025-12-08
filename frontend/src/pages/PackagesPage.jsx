import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Car, Check, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { packages, fleet, companyInfo } from '../data/mock';

const PackagesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-sky-50/50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Hourly Packages</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Flexible Hourly
            <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
              Taxi Services in Chennai
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From 1 hour to full-day rentals, choose the package that fits your schedule. 
            Perfect for meetings, city tours, and local travel in Chennai.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`card-hover border-2 transition-all duration-300 ${
                  index === 3 ? 'border-sky-500 shadow-xl relative' : 'border-slate-100 shadow-sm'
                }`}
              >
                {index === 3 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-sky-500 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-slate-800">{pkg.name}</CardTitle>
                    <Clock className="w-5 h-5 text-sky-500" />
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                      {pkg.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-teal-500" />
                    <span>{pkg.kmIncluded} included</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Car className="w-5 h-5 text-teal-500" />
                    <span>{pkg.vehicleTypes.join(', ')}</span>
                  </div>
                  
                  <div className="flex items-start space-x-3 text-slate-600">
                    <Zap className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ideal for: {pkg.ideal}</span>
                  </div>
                  
                  <div className="border-t border-slate-100 pt-4 mt-4">
                    <Link to="/contact">
                      <Button 
                        className={`w-full ${
                          index === 3 
                            ? 'bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Package Inclusions</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                What's Included in Every Package
              </h2>
              
              <div className="space-y-4">
                {[
                  'Professional, verified driver',
                  'AC vehicle with clean interiors',
                  'Fuel cost within package limits',
                  'Unlimited stops within the area',
                  'Toll charges (where applicable)',
                  'GST included in final billing',
                  '24/7 customer support',
                  'GPS tracking for safety',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Extra Charges (If Applicable)</h3>
              <div className="space-y-4">
                {[
                  { item: 'Extra Kilometers', note: 'Charged per KM beyond package limit' },
                  { item: 'Extra Hours', note: 'Charged per hour beyond package duration' },
                  { item: 'Night Charges', note: 'Applicable between 11 PM - 6 AM' },
                  { item: 'Outstation Trips', note: 'Different rates for out-of-city travel' },
                  { item: 'Driver Allowance', note: 'For trips exceeding 12 hours' },
                ].map((charge, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-100 last:border-0">
                    <p className="font-medium text-slate-800">{charge.item}</p>
                    <p className="text-sm text-slate-500">{charge.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Vehicles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Vehicle Options</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Choose Your Vehicle
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              All packages are available with any of our fleet vehicles.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fleet.map((vehicle) => (
              <div key={vehicle.id} className="bg-slate-50 rounded-xl p-4 text-center hover:bg-sky-50 transition-colors">
                <Car className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                <p className="font-medium text-slate-800 text-sm">{vehicle.category}</p>
                <p className="text-xs text-slate-500">{vehicle.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              How to Book
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Package', desc: 'Select the hourly package that suits your travel needs' },
              { step: '02', title: 'Select Vehicle', desc: 'Pick from our range of sedans, SUVs, or mini buses' },
              { step: '03', title: 'Confirm Booking', desc: 'Contact us via phone, WhatsApp, or the enquiry form' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-teal-500 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sky-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Book Your Hourly Package Now
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us for instant booking and best rates in Chennai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-sky-600 hover:bg-slate-50 px-8 btn-hover-scale">
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${companyInfo.mobile[0]}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-8">
                Call: {companyInfo.mobile[0]}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
