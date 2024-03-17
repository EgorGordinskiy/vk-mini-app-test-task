import { FC } from "react";
import { Panel, NavIdProps } from "@vkontakte/vkui";
import { AgeForm } from "features/age";
import { PanelHeaderAge } from "widgets/age";

export interface IAgePageProps extends NavIdProps {}

export const AgePage: FC<IAgePageProps> = (props) => {
  const { id: panelId } = props;

  return (
    <Panel id={panelId}>
      <PanelHeaderAge />
      <AgeForm />
    </Panel>
  );
};
