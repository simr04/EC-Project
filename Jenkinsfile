pipeline {
    agent any
    tools {
        nodejs 'node:20.15.0-alpine'  // Use the exact name you set up in Global Tool Configuration.
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Running tests with the --watchAll=false option
                sh 'npm test -- --watchAll=false'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
