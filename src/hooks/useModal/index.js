import React, { useState, useCallback } from 'react'

/**
 * @param {Boolean} initialValue
 * */
const useModal = (initialValue) => {
  const [isOpen, setOpen] = useState(initialValue)

  const open = useCallback(() => setOpen(true), [setOpen])
  const close = useCallback(() => setOpen(false), [setOpen])
  const toggle = useCallback(() => setOpen(!isOpen), [setOpen, isOpen])

  return { isOpen, open, close, toggle }
}

export default useModal
