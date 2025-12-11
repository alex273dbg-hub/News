import withSkeleton from "../../helpers/hock/withSkeleton";
import NewsBanner from "../NewsBasnner/NewsBanner";
import styles from "./styles.module.css";

function BannersList({ banners }) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
