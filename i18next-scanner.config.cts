module.exports = {
    input: [
        "src/**/*.{ts, tsx}",
        "!src/**/*.spec.{ts, tsx}",
        "!i18n/**",
        "!**/node_modules/**",
    ],
    output: "standalone",
    options: {
        compatibilityJSON: "v3",
        debug: true,
        func: {
            list: ["i18next.t", "i18n.t", "t"],
            extensions: [".ts", ".tsx"],
        },
        trans: {
            extensions: [".ts", ".tsx"]
        },
        lngs: ["ru", "uz"],
        ns: ["translation"],
        defaultLng: "ru",
        defaultNs: "translation",
        resource: {
            loadPath: "i18n/{{lng}}/{{ns}}.json",
            savePath: "i18n/{{lng}}/{{ns}}.json",
        },
    },
}
