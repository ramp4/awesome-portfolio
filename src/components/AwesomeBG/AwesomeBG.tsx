import React from "react";
import "./AwesomeBG.scss";
import Particles from "react-particles-js";

class AwesomeBG extends React.PureComponent<any> {
  render() {
    return (
      <Particles
        className="awesome-bg"
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 500
              }
            },
            color: {
              value: "#000000"
            },
            shape: {
              type: ["images"],
              stroke: {
                width: 100
              },
              polygon: {
                nb_sides: 5
              },
              images: [
                {
                  src:
                    "https://svgshare.com/getbyhash/sha1-Yi805AeyKT58gcszp33tlrLg0Ac=",
                  width: 100,
                  height: 100
                },
                {
                  src:
                    "https://svgshare.com/getbyhash/sha1-808iwaERsDAI1zj2RgO8NQva0YI=",
                  width: 100,
                  height: 100
                }
              ]
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 15,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000000",
              opacity: 0.75,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
              },

              repulse: {
                distance: 150,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}

export default AwesomeBG;
