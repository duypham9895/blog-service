// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  schema: [
    {
      'https://blog-app.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    'imports/@types/index.d.ts': {
      plugins: ['typescript'],
      config: {
        skipTypename: false,
        noExport: true,
        declarationKind: 'interface',
        constEnums: false,
        namingConvention: {
          typeNames: 'change-case#pascalCase',
        },
      },
    },
    'imports/@types/index.ts': {
      plugins: ['typescript'],
      config: {
        skipTypename: false,
        noExport: false,
        declarationKind: 'interface',
        constEnums: false,
        namingConvention: {
          typeNames: 'change-case#pascalCase',
        },
      },
    },
  },
};
