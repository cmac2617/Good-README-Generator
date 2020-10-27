// function to generate markdown for README
function generateMarkdown(data, license) {
  return `# ${data.title}
  ## [Video](https://drive.google.com/file/d/1Tapyo16H_NaJi0f9T15WtiNuZEdCkiie/view)

  ## Table of Contents
  ![License](${license})
  * [Description](#Description)
  * [Installation Instructions](#Installation)
  * [Use Cases]("#Usage")
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
  This application uses a standard ${data.license} license.

  ## Tests
  ${data.test}

  ## Contributors
  ${data.contributors}

  ## Contact
  For further questions, I can be contacted at: ${data.email}.\n
  Visit my Github [profile](http://www.github.com/${data.username}).
`
}

module.exports = generateMarkdown;
