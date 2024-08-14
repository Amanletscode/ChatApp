// src/utils/validators.js
export const isValidUsername = (username) => {
    // Define your custom username validation logic
    return /^[a-zA-Z0-9_]{3,15}$/.test(username); // Example: only alphanumeric and underscores
  };
  
  export const usernameValidator = (username) => {
    if (!isValidUsername(username)) {
      return {
        isValid: false,
        errorMessage: "Username is invalid",
      };
    }
    return { isValid: true };
  };
  