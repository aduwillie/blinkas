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
                sh 'apt-get install node'
                sh 'apt-get install npm'
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
                echo 'Install stage'
                sh 'ls -al'
                echo '$PATH'
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
