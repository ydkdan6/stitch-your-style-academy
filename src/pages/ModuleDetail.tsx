
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users, CheckCircle } from 'lucide-react';
import LessonContent from '@/components/LessonContent';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const moduleData = [
  {
    id: 1,
    title: "Tailoring Fundamentals",
    description: "Master the basics of tailoring including fabric selection, tools, and essential measurements.",
    duration: "4 weeks",
    level: "Beginner",
    lessons: [
      {
        id: 1,
        title: "Introduction to Tailoring Tools",
        duration: "15 min",
        content: `
          <h3>Essential Tailoring Tools</h3>
          <p>Welcome to your first lesson in tailoring! In this lesson, we'll cover the essential tools every tailor needs:</p>
          <ul>
            <li><strong>Measuring Tools:</strong> Tape measure, rulers, and curves</li>
            <li><strong>Cutting Tools:</strong> Fabric scissors, paper scissors, and rotary cutters</li>
            <li><strong>Marking Tools:</strong> Chalk, markers, and tracing wheels</li>
            <li><strong>Pressing Tools:</strong> Iron, pressing cloths, and seam rolls</li>
          </ul>
          <p>Each tool serves a specific purpose and investing in quality tools will make your tailoring journey much smoother.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: "Understanding Fabric Types",
        duration: "20 min",
        content: `
          <h3>Fabric Selection Guide</h3>
          <p>Choosing the right fabric is crucial for successful tailoring. Here's what you need to know:</p>
          <h4>Natural Fibers:</h4>
          <ul>
            <li><strong>Cotton:</strong> Breathable, easy to work with, great for beginners</li>
            <li><strong>Wool:</strong> Warm, drapes well, ideal for structured garments</li>
            <li><strong>Silk:</strong> Luxurious, delicate, requires special handling</li>
            <li><strong>Linen:</strong> Cool, wrinkles easily, perfect for summer garments</li>
          </ul>
          <h4>Synthetic Fibers:</h4>
          <ul>
            <li><strong>Polyester:</strong> Durable, wrinkle-resistant, holds its shape</li>
            <li><strong>Nylon:</strong> Strong, elastic, often used in blends</li>
            <li><strong>Spandex:</strong> Extremely stretchy, used for fitted garments</li>
          </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 3,
        title: "Taking Accurate Measurements",
        duration: "25 min",
        content: `
          <h3>Measurement Techniques</h3>
          <p>Accurate measurements are the foundation of well-fitting garments. Here's how to take them properly:</p>
          <h4>Key Body Measurements:</h4>
          <ul>
            <li><strong>Bust/Chest:</strong> Measure around the fullest part</li>
            <li><strong>Waist:</strong> Measure at the natural waistline</li>
            <li><strong>Hips:</strong> Measure around the fullest part of the hips</li>
            <li><strong>Shoulder to Shoulder:</strong> Across the back from shoulder point to shoulder point</li>
            <li><strong>Arm Length:</strong> From shoulder to wrist with arm bent</li>
          </ul>
          <h4>Pro Tips:</h4>
          <ul>
            <li>Use a flexible tape measure</li>
            <li>Take measurements over fitted clothing</li>
            <li>Keep the tape snug but not tight</li>
            <li>Record all measurements accurately</li>
          </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: 2,
    title: "Pattern Drafting & Design",
    description: "Learn to create your own patterns from basic blocks to complex designs.",
    duration: "6 weeks",
    level: "Intermediate",
    lessons: [
      {
        id: 4,
        title: "Basic Pattern Blocks",
        duration: "30 min",
        content: `
          <h3>Understanding Pattern Blocks</h3>
          <p>Pattern blocks are the foundation of all garment patterns. They're basic templates that fit the body closely.</p>
          <h4>Types of Blocks:</h4>
          <ul>
            <li><strong>Bodice Block:</strong> For the torso area</li>
            <li><strong>Skirt Block:</strong> For the hip and leg area</li>
            <li><strong>Sleeve Block:</strong> For arms</li>
            <li><strong>Trouser Block:</strong> For pants and trousers</li>
          </ul>
          <p>These blocks can be modified to create different styles while maintaining proper fit.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  }
];

const ModuleDetail = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [userProgress, setUserProgress] = useState<any[]>([]);
  const [currentLesson, setCurrentLesson] = useState(0);

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
    }
  };

  const isLessonCompleted = (lessonId: number) => {
    return userProgress.some(p => p.lesson_id === lessonId && p.completed);
  };

  if (!module) {
    return <div>Module not found</div>;
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
