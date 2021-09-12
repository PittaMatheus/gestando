function getBaseUrl() {
  return "http://localhost:3001";
}

export const ajaxUrl = {
  "cards": {
    get: getBaseUrl() + "/api/cards",
    manage: getBaseUrl() + "/api/cards"
  },
  "users": {
    get: getBaseUrl() + "/api/users"
  },
  "audits": {
    get: getBaseUrl() + "/api/audits",
    manage: getBaseUrl() + "/api/audits"

  }
}