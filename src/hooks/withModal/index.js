import React, { useImperativeHandle, forwardRef, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import ReactTooltip from "react-tooltip";
import clsx from "clsx";

import useModal from "../useModal";

import Wrapper from "./Wrapper";
import Backdrop from "./Backdrop";

function withModal(Modal) {
  const Portal = ({ className, defaultOpen = false, backdrop = true, style = { }, ...rest }, ref) => {
    // Have an idea for this where each call can increment it but keep the initial value somewhere ??
    const zIndex = useRef(1)
    const modalElement = useRef(null)

    const { isOpen, open, close, toggle } = useModal(defaultOpen)

    useEffect(() => {
      // May set this to a global value so all elements know of it's existence, or even use a prop
      modalElement.current = document.getElementById(window.modalRoot || 'modal-root')
    }, [modalElement])

    useEffect(() => {
      ReactTooltip.rebuild()
      // Need this as sometimes the tooltip would stay
      if (!isOpen) ReactTooltip.hide()
    }, [isOpen])

    useImperativeHandle(ref, () => ({
      open,
      close,
      toggle,
    }), [open, close, toggle])

    // Handle if the user clicks anywhere on the backdrop
    const handleBackdropClicked = useCallback(_ => {
      if (isOpen) close()
    }, [isOpen, close])

    const handleEscape = useCallback(event => {
      if (event.keyCode === 27) close()
    }, [close])

    useEffect(() => {
      if (isOpen) document.addEventListener('keydown', handleEscape, false)
      return () => {
        document.removeEventListener('keydown', handleEscape, false)
      }
    }, [handleEscape, isOpen])

    const klass = clsx(className && className, isOpen && 'open')

    // This is what is rendered??
    //
    // So any changes should be here
    const render = () => (
      <Wrapper>
        <style>{`
          .__react_component_tooltip { z-index: ${1100 + (zIndex.current + 2)}; }
        `}</style>
        {backdrop && (<Backdrop zIndex={zIndex.current} onClick={handleBackdropClicked} />) }
        <Modal className={klass} style={{ ...style, zIndex: zIndex.current+1 }} {...rest} />
      </Wrapper>
    )

    // May add the CSS here to bring the modal to the front, maybe
    return modalElement.current && createPortal(
      isOpen ? render() : null,
      modalElement.current
    )
  }

  return forwardRef(Portal)
}

export default withModal
