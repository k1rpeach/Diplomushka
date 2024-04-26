import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/slices/userSlice";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Введите E-Mail"),
  userpassword: yup
    .string()
    .min(8, "Не менее 8 символов")
    .required("Введите пароль"),
});

const mockUser = {
  mail: "kiryusha@mail.ru",
  phone_number: "123123123",
  user_id: 1,
  name: "YUNUS KOROL",
  reg_data: new Date().toISOString(),
  city: "Tashkent",
};

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const onLoginFormSubmit: SubmitHandler<ILoginForm> = (data) => {
    // data ? navigate("/main") : navigate("/");
    // if (data) {
    //   navigate("/main")
    // } else {
    //   navigate("/")
    // }
    dispatch(changeUser(mockUser));
    if (data.useremail == mockUser.mail && data.userpassword == "123123123") {
      navigate("/main");
    } else {
      navigate("/");
      alert("Неверные данные")
    }

    console.log("USER: ", user);
  };

  return (
    <SCLoginPage>
      <div>
        <AppHeading headingText={"Авторизация"} headingType={"h1"} />
        <form onSubmit={handleSubmit(onLoginFormSubmit)} className="login">
          <div className="authorisation">
            <Controller
              name="useremail"
              control={control}
              render={({ field }) => (
                <AppInput
                  isError={errors.useremail ? true : false}
                  errorMessage={errors.useremail?.message}
                  type={"email"}
                  placeholder={"E-mail"}
                  {...field}
                />
              )}
            />
            <Controller
              name="userpassword"
              control={control}
              render={({ field }) => (
                <AppInput
                  isError={errors.userpassword ? true : false}
                  errorMessage={errors.userpassword?.message}
                  type={"password"}
                  placeholder={"Пароль"}
                  {...field}
                />
              )}
            />
            <AppButton type="submit" buttonText={"Войти"} className="btn-76" />
          </div>
           <div className="registration">
            <span>
            У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
            </span>
          </div> 
        </form>
      </div>
    </SCLoginPage>
  );
};
