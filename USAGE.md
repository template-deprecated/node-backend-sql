# Example usage

1. open [package.json](package.json)
    1. update `name`, `version`, `description`, `repository`, `keywords`, `author`, `license`, `bugs`, `homepage`
1. open [README.md](README.md)
    1. clear all document, and add new one
1. update [codeclimate.yml](codeclimate.yml) - add or remove library as you want
1. review [.circleci/config.yml](.circleci/config.yml)
    1. default will run `ci:test` and then run `ci:report` to generate coverage report
1. review [app/config/config.json](app/config/config.json)
    1. update database configuration of different environment
        1. `development` - For developing
        1. `test` - For local testing
        1. `citest` - For CI testing
        1. `production` - For deploying

## Folder description
 
### App

1. config - database config
1. controllers - database controller
1. db - migration and seeding
1. models - database models
1. routes - API routing

### Test

1. results - test results

### Circle-CI

1. config.yml - ci config