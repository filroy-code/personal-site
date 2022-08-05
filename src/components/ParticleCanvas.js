import React from "react";

export default function ParticleCanvas() {
  const canvasRef = React.useRef(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const particleSize = 2;

  // assigns canvas ref on component render, contains canvas context operations
  React.useEffect(() => {
    canvasRef.current.height = window.innerHeight;
    canvasRef.current.width = window.innerWidth;

    const particleNumber = canvasRef.current.width > 960 ? 170 : 30;

    window.addEventListener("resize", () => {
      canvasRef.current.height = window.innerHeight;
      canvasRef.current.width = window.innerWidth;
      ctx.fillStyle = "#777";
    });

    let mouse = {
      mouseParticle: true,
    };

    let ctx = canvasRef.current.getContext("2d");

    // particles are created
    const particles = [];
    for (let i = 0; i < particleNumber; i++) {
      particles.push({
        x: getRandomInt(canvasRef.current.width),
        y: getRandomInt(canvasRef.current.height),
        speedX: Math.random() * 1.5 - 0.5,
        speedY: Math.random() * 1.5 - 0.5,
      });
    }

    particles.push(mouse);

    canvasRef.current.addEventListener("mousemove", (event) => {
      particles.forEach((particle) => {
        if (particle.mouseParticle) {
          particle.x = event.clientX - 8;
          particle.y = event.clientY + 8;
        }
      });
    });

    function update(particle) {
      if (!particle.mouseParticle) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // makes particles reverse direction and bounce off edges of screen
        if (
          particle.x < 0 ||
          particle.x > canvasRef.current.width - particleSize
        ) {
          particle.speedX *= -1;
        }
        if (
          particle.y < 0 ||
          particle.y > canvasRef.current.height - particleSize
        ) {
          particle.speedY *= -1;
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      particles.forEach((particle) => {
        if (particle.mouseParticle) {
        }
        ctx.fillRect(particle.x, particle.y, particleSize, particleSize);
        update(particle);
      });
      // constellation effect if viewport is small.
      canvasRef.current.width > 960 && drawLines(particles);
      requestAnimationFrame(animate);
    }

    ctx.fillStyle = "#777";

    function drawLines(particleArray) {
      for (let i = 0; i < particleArray.length; i++) {
        for (let j = i; j < particleArray.length; j++) {
          let distanceX = particleArray[i].x - particleArray[j].x;
          let distanceY = particleArray[i].y - particleArray[j].y;
          let distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );
          if (distance < 120) {
            ctx.strokeStyle = "white";
            ctx.lineWidth = 0.1;
            ctx.beginPath();
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
          }
        }
      }
    }

    animate();
  }, []);

  return <canvas id="particles" ref={canvasRef}></canvas>;
}
