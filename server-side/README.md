## InTents server side

### Setup Instructions to run app

1) Run MySql on machine, note username & password to enter in next step<br /><br />

2) Get Stripe api key<br /><br />

3) Add the following code to the  'src/main/resources/application.properties' file <br />(substitute your own username & password & Stripe api key)
```
spring.datasource.url = jdbc:mysql://localhost:3306/intents?createDatabaseIfNotExist=true
spring.datasource.username = [your username]
spring.datasource.password = [your password]
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.generate-ddl = true
spring.jpa.hibernate.ddl-auto = update
server.servlet.context-path=/api

stripe.api.key = [add stripe api key]
```
**If the database doesn't already exist, it will be added**<br />

3) Run [sql file](/src/main/resources/products.sql) to add data<br /><br />

4) Interacting with api in browser<br />
   Swagger url: http://localhost:8080/api/swagger-ui/index.html


5) To set logging levels and save logs to a file. Add the following to 'src/main/resources/application.properties' file.<br />
Different logging levels can be configured if needed.
```
# Logging levels
#logging.level.root=WARN
logging.level.com.teksystems.bootcamp.springboot.intents.controllers=ERROR
logging.level.org.springframework.web=DEBUG
logging.level.org.hibernate.SQL=ERROR

logging.pattern.console=%d [%thread] %clr(%-5level) %cyan(%-50logger{32}) : %msg%n
logging.pattern.file=%d [%thread] %-5level %-50logger{32} : %msg%n

# Log file
logging.file.name = application.log
spring.output.ansi.enabled=always

```

### Resources
[Sales Tax Rates per state](https://files.taxfoundation.org/20210106094117/State-and-Local-Sales-Tax-Rates-2021.pdf)
<br />
[Mysql procedure using last_insert_id](https://www.mysqltutorial.org/mysql-last_insert_id.aspx)