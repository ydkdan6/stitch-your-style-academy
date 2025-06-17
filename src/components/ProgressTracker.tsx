
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Clock, BookOpen } from 'lucide-react';

const ProgressTracker = () => {
  const stats = [
    {
      label: "Modules Completed",
      value: "2/4",
      percentage: 50,
      icon: BookOpen,
      color: "text-tailoring-purple"
    },
    {
      label: "Hours Learned",
      value: "24",
      percentage: 60,
      icon: Clock,
      color: "text-tailoring-rose"
    },
    {
      label: "Projects Finished",
      value: "5",
      percentage: 100,
      icon: Target,
      color: "text-tailoring-sage"
    },
    {
      label: "Certificates Earned",
      value: "1",
      percentage: 25,
      icon: Trophy,
      color: "text-yellow-600"
    }
  ];

  const recentAchievements = [
    { title: "First Pattern Completed", date: "2 days ago", badge: "Beginner" },
    { title: "Fabric Selection Master", date: "1 week ago", badge: "Knowledge" },
    { title: "Community Helper", date: "2 weeks ago", badge: "Social" }
  ];

  return (
    <section id="progress" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Track Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your progress, celebrate achievements, and stay motivated 
            on your path to becoming a skilled tailor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Stats */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Learning Progress
                </CardTitle>
                <CardDescription>
                  Your journey through the TailorCraft Academy curriculum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          {stat.label}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-tailoring-purple h-2 rounded-full transition-all duration-300"
                            style={{ width: `${stat.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Current Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle>Current Learning Path</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-tailoring-cream rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Pattern Drafting Basics</h4>
                      <p className="text-sm text-gray-600">Module 2, Lesson 3</p>
                    </div>
                    <Badge className="bg-tailoring-purple text-white">In Progress</Badge>
                  </div>
                  <div className="text-center">
                    <button className="gradient-purple text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                      Continue Lesson
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                  Recent Achievements
                </CardTitle>
                <CardDescription>
                  Celebrate your milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-tailoring-purple rounded-full flex items-center justify-center">
                          <Trophy className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {achievement.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {achievement.date}
                        </p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {achievement.badge}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
