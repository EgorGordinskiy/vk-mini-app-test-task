import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAgeQuery } from "entities/age";
import { type IFetchAgeParams } from "shared/api";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z]*$/, "Имя может состоять только из букв"),
});

export function useAgeForm() {
  const [params, setParams] = useState<IFetchAgeParams>({ name: "" });

  const {
    data: ageResult,
    isLoading,
    isError,
  } = useAgeQuery({
    params,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<IFetchAgeParams>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(() => {
    setParams({ name });
  });

  const name = watch("name");

  useEffect(() => {
    trigger("name");
  }, [name, trigger]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (schema.isValidSync({ name })) setParams({ name });
    }, 3000);

    return () => clearTimeout(debounceTimeout);
  }, [name]);

  return {
    register,
    onSubmit,
    isLoading,
    isError,
    ageResult,
    errors,
  };
}
