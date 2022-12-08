import { ActionTypes, ActionTypesProps } from './actions'

export interface Purchase {
  id: string
  name: string
  amount: number
  quantity: number
}

interface CartState {
  purchases: Purchase[]
  total: number
}

export function cartReducer(state: CartState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return {
        purchases: [...state.purchases, action.payload.newProduct],
        total:
          state.total +
          action.payload.newProduct.amount * action.payload.newProduct.quantity,
      }
    case ActionTypes.REMOVE_PRODUCT: {
      const currentProductIndex = state.purchases.findIndex(
        (purchase) => purchase.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }

      const currentProduct = state.purchases[currentProductIndex]

      return {
        purchases: state.purchases.splice(currentProductIndex, 0),
        total: state.total - currentProduct.amount * currentProduct.quantity,
      }
    }
    case ActionTypes.CHANGE_PRODUCT_QUANTITY_ITEMS: {
      const currentProductIndex = state.purchases.findIndex(
        (purchase) => purchase.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }

      const currentProduct = state.purchases[currentProductIndex]

      if (currentProduct.quantity === action.payload.quantity) {
        return state
      }

      const purchases = [...state.purchases]
      purchases[currentProductIndex].quantity = action.payload.quantity

      return {
        purchases,
        total:
          state.total -
          currentProduct.quantity * currentProduct.amount +
          action.payload.quantity * currentProduct.amount,
      }
    }
    default:
      return state
  }
}
