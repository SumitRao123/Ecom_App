FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app

copy pom.xml .
RUN mvn dependency:go-offline

COPY  src  ./src
RUN mvn clean package -Dskiptests

FROM openjdk:17-jdk-slim


WORKDIR /app

COPY --from=build /app/target/Jayveer-0.0.1-SNAPSHOT.jar .

EXPOSE 9090

ENTRYPOINT ["java","-jar","/app/Jayveer-0.0.1-SNAPSHOT.jar"]