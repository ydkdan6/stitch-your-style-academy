
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users, CheckCircle } from 'lucide-react';
import LessonContent from '@/components/LessonContent';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { moduleData } from '@/data/moduleData';

const ModuleDetail = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [userProgress, setUserProgress] = useState<any[]>([]);

  const module = moduleData.find(m => m.id === parseInt(moduleId || '1'));

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (module) {
      fetchUserProgress();
    }
  }, [user, module, navigate]);

  const fetchUserProgress = async () => {
    if (!user || !module) return;

    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('module_id', module.id);

    if (!error && data) {
      setUserProgress(data);
    }
  };

  const markLessonComplete = async (lessonId: number) => {
    if (!user || !module) return;

    const { error } = await supabase
      .from('user_progress')
      .upsert([
        {
          user_id: user.id,
          module_id: module.id,
          lesson_id: lessonId,
          completed: true,
          progress_percentage: 100,
          completed_at: new Date().toISOString()
        }
      ]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to save progress",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Great job!",
        description: "Lesson marked as complete"
      });
      fetchUserProgress();
      checkForAchievements();
    }
  };

  const checkForAchievements = async () => {
    if (!user) return;

    // Check for "First Steps" achievement
    const { data: completedLessons } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('completed', true);

    if (completedLessons && completedLessons.length === 1) {
      await awardAchievement('First Steps');
    }

    if (completedLessons && completedLessons.length === 5) {
      await awardAchievement('Dedicated Learner');
    }

    // Check for module completion
    const moduleCompletedLessons = completedLessons?.filter(p => p.module_id === module?.id) || [];
    if (moduleCompletedLessons.length === module?.lessons.length) {
      await awardAchievement('Module Master');
    }
  };

  const awardAchievement = async (achievementName: string) => {
    const { data: achievement } = await supabase
      .from('achievements')
      .select('*')
      .eq('name', achievementName)
      .single();

    if (achievement) {
      const { error } = await supabase
        .from('user_achievements')
        .upsert([
          {
            user_id: user!.id,
            achievement_id: achievement.id
          }
        ]);

      if (!error) {
        toast({
          title: "Achievement Unlocked! 🏆",
          description: `You earned: ${achievementName}`,
        });
      }
    }
  };

  const isLessonCompleted = (lessonId: number) => {
    return userProgress.some(p => p.lesson_id === lessonId && p.completed);
  };

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Module Not Found</h1>
            <p className="text-gray-600 mb-8">The requested module could not be found.</p>
            <Button onClick={() => navigate('/')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Modules
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const lessonsWithProgress = module.lessons.map(lesson => ({
    ...lesson,
    completed: isLessonCompleted(lesson.id)
  }));

  const completedLessons = lessonsWithProgress.filter(l => l.completed).length;
  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Modules
          </Button>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{module.title}</h1>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {module.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {module.lessons.length} lessons
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="text-tailoring-purple bg-tailoring-cream">
                {module.level}
              </Badge>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress: {completedLessons}/{module.lessons.length} lessons</span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-tailoring-purple h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {lessonsWithProgress.map((lesson) => (
            <LessonContent
              key={lesson.id}
              lesson={lesson}
              onComplete={markLessonComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
