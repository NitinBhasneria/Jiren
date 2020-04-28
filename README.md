# Jiren

Mongo database(intergrating with django using djongo)
also check the videos https://www.youtube.com/watch?v=LU6nYblf2cs&t=238s
can use robo3T app for viewing the database table https://robomongo.org/download

  1. add a key
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 4B7C549A058F8B6B
  2. create mongo repo
    echo "deb [arch=amd64] http://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
  3. Complete the installation with update of repositories then install:
    sudo apt update
    sudo apt install mongodb-org
  4. Enable the mongod service and start it up:
    systemctl enable mongod.service
    systemctl start mongod.service
  5. Check your installation:
        $ mongo --version
        MongoDB shell version v4.2.2
        git version: a0bbbff6ada159e19298d37946ac8dc4b497eadf
        OpenSSL version: OpenSSL 1.1.1  11 Sep 2018
        allocator: tcmalloc
        modules: none
        build environment:
            distmod: ubuntu1804
            distarch: x86_64
            target_arch: x86_64
  6. Configure and Connect MongoDB
        Open mongo shell
        Open MongoDB shell on your server by typing below command:
        > mongo
        Switch to the database admin
        > use admin
        Create the root user
        > db.createUser({user:"admin", pwd:”password", roles:[{role:"root" db:"admin"}]})
        Exit from the MongoDB shell.
        Connect MongoDB
        Restart MongoDB( command mentioned above ) and connect with user created with this command:
        > mongo -u admin -p admin123 --authenticationDatabase admin
        You can see the mongo connecting. Check the databases using the following command:
        > show dbs