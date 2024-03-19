// Function to merge player and team data
export const mergePlayerAndTeamData = (playerData, teamData) => {
  try {
    const mergedDataByDate = {};

    // Merge player data into mergedDataByDate
    playerData.forEach((player) => {
      const date = player.date;
      if (!mergedDataByDate[date]) {
        mergedDataByDate[date] = {
          date: date,
          player: player.player_load,
          session_type: player.session_type,
        };
      } else {
        mergedDataByDate[date].player = player.player_load;
        mergedDataByDate[date].session_type = player.session_type;
      }
    });

    // Merge team data into mergedDataByDate
    teamData.forEach((team) => {
      const date = team.date;
      if (!mergedDataByDate[date]) {
        mergedDataByDate[date] = {
          date: date,
          team: team.player_load,
          session_type: team.session_type,
        };
      } else {
        mergedDataByDate[date].team = team.player_load;
        mergedDataByDate[date].session_type = team.session_type;
      }
    });

    // Convert mergedDataByDate object to array
    const mergedData = Object.values(mergedDataByDate);

    // Reverse the mergedData array
    const reversedMergedData = mergedData.reverse();

    return reversedMergedData;
  } catch (error) {
    console.error("Error merging player and team data:", error);
    return null;
  }
};

// Function to format time stamp
export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  return `${formattedDate} ${formattedTime}`;
};

// Function to format array data
export const formatArrData = (value) => {
  return value.map((value) => value.replace(/_/g, " ")).join(", ");
};

// Function to format string data
export const formatStrData = (value) => {
  return value.replace(/_/g, " ");
};
