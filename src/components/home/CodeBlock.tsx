'use client';
import Typewriter from 'typewriter-effect';
import {useInView} from 'react-intersection-observer';
import {useMemo} from 'react';

interface CodeBlockProps {
  code: string;
  filename?: string;
}

export function CodeBlock({code, filename = 'code.ts'}: CodeBlockProps) {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate height based on content
  const containerStyle = useMemo(() => {
    const lines = code.split('\n');
    const lineHeight = 1.4; // rem
    const paddingY = 0.5; // rem
    const titleBarHeight = 2; // rem
    const height = `${lines.length * lineHeight + paddingY * 2 + titleBarHeight}rem`;
    return {height};
  }, [code]);

  return (
    <div
      ref={ref}
      style={containerStyle}
      className="overflow-hidden rounded-lg border border-primary-200 dark:border-primary-700 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-lg"
    >
      {/* IDE Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-100/80 dark:bg-neutral-800/80 border-b border-primary-200 dark:border-primary-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="ml-4 text-sm text-neutral-600 dark:text-neutral-400 font-mono">
            {filename}
          </span>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-primary-700 dark:text-primary-300 font-['JetBrains_Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace]">
          <code>
            {inView ? (
              <Typewriter
                onInit={typewriter => {
                  typewriter.typeString(code).start();
                }}
                options={{
                  delay: 20,
                  cursor: '\u258b',
                  wrapperClassName: 'text-neutral-600 dark:text-neutral-400',
                }}
              />
            ) : (
              <span style={{opacity: 0}}>{code}</span>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
