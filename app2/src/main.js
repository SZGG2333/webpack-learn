(async () => {
  const { sayHello } = await import("RemoteApp/utils.js");
  sayHello();
})();