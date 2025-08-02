document.addEventListener('mousemove', (event) => {
    const x = event.clientX; // X-coordinate relative to the viewport
    const y = event.clientY; // Y-coordinate relative to the viewport
    console.log(`Mouse Position: X: ${x}, Y: ${y}`);
});