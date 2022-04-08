import React, { useRef, useImperativeHandle } from "react";

const StripeInput = React.forwardRef(function StripeInput(props, inputRef) {
  const { component: Component, ...other } = props;

  const elementRef = useRef();
  useImperativeHandle(inputRef, () => ({
    focus: () => elementRef.current.focus,
  }));

  return (
    <Component
      onReady={(element) => (elementRef.current = element)}
      {...other}
    />
  );
});

export default StripeInput;
