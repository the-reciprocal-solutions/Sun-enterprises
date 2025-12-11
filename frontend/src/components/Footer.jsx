import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, FileText } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SE</span>
              </div> */}
              <img src="/logo.png" alt="Sun Enterprises" className="h-28 lg:h-32 w-auto object-contain" /> 
            
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>GST: {companyInfo.gst}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Fleet', path: '/fleet' },
                { name: 'Packages', path: '/packages' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Monthly Contracts',
                'Daily On-Demand',
                'Employee Transportation',
                'Airport Transfers',
                'Event Transportation',
                'Outstation Trips',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <div className="text-sm text-slate-400">
                  <a href={`tel:${companyInfo.landline}`} className="hover:text-sky-400 transition-colors block">
                    {companyInfo.landline}
                  </a>
                  {companyInfo.mobile.map((num) => (
                    <a key={num} href={`tel:${num}`} className="hover:text-sky-400 transition-colors block">
                      {num}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">24/7 Service Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Trusted Corporate Travel Partner in Chennai</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
