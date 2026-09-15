import type { ReactNode } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { ProjectCard } from '../../components/molecules/ProjectCard';
import { ProjectModal } from '../../components/organisms/ProjectModal';
import { projects, projectFilters, getProjectsByCategory } from '../../data/projects';
import type { Project, ProjectCategory } from '../../types/project';

type FilterType = ProjectCategory | 'all';

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isRTL = i18n.language === 'ar';

  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = getProjectsByCategory(activeFilter);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  const getCategoryIcon = (id: string): ReactNode => {
    switch (id) {
      case 'flagship':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case 'in-progress':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'research':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className={`
            text-4xl md:text-5xl font-bold mb-4
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            {t('projects.title')}
          </h2>
          <p className={`
            text-lg mb-2
            ${isDark ? 'text-gray-400' : 'text-gray-600'}
          `}>
            {t('projects.subtitle')}
          </p>
          {/* Stats */}
          <div className={`
            flex flex-wrap justify-center gap-6 mt-6
            ${isRTL ? 'flex-row-reverse' : ''}
          `}>
            <div className="text-center">
              <span className={`
                text-2xl font-bold
                ${isDark ? 'text-[#4F7FFF]' : 'text-[#4F7FFF]'}
              `}>
                {projects.filter(p => p.status === 'live-sold').length}
              </span>
              <span className={`
                block text-sm
                ${isDark ? 'text-gray-500' : 'text-gray-500'}
              `}>
                Shipped & Sold
              </span>
            </div>
            <div className="text-center">
              <span className={`
                text-2xl font-bold
                ${isDark ? 'text-[#FF6B35]' : 'text-[#FF6B35]'}
              `}>
                {projects.filter(p => p.category === 'flagship').length}
              </span>
              <span className={`
                block text-sm
                ${isDark ? 'text-gray-500' : 'text-gray-500'}
              `}>
                Flagship Projects
              </span>
            </div>
            <div className="text-center">
              <span className={`
                text-2xl font-bold
                ${isDark ? 'text-green-400' : 'text-green-600'}
              `}>
                {projects.filter(p => p.status === 'in-progress').length}
              </span>
              <span className={`
                block text-sm
                ${isDark ? 'text-gray-500' : 'text-gray-500'}
              `}>
                In Development
              </span>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`
            flex flex-wrap gap-2 justify-center mb-12
            ${isRTL ? 'flex-row-reverse' : ''}
          `}
        >
          {projectFilters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  activeFilter === filter.id
                    ? isDark
                      ? 'bg-[#4F7FFF] text-white shadow-lg shadow-[#4F7FFF]/50'
                      : 'bg-[#4F7FFF] text-white shadow-lg shadow-[#4F7FFF]/30'
                    : isDark
                    ? 'bg-[#16181C] text-gray-300 hover:bg-[#0B0C0E] border border-white/10'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              {getCategoryIcon(filter.id)}
              {filter.label}
              <span className={`
                px-1.5 py-0.5 rounded text-xs
                ${activeFilter === filter.id 
                  ? 'bg-white/20' 
                  : isDark ? 'bg-white/10' : 'bg-gray-200'
                }
              `}>
                {filter.id === 'all' 
                  ? projects.length 
                  : projects.filter(p => p.category === filter.id).length
                }
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                No projects found for this category.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                ${isRTL ? 'direction-rtl' : ''}
              `}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
