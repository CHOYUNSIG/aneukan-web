import BannerLayout from "../../layout/banner_layout";
import { HomeBanner } from "./home_banner";
import HomeIntroduction from "./home_introdution";

export default function HomePage() {
  return (
    <BannerLayout banner={<HomeBanner />}>
      <HomeIntroduction />
    </BannerLayout>
  );
}
