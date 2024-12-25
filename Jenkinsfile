pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t DevOps_14 .'
      }
    }

    stage('Test') {
      steps {
        sh '''docker ps -a --filter "name=klinova" -q | xargs -r docker rm -f || true
docker run -d --name klinova DevOps_14
docker exec klinova npm test
docker rm -f klinova'''
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 --name klinova DevOps_14'
      }
    }

  }
}