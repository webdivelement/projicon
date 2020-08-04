# Contributing

_Everything necessary for project installation, development and contribution._

- [Getting Started](#getting-started)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Versioning](#versioning)
- [Attribution](#attribution)

## Getting Started

Before contributing, please first discuss the change(s) you wish to make.  
You may [create an issue](https://github.com/webdivelement/projicon/issues/new)
or [contact the owner](https://github.com/webdivelement) of this repository.

## Code of Conduct

You must adhere to the [**Code of Conduct**](CODE_OF_CONDUCT.md) specified in
this project.  
Please review [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) in full.

## License

You must accept the [**MIT License**](LICENSE.txt) covering your contributions.  
Please review [`LICENSE.txt`](LICENSE.txt) in full.

## Prerequisites

The versions listed for these prerequisites are current at the time of writing.  
While more recent versions are likely to work, _your mileage may vary..._

- [Node v14.5 and NPM v6.14](https://nodejs.org/)
- [Git v2.27](https://git-scm.com/)

## Installation

1. Start by [creating a fork](https://github.com/webdivelement/projicon/fork)
of the repository with your account.

2. Create the project directory and make it the current working directory:

    ```sh
    mkdir projicon && cd projicon/
    ```

3. Clone the project repository into the current working directory:

    ```sh
    git clone git@github.com:<your-account>/projicon.git .
    ```

## Development

1. Create the new branch, prefixing it with the zero padded issue number:

    ```sh
    git checkout -b 0000-short-name
    ```

2. Update the version number with `patch`, `minor` or `major`, following
[SemVer](https://semver.org/):

    ```sh
    npm run bump patch
    ```

3. Update the [`CHANGELOG.md`](CHANGELOG.md) with the appropriate release notes:

    ```
    `v0.0.0` **Short Title For Changes** (YYYY-MM-DD)

    - Description of changes made in this version.
    - Additional noteworthy changes to be mentioned.
    ```

4. Stage the modified / added / removed files which are to be committed:

    ```sh
    git add --all
    ```

5. Optionally view the status to ensure the correct files are staged for commit:

    ```sh
    git status
    ```

6. Optionally view the commit differences to ensure all changes are present:

    ```sh
    git diff --cached
    ```

7. Commit the changes, prefixing the message with the zero padded issue number:

    ```sh
    git commit --message "#0000 - Created the example commit message"
    ```

8. Push the new branch to the project repository, while setting remote tracking:

    ```sh
    git push origin 0000-short-name --set-upstream
    ```

9. Submit the changes by
[creating a pull request](https://github.com/webdivelement/projicon/compare)
using the URL found in the output:

    ```
    remote: Create a pull request for '0000-short-name' on GitHub by visiting:
    remote: https://github.com/<your-account>/projicon/pull/new/0000-short-name
    ```

## Versioning

This project uses **Semantic Versioning 2.0.0**.  
Please see [SemVer](https://semver.org/) to read the specification.

## Attribution

Created and maintained by [webdivelement](https://github.com/webdivelement).  
View the
[GitHub repository](https://github.com/webdivelement/projicon)
or the
[list of contributors](https://github.com/webdivelement/projicon/contributors)
for this project.
