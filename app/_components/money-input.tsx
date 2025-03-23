import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

import { Input } from "@/app/_components/ui/input";

// Define o tipo InputProps baseado no tipo nativo de input
type InputProps = React.ComponentProps<"input">;

const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";

export { MoneyInput };
