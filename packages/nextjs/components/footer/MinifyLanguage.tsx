import { locales } from "@libraries/translation/config";
import { useRouter } from "next/router";
import React from "react";
import { getLanguageName, getLanguageValue } from "@utils/getLanguageName";
import { LangNameT } from "@hooks/useTranslate";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { ButtonIcon } from "@components/buttons/ButtonIcon";
import { Translate } from "@material-ui/icons";
import { makeSerieNumber } from "@utils/makekey";
import { Menu, MenuItem } from "@material-ui/core";

export const MinifyLanguage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const ref = React.useRef();
  const localeStorage = useLocalStorage("locale");
  const handleLocaleChange = React.useCallback(
    (e) => {
      const targetLang = getLanguageValue(e.target.value as LangNameT);
      const regex = new RegExp(`^/(${locales.join("|")})`);
      localeStorage.set(targetLang);
      router.push(router.pathname, router.asPath.replace(regex, `/${targetLang}`), { scroll: false });
      setMenuOpen(false);
    },
    [router]
  );

  return (
    <ButtonIcon
      tooltipTitle="language"
      size="small"
      id="demo-positioned-button"
      aria-controls="demo-positioned-menu"
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={() => null}
    >
      <Translate onClick={() => setMenuOpen(true)} ref={ref} style={{ fill: "grey" }} />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={ref.current}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        {locales.map((el) => (
          <MenuItem key={makeSerieNumber(5)} onClick={handleLocaleChange}>
            {getLanguageName(el)}
          </MenuItem>
        ))}
      </Menu>
    </ButtonIcon>
  );
};
