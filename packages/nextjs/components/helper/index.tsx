const Fixed = dynamic<any>(() => import("@components/common/Position").then((mod) => mod.Fixed));
const Relative = dynamic<any>(() => import("@components/common/Position").then((mod) => mod.Relative));
const BoxShadowed = dynamic<any>(() => import("@components/containers/BoxShadowed").then((mod) => mod.BoxShadowed));
const ClickAwayListener = dynamic<any>(() => import("@material-ui/core").then((mod) => mod.ClickAwayListener));
import { Absolute } from "@components/common/Position";
import { useTheme } from "@hooks/useTheme";
import dynamic from "next/dynamic";
import React from "react";
import ReactDOM from "react-dom";
const Box = dynamic(() => import("rebass").then((mod) => mod.Box));

type ArrowPosition = "left" | "center" | "right";

interface ArrowProps {
  position: ArrowPosition;
}

const Arrow = ({ position }: ArrowProps) => {
  const { isDark } = useTheme();

  return (
    <Absolute
      bg="white"
      width={20}
      height={20}
      top={-10}
      mx={position == "center" && "auto"}
      left={position == "left" ? 20 : position == "center" ? 0 : null}
      right={position == "right" ? 20 : position == "center" ? 0 : null}
      sx={{
        transform: "rotate(-45deg)",
        boxShadow: isDark ? "1px -1px 1px rgba(255, 255, 255, 0.12)" : "1px -1px 1px rgba(0, 0, 0, 0.12)"
      }}
    />
  );
};

export interface HelperProps {
  arrowPosition?: ArrowPosition;
  disablePortal?: boolean;
  position?: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  };
  open: boolean;
  disabledFixed?: boolean;
  zIndex?: boolean;
  onClose: () => void;
}

const HelperContent: React.FC<Omit<HelperProps, "open" | "disablePortal">> = ({
  arrowPosition,
  position = { left: 0, top: 0, right: 0, bottom: 0 },
  onClose,
  disabledFixed,
  zIndex,
  children
}) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Absolute width="fit-content" sx={{ zIndex: 2000 }}>
        {!disabledFixed ? (
          <Fixed
            top={position.top}
            right={position.right}
            left={position.left}
            bottom={position.bottom}
            width="fit-content"
            sx={{ zIndex: zIndex ? 3000 : 200 }}
          >
            <Relative>
              <BoxShadowed>
                <Box>{children}</Box>
              </BoxShadowed>
              <Arrow position={arrowPosition} />
            </Relative>
          </Fixed>
        ) : (
          <Relative
            width="fit-content"
            top={position.top}
            right={position.right}
            left={position.left}
            bottom={position.bottom}
            sx={{ zIndex: zIndex ? 3000 : 200 }}
          >
            <Relative>
              <BoxShadowed>
                <Box>{children}</Box>
              </BoxShadowed>
              <Arrow position={arrowPosition} />
            </Relative>
          </Relative>
        )}
      </Absolute>
    </ClickAwayListener>
  );
};

export const Helper: React.FC<HelperProps> = ({ open, disablePortal, ...props }) => {
  return (
    open &&
    (!disablePortal ? ReactDOM.createPortal(<HelperContent {...props} />, document.body) : <HelperContent {...props} />)
  );
};
