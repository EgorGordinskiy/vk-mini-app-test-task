import { Group, Text } from "@vkontakte/vkui";
import { FC } from "react";

export const InfoHome: FC = () => {
  return (
    <Group>
      <div style={{ textAlign: "center" }}>
        <Text>
          Добро пожаловать, дорогой пользователь, в тестовое приложение для
          стажировки!
        </Text>
      </div>
    </Group>
  );
};
