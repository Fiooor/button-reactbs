module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              template: (
                { template },
                opts,
                { imports, componentName, props, jsx, exports }
              ) => template.ast`
                ${imports}

                const ${componentName} = (${props}) => {
                  props = { ...props, fill: '#fff', size: '24px', name };
                  return ${jsx};
                };

                export default ${componentName};
              `,
            },
          },
        ],
      },
    ],
  },
}