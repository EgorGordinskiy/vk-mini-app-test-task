import { Button, Div, Group, Textarea } from "@vkontakte/vkui";
import { FC } from "react";
import { useFact } from "..";

export const GetFactBlock: FC = () => {
  const { inputRef, handleClick, fact, isFetching, setFact } = useFact();

  return (
    <Group>
      <Div>
        <Textarea
          id="fact"
          getRef={inputRef}
          value={fact}
          onChange={(e) => {
            setFact(e.target.value);
          }}
        />
      </Div>
      <Div>
        <Button stretched size="l" onClick={handleClick} loading={isFetching}>
          Покажите факт, пожалуйста!
        </Button>
      </Div>
    </Group>
  );
};
