import { css, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { normalize } from "polished";
import React, { Fragment } from "react";
import { colors, theme } from "@libraries/theme";
import { useTheme } from "@hooks/useTheme";

const globalStyles = (isDark) => css`
  ${normalize()}
  html {
    background-color: ${isDark ? "#202124" : "white"};
    font-family: "Mukta", sans-serif;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    font-size: 1em;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    font-family: "Mukta", sans-serif;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    outline-style: none;
  }

  body {
    background-color: ${isDark ? "#202124" : "white"};
    font-family: "Mukta", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "calt" 0;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    line-height: 1.45;
    user-select: text;
  }

  ::selection {
    color: white;
    background-color: #ee273a;
  }

  body::-webkit-scrollbar {
    width: 5px;
    background-color: #f0f0f0;
    border-radius: 30px;
    overflow: hidden;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #c5c5c5;
    border-radius: 30px;
    overflow: hidden;
  }

  ::selection {
    text-shadow: none;
  }

  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  p {
    font-family: "Mukta", sans-serif;
    transition: 0.5s;
  }

  p,
  a,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${isDark ? "white" : "black"};
    word-break: break-word;
  }

  h3 {
    font-family: "Mukta", sans-serif;
  }

  a {
    font-family: "Mukta", sans-serif !important;
    transition: 0.5s !important;
    text-decoration: none !important;
    /* color: inherit !important; */
  }

  .inputeditable {
    position: relative;
    cursor: text;
    transition: background-color 0.5s;
    border-radius: 8px;
    border: none;
  }

  #select-language {
    color: ${isDark ? "white !important" : "black !important"};
  }

  .MuiFormControl-root > label {
    color: ${isDark ? "white !important" : "black !important"};
  }

  .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${isDark ? "rgba(255, 255, 255, 0.23) !important" : "rgba(0, 0, 0, 0.23) !important"};
  }

  .inputeditable .input {
    resize: none;
    /* position: absolute; */
    width: 100%;
    height: 100%;
    font-size: inherit;
    box-sizing: border-box;
    background: none;
    top: 0px;
    left: 0;
    padding-left: inherit;
    padding-right: inherit;
    padding: inherit;
    border-radius: 8px;
    font-family: inherit;
    box-shadow: 0px 0px 0px 1.5px #0ebeff;
    border: none;
    word-wrap: break-word;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  .body {
    background-color: "white";
  }

  .firebase-emulator-warning {
    display: none !important;
  }

  .MuiDialog-container {
    height: 100vh !important;
  }

  .selectable-selectbox {
    background-color: #d3d3d366;
    box-shadow: rgb(0 0 0 / 12%) 0 1px 6px, rgb(0 0 0 / 12%) 0 1px 4px;
  }

  .selectable-main {
    width: 100%;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: inherit !important;
    border-width: 1px !important;
  }

  .MuiSvgIcon-root,
  .MuiListItemIcon-root > svg,
  .MuiListItemIcon-root > .MuiBadge-root > svg {
    fill: ${isDark && "lightGrey !important"};
  }

  .MuiPaper-root {
    background-color: ${isDark && "#303134 !important"};
  }

  .MuiButtonBase-root {
    color: ${isDark && "white !important"};
  }

  .switch {
    background-color: transparent;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    height: 24px;
    margin: 0 0 10px;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 56px;
  }
  .switch__label {
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .switch__input {
    opacity: 0;
  }
  .switch__input:checked ~ .switch__text {
    background: #0090bb;
  }
  .switch__input:checked ~ .switch__text:before {
    opacity: 0;
    transform: translateX(200%);
  }
  .switch__input:checked ~ .switch__text:after {
    opacity: 1;
    transform: translateX(0);
  }
  .switch__input:checked ~ .switch__handle {
    transform: translateX(32px);
  }
  .switch__text {
    background-color: #e5e5e5;
    border-radius: 50px;
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    height: 24px;
    margin: 0;
    position: absolute;
    top: 0;
    width: 56px;
  }
  .switch__text::before,
  .switch__text::after {
    color: SlateGrey;
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    position: absolute;
    transition: all 0.2s ease-in-out;
    transition-property: transform;
  }
  .switch__text:before {
    content: attr(data-off);
    right: 8px;
    transform: translateX(0);
  }
  .switch__text:after {
    color: white;
    content: attr(data-on);
    left: 9px;
    opacity: 0;
    transform: translateX(-200%);
  }
  .switch__handle {
    background-color: white;
    border-radius: 18px;
    display: block;
    height: 20px;
    margin: 2px;
    padding: 0;
    position: absolute;
    top: 0;
    transition: all 0.2s ease-in-out;
    transition-property: transform;
    width: 20px;
  }
  .switch--small {
    height: 30px;
    width: 70px;
  }
  .switch--small .switch__input:checked ~ .switch__handle {
    transform: translateX(40px);
  }
  .switch--small .switch__text {
    height: 30px;
    width: 70px;
  }
  .switch--small .switch__text:before,
  .switch--small .switch__text:after {
    font-size: 14px;
    line-height: 30px;
    position: absolute;
  }
  .switch--small .switch__text:before {
    right: 10px;
  }
  .switch--small .switch__text:after {
    left: 12px;
  }
  .switch--small .switch__handle {
    height: 26px;
    width: 26px;
  }
  .switch--no-text .switch__text:before,
  .switch--no-text .switch__text:after {
    display: none;
  }
  .switch--primary .switch__input:checked ~ .switch__text {
    background: #ee273a;
  }
  .switch--blue .switch__input:checked ~ .switch__text {
    background: #1a73e8;
  }
  .switch--black .switch__input:checked ~ .switch__text {
    background: black;
  }
  .switch--white .switch__input:checked ~ .switch__text {
    background: white;
  }
  .switch--green .switch__input:checked ~ .switch__text {
    background: #5cb85c;
  }
  .switch--orange .switch__input:checked ~ .switch__text {
    background: orangered;
  }

  /* Calendar */

  .tui-full-calendar-dayname-date-area {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
  .tui-full-calendar-dayname-container {
    height: 80px !important;
  }
  .tui-full-calendar-dayname {
    line-height: 10px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tui-full-calendar-dayname-date-area > span,
  .tui-full-calendar-timegrid-hour > span {
    color: ${isDark ? "white" : "grey"} !important;
    text-transform: uppercase;
  }
  .tui-full-calendar-timegrid-hourmarker-line-left {
    border-top-color: ${colors.primary} !important;
  }
  .tui-full-calendar-timegrid-todaymarker {
    background-color: ${colors.primary} !important;
  }
  .tui-full-calendar-timegrid-hourmarker-line-today {
    border-top-color: ${colors.primary} !important;
    border-top-width: 2px !important;
  }
  .tui-full-calendar-timegrid-hourmarker-time {
    color: ${colors.primary} !important;
  }

  .firebase-emulator-warning {
    display: none !important;
  }

  .MuiDialog-container {
    height: 100vh !important;
  }

  .selectable-selectbox {
    background-color: #d3d3d366;
    box-shadow: rgb(0 0 0 / 12%) 0 1px 6px, rgb(0 0 0 / 12%) 0 1px 4px;
  }

  .selectable-main {
    width: 100%;
  }

  .switch {
    background-color: transparent;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    height: 24px;
    margin: 0 0 10px;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 56px;
  }
  .switch__label {
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .switch__input {
    opacity: 0;
  }
  .switch__input:checked ~ .switch__text {
    background: #0090bb;
  }
  .switch__input:checked ~ .switch__text:before {
    opacity: 0;
    transform: translateX(200%);
  }
  .switch__input:checked ~ .switch__text:after {
    opacity: 1;
    transform: translateX(0);
  }
  .switch__input:checked ~ .switch__handle {
    transform: translateX(32px);
  }
  .switch__text {
    background-color: #e5e5e5;
    border-radius: 50px;
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    height: 24px;
    margin: 0;
    position: absolute;
    top: 0;
    width: 56px;
  }
  .switch__text::before,
  .switch__text::after {
    color: SlateGrey;
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    position: absolute;
    transition: all 0.2s ease-in-out;
    transition-property: transform;
  }
  .switch__text:before {
    content: attr(data-off);
    right: 8px;
    transform: translateX(0);
  }
  .switch__text:after {
    color: white;
    content: attr(data-on);
    left: 9px;
    opacity: 0;
    transform: translateX(-200%);
  }
  .switch__handle {
    background-color: white;
    border-radius: 18px;
    display: block;
    height: 20px;
    margin: 2px;
    padding: 0;
    position: absolute;
    top: 0;
    transition: all 0.2s ease-in-out;
    transition-property: transform;
    width: 20px;
  }
  .switch--small {
    height: 30px;
    width: 70px;
  }
  .switch--small .switch__input:checked ~ .switch__handle {
    transform: translateX(40px);
  }
  .switch--small .switch__text {
    height: 30px;
    width: 70px;
  }
  .switch--small .switch__text:before,
  .switch--small .switch__text:after {
    font-size: 14px;
    line-height: 30px;
    position: absolute;
  }
  .switch--small .switch__text:before {
    right: 10px;
  }
  .switch--small .switch__text:after {
    left: 12px;
  }
  .switch--small .switch__handle {
    height: 26px;
    width: 26px;
  }
  .switch--no-text .switch__text:before,
  .switch--no-text .switch__text:after {
    display: none;
  }
  .switch--primary .switch__input:checked ~ .switch__text {
    background: #ee273a;
  }
  .switch--blue .switch__input:checked ~ .switch__text {
    background: #1a73e8;
  }
  .switch--black .switch__input:checked ~ .switch__text {
    background: black;
  }
  .switch--white .switch__input:checked ~ .switch__text {
    background: white;
  }
  .switch--green .switch__input:checked ~ .switch__text {
    background: #5cb85c;
  }
  .switch--orange .switch__input:checked ~ .switch__text {
    background: orangered;
  }

  .resizer-right {
    border-right: solid 20px #f6f6f6;
  }
  .resizer-bottom {
    border-bottom: solid 20px #f6f6f6;
  }
  .resizer {
    padding-right: 3;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
    margin-left: auto;
    margin-right: auto;
    background-color: lightGrey;
  }
`;

export const ThemeFunc = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useTheme();

  return (
    <ThemeProvider theme={theme(isDark)}>
      <Fragment>
        <Global styles={globalStyles(isDark)} />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};
