// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n## Description
  \n${data.description}
  \n## Table of Contents
  \n- [Installation](#installation)
  \n- [Usage](#usage)
  \n- [License](#license)
  \n- [Contributing](#contributing)
  \n- [Tests](#tests)
  \n- [Questions](#questions)
  \n## Installation
  \n${data.installation}
  \n## Usage
  \n${data.usage}
  \n## License
  \ndata.license
  \n## Contributing
  \n${data.contribute}
  \n## Tests
  \n${data.tests}
  \n## Questions
  \nGithub: ${data.github}
  \nFor additional questions please send and email to, ${data.email}
`;
}

export default generateMarkdown;
