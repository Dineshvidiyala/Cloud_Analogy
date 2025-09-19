import React from 'react';
import { Cloud, Database, Shield, Code, Settings, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cloud className="h-12 w-12 text-blue-600" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum security.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: "Database Solutions",
      description: "Scalable database solutions designed for performance, reliability, and security.",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Cloud Database Management"]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your data and applications from threats.",
      features: ["Security Audits", "Compliance Management", "Identity Management", "Threat Detection"]
    },
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Custom Development",
      description: "Tailored software solutions built with modern technologies and best practices.",
      features: ["Web Applications", "API Development", "System Integration", "Legacy Modernization"]
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: "DevOps Solutions",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Automation"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions to help your business thrive 
            in the digital age. From cloud migration to custom development, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your needs and current infrastructure" },
              { step: "02", title: "Planning", description: "We create a detailed roadmap for your project" },
              { step: "03", title: "Implementation", description: "We execute the plan with precision and care" },
              { step: "04", title: "Support", description: "We provide ongoing support and optimization" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;