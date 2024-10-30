import {resumeData} from '../../data/resume';
import {ResumeSection} from '../../components/resume/ResumeSection';
import {ExperienceItem} from '../../components/resume/ExperienceItem';
import {SkillTag} from '../../components/resume/SkillTag';
import Projects from '../../components/Projects';

export default function Resume() {
  const {personal, experience, education, skills} = resumeData;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400">
          {personal.name}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          {personal.title}
        </p>
        <p className="text-neutral-600 dark:text-neutral-300">
          {personal.location}
        </p>
      </div>

      {/* About */}
      <ResumeSection title="About">
        <p className="text-neutral-600 dark:text-neutral-300">
          {personal.about}
        </p>
      </ResumeSection>

      {/* Experience */}
      <ResumeSection title="Experience">
        <div className="space-y-8">
          {experience.map((job, index) => (
            <ExperienceItem
              key={index}
              title={job.title}
              company={job.company}
              period={job.period}
              description={job.description}
            />
          ))}
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            {education.school}
          </h3>
          <p className="text-primary-600 dark:text-primary-400">
            {education.degree}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {education.period}
          </p>
        </div>
      </ResumeSection>

      {/* Skills */}
      <ResumeSection title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </ResumeSection>

      {/* Projects */}
      <Projects />
    </div>
  );
}
