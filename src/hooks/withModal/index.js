import React, { useImperativeHandle, forwardRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

import useModal from "../useModal";

const modalElement = document.getElementById('modal-root')

function withModal(Modal) {
  const Portal = ({ defaultOpen, ...rest }, ref) => {
    const { isOpen, open, close, toggle } = useModal(defaultOpen)

    useImperativeHandle(ref, () => ({
      open,
      close,
      toggle,
    }), [open, close, toggle])

    // TODO: See if these are needed
    const handleEscape = useCallback(event => {
      if (event.keyCode === 27) close()
    }, [close])

    useEffect(() => {
      if (isOpen) document.addEventListener('keydown', handleEscape, false)
      return () => {
        document.removeEventListener('keydown', handleEscape, false)
      }
    }, [handleEscape, isOpen])

    // May add the CSS here to bring the modal to the front, maybe
    return createPortal(
      isOpen ? <Modal {...rest} /> : null,
      modalElement
    )
  }

  return forwardRef(Portal)
}

export default withModal
