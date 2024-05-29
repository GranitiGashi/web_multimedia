AOS.init();

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.tool_section, .tool_section1, .tool_section3');
    const scrollY = window.scrollY + 130;

    sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.clientHeight;

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
            section.style.backgroundColor = getColor(index);
        } else {
            section.style.backgroundColor = getBaseColor();
        }
    });
});

function getColor(index) {
    const colors = ['#E59A59', '#888870', '#712E1E'];
    return colors[index % colors.length];
}

function getBaseColor() {
    return '#FEBEB0';
}
