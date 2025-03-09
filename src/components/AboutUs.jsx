import React, { useEffect } from "react";

import "../App.css";
import { Link } from "react-router-dom";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="container-fluid background-image d-flex align-items-center justify-content-center">
        <div className="container d-flex">
          <div className="col card-bg-color-hero rounded py-3">
              <h1 className="fw-bold text-center display-4">
                Sobre este proyecto
              </h1>
          </div>
          <div className="col d-none d-md-flex py-5"></div>
        </div>
      </div>
      <div className="container">
        <div className="pt-5">
          <div className="bg-light px-5 py-3 rounded shadow mb-4">
            <h3 className="display-5 fw-bold mb-3">
              <i className="bi bi-clock icon-color fs-1 me-2"></i>Duración
            </h3>
            <p className="fs-5 text-muted mb-4">
              Participamos de un bootcamp intensivo de trece semanas que nos
              llevó a invertir más de 40 horas semanales, acompañadas de
              incontables litros de café ☕ y mate 🧉. Entre líneas de código y
              desafíos constantes, el aprendizaje práctico culminó en las
              últimas tres semanas con este proyecto final donde transformamos
              ideas en soluciones reales e innovadoras.
            </p>
          </div>
          <div className="bg-light px-5 py-3 rounded shadow mb-4">
            <h3 className="display-5 fw-bold mb-4">
              <i className="bi bi-calendar-check icon-color fs-1 me-2"></i>
              Planificación
            </h3>
            <p className="fs-5 text-muted mb-2">
              Para la gestión del proyecto, nos apoyamos en Notion como nuestra
              brújula organizativa, estructurando las tareas en ciclos semanales
              y clasificándolas en un tablero dinámico según su avance. GitHub
              fue nuestro aliado tecnológico, centralizando el trabajo del
              equipo y asegurando una colaboración fluida y eficiente, como
              engranajes perfectamente sincronizados ⚙️.
            </p>
            <div className="d-flex justify-content-center gap-5">
              <div>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="#393E41"
                  className="mb-2"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <div className="text-center">
                  <span>Github</span>
                </div>
              </div>
              <div>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="#393E41"
                  className="mb-2"
                >
                  <title>Notion</title>
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                </svg>
                <div className="text-center">
                  <span>Notion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light px-5 py-3 rounded shadow mb-4">
          <div>
            <h3 className="display-5 fw-bold mb-3">
              <i class="bi bi-code-square icon-color fs-1 me-2"></i>Tecnologías
            </h3>
            <p className="fs-5 text-muted mb-5">
              En nuestra aplicación, utilizamos un conjunto de tecnologías
              modernas para ofrecer una experiencia fluida y de alta calidad.
              Desde HTML5, CSS3, React y Bootstrap que nos permiten crear
              interfaces interactivas, sólidas y responsivas. En el backend,
              empleamos Node.js y Express para gestionar las solicitudes y la
              lógica del servidor, mientras que MySQL nos ayuda a almacenar
              datos de manera eficiente. Cada herramienta está seleccionada para
              garantizar un rendimiento óptimo y una experiencia de usuario
              excepcional 🚀.
            </p>
            <div className="container my-4">
              <div className="row d-flex justify-content-evenly">
                {/* Primera fila */}
                <div className="col-12 col-md-2 text-center mb-4">
                  <svg
                    role="img"
                    aria-label="HTML5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#393E41"
                    className="mb-2"
                  >
                    <title>HTML5</title>
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                  </svg>
                  <div>
                    <span>HTML5</span>
                  </div>
                </div>
                <div className="col-12 col-md-2 text-center mb-4">
                  <svg
                    role="img"
                    aria-label="CSS3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#393E41"
                    className="mb-2"
                  >
                    <title>CSS3</title>
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                  </svg>
                  <div>
                    <span>CSS3</span>
                  </div>
                </div>
                <div className="col-12 col-md-2 text-center mb-4">
                  <svg
                    role="img"
                    aria-label="Bootstrap"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#393E41"
                    className="mb-2"
                  >
                    <title>Bootstrap</title>
                    <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
                  </svg>
                  <div>
                    <span>Bootstrap</span>
                  </div>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    aria-label="React Boostrap"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#393E41"
                    className="mb-2"
                  >
                    <title>React Bootstrap</title>
                    <path d="M7.679.6264c-.5006 0-.948.1121-1.3298.333-.367.2125-.6755.5291-.917.9411-.2262.386-.393.856-.4957 1.3964-.1978 1.0417-.155 2.3459.124 3.7707.0353.1794.074.361.1157.5414a17 17 0 0 0-.6444.209c-1.345.469-2.4699 1.0817-3.2528 1.7723-.406.3576-.72.7357-.9349 1.1235C.1158 11.1263 0 11.5493 0 11.9712c0 .846.4686 1.703 1.355 2.4806.8347.7323 2.015 1.3717 3.4123 1.8496.1298.0441.262.087.3948.128a17 17 0 0 0-.1281.609c-.2658 1.3994-.2968 2.6799-.0903 3.7032.1073.53.2776.9912.5063 1.371.2432.4038.5519.7156.9174.9264.3851.222.8384.3346 1.3472.3346.6927 0 1.4672-.2054 2.302-.6105.8184-.3971 1.6537-.9659 2.4827-1.6905a13 13 0 0 0 .3909-.3556h.1963v-.0004h5.9501q1.3018 0 2.2457-.38c.6305-.2529 1.1436-.5942 1.5475-1.0227.4038-.4286.6983-.9399.8871-1.5339.1888-.589.2831-1.227.2831-1.9087.0005-1.1884-.2152-2.1719-.6416-2.9608q-.6346-1.1668-1.867-1.5139a.032.032 0 0 1-.0202-.0321.034.034 0 0 1 .0154-.0303c.6118-.3401 1.082-.8245 1.4115-1.4425q.498-.9348.498-2.2499c0-1.4464-.366-2.5224-1.0946-3.238-.7287-.7158-1.6988-1.0715-2.9064-1.0715h-6.5124a16 16 0 0 0-.308-.2819c-.8608-.7637-1.7192-1.363-2.552-1.7796C9.1688.8432 8.3802.6264 7.679.6264m.0072 1.6994c.4338 0 .9952.1703 1.623.4925.6806.3497 1.4185.8697 2.1341 1.5051q.0666.0591.1361.1228c-.6294.696-1.2497 1.4694-1.846 2.302-1.016.0992-1.9927.2474-2.9071.441a15 15 0 0 1-.0925-.4342l-.0027-.0149c-.218-1.1138-.2711-2.1316-.1536-2.9418.1015-.6963.3287-1.194.6245-1.3653.1228-.0712.2858-.1072.4842-.1072m5.1605 3.217v12.9119l-.7657-.9454-.5002-.6175c-.2525-.3117-.657-.8886-1.1391-1.624a29 29 0 0 1-.7951-1.2816l-.0145-.025c-.231-.3984-.4027-.7193-.5406-.977a39 39 0 0 1-.5065-.9813l.03-.0583.0018-.0033a31 31 0 0 1 .5659-1.0979l.0017-.003.2074-.4024.3063-.5075.002-.0033c.1143-.1947.233-.3912.3526-.584l.2108-.3482c.2806-.4645.5061-.8033.862-1.2943.1917-.2642.3735-.4962.6616-.8562l.0006-.0007.0142-.018.0055-.007c.117-.1491.235-.2961.3509-.4369l.0038-.0047.0023-.0028a83 83 0 0 1 .6822-.8317zm2.3907.2519h3.8286c.6423 0 1.1336.1804 1.4735.5363s.5097.9744.5097 1.8516c0 .7803-.1888 1.375-.5667 1.7942-.378.419-.85.624-1.4169.624h-3.8284c-.0141 0-.0256-.0149-.0256-.0332l.0002-4.7399c0-.0182.0113-.033.0256-.033M8.498 8.6164a31.5 31.5 0 0 0-.7931 1.375 23 23 0 0 1-.4173-1.1595 23 23 0 0 1 1.2104-.2155m-2.8646.6334c.288.8924.6483 1.8157 1.0715 2.7477l.0002.0001c-.4297.9474-.795 1.8853-1.087 2.791a12 12 0 0 1-.3005-.0982c-1.1617-.397-2.1292-.9097-2.798-1.4823-.5116-.4381-.817-.9003-.817-1.2364 0-.345.3055-.7895.8384-1.2203.6203-.5016 1.503-.96 2.551-1.3252a15 15 0 0 1 .5414-.1764m9.6038 3.5427h4.1484c.718 0 1.2696.2244 1.67.692s.597 1.1257.597 1.9883c.0002.8771-.2004 1.5595-.5968 2.037-.3932.4822-.952.7218-1.67.7218h-4.1486c-.0141 0-.0256-.0148-.0256-.033v-5.373c0-.0183.0113-.033.0256-.033M7.7065 14.001a31.4 31.4 0 0 0 .818 1.411 22 22 0 0 1-1.251-.2087v-.0001c.1291-.3932.2742-.7959.433-1.2022m-.8937 2.8444c.9022.1846 1.8901.3238 2.9408.414.602.8384 1.2275 1.617 1.8615 2.317-.0783.0721-.1572.143-.2357.212-.9178.8022-1.8394 1.3821-2.6649 1.6771l-.0171.0061c-.37.1306-.7003.1969-.9812.1969-.2073 0-.3747-.036-.4975-.1067-.299-.1725-.5317-.6594-.6384-1.336-.1247-.7884-.081-1.7816.126-2.872l.0001.0001c.0323-.1692.0677-.3393.1064-.5085" />
                  </svg>
                  <div classname="text-center">
                    <span>React Boostrap</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-2 text-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    aria-label="React"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#393E41"
                    className="mb-2"
                  >
                    <title>React</title>
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                  </svg>
                  <div classname="text-center">
                    <span>React</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly">
                  <div className="col-12 col-md-2 text-center">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="#393E41"
                      className="mb-2"
                    >
                      <title>Vite</title>
                      <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
                    </svg>
                    <div classname="text-center">
                      <span>Vite</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 text-center">
                    <svg
                      role="img"
                      aria-label="Vite"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="#393E41"
                      className="mb-2"
                    >
                      <title>Redux</title>
                      <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
                    </svg>
                    <div classname="text-center">
                      <span>Redux</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 text-center">
                    <svg
                      role="img"
                      aria-label="Node.js"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="#393E41"
                      className="mb-2"
                    >
                      <title>Node.js</title>
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                    </svg>
                    <div classname="text-center">
                      <span>Node.js</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 text-center">
                    <svg
                      role="img"
                      aria-label="Express"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="#393E41"
                      className="mb-2"
                    >
                      <title>Express</title>
                      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                    </svg>
                    <div className="">
                      <span>Express</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 text-center">
                    <svg
                      role="img"
                      aria-label="MySQL"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="#393E41"
                      className="mb-2"
                    >
                      <title>MySQL</title>
                      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
                    </svg>
                    <div className="">
                      <span>MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light  rounded shadow mb-4">
          <div className="d-flex flex-column justify-content-center px-5 py-3 mb-3">
            <h3 className="display-5 fw-bold">
              <i class="bi bi-laptop icon-color fs-1 me-2"></i>Almacenamiento y
              Deployment
            </h3>
            <div>
              <p className="fs-5 text-muted mb-3">
                Nuestra base de datos está en Supabase, una plataforma moderna y
                escalable que nos permite manejar grandes volúmenes de datos de
                manera eficiente con MySQL. Nuestras aplicaciones están
                deployadas en Vercel, conocida por su excelente rendimiento y
                tiempos de carga ultra rápidos, garantizando una experiencia de
                usuario fluida gracias a su infraestructura global.⚡🌍
              </p>
              <div className="d-flex justify-content-center text-center">
                <div className="me-5">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#393E41"
                    className="mb-2"
                  >
                    <title>Vercel</title>
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                  <div>
                    <span>Vercel</span>
                  </div>
                </div>
                <div className="">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#393E41"
                    className="mb-2"
                  >
                    <title>Supabase</title>
                    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
                  </svg>
                  <div classname="">
                    <span>Supabase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light px-5 py-3 rounded shadow mb-4">
          <div className="pt-4">
            <h3 className="display-5 fw-bold">
              <i className="bi bi-brush icon-color fs-1 me-2"></i>Diseño de la
              aplicación
            </h3>

            <p className="fs-5 text-muted mb-4">
              Nuestro diseño de Front-End se inspira en los sitios web de
              iGourmet 🧀 y Murray's Cheese 📸, adaptado a nuestra visión única.
              Usamos las fotos de Murray's para enriquecer la estética visual y
              creamos una paleta de colores cálidos para una identidad propia.
              Además, elegimos el nombre iGourmet en homenaje a su logo y
              adaptamos las fuentes de tipografía de la página para que combine
              con él.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <p className="display-6 fw-bold"> Paleta de colores</p>
                <img
                  src="/paleta de colores.png"
                  alt="Paleta de colores"
                  className="img-fluid"
                />
              </div>

              <div className="col-12 col-md-6 ps-5">
                <p className="display-6 fw-bold">Logo</p>
                <img
                  src="/logo-igourmet.png"
                  alt="Logo de iGourmet"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            {/* Tarjeta 1: Andrée Flaniguen */}
            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="bg-light px-5 py-3 rounded shadow">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="profile-image-container rounded mb-2">
                    <img
                      src="/andree.jpg"
                      alt="Foto de Andrée Flaniguen"
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="text-center">Andrée Flaniguen</h5>
                  <p className="text-center">Full Stack Web Developer Jr.</p>
                  <div className="d-flex justify-content-center">
                    <Link to="https://github.com/andreeflaniguen">
                      <i className="bi bi-github me-2"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/andree-flaniguen-balbuena-21823027b/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Facundo Bagnasco */}
            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="bg-light px-5 py-3 rounded shadow">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="profile-image-container rounded mb-2">
                    <img
                      src="/facundo_bagnasco.png"
                      alt="Foto de Facundo Bagnasco"
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="text-center">Facundo Bagnasco</h5>
                  <p className="text-center">Full Stack Web Developer Jr.</p>
                  <div className="d-flex justify-content-center">
                    <Link to="https://github.com/facubagnasco">
                      <i className="bi bi-github me-2"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/facundo-bagnasco-lopez-69653a215/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Federica Iglesias */}
            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="bg-light px-5 py-3 rounded shadow">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="profile-image-container rounded mb-2">
                    <img
                      src="/fede3.jpg"
                      alt="Foto de Federica Iglesias"
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="text-center">Federica Iglesias</h5>
                  <p className="text-center">Full Stack Web Developer Jr.</p>
                  <div className="d-flex justify-content-center">
                    <Link to="https://github.com/federicaiglesias">
                      <i className="bi bi-github me-2"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/federica-iglesias-inciarte-2a949323a/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 4: Nicolás Romero */}
            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="bg-light px-5 py-3 rounded shadow">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="profile-image-container rounded mb-2">
                    <img
                      src="/nicolas.jpg"
                      alt="Foto de Nicolás Romero"
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="text-center">Nicolás Romero</h5>
                  <p className="text-center">Full Stack Web Developer Jr.</p>
                  <div className="d-flex justify-content-center">
                    <Link to="https://github.com/Nico-Romeero">
                      <i className="bi bi-github me-2"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/nicolas-romero-garcía-1565a858/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
