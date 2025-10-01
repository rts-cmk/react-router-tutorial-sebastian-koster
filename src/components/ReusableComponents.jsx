import { useState } from 'react';
import { Link } from 'react-router-dom';

// Progress Bar Component
export const ProgressBar = ({ currentStep, totalSteps = 7 }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Navigation Buttons Component
export const NavigationButtons = ({ 
  prevLink, 
  nextLink, 
  prevText = "Previous", 
  nextText = "Next" 
}) => {
  return (
    <div className="flex justify-between items-center mt-12 gap-4">
      {prevLink ? (
        <Link to={prevLink}>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center gap-2">
            <span>←</span> {prevText}
          </button>
        </Link>
      ) : <div />}
      
      {nextLink && (
        <Link to={nextLink}>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
            {nextText} <span>→</span>
          </button>
        </Link>
      )}
    </div>
  );
};

// Code Block Component with Copy Functionality
export const CodeBlock = ({ code, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-gray-900 shadow-lg">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );
};

// Info Card Component
export const InfoCard = ({ 
  title, 
  description, 
  icon, 
  variant = "blue" 
}) => {
  const variants = {
    blue: "from-blue-100 to-blue-200 text-blue-800",
    purple: "from-purple-100 to-purple-200 text-purple-800",
    green: "from-green-100 to-green-200 text-green-800",
    orange: "from-orange-100 to-orange-200 text-orange-800",
    pink: "from-pink-100 to-pink-200 text-pink-800",
  };

  return (
    <div className={`bg-gradient-to-r ${variants[variant]} rounded-xl p-4 my-4`}>
      <div className="flex items-start gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div className="flex-1">
          {title && <h3 className="font-semibold mb-2">{title}</h3>}
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Loading Spinner Component
export const LoadingSpinner = ({ size = "md" }) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-16 w-16",
    lg: "h-24 w-24"
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className={`animate-spin rounded-full border-t-4 border-b-4 border-purple-500 ${sizes[size]}`}></div>
    </div>
  );
};

// Page Header Component
export const PageHeader = ({ 
  title, 
  subtitle, 
  icon, 
  iconBg = "bg-white" 
}) => {
  return (
    <div className="text-center mb-12">
      {icon && (
        <div className={`inline-block p-4 ${iconBg} rounded-full shadow-lg mb-6`}>
          <span className="text-4xl">{icon}</span>
        </div>
      )}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
};

// Section Card Component
export const SectionCard = ({ 
  children, 
  className = "",
  hover = false 
}) => {
  const hoverClass = hover ? "hover:shadow-2xl transform hover:-translate-y-1" : "";
  
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 mb-6 transition-all duration-300 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

// Step Header Component (for tutorial steps)
export const StepHeader = ({ stepNumber, icon, title }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-3xl">{icon}</span>
      <h2 className="text-2xl font-semibold text-gray-800">
        Step {stepNumber}: {title}
      </h2>
    </div>
  );
};

// Tooltip/Tip Box Component
export const TipBox = ({ 
  children, 
  type = "info" 
}) => {
  const types = {
    info: "bg-blue-50 border-blue-500 text-blue-700",
    success: "bg-green-50 border-green-500 text-green-700",
    warning: "bg-yellow-50 border-yellow-500 text-yellow-700",
    error: "bg-red-50 border-red-500 text-red-700",
  };

  const icons = {
    info: "💡",
    success: "✓",
    warning: "⚠️",
    error: "❌",
  };

  return (
    <div className={`${types[type]} border-l-4 rounded-lg p-4 my-4`}>
      <div className="flex items-start gap-2">
        <span className="text-xl">{icons[type]}</span>
        <div className="flex-1 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

// Stats Card Component
export const StatsCard = ({ 
  value, 
  label, 
  color = "blue" 
}) => {
  const colors = {
    blue: "from-blue-50 to-blue-100 text-blue-600",
    green: "from-green-50 to-green-100 text-green-600",
    purple: "from-purple-50 to-purple-100 text-purple-600",
    orange: "from-orange-50 to-orange-100 text-orange-600",
    pink: "from-pink-50 to-pink-100 text-pink-600",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} rounded-xl p-6 text-center`}>
      <div className={`text-4xl font-bold ${color}-600 mb-2`}>{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default {
  ProgressBar,
  NavigationButtons,
  CodeBlock,
  InfoCard,
  LoadingSpinner,
  PageHeader,
  SectionCard,
  StepHeader,
  TipBox,
  StatsCard,
};