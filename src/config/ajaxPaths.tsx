function getBaseUrl() {
  return "http://localhost:3001";
}

export const ajaxUrl = {
  "cards": {
    get: getBaseUrl() + "/api/cards"
  }
}