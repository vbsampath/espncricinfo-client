import { EspnCricinfoClient } from "espncricinfo"

const espnCricinfoClient = new EspnCricinfoClient({})

// **************
// Summary
// **************

// Cricket Summary
const summary = await espnCricinfoClient.summary.getSummary()
console.log(`summary ${JSON.stringify(summary)}`)

// Peek at Matches 
const matchIds = await espnCricinfoClient.summary.getMatchIds()
console.log(`matchIds \n${JSON.stringify(matchIds)}`)


// **************
// Match
// **************

// Match Information
const match = await espnCricinfoClient.match.getMatch(1495281)
console.log(`espnCricinfoClient.match ${JSON.stringify(espnCricinfoClient.match)}`)

// Over Details
// let match
let overDetailsParams = {
    matchId: (match)?.matchId || 1495281,
    seriesId: (match)?.seriesId || 8043,
    dataType: "comments", // options - details, comments; default - details
    overNumber: 5 // specify the over number in number format
}
const details = await espnCricinfoClient.match.getOverDetails(overDetailsParams)
console.log(`details ${JSON.stringify(details)}`)

// Match Summary, Rosters, Venue, Fall of Wickets
// let match
let summaryParams = {
    matchId: (match)?.matchId || 1495281,
    seriesId: (match)?.seriesId || 8043,
    dataType: "venue", // options - summary, rosters, venue, fow
    // innings: 1 // specify the innings in number format, possible are 1,2,3,4; innings is required only in fow
}

let matchSummary = await espnCricinfoClient.match.getMatchSummary(summaryParams)
console.log(`matchSummary ${JSON.stringify(matchSummary)}`)

// Player In Team or not for a match
let inTeamForMatch = await espnCricinfoClient.match.inTeamForMatch(501011, 1495281)
console.log(`inTeamForMatch ${JSON.stringify(inTeamForMatch)}`)

// Stats for Match
let matchStatsParams = {
    matchId: 1495281,
    seriesId: 8043,
    statType: "batting" // options - batting, bowling
}
let stats = await espnCricinfoClient.match.statsForMatch(matchStatsParams)
console.log(`stats ${JSON.stringify(stats)}`)


// **************
// Player
// **************

// Player Information
let player = await espnCricinfoClient.player.getPlayer(501011)
console.log(`player ${JSON.stringify(player)}`)

// Player Major teams
let teams = await espnCricinfoClient.player.getTeams(501011)
console.log(`teams ${JSON.stringify(teams)}`)

// Player Stats
let playerStats = await espnCricinfoClient.player.getPlayerStats(501011)
console.log(`playerStats ${JSON.stringify(playerStats)}`)


// **************
// Series
// **************

// Series Summary
let series = await espnCricinfoClient.series.getSeries(8043)
console.log(`series ${JSON.stringify(series)}`)

// Series Details
let seasonsParams = {
    seriesId: 8043,
    page: 1
}
let seasons = await espnCricinfoClient.series.getSeasons(seasonsParams)
console.log(`seasons ${JSON.stringify(seasons)}`)

// Series Events
let eventsParams = {
    seriesId: 8043,
    page: 1
}
let events = await espnCricinfoClient.series.getEvents(eventsParams)
console.log(`events ${JSON.stringify(events)}`)