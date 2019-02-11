pipeline{
    agent any;
    
    tools {
        nodejs 'node-11.9.0';
    }
    
    stages {
        /*stage('Checkout SCM') {
            steps {
                sh "echo ${env.GIT_COMMIT}"
                sh "echo ${env.BUILD_ID}"
                git 'https://github.com/suparnb/blog-frontend.git'
            }
        }*/
    
        stage('Build') {
            steps {
                script {
                    sh 'npm install';
                    sh 'npm run build';
                }
            }
        }
        
        /*stage('Test') {
            steps {
                script {
                    npm test;
                }
            }
        }*/
        
        stage('Build and Save image') {
            steps {
                script {
                    def blogFrontendImage = docker.build("suparnb/blog-frontend:${env.BUILD_ID}");
                    
                    withDockerRegistry(credentialsId: 'docker-auth') {
                        blogFrontendImage.push();
                    }
                }
            }
        }
    }
}
