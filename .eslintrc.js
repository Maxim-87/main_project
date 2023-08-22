module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "no-unused-vars": "warn",
        "react/jsx-indent": [2,4],
        "indent": [2,4],
        'jsx-quotes': ['error', 'prefer-single'],
        "react/jsx-filename-extension": [2,
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": [0, {
            "html": "ignore"
        }],
        "react/function-component-definition": 'off',
        'react/jsx-key': 'error',
        "@typescript-eslint/no-unused-vars": ["error"],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "no-shadow": 'off',
        "i18next/no-literal-string": "off",
        "max-len": ["error", {
            "code": 100,
            "ignoreComments": true,
        }]
    }
}
