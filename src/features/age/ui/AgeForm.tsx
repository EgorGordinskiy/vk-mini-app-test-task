import { Button, Div, FormItem, Group, Spinner } from "@vkontakte/vkui";
import { AgeResult } from "entities/age";
import { FC } from "react";
import { UiInput } from "shared/ui";
import { useAgeForm } from "..";

export const AgeForm: FC = () => {
  const { errors, ageResult, onSubmit, register, isError, isLoading } =
    useAgeForm();

  const statusFormItemName = errors.name || isError ? "error" : "default";
  const bottomFormItemName = errors.name ? (
    errors.name?.message
  ) : ageResult ? (
    <AgeResult result={ageResult} />
  ) : isError ? (
    "Ошибка!"
  ) : isLoading ? (
    <Div>
      <Spinner size="medium" />
    </Div>
  ) : null;

  return (
    <Group>
      <form onSubmit={onSubmit}>
        <FormItem
          top="Имя"
          htmlFor="name"
          status={statusFormItemName}
          bottom={bottomFormItemName}
        >
          <UiInput type="text" {...register("name")} />
        </FormItem>

        <FormItem>
          <Button type="submit" size="l" stretched>
            Определить
          </Button>
        </FormItem>
      </form>
    </Group>
  );
};
