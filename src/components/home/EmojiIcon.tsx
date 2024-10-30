interface EmojiIconProps {
  emoji: string;
}

export function EmojiIcon({emoji}: EmojiIconProps) {
  return (
    <span className="transform hover:scale-110 transition-transform hover:text-primary-500">
      {emoji}
    </span>
  );
}
