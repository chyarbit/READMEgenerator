function generateMarkdown(data) {
  return `
# ${data.title}
# Project title
# Description
# Table of Contents
# Installation
# Usage
# License
# Contributing
# Tests
# Questions
  ## User GitHub profile picture
  ## User GitHub email
	https://img.shields.io/badge/eclipse-marketplace/last-update/:name
`;
}

module.exports = generateMarkdown;
