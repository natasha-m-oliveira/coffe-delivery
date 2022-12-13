import { Purchase } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CHANGE_PRODUCT_QUANTITY_ITEMS = 'CHANGE_PRODUCT_QUANTITY_ITEMS',
  CHECKOUT = 'CHECKOUT',
}

export type ActionTypesProps =
  | {
      type: ActionTypes.ADD_NEW_PRODUCT
      payload: { newProduct: Purchase }
    }
  | {
      type: ActionTypes.REMOVE_PRODUCT
      payload: { id: string }
    }
  | {
      type: ActionTypes.CHANGE_PRODUCT_QUANTITY_ITEMS
      payload: { id: string; quantity: number }
    }
  | {
      type: ActionTypes.CHECKOUT
    }

export function addNewProductAction(newProduct: Purchase): ActionTypesProps {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function removeProductAction(id: string): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }
}

export function changeProductQuantityItemsAction(
  id: string,
  quantity: number,
): ActionTypesProps {
  return {
    type: ActionTypes.CHANGE_PRODUCT_QUANTITY_ITEMS,
    payload: {
      id,
      quantity,
    },
  }
}

export function checkoutAction(): ActionTypesProps {
  return {
    type: ActionTypes.CHECKOUT,
  }
}
