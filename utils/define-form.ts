import { useForm } from "vee-validate";

export default function defineForm(config: never) {
  const form = useForm(config);
  const { defineField: defineFieldOriginal } = form;

  const defineField = (name: string, config?: object) => {
    return defineFieldOriginal(name, {
      ...config,
      props(state) {
        return {
          "error-messages": state.errors,
        };
      },
    });
  };

  return {
    ...form,
    defineField,
  };
}
