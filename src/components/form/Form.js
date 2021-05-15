import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name").min(3),
  age: yup
    .number()
    .min(10)
    .max(20)
    .required("Please enter a age between 10 and 20"),
  web: yup
    .string()
    .matches(
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      "You have to enter an valid url"
    ),
});

function FormList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input placeholder="Must be atleast 3 letters" {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}
      <label htmlFor="age">Age</label>
      <input placeholder="Must be between 10 or 20" {...register("age")} />
      {errors.age && <span>{errors.age.message}</span>}
      <label htmlFor="web">Webadress</label>
      <input placeholder="Must be a valid URL " {...register("web")} />
      {errors.web && <span>{errors.web.message}</span>}

      <input type="submit" />
    </form>
  );
}

export default FormList;
