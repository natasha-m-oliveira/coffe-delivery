import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewProductAction,
  changeProductQuantityItemsAction,
  checkoutAction,
  removeProductAction,
} from '../reducers/cart/actions'
import { cartReducer, Purchase } from '../reducers/cart/reducer'

type PaymentMethod = 'debit' | 'credit' | 'cash'

export interface DeliveryDetails {
  zip: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
  paymentMethod: PaymentMethod
}

interface CartContextType {
  purchases: Purchase[]
  purchaseTotal: number
  freight: number
  deliveryDetails: DeliveryDetails
  addDeliveryDetails: (data: DeliveryDetails) => void
  addNewProduct: (data: Purchase) => void
  changeProductQuantityItems: (id: string, quantity: number) => void
  removeProduct: (id: string) => void
  checkout: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>(
    {} as DeliveryDetails,
  )
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      purchases: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return {
        purchases: [],
      }
    },
  )

  const { purchases } = cartState
  const totalInCents = purchases.reduce((accum, curr) => {
    return accum + curr.amount * 100 * curr.quantity
  }, 0)
  const purchaseTotal = totalInCents / 100
  const freight = purchaseTotal ? 22.89 : 0

  function changeProductQuantityItems(id: string, quantity: number) {
    dispatch(changeProductQuantityItemsAction(id, quantity))
  }

  function addNewProduct(data: Purchase) {
    dispatch(addNewProductAction(data))
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id))
  }

  function checkout() {
    setDeliveryDetails({} as DeliveryDetails)
    dispatch(checkoutAction())
  }

  function addDeliveryDetails(data: DeliveryDetails) {
    setDeliveryDetails(data)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        purchases,
        purchaseTotal,
        freight,
        deliveryDetails,
        addDeliveryDetails,
        addNewProduct,
        changeProductQuantityItems,
        removeProduct,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
