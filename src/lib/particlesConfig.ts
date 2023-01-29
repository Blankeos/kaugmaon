const particlesConfig: object = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        area: 1000,
      },
    },
    reduceDuplicates: true,
    rotate: {
      animation: {
        enable: true,
        speed: { min: 5, max: 15 },
      },
    },
    shape: {
      type: "triangle",
      options: {
        triangle: {
          particles: {
            color: {
              value: "#DBFF00",
            },
          },
        },
      },
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 10, max: 30 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
    },
  },
  background: {
    color: "#181818",
  },
};

export default particlesConfig;
