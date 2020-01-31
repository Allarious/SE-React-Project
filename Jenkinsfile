pipeline {
  environment {
    registry = "negindocker202/lemonmarket"
    registryCredential = 'lemonmarket'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Initialize'){
      steps {
        sh 'apt-get install docker'
      }
    }
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Allarious/SE-React-Project.git'
      }
    }
    stage('Build') {
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