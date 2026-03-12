const SCROLL_OFFSET = 112;

const getScrollTopForElement = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const targetTop = rect.top + window.scrollY - SCROLL_OFFSET;

  return Math.max(targetTop, 0);
};

export const scrollToSection = (id: string, updateHash = true) => {
  const element = document.getElementById(id);

  if (!element) {
    return false;
  }

  if (updateHash) {
    const { pathname, search } = window.location;
    window.history.replaceState(null, '', `${pathname}${search}#${id}`);
  }

  window.scrollTo({
    top: getScrollTopForElement(element),
    behavior: 'smooth',
  });

  return true;
};

export const scrollToHashTarget = (hash: string, attempt = 0): boolean => {
  const id = decodeURIComponent(hash.replace(/^#/, ''));

  if (!id) {
    return false;
  }

  const didScroll = scrollToSection(id, false);

  if (!didScroll && attempt < 12) {
    window.setTimeout(() => {
      scrollToHashTarget(hash, attempt + 1);
    }, 80);
  }

  return didScroll;
};
