import { createContext, ReactNode, useReducer } from 'react'
import {
  addNewProductAction,
  changeProductQuantityItemsAction,
  removeProductAction,
} from '../reducers/cart/actions'
import { cartReducer, Purchase } from '../reducers/cart/reducer'

interface CreatePurchaseData {
  name: string
  amount: number
  quantity: number
}

interface CartContextType {
  purchases: Purchase[]
  total: number
  freight: number
  addNewProduct: (data: CreatePurchaseData) => void
  changeProductQuantityItems: (id: string, quantity: number) => void
  removeProduct: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    purchases: [],
    total: 0,
  })

  const { purchases, total } = cartState
  const freight = 22.89

  function changeProductQuantityItems(id: string, quantity: number) {
    dispatch(changeProductQuantityItemsAction(id, quantity))
  }

  function addNewProduct(data: CreatePurchaseData) {
    const id = String(new Date().getTime())
    const newProduct: Purchase = {
      id,
      name: data.name,
      amount: data.amount,
      quantity: data.quantity,
    }
    dispatch(addNewProductAction(newProduct))
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        purchases,
        total,
        freight,
        addNewProduct,
        changeProductQuantityItems,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
