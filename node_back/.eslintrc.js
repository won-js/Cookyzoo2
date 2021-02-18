//node lint 적용 참고링크 : https://stackoverflow.com/questions/46562730/how-to-configure-eslint-with-nodejs-express-application
module.exports = {
  root: true,
  env: {
<<<<<<< HEAD
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["naver"],
  parserOptions: {
    sourceType: "module",
=======
    node: true,
		browser: true,
  },
  extends: ["naver"],
  parserOptions: {
		"sourceType" : "module"
>>>>>>> e31593e9a1d0e07758e63968a3f009c396304c11
  },
  rules: {
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
<<<<<<< HEAD
};
=======
};
>>>>>>> e31593e9a1d0e07758e63968a3f009c396304c11
