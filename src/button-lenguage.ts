import { lenguageChange } from "./lenguajes"
import { lenguage, lenguageCard } from "./selectors"

export const selectLenguage = (lenguages: HTMLElement)=>{
    lenguages.addEventListener("click", ()=>{
        lenguageChange(`${lenguages.textContent?.toLowerCase()}`)
        lenguage.textContent = lenguages.textContent
    })
}

export const buttonLenguage = (lenguage: HTMLElement) =>{
    lenguage.addEventListener("click", ()=>{
        lenguageCard.classList.toggle("lenguage-card-active")
    })
}