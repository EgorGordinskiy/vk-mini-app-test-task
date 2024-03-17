import { Div, Group, Header } from "@vkontakte/vkui";
import { FC } from "react";
import { type IFetchAgeResponse } from "shared/api";
export interface IAgeResult {
  result: IFetchAgeResponse;
}
export const AgeResult: FC<IAgeResult> = (props) => {
  const {
    result: { age, name },
  } = props;

  return (
    <Group>
      <Header>Результат</Header>
      <Div>Имя: {name}</Div>
      <Div>Возраст: {age || "отсутсвует"}</Div>
    </Group>
  );
};
