import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star, Shield, Clock, MapPin, Users, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, services, fleet, stats, testimonials, whyChooseUs } from '../data/mock';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/50 to-teal-50/30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Trusted by 500+ Corporate Clients</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Premium Corporate
                <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                  Travel Services
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Chennai's most reliable corporate cab service for MNCs. From sedans to mini buses, 
                we provide end-to-end employee transportation solutions with 24/7 support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 btn-hover-scale">
                    Get a Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/fleet">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 px-8">
                    View Our Fleet
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-10 pt-8 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-teal-400 border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-medium">{String.fromCharCode(64 + i)}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-slate-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532968899863-5b52ef155913?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYXZlbHxlbnwwfHx8fDE3NjUxOTY4MDV8MA&ixlib=rb-4.1.0&q=85&w=800"
                  alt="Corporate Travel"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">24/7</p>
                    <p className="text-sm text-slate-500">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our Corporate Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored for modern businesses and their employees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="card-hover border-0 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-teal-100 rounded-lg flex items-center justify-center mb-4">
                    {service.icon === 'Calendar' && <Clock className="w-6 h-6 text-sky-600" />}
                    {service.icon === 'Clock' && <Clock className="w-6 h-6 text-sky-600" />}
                    {service.icon === 'Users' && <Users className="w-6 h-6 text-sky-600" />}
                    {service.icon === 'Plane' && <MapPin className="w-6 h-6 text-sky-600" />}
                    {service.icon === 'Building' && <Users className="w-6 h-6 text-sky-600" />}
                    {service.icon === 'Headphones' && <Clock className="w-6 h-6 text-sky-600" />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                View All Services
                <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Our Fleet</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Vehicles for Every Need
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From compact sedans to spacious mini buses, choose the perfect vehicle for your corporate requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.slice(0, 3).map((vehicle) => (
              <Card key={vehicle.id} className="card-hover overflow-hidden border-0 shadow-sm">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-slate-700">{vehicle.category}</span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">{vehicle.model}</h3>
                  <p className="text-sky-600 text-sm font-medium mb-2">{vehicle.capacity}</p>
                  <p className="text-slate-500 text-sm">{vehicle.ideal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/fleet">
              <Button className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white btn-hover-scale">
                View Full Fleet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-400 font-medium text-sm tracking-wide uppercase mb-3">Why Sun Enterprises</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              The Preferred Choice for Corporates
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.designation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sky-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to Simplify Your Corporate Travel?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get in touch with us today for a customized quote tailored to your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-sky-600 hover:bg-slate-50 px-8 btn-hover-scale">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${companyInfo.mobile[0]}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-8">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
