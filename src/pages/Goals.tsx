import { Target, TrendingDown, Bike, Lightbulb, TreePine, Award } from 'lucide-react';

export default function Goals() {
  const goals = [
    {
      id: 1,
      icon: TrendingDown,
      title: 'Reduce Carbon Footprint',
      description: 'Decrease monthly emissions by 25%',
      progress: 68,
      current: 2.4,
      target: 2.0,
      unit: 'tons CO₂',
      color: 'bg-[#2D5A27]',
      milestones: [
        { value: 25, label: '25%', completed: true },
        { value: 50, label: '50%', completed: true },
        { value: 75, label: '75%', completed: false },
        { value: 100, label: 'Goal', completed: false },
      ],
    },
    {
      id: 2,
      icon: Bike,
      title: 'Alternative Transportation',
      description: 'Use public transit or bike 50% of the time',
      progress: 42,
      current: 21,
      target: 50,
      unit: '% of trips',
      color: 'bg-[#FF8C42]',
      milestones: [
        { value: 25, label: '25%', completed: true },
        { value: 50, label: '50%', completed: false },
        { value: 75, label: '75%', completed: false },
        { value: 100, label: 'Goal', completed: false },
      ],
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'Energy Efficiency',
      description: 'Reduce home energy use by 30%',
      progress: 85,
      current: 255,
      target: 220,
      unit: 'kWh/month',
      color: 'bg-[#87CEEB]',
      milestones: [
        { value: 25, label: '25%', completed: true },
        { value: 50, label: '50%', completed: true },
        { value: 75, label: '75%', completed: true },
        { value: 100, label: 'Goal', completed: false },
      ],
    },
    {
      id: 4,
      icon: TreePine,
      title: 'Carbon Offset Purchase',
      description: 'Offset 3 tons of CO₂ this year',
      progress: 60,
      current: 1.8,
      target: 3.0,
      unit: 'tons CO₂',
      color: 'bg-[#2D5A27]',
      milestones: [
        { value: 25, label: '25%', completed: true },
        { value: 50, label: '50%', completed: true },
        { value: 75, label: '75%', completed: false },
        { value: 100, label: 'Goal', completed: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Target className="h-8 w-8 text-[#2D5A27]" />
            <h1 className="text-3xl font-bold text-gray-900">Sustainability Goals</h1>
          </div>
          <p className="text-gray-600">
            Track your progress toward a more sustainable lifestyle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#2D5A27] to-[#4a8a44] rounded-xl shadow-lg p-6 text-white">
            <Award className="h-12 w-12 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Overall Progress</h2>
            <p className="text-3xl font-bold mb-2">64%</p>
            <p className="text-sm opacity-90">
              You're making great progress! Keep up the momentum.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-[#FF8C42]/10 rounded-lg">
                <div className="bg-[#FF8C42] p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">First Goal Milestone</p>
                  <p className="text-sm text-gray-600">Reached 25% of your first goal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#87CEEB]/10 rounded-lg">
                <div className="bg-[#87CEEB] p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Energy Saver</p>
                  <p className="text-sm text-gray-600">85% toward energy efficiency goal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <div key={goal.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`${goal.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{goal.title}</h3>
                    <p className="text-gray-600">{goal.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{goal.progress}%</p>
                    <p className="text-sm text-gray-500">Complete</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>
                      Current: {goal.current} {goal.unit}
                    </span>
                    <span>
                      Target: {goal.target} {goal.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full ${goal.color} transition-all duration-500`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Milestones</h4>
                  <div className="flex items-center justify-between">
                    {goal.milestones.map((milestone, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            milestone.completed
                              ? goal.color + ' text-white'
                              : 'bg-gray-200 text-gray-400'
                          } transition-all duration-300`}
                        >
                          {milestone.completed ? (
                            <Award className="h-5 w-5" />
                          ) : (
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          )}
                        </div>
                        <p
                          className={`text-xs mt-2 font-medium ${
                            milestone.completed ? 'text-gray-900' : 'text-gray-500'
                          }`}
                        >
                          {milestone.label}
                        </p>
                        {index < goal.milestones.length - 1 && (
                          <div
                            className={`absolute w-full h-0.5 ${
                              milestone.completed ? goal.color : 'bg-gray-200'
                            } -translate-x-1/2`}
                            style={{
                              left: `${((index + 1) / goal.milestones.length) * 100}%`,
                              width: `${100 / goal.milestones.length}%`,
                              top: '20px',
                              zIndex: -1,
                            }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
