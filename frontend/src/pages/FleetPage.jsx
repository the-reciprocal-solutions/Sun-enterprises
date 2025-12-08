import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Check, ArrowRight, Fuel, Wind, Music2, Car } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { fleet, companyInfo } from '../data/mock';

const FleetPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-sky-50/50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Our Fleet</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Premium Vehicles for
            <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
              Every Requirement
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From compact sedans for daily commutes to spacious mini buses for team outings, 
            we have the right vehicle for your corporate travel needs.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((vehicle) => (
              <Card key={vehicle.id} className="card-hover overflow-hidden border-0 shadow-lg">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-sky-500 to-teal-500 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                      {vehicle.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">{vehicle.model}</h3>
                    <div className="flex items-center space-x-1 text-sky-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{vehicle.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-sm mb-4">
                    <span className="font-medium">Ideal for:</span> {vehicle.ideal}
                  </p>
                  
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm text-slate-600 mb-3 font-medium">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center space-x-1 bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full"
                        >
                          <Check className="w-3 h-3 text-teal-500" />
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Fleet Standards</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What You Can Expect
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Car, title: 'Well-Maintained', desc: 'Regular servicing and inspection of all vehicles' },
              { icon: Wind, title: 'AC Equipped', desc: 'Climate-controlled comfort for all journeys' },
              { icon: Fuel, title: 'Clean & Sanitized', desc: 'Hygiene protocols followed for every trip' },
              { icon: Music2, title: 'Modern Amenities', desc: 'Music systems and charging ports available' },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-sky-100 to-teal-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Quick Comparison</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Choose the Right Vehicle
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 text-left font-semibold">Category</th>
                  <th className="p-4 text-left font-semibold">Model</th>
                  <th className="p-4 text-left font-semibold">Capacity</th>
                  <th className="p-4 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {fleet.map((vehicle, index) => (
                  <tr key={vehicle.id} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-4 border-b border-slate-100">
                      <span className="font-medium text-sky-600">{vehicle.category}</span>
                    </td>
                    <td className="p-4 border-b border-slate-100 text-slate-800">{vehicle.model}</td>
                    <td className="p-4 border-b border-slate-100 text-slate-600">{vehicle.capacity}</td>
                    <td className="p-4 border-b border-slate-100 text-slate-600">{vehicle.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sky-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to Book?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us to discuss your vehicle requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-sky-600 hover:bg-slate-50 px-8 btn-hover-scale">
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${companyInfo.mobile[0]}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-8">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;
