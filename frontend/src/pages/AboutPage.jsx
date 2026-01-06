import React from "react";
import {
  CheckCircle,
  Users,
  Shield,
  Clock,
  Award,
  Target,
  Briefcase,
  Star,
  Laptop,
  Factory,
  Heart,
  DollarSign,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { companyInfo, stats } from "../data/mock";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-sky-50/50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">
                About Us
              </span>
              <h1
                className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Your Trusted Corporate
                <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                  Travel Partner
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {companyInfo.name} is Chennai's leading corporate cab service
                provider, serving MNCs and businesses with reliable,
                professional transportation solutions. With over a decade of
                experience, we understand the unique needs of corporate travel.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our commitment to punctuality, safety, and comfort has made us
                the preferred choice for major IT companies, manufacturing
                units, and corporate offices across Chennai.
              </p>
            </div>
            <div className="relative">
              <img
                src="/about.png"
                alt="Professional Chauffeur"
                className="rounded-2xl shadow-2xl w-full max-h-[420px] object-cover object-center sm:object-left transform sm:-translate-x-1 md:-translate-x-2 lg:-translate-x-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-500 to-sky-600 text-white">
              <CardContent className="p-8">
                <Target className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  To provide safe, reliable, and professional corporate
                  transportation services that enhance productivity and
                  convenience for businesses and their employees. We aim to be
                  the benchmark for corporate travel in Chennai.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <CardContent className="p-8">
                <Award className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  To be recognized as Chennai's most trusted corporate travel
                  partner, known for excellence in service delivery, innovation
                  in fleet management, and unwavering commitment to customer
                  satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">
              Our Values
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Verified drivers and GPS-tracked vehicles ensure complete safety",
              },
              {
                icon: Clock,
                title: "Punctuality",
                desc: "On-time pickups and drops, every single time",
              },
              {
                icon: Users,
                title: "Professionalism",
                desc: "Trained drivers with impeccable service standards",
              },
              {
                icon: Star,
                title: "Excellence",
                desc: "Commitment to exceeding customer expectations",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm bg-white text-center card-hover"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-sky-100 to-teal-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">
                Why Choose Us
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                What Sets Us Apart
              </h2>

              <div className="space-y-4">
                {[
                  "Dedicated fleet of 50+ well-maintained vehicles",
                  "Experienced and verified professional drivers",
                  "Real-time GPS tracking and route optimization",
                  "Flexible billing - monthly, weekly, or per-trip",
                  "24/7 customer support with dedicated account managers",
                  "Transparent pricing with no hidden charges",
                  "Compliance with all regulatory requirements",
                  "Customized solutions for enterprise clients",
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/about1.png"
                alt="Luxury Fleet"
                className="rounded-2xl shadow-xl w-full max-h-[420px] object-cover object-center sm:object-left transform sm:-translate-x-1 md:-translate-x-2 lg:-translate-x-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-medium text-sm tracking-wide uppercase mb-3">
              Our Clientele
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Trusted by Leading Organizations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We are proud to serve some of Chennai's most prestigious companies
              and organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "IT Companies", icon: Laptop },
              { name: "Manufacturing", icon: Factory },
              { name: "Healthcare", icon: Heart },
              { name: "Finance", icon: DollarSign },
              { name: "Education", icon: GraduationCap },
              { name: "Retail", icon: ShoppingBag },
            ].map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm text-center"
                >
                  <IconComponent className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-slate-700">
                    {sector.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
