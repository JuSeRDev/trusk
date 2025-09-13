import './css/global.css'
import './css/header.css'
import './css/history.css'
import './css/purpose.css'
import './css/community.css'
import './css/footer.css'
import { closeMenu, menu, openMenu } from './menu'
import { lenguageChange } from './lenguajes'
import { buttonLenguage, selectLenguage } from './button-lenguage'
import { en, es, lenguage } from './selectors'

menu(openMenu, closeMenu)
menu(closeMenu, openMenu)
lenguageChange("en")
selectLenguage(es)
selectLenguage(en)
buttonLenguage(lenguage)