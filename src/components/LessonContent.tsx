
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Play } from 'lucide-react';

interface LessonContentProps {
  lesson: {
    id: number;
    title: string;
    duration: string;
    content: string;
    videoUrl?: string;
    completed?: boolean;
  };
  onComplete: (lessonId: number) => void;
}

const LessonContent = ({ lesson, onComplete }: LessonContentProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            {lesson.completed ? (
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            ) : (
              <Clock className="h-5 w-5 text-gray-400 mr-2" />
            )}
            {lesson.title}
          </CardTitle>
          <Badge variant={lesson.completed ? "default" : "secondary"}>
            {lesson.duration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {lesson.videoUrl && (
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <iframe
              src={lesson.videoUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
              title={lesson.title}
            />
          </div>
        )}
        
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
        </div>
        
        {!lesson.completed && (
          <Button 
            onClick={() => onComplete(lesson.id)}
            className="gradient-purple text-white w-full"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Mark as Complete
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default LessonContent;
