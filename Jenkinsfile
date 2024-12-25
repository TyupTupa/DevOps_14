pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t module_14_node_project .'
      }
    }

    stage('Test') {
      steps {
        sh '''docker ps -a --filter "name=klinova" -q | xargs -r docker rm -f || true
docker run -d --name klinova module_14_node_project
docker exec klinova npm test
docker rm -f klinova'''
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 --name klinova module_14_node_project'
      }
    }

  }
}