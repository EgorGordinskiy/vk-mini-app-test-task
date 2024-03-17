import {
  Icon20ArticleBoxOutline,
  Icon20StickerSmileOutline,
} from "@vkontakte/icons";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Group, SubnavigationBar, SubnavigationButton } from "@vkontakte/vkui";
import { FC } from "react";
import { DEFAULT_VIEW_PANELS } from "shared/lib";

export const SubnavigationBarHome: FC = () => {
  const routeNavigator = useRouteNavigator();

  return (
    <Group>
      <SubnavigationBar mode="overflow">
        <SubnavigationButton
          before={<Icon20StickerSmileOutline />}
          size="l"
          onClick={() => routeNavigator.push(DEFAULT_VIEW_PANELS.AGE)}
        >
          Определение возраста по имени
        </SubnavigationButton>

        <SubnavigationButton
          before={<Icon20ArticleBoxOutline />}
          size="l"
          onClick={() => routeNavigator.push(DEFAULT_VIEW_PANELS.FACT)}
        >
          Случайный факт
        </SubnavigationButton>
      </SubnavigationBar>
    </Group>
  );
};
