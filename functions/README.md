# FUNCTIONS

NOTE: Linting issue. eslint conflicts with the root nuxt config.

<https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy>

"By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results."

To limit ESLint to a specific project, place "root": true inside the .eslintrc.* file
