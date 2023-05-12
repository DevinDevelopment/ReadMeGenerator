// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if(license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  else if(license === "Eclipse"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description 
  
   &nbsp;&nbsp;&nbsp;&nbsp;${data.discription} 

  ## Table of Contents
   - [Installation Instructions](#Installation-Instructions)<br/>
   - [Usage](#Usage)<br/>
   - [Licenses](#Licenses)<br/>
   - [Contributions Guidelines](#Contributions-guidelines)<br/>
   - [Tests Instrictions](#Tests-Instrictions)<br/>
   - [How to reach for questions](#How-to-reach-for-questions)<br/>


  ## Installation Instructions

  &nbsp;&nbsp;&nbsp;&nbsp;${data.installation}

  ## Usage

  &nbsp;&nbsp;&nbsp;&nbsp;${data.usage}

  ## Licenses

  &nbsp;&nbsp;&nbsp;&nbsp;${data.licenses}

  ## Contributions guidelines

  &nbsp;&nbsp;&nbsp;&nbsp;${data.contributions}

  ## Tests Instrictions

  &nbsp;&nbsp;&nbsp;&nbsp;${data.tests}

  ## How to reach for questions

  &nbsp;&nbsp;&nbsp;&nbsp;${data.questions1}<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;${data.questions2}`
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
