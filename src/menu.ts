export const openMenu = document.querySelector(".open-menu") as HTMLImageElement
export const closeMenu = document.querySelector(".close-menu") as HTMLImageElement
const nav = document.querySelector(".nav") as HTMLElement
const active: string = "nav-active"

export const menu = (activeButton: HTMLElement, inactive:HTMLElement) =>{
    activeButton.addEventListener("click", ()=>{
        nav.classList.toggle(active)
        activeButton.style.display = "none"
        inactive.style.display = "flex"
    })
}