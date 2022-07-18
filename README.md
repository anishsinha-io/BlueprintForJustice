# BlueprintForJustice

This website is meant to be a resource that is available to help victims of police brutality to get justice for the harm that they faced.

### Team

This website was built, tested, and deployted in its entirety by Anish Sinha, designed by Satveer Singh and Alyssa Guo, and directed by Jacqueline Vo.

### Technologies used

This website was built primarily in TypeScript, with React as a client side UI library and Express as a server side framework. Nginx was used as a reverse proxy to route traffic properly and Docker was used for containerization, so if anyone wants to run this program locally, simply `git clone` this repository and run `docker-compose up`. This should work as long as you have Docker and docker-compose installed. Kubernetes were _very briefly_ considered for this project, however, that would've just been overkill. Also, you will have to change your environment variables on the server side though, as well as create your own SendInBlue account if you want the email functionality to work. This website is deployed on Amazon Web Services (AWS), specifically using the service Elastic Cloud Compute (EC2). No database was necessary for this website, however, if you are looking at this website from the future, I would say that as a developer, I would've liked to use PostgreSQL to store some things more efficiently. Cost was a limiting factor here, as managed PostgreSQL on RDS or Cloud SQL are all upwards of $20/month and this project was meant to be done on as low of a budget as possible. Still, that is a potential area to improve upon.

### License

This software is distributed under the GPL License Version 3. Please see their website (https://www.gnu.org/licenses/gpl-3.0.en.html). The license is relatively permissive, but please do follow the terms if you intend to use this code in any real capacity.

### Issues

If any issues are found or noticed, please email anishsinha0128@gmail.com and I will try to fix the problem and get back to you.
