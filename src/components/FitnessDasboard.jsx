import React, { useState } from 'react';
import { Dumbbell, Search, Bell, Settings, ChevronRight, BarChart3, Calendar, Target, ClipboardList, HelpCircle, LogOut, Flame, Footprints } from 'lucide-react';
import firstImage from '../assets/first.png';
import yoga1 from '../assets/yoga1.png';
import yoga2 from '../assets/yoga2.png';
import yoga3 from '../assets/yoga3.png';
import last from '../assets/last.png';

const FitnessDasboard = () => {
    const [activeMenu, setActiveMenu] = useState('Overview');

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
        { day: 'Mon', workout: 80, calories: 60, steps: 40 },
        { day: 'Tue', workout: 70, calories: 85, steps: 75 },
        { day: 'Wed', workout: 95, calories: 50, steps: 80 },
        { day: 'Thu', workout: 85, calories: 95, steps: 65 },
        { day: 'Fri', workout: 75, calories: 90, steps: 85 },
        { day: 'Sat', workout: 90, calories: 80, steps: 75 },
        { day: 'Sun', workout: 80, calories: 85, steps: 90 }
    ];

    const mealData = [
        { icon: '🌯', food: 'Burrito', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', calories: '20 gm', carbs: '20 gm' },
        { icon: '🍔', food: 'Burger', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', calories: '20 gm', carbs: '20 gm' }
    ];

    const handleLogout = () => {

        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');

        window.location.href = '/login';
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-6">
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
                        <Dumbbell className="w-6 h-6" />
                        <span>Fitness</span>
                    </div>
                </div>

                <nav className="flex-1 px-3">
                    <button
                        onClick={() => setActiveMenu('Overview')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeMenu === 'Overview' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <BarChart3 className="w-5 h-5" />
                        <span className="font-medium">Overview</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <Dumbbell className="w-5 h-5" />
                        <span className="font-medium">Workout</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <ClipboardList className="w-5 h-5" />
                        <span className="font-medium">Diet Plan</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <Target className="w-5 h-5" />
                        <span className="font-medium">Goals</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">My Schedule</span>
                    </button>

                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-100">
                        <div className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5" />
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

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Good Morning</p>
                            <h1 className="text-xl font-semibold text-gray-800">Welcome Back!</h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Bell className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Settings className="w-5 h-5 text-gray-600" />
                            </button>
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Hero Banner */}
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold mb-2">Track Your Daily Activities</h2>
                                    <p className="text-orange-100 max-w-md">
                                        Lorem ipsum dolor sit amet. Consectetur adipiscing elit do eiusmod consectetur adipiscing elit, sed do eiusmod
                                    </p>
                                </div>

                                <img
                                    src={firstImage}
                                    alt="Hero Banner"
                                    className="absolute right-0 top-0 h-full object-cover"
                                />

                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Dumbbell className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-90">Workout</p>
                                            <p className="text-2xl font-bold">4 hrs</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Flame className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-90">Calories</p>
                                            <p className="text-2xl font-bold">1800 kcal</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Footprints className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-90">Steps</p>
                                            <p className="text-2xl font-bold">2254 steps</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Goal Progress Chart */}
                            <div className="bg-white rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800">Goal Progress</h3>
                                    <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                </div>

                                <div className="flex items-end justify-between h-64 gap-4">
                                    {chartData.map((data, idx) => (
                                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full flex flex-col items-center gap-1 flex-1 justify-end">
                                                <div
                                                    className="w-3 bg-cyan-400 rounded-t"
                                                    style={{ height: `${data.workout}%` }}
                                                ></div>
                                                <div
                                                    className="w-3 bg-orange-400 rounded-t"
                                                    style={{ height: `${data.calories}%` }}
                                                ></div>
                                                <div
                                                    className="w-3 bg-purple-400 rounded-t"
                                                    style={{ height: `${data.steps}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-gray-500 mt-2">{data.day}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center gap-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-cyan-400 rounded"></div>
                                        <span className="text-sm text-gray-600">Workout</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-orange-400 rounded"></div>
                                        <span className="text-sm text-gray-600">Calories</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-purple-400 rounded"></div>
                                        <span className="text-sm text-gray-600">Steps</span>
                                    </div>
                                </div>
                            </div>

                            {/* Food Table */}
                            <div className="bg-white rounded-2xl p-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Food</th>
                                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Meal</th>
                                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Calories</th>
                                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Priorities</th>
                                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Carbs</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {mealData.map((meal, idx) => (
                                                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-4 px-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-2xl">{meal.icon}</span>
                                                            <span className="text-sm font-medium text-gray-700">{meal.food}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 text-sm text-gray-600">{meal.meal}</td>
                                                    <td className="py-4 px-4">
                                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                                            {meal.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-4 text-sm text-gray-600">{meal.time}</td>
                                                    <td className="py-4 px-4 text-sm text-gray-600">{meal.carbs}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Schedule & Goals */}
                        <div className="space-y-6">
                            {/* My Schedule */}
                            <div className="bg-white rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800">My Schedule</h3>
                                    <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                                        View All
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {scheduleData.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            {/* Only the image — no background or outline */}
                                            <img
                                                src={
                                                    idx === 0
                                                        ? yoga1
                                                        : idx === 1
                                                            ? yoga2
                                                            : yoga3
                                                }
                                                alt={item.activity}
                                                className="w-12 h-12 object-contain flex-shrink-0"
                                            />

                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs text-gray-500 mb-1">{item.day}</p>
                                                <p className="text-sm font-semibold text-gray-800">{item.activity}</p>
                                                <p className="text-xs text-gray-500">{item.time}</p>
                                            </div>

                                            <span className="bg-orange-50 text-orange-500 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                                {item.sets || item.round || item.min}
                                            </span>

                                        </div>
                                    ))}
                                </div>


                            </div>

                            {/* Goals */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800">Goals</h3>
                                    <button className="text-orange-500 text-sm font-medium hover:text-orange-600 flex items-center gap-1">
                                        View All <span className="text-lg leading-none">›</span>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {goalsData.map((goal, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                                        >
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-800">{goal.title}</h4>
                                                <p className="text-xs text-gray-500">{goal.date}</p>
                                            </div>

                                            <span className="bg-orange-50 text-orange-500 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                                {goal.duration}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Premium Membership */}
                            <div className="relative bg-gradient-to-br from-[#8B7AC7] to-[#7B9FE8] rounded-2xl p-8 text-white overflow-hidden shadow-xl h-64">
                                <div className="relative z-10 max-w-sm">
                                    <p className="text-2xl font-bold mb-4">50% off on Premium Membership</p>
                                    <p className="text-sm text-white/90 mb-6">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    </p>
                                    <button className="bg-[#FF8C1A] hover:bg-[#FF9933] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg">
                                        Upgrade
                                    </button>
                                </div>
                                {/* Decorative circular overlay */}
                                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full"></div>
                                {/* Fitness image */}
                                <img
                                    src={last}
                                    alt="Premium Fitness"
                                    className="absolute right-4 bottom-0 w-22 h-auto object-contain z-20"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FitnessDasboard;