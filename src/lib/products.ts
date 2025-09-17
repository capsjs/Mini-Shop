import type { TProduct } from './types/product.types'
import lamp from "../assets/img/lamp.png"
import desk from "../assets/img/desk.png"
import note from "../assets/img/note.png"

export const products: TProduct[] = [
  {"id": "1", "img": lamp, "name": "Desk Lamp", "description": "Lampe de table/applique LED", "category": "Home", "price": 29.9, "stock": 12},
  {"id": "2", "img": desk, "name": "Wireless Mouse", "description": "Bureau look travertin Liam", "category": "Tech", "price": 19.5, "stock": 0},
  {"id": "3", "img": note, "name": "Notebook A5", "description": "Carnet de notes Stripe", "category": "Stationery", "price": 5.2, "stock": 37},
  {"id": "4", "img": lamp, "name": "Yoga Mat", "description": "Tapis de yoga réversible Balthasar", "category": "Home", "price": 25.0, "stock": 20},
 
]

