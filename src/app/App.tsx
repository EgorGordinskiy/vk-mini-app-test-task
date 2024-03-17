import { View, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { FactPage } from "pages/fact";
import { AgePage } from "pages/age";
import { HomePage } from "pages/home";
import { DEFAULT_VIEW_PANELS } from "shared/lib";

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } =
    useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <HomePage id={DEFAULT_VIEW_PANELS.HOME} />
          <FactPage id={DEFAULT_VIEW_PANELS.FACT} />
          <AgePage id={DEFAULT_VIEW_PANELS.AGE} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
