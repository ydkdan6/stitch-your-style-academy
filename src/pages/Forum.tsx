
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { MessageCircle, Heart, Plus, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  tags: string[];
  likes_count: number;
  comments_count: number;
  created_at: string;
  user_id: string;
  profiles: {
    username: string;
    full_name: string;
  };
}

const Forum = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchPosts();
  }, [user, navigate]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('forum_posts')
      .select(`
        id,
        title,
        content,
        tags,
        likes_count,
        comments_count,
        created_at,
        user_id,
        profiles!forum_posts_user_id_fkey (
          username,
          full_name
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Error",
        description: "Failed to load forum posts",
        variant: "destructive"
      });
    } else {
      setPosts(data || []);
    }
  };

  const createPost = async () => {
    if (!user) return;

    setLoading(true);
    const { error } = await supabase
      .from('forum_posts')
      .insert([
        {
          user_id: user.id,
          title,
          content,
          tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        }
      ]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Post created successfully!"
      });
      setTitle('');
      setContent('');
      setTags('');
      setIsDialogOpen(false);
      fetchPosts();
    }
    setLoading(false);
  };

  const handleLike = async (postId: string) => {
    if (!user) return;
    
    const isLiked = likedPosts.has(postId);
    const newLikesCount = posts.find(p => p.id === postId)?.likes_count || 0;
    const updatedCount = isLiked ? newLikesCount - 1 : newLikesCount + 1;

    const { error } = await supabase
      .from('forum_posts')
      .update({ likes_count: updatedCount })
      .eq('id', postId);

    if (!error) {
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes_count: updatedCount }
          : post
      ));
      
      setLikedPosts(prev => {
        const newSet = new Set(prev);
        if (isLiked) {
          newSet.delete(postId);
        } else {
          newSet.add(postId);
        }
        return newSet;
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
            <p className="text-xl text-gray-600">Share your tailoring journey and connect with fellow crafters</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-purple text-white">
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
                <DialogDescription>
                  Share your thoughts, ask questions, or show off your latest project.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What's your post about?"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="beginner, dress, pattern, tips"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={createPost} disabled={loading || !title || !content}>
                  {loading ? 'Creating...' : 'Create Post'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-gray-500 text-lg">No posts yet. Be the first to share something!</p>
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-tailoring-purple text-white">
                          {post.profiles?.username?.[0]?.toUpperCase() || <User className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {post.profiles?.full_name || post.profiles?.username || 'Anonymous'}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(post.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mt-4">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.content}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-tailoring-purple bg-tailoring-cream">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors ${
                        likedPosts.has(post.id) 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-gray-500 hover:text-tailoring-purple'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                      <span className="text-sm">{post.likes_count}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-tailoring-purple transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{post.comments_count}</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
