import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  TextField,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { Block, CameraAlt as CameraAltIcon } from "@mui/icons-material";
import useInputValidation from "../hooks/useInputValidation";
import { usernameValidator } from "../utils/validators";

const MAX_FILE_SIZE_MB = 5; // Maximum file size in MB

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarError, setAvatarError] = useState("");

  const handleAvatarChange = (files) => {
    const file = files[0]; // Only accept the first file for registration

    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setAvatarError(`File size exceeds ${MAX_FILE_SIZE_MB} MB limit.`);
      setAvatarFile(null);
    } else {
      setAvatarError("");
      setAvatarFile(file);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
    <div
      style={{
        backgroundImage:
        "linear-gradient(rgba(200,200,200,0.5), rgba(120,110,220,0.5))"
      }}
    >
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}

              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button fullWidth variant="text" onClick={toggleLogin}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}

              onSubmit={handleSignUp}

            >
              {/* Avatar Input Section */}
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatarFile ? URL.createObjectURL(avatarFile) : ""}
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
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleAvatarChange(e.target.files)}
                  />
                </IconButton>
              </Stack>
              {avatarError && (
                <Typography m={"1rem auto"}
                  width={"fit-content"}
                  display={"block"}
                  color={"error"}
                  variant="caption">
                  {avatarError}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button fullWidth variant="text" onClick={toggleLogin}>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
