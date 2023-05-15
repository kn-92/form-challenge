import "./Form.scss";

import { useAppDispatch } from "../../redux/hooks";
import { postDish } from "../../redux/extraReducers";

import { useForm, SubmitHandler } from "react-hook-form";

import { FormValues } from "../types";

const Form = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      preparation_time: "",
      type: "",
      no_of_slices: null,
      diameter: null,
      spiciness_scale: null,
      slices_of_bread: null,
    },
  });

  const submitForm: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data, errors + "submitted");
    dispatch(
      postDish({
        name: data.name,
        preparation_time: data.preparation_time,
        type: data.type,
        no_of_slices: data.no_of_slices,
        diameter: data.diameter,
        spiciness_scale: data.spiciness_scale,
        slices_of_bread: data.slices_of_bread,
      })
    );
    reset();
  };
  const selectValue = watch("type");
  const nameValue = watch("name");
  console.log(nameValue.length);

  return (
    <form className="form" onSubmit={handleSubmit(submitForm)}>
      {/* Name input*/}
      <label className="titleLabel">Add meal to database</label>
      <label htmlFor="name">Name of your meal</label>
      <input
        className="input"
        {...register("name", {
          required: "Please type meal name.",
          minLength: { value: 3, message: "Please use at least 3 letters" },
        })}
        type="text"
        placeholder="Meal name"
      />
      {errors.name?.message && (
        <p className="formErrorMessage">{errors.name?.message as string}</p>
      )}

      {/* Preparation time input*/}
      <label htmlFor="time">Preparation time</label>
      <input
        className="input"
        {...register("preparation_time", {
          required: "Please type valid preparation time.",
          min: "00:00:01",
        })}
        type="time"
        step={"1"}
      />
      {errors.preparation_time?.message && (
        <p className="formErrorMessage">
          {errors.preparation_time?.message as string}
        </p>
      )}

      {/* Select type input*/}
      <label htmlFor="select">Select dish type</label>
      <select
        {...register("type", {
          required: "Please choose meal type.",
        })}
      >
        <option hidden={true}>Choose here</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
      {errors.type?.message && (
        <p className="formErrorMessage">{errors.type?.message as string}</p>
      )}

      {selectValue === "pizza" && (
        <>
          {/* Pizza number of slices input*/}
          <label>Type number of slices</label>
          <input
            className="additionalInput"
            {...register("no_of_slices", {
              required: "Please choose number of slices.",
            })}
            type="number"
            min={1}
          />
          {errors.no_of_slices?.message && (
            <p className="formErrorMessage">
              {errors.no_of_slices?.message as string}
            </p>
          )}

          {/* Pizza diameter input*/}
          <label>Type diameter of pizza</label>
          <input
            className="additionalInput"
            {...register("diameter", {
              required: "Please type diameter of pizza.",
            })}
            type="number"
            min={1}
            step={0.1}
          />
          {errors.diameter?.message && (
            <p className="formErrorMessage">
              {errors.diameter?.message as string}
            </p>
          )}
        </>
      )}
      {selectValue === "soup" && (
        <>
          {/* Soup spiciness input*/}
          <label>Type spiciness of soup.</label>
          <input
            className="additionalInput"
            {...register("spiciness_scale", {
              required: "Please type spiciness of soup in (0-10) scale.",
            })}
            type="number"
            min={1}
            max={10}
          />
          {errors.spiciness_scale?.message && (
            <p className="formErrorMessage">
              {errors.spiciness_scale?.message as string}
            </p>
          )}
        </>
      )}
      {selectValue === "sandwich" && (
        <>
          {/* Slices of bread input*/}
          <label>Type slices of bread.</label>
          <input
            className="additionalInput"
            {...register("slices_of_bread", {
              required: "Please type number of bread slices.",
            })}
            type="number"
            min={1}
          />
          {errors.slices_of_bread?.message && (
            <p className="formErrorMessage">
              {errors.slices_of_bread?.message as string}
            </p>
          )}
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
