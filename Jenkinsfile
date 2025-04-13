pipeline {
    agent any
    stages {
    
        stage('Install Dependencies') {
            steps {
                // Installs node modules
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Builds the React app; output goes to the build folder
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Runs tests; using --watchAll=false to prevent hanging in watch mode
                sh 'npm test -- --watchAll=false'
            }
        }
    }
    post {
        always {
            // Cleans the workspace after the pipeline run
            cleanWs()
        }
    }
}
