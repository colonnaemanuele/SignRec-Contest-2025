// function updateGlitchText() {
//     const glitchText = document.querySelector('.glitch-text');
//     const originalText = "IsoSign Contest 2025";
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
//     let iterations = 0;
//     const maxIterations = 3;
    
//     const interval = setInterval(() => {
//         glitchText.innerText = originalText
//             .split("")
//             .map((letter, index) => {
//                 if (index < iterations) {
//                     return originalText[index];
//                 }
//                 return chars[Math.floor(Math.random() * chars.length)];
//             })
//             .join("");
        
//         iterations += 1/3;
        
//         if (iterations >= originalText.length) {
//             clearInterval(interval);
//             setTimeout(updateGlitchText, 4000);
//         }
//     }, 100);
// }

// document.addEventListener('DOMContentLoaded', updateGlitchText);