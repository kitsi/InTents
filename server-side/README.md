## InTents server side

### Setup Instructions to run app

1) Run MySql on machine, note username & password to enter in next step

2) Add the following code to the  'src/main/resources/application.properties' file <br />(substitute your own username & password)
```
spring.datasource.url = jdbc:mysql://localhost:3306/intents?createDatabaseIfNotExist=true
spring.datasource.username = [your username]
spring.datasource.password = [your password]
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.generate-ddl = true
spring.jpa.hibernate.ddl-auto = update
```
**If the database doesn't already exist, it will be added**

3) Interacting with api in browser<br />
    Swagger url: http://localhost:8080/swagger-ui/index.html#/