async function convertUpperCaseToLowercase(str) {
    return str.replace(/[A-Z]/g, function(match) {
      return match.toLowerCase();
    });
}

export default convertUpperCaseToLowercase;