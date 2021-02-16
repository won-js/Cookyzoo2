//node lint 적용 참고링크 : https://stackoverflow.com/questions/46562730/how-to-configure-eslint-with-nodejs-express-application
module.exports = {
  root: true,
  env: {
    node: true,
		browser: true,
  },
  extends: ["naver"],
  parserOptions: {
		"sourceType" : "module"
  },
  rules: {
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
};