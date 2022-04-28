import React, { useEffect } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Login } from "./login";

export const Navbar = () => {
  let history = useHistory();
  const buttonAdmin = () => {
    return (
      <button
        type="button"
        className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
        onClick={() => history.push("/admin/dashboard")}
      >
        <FontAwesomeIcon icon={["fas", "user"]} />
      </button>
    );
  };

  const buttonUser = () => {
    return (
      <button
        type="button"
        className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
        onClick={() => history.push("/user/dashboard")}
      >
        <FontAwesomeIcon icon={["fas", "user"]} />
      </button>
    );
  };
  const logout = () => {
    return (
      <button
        type="button"
        className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("id");
          localStorage.removeItem("email");
          window.location.pathname == "/"
            ? location.reload()
            : history.push("/");
        }}
      >
        Desconectarse
      </button>
    );
  };

  const login = () => {
    return (
      <button
        type="button"
        className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => history.push("/login")}
      >
        Entrar
      </button>
    );
  };

  const navbarHome = () => {
    return (
      <>
        <li>
          <a
            href="#Elgimnasio"
            className="ml-16 border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
            aria-current="page"
          >
            El Gimnasio
          </a>
        </li>
        <li>
          <a
            href="#Suscripciones"
            className="border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
          >
            Suscripciones
          </a>
        </li>
        <li>
          <a
            href="#Contacto"
            className="border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
          >
            Contacto
          </a>
        </li>
      </>
    );
  };

  const navbarHomeLogged = () => {
    return (
      <>
        <li>
          <a
            href="#Elgimnasio"
            className="ml-16 border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
            aria-current="page"
          >
            El Gimnasio
          </a>
        </li>
        <li>
          <a
            href="#Suscripciones"
            className="border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
          >
            Suscripciones
          </a>
        </li>
        <li>
          <a
            href="#Contacto"
            className="border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
          >
            Contacto
          </a>
        </li>
      </>
    );
  };
  // CONFIGURACIÓN NECESARIA DEL TEMA OSCURO

  useEffect(() => {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    console.log(themeToggleDarkIcon);
    console.log(themeToggleLightIcon);

    // Change the icons inside the button based on previous settings

    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  }, []);

  return (
    <nav className=" bg-L-Gray-light border-L-Graty-med px-2 sm:px-4 py-2.5 rounded dark:bg-D-Gray-dark">
      <div className="container flex justify-around mx-auto">
        <div className="flex items-center">
          <div>
            {/* Logo principal del navbar */}
            <a href="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/blacklionbox/image/upload/v1650757336/white-black-lion-box_large_oenn7r.png"
                className="mr-3 h-6 sm:h-9"
                alt="Black Lion Box"
              />
            </a>
            {/* Inicio de botones de navegación interna del home */}
          </div>

          <div>
            <div
              className="hidden justify-start items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-4"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-bellfort">
                {window.location.pathname == "/"
                  ? localStorage.getItem("token")
                    ? navbarHomeLogged()
                    : navbarHome()
                  : ""}

                <li>
                  <a
                    href="https://www.instagram.com/blacklionbox/?hl=en"
                    className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Black-Lion-Box-109771724135332"
                    className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Fin de botones de navegación interna del home */}
        </div>

        <div className="flex items-center">
          {/* Inicio de los botones de acciones de usuario */}

          <div className="flex md:order-2">
            {/* Botón de cambio a modo oscuro */}

            <button
              id="theme-toggle"
              type="button"
              className="text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light border-transparent focus:outline-none rounded-lg text-sm p-2.5"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipule="evenodd"
                ></path>
              </svg>
            </button>
            {localStorage.getItem("token")
              ? localStorage.getItem("role") == "admin"
                ? buttonAdmin()
                : buttonUser()
              : ""}

            {localStorage.getItem("token") ? logout() : login()}

            {/* Botón de menu en vista móvil */}

            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Fin de los botones de acciones de usuario */}
        </div>

        {/* Inicio de botón de navegación para móviles */}

        <div>
          <button
            id="theme-toggle"
            type="button"
            className="text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light border-transparent focus:outline-none rounded-lg text-sm p-2.5"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Fin de botón de navegación para móviles */}
      </div>
    </nav>
  );
};
