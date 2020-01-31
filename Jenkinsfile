pipeline {
  environment {
    registry = "negindocker202/lemonmarket"
    registryCredential = 'lemonmarket'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Allarious/SE-React-Project.git'
      }
    }
    stage('Installing docker'){
      steps {
        sh '''RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
            && tar xzvf docker-17.04.0-ce.tgz \
            && mv docker/docker /usr/local/bin \
            && rm -r docker docker-17.04.0-ce.tgz'''
      }
    }
    stage('Build') {
      
    agent {
        docker {
                image 'node:6-alpine' 
                args '-p 3000:3000' 
            }
        }
       steps {
         parallel(
            a: {
              sh 'npm install'
            },
            b: {
              sh '''cd mock-server
              npm install'''
            }
         )
       }
    }
    stage('Test') {
      agent {
          docker {
              image 'node:6-alpine' 
              args '-p 3000:3000' 
          }
      }
      steps {
        sh 'npm test'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}