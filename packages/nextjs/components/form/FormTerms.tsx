import { FormCheckbox } from "@components/form/FormCheckbox";
import { Link } from "@components/link/Link";
import { useTranslation } from "@hooks/useTranslation";
import React from "react";
import { Flex, Text } from "rebass";

export interface TermsProps {
  onClick?: (e: any) => void;
  id: string;
}

export const FormTerms: React.FC<TermsProps & { ref }> = React.forwardRef(({ ...props }, ref) => {
  const { text } = useTranslation();

  return (
    <Flex my={3}>
      <FormCheckbox
        id={`terms-checkbox-${props.id}`}
        name="terms"
        ref={ref}
        fontWeight="500"
        fontSize={[0, 1]}
        {...props}
      >
        <Text as="span">
          {text.loginPopupTerms}
          <Link
            pathname="/policies/legal-mention"
            boxProps={{ color: "secondary", fontWeight: 900, display: "inline" }}
          >
            &nbsp;{text.loginPopupTermsConditions}
          </Link>
          &nbsp;{text.loginPopupTermsTrans}&nbsp;
          <Link
            pathname="/policies/legal-mention"
            boxProps={{ color: "secondary", fontWeight: 900, display: "inline" }}
          >
            &nbsp;{text.loginPopupTermsUsage}&nbsp;
          </Link>
          &nbsp;{text.loginPopupTermsEnd}
        </Text>
      </FormCheckbox>
    </Flex>
  );
});

FormTerms.displayName = "FormTerms";
