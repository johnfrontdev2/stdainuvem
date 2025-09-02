'use client';

import { useInView } from '@/hooks/useInView';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, MessageCircle, Share, Eye, ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  const { ref, isInView } = useInView();

  const instagramPosts = [
    {
      image: 'https://images.pexels.com/photos/19882420/pexels-photo-19882420.jpeg',
      likes: '2.4k',
      comments: '180',
      engagement: '8.2%'
    },
    {
      image: 'https://images.pexels.com/photos/238480/pexels-photo-238480.jpeg',
      likes: '3.1k',
      comments: '245',
      engagement: '9.8%'
    },
    {
      image: 'https://images.pexels.com/photos/5911995/pexels-photo-5911995.jpeg',
      likes: '1.8k',
      comments: '124',
      engagement: '7.1%'
    }
  ];

  const websites = [
    {
      title: 'E-commerce Premium',
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?w=600&h=400&fit=crop',
      conversion: '12.4%',
      bounce: '32%'
    },
    {
      title: 'Landing Page SaaS',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=600&h=400&fit=crop',
      conversion: '18.7%',
      bounce: '28%'
    }
  ];

  const videoContent = [
    {
      thumbnail: 'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?w=300&h=400&fit=crop',
      views: '847k',
      platform: 'TikTok',
      engagement: '12.8%'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=300&h=400&fit=crop',
      views: '1.2M',
      platform: 'Reels',
      engagement: '15.2%'
    },
        {
      thumbnail: 'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?w=300&h=400&fit=crop',
      views: '847k',
      platform: 'TikTok',
      engagement: '12.8%'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=300&h=400&fit=crop',
      views: '1.2M',
      platform: 'Reels',
      engagement: '15.2%'
    }
  ];

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio que <span className="text-blue-600">gera resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada projeto é desenvolvido com foco em performance e conversão
          </p>
        </div>

        {/* Instagram Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Gestão de Instagram</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {instagramPosts.map((post, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-0 shadow-lg transform transition-all duration-700 hover:scale-105 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt="Instagram post"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm">Ver post</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">
                      {post.engagement} eng.
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Websites */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sites e Landing Pages</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {websites.map((site, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-0 shadow-lg transform transition-all duration-700 hover:shadow-xl ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <div className="relative">
                  <img 
                    src={site.image} 
                    alt={site.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-bold mb-2">{site.title}</h4>
                    <div className="flex gap-4">
                      <div>
                        <span className="text-xs opacity-80">Conversão</span>
                        <div className="font-bold">{site.conversion}</div>
                      </div>
                      <div>
                        <span className="text-xs opacity-80">Bounce Rate</span>
                        <div className="font-bold">{site.bounce}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Últimos Conteúdos</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {videoContent.map((video, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-0 shadow-lg transform transition-all duration-700 hover:scale-105 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${1000 + index * 200}ms` }}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt="Video thumbnail"
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-900 fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.platform}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold">{video.views} views</div>
                    <div className="text-xs opacity-80">{video.engagement} engagement</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            Ver portfolio completo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}