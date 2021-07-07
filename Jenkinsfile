pipeline {
    agent any

    stages {
        stage ('Build Stage') {
            steps   { 
                bat "npm config ls"
            }
        }
        stage ('Testing Stage') {
            steps   {
                bat "npm install --dev"
                bat "npm run test"
            }
        }
    }
}
