pipeline {
    agent {
        dockerfile true
    }

    stages {
        stage('Install') {
            steps {
                echo 'Install stage'
                sh 'node -v'
                sh 'npm -v'
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
                echo 'Deploy stage'
            }
        }
    }
}
