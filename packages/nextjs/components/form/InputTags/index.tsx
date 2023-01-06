import { Flex, FlexProps, Text } from "rebass";
import { FormInput, FormInputI } from "../input";
import { Tags, Tag } from "./Tags";
import React, { useState, useRef, useEffect } from "react";
import { Helper } from "@components/helper";
import { Relative } from "@components/common/Position";
import { Box } from "@material-ui/core";
import { Button } from "@components/buttons/button";

interface FormInputTagIProps extends FormInputI {
  tags: Tag[];
  removeTagOnSuppress?: boolean;
  duplicate?: boolean;
  tagPosition?: "bottom" | "top";
  onAddition: (tag: Tag) => void;
  onRemove: (i: number) => void;
  minimum?: number;
  containerStyle?: Omit<FlexProps, "css">;
  tagsStyle?: Omit<FlexProps, "css">;
}

/**
 * @brief Classical input that takes tags as value
 *
 * @example
 * ```ts
 * <FormInputTag
      tags={tags}
      ref={register}
      name="formName"
      id="formId"
      onAddition={(tag) => setState([...state, tag])}
      onRemove={(i) => setState(state.filter((_, index) => i !== index))}
      placeholder="placeholder"
    />
 * ```
 */
export const FormInputTag: React.FC<FormInputTagIProps> = React.forwardRef(({ ...props }, ref) => {
  const inputRef = useRef(FormInput);
  const [ctags, setCtags] = useState<Tag[]>(props.tags ?? []);
  const [itemsError, setItemsError] = useState(false);
  const [showHelper, setShowHelper] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
      setShowHelper(localStorage.getItem("tagInputHelper") == "true" ? false : true);
    }
  }, [0]);

  const inputProps = props;

  const { onError = () => null, onChange = () => null } = props;

  const handleKeyPress = (e) => {
    const key = e.key;
    /* @ts-ignore */
    const tag = e.currentTarget.value;

    /* remove last tag when press backspace key if removeTagOnSuppress is true */
    if (props.removeTagOnSuppress && key === "Backspace") {
      setCtags(ctags.filter((_, i) => i != ctags.length - 1));
    }
    if (!tag.length) return;
    if (key === "Enter") {
      /* Append duplicated tag only if duplicate is true, otherwise append only is it's not a duplicated tag */
      if (
        (!props.duplicate && !ctags.find((ctag) => ctag.text === tag)) ||
        (props.duplicate && ctags.find((ctag) => ctag.text === tag))
      ) {
        setCtags([...ctags, { text: tag, id: Math.floor(Math.random() * 1000).toString() }]);
        props.onAddition({ text: tag, id: Math.floor(Math.random() * 1000).toString() });
        /* @ts-ignore */
        e.currentTarget.value = "";
      }
    }
  };

  return (
    <Flex
      flexDirection={props.tagPosition == "bottom" ? "column-reverse" : "column"}
      width="100%"
      {...props.containerStyle}
    >
      <Tags
        tags={ctags}
        onRemove={(i) => {
          props.onRemove(i);
          setCtags(props.tags.filter((_, index) => index !== i));
          if (ctags.length < props.minimum) {
            setItemsError(true);
            onError(null);
          }
        }}
        mt={props.tagPosition == "bottom" ? 1 : 2}
        mb={props.tagPosition == "top" ? 2 : 1}
        {...props.tagsStyle}
      />
      <Relative height="fit-content">
        <FormInput
          ref={ref}
          display="none"
          {...inputProps}
          defaultValue=""
          value={ctags.map((tag) => tag.text).toString()}
        />
        <FormInput
          formNoValidate
          ref={inputRef}
          placeholder={props.placeholder ?? "Appuyer sur entrer pour valider"}
          onKeyDown={(e) => {
            setItemsError(false);
            handleKeyPress(e);
            onChange(null);
          }}
          mt={2}
          pr={3}
          onBlur={(e) => {
            if (props.tags.length < props.minimum) {
              setItemsError(true);
              onError(e);
            } else itemsError && setItemsError(false);
          }}
          {...inputProps}
          name={inputProps.name + "RefName"}
          id={inputProps.id + "RefId"}
        />
        <Helper
          open={showHelper}
          disablePortal
          position={{ bottom: 0 }}
          disabledFixed
          arrowPosition="left"
          onClose={() => setShowHelper(false)}
        >
          <Box maxWidth="300px">
            <Text as="p" fontWeight="700">
              Les tags
            </Text>
            <Text as="p" mt={3} fontSize={1}>
              Ces champs fonctionnent avec des tags. <br />
              Appuyez sur ENTRER pour valider chaque valeur.
            </Text>
            <Flex
              m="0"
              mt={3}
              width="100%"
              onClick={() => {
                if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
                  localStorage.setItem("tagInputHelper", "true");
                }
                setShowHelper(false);
              }}
              sx={{
                div: { flexDirection: "row-reverse" },
                button: {
                  color: "white",
                  fontWeight: 700,
                  fontSize: 12,
                  textTransform: "none",
                  marginLeft: 10
                }
              }}
            >
              <Button bg="#1a73e8">J&apos;ai compris</Button>
            </Flex>
          </Box>
        </Helper>
      </Relative>
    </Flex>
  );
});

FormInputTag.displayName = "FormInputTag";
