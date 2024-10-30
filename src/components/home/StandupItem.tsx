interface StandupItemProps {
  label: string;
  content: string;
}

export function StandupItem({label, content}: StandupItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-primary-400 font-mono">{'>'}</span>
      <p className="text-neutral-800 dark:text-neutral-200">
        <strong>{label}:</strong> {content}
      </p>
    </div>
  );
}
