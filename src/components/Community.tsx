
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Heart, Share2, Users } from 'lucide-react';

const communityPosts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "SC",
    title: "My First Completed Dress!",
    content: "Just finished my first A-line dress using the pattern from Module 2. It took me 3 weeks but I'm so proud of the result!",
    likes: 24,
    comments: 8,
    timeAgo: "2 hours ago",
    tags: ["Beginner", "Dress", "Achievement"]
  },
  {
    id: 2,
    author: "Maria Rodriguez",
    avatar: "MR",
    title: "Pattern Drafting Tips for Beginners",
    content: "Here are 5 essential tips I wish I knew when starting pattern drafting. Hope this helps other beginners!",
    likes: 18,
    comments: 12,
    timeAgo: "5 hours ago",
    tags: ["Tips", "Pattern", "Beginner"]
  },
  {
    id: 3,
    author: "Emma Thompson",
    avatar: "ET",
    title: "Business Success Story",
    content: "6 months after completing the Business module, I've successfully launched my tailoring business! Thanks to this amazing community.",
    likes: 42,
    comments: 15,
    timeAgo: "1 day ago",
    tags: ["Business", "Success", "Inspiration"]
  }
];

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Vibrant Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow tailoring enthusiasts, share your creations, 
            get feedback, and support each other on your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Community Stats */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="h-5 w-5 mr-2 text-tailoring-purple" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tailoring-purple">2,847</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tailoring-rose">156</div>
                  <div className="text-sm text-gray-600">Projects Shared Today</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tailoring-sage">98%</div>
                  <div className="text-sm text-gray-600">Helpful Responses</div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full gradient-purple text-white hover:opacity-90 mb-4">
              Join Discussion
            </Button>
            
            <Button variant="outline" className="w-full border-tailoring-purple text-tailoring-purple hover:bg-tailoring-purple hover:text-white">
              Share Your Project
            </Button>
          </div>

          {/* Community Posts */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {communityPosts.map((post, index) => (
                <Card key={post.id} className={`hover:shadow-lg transition-all duration-300 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-tailoring-purple text-white">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{post.author}</h3>
                          <p className="text-sm text-gray-500">{post.timeAgo}</p>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mt-4">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {post.content}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-tailoring-purple bg-tailoring-cream">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-tailoring-purple transition-colors">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-tailoring-purple transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-tailoring-purple transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
