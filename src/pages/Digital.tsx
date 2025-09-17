import React from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, ExternalLink, Code, Database, Brain, Cloud, Users, Award } from "lucide-react";

const Digital = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  return (
    <section>
      {/* Hero Section - Digital & Technologies */}
      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-center md:text-left px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-MN font-semibold leading-tight">
              <span className="text-red-700">DIGITAL</span> TRANSFORMATION
              <br />
              <span className="text-2xl md:text-3xl">& Technology Solutions</span>
            </h1>

            <p className="text-xl font-MN font-bold text-gray-700 leading-tight">
              We leverage cutting-edge technologies and digitalization strategies to drive business transformation and innovation.
            </p>

            <button
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-MN font-semibold text-xl transition-all duration-300 min-w-[200px]"
              onClick={() => navigate("/chi-siamo")}
            >
              LEARN MORE
            </button>
          </div>

          <div className="relative items-center">
            <div className="bg-gradient-to-br from-red-50 to-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <Code className="w-8 h-8 text-red-700" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <Database className="w-8 h-8 text-red-700" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <Brain className="w-8 h-8 text-red-700" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-red-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-MN font-semibold text-gray-900 mb-6">
              Our <span className="text-red-700">Expertise</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine cutting-edge technologies with proven methodologies to deliver exceptional digital solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full-Stack Engineering */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-red-700 mr-3" />
                <h3 className="text-xl font-MN font-semibold text-gray-900">Full-Stack Engineering</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Nx', 'Vite', 'Webpack'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend & Infrastructure */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-red-700 mr-3" />
                <h3 className="text-xl font-MN font-semibold text-gray-900">Backend & Infrastructure</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'Node.js', 'Kubernetes', 'AWS', 'Terraform', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-red-700 mr-3" />
                <h3 className="text-xl font-MN font-semibold text-gray-900">AI & Machine Learning</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {['RAG', 'LangChain', 'BERT', 'Sentence Transformers', 'Pinecone', 'Chroma DB'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & Observability */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-red-700 mr-3" />
                <h3 className="text-xl font-MN font-semibold text-gray-900">DevOps & Observability</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {['GitLab CI/CD', 'Prometheus', 'Grafana', 'Sentry', 'Opsgenie', 'Helm'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Leadership & Management */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-700 mr-3" />
                <h3 className="text-xl font-MN font-semibold text-gray-900">Leadership & Management</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {['Architectural Planning', 'Cross-team Alignment', 'Agile Coaching'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testing & Quality */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-red-700 mr-3" />
                <h3 className="text-xl font-MN font-semibold text-gray-900">Testing & Quality</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {['Playwright', 'Jest', 'DAST', 'TDD', 'WebdriverIO', 'SAST'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member - Sintija Birgele */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-MN font-semibold text-gray-900 mb-4">
              Meet Our <span className="text-red-700">Digital Expert</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <LazyLoadImage
                src="/sintija.jpg"
                alt="Sintija Birgele"
                effect="blur"
                className="w-full max-w-md mx-auto object-cover rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-MN font-semibold text-gray-900">
                  Sintija Birgele
                </h3>
                <p className="text-xl text-red-700 font-MN font-medium mt-2">
                  Software Architect · Founder of Co-Fun
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed font-MN">
                Innovator in full-stack engineering and applied AI with 8+ years of enterprise experience. 
                Founder of Co-Fun and driving force behind agentic AI solutions for construction and energy sectors.
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sintija brings over eight years of expertise in web software engineering and AI-driven product development. 
                  She leads cross-functional teams to deliver scalable full-stack applications across industries such as 
                  insurance, energy, and automotive.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Her work focuses on agentic AI frameworks—notably automating bill-of-quantities planning and quotation 
                  processes for construction software. Sintija is also a conference speaker (JSNation 2024) and dedicated 
                  mentor, teaching full-stack development for nine years at ReDI School of Digital Integration.
                </p>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Conference Talk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Project Focus */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-MN font-semibold text-gray-900 mb-6">
              Current <span className="text-red-700">Innovation</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-700">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-MN font-semibold text-gray-900">
                  European Management – Software Engineering & Consulting
                </h3>
                <span className="text-sm text-gray-500 font-medium bg-red-100 px-3 py-1 rounded-full">
                  June 2025 – Present
                </span>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently pioneering <strong>agentic AI frameworks for construction industry automation</strong>, 
                  revolutionizing how construction companies approach project planning and resource management.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Our cutting-edge solutions automate complex processes including bill-of-quantities planning, 
                  quotation generation, and project optimization using advanced AI algorithms and machine learning models.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  This innovative approach combines deep industry knowledge with state-of-the-art technology to deliver 
                  measurable improvements in efficiency, accuracy, and cost reduction for construction projects of all scales.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="font-MN font-semibold text-gray-900 mb-3">Core Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'LLM Integrations', 'LangChain', 'React', 'AWS', 'AI/ML Frameworks'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[black] py-16 relative overflow-hidden">
        <div className="px-4 flex flex-col lg:flex-row justify-around items-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0 max-w-xl">
            <h2 className="text-3xl font-MN font-500 text-white mb-6 text-center lg:text-left">
              CONTACT
            </h2>
            <p className="text-lg font-MN font-light text-white leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              To interact with our offices and work with us, a reference from an existing client or partner company is required.
            </p>
          </div>

          <div className="w-full lg:w-auto text-center lg:text-right mt-8 lg:mt-0">
            <div className="flex flex-row items-center mb-4 justify-center lg:justify-end">
              <p className="md:text-[.49rem] font-light text-left text-white leading-tight">
                European
                <br />
                Management
                <br />
                Institute
              </p>
            </div>

            <div className="text-white text-[.59rem] text-center lg:text-right font-light">
              <p>Copyright © 2020 European Management Institute</p>
              <p className="mt-1">All rights reserved registration no. 302022000006366</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Digital;
