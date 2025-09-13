import { Lenguajes } from "./assets/lenguajes"
import lenguajesJson from "./assets/lenguajes.json"
import { buttonFooter, comunity, headers, mainHistoryContainer_0, mainHistoryContainer_1, mainHistoryContainer_2, mainHistoryContainer_3, mainHistoryContainer_4, purpose } from "./selectors"

const lenguajesType: Lenguajes = lenguajesJson


export const lenguageChange = (lenguaje: string)=>{
    headers[0].innerText = lenguajesType[lenguaje].headerBar.nav.inicio
    headers[1].innerText = lenguajesType[lenguaje].headerBar.nav.historia
    headers[2].innerText = lenguajesType[lenguaje].headerBar.nav.proposito
    headers[3].innerText = lenguajesType[lenguaje].headerBar.nav.comunidad
    headers[4].innerText = lenguajesType[lenguaje].headerBar.button
    mainHistoryContainer_0[0].innerText = lenguajesType[lenguaje].main.section1.container0.title
    mainHistoryContainer_0[1].innerText = lenguajesType[lenguaje].main.section1.container0.text
    mainHistoryContainer_1[0].innerText = lenguajesType[lenguaje].main.section1.container1.title
    mainHistoryContainer_1[1].innerText = lenguajesType[lenguaje].main.section1.container1.text
    mainHistoryContainer_2[0].innerText = lenguajesType[lenguaje].main.section1.container2.title
    mainHistoryContainer_2[1].innerText = lenguajesType[lenguaje].main.section1.container2.text
    mainHistoryContainer_3[0].innerText = lenguajesType[lenguaje].main.section1.container3.title
    mainHistoryContainer_3[1].innerText = lenguajesType[lenguaje].main.section1.container3.text
    mainHistoryContainer_4[0].innerText = lenguajesType[lenguaje].main.section1.container4.title
    mainHistoryContainer_4[1].innerText = lenguajesType[lenguaje].main.section1.container4.c4t1
    mainHistoryContainer_4[2].innerText = lenguajesType[lenguaje].main.section1.container4.c4t2
    mainHistoryContainer_4[3].innerText = lenguajesType[lenguaje].main.section1.container4.c4t3
    mainHistoryContainer_4[4].innerText = lenguajesType[lenguaje].main.section1.container4.c4t4
    mainHistoryContainer_4[5].innerText = lenguajesType[lenguaje].main.section1.container4.c4t5
    mainHistoryContainer_4[6].innerText = lenguajesType[lenguaje].main.section1.container4.c4t6
    purpose[0].innerText = lenguajesType[lenguaje].main.section2.title
    purpose[1].innerText = lenguajesType[lenguaje].main.section2.text
    purpose[2].innerText = lenguajesType[lenguaje].main.section2.cards.card1
    purpose[3].innerText = lenguajesType[lenguaje].main.section2.cards.card2
    purpose[4].innerText = lenguajesType[lenguaje].main.section2.cards.card3
    purpose[5].innerText = lenguajesType[lenguaje].main.section2.text2
    comunity[0].innerText = lenguajesType[lenguaje].main.section3.title
    comunity[1].innerText = lenguajesType[lenguaje].main.section3.text
    comunity[2].innerText = lenguajesType[lenguaje].main.section3.cards.card1.title
    comunity[3].innerText = lenguajesType[lenguaje].main.section3.cards.card1.text
    comunity[4].innerText = lenguajesType[lenguaje].main.section3.cards.card2.title
    comunity[5].innerText = lenguajesType[lenguaje].main.section3.cards.card2.text
    comunity[6].innerText = lenguajesType[lenguaje].main.section3.cards.card3.title
    comunity[7].innerText = lenguajesType[lenguaje].main.section3.cards.card3.text
    buttonFooter.innerText = lenguajesType[lenguaje].footer.button
}
