import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";

export function TagList({ className, children }) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx(className, "flex flex-wrap gap-4")}>
      {children}
      </ul>
    </FadeInStagger>
    
  );
}

export function TagListItem({ className, children }) {
  return (
    <FadeIn>
      <li
      className={clsx(
        "rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600",
        className
      )}
    >
      {children}
    </li>
    </FadeIn>
    
  );
}
