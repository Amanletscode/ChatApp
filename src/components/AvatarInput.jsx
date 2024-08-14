// src/components/AvatarInput.jsx
import React from 'react';
import { Stack, Avatar, IconButton } from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "./styles/StyledComponents";

const AvatarInput = ({ onFileChange, multiple = false }) => {
  return (
    <Stack position={"relative"} width={"10rem"} margin={"auto"}>
      <Avatar
        sx={{
          width: "10rem",
          height: "10rem",
          objectFit: "contain",
        }}
      />

      <IconButton
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          color: "white",
          bgcolor: "rgba(0,0,0,0.5)",
          ":hover": {
            bgcolor: "rgba(0,0,0,0.7)",
          },
        }}
        component="label"
      >
        <CameraAltIcon />
        <VisuallyHiddenInput
          type="file"
          onChange={onFileChange}
          accept="image/*"
          multiple={multiple}
        />
      </IconButton>
    </Stack>
  );
};

export default AvatarInput;
