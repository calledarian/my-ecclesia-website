import React from "react";
import "../CSS/gallery.css"; // Import the CSS file for styling
function Gallery() {
  const images = [
    {
      src: "https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/481975796_658114116901489_6994131205139468941_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHMD8OAjvcEXHYkGbkVxSZJarqYo_uUY3Fqupij-5RjcUNv8Qht39jAaZAsCeczbi1wS7qV7wTAy_H2EXmGrPEx&_nc_ohc=y56LMbT8GpQQ7kNvgFVolRN&_nc_oc=Adk9zHlcxyfauiN6oe6JX2c8FfjE5b8BYi93HYSgJBTlguX3VbuVj0nQ0x6vpPEq5Ko&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=AfDW7tMVfYUvC3awAX_pPg&oh=00_AYGhWFaMMRlH0O0fqHgxO3nge6KIBWUQiMmAjlYo1b3fnw&oe=67E96A73",
      alt: "Image 1",
    },
    {
      src: "https://scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/484291572_663618786351022_7505142910613499104_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGBEOZ6mIMO9M1M68IJ8Ub_cEbYtJMu94FwRti0ky73gTdjjBza8S67lTynghg4F5koBkCVI4CQ5DoqrAgc2uzI&_nc_ohc=1ROp9TAfnXMQ7kNvgEr_Mpe&_nc_oc=AdkDl06w0G_RceEBl4GlcX-WoETHKHCS_xXAuhtoViZM1ojjhDdcSxcw9IuAOUXgDOs&_nc_zt=23&_nc_ht=scontent.fpnh5-1.fna&_nc_gid=6GL5vbo6zdZZCipGwkBvtw&oh=00_AYEGxyXjmMdB_THNRSg2HKg1vzBjF6eLDwKxsnUa85nRqg&oe=67E9834E",
      alt: "Image 2",
    },
    {
      src: "https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/484168535_663618449684389_1533337481882622634_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhTNz19euCOp3jPrq8MSikJLiP7jMers8kuI_uMx6uz9vZsA-oxJmFA-ODdVsWYHUCYFE1QVavKidbjtWkN_UR&_nc_ohc=AFilDlfzOsoQ7kNvgGWkqDN&_nc_oc=Adn2DI7figGHjizswJujoXFj7yxhmGlU0hAK9DIiJTksAdlI6IHwdUxsHO4EgKIHuFg&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=rSPWpCOzTPtUqDq4rjTKqQ&oh=00_AYFzDnIZfHWENLWHNCKcZOaoTb_mZ3jvxyERISafpP_4ZA&oe=67E97DB5",
      alt: "Image 3",
    },
    {
      src: "https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/484293028_663582733021294_5914393296147690453_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUAR8Ikyjx9x3Ek5txcbMIIimkv1nCz10iKaS_WcLPXZ9HLza_-XNHub7iSQkJ2KOtBTxXcUEsLjYf_VWUR5EK&_nc_ohc=wXxD66JXSLoQ7kNvgHSH8Oe&_nc_oc=Adk_PMJRGjO2g0piPsAzRQFY-G94mPzKXaXJy_AzGJjs9ENebvwfa544cG1xT2qnlvw&_nc_zt=23&_nc_ht=scontent.fpnh5-2.fna&_nc_gid=QEOUkP0fRHK6jUoX3_oS5A&oh=00_AYFynh-E2yQHCtUyZVmMHN1SbPja2IFjWkTiRu6qUmxd0A&oe=67E97F2A",
      alt: "Image 4",
    },
    {
      src: "https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/481975796_658114116901489_6994131205139468941_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHMD8OAjvcEXHYkGbkVxSZJarqYo_uUY3Fqupij-5RjcUNv8Qht39jAaZAsCeczbi1wS7qV7wTAy_H2EXmGrPEx&_nc_ohc=y56LMbT8GpQQ7kNvgFVolRN&_nc_oc=Adk9zHlcxyfauiN6oe6JX2c8FfjE5b8BYi93HYSgJBTlguX3VbuVj0nQ0x6vpPEq5Ko&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=AfDW7tMVfYUvC3awAX_pPg&oh=00_AYGhWFaMMRlH0O0fqHgxO3nge6KIBWUQiMmAjlYo1b3fnw&oe=67E96A73",
      alt: "Image 1",
    },
    {
      src: "https://scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/484291572_663618786351022_7505142910613499104_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGBEOZ6mIMO9M1M68IJ8Ub_cEbYtJMu94FwRti0ky73gTdjjBza8S67lTynghg4F5koBkCVI4CQ5DoqrAgc2uzI&_nc_ohc=1ROp9TAfnXMQ7kNvgEr_Mpe&_nc_oc=AdkDl06w0G_RceEBl4GlcX-WoETHKHCS_xXAuhtoViZM1ojjhDdcSxcw9IuAOUXgDOs&_nc_zt=23&_nc_ht=scontent.fpnh5-1.fna&_nc_gid=6GL5vbo6zdZZCipGwkBvtw&oh=00_AYEGxyXjmMdB_THNRSg2HKg1vzBjF6eLDwKxsnUa85nRqg&oe=67E9834E",
      alt: "Image 2",
    },
    {
      src: "https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/484168535_663618449684389_1533337481882622634_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhTNz19euCOp3jPrq8MSikJLiP7jMers8kuI_uMx6uz9vZsA-oxJmFA-ODdVsWYHUCYFE1QVavKidbjtWkN_UR&_nc_ohc=AFilDlfzOsoQ7kNvgGWkqDN&_nc_oc=Adn2DI7figGHjizswJujoXFj7yxhmGlU0hAK9DIiJTksAdlI6IHwdUxsHO4EgKIHuFg&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=rSPWpCOzTPtUqDq4rjTKqQ&oh=00_AYFzDnIZfHWENLWHNCKcZOaoTb_mZ3jvxyERISafpP_4ZA&oe=67E97DB5",
      alt: "Image 3",
    },
    {
      src: "https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/484293028_663582733021294_5914393296147690453_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUAR8Ikyjx9x3Ek5txcbMIIimkv1nCz10iKaS_WcLPXZ9HLza_-XNHub7iSQkJ2KOtBTxXcUEsLjYf_VWUR5EK&_nc_ohc=wXxD66JXSLoQ7kNvgHSH8Oe&_nc_oc=Adk_PMJRGjO2g0piPsAzRQFY-G94mPzKXaXJy_AzGJjs9ENebvwfa544cG1xT2qnlvw&_nc_zt=23&_nc_ht=scontent.fpnh5-2.fna&_nc_gid=QEOUkP0fRHK6jUoX3_oS5A&oh=00_AYFynh-E2yQHCtUyZVmMHN1SbPja2IFjWkTiRu6qUmxd0A&oe=67E97F2A",
      alt: "Image 4",
    },
  ];

  const openFullscreen = (src) => {
    const newWindow = window.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Fullscreen Image</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: black; }
            img { max-width: 100%; max-height: 100%; }
          </style>
        </head>
        <body>
          <img src="${src}" alt="Fullscreen Image" />
        </body>
      </html>
    `);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <div className="gallery-image-wrapper">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <button
                className="fullscreen-button"
                onClick={() => openFullscreen(image.src)}
              >
                Fullscreen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
