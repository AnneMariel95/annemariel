import Hero from '../components/Hero';
import {RoleCard} from '../components/home/RoleCard';
import {StandupItem} from '../components/home/StandupItem';
import {CodeBlock} from '../components/home/CodeBlock';
import {homeData} from '../data/home';
import Projects from '../components/Projects';

export default function Home() {
  const {roles, standup} = homeData;

  return (
    <div className="space-y-20">
      <Hero />

      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-12 text-center">
          {roles.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.cards.map((card, index) => (
            <RoleCard
              key={index}
              emoji={card.emoji}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-primary-50 dark:bg-neutral-800/50 py-16 transition-colors">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {standup.title}
              </h2>
              <div className="space-y-4">
                {standup.items.map((item, index) => (
                  <StandupItem
                    key={index}
                    label={item.label}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
            <CodeBlock code={standup.codeSnippet} />
          </div>
        </div>
      </section>

      <Projects />
    </div>
  );
}
