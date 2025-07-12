import { Code2, Brain, Database, Globe, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      color: "blue",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "purple",
      skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "cyan",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "LangChain", "n8n", "RAG","Autogen"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      color: "green",
      skills: ["pandas", "NumPy", "SQL", "Data Visualization"]
    },
    {
      icon: Code2,
      title: "DevOps & Tools",
      color: "orange",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"]
    },
  ];

  const colorMap = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600", 
    cyan: "from-cyan-400 to-cyan-600",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    pink: "from-pink-400 to-pink-600"
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorMap[category.color]} bg-opacity-20`}>
                    <Icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-700/50 rounded-lg text-gray-300 text-sm hover:bg-gray-700/70 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;