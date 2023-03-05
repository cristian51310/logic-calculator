import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        lateral_section_title: "Logic Calculator",
        lateral_section_subtitle: "The best prepositional calculator",
        you_have_an_account: "You have an account? ",
        enter_as_guest: "Enter as guest",
        sign_up: "Sign Up",
        log_in: "Log In",
        sign_up_welcome: "Create a new account",
        log_in_welcome: "Welcome back",
        user_label: "User",
        password_label: "Password",
        name_label: "Name",
        email_label: "Email"
      },
    },
    es: {
      translation: {
        lateral_section_title: "Calculadora Logica",
        lateral_section_subtitle: "La mejor calculadora preposicional",
        you_have_an_account: "Ya tienes una cuenta? ",
        enter_as_guest: "Entrar como invitado",
        sign_up: "Registrate",
        log_in: "Iniciar Sesion",
        sign_up_welcome: "Crea una nueva cuenta",
        log_in_welcome: "Bienvenido de nuevo",
        user_label: "Usuario",
        password_label: "Contraseña",
        name_label: "Nombre",
        email_label: "Correo Electronico"
      },
    },
  },
});

export default i18n;
