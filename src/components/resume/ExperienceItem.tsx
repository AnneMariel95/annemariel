interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string | string[];
}

export function ExperienceItem({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400">{company}</p>
        </div>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {period}
        </span>
      </div>
      {Array.isArray(description) ? (
        <p className="text-neutral-600 dark:text-neutral-300">
          {description.map((item, index) => (
            <span key={index}>
              • {item}
              <br />
            </span>
          ))}
        </p>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
      )}
    </div>
  );
}
