import { useRouter, usePathname } from "next/navigation";

/**
 * Hook for smooth scroll navigation between sections.
 * Handles both same-page anchor scrolling and cross-page routing.
 */
export function useScrollToSection() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (href: string) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return { scrollToSection };
}
