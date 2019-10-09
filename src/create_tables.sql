CREATE TABLE IF NOT EXISTS Channels(channelId SERIAL /*INT*/, messageContent TEXT, messageNumber INT, messageTimestamp TIMESTAMP, userIdOfMessage INT, PRIMARY KEY(channelId, messageNumber));

CREATE TABLE IF NOT EXISTS Users(userId SERIAL /*INT*/, firstName TEXT, lastName TEXT, PRIMARY KEY(userId));

CREATE TABLE IF NOT EXISTS userChannelCombinations(channelId INT, userId INT, PRIMARY KEY(channelId, userId));