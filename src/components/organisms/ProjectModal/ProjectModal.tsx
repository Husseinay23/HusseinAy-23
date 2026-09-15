import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../contexts/ThemeContext';
import type { Project, ProjectStatus } from '../../../types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const getStatusColor = (status: ProjectStatus, isDark: boolean): string => {
  const colors: Record<ProjectStatus, { dark: string; light: string }> = {
    'live-sold': { dark: 'bg-green-500/20 text-green-400 border-green-500/30', light: 'bg-green-100 text-green-700 border-green-200' },
    'live': { dark: 'bg-blue-500/20 text-blue-400 border-blue-500/30', light: 'bg-blue-100 text-blue-700 border-blue-200' },
    'complete': { dark: 'bg-purple-500/20 text-purple-400 border-purple-500/30', light: 'bg-purple-100 text-purple-700 border-purple-200' },
    'in-progress': { dark: 'bg-amber-500/20 text-amber-400 border-amber-500/30', light: 'bg-amber-100 text-amber-700 border-amber-200' },
    'portfolio': { dark: 'bg-gray-500/20 text-gray-400 border-gray-500/30', light: 'bg-gray-100 text-gray-700 border-gray-200' },
  };
  return isDark ? colors[status].dark : colors[status].light;
};

const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'flagship': 'Flagship Project',
    'in-progress': 'In Progress',
    'mobile': 'Mobile App',
    'research': 'Research / Technical',
  };
  return labels[category] || category;
};

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isRTL = i18n.language === 'ar';

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className={`
              w-full h-full rounded-2xl overflow-hidden flex flex-col
              ${isDark ? 'bg-[#0B0C0E] border border-white/10' : 'bg-white border border-gray-200'}
              shadow-2xl
            `}>
              {/* Header */}
              <div className={`
                px-6 py-4 border-b flex items-center justify-between
                ${isDark ? 'border-white/10 bg-[#16181C]' : 'border-gray-200 bg-gray-50'}
                ${isRTL ? 'flex-row-reverse' : ''}
              `}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-medium border
                    ${getStatusColor(project.status, isDark)}
                  `}>
                    {project.statusLabel}
                  </span>
                  <span className={`
                    text-xs font-medium
                    ${isDark ? 'text-gray-500' : 'text-gray-400'}
                  `}>
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    p-2 rounded-lg transition-colors
                    ${isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-200 text-gray-600'}
                  `}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-4xl mx-auto">
                  {/* Title Section */}
                  <div className="mb-8">
                    <h2 className={`
                      text-3xl md:text-4xl font-bold mb-3
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      {project.title}
                    </h2>
                    
                    {/* Role & Company */}
                    {(project.role || project.company || project.period) && (
                      <div className={`
                        flex flex-wrap items-center gap-2 text-sm
                        ${isDark ? 'text-gray-400' : 'text-gray-600'}
                        ${isRTL ? 'flex-row-reverse' : ''}
                      `}>
                        {project.role && (
                          <span className="font-medium">{project.role}</span>
                        )}
                        {project.company && (
                          <>
                            <span>@</span>
                            <span className="text-[#4F7FFF] font-medium">{project.company}</span>
                          </>
                        )}
                        {project.period && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{project.period}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Hero Blurb */}
                  <div className={`
                    p-6 rounded-xl mb-8
                    ${isDark ? 'bg-[#16181C] border border-white/10' : 'bg-gray-50 border border-gray-200'}
                  `}>
                    <p className={`
                      text-lg leading-relaxed
                      ${isDark ? 'text-gray-300' : 'text-gray-700'}
                    `}>
                      {project.heroBlurb}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className={`
                      text-lg font-semibold mb-4
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`
                            px-3 py-1.5 rounded-lg text-sm font-medium
                            ${isDark ? 'bg-[#4F7FFF]/20 text-[#4F7FFF]' : 'bg-[#4F7FFF]/10 text-[#4F7FFF]'}
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="mb-8">
                    <h3 className={`
                      text-lg font-semibold mb-4
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      About This Project
                    </h3>
                    <p className={`
                      text-base leading-relaxed whitespace-pre-line
                      ${isDark ? 'text-gray-400' : 'text-gray-600'}
                    `}>
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className={`
                      text-lg font-semibold mb-4
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className={`
                            flex items-start gap-3
                            ${isRTL ? 'flex-row-reverse text-right' : ''}
                          `}
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#4F7FFF] to-[#FF6B35] flex items-center justify-center text-white text-xs font-bold mt-0.5">
                            {index + 1}
                          </span>
                          <span className={`
                            text-base
                            ${isDark ? 'text-gray-300' : 'text-gray-700'}
                          `}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  {(project.liveUrl || project.repoUrl) && (
                    <div className={`
                      flex flex-wrap gap-4 pt-6 border-t
                      ${isDark ? 'border-white/10' : 'border-gray-200'}
                      ${isRTL ? 'flex-row-reverse' : ''}
                    `}>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#4F7FFF] to-[#FF6B35] text-white font-medium hover:shadow-lg hover:shadow-[#4F7FFF]/50 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Live Site
                        </motion.a>
                      )}
                      {project.repoUrl && (
                        <motion.a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border-2
                            ${isDark 
                              ? 'border-[#4F7FFF] text-[#4F7FFF] hover:bg-[#4F7FFF]/10' 
                              : 'border-[#4F7FFF] text-[#4F7FFF] hover:bg-[#4F7FFF]/10'
                            }
                          `}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Code
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
