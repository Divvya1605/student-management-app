pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/Divvya1605/HelloJenkins.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
    }
}
