import DropzoneContainer from "react-dropzone";
import React from "react";

export const Dropzone = ({ onDrop, style, children }) => {
  return (
    <DropzoneContainer onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <div style={style} {...getRootProps()}>
          <input {...getInputProps()} disabled />
          {children}
        </div>
      )}
    </DropzoneContainer>
  );
};
