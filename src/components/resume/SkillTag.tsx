interface SkillTagProps {
  skill: string;
}

export function SkillTag({skill}: SkillTagProps) {
  return (
    <span className="px-3 py-1 bg-primary-50 dark:bg-neutral-800 text-primary-600 dark:text-primary-400 rounded-full text-sm border border-primary-100 dark:border-primary-800">
      {skill}
    </span>
  );
}
