function tabs () {
    const links = document.querySelectorAll(".tabs_menu li");
    const contents = document.querySelectorAll(".tabs_content");

    toggle = (targetId) => {
        contents.forEach(content => {
            content.style.display = content.id === targetId ? 'block' : 'none';
            document.querySelector(`[data-target = ${content.id}]`).classList[content.id === targetId ? 'add' : 'remove']("active");
        })
    }

    links.forEach(link => {
        link.addEventListener("click", () => {
            toggle(link.dataset.target);
        })
    })
}

tabs();