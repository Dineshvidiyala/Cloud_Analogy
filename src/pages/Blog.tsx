import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch in 2025",
      excerpt: "Discover the latest trends and innovations shaping the cloud computing landscape, from serverless architectures to edge computing solutions.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      category: "Cloud Computing",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Applications with Microservices Architecture",
      excerpt: "Learn how microservices architecture can help you build more resilient and scalable applications that can grow with your business.",
      author: "Michael Chen",
      date: "January 12, 2025",
      category: "Architecture",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "DevOps Best Practices for Modern Software Development",
      excerpt: "Explore essential DevOps practices that can streamline your development workflow and improve deployment reliability.",
      author: "Emily Rodriguez",
      date: "January 10, 2025",
      category: "DevOps",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Security First: Implementing Zero Trust Architecture",
      excerpt: "Understanding the principles of zero trust security and how to implement it in your organization for better protection.",
      author: "David Kim",
      date: "January 8, 2025",
      category: "Security",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "AI and Machine Learning in Cloud Infrastructure",
      excerpt: "How artificial intelligence and machine learning are revolutionizing cloud infrastructure management and optimization.",
      author: "Lisa Wang",
      date: "January 5, 2025",
      category: "AI/ML",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Container Orchestration with Kubernetes: A Complete Guide",
      excerpt: "Master the fundamentals of Kubernetes and learn how to effectively orchestrate containerized applications at scale.",
      author: "Alex Thompson",
      date: "January 3, 2025",
      category: "Containers",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "12 min read"
    }
  ];

  const categories = ["All", "Cloud Computing", "Architecture", "DevOps", "Security", "AI/ML", "Containers"];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, trends, and best practices in cloud computing, 
            software development, and digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <div className="text-blue-200 text-sm font-medium mb-2">FEATURED POST</div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-blue-200 text-sm mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <button className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="mt-4 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;