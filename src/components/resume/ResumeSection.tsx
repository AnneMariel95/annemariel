interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({title, children}: ResumeSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
