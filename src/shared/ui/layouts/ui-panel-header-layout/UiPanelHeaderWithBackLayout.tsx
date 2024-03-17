import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { FC } from "react";

interface IUiPanelHeaderWithBackLayoutProps {
  title: string;
}
export const UiPanelHeaderWithBackLayout: FC<
  IUiPanelHeaderWithBackLayoutProps
> = (props) => {
  const { title } = props;

  const routeNavigator = useRouteNavigator();

  return (
    <PanelHeader
      before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
    >
      {title}
    </PanelHeader>
  );
};
