import { NavIdProps, Panel } from "@vkontakte/vkui";

import { GetFactBlock } from "features/fact";
import { FC } from "react";
import { PanelHeaderFact } from "widgets/fact";
export interface IFactPageProps extends NavIdProps {}

export const FactPage: FC<IFactPageProps> = (props) => {
  const { id: paneId } = props;

  return (
    <Panel id={paneId}>
      <PanelHeaderFact />
      <GetFactBlock />
    </Panel>
  );
};
