import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeBannerRouterButton from "./home_banner_router_button";

export function HomeBanner() {
  return (
    <div className="flex flex-row gap-8 justify-between w-full px-8 max-sm:flex-col">
      <div className="flex flex-col gap-2 justify-end h-full text-white drop-shadow-lg">
        <h1 className="text-5xl font-bold">아늑한</h1>
        <p className="text-lg">
          <span className="font-bold">:</span> 시니어 낙상 감지 홈캠 서비스
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 max-sm:w-full max-sm:items-end">
        <HomeBannerRouterButton width="256px" height="64px" href="/register">
          <div className="w-full text-start flex flex-row justify-between items-center">
            <div className="align-start">
              <p className="font-bold">홈캠 등록하기</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </div>
        </HomeBannerRouterButton>
        <HomeBannerRouterButton width="256px" height="64px" href="/login">
          <div className="w-full text-start flex flex-row justify-between items-center">
            <div className="align-start">
              <p className="text-xs">이미 등록하셨나요?</p>
              <p className="font-bold">홈캠 관리하기</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </div>
        </HomeBannerRouterButton>
      </div>
    </div>
  );
}
