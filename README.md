# cwebfrontend
 Contractor Web Application FrontEnd Deploying to AWS EC2 instance

Prerequisite: AWS Account is setup, GitHub Account
1. Setup the VPC
2. Configure the subnet
3. Configure the Internet Gatways
4. Configure the Route table
5. On the Route TABLE edit the route to include local and Internet Gateways
6. On the route table, goto Subnet associations and associate the subnet you created from step 2
7. Create the EC2 and make sure the network belongs to the subnet associated in step 6.
8. EC2 should use the vpc, route table, and subnet you previously created.
9. ssh to ec2 and switch to root user
10.  Install the JDK, node js and mariadb - follow the user guide word documentation 
     Open the mysql and configure the contractor dabase - follow the guide in user documentation
11. create a script for below commands 

#!/bin/bash
npm install
npm install react-router-dom
npm install bootstrap@5.2.0
npm install @mui/material
npm install bcrypt
npm install @mui/x-data-grid
npm install @emailjs/browser
npm install -g json-server
npm install @mui/icons-material

12. create a script to stop some services if using a 1 GB ec2 instance
#!/bin/bash
systemctl stop systemd-journald
systemctl stop  amazon-ssm-agent
# systemctl stop httpd (if was installed)
systemctl stop systemd-udevd
systemctl stop crond

13. clone the repo, type  git clone https://github.com/ginoruperez/contractorweb.git
14. git checkout to dev-aws branch
15. run the script you created in step 11 and 12
16. run below commands in each terminal 

npm start
node server/server.js

17. Open the browser http://aws public ip e.g. ec2-44-197-178-102.compute-1.amazonaws.com:3000/


