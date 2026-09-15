import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../contexts/ThemeContext';
import type { Project, ProjectStatus } from '../../../types/project';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const getStatusColor = (status: ProjectStatus, isDark: boolean): string => {
  const colors: Record<ProjectStatus, { dark: string; light: string }> = {
    'live-sold': { dark: 'bg-green-500/20 text-green-400', light: 'bg-green-100 text-green-700' },
    'live': { dark: 'bg-blue-500/20 text-blue-400', light: 'bg-blue-100 text-blue-700' },
    'complete': { dark: 'bg-purple-500/20 text-purple-400', light: 'bg-purple-100 text-purple-700' },
    'in-progress': { dark: 'bg-amber-500/20 text-amber-400', light: 'bg-amber-100 text-amber-700' },
    'portfolio': { dark: 'bg-gray-500/20 text-gray-400', light: 'bg-gray-100 text-gray-700' },
  };
  return isDark ? colors[status].dark : colors[status].light;
};

const getCategoryIcon = (category: string): ReactNode => {
  switch (category) {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
  }
};

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isRTL = i18n.language === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`
        relative p-6 rounded-xl border transition-all duration-300 h-full flex flex-col
        ${isDark 
          ? 'bg-[#16181C] border-white/10 hover:border-[#4F7FFF]/50' 
          : 'bg-white border-gray-200 hover:border-[#4F7FFF]/50'
        }
        hover:shadow-lg hover:shadow-[#4F7FFF]/20
      `}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#4F7FFF]/10 to-[#FF6B35]/10 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with Status and Category */}
        <div className={`flex items-start justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-2">
            <span className={`
              px-2.5 py-1 rounded-full text-xs font-medium
              ${getStatusColor(project.status, isDark)}
            `}>
              {project.statusLabel}
            </span>
          </div>
          <div className={`
            p-1.5 rounded-lg
            ${isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-500'}
          `}>
            {getCategoryIcon(project.category)}
          </div>
        </div>

        {/* Title */}
        <h3 className={`
          text-xl font-bold mb-2
          ${isDark ? 'text-white' : 'text-gray-900'}
        `}>
          {project.title}
        </h3>

        {/* Role & Company */}
        {(project.role || project.company) && (
          <div className={`
            text-sm mb-3
            ${isDark ? 'text-gray-400' : 'text-gray-600'}
          `}>
            {project.role && <span className="font-medium">{project.role}</span>}
            {project.role && project.company && <span className="mx-1">@</span>}
            {project.company && <span className="text-[#4F7FFF]">{project.company}</span>}
          </div>
        )}

        {/* Hero Blurb */}
        <p className={`
          text-sm mb-4 line-clamp-3 flex-grow
          ${isDark ? 'text-gray-400' : 'text-gray-600'}
        `}>
          {project.heroBlurb}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`
                px-2 py-1 rounded-md text-xs font-medium
                ${isDark ? 'bg-[#4F7FFF]/20 text-[#4F7FFF]' : 'bg-[#4F7FFF]/10 text-[#4F7FFF]'}
              `}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className={`
              px-2 py-1 rounded-md text-xs font-medium
              ${isDark ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'}
            `}>
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className={`
          flex items-center justify-between pt-4 border-t mt-auto
          ${isDark ? 'border-white/10' : 'border-gray-200'}
          ${isRTL ? 'flex-row-reverse' : ''}
        `}>
          <motion.button
            onClick={() => onViewDetails(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${isDark 
                ? 'bg-[#4F7FFF]/20 text-[#4F7FFF] hover:bg-[#4F7FFF]/30' 
                : 'bg-[#4F7FFF]/10 text-[#4F7FFF] hover:bg-[#4F7FFF]/20'
              }
            `}
          >
            View Details
          </motion.button>

          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-2 rounded-lg transition-colors
                  ${isDark ? 'hover:bg-[#4F7FFF]/20 text-[#4F7FFF]' : 'hover:bg-[#4F7FFF]/10 text-[#4F7FFF]'}
                `}
                aria-label="View Live"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
            {project.repoUrl && (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-2 rounded-lg transition-colors
                  ${isDark ? 'hover:bg-[#4F7FFF]/20 text-gray-400 hover:text-[#4F7FFF]' : 'hover:bg-[#4F7FFF]/10 text-gray-600 hover:text-[#4F7FFF]'}
                `}
                aria-label="View Code"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
