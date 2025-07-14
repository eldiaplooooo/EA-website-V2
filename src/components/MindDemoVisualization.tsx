import React from 'react';
import { Brain, Cpu, Network } from 'lucide-react';

const MindDemoVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <Brain className="h-16 w-16 text-blue-600 dark:text-blue-400 animate-pulse" />
          <div className="absolute -top-4 -left-4">
            <Cpu className="h-8 w-8 text-purple-600 dark:text-purple-400 animate-bounce" />
          </div>
          <div className="absolute -bottom-4 -right-4">
            <Network className="h-8 w-8 text-green-600 dark:text-green-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          MIND AI Processing Demo
        </p>
      </div>
    </div>
  );
};

export default MindDemoVisualization;