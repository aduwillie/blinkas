pipeline {
    agent {
        node {
            label 'docker-prod'
            customWorkspace '/app/blinkas'
        }
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stack deploy -c docker-compose.yml blinkas'
            }
        }
    }
}
