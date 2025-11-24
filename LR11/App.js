import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit", // перевірка тільки при натисканні кнопки
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    // Скидання форми після відправки з заданими значеннями
    reset({
      firstName: "Пам’ятай",
      lastName: "Про курсову роботу",
      login: "",
    });
  };

  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Поле Login */}
        <label>
          Login:
          <input
            {...register("login", {
              required: "Поле обов'язкове для заповнення!",
              pattern: {
                value: /^[A-Za-z0-9_]+$/, // тільки латиниця та цифри
                message: "Логін повинен містити лише латинські літери та цифри!",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.login && <p>{errors.login.message}</p>}
        </div>

        {/* Поле FirstName */}
        <label>
          FirstName:
          <input
            {...register("firstName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна довжина 5 символів",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>

        {/* Поле LastName */}
        <label>
          LastName:
          <input
            {...register("lastName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна довжина 5 символів",
              },
              maxLength: {
                value: 25,
                message: "Максимальна довжина 25 символів",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <input type="submit" value="Відправити" />
      </form>
    </div>
  );
}

export default App;
