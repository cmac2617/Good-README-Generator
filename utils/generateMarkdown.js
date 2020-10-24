// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  * [Description](#Description)
  * [Installation](#Installation Instructions)
  * [UseCases]{(#Use Cases)
  * [Licensing](#Licensing)
  * [Tests](#Tests)
  * [Contributors](#Contributors)
  * [Contact](#Contact)
  
  ## Description
${data.description}
  ## Installation Instructions
  ${data.installation}

  ## Use Cases
  ${data.usage}

  ## Licensing

  ## Description

  ## Tests

  ## Contributors

  ## Contact
`
}

module.exports = generateMarkdown;
