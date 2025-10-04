import { useState } from 'react';
import { Car, Zap, Trash2, Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
  const [transportation, setTransportation] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [waste, setWaste] = useState(50);

  const transportationFactor = 0.004;
  const energyFactor = 0.0005;
  const wasteFactor = 0.002;

  const transportationCO2 = (transportation * transportationFactor).toFixed(2);
  const energyCO2 = (energy * energyFactor).toFixed(2);
  const wasteCO2 = (waste * wasteFactor).toFixed(2);

  const totalCO2 = (
    parseFloat(transportationCO2) +
    parseFloat(energyCO2) +
    parseFloat(wasteCO2)
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <CalcIcon className="h-8 w-8 text-[#2D5A27]" />
            <h1 className="text-3xl font-bold text-gray-900">Carbon Calculator</h1>
          </div>
          <p className="text-gray-600">
            Estimate your monthly carbon footprint across key categories
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#FF8C42] p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Transportation</h2>
                  <p className="text-sm text-gray-600">Miles driven per week</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Miles per week</span>
                  <span className="text-lg font-bold text-[#FF8C42]">
                    {transportation} miles
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={transportation}
                  onChange={(e) => setTransportation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF8C42]"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>250</span>
                  <span>500</span>
                </div>
                <div className="bg-[#FF8C42]/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">
                    Estimated CO₂: {transportationCO2} tons/month
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#87CEEB] p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Energy</h2>
                  <p className="text-sm text-gray-600">Monthly electricity usage</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">kWh per month</span>
                  <span className="text-lg font-bold text-[#87CEEB]">
                    {energy} kWh
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={energy}
                  onChange={(e) => setEnergy(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#87CEEB]"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>1000</span>
                  <span>2000</span>
                </div>
                <div className="bg-[#87CEEB]/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">
                    Estimated CO₂: {energyCO2} tons/month
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#2D5A27] p-2 rounded-lg">
                  <Trash2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Waste</h2>
                  <p className="text-sm text-gray-600">Weekly waste production</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Pounds per week</span>
                  <span className="text-lg font-bold text-[#2D5A27]">
                    {waste} lbs
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={waste}
                  onChange={(e) => setWaste(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2D5A27]"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>100</span>
                  <span>200</span>
                </div>
                <div className="bg-[#2D5A27]/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">
                    Estimated CO₂: {wasteCO2} tons/month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#2D5A27] to-[#4a8a44] rounded-xl shadow-lg p-6 text-white sticky top-8">
              <h2 className="text-xl font-bold mb-6">Total Impact</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">Transportation</span>
                  <span className="font-semibold">{transportationCO2}t</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">Energy</span>
                  <span className="font-semibold">{energyCO2}t</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">Waste</span>
                  <span className="font-semibold">{wasteCO2}t</span>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <p className="text-sm mb-1">Monthly Carbon Footprint</p>
                <p className="text-4xl font-bold">{totalCO2}</p>
                <p className="text-sm">tons CO₂</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xs mb-2">Average US household: 4.0 tons/month</p>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((parseFloat(totalCO2) / 4.0) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tips to Reduce Your Footprint</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FF8C42]/10 rounded-lg">
              <Car className="h-6 w-6 text-[#FF8C42] mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Use Public Transit</h4>
              <p className="text-sm text-gray-600">
                Reduce transportation emissions by carpooling or taking public transit
              </p>
            </div>
            <div className="p-4 bg-[#87CEEB]/10 rounded-lg">
              <Zap className="h-6 w-6 text-[#87CEEB] mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Energy Efficiency</h4>
              <p className="text-sm text-gray-600">
                Switch to LED bulbs and energy-efficient appliances
              </p>
            </div>
            <div className="p-4 bg-[#2D5A27]/10 rounded-lg">
              <Trash2 className="h-6 w-6 text-[#2D5A27] mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Recycle More</h4>
              <p className="text-sm text-gray-600">
                Properly sort recyclables and compost organic waste
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
