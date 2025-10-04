import { ShoppingBag, TreePine, Wind, Droplets, Sun, MapPin, CheckCircle } from 'lucide-react';

export default function Marketplace() {
  const projects = [
    {
      id: 1,
      icon: TreePine,
      title: 'Amazon Rainforest Restoration',
      location: 'Brazil',
      description: 'Support reforestation efforts in the Amazon rainforest. Plant native trees and restore critical wildlife habitat.',
      price: 12,
      pricePerTon: 12,
      impact: '1 ton CO₂',
      verified: true,
      color: 'bg-[#2D5A27]',
    },
    {
      id: 2,
      icon: Wind,
      title: 'Wind Energy Development',
      location: 'Texas, USA',
      description: 'Fund renewable wind energy infrastructure that displaces fossil fuel power generation.',
      price: 15,
      pricePerTon: 15,
      impact: '1 ton CO₂',
      verified: true,
      color: 'bg-[#87CEEB]',
    },
    {
      id: 3,
      icon: Sun,
      title: 'Solar Power for Rural Communities',
      location: 'India',
      description: 'Provide clean solar energy to rural villages, replacing diesel generators and kerosene lamps.',
      price: 10,
      pricePerTon: 10,
      impact: '1 ton CO₂',
      verified: true,
      color: 'bg-[#FF8C42]',
    },
    {
      id: 4,
      icon: Droplets,
      title: 'Ocean Plastic Removal',
      location: 'Pacific Ocean',
      description: 'Remove plastic waste from oceans and prevent further marine ecosystem damage.',
      price: 20,
      pricePerTon: 20,
      impact: '1 ton CO₂',
      verified: true,
      color: 'bg-[#87CEEB]',
    },
    {
      id: 5,
      icon: TreePine,
      title: 'Mangrove Forest Conservation',
      location: 'Indonesia',
      description: 'Protect and restore mangrove forests that serve as carbon sinks and coastal protection.',
      price: 14,
      pricePerTon: 14,
      impact: '1 ton CO₂',
      verified: true,
      color: 'bg-[#2D5A27]',
    },
    {
      id: 6,
      icon: Wind,
      title: 'Hydroelectric Power Expansion',
      location: 'Norway',
      description: 'Expand clean hydroelectric power generation to reduce reliance on fossil fuels.',
      price: 18,
      pricePerTon: 18,
      impact: '1 ton CO₂',
      verified: true,
      color: 'bg-[#87CEEB]',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="h-8 w-8 text-[#2D5A27]" />
            <h1 className="text-3xl font-bold text-gray-900">Carbon Offset Marketplace</h1>
          </div>
          <p className="text-gray-600">
            Support verified environmental projects and offset your carbon footprint
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#2D5A27] to-[#4a8a44] rounded-xl shadow-lg p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Carbon Balance</h2>
              <p className="text-sm opacity-90">
                Offset your monthly footprint and go carbon neutral
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm mb-1">Monthly Footprint</p>
              <p className="text-4xl font-bold">2.4 tons</p>
            </div>
            <div className="text-center">
              <p className="text-sm mb-1">Offsets Purchased</p>
              <p className="text-4xl font-bold">1.8 tons</p>
            </div>
            <div className="text-center">
              <p className="text-sm mb-1">Remaining</p>
              <p className="text-4xl font-bold text-[#FF8C42]">0.6 tons</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`${project.color} h-48 flex items-center justify-center`}>
                  <Icon className="h-24 w-24 text-white opacity-90" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                      {project.title}
                    </h3>
                    {project.verified && (
                      <CheckCircle className="h-5 w-5 text-[#2D5A27] flex-shrink-0 ml-2" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Impact</p>
                      <p className="font-semibold text-gray-900">{project.impact}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold text-[#2D5A27]">
                        ${project.price}
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-[#2D5A27] text-white py-3 rounded-lg font-semibold hover:bg-[#3d7a37] transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Buy Offset
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How Carbon Offsets Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#2D5A27] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Calculate Your Impact</h3>
              <p className="text-sm text-gray-600">
                Use our calculator to determine your carbon footprint
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF8C42] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose a Project</h3>
              <p className="text-sm text-gray-600">
                Select from verified environmental initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#87CEEB] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Make an Impact</h3>
              <p className="text-sm text-gray-600">
                Your purchase funds real environmental action
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
