'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from './toast'

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type ActionType = typeof _actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

type Toast = Omit<ToasterToast, 'id'>

interface State {
  toasts: ToasterToast[]
}

let count = 0,
  memoryState: State = { toasts: [] }

const TOAST_LIMIT = 1,
  TOAST_REMOVE_DELAY = 1000000,
  _actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST'
  } as const,
  genId = () => {
    count = (count + 1) % Number.MAX_SAFE_INTEGER
    return count.toString()
  },
  toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>(),
  addToRemoveQueue = (toastId: string) => {
    if (toastTimeouts.has(toastId)) {
      return
    }

    const timeout = setTimeout(() => {
      toastTimeouts.delete(toastId)
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch({
        toastId,
        type: 'REMOVE_TOAST'
      })
    }, TOAST_REMOVE_DELAY)

    toastTimeouts.set(toastId, timeout)
  },
  reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'ADD_TOAST':
        return {
          ...state,
          toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
        }

      case 'UPDATE_TOAST':
        return {
          ...state,
          toasts: state.toasts.map(t => (t.id === action.toast.id ? { ...t, ...action.toast } : t))
        }

      case 'DISMISS_TOAST': {
        const { toastId } = action

        // ! Side effects ! - This could be extracted into a dismissToast() action,
        // But I'll keep it here for simplicity
        if (toastId) {
          addToRemoveQueue(toastId)
        } else {
          state.toasts.forEach(t => {
            addToRemoveQueue(t.id)
          })
        }

        return {
          ...state,
          toasts: state.toasts.map(t =>
            t.id === toastId || toastId === undefined
              ? {
                  ...t,
                  open: false
                }
              : t
          )
        }
      }
      case 'REMOVE_TOAST':
        if (action.toastId === undefined) {
          return {
            ...state,
            toasts: []
          }
        }
        return {
          ...state,
          toasts: state.toasts.filter(t => t.id !== action.toastId)
        }
      default:
        return state
    }
  },
  listeners: ((state: State) => void)[] = [],
  dispatch = (action: Action) => {
    memoryState = reducer(memoryState, action)
    listeners.forEach(listener => {
      listener(memoryState)
    })
  },
  toast = ({ ...props }: Toast) => {
    const id = genId(),
      update = (updateProps: ToasterToast) =>
        dispatch({
          toast: { ...updateProps, id },
          type: 'UPDATE_TOAST'
        }),
      dismiss = () => dispatch({ toastId: id, type: 'DISMISS_TOAST' })

    dispatch({
      toast: {
        ...props,
        id,
        onOpenChange: open => {
          if (!open) {
            dismiss()
          }
        },
        open: true
      },
      type: 'ADD_TOAST'
    })

    return {
      dismiss,
      id,
      update
    }
  },
  useToast = () => {
    const [state, setState] = React.useState<State>(memoryState)

    React.useEffect(() => {
      listeners.push(setState)
      return () => {
        const index = listeners.indexOf(setState)
        if (index > -1) {
          listeners.splice(index, 1)
        }
      }
    }, [state])

    return {
      ...state,
      dismiss: (toastId?: string) => dispatch({ toastId, type: 'DISMISS_TOAST' }),
      toast
    }
  }

export { toast, useToast, reducer }
