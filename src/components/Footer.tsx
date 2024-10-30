import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 p-4 mt-auto transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-3">
            <code className="bg-primary-50 dark:bg-neutral-800 px-3 py-1 rounded-lg text-sm shadow-sm text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800 transition-colors">
              status: creating.future && ready.forOpportunities
            </code>
          </div>
          <div className="text-sm text-primary-500 dark:text-primary-400 text-center">
            <span className="font-mono">while</span>(innovating) {'{'}
            <span className="ml-2">
              code.write() && tech.explore() && knowledge.share()
            </span>
            {'}'}
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
            Copyright © {new Date().getFullYear()} • Anne Mariel
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
