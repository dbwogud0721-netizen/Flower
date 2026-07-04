import { HeroSection } from "@/components/sections/HeroSection";
import { QuickMenu } from "@/components/sections/QuickMenu";
import { SeasonBanner } from "@/components/sections/SeasonBanner";
import { TodaysPicks } from "@/components/sections/TodaysPicks";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";

function HomeScreen() {
  return (
    <div className="pb-28">
      <HeroSection />
      <QuickMenu />

      <div className="mt-6 space-y-6">
        <SeasonBanner />
        <TodaysPicks />
      </div>

      <BottomNavigation activeHref="/" />
    </div>
  );
}

export { HomeScreen };
