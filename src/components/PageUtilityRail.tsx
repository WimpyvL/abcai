import { JourneyCompass } from './Journey';
import { PageQuickNav } from './PageQuickNav';
import type { PageQuickNavProps } from './PageQuickNav';
import type { JourneyPageKey } from '../types';

interface PageUtilityRailProps {
  journeyPage: JourneyPageKey;
  quickNav?: Omit<PageQuickNavProps, 'className'>;
}

export const PageUtilityRail = ({ journeyPage, quickNav }: PageUtilityRailProps) => {
  return (
    <div className="mb-5 grid items-start gap-2 lg:mb-6 lg:gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
      <JourneyCompass page={journeyPage} className="mb-0" />
      {quickNav ? <PageQuickNav {...quickNav} className="mb-0" /> : null}
    </div>
  );
};
