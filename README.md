# 🎉 5 Seconds Game
A 5 seconds game built with java, spring-boot, mysql and react.

## 📋 Table of Content
* [Preview](#-preview)
* [General Information](#-general-information)
* [Technologies](#-technologies)
* [Prerequisites](#%EF%B8%8F-prerequisites)
* [How to Run](#-how-to-run)
* [License](#-license)
* [Reports](#-reports)

## 🔍 Preview
https://github.com/piotrkowalczykk/5-seconds-game/assets/104227126/f798e53e-834d-41b5-8ea9-6b2f31ff0b82


## 📢 General Information
Each player takes a turn in the hot seat and must answer a question such as "Name 3 things you can paint" or "Name 3 yellow foods." They then have five seconds to come up with three answers and say them all out loud before the time runs out.

## 🤖 Technologies
![Static Badge](https://img.shields.io/badge/Java-ff9100?style=for-the-badge&logo=coffeescript&labelColor=black)
![Static Badge](https://img.shields.io/badge/Spring_Boot-%236DB33F?style=for-the-badge&logo=springboot&logoColor=white&labelColor=black)
![Static Badge](https://img.shields.io/badge/react-%2361DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=black)
![Static Badge](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white&labelColor=black)
![Static Badge](https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white&labelColor=black)
![Static Badge](https://img.shields.io/badge/css-%231572B6?style=for-the-badge&logo=css3&logoColor=white&labelColor=black)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=black)

## 🛠️ Prerequisites
Ensure you have the following installed on your machine:

* Java Development Kit (JDK) 8 or higher
* Node.js and npm
* MySQL Server

## ⚙ How to Run
#### Clone repository
```bash
git clone https://github.com/piotrkowalczykk/to-do-app.git
```

#### Create a MySQL database
```bash
CREATE DATABASE your_database_name;
```
### Create an array called `question`
```bash
USE your_database_name;
```
```bash
CREATE TABLE question (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);
```

#### Import data to table
```bash
LOAD DATA INFILE 'your_path_to_csv_file'
INTO TABLE question
FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 0 ROWS
(@dummy, description);
```


#### Configure the database connection
Open /backend/src/main/resources/application.properties
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_name
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=none
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.generate-ddl=true
spring.jpa.show-sql=true
```

#### Build and run the backend
```bash
./mvnw spring-boot:run
```
The backend should now be running on http://localhost:8080

#### Install dependencies
Change directory to /frontend
```bash
npm install
```

#### Run the Development Server
```bash
npm run dev
```
The frontend should now be running on http://localhost:5173

## 🧾 License
Available under the [MIT license](https://github.com/piotrkowalczykk/5-seconds-game/blob/main/LICENSE)

## ⚠ Reports
To report a bug or request a feature, please file an [issues](https://github.com/piotrkowalczykk/5-seconds-game/issues)
