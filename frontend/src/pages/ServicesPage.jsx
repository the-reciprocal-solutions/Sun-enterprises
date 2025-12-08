import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Plane, Building2, Headphones, CheckCircle, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services, companyInfo } from '../data/mock';

const iconMap = {
  Calendar: Calendar,
  Clock: Clock,
  Users: Users,
  Plane: Plane,
  Building: Building2,
  Headphones: Headphones,
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-sky-50/50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Our Services</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Comprehensive Corporate
            <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
              Travel Solutions
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From daily commutes to event transportation, we offer end-to-end corporate travel services 
            tailored for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Clock;
              return (
                <Card key={service.id} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-teal-100 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                    <Link to="/contact" className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700 transition-colors">
                      Enquire Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Monthly Contracts */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-flex items-center space-x-2 text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">
                <Calendar className="w-4 h-4" />
                <span>Monthly Contracts</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Dedicated Fleet for Your Organization
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our monthly contract services provide dedicated vehicles and drivers for your organization, ensuring 
                consistent and reliable transportation for your employees throughout the month.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Fixed monthly rates with no hidden charges',
                  'Dedicated drivers familiar with your routes',
                  'Flexible vehicle allocation based on demand',
                  'Monthly billing with detailed trip reports',
                  'Dedicated account manager for coordination',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white">
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contract Benefits</h3>
              <div className="space-y-4">
                {[
                  { title: 'Cost Savings', desc: '15-20% lower than on-demand rates' },
                  { title: 'Priority Service', desc: 'Guaranteed vehicle availability' },
                  { title: 'Custom Routes', desc: 'Optimized pickup/drop schedules' },
                  { title: 'Flexible Terms', desc: '3, 6, or 12-month contracts' },
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-white/80 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Employee Transportation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?w=800"
                alt="Employee Transportation"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center space-x-2 text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">
                <Users className="w-4 h-4" />
                <span>Employee Transportation</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Safe & Reliable Staff Transport
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive pick-up and drop services for your employees with GPS tracking, 
                real-time updates, and dedicated support for HR teams.
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time GPS tracking for all trips',
                  'Employee roster management',
                  'Shift-based scheduling support',
                  'Female employee safety measures',
                  'Automated attendance tracking',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Airport Transfers */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center space-x-2 text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">
                <Plane className="w-4 h-4" />
                <span>Airport Transfers</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Executive Airport Services
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Premium airport pick-up and drop services for executives and business travelers. 
                Flight tracking ensures our drivers are always on time.
              </p>
              <ul className="space-y-3">
                {[
                  'Flight tracking for on-time pickups',
                  'Meet & greet services available',
                  'Complimentary waiting time for delays',
                  'Premium vehicles for executives',
                  'All Chennai Airport terminals covered',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Chennai Airport Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Domestic Terminal</h4>
                    <p className="text-slate-400 text-sm">Terminal 1 & Kamaraj Domestic Terminal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">International Terminal</h4>
                    <p className="text-slate-400 text-sm">Anna International Terminal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Private Jets</h4>
                    <p className="text-slate-400 text-sm">General Aviation Terminal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sky-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Need a Customized Solution?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us to discuss your specific corporate travel requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-sky-600 hover:bg-slate-50 px-8 btn-hover-scale">
                Contact Us
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

export default ServicesPage;
