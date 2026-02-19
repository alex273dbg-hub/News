import Main from "@/pages/main/ui/Page";
import { useTheme } from "../providers/ThemeProviders";
import { Header } from "@/widgets/header/ui";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default BaseLayout;
