/*class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
}
  
function throwGenericError() {
    throw new Error('Generic error');
}
  
function throwCustomError() {
    throw new CustomError('Custom error');
}
  
try {
    throwGenericError();
} catch (error) {
    console.log('Caught a generic error:', error.message);
} finally {
    console.log('Finally block executed');
}
  
try {
    throwCustomError();
} catch (error) {
    console.log('Caught a custom error:', error.message);
} finally {
    console.log('Finally block executed');
}*/

class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwGenericError() {
    throw new Error("Generic error");
  }
  
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
  
  // Force generic error
  console.log("Force generic error");
  try {
    console.log("Generic error try block");
    throwGenericError();
  } catch (error) {
    console.log("Generic error catch block");
    console.log("Error: Generic error");
  } finally {
    console.log("Generic error finally block");
  }
  
  // Force custom error
  console.log("Force custom error");
  try {
    console.log("Custom error try block");
    throwCustomError();
  } catch (error) {
    console.log("Custom error catch block");
    console.log("CustomError: Custom error");
  } finally {
    console.log("Custom error: finally block");
  }
  