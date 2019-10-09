-- CREATE TABLE IF NOT EXISTS Channels(channelId SERIAL /*INT*/, messageContent TEXT, messageNumber INT, messageTimestamp TIMESTAMP, userIdOfMessage INT, PRIMARY KEY(channelId, messageNumber));

-- CREATE TABLE IF NOT EXISTS Users(userId SERIAL /*INT*/, firstName TEXT, lastName TEXT, PRIMARY KEY(userId));

-- CREATE TABLE IF NOT EXISTS userChannelCombinations(channelId INT, userId INT, PRIMARY KEY(channelId, userId));

CREATE TABLE IF NOT EXISTS Users(userId SERIAL /*INT*/, userAccountName TEXT, firstName TEXT, lastName TEXT, PRIMARY KEY(userId));

CREATE TABLE IF NOT EXISTS Messages(messageContent TEXT, timestamp TIMESTAMP, messageNumberInChannel INT, userIdOfAuthorOfThatMessage INT, channelId INT, PRIMARY KEY(messageNumberInChannel, userIdOfAuthorOfThatMessage, channelId));

CREATE TABLE IF NOT EXISTS Channels(channelId SERIAL /*INT*/, channelName TEXT, PRIMARY KEY(channelId));