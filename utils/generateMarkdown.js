// this function selects the corrisponding badge to the users lincese selection
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

// this function selects the corrisponding link to the users lincese selection
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return "https://opensource.org/licenses/MIT"
  }
  else if(license === "Mozilla"){
    return "https://opensource.org/licenses/MPL-2.0"
  }
  else if(license === "IBM"){
    return "https://opensource.org/licenses/IPL-1.0"
  }
  else if(license === "Eclipse"){
    return "https://opensource.org/licenses/EPL-1.0"
  }
  else{
    return ""
  }
}

// this function renders the whole license section
// If no license is selected then the section will not exist
function renderLicenseSection(license) {
  if(license === "none"){
    return ""
  }
  else{
    return `
  ## Licenses
  &nbsp;&nbsp;&nbsp;&nbsp;The Lincese used in this application is the ${license} license.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;Link to license: ${renderLicenseLink(license)}
  `
  }
}

// this function takes in the users responses and will generate the README files structure using template literals.
// adds users input into the file as well.
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Description

   &nbsp;&nbsp;&nbsp;&nbsp;${data.discription} 

  ## Table of Contents
   - [Installation Instructions](#Installation-Instructions)<br/>
   - [Usage](#Usage)<br/>
   - [Licenses](#Licenses)<br/>
   - [Contributions Guidelines](#Contributions-guidelines)<br/>
   - [Tests Instructions](#Tests-Instructions)<br/>
   - [How to reach for questions](#How-to-reach-for-questions)<br/>


  ## Installation Instructions

  &nbsp;&nbsp;&nbsp;&nbsp;${data.installation}

  ## Usage

  &nbsp;&nbsp;&nbsp;&nbsp;${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions guidelines

  &nbsp;&nbsp;&nbsp;&nbsp;${data.contributions}

  ## Tests Instructions

  &nbsp;&nbsp;&nbsp;&nbsp;${data.tests}

  ## How to reach for questions

  &nbsp;&nbsp;&nbsp;&nbsp;${data.questions1}<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;${data.questions2}`
}

// must use module.exports to use functions defined in this file in other files 
// must use require in other files to gain access to this files module exports 
module.exports = {
  generateMarkdown
};
