import { produce } from 'immer'
import { ActionTypes, ActionTypesProps } from './actions'

export interface Purchase {
  id: string
  image: string
  title: string
  amount: number
  quantity: number
}

export interface ShippingAddress {
  zip: string
  street: string
  district: string
  number: string
  complement?: string
  city: string
  state: string
}

interface CartState {
  purchases: Purchase[]
  // shippingAddress: ShippingAddress
  // paymentMethod: string
}

export function cartReducer(state: CartState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const currentProductIndex = state.purchases.findIndex(
        (purchase) => purchase.id === action.payload.newProduct.id,
      )

      if (currentProductIndex > -1) {
        return produce(state, (draft) => {
          draft.purchases[currentProductIndex].quantity =
            draft.purchases[currentProductIndex].quantity +
            action.payload.newProduct.quantity
        })
      }

      return produce(state, (draft) => {
        draft.purchases.push(action.payload.newProduct)
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      const currentProductIndex = state.purchases.findIndex(
        (purchase) => purchase.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.purchases.splice(currentProductIndex, 1)
      })
    }
    case ActionTypes.CHANGE_PRODUCT_QUANTITY_ITEMS: {
      const currentProductIndex = state.purchases.findIndex(
        (purchase) => purchase.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.purchases[currentProductIndex].quantity = action.payload.quantity
      })
    }
    case ActionTypes.CHECKOUT:
      return {
        purchases: [],
        // shippingAddress: {},
        // paymentMethod: '',
      }
    default:
      return state
  }
}
