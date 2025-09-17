import type { TProduct } from './types/product.types'
import lamp from "../assets/img/lamp.png"
import desk from "../assets/img/desk.png"
import note from "../assets/img/note.png"

export const products: TProduct[] = [
  {"id": "p1", "img": lamp, "name": "Desk Lamp", "description": "P1", "category": "Home", "price": 29.9, "stock": 12},
  {"id": "p2", "img": desk, "name": "Wireless Mouse", "description": "P2", "category": "Tech", "price": 19.5, "stock": 0},
  {"id": "p3", "img": note, "name": "Notebook A5", "description": "P3", "category": "Stationery", "price": 5.2, "stock": 37},
  {"id": "p4", "img": lamp, "name": "Yoga Mat", "description": "P4", "category": "Home", "price": 25.0, "stock": 20},
 
]

