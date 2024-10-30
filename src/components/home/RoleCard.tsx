interface RoleCardProps {
  emoji: string;
  title: string;
  description: string;
}

export function RoleCard({emoji, title, description}: RoleCardProps) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-primary-100 dark:border-primary-800 hover:border-primary-200 dark:hover:border-primary-700">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
    </div>
  );
}
