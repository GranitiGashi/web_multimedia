window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.tool_section, .tool_section1, .tool_section3');
    const scrollY = window.scrollY;
    let colorIndex;

    // Determine the color index based on scroll position
    if (scrollY < sections[0].offsetTop || scrollY > sections[2].offsetTop + sections[2].clientHeight) {
        colorIndex = 0; // Use the first color when outside the range of the three sections
    } else {
        colorIndex = 1; // Use the second color when inside the range of the three sections
    }

    // Apply colors to sections
    sections.forEach((section, index) => {
        if (index >= 0 && index <= 2) {
            section.style.backgroundColor = getColor(colorIndex);
        } else {
            section.style.backgroundColor = getColor(index); // Different color for other sections
        }
    });
});

function getColor(index) {
    const colors = ['rgb(233, 121, 233)', '#da82a5', 'rgb(188, 92, 181)']; // Colors for the three sections
    const otherColors = ['red', 'blue', 'green']; // Colors for other sections
    return index < 3 ? colors[index] : otherColors[index - 3]; // Return appropriate color based on index
}
