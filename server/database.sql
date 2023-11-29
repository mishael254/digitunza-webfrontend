CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    gender VARCHAR(50),
    age INTEGER,
    occupation VARCHAR(255),
    category VARCHAR(255),
    latitude NUMERIC,
    longitude NUMERIC,
    location VARCHAR(255),
    project INTEGER,
    "group" INTEGER
);
CREATE TABLE deployments (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    deployment INTEGER,
    deploymentDate TIMESTAMP WITH TIME ZONE,
    project INTEGER
);
CREATE TABLE statLogs (
    id SERIAL PRIMARY KEY,
    project VARCHAR(255),
    partner VARCHAR(255),
    Subcategory VARCHAR(255),
    levelThreeCategory VARCHAR(255),
    levelFourCategory VARCHAR(255),
    levelFiveCategory VARCHAR(255),
    levelSixCategory VARCHAR(255),
    Country VARCHAR(255),
    County VARCHAR(255),
    Zone VARCHAR(255),
    StartDate DATE,
    EndDate DATE,
    GroupNo INTEGER,
    Mode VARCHAR(255),
    channel VARCHAR(255),
    messageTitle VARCHAR(255),
    Topic VARCHAR(255),
    SubTopic VARCHAR(255),
    Length INTEGER,
    Type VARCHAR(255),
    language VARCHAR(255),
    dateuploaded TIMESTAMP WITH TIME ZONE,
    "group" VARCHAR(255),
    Gender VARCHAR(255),
    Age VARCHAR(255), 
    Occupation VARCHAR(255),
    Category VARCHAR(255),
    latitude NUMERIC, 
    longitude NUMERIC 
);
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    messageTitle VARCHAR(255),
    messageTopic VARCHAR(255),
    messageSubTopic VARCHAR(255),
    messageDescription TEXT,
    messageType VARCHAR(50),
    messagefile TEXT,
    dateuploaded TIMESTAMP WITH TIME ZONE,
    playlist INTEGER,
    language INTEGER
);
CREATE TABLE IF NOT EXISTS lessons (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    playlist INTEGER,
    deployment INTEGER
);

