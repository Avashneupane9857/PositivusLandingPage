pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = 'dockerhub'
        DOCKER_IMAGE = 'avash9857/positivus'
    }
    stages {
        stage('Clone Repository') {
            steps {
               
                git branch: 'main', url: 'https://github.com/Avashneupane9857/PositivusLandingPage'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Building the Docker image
                    docker.build("$DOCKER_IMAGE:latest")
                }
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_HUB_CREDENTIALS) {
                        docker.image("$DOCKER_IMAGE:latest").push()
                    }
                }
            }
        }
    }
}

