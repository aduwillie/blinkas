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
                echo 'Install stage'
            }
        }
        stage('Test') {
            steps {
                echo 'Test stage'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy stage'
            }
        }
    }
}
