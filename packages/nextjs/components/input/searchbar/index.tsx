import { Boop } from "@components/animations/Boop";
import { Search } from "@material-ui/icons";
import { Input, Label } from "@rebass/forms";
import { makeSerieNumber } from "@utils/makekey";
import React, { useEffect, useState } from "react";
import { Flex, FlexProps } from "rebass";

export interface SearchbarProps extends Omit<FlexProps, "css"> {
  triggerError?: boolean;
}

export const Searchbar: React.FC<SearchbarProps> = React.forwardRef(({ triggerError, ...props }, ref) => {
  const [value, setvalue] = useState(props.value);

  useEffect(() => {
    setvalue(props.value);
  }, [props.value]);

  return (
    <Flex
      height="100%"
      width="30%"
      alignItems="center"
      {...props}
      sx={{
        border: triggerError ? "solid 1px rgba(232, 26, 26, 0.5)" : "solid 1px transparent",
        borderRadius: 10,
        "@media screen and (max-width: 755px)": { display: "none" },
        ...props.sx
      }}
    >
      <Flex bg="lightGrey" sx={{ borderRadius: 10 }} height={45} width="100%" alignItems="center" px={3}>
        <Label htmlFor="searchKeyword" width="fit-content" sx={{ cursor: "pointer" }}>
          <Boop>
            <Search style={{ fill: "grey" }} />
          </Boop>
        </Label>
        <Input
          id={"searchKeyword-" + makeSerieNumber(5)}
          bg="transparent"
          sx={{ border: "none", "::placeholder": { color: triggerError ? "red" : "silver" } }}
          placeholder={props.placeholder}
          ref={ref}
          onChange={(v) => setvalue(v.currentTarget.value)}
          value={value}
        />
      </Flex>
    </Flex>
  );
});

Searchbar.displayName = "Searchbar";
