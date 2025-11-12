import React, { useState } from 'react';
import { Dumbbell, Search, Bell, Settings, ChevronRight, BarChart3, Calendar, Target, ClipboardList, HelpCircle, LogOut, Flame, Footprints, Menu, X } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import firstImage from "../assets/first.png";
import yoga1 from "../assets/yoga1.png";
import yoga2 from "../assets/yoga2.png";
import yoga3 from "../assets/yoga3.png";
import last from "../assets/last.png";
import rohu from "../assets/rohu.jpg";
const FitnessDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('Overview');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const scheduleData = [
        { day: 'Monday', activity: 'Stretch', time: 'At 08:00', sets: '30 Sets', color: 'bg-purple-100' },
        { day: 'Tuesday', activity: 'Back Stretch', time: 'At 08:00', round: '10 Round', color: 'bg-orange-100' },
        { day: 'Wednesday', activity: 'Yoga', time: 'At 08:00', min: '20 min', color: 'bg-pink-100' }
    ];

    const goalsData = [
        { title: 'ABS & Stretch', date: 'Saturday, April 12 | 08:00 AM', duration: '30 Min/day', color: 'bg-orange-100' },
        { title: 'Push Up', date: 'Sunday, April 13 | 08:00 AM', duration: '59 Sets/day', color: 'bg-pink-100' }
    ];

    const chartData = [
        { day: 'Mon', Workout: 35, Calories: 55, Steps: 75 },
        { day: 'Tue', Workout: 45, Calories: 35, Steps: 55 },
        { day: 'Wed', Workout: 75, Calories: 55, Steps: 60 },
        { day: 'Thu', Workout: 65, Calories: 75, Steps: 50 },
        { day: 'Fri', Workout: 35, Calories: 65, Steps: 70 },
        { day: 'Sat', Workout: 40, Calories: 60, Steps: 75 },
        { day: 'Sun', Workout: 40, Calories: 65, Steps: 85 }
    ];

    const mealData = [
        { icon: '🌯', food: 'Burrito', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', calories: '20 gm', carbs: '20 gm' },
        { icon: '🍔', food: 'Burger', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', calories: '20 gm', carbs: '20 gm' }
    ];

    const handleLogout = () => {
        window.location.href = '/login';
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
                        <span>Fitness</span>
                        <svg
                            viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[2em] h-[2em] inline-block align-middle"
                        >
                            <rect x="18" y="45" width="6" height="30" rx="3" fill="#FF8833" />
                            <rect x="30" y="35" width="30" height="50" rx="10" fill="#FF8833" />
                            <rect x="65" y="35" width="30" height="50" rx="10" fill="#FF8833" />
                            <rect x="96" y="45" width="6" height="30" rx="3" fill="#FF8833" />
                            <rect x="50" y="57" width="20" height="6" rx="3" fill="#FF8833" />
                        </svg>
                    </div>

                    <button 
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                <nav className="flex-1 px-3 overflow-y-auto">
                    <button
                        onClick={() => setActiveMenu('Overview')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                            activeMenu === 'Overview' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="7" height="7" rx="1.5"/>
                            <rect x="13" y="4" width="7" height="7" rx="1.5"/>
                            <rect x="4" y="13" width="7" height="7" rx="1.5"/>
                            <rect x="13" y="13" width="7" height="7" rx="1.5"/>
                        </svg>
                        <span className="font-medium">Overview</span>
                    </button>

                    <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                            <rect x="18" y="45" width="6" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
                            <rect x="30" y="35" width="30" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="6" />
                            <rect x="65" y="35" width="30" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="6" />
                            <rect x="96" y="45" width="6" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
                            <rect x="50" y="57" width="20" height="3" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
                        </svg>
                        <span className="font-medium">Workout</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15" strokeLinecap="round" strokeLinejoin="round"/>
                            <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M9 12H15" strokeLinecap="round"/>
                            <path d="M9 16H15" strokeLinecap="round"/>
                        </svg>
                        <span className="font-medium">Diet Plan</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                        </svg>
                        <span className="font-medium">Goals</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
                            <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span className="font-medium">My Schedule</span>
                    </button>

                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                                <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round"/>
                                <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round"/>
                                <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round"/>
                            </svg>
                            <span className="font-medium">Progress</span>
                        </div>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </nav>

                <div className="p-3 border-t border-gray-200">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <HelpCircle className="w-5 h-5" />
                        <span className="font-medium">Help</span>
                    </button>

                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button 
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <Menu className="w-6 h-6 text-gray-600" />
                            </button>
                            <div>
                                <p className="text-sm text-gray-500">Good Morning</p>
                                <h1 className="text-lg sm:text-xl font-semibold text-gray-800">Welcome Back!</h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4">
                          <div className="relative hidden md:block w-full max-w-sm
">
  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <input
    type="text"
    placeholder="Search"
    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64 lg:w-80"
  />
</div>

                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Bell className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
                                <Settings className="w-5 h-5 text-gray-600" />
                            </button>
                            <img
                                src={rohu}
                                alt="Profile"
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                            {/* Hero Banner */}
                            <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 rounded-[12px] overflow-hidden flex flex-col sm:flex-row items-center w-full min-h-[160px]">
                                <div className="relative z-10 w-full sm:w-1/2 p-6 text-white">
                                    <h2 className="text-lg sm:text-xl font-bold mb-2">Track Your Daily Activities</h2>
                                    <p className="text-orange-100 text-sm leading-relaxed">
                                        Stay consistent with your goals and monitor your daily fitness habits efficiently.
                                    </p>
                                </div>

                                <div className="absolute inset-0 sm:static w-full sm:w-1/2">
                                    <img
                                        src={firstImage}
                                        alt="Fitness Banner"
                                        className="absolute right-0 top-0 h-full w-full sm:w-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 via-orange-500/40 to-transparent"></div>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl p-4 sm:p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                         <div className="w-[50px] h-[0px] bg-[#00B4D8] rounded-2xl flex items-center justify-center">
  <svg
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-10"
  >
    <rect
      x="18"
      y="45"
      width="6"
      height="30"
      rx="3"
      fill="none"
      stroke="white"
      strokeWidth="5"
    />
    <rect
      x="30"
      y="35"
      width="30"
      height="50"
      rx="10"
      fill="none"
      stroke="white"
      strokeWidth="5"
    />
    <rect
      x="65"
      y="35"
      width="30"
      height="50"
      rx="10"
      fill="none"
      stroke="white"
      strokeWidth="5"
    />
    <rect
      x="96"
      y="45"
      width="6"
      height="30"
      rx="3"
      fill="none"
      stroke="white"
      strokeWidth="5"
    />
    <rect
      x="50"
      y="57"
      width="20"
      height="6"
      rx="3"
      fill="none"
      stroke="white"
      strokeWidth="5"
    />
  </svg>
</div>

                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm opacity-90">Workout</p>
                                            <p className="text-xl sm:text-2xl font-bold">4 hrs</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-4 sm:p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm opacity-90">Calories</p>
                                            <p className="text-xl sm:text-2xl font-bold">1800 kcal</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl p-4 sm:p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Footprints className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm opacity-90">Steps</p>
                                            <p className="text-xl sm:text-2xl font-bold">2254 steps</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Goal Progress Bar Chart */}
                            <div className="bg-white rounded-2xl p-4 sm:p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Goal Progress</h3>
                                    <select className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                </div>

                                <ResponsiveContainer width="100%" height={320}>
                                    <BarChart data={chartData} barGap={5} barCategoryGap="20%">
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                                        <XAxis 
                                            dataKey="day" 
                                            tick={{ fill: '#9ca3af', fontSize: 13 }}
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <YAxis 
                                            tick={{ fill: '#9ca3af', fontSize: 13 }}
                                            axisLine={false}
                                            tickLine={false}
                                            domain={[0, 100]}
                                            ticks={[0, 20, 40, 60, 80, 100]}
                                            tickFormatter={(value) => `${value}%`}
                                        />
                                        <Tooltip 
                                            contentStyle={{ 
                                                backgroundColor: 'white', 
                                                border: '1px solid #e5e7eb',
                                                borderRadius: '8px',
                                                fontSize: '12px'
                                            }}
                                            formatter={(value) => `${value}%`}
                                        />
                                        <Legend 
                                            iconType="circle"
                                            wrapperStyle={{ paddingTop: '20px' }}
                                        />
                                        <Bar 
                                            dataKey="Workout" 
                                            fill="#22d3ee" 
                                            radius={[8, 8, 0, 0]}
                                            maxBarSize={20}
                                        />
                                        <Bar 
                                            dataKey="Calories" 
                                            fill="#fb923c" 
                                            radius={[8, 8, 0, 0]}
                                            maxBarSize={20}
                                        />
                                        <Bar 
                                            dataKey="Steps" 
                                            fill="#c084fc" 
                                            radius={[8, 8, 0, 0]}
                                            maxBarSize={20}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Food Table */}
                            <div className="bg-white rounded-2xl p-4 sm:p-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Food</th>
                                                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden sm:table-cell">Meal</th>
                                                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Calories</th>
                                                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Priorities</th>
                                                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Carbs</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {mealData.map((meal, idx) => (
                                                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-4 px-2 sm:px-4">
                                                        <div className="flex items-center gap-2 sm:gap-3">
                                                            <span className="text-xl sm:text-2xl">{meal.icon}</span>
                                                            <span className="text-xs sm:text-sm font-medium text-gray-700">{meal.food}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">{meal.meal}</td>
                                                    <td className="py-4 px-2 sm:px-4">
                                                        <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                                            {meal.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 hidden md:table-cell">{meal.time}</td>
                                                    <td className="py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 hidden lg:table-cell">{meal.carbs}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Schedule & Goals */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* My Schedule */}
                            <div className="bg-white rounded-2xl p-4 sm:p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">My Schedule</h3>
                                    <button className="text-orange-500 text-xs sm:text-sm font-medium hover:text-orange-600">
                                        View All
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {scheduleData.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <img
                                                src={
                                                    idx === 0
                                                        ? yoga1
                                                        : idx === 1
                                                            ? yoga2
                                                            : yoga3
                                                }
                                                alt={item.activity}
                                                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg flex-shrink-0"
                                            />

                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs text-gray-500 mb-1">{item.day}</p>
                                                <p className="text-xs sm:text-sm font-semibold text-gray-800">{item.activity}</p>
                                                <p className="text-xs text-gray-500">{item.time}</p>
                                            </div>

                                            <span className="bg-orange-50 text-orange-500 text-xs font-medium px-2 sm:px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                                {item.sets || item.round || item.min}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Goals */}
                            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Goals</h3>
                                    <button className="text-orange-500 text-xs sm:text-sm font-medium hover:text-orange-600 flex items-center gap-1">
                                        View All <span className="text-lg leading-none">›</span>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {goalsData.map((goal, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between bg-white rounded-xl px-3 sm:px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                                        >
                                            <div className="flex-1 min-w-0 pr-2">
                                                <h4 className="text-xs sm:text-sm font-semibold text-gray-800">{goal.title}</h4>
                                                <p className="text-xs text-gray-500 truncate">{goal.date}</p>
                                            </div>

                                            <span className="bg-orange-50 text-orange-500 text-xs font-medium px-2 sm:px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                                {goal.duration}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Premium Membership */}
                            <div className="relative bg-gradient-to-br from-[#8B7AC7] to-[#7B9FE8] rounded-2xl p-6 sm:p-8 text-white overflow-hidden shadow-xl h-56 sm:h-64">
                                <div className="relative z-10 max-w-sm">
                                    <p className="text-lg sm:text-1xl font-bold mb-3 sm:mb-4">50% off on Premium Membership</p>
                                    <p className="text-xs sm:text-sm text-white/90 mb-4 sm:mb-6">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    </p>
                                    <button className="bg-[#FF8C1A] hover:bg-[#FF9933] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all shadow-lg text-sm sm:text-base">
                                        Upgrade
                                    </button>
                                </div>
                                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full"></div>
                                <img
                                    src={last}
                                    alt="Premium Fitness"
                                    className="absolute right-2 bottom-0 w-20 sm:w-23 h-auto object-contain z-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FitnessDashboard;