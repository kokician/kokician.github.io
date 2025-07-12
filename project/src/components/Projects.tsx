import { ExternalLink, Github, Brain, Globe, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform using machine learning to predict user behavior and optimize business metrics.",
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS"],
      icon: Brain,
      color: "blue",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced search, real-time inventory, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Docker"],
      icon: Globe,
      color: "purple",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Smart Data Pipeline",
      description: "Automated ETL pipeline processing millions of records daily with real-time monitoring and alerting.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Apache Spark", "Kafka", "Redis", "Kubernetes"],
      icon: Database,
      color: "cyan",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile AI Assistant",
      description: "Cross-platform mobile app with voice recognition and natural language processing capabilities.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React Native", "OpenAI API", "Firebase", "TensorFlow Lite"],
      icon: Smartphone,
      color: "green",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const colorMap = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    cyan: "from-cyan-400 to-cyan-600",
    green: "from-green-400 to-green-600"
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions at the intersection of AI and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-r ${colorMap[project.color]} bg-opacity-20 backdrop-blur-sm`}>
                    <Icon className={`w-5 h-5 text-${project.color}-400`} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;