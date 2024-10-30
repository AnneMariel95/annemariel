interface AboutItemProps {
  emoji: string;
  title: string;
  description: string;
}

export function AboutItem({emoji, title, description}: AboutItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{emoji}</span>
        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
          {title}
        </h3>
      </div>
      <p className="text-neutral-600 dark:text-neutral-300 pl-11">
        {description}
      </p>
    </div>
  );
}
