import {aboutData} from '../../data/about';
import {AboutItem} from '../../components/about/AboutItem';
import {CodeBlock} from '../../components/home/CodeBlock';
import {ResumeSection} from '../../components/resume/ResumeSection';

export default function About() {
  const {hero, journey, philosophy, interests, values} = aboutData;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400">
          {hero.title}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          {hero.subtitle}
        </p>
      </div>

      {/* Journey */}
      <ResumeSection title={journey.title}>
        <div className="space-y-4">
          {journey.content.map((paragraph, index) => (
            <p key={index} className="text-neutral-600 dark:text-neutral-300">
              {paragraph}
            </p>
          ))}
        </div>
      </ResumeSection>

      {/* Philosophy */}
      <ResumeSection title={philosophy.title}>
        <div className="grid md:grid-cols-2 gap-8">
          {philosophy.items.map((item, index) => (
            <AboutItem
              key={index}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </ResumeSection>

      {/* Interests */}
      <ResumeSection title={interests.title}>
        <div className="grid md:grid-cols-2 gap-8">
          {interests.items.map((item, index) => (
            <AboutItem
              key={index}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </ResumeSection>

      {/* Values */}
      <ResumeSection title={values.title}>
        <div className="mt-6">
          <CodeBlock code={values.codeSnippet} />
        </div>
      </ResumeSection>
    </div>
  );
}
