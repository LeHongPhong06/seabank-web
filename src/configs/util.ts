export function headerRequest() {
  const data = {
    channel: "WebSME",
    context: "WEB",
    priority: 3,
    reqType: "REQUEST",
    subChannel: "WebSME",
    synasyn: "true",
    userID: "admin1",
  };
  return data;
}

export function bodyBuilder(authenType: string, data?: Record<string, unknown>) {
  return { authenType, data };
}
