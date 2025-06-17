
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Clock, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const ProgressTracker = () => {
  const { user } = useAuth();
  const [userProgress, setUserProgress] = useState<any[]>([]);
  const [userAchievements, setUserAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;

    const [progressData, achievementsData] = await Promise.all([
      supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id),
      supabase
        .from('user_achievements')
        .select(`
          *,
          achievements (
            name,
            description,
            icon
          )
        `)
        .eq('user_id', user.id)
        .order('earned_at', { ascending: false })
        .limit(3)
    ]);

    if (progressData.data) setUserProgress(progressData.data);
    if (achievementsData.data) setUserAchievements(achievementsData.data);
    setLoading(false);
  };

  const completedLessons = userProgress.filter(p => p.completed).length;
  const totalHours = completedLessons * 0.5; // Assuming 30 minutes per lesson
  const completedModules = [...new Set(userProgress.filter(p => p.completed).map(p => p.module_id))].length;

  const stats = [
    {
      label: "Modules Completed",
      value: `${completedModules}/4`,
      percentage: (completedModules / 4) * 100,
      icon: BookOpen,
      color: "text-tailoring-purple"
    },
    {
      label: "Hours Learned",
      value: Math.round(totalHours).toString(),
      percentage: Math.min((totalHours / 50) * 100, 100), // Cap at 50 hours
      icon: Clock,
      color: "text-tailoring-rose"
    },
    {
      label: "Lessons Completed",
      value: completedLessons.toString(),
      percentage: (completedLessons / 50) * 100, // Assuming 50 total lessons
      icon: Target,
      color: "text-tailoring-sage"
    },
    {
      label: "Achievements Earned",
      value: userAchievements.length.toString(),
      percentage: (userAchievements.length / 5) * 100, // 5 total achievements
      icon: Trophy,
      color: "text-yellow-600"
    }
  ];

  if (!user) {
    return (
      <section id="progress" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Track Your Journey</h2>
          <p className="text-xl text-gray-600">Sign in to track your progress and achievements</p>
        </div>
      </section>
    );
  }

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
                            style={{ width: `${Math.min(stat.percentage, 100)}%` }}
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
                      <h4 className="font-semibold text-gray-900">Tailoring Fundamentals</h4>
                      <p className="text-sm text-gray-600">Module 1, Lesson 1</p>
                    </div>
                    <Badge className="bg-tailoring-purple text-white">Ready to Start</Badge>
                  </div>
                  <div className="text-center">
                    <button className="gradient-purple text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                      Continue Learning
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
                  {userAchievements.length > 0 ? (
                    userAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-tailoring-purple rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">{achievement.achievements.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {achievement.achievements.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(achievement.earned_at).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-gray-600">
                            {achievement.achievements.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500">
                      <Trophy className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Complete your first lesson to earn achievements!</p>
                    </div>
                  )}
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
