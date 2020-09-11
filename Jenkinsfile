node {
    def app
    

		// Mark the code checkout 'stage'....
		stage('Checkout from GIT') {
			checkout scm
		}


		// Build and Deploy to ACR 'stage'... 
		stage('Build and Push to Azure Container Registry') {
			app = docker.build('mbiregistry.azurecr.io/hellok8s')
			docker.withRegistry('https://mbiregistry.azurecr.io', 'acr-cred') {
				app.push("${env.BUILD_NUMBER}")
				app.push('latest')
			}
		}

		// Pull, Run, and Test on ACS 'stage'... 
		// stage('ACS Docker Pull and Run') {
	   	// 	app = docker.image('mbiregistry.azurecr.io/event-service:latest')
	   	// 	docker.withRegistry('https://mbiregistry.azurecr.io', 'acr-cred') {
		// 		app.pull()
        //                         sh '/usr/local/bin/docker-compose down'
        //                         sh '/usr/local/bin/docker-compose up -d'
		// 	}
		// }

        // Deploy Application on K8s
        stage('Deploy Application on K8s') {
                    sh("kubectl apply -f deployscript.yml")
                    sh("kubectl apply -f servicescript.yml")
            }


   
}
