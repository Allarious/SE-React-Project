FROM jenkins/jenkins:lts
USER root
RUN apt-get update && \
apt-get update && \
apt-get -y install docker-ce
RUN apt-get install -y docker-ce
RUN usermod -a -G docker jenkins
USER jenkins
