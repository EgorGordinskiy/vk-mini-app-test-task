import { Div, Group, Text } from "@vkontakte/vkui";
import { FC } from "react";

export const InfoHome: FC = () => {
  return (
    <Group padding="m">
      <Div style={{ textAlign: "center" }}>
        <Text>
          Добро пожаловать, дорогой пользователь, в тестовое приложение для
          стажировки!
        </Text>
      </Div>
    </Group>
  );
};
