import React from 'react';
import {homeData} from '../data/home';
import {EmojiIcon} from './home/EmojiIcon';
import {CodeBlock} from './home/CodeBlock';

function Hero() {
  const {hero} = homeData;

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 py-20 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-600 dark:text-primary-400">
              {hero.title}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              {hero.subtitle}
            </p>
            <div className="flex space-x-4 text-6xl">
              {hero.emojis.map((emoji, index) => (
                <EmojiIcon key={index} emoji={emoji} />
              ))}
            </div>
          </div>
          <CodeBlock code={hero.codeSnippet} filename="LifeBalance.ts" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
