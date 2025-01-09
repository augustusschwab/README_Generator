// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT') return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  if(license == 'APACHE 2.0') return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  if(license == 'GPL 3.0') return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  if(license == 'BSD 3') return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  if(license == 'None' || []) return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'MIT') return '[MIT License](https://opensource.org/licenses/MIT)';
  if(license == 'APACHE 2.0') return '[APACHE 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  if(license == 'GPL 3.0') return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  if(license == 'BSD 3') return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';
  if(license == 'None' || []) return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  return `${badge}\n\n${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n## Description
  ${data.description}
  \n## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  \n## Installation
  ${data.installation}
  \n## Usage
  ${data.usage}
  \n## License
  ${renderLicenseSection(data.license)}
  \n## Contributing
  ${data.contribute}
  \n## Tests
  ${data.tests}
  \n## Questions
  Github: ${data.github}
  \nFor additional questions please send and email to, ${data.email}.
  \n
  \n> [!NOTE]
  >All code was written by Gus Schwab using the starter code provided in Module 07 of the U of U Software Development Bootcamp.
`;
}

export default generateMarkdown;
