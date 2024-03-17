import { FC } from "react";
import { Panel, PanelHeader, NavIdProps } from "@vkontakte/vkui";

import { InfoHome, SubnavigationBarHome } from "widgets/home";
import { Icon28HomeOutline } from "@vkontakte/icons";
export interface IHomeProps extends NavIdProps {}

export const HomePage: FC<IHomeProps> = (props) => {
  const { id: paneId } = props;

  return (
    <Panel id={paneId}>
      <PanelHeader before={<Icon28HomeOutline />}>Главная</PanelHeader>
      <SubnavigationBarHome />
      <InfoHome />
    </Panel>
  );
};
