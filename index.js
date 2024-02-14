
onload = () => {
    const c = setTimeout(() => {
        document.querySelector(".container-body").classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};