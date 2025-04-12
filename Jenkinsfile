pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/VerdeVision.git'
            }
        }

        stage('Install Server Dependencies') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start Server') {
            steps {
                dir('server') {
                    sh 'npm start &'  // or `node index.js`
                }
            }
        }

        stage('Post Build') {
            steps {
                echo '🎉 VerdeVision build and start complete!'
            }
        }
    }

    post {
        success {
            echo '✅ Build Success'
        }
        failure {
            echo '❌ Build Failed'
        }
    }
}
