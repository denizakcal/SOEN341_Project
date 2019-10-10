-- CREATE TABLE IF NOT EXISTS Channels(channelId SERIAL /*INT*/, messageContent TEXT, messageNumber INT, messageTimestamp TIMESTAMP, userIdOfMessage INT, PRIMARY KEY(channelId, messageNumber));

-- CREATE TABLE IF NOT EXISTS Users(userId SERIAL /*INT*/, firstName TEXT, lastName TEXT, PRIMARY KEY(userId));

-- CREATE TABLE IF NOT EXISTS userChannelCombinations(channelId INT, userId INT, PRIMARY KEY(channelId, userId));

DROP TABLE IF EXISTS Users;

DROP TABLE IF EXISTS Messages;

DROP TABLE IF EXISTS Channels;

CREATE TABLE IF NOT EXISTS Users(userId SERIAL /*INT*/, userAccountName TEXT, userAccountPassword TEXT, firstName TEXT, lastName TEXT, PRIMARY KEY(userId)); -- Make password storing better later.

CREATE TABLE IF NOT EXISTS Channels(channelId SERIAL /*INT*/, channelName TEXT, PRIMARY KEY(channelId));

-- ADD THIS LATER!!!: CREATE TABLE IF NOT EXISTS UserChannelAssociations(userId INT, channelId INT, PRIMARY KEY(userId,channelId));

CREATE TABLE IF NOT EXISTS Messages(messageContent TEXT, timestamp TIMESTAMP, messageNumberInChannel INT, userIdOfAuthorOfThatMessage INT, channelId INT, PRIMARY KEY(messageNumberInChannel, userIdOfAuthorOfThatMessage, channelId));